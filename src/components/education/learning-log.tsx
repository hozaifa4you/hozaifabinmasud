import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

/**
 * One commit on the learning log's rail, the work log's grammar: newest on
 * top, an amber node while the entry is in progress.
 */
const LogCommit = ({
   inProgress = false,
   children,
}: {
   inProgress?: boolean;
   children: ReactNode;
}) => (
   <li className="group relative grid grid-cols-[20px_minmax(0,1fr)] gap-x-5 pb-14 last:pb-0 sm:gap-x-7 lg:pb-20">
      <span
         aria-hidden
         className="rail-fill absolute top-3 bottom-0 left-[9.5px] w-px bg-line group-last:hidden"
      />
      <span
         aria-hidden
         className={cn(
            'relative mt-1.5 size-5 rounded-full border-[5px] border-bg-main',
            inProgress
               ? 'bg-warning ring-1 ring-warning/50'
               : 'node-lit bg-line-strong ring-1 ring-line',
         )}
      />
      <div className="min-w-0">{children}</div>
   </li>
);

/** The commit's mono date line, with its status pills */
const CommitDate = ({ children }: { children: ReactNode }) => (
   <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted">
      {children}
   </p>
);

const InProgressPill = () => (
   <span className="border border-warning/40 bg-warning/10 px-1.5 text-xs leading-5 text-warning">
      in progress
   </span>
);

/** The commit message */
const CommitTitle = ({ children }: { children: ReactNode }) => (
   <h2 className="mt-2 text-xl leading-snug font-semibold text-balance text-strong sm:text-2xl">
      {children}
   </h2>
);

/** The commit's record as keyed hairline rows, like the work history's */
const CommitRows = ({ children }: { children: ReactNode }) => (
   <dl className="mt-5 max-w-3xl border-t border-line">{children}</dl>
);

const CommitRow = ({
   term,
   children,
}: {
   term: string;
   children: ReactNode;
}) => (
   <div className="grid gap-2 border-b border-line py-4 sm:grid-cols-[8.75rem_minmax(0,1fr)] sm:gap-6">
      <dt className="font-mono text-sm text-primary-soft sm:pt-0.5">{term}</dt>
      <dd className="min-w-0 text-body text-pretty text-strong">{children}</dd>
   </div>
);

/**
 * A list read as one line: comma separated, and each item kept whole, so a
 * line breaks only between items
 */
const InlineList = ({
   items,
   className,
}: {
   items: string[];
   className?: string;
}) => (
   <ul className={className}>
      {items.map((item, index) => (
         <li key={item} className="inline">
            <span className="whitespace-nowrap">
               {item}
               {index < items.length - 1 && ','}
            </span>{' '}
         </li>
      ))}
   </ul>
);

/** Shown in place of the log while no entries are published */
const EmptyLog = ({ children }: { children: ReactNode }) => (
   <p className="mt-10 border border-dashed border-line-strong px-5 py-8 text-body text-muted lg:mt-14">
      {children}
   </p>
);

export {
   CommitDate,
   CommitRow,
   CommitRows,
   CommitTitle,
   EmptyLog,
   InlineList,
   InProgressPill,
   LogCommit,
};
