'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useState, ViewTransition } from 'react';
import {
   LuArrowRight,
   LuArrowUpRight,
   LuChevronDown,
   LuFileCode,
   LuGithub,
   LuImageOff,
} from 'react-icons/lu';

import { hasTechIcon, TechIcon } from '@/components/tech-icon';
import { buttonVariants } from '@/components/ui/button';
import type { ProjectView } from '@/lib/project-view';
import { cn } from '@/lib/utils';

/** A row of the directory; small projects carry no status */
export type DirectoryEntry = Omit<ProjectView, 'status'> & {
   status: ProjectView['status'] | null;
};
export type StackCount = { name: string; count: number };

const STATUS = {
   live: { label: 'Live', text: 'text-success', dot: 'bg-success' },
   developing: {
      label: 'In development',
      text: 'text-warning',
      dot: 'bg-warning',
   },
   archive: { label: 'Archived', text: 'text-muted', dot: 'bg-muted' },
};

// One column template for the header and every row, so no column ever moves
const COLUMNS =
   'lg:grid-cols-[minmax(0,14rem)_9rem_9.5rem_minmax(0,1fr)_6.5rem_1.25rem]';
const VISIBLE_CHIPS = 10;
const ROW_LOGOS = 6;
const PHONE_LOGOS = 4;
const STACK_PARAM = 'stack';

// Where a row leads, as the listing's last column shows it; the links
// themselves live in the open row
const destinationOf = (entry: DirectoryEntry) => {
   if (entry.caseStudyUrl) return 'case study';
   if (entry.liveUrl) return 'live site';
   if (entry.codeUrl) return 'source';
   return null;
};

type RowLogosProps = {
   technologies: string[];
   filter: string | null;
   max: number;
};

/** A row's logos; the technology being filtered on leads, framed */
const RowLogos = ({ technologies, filter, max }: RowLogosProps) => {
   const matched = filter && technologies.includes(filter) ? filter : null;
   const others = technologies
      .filter((name) => name !== matched && hasTechIcon(name))
      .slice(0, matched ? max - 1 : max);
   const unshown = technologies.length - others.length - (matched ? 1 : 0);

   return (
      <span aria-hidden className="flex min-w-0 items-center gap-2.5">
         {matched && (
            <span
               title={matched}
               className="inline-flex items-center border border-line-strong bg-bg-main px-1.5 py-0.5"
            >
               {hasTechIcon(matched) ? (
                  <TechIcon name={matched} className="size-4" />
               ) : (
                  <span className="font-mono text-xs text-strong">
                     {matched}
                  </span>
               )}
            </span>
         )}
         {others.map((name) => (
            <span key={name} title={name} className="inline-flex">
               <TechIcon name={name} className="size-4.5" />
            </span>
         ))}
         {unshown > 0 && (
            <span className="font-mono text-xs text-muted">+{unshown}</span>
         )}
      </span>
   );
};

const StatusLabel = ({ status }: { status: DirectoryEntry['status'] }) =>
   status ? (
      <span
         className={cn(
            'inline-flex items-center gap-2 font-mono text-ui',
            STATUS[status].text,
         )}
      >
         <span
            aria-hidden
            className={cn('size-2 rounded-full', STATUS[status].dot)}
         />
         {STATUS[status].label}
      </span>
   ) : (
      <span className="font-mono text-ui text-muted">Small project</span>
   );

type ChipProps = {
   label: string;
   count: number;
   isOn: boolean;
   onClick: () => void;
   withIcon?: boolean;
};

const Chip = ({ label, count, isOn, onClick, withIcon = true }: ChipProps) => (
   <button
      type="button"
      aria-pressed={isOn}
      onClick={onClick}
      className={cn(
         'inline-flex h-9 shrink-0 items-center gap-2 border px-3 text-control whitespace-nowrap transition-colors duration-200 ease-out-expo',
         isOn
            ? 'border-primary bg-bg-raised text-strong'
            : 'border-line text-text hover:border-line-strong hover:text-strong',
      )}
   >
      {withIcon && <TechIcon name={label} className="size-4" />}
      {label}
      <span className="font-mono text-xs text-muted">{count}</span>
   </button>
);

