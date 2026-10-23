import Link from 'next/link';
import { LuFileText } from 'react-icons/lu';

import { cn } from '@/lib/utils';

const TABS = [
   { key: 'education', file: 'education.md', href: '/educations' },
   { key: 'trainings', file: 'trainings.md', href: '/trainings' },
] as const;

/** The two pages as two tabs of one reference; the open tab sits on the canvas */
const LearningTabs = ({ current }: { current: 'education' | 'trainings' }) => (
   <nav
      aria-label="Education and training"
      className="mt-6 flex h-10 border border-line bg-bg-sunken sm:mt-8"
   >
      {TABS.map((tab) => {
         const isCurrent = tab.key === current;
         return (
            <Link
               key={tab.key}
               href={tab.href}
               aria-current={isCurrent ? 'page' : undefined}
               className={cn(
                  // On phones the two tabs share the strip, so no empty cell trails them
                  '-mb-px flex flex-1 items-center justify-center gap-2 border-r border-line px-4 font-mono text-xs transition-colors duration-200 ease-out-expo max-sm:last:border-r-0 sm:flex-none sm:justify-start',
                  isCurrent
                     ? 'bg-bg-main text-strong'
                     : 'text-muted hover:bg-bg-raised hover:text-strong',
               )}
            >
               <LuFileText
                  aria-hidden
                  className={cn(
                     'size-3.5',
                     isCurrent ? 'text-primary' : 'text-muted',
                  )}
               />
               {tab.file}
            </Link>
         );
      })}
   </nav>
);

export { LearningTabs };
