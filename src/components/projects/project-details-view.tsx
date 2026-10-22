'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState, ViewTransition } from 'react';
import {
   LuArrowLeft,
   LuArrowRight,
   LuArrowUpRight,
   LuGithub,
   LuMaximize2,
} from 'react-icons/lu';

import { BreadcrumbItem, BreadcrumbNav } from '@/components/breadcrumb';
import { HiringClose } from '@/components/projects/hiring-close';
import { Screen, ScreenViewer } from '@/components/projects/screen-viewer';
import { TechIcon } from '@/components/tech-icon';
import { buttonVariants } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/use-active-section';
import { ProjectDetailsType } from '@/lib/data/project-details';
import { cn } from '@/lib/utils';

export type NextProject = {
   title: string;
   href: string;
   isCaseStudy: boolean;
};

const STATUS_LABEL: Record<ProjectDetailsType['status']['type'], string> = {
   production: 'In production',
   completed: 'Completed',
   'in-progress': 'In development',
   'on-hold': 'On hold',
   archived: 'Archived',
};

const STACK_ORDER = [
   'Frontend',
   'Backend',
   'Database',
   'Real-time',
   'DevOps',
   'Cloud',
];

// Capture sizes of the screenshots; they reserve each box before it loads
const MAIN_SHOT = { width: 2864, height: 1324 };
const SCREEN_SHOT = { width: 2864, height: 1398 };

const hostOf = (url: string) => new URL(url).host.replace(/^www\./, '');
const plural = (count: number, word: string) =>
   `${count} ${word}${count === 1 ? '' : 's'}`;

type CommitProps = {
   id: string;
   message: string;
   /** A `git log --stat` style line: what the commit touched, in numbers */
   stat: string;
   isHead?: boolean;
   isActive: boolean;
   children: ReactNode;
};

const HeadPill = ({ className }: { className?: string }) => (
   <span
      className={cn(
         'border border-success/40 bg-success/10 px-1.5 font-mono text-xs leading-5 text-success',
         className,
      )}
   >
      HEAD
   </span>
);

/** One entry on the rail: its message, what it touched, what it holds */
const Commit = ({
   id,
   message,
   stat,
   isHead,
   isActive,
   children,
}: CommitProps) => (
   <li
      id={id}
      className="group relative grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 pb-16 last:pb-0 sm:gap-x-7 lg:pb-24"
   >
      <span
         aria-hidden
         className="absolute top-3 bottom-0 left-[9.5px] w-px bg-line group-last:hidden"
      />
      {/* HEAD stays green; the commit being read lights orchid */}
      <span
         aria-hidden
         className={cn(
            'relative mt-1.5 size-5 rounded-full border-[5px] border-bg-main ring-1 transition-colors duration-300 ease-out-expo',
            isHead
               ? 'bg-success ring-success/50'
               : isActive
                 ? 'bg-primary ring-primary/60'
                 : 'bg-line-strong ring-line',
         )}
      />
      <div className="min-w-0">
         <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="text-xl leading-snug font-semibold text-balance text-strong sm:text-2xl">
               {message}
            </h2>
            {isHead && <HeadPill className="hidden sm:inline-block" />}
         </div>
         {/* On phones the pill joins the stat line instead of taking its own */}
         <p className="mt-1.5 flex flex-wrap items-center gap-x-2 font-mono text-sm text-muted">
            {isHead && <HeadPill className="sm:hidden" />}
            {stat}
         </p>
         <div className="mt-6">{children}</div>
      </div>
   </li>
);

/** Appears over a screenshot on hover and focus: it opens full size */
const ZoomHint = () => (
   <span
      aria-hidden
      className="absolute top-3 right-3 grid size-9 place-items-center border border-line-strong bg-bg-sunken text-strong opacity-0 transition-opacity duration-200 ease-out-expo group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
   >
      <LuMaximize2 className="size-4" />
   </span>
);

type ProjectDetailsViewProps = {
   project: ProjectDetailsType;
   nextProject?: NextProject;
};

