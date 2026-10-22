import Link from 'next/link';
import { useId } from 'react';
import { LuDownload } from 'react-icons/lu';

import { buttonVariants } from '@/components/ui/button';
import { RESUME_PDF } from '@/lib/links';

/** The close of a work page: the next step for a hiring visitor */
const HiringClose = ({
   line,
   resume = true,
}: {
   line: string;
   /** Off where the page already offers the PDF */
   resume?: boolean;
}) => {
   const titleId = useId();

   return (
      <section
         aria-labelledby={titleId}
         className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between lg:mt-28"
      >
         <div>
            <h2
               id={titleId}
               className="text-headline font-semibold text-balance text-strong"
            >
               Hiring for a full-time role?
            </h2>
            <p className="mt-3 max-w-[50ch] text-body text-pretty">{line}</p>
         </div>
         <div className="flex shrink-0 flex-wrap gap-3">
            <Link
               href="/#contact"
               transitionTypes={['nav-back']}
               className={buttonVariants({ variant: 'primary', size: 'lg' })}
            >
               Get in touch
            </Link>
            {resume && (
               <a
                  href={RESUME_PDF}
                  download
                  className={buttonVariants({ variant: 'default', size: 'lg' })}
               >
                  <LuDownload aria-hidden />
                  Resume.pdf
               </a>
            )}
         </div>
      </section>
   );
};

export { HiringClose };
