import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

import { BoxWithTitle } from '@/components/box-with-title';
import { WorkType } from '@/lib/data';

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
            <div className="border-text bg-bg-main w-full space-y-2 border p-2">
               <p>
                  {endDate ?? (
                     <span className="font-semibold text-emerald-500 uppercase">
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
                     <h4 className="text-text-secondary text-base font-medium">
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
                     <div className="mb-2 flex w-fit flex-wrap items-center gap-2 text-slate-300/50">
                        <p className="leading-none">{type}</p>
                        <span className="text-primary font-semibold">/</span>
                        <p className="leading-none">{website}</p>
                        <span className="text-primary font-semibold">/</span>
                        <p className="leading-none">{duration}</p>
                     </div>
                     <p>{responsibilities}</p>

                     <div className="flex flex-wrap items-center gap-1.5">
                        {skills.slice(0, 6).map((skill) => (
                           <span
                              key={skill}
                              className="hover:border-primary hover:text-primary bg-text/20 rounded-full px-1.5 py-1 text-xs capitalize transition-colors duration-200 ease-in-out"
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
