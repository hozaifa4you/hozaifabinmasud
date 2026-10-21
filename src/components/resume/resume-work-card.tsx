import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

import { BoxWithTitle } from '@/components/box-with-title';
import { WorkType } from '@/lib/data/works';

const ResumeWorkCard = ({
   startDate,
   endDate,
   title,
   company,
   website,
   responsibilities,
   status,
   type,
   duration,
   skills,
}: WorkType) => {
   return (
      <div className="flex gap-x-4">
         <div className="max-w-[200px]">
            <div className="w-full space-y-2 border border-text bg-bg-main p-2">
               <p>
                  {endDate ?? (
                     <span className="bg-success px-2 py-1 text-sm font-semibold text-white/95 uppercase">
                        {status}
                     </span>
                  )}
               </p>
               <p>{startDate}</p>
            </div>
         </div>
         <div className="flex-1">
            <BoxWithTitle
               title={
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                     <h4 className="text-base font-medium text-text-secondary">
                        {title}{' '}
                     </h4>
                     <Link
                        href={website}
                        className="flex items-center gap-1 font-semibold text-white"
                     >
                        <BiLinkExternal className="inline" />
                        <span>{company}</span>
                     </Link>
                  </div>
               }
               content={
                  <div className="space-y-3">
                     <div className="mb-2 flex w-fit flex-wrap items-center gap-2 text-muted">
                        <p className="leading-none">{type}</p>
                        <span className="font-semibold text-primary">/</span>
                        <p className="leading-none">{website}</p>
                        <span className="font-semibold text-primary">/</span>
                        <p className="leading-none">{duration}</p>
                     </div>
                     <p>{responsibilities}</p>

                     <div className="flex flex-wrap items-center gap-1.5">
                        {skills.slice(0, 6).map((skill) => (
                           <span
                              key={skill}
                              className="rounded-full bg-text/20 px-1.5 py-1 text-xs capitalize transition-colors duration-200 ease-in-out hover:border-primary hover:text-primary"
                           >
                              <span className="text-primary">#</span>
                              {skill}
                           </span>
                        ))}
                     </div>
                  </div>
               }
            />
         </div>
      </div>
   );
};

export { ResumeWorkCard };
