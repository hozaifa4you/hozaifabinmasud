import { TrainingType } from '@/lib/data';
import Link from 'next/link';
import { BiAward } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { IoIosTimer } from 'react-icons/io';
import { Badge } from '../ui/badge';

const TrainingCard = ({
   certificateLink,
   endDate,
   host,
   hostLink,
   startDate,
   title,
   slug,
   status,
}: TrainingType) => {
   return (
      <div className="border-text border">
         <div className="border-b-text border-b px-2 py-1.5">
            <h4 className="hover:text-primary text-lg font-semibold text-white transition-all duration-200">
               <Link href={slug}>{title}</Link>
            </h4>
         </div>
         <div className="p-3">
            <div className="flex items-center justify-between gap-2.5">
               <div className="flex items-center gap-2.5">
                  <IoIosTimer />{' '}
                  <span>
                     [<span className="font-medium">{startDate}</span>
                     {endDate && (
                        <span className="font-medium"> - {endDate}</span>
                     )}
                     ]
                  </span>
               </div>

               <Badge
                  variant={status as unknown as 'active'}
                  text={`@${status}`}
               />
            </div>
            <p className="mt-2">
               <span className="font-semibold">Host: </span>
               {host}{' '}
               <Link href={hostLink} target="_blank">
                  <FiLink className="inline" />
               </Link>
            </p>
            {certificateLink && (
               <Link
                  href={certificateLink}
                  target="_blank"
                  className="mt-2 block text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
               >
                  <BiAward className="inline h-4 w-4" /> View Certificate
               </Link>
            )}
         </div>
      </div>
   );
};

export { TrainingCard };
