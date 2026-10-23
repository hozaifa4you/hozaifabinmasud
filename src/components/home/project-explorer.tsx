'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
   KeyboardEvent,
   useEffect,
   useLayoutEffect,
   useRef,
   useState,
   ViewTransition,
} from 'react';
import {
   LuArrowRight,
   LuArrowUpRight,
   LuFileCode,
   LuImageOff,
} from 'react-icons/lu';

import { TiltSurface } from '@/components/tilt-surface';
import { buttonVariants } from '@/components/ui/button';
import type { ProjectView } from '@/lib/project-view';
import { cn } from '@/lib/utils';

export type ExplorerProject = ProjectView;

const STATUS = {
   live: { label: 'Live', text: 'text-success', dot: 'bg-success' },
   developing: {
      label: 'In development',
      text: 'text-warning',
      dot: 'bg-warning',
   },
   archive: { label: 'Archived', text: 'text-muted', dot: 'bg-muted' },
};

const ARROW_STEPS: Record<string, number> = {
   ArrowDown: 1,
   ArrowRight: 1,
   ArrowUp: -1,
   ArrowLeft: -1,
};

const ProjectExplorer = ({ projects }: { projects: ExplorerProject[] }) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
   const tablistRef = useRef<HTMLDivElement>(null);
   const indicatorRef = useRef<HTMLSpanElement>(null);
   const hasPlacedRef = useRef(false);
   const project = projects[selectedIndex];

   // The selection highlight glides to the chosen file: measured, then moved
   // with a transform so the tab text always stays above it
   useLayoutEffect(() => {
      const tablist = tablistRef.current;
      const indicator = indicatorRef.current;
      if (!tablist || !indicator) return;

      const place = (animate: boolean) => {
         const tab = tabRefs.current[selectedIndex];
         if (!tab) return;
         indicator.style.transition = animate ? '' : 'none';
         indicator.style.transform = `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`;
         indicator.style.width = `${tab.offsetWidth}px`;
         indicator.style.height = `${tab.offsetHeight}px`;

         // On the horizontal (mobile) strip, bring the chosen tab into view
         const overflow = tablist.scrollWidth > tablist.clientWidth;
         const left = tab.offsetLeft;
         const right = left + tab.offsetWidth;
         if (
            animate &&
            overflow &&
            (left < tablist.scrollLeft ||
               right > tablist.scrollLeft + tablist.clientWidth)
         ) {
            tablist.scrollTo({ left: left - 16, behavior: 'smooth' });
         }
      };

      place(hasPlacedRef.current);
      hasPlacedRef.current = true;

      // A ResizeObserver reports once on observe; skipping that report keeps
      // it from cancelling the glide. Real resizes re-place without motion
      let isFirstReport = true;
      const observer = new ResizeObserver(() => {
         if (isFirstReport) {
            isFirstReport = false;
            return;
         }
         place(false);
      });
      observer.observe(tablist);
      return () => observer.disconnect();
   }, [selectedIndex]);
   const status = STATUS[project.status];

   // Links like #project-case-pdf (from the hero explorer) open that project
   useEffect(() => {
      const syncFromHash = () => {
         const index = projects.findIndex(
            (item) => window.location.hash === `#project-${item.slug}`,
         );
         if (index >= 0) setSelectedIndex(index);
      };
      const frame = requestAnimationFrame(syncFromHash);
      window.addEventListener('hashchange', syncFromHash);
      return () => {
         cancelAnimationFrame(frame);
         window.removeEventListener('hashchange', syncFromHash);
      };
   }, [projects]);

   const select = (index: number, moveFocus = false) => {
      const next = (index + projects.length) % projects.length;
      setSelectedIndex(next);
      if (moveFocus) tabRefs.current[next]?.focus();
   };

   const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key in ARROW_STEPS) {
         event.preventDefault();
         select(selectedIndex + ARROW_STEPS[event.key], true);
      } else if (event.key === 'Home') {
         event.preventDefault();
         select(0, true);
      } else if (event.key === 'End') {
         event.preventDefault();
         select(projects.length - 1, true);
      }
   };

   return (
      <div className="mt-8 border border-line lg:grid lg:grid-cols-[264px_minmax(0,1fr)]">
         <div
            ref={tablistRef}
            role="tablist"
            aria-label="Projects"
            // relative: keeps the tabs' absolutely positioned sr-only text inside
            // the scroller, or it widens the whole page on mobile
            className="relative flex overflow-x-auto border-b border-line bg-bg-sunken lg:block lg:overflow-visible lg:border-r lg:border-b-0 lg:py-3"
         >
            <span
               ref={indicatorRef}
               aria-hidden
               className="pointer-events-none absolute top-0 left-0 bg-bg-main transition-[transform,width,height] duration-300 ease-out-expo before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-primary lg:bg-bg-raised lg:before:inset-x-auto lg:before:inset-y-0 lg:before:left-0 lg:before:h-auto lg:before:w-px"
            />
            {projects.map((item, index) => {
               const isSelected = index === selectedIndex;
               return (
                  <button
                     key={item.slug}
                     ref={(element) => {
                        tabRefs.current[index] = element;
                     }}
                     id={`project-${item.slug}`}
                     type="button"
                     role="tab"
                     aria-selected={isSelected}
                     aria-controls="project-panel"
                     tabIndex={isSelected ? 0 : -1}
                     onClick={() => select(index)}
                     onKeyDown={handleKeyDown}
                     className={cn(
                        'relative flex shrink-0 items-center gap-2.5 border-r border-line px-4 py-3 text-left font-mono text-ui transition-colors duration-200 lg:w-full lg:border-r-0 lg:py-2.5',
                        isSelected
                           ? 'text-strong'
                           : 'text-text hover:bg-bg-raised/50 hover:text-strong',
                     )}
                  >
                     <LuFileCode
                        aria-hidden
                        className={cn(
                           'size-4 shrink-0',
                           isSelected ? 'text-primary' : 'text-muted',
                        )}
                     />
                     <span className="truncate">{item.slug}.md</span>
                     <span
                        aria-hidden
                        className={cn(
                           'ml-auto size-1.5 shrink-0 rounded-full',
                           STATUS[item.status].dot,
                        )}
                     />
                     <span className="sr-only">
                        , {STATUS[item.status].label}
                     </span>
                  </button>
               );
            })}
         </div>

         {/* Keyed on the slug so the wipe replays on every selection */}
         <div
            key={project.slug}
            id="project-panel"
            role="tabpanel"
            aria-labelledby={`project-${project.slug}`}
            className="grid min-w-0 animate-wipe gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] md:gap-8"
         >
            {project.image ? (
               <ViewTransition
                  name={`project-shot-${project.slug}`}
                  share="morph"
                  default="none"
               >
                  {/* Swings open from its left edge as the pane wipes in, then
                      turns toward the pointer like a screen held in the hand */}
                  <TiltSurface max={6} depth={1100} className="self-start">
                     <div className="relative aspect-[33/20] origin-left animate-turn overflow-hidden border border-line bg-bg-sunken">
                        <Image
                           src={project.image}
                           alt={`Screenshot of ${project.title}`}
                           fill
                           sizes="(min-width: 768px) 380px, 100vw"
                           className="object-cover object-top"
                        />
                     </div>
                  </TiltSurface>
               </ViewTransition>
            ) : (
               <div className="flex aspect-[33/20] origin-left animate-turn flex-col items-center justify-center gap-2 self-start border border-dashed border-line-strong bg-bg-sunken px-6 text-center">
                  <LuImageOff aria-hidden className="size-6 text-muted" />
                  <p className="font-mono text-xs text-muted">
                     No public screenshot
                  </p>
               </div>
            )}

            <div className="min-w-0">
               <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-0.015em] text-strong">
                     {project.title}
                  </h3>
                  <span
                     className={cn(
                        'inline-flex items-center gap-2 font-mono text-xs',
                        status.text,
                     )}
                  >
                     <span
                        aria-hidden
                        className={cn('size-2 rounded-full', status.dot)}
                     />
                     {status.label}
                  </span>
               </div>
               {project.context && (
                  <p className="mt-1.5 text-sm text-muted">{project.context}</p>
               )}
               <p className="mt-4 max-w-[65ch] leading-relaxed text-pretty">
                  {project.description}
               </p>
               <ul
                  aria-label="Tech stack"
                  className="mt-5 flex flex-wrap gap-2"
               >
                  {project.technologies.map((tech) => (
                     <li
                        key={tech}
                        className="border border-line bg-bg-raised px-2 py-0.5 font-mono text-xs text-text"
                     >
                        {tech}
                     </li>
                  ))}
               </ul>

               {(project.caseStudyUrl ||
                  project.liveUrl ||
                  project.codeUrl) && (
                  <div className="mt-7 flex flex-wrap gap-3">
                     {project.caseStudyUrl && (
                        <Link
                           href={project.caseStudyUrl}
                           transitionTypes={['nav-forward']}
                           className={buttonVariants({ variant: 'primary' })}
                        >
                           Read case study
                           <LuArrowRight aria-hidden />
                        </Link>
                     )}
                     {project.liveUrl && (
                        <a
                           href={project.liveUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={buttonVariants({
                              variant: project.caseStudyUrl
                                 ? 'default'
                                 : 'primary',
                           })}
                        >
                           Visit live site
                           <LuArrowUpRight aria-hidden />
                           <span className="sr-only">(opens in a new tab)</span>
                        </a>
                     )}
                     {project.codeUrl && (
                        <a
                           href={project.codeUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={buttonVariants({ variant: 'ghost' })}
                        >
                           Source code
                           <LuArrowUpRight aria-hidden />
                           <span className="sr-only">(opens in a new tab)</span>
                        </a>
                     )}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export { ProjectExplorer };
