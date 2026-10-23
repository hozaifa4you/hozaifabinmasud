import { Metadata } from 'next';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

import { BreadcrumbNav } from '@/components/breadcrumb';
import { DirectionalPage } from '@/components/directional-page';
import { SectionHeading } from '@/components/home/section-heading';
import { HiringClose } from '@/components/projects/hiring-close';
import { hasTechIcon, TechIcon } from '@/components/tech-icon';
import { ABOUT_INTRO, capabilities } from '@/lib/data/about';
import { hasProjectDetails } from '@/lib/data/project-details';
import { projects, smallProjects } from '@/lib/data/projects';
import { skillGroups } from '@/lib/data/skills';
import {
   getCurrentWork,
   getExperienceYears,
   getFirstWorkYear,
   normalizeTech,
} from '@/lib/profile';

export const metadata: Metadata = {
   title: 'About me',
   alternates: { canonical: '/about-me' },
   description:
      'Who Hozaifa is, what he builds with the projects that prove it, and every technology he works with.',
};

// Experience years and the current role are computed from dates
export const revalidate = 86400;

// A proof link opens the case study, or the directory with that row open
const proofHref = (slug: string) =>
   hasProjectDetails(slug) ? `/projects/${slug}` : `/projects#${slug}`;

// How many listed projects used each technology
const getUsage = () => {
   const usage = new Map<string, number>();
   const stacks = [
      ...projects.map((project) => project.technologies),
      ...smallProjects.map((project) => project.tags),
   ];
   for (const stack of stacks) {
      for (const name of new Set(stack.map(normalizeTech))) {
         usage.set(name, (usage.get(name) ?? 0) + 1);
      }
   }
   return usage;
};

const AboutMePage = () => {
   const currentWork = getCurrentWork();
   const usage = getUsage();
   const knownSlugs = new Set(projects.map((project) => project.slug));

   return (
      <DirectionalPage>
         <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
            <header>
               <BreadcrumbNav
                  items={[
                     {
                        href: '/#about',
                        title: 'Workspace',
                        transitionTypes: ['nav-back'],
                     },
                     { href: '/about-me', title: 'about-me' },
                  ]}
               />
               <h1 className="mt-5 text-display font-semibold text-strong sm:mt-6">
                  About me
               </h1>
               <p className="mt-4 max-w-[60ch] text-lead text-pretty text-strong">
                  {ABOUT_INTRO}
               </p>

               <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-y border-line py-2.5 font-mono text-ui sm:mt-8">
                  <div>
                     <dt className="sr-only">Availability</dt>
                     <dd className="flex items-center gap-2 text-success">
                        <span
                           aria-hidden
                           className="size-2 rounded-full bg-success"
                        />
                        Open to full-time roles
                     </dd>
                  </div>
                  <div>
                     <dt className="sr-only">Experience</dt>
                     <dd>{getExperienceYears()}+ yrs experience</dd>
                  </div>
                  <div>
                     <dt className="sr-only">Working since</dt>
                     <dd>shipping since {getFirstWorkYear()}</dd>
                  </div>
                  {currentWork && (
                     <div>
                        <dt className="sr-only">Current role</dt>
                        <dd>
                           {currentWork.title} at {currentWork.company}
                        </dd>
                     </div>
                  )}
                  <div>
                     <dt className="sr-only">Location</dt>
                     <dd>Bangladesh · GMT+6</dd>
                  </div>
               </dl>
            </header>

            {/* Kinds of work, each with the projects that prove it */}
            <section
               aria-labelledby="builds-title"
               className="depth-in mt-14 lg:mt-20"
            >
               <SectionHeading
                  id="builds-title"
                  file="builds"
                  title="What I build"
               />
               <ul className="mt-8">
                  {capabilities.map((capability) => {
                     const proof = capability.projects.filter((slug) =>
                        knownSlugs.has(slug),
                     );
                     return (
                        <li
                           key={capability.title}
                           className="grid gap-x-8 gap-y-3 border-b border-line py-6 first:border-t lg:grid-cols-[17rem_minmax(0,1fr)_12rem]"
                        >
                           <h3 className="text-xl leading-snug font-semibold text-balance text-strong">
                              {capability.title}
                           </h3>
                           <div>
                              <p className="max-w-[60ch] text-body text-pretty">
                                 {capability.summary}
                              </p>
                              <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-ui">
                                 <span className="sr-only">Projects: </span>
                                 {proof.length > 0 ? (
                                    proof.map((slug) => (
                                       <Link
                                          key={slug}
                                          href={proofHref(slug)}
                                          className="group inline-flex items-center gap-1 text-strong underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                                       >
                                          {slug}
                                          <LuArrowRight
                                             aria-hidden
                                             className="size-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
                                          />
                                       </Link>
                                    ))
                                 ) : (
                                    <span className="text-muted">
                                       No public project yet
                                    </span>
                                 )}
                              </p>
                           </div>
                           <ul
                              aria-label="Built with"
                              className="flex flex-wrap content-start gap-x-4 gap-y-2 font-mono text-ui text-text lg:flex-col lg:pt-1"
                           >
                              {capability.stack.map((name) => (
                                 <li
                                    key={name}
                                    className="inline-flex items-center gap-2"
                                 >
                                    <TechIcon name={name} className="size-4" />
                                    {name}
                                 </li>
                              ))}
                           </ul>
                        </li>
                     );
                  })}
               </ul>
            </section>

            {/* The full technology list, each one linked to its projects */}
            <section
               aria-labelledby="stack-title"
               className="depth-in mt-16 lg:mt-24"
            >
               <SectionHeading
                  id="stack-title"
                  file="stack"
                  title="Technologies"
                  link={{ href: '/projects', label: 'All projects' }}
               />
               <dl className="mt-8 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
                  {skillGroups.map((group) => (
                     <div
                        key={group.key}
                        className="border-r border-b border-line p-5 sm:p-6"
                     >
                        <dt className="font-mono text-sm text-primary-soft">
                           {group.key}
                        </dt>
                        <dd className="mt-3">
                           <ul className="flex flex-col gap-2.5 text-control">
                              {group.items.map((name) => {
                                 const count = usage.get(name) ?? 0;
                                 return (
                                    <li
                                       key={name}
                                       className="flex items-center gap-2.5"
                                    >
                                       {/* Names without a logo keep the column */}
                                       {hasTechIcon(name) ? (
                                          <TechIcon name={name} />
                                       ) : (
                                          <span
                                             aria-hidden
                                             className="size-5"
                                          />
                                       )}
                                       {count > 0 ? (
                                          <Link
                                             href={`/projects?stack=${encodeURIComponent(name)}`}
                                             className="group inline-flex items-baseline gap-2 text-strong transition-colors hover:text-info"
                                          >
                                             <span className="underline decoration-info/50 underline-offset-4 group-hover:decoration-info">
                                                {name}
                                             </span>
                                             <span className="font-mono text-xs text-muted">
                                                {count}
                                                <span className="sr-only">
                                                   {count === 1
                                                      ? ' project'
                                                      : ' projects'}
                                                </span>
                                             </span>
                                          </Link>
                                       ) : (
                                          <span className="text-strong">
                                             {name}
                                          </span>
                                       )}
                                    </li>
                                 );
                              })}
                           </ul>
                        </dd>
                     </div>
                  ))}
               </dl>
            </section>

            <HiringClose line="I build web products end to end, from the API to the interface." />
         </article>
      </DirectionalPage>
   );
};

export default AboutMePage;