/** The screenshot, or an honest empty frame when the project has none */
const Shot = ({ entry }: { entry: DirectoryEntry }) => {
   if (!entry.image) {
      return (
         <div className="flex aspect-[33/20] flex-col items-center justify-center gap-2 border border-dashed border-line-strong text-muted">
            <LuImageOff aria-hidden className="size-6" />
            <span className="font-mono text-xs">No screenshot yet</span>
         </div>
      );
   }

   const frame = (
      <div className="relative aspect-[33/20] overflow-hidden border border-line bg-bg-sunken">
         <Image
            src={entry.image}
            alt={`${entry.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 416px, 100vw"
            className="object-cover object-top"
         />
      </div>
   );

   // Shared element: morphs into the case study's main image
   return entry.caseStudyUrl ? (
      <ViewTransition
         name={`project-shot-${entry.slug}`}
         share="morph"
         default="none"
      >
         {frame}
      </ViewTransition>
   ) : (
      frame
   );
};

const Panel = ({ entry }: { entry: DirectoryEntry }) => (
   <div className="grid gap-6 px-3 pt-2 pb-7 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-10 lg:px-4 lg:pb-9">
      {entry.status !== null && <Shot entry={entry} />}
      <div className={cn('min-w-0', entry.status === null && 'lg:col-span-2')}>
         <h3 className="text-xl leading-snug font-semibold text-strong">
            {entry.title}
         </h3>
         {entry.context && (
            <p className="mt-1 text-control text-muted lg:hidden">
               {entry.context}
            </p>
         )}
         <p className="mt-3 max-w-[60ch] text-body text-pretty">
            {entry.description}
         </p>
         <ul aria-label="Built with" className="mt-4 flex flex-wrap gap-2">
            {entry.technologies.map((name) => (
               <li
                  key={name}
                  className="inline-flex items-center gap-1.5 border border-line bg-bg-main px-2 py-1 font-mono text-xs text-text"
               >
                  <TechIcon name={name} className="size-4" />
                  {name}
               </li>
            ))}
         </ul>
         {(entry.caseStudyUrl || entry.liveUrl || entry.codeUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
               {entry.caseStudyUrl && (
                  <Link
                     href={entry.caseStudyUrl}
                     transitionTypes={['nav-forward']}
                     className={cn(
                        buttonVariants({ variant: 'primary' }),
                        'group',
                     )}
                  >
                     Read case study
                     <LuArrowRight
                        aria-hidden
                        className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
                     />
                  </Link>
               )}
               {entry.liveUrl && (
                  <a
                     href={entry.liveUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonVariants({ variant: 'default' })}
                  >
                     Visit live site
                     <LuArrowUpRight aria-hidden />
                     <span className="sr-only">(opens in a new tab)</span>
                  </a>
               )}
               {entry.codeUrl && (
                  <a
                     href={entry.codeUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={buttonVariants({ variant: 'default' })}
                  >
                     <LuGithub aria-hidden />
                     Source code
                     <span className="sr-only">(opens in a new tab)</span>
                  </a>
               )}
            </div>
         )}
      </div>
   </div>
);

type RowProps = {
   entry: DirectoryEntry;
   filter: string | null;
   isOpen: boolean;
   onToggle: () => void;
};

const Row = ({ entry, filter, isOpen, onToggle }: RowProps) => {
   const id = useId();
   const buttonId = `${id}-row`;
   const panelId = `${id}-panel`;

   return (
      <li
         id={entry.slug}
         className={cn(
            'scroll-mt-20 border-b border-l border-b-line transition-colors duration-200 ease-out-expo',
            isOpen
               ? 'border-l-primary bg-bg-raised'
               : 'border-l-transparent hover:bg-bg-raised/50',
         )}
      >
         <h2>
            <button
               id={buttonId}
               type="button"
               aria-expanded={isOpen}
               aria-controls={panelId}
               onClick={onToggle}
               className={cn(
                  'grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_1.25rem] items-center gap-x-5 gap-y-1.5 px-3 py-3.5 text-left lg:h-14 lg:px-4 lg:py-0',
                  COLUMNS,
               )}
            >
               <span className="flex min-w-0 items-center gap-2 font-mono text-ui text-strong">
                  <LuFileCode
                     aria-hidden
                     className={cn(
                        'size-4 shrink-0 transition-colors duration-200',
                        isOpen ? 'text-primary' : 'text-muted',
                     )}
                  />
                  <span className="truncate">{entry.slug}</span>
               </span>
               <span className="hidden lg:block">
                  <StatusLabel status={entry.status} />
               </span>
               <span className="hidden truncate text-control lg:block">
                  {entry.builtFor ?? '—'}
               </span>
               <span className="hidden min-w-0 lg:flex">
                  <RowLogos
                     technologies={entry.technologies}
                     filter={filter}
                     max={ROW_LOGOS}
                  />
               </span>
               <span className="sr-only">{entry.technologies.join(', ')}</span>
               <span className="hidden font-mono text-ui text-muted lg:block">
                  <span className="sr-only">opens: </span>
                  {destinationOf(entry) ?? (
                     <>
                        <span aria-hidden>—</span>
                        <span className="sr-only">no link</span>
                     </>
                  )}
               </span>
               <LuChevronDown
                  aria-hidden
                  className={cn(
                     'size-5 text-muted transition-transform duration-300 ease-out-expo',
                     isOpen && 'rotate-180 text-strong',
                  )}
               />
               {/* Below lg: status and owner on a second line, logos on a third,
                   the same rhythm on every row */}
               <span className="col-span-2 flex flex-wrap items-center gap-x-3 gap-y-1 lg:hidden">
                  <StatusLabel status={entry.status} />
                  {entry.builtFor && (
                     <span className="text-control text-muted">
                        {entry.builtFor}
                     </span>
                  )}
               </span>
               <span className="col-span-2 flex lg:hidden">
                  <RowLogos
                     technologies={entry.technologies}
                     filter={filter}
                     max={PHONE_LOGOS}
                  />
               </span>
            </button>
         </h2>
         {/* Opens in place: the row grows to its content */}
         <div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            inert={!isOpen}
            className={cn(
               'grid transition-[grid-template-rows] duration-300 ease-out-expo',
               isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
         >
            <div className="min-h-0 overflow-hidden">
               <Panel entry={entry} />
            </div>
         </div>
      </li>
   );
};

type ProjectDirectoryProps = {
   entries: DirectoryEntry[];
   stack: StackCount[];
   /** The ?stack= of the request, already checked against `stack` */
   initialStack: string | null;
};

/** Every project as one row of an ls -l, filterable by technology */
const ProjectDirectory = ({
   entries,
   stack,
   initialStack,
}: ProjectDirectoryProps) => {
   const visibleFor = (name: string | null) =>
      name
         ? entries.filter((entry) => entry.technologies.includes(name))
         : entries;

   const [filter, setFilter] = useState(initialStack);
   const [showAllStack, setShowAllStack] = useState(false);
   // The first project in view opens so its screenshot leads the page
   const [openSlugs, setOpenSlugs] = useState(
      () =>
         new Set(
            visibleFor(initialStack)
               .slice(0, 1)
               .map((entry) => entry.slug),
         ),
   );
   const filterLabelId = useId();

   // A /projects#<slug> link (from the about page's proof links) opens that
   // row; the browser has already scrolled to it. Read after hydration
   useEffect(() => {
      const frame = requestAnimationFrame(() => {
         const slug = decodeURIComponent(window.location.hash.slice(1));
         if (entries.some((entry) => entry.slug === slug)) {
            setOpenSlugs((current) => new Set([...current, slug]));
         }
      });
      return () => cancelAnimationFrame(frame);
   }, [entries]);

   const choose = (name: string | null) => {
      setFilter(name);
      // Keep a screenshot in view: open the first match when none is open
      const matches = visibleFor(name);
      setOpenSlugs((current) =>
         matches.length === 0 ||
         matches.some((entry) => current.has(entry.slug))
            ? current
            : new Set([...current, matches[0].slug]),
      );
      const url = new URL(window.location.href);
      if (name) url.searchParams.set(STACK_PARAM, name);
      else url.searchParams.delete(STACK_PARAM);
      window.history.replaceState(null, '', url);
   };

   const toggle = (slug: string) =>
      setOpenSlugs((current) => {
         const next = new Set(current);
         if (next.has(slug)) next.delete(slug);
         else next.add(slug);
         return next;
      });

   const visible = visibleFor(filter);
   // The most used chips, plus the chosen one when it sits past the fold
   const folded = stack.slice(0, VISIBLE_CHIPS);
   const chosenPastFold = stack.find(
      (tech) => tech.name === filter && !folded.includes(tech),
   );
   const chips = showAllStack
      ? stack
      : chosenPastFold
        ? [...folded, chosenPastFold]
        : folded;
   const hiddenChips =
      stack.length - (showAllStack ? VISIBLE_CHIPS : chips.length);

   return (
      <div className="mt-8">
         <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div
               role="group"
               aria-labelledby={filterLabelId}
               // Phones scroll the chips sideways instead of stacking rows
               className="relative -mx-5 flex items-center gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
            >
               <span
                  id={filterLabelId}
                  className="mr-2 shrink-0 font-mono text-sm text-primary-soft"
               >
                  stack
               </span>
               <Chip
                  label="All"
                  count={entries.length}
                  isOn={filter === null}
                  onClick={() => choose(null)}
                  withIcon={false}
               />
               {chips.map((tech) => (
                  <Chip
                     key={tech.name}
                     label={tech.name}
                     count={tech.count}
                     isOn={filter === tech.name}
                     onClick={() =>
                        choose(filter === tech.name ? null : tech.name)
                     }
                  />
               ))}
               {hiddenChips > 0 && (
                  <button
                     type="button"
                     aria-expanded={showAllStack}
                     onClick={() => setShowAllStack((shown) => !shown)}
                     className="inline-flex h-9 shrink-0 items-center px-2 font-mono text-sm whitespace-nowrap text-muted transition-colors duration-200 hover:text-strong"
                  >
                     {showAllStack ? 'fewer' : `+${hiddenChips} more`}
                  </button>
               )}
            </div>
            <p
               aria-live="polite"
               className="shrink-0 font-mono text-sm text-muted sm:pt-2"
            >
               <span className="text-strong">{visible.length}</span> of{' '}
               {entries.length} projects
               {filter && <span className="sr-only"> built with {filter}</span>}
            </p>
         </div>

         <div className="mt-6 border-t border-line">
            <div
               aria-hidden
               className={cn(
                  'hidden h-9 items-center gap-x-5 border-b border-l border-b-line border-l-transparent px-4 font-mono text-xs text-muted lg:grid',
                  COLUMNS,
               )}
            >
               <span>name</span>
               <span>status</span>
               <span>built for</span>
               <span>stack</span>
               <span>opens</span>
               <span />
            </div>
            <ul aria-label="Projects">
               {visible.map((entry) => (
                  <Row
                     key={entry.slug}
                     entry={entry}
                     filter={filter}
                     isOpen={openSlugs.has(entry.slug)}
                     onToggle={() => toggle(entry.slug)}
                  />
               ))}
            </ul>
         </div>
      </div>
   );
};

export { ProjectDirectory };
