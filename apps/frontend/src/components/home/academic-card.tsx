import { AcademicType } from '@/lib/data';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { LuCalendarCog } from 'react-icons/lu';

const AcademicCard = ({
   boardOrUniversity,
   endDate,
   link,
   short,
   startDate,
   title,
   grade,
}: AcademicType) => {
   return (
      <div className="border-text relative border p-4">
         <div className="flex items-center gap-2.5">
            <LuCalendarCog />{' '}
            <span>
               [<span className="font-medium">{startDate}</span> -{' '}
               <span className="font-medium">{endDate}</span>]
            </span>
         </div>

         <div>
            <h4 className="my-2.5 text-xl font-semibold text-white">
               {title} - {short}
            </h4>

            <p className="text-text/80 text-lg font-light">
               {boardOrUniversity}{' '}
               <Link
                  href={link}
                  className="inline transition duration-200 hover:text-white"
               >
                  <BiLinkExternal className="inline" />
               </Link>
            </p>
         </div>

         <div className="border-text absolute top-2 right-2 border px-2 py-1 text-sm font-bold">
            <span className="text-primary">@</span>
            {grade}
         </div>
      </div>
   );
};

export { AcademicCard };
