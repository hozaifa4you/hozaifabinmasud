import {
   LuArrowUpRight,
   LuDownload,
   LuFileText,
   LuGitBranch,
   LuMail,
} from 'react-icons/lu';

import { CopyEmailButton } from '@/components/home/copy-email-button';
import {
   ExplorerEntry,
   WorkspaceExplorer,
} from '@/components/home/workspace-explorer';
import { buttonVariants } from '@/components/ui/button';
import { appConfig } from '@/config/app.config';
import { projects } from '@/lib/data/projects';
import { getSocialLinks, RESUME_PDF } from '@/lib/links';
import {
   getCurrentWork,
   getExperienceYears,
   getProjectCount,
} from '@/lib/profile';
import { cn } from '@/lib/utils';

const explorer: ExplorerEntry[] = [
   { name: 'README.md', href: '#home', icon: 'doc', sectionId: 'home' },
   {
      name: 'projects/',
      href: '#projects',
      icon: 'folder',
      sectionId: 'projects',
      children: projects.slice(0, 4).map((project) => ({
         name: `${project.slug}.md`,
         href: `#project-${project.slug}`,
      })),
   },
   { name: 'work.log', href: '#work', icon: 'doc', sectionId: 'work' },
   { name: 'stack', href: '#stack', icon: 'data', sectionId: 'stack' },
   { name: 'about.md', href: '#about', icon: 'doc', sectionId: 'about' },
   { name: 'contact', href: '#contact', icon: 'send', sectionId: 'contact' },
   { name: 'resume.pdf', href: RESUME_PDF, icon: 'download', download: true },
];

// Staggers the one-time "window assembles" entrance
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const WorkspaceHero = () => {
   const name = appConfig.APP_NAME_SHORT;
   const email = appConfig.EMAIL;
   const currentWork = getCurrentWork();
   const socials = getSocialLinks().slice(0, 2);
   const workspace = appConfig.NEXT_PUBLIC_FIRST_NAME?.toLowerCase() ?? 'dev';

   return (
      <section
         id="home"
         aria-labelledby="hero-title"
         className="container pt-6 pb-14 lg:pt-10 lg:pb-20"
      >
         <div className="animate-rise border border-line bg-bg-main">
            {/* Title bar */}
            <div className="flex h-10 items-center justify-between gap-4 border-b border-line bg-bg-sunken px-4 font-mono text-xs text-muted">
               <span>~/{workspace}</span>
               <span className="inline-flex items-center gap-1.5">
                  <LuGitBranch aria-hidden className="size-3.5" />
                  main
               </span>
            </div>

            <div className="grid lg:grid-cols-[236px_minmax(0,1fr)]">
               {/* Explorer: doubles as in-page navigation on large screens */}
               <WorkspaceExplorer entries={explorer} />

               <div className="min-w-0">
                  {/* Tab strip */}
                  <div className="flex h-10 border-b border-line bg-bg-sunken font-mono text-ui">
                     <span className="-mb-px flex items-center gap-2 border-r border-line bg-bg-main px-4 text-strong">
                        <LuFileText
                           aria-hidden
                           className="size-4 text-primary"
                        />
                        README.md
                     </span>
                  </div>

                  {/* README preview */}
                  <div className="px-5 py-10 sm:px-10 lg:px-14 lg:py-16">
                     <h1
                        id="hero-title"
                        className="animate-rise text-display font-semibold text-balance text-strong"
                        style={delay(180)}
                     >
                        {name}
                     </h1>
                     <p
                        className="mt-5 max-w-[32ch] animate-rise text-lead text-balance text-text"
                        style={delay(260)}
                     >
                        Full-stack developer who builds web apps end to end and
                        ships AI features in production.
                     </p>
                     <p
                        className="mt-5 max-w-[62ch] animate-rise text-base leading-relaxed text-pretty text-muted sm:text-body"
                        style={delay(320)}
                     >
                        React and Next.js on the front, NestJS, Laravel and
                        Node.js behind them, and OpenAI with LangChain where a
                        product needs to understand language.
                        {currentWork && (
                           <>
                              {' '}
                              Currently building at{' '}
                              <a
                                 href={`https://${currentWork.website}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-text underline decoration-info/50 transition-colors hover:text-info hover:decoration-info"
                              >
                                 {currentWork.company}
                              </a>
                              .
                           </>
                        )}
                     </p>

                     <div
                        className="mt-9 flex animate-rise flex-wrap items-center gap-3"
                        style={delay(400)}
                     >
                        <a
                           href={`mailto:${email}`}
                           className={cn(
                              buttonVariants({
                                 variant: 'primary',
                                 size: 'lg',
                              }),
                              'sm:h-12 sm:px-6',
                           )}
                        >
                           <LuMail aria-hidden />
                           Email me
                        </a>
                        <a
                           href={RESUME_PDF}
                           download
                           className={cn(
                              buttonVariants({
                                 variant: 'default',
                                 size: 'lg',
                              }),
                              'sm:h-12 sm:px-6',
                           )}
                        >
                           <LuDownload aria-hidden />
                           Resume.pdf
                        </a>
                        <CopyEmailButton
                           email={email}
                           className="max-sm:-ml-5"
                        />
                     </div>

                     <ul
                        className="mt-8 flex animate-rise flex-wrap gap-x-6 gap-y-2 text-sm font-medium"
                        style={delay(460)}
                     >
                        {socials.map((social) => (
                           <li key={social.name}>
                              <a
                                 href={social.href}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="group inline-flex items-center gap-1 text-text transition-colors hover:text-strong"
                              >
                                 {social.name}
                                 <LuArrowUpRight
                                    aria-hidden
                                    className="size-3.5 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                 />
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            {/* Status bar */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-line bg-bg-sunken px-4 py-2 font-mono text-xs text-text">
               <span className="inline-flex items-center gap-2 text-success">
                  <span
                     aria-hidden
                     className="size-2 rounded-full bg-success"
                  />
                  Open to full-time roles
               </span>
               <span>{getExperienceYears()}+ yrs experience</span>
               <span>{getProjectCount()} projects</span>
               <span className="sm:ml-auto">Bangladesh · GMT+6</span>
            </div>
         </div>
      </section>
   );
};

export { WorkspaceHero };
