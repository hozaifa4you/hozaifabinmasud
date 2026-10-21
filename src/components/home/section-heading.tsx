import Link from 'next/link';
import { LuArrowRight, LuFileText } from 'react-icons/lu';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
   /** Id of the h2, referenced by the section's aria-labelledby */
   id: string;
   /** The workspace file this section opens, e.g. "projects/" */
   file: string;
   title: string;
   link?: { href: string; label: string };
   /** Hide the file tab on small screens, where a section's own tab strip sits right below */
   fileTabDesktopOnly?: boolean;
}

const SectionHeading = ({
   id,
   file,
   title,
   link,
   fileTabDesktopOnly = false,
}: SectionHeadingProps) => (
   <div>
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 pb-5">
         <h2
            id={id}
            className="text-headline font-semibold text-balance text-strong"
         >
            {title}
         </h2>
         {link && (
            <Link
               href={link.href}
               className="group inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors duration-200 hover:text-strong"
            >
               {link.label}
               <LuArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
               />
            </Link>
         )}
      </div>
      {/* The section's file, hung on the rule like an editor tab */}
      <div aria-hidden className="border-t border-line">
         <span
            className={cn(
               '-mt-px items-center gap-1.5 border-x border-b border-line bg-bg-sunken px-3 py-1 font-mono text-xs text-primary-soft',
               fileTabDesktopOnly ? 'hidden lg:inline-flex' : 'inline-flex',
            )}
         >
            <LuFileText className="size-3.5" />
            {file}
         </span>
      </div>
   </div>
);

export { SectionHeading };
