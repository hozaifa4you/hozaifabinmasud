import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { LuBuilding, LuCalendar, LuExternalLink } from 'react-icons/lu';

import { WorkType } from '@/lib/data/works';

const WorkCardV2 = ({ ...work }: WorkType) => {
   return (
      <div className="project-card hover:border-primary group p-4 transition-colors">
         <div className="mb-3 flex items-start justify-between">
            <div>
               <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <LuCalendar size={14} />
                  <span className="font-mono">
                     <span className="text-primary font-semibold">!</span>[
                     {work.startDate} -{' '}
                     {work.endDate ?? (
                        <span className="bg-emerald-500 px-1.5 py-0.5 text-white capitalize">
                           {work.status}
                        </span>
                     )}
                     ]<span className="text-primary">[</span>
                     {work.duration}_years
                     <span className="text-primary">]</span>
                  </span>
               </div>
               <h3 className="my-2 font-mono text-xl font-bold text-white">
                  {work.title}
               </h3>
               <div className="mb-3 flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-lg">
                     <LuBuilding className="text-primary" />
                     <span className="text-primary">{work.company}</span>
                  </div>
               </div>
               <div className="border-text mb-2 flex w-fit flex-wrap items-center gap-0 border">
                  <p className="px-3 py-2 leading-none">
                     <span className="font-semibold">
                        <span className="text-primary">@</span>type:
                     </span>{' '}
                     {work.type}
                  </p>

                  <p className="sm:border-l-text border-l px-3 py-2 leading-none">
                     <span className="font-semibold">
                        <span className="text-primary">@</span>website:
                     </span>{' '}
                     {work.website}{' '}
                     <Link
                        href={`https://${work.website}`}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="hover:text-primary transition-colors duration-200 ease-in-out"
                     >
                        <BiLinkExternal className="inline" />
                     </Link>
                  </p>
               </div>
            </div>
            <Link
               href="/works"
               className="hover:text-primary flex items-center gap-1.5 text-sm text-gray-400 opacity-0 transition-opacity group-hover:opacity-100"
            >
               <span>#more_dets.</span> <LuExternalLink />
            </Link>
         </div>

         <div className="flex flex-wrap gap-2">
            {work.skills.slice(0, 7).map((tech, techIndex) => (
               <span
                  key={techIndex}
                  className="hover:border-primary hover:text-primary bg-text/20 rounded-full px-1.5 py-1 text-xs capitalize transition-colors duration-200 ease-in-out"
               >
                  <span className="text-primary">#</span>
                  {tech}
               </span>
            ))}
         </div>
      </div>
   );
};

export { WorkCardV2 };