const ProjectDetailsView = ({
   project,
   nextProject,
}: ProjectDetailsViewProps) => {
   const [viewerIndex, setViewerIndex] = useState<number | null>(null);

   const host = project.liveUrl ? hostOf(project.liveUrl) : null;
   const screenCount = project.additionalImages.length + 1;
   // The main image is screen 0, so the other screens open at index + 1
   const screens: Screen[] = [
      { path: project.mainImage, caption: undefined },
      ...project.additionalImages,
   ].map(({ path, caption }, index) => ({
      path,
      caption,
      alt: caption ?? `${project.name}, screen ${index + 1} of ${screenCount}`,
   }));

   const stack = STACK_ORDER.map((category) => ({
      category,
      items: project.technologies
         .filter((tech) => tech.category === category)
         .map((tech) => tech.name),
   })).filter((group) => group.items.length > 0);
   // The first technology of the first two groups names the stack commit
   const leadTech = stack
      .slice(0, 2)
      .map((group) => group.items[0])
      .join(' and ');
   const otherTechCount =
      project.technologies.length - Math.min(stack.length, 2);
   const team = project.teamMembers ?? [];

   const commitIds = [
      'commit-head',
      project.additionalImages.length > 0 && 'commit-screens',
      project.features.length > 0 && 'commit-features',
      stack.length > 0 && 'commit-stack',
      team.length > 0 && 'commit-team',
   ].filter((id): id is string => Boolean(id));
   const activeId = useActiveSection(commitIds, true);

   const breadcrumbItems: BreadcrumbItem[] = [
      // Back to the homepage explorer, sliding the other way
      { href: '/#projects', title: 'Workspace', transitionTypes: ['nav-back'] },
      { href: '/projects', title: 'Projects', transitionTypes: ['nav-back'] },
      { href: `/projects/${project.slug}`, title: project.slug },
   ];

   return (
      <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
         <header>
            <BreadcrumbNav items={breadcrumbItems} />

            <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
               <div className="min-w-0">
                  <h1 className="text-display font-semibold text-balance text-strong">
                     {project.name}
                  </h1>
                  <p className="mt-3 text-lead text-pretty">
                     {project.tagline}
                  </p>
               </div>
               {(project.liveUrl || project.githubUrl) && (
                  <div className="flex shrink-0 flex-wrap gap-3">
                     {project.liveUrl && (
                        <a
                           href={project.liveUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={cn(
                              buttonVariants({
                                 variant: 'primary',
                                 size: 'lg',
                              }),
                              'sm:h-12 sm:px-6',
                           )}
                        >
                           Visit live site
                           <LuArrowUpRight aria-hidden />
                           <span className="sr-only">(opens in a new tab)</span>
                        </a>
                     )}
                     {project.githubUrl && (
                        <a
                           href={project.githubUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={cn(
                              buttonVariants({
                                 variant: 'default',
                                 size: 'lg',
                              }),
                              'sm:h-12 sm:px-6',
                           )}
                        >
                           <LuGithub aria-hidden />
                           Source code
                           <span className="sr-only">(opens in a new tab)</span>
                        </a>
                     )}
                  </div>
               )}
            </div>

            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-y border-line py-2.5 font-mono text-ui sm:mt-8">
               <div className="flex items-center gap-2 text-success">
                  <dt className="sr-only">Status</dt>
                  <span
                     aria-hidden
                     className="size-2 rounded-full bg-success"
                  />
                  <dd>{STATUS_LABEL[project.status.type]}</dd>
               </div>
               <div>
                  <dt className="sr-only">Role</dt>
                  <dd>{project.role}</dd>
               </div>
               <div>
                  <dt className="sr-only">Duration</dt>
                  <dd>{project.duration}</dd>
               </div>
               {project.teamSize && (
                  <div>
                     <dt className="sr-only">Team</dt>
                     <dd>{project.teamSize}</dd>
                  </div>
               )}
               {project.company && (
                  <div>
                     <dt className="sr-only">Company</dt>
                     <dd>
                        {project.company.name}, {project.company.location}
                     </dd>
                  </div>
               )}
            </dl>
         </header>

         {/* The project as a git log, newest first: HEAD is the live product */}
         <ol aria-label="Project history" className="mt-10 sm:mt-12 lg:mt-14">
            <Commit
               id="commit-head"
               message={project.headline}
               stat={`main · ${STATUS_LABEL[project.status.type].toLowerCase()}`}
               isHead
               isActive={activeId === 'commit-head'}
            >
               <figure>
                  <div className="border border-line bg-bg-sunken">
                     <div className="flex h-9 items-center gap-2 border-b border-line px-3 font-mono text-xs text-muted">
                        <span
                           aria-hidden
                           className="size-1.5 rounded-full bg-success"
                        />
                        {host ?? project.slug}
                     </div>
                     {/* Shared element: the homepage explorer's screenshot morphs into this */}
                     <ViewTransition
                        name={`project-shot-${project.slug}`}
                        share="morph"
                        default="none"
                     >
                        <button
                           type="button"
                           onClick={() => setViewerIndex(0)}
                           className="group/shot relative block w-full cursor-zoom-in"
                        >
                           <Image
                              src={screens[0].path}
                              alt={screens[0].alt}
                              width={MAIN_SHOT.width}
                              height={MAIN_SHOT.height}
                              sizes="(min-width: 1120px) 1072px, 100vw"
                              preload
                              className="h-auto w-full"
                           />
                           <ZoomHint />
                           <span className="sr-only">Open full size</span>
                        </button>
                     </ViewTransition>
                  </div>
                  <figcaption className="mt-6 max-w-[65ch] text-body text-pretty">
                     {project.description}
                  </figcaption>
               </figure>
            </Commit>

            {project.additionalImages.length > 0 && (
               <Commit
                  id="commit-screens"
                  message={`Add ${project.additionalImages.length} screens from the ${host ? 'live ' : ''}product`}
                  stat={`screens/ · ${plural(project.additionalImages.length, 'file')}`}
                  isActive={activeId === 'commit-screens'}
               >
                  {/* One screen per row, each with room for its caption */}
                  <ol className="space-y-10 sm:space-y-14">
                     {screens.slice(1).map((screen, index) => (
                        <li key={screen.path}>
                           <figure>
                              <button
                                 type="button"
                                 onClick={() => setViewerIndex(index + 1)}
                                 className="group/shot relative block w-full cursor-zoom-in border border-line transition-colors duration-200 ease-out-expo hover:border-line-strong"
                              >
                                 <Image
                                    src={screen.path}
                                    alt={screen.alt}
                                    width={SCREEN_SHOT.width}
                                    height={SCREEN_SHOT.height}
                                    sizes="(min-width: 1120px) 1072px, 100vw"
                                    className="scroll-wipe h-auto w-full"
                                 />
                                 <ZoomHint />
                                 <span className="sr-only">Open full size</span>
                              </button>
                              {screen.caption && (
                                 <figcaption className="mt-4 max-w-[65ch] text-body text-pretty">
                                    {screen.caption}
                                 </figcaption>
                              )}
                           </figure>
                        </li>
                     ))}
                  </ol>
               </Commit>
            )}

            {project.features.length > 0 && (
               <Commit
                  id="commit-features"
                  message={`Ship ${project.features.length} features`}
                  stat={`features.md · ${plural(project.features.length, 'line')}`}
                  isActive={activeId === 'commit-features'}
               >
                  <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
                     {project.features.map((feature) => (
                        <li
                           key={feature}
                           className="border-b border-line py-3 text-body text-strong"
                        >
                           {feature}
                        </li>
                     ))}
                  </ul>
               </Commit>
            )}

            {stack.length > 0 && (
               <Commit
                  id="commit-stack"
                  message={`Build with ${leadTech}${otherTechCount > 0 ? `, plus ${otherTechCount} more` : ''}`}
                  stat={`stack · ${plural(project.technologies.length, 'package')}`}
                  isActive={activeId === 'commit-stack'}
               >
                  <dl className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
                     {stack.map((group) => (
                        <div
                           key={group.category}
                           className="border-r border-b border-line p-5 transition-colors duration-300 ease-out-expo hover:bg-bg-raised sm:last:odd:col-span-2 lg:last:odd:col-span-1"
                        >
                           <dt className="font-mono text-sm text-primary-soft">
                              {group.category.toLowerCase()}
                           </dt>
                           <dd className="mt-3">
                              <ul className="flex flex-col gap-2.5 text-control text-strong">
                                 {group.items.map((item) => (
                                    <li
                                       key={item}
                                       className="flex items-center gap-2.5"
                                    >
                                       <TechIcon name={item} />
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                           </dd>
                        </div>
                     ))}
                  </dl>
               </Commit>
            )}

            {team.length > 0 && (
               <Commit
                  id="commit-team"
                  message={`Work in a team of ${team.length}${project.company ? ` at ${project.company.name}` : ''}`}
                  stat={`team · ${plural(team.length, 'author')}`}
                  isActive={activeId === 'commit-team'}
               >
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-10">
                     <ul aria-label="Team" className="border-t border-line">
                        {team.map((member) => (
                           <li
                              key={member.name}
                              className={cn(
                                 'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-b border-l px-3 py-3',
                                 member.isMe
                                    ? 'border-b-line border-l-primary bg-bg-raised'
                                    : 'border-b-line border-l-transparent',
                              )}
                           >
                              <span className="text-body font-medium text-strong">
                                 {member.name}
                                 {member.isMe && (
                                    <span className="ml-2 font-mono text-xs text-primary-soft">
                                       me
                                    </span>
                                 )}
                              </span>
                              <span className="text-control text-muted">
                                 {member.role}
                              </span>
                           </li>
                        ))}
                     </ul>

                     {project.company && (
                        <dl className="self-start border border-line bg-bg-sunken">
                           <div className="border-b border-line px-5 py-4">
                              <dt className="font-mono text-xs text-primary-soft">
                                 company
                              </dt>
                              <dd className="mt-1 text-control text-strong">
                                 {project.company.name}
                              </dd>
                           </div>
                           <div className="border-b border-line px-5 py-4 last:border-b-0">
                              <dt className="font-mono text-xs text-primary-soft">
                                 location
                              </dt>
                              <dd className="mt-1 text-control text-strong">
                                 {project.company.location}
                              </dd>
                           </div>
                           {project.company.website && (
                              <div className="px-5 py-4">
                                 <dt className="font-mono text-xs text-primary-soft">
                                    website
                                 </dt>
                                 <dd className="mt-1">
                                    <a
                                       href={project.company.website}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="group inline-flex items-center gap-1 text-control text-strong underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                                    >
                                       {hostOf(project.company.website)}
                                       <LuArrowUpRight
                                          aria-hidden
                                          className="size-4 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                       />
                                       <span className="sr-only">
                                          (opens in a new tab)
                                       </span>
                                    </a>
                                 </dd>
                              </div>
                           )}
                        </dl>
                     )}
                  </div>
               </Commit>
            )}
         </ol>

         <HiringClose line="I build web products like this end to end, from the API to the interface." />

         <nav
            aria-label="More projects"
            className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 font-mono text-sm"
         >
            <Link
               href="/#projects"
               transitionTypes={['nav-back']}
               className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-strong"
            >
               <LuArrowLeft
                  aria-hidden
                  className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-x-0.5"
               />
               Back to the workspace
            </Link>
            {nextProject && (
               <Link
                  href={nextProject.href}
                  transitionTypes={
                     nextProject.isCaseStudy ? ['nav-forward'] : ['nav-back']
                  }
                  className="group inline-flex items-center gap-2 text-muted transition-colors hover:text-strong"
               >
                  <span>
                     Next project:{' '}
                     <span className="text-strong">{nextProject.title}</span>
                  </span>
                  <LuArrowRight
                     aria-hidden
                     className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
                  />
               </Link>
            )}
         </nav>

         <ScreenViewer
            screens={screens}
            index={viewerIndex}
            onIndexChange={setViewerIndex}
            onClose={() => setViewerIndex(null)}
            label={project.name}
         />
      </article>
   );
};

export { ProjectDetailsView };
