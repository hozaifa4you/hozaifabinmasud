import { WorkType } from '@/lib/data';
import { cn } from '@/lib/utils';
import { CiCalendarDate } from 'react-icons/ci';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const WorkCard = ({
   company,
   endDate,
   responsibilities,
   startDate,
   title,
   skills,
   status,
   type,
}: WorkType) => {
   return (
      <div className="border-b-text/30 w-full border-b p-4 last:border-b-0">
         <div className="flex items-center gap-1 text-sm">
            [<CiCalendarDate /> ${startDate.toLowerCase().replaceAll(' ', '_')}
            <span
               className={cn('', {
                  'text-emerald-500 text-shadow-2xs': status === 'present',
               })}
            >
               {' '}
               - $
               {endDate ? endDate.toLowerCase().replaceAll(' ', '_') : status}
            </span>
            ]
         </div>
         <h4 className="text-text-secondary my-2.5 text-xl font-semibold lowercase">
            <Link
               href="/works/{slug}"
               className="hover:text-primary text-pretty transition-all duration-200 ease-in-out"
            >
               {title.replaceAll(' ', '_')}
            </Link>
         </h4>
         <p className="text-muted-foreground text-sm">
            <span className="font-semibold">At: </span>
            {company}
         </p>
         <p className="text-muted-foreground text-sm">
            <span className="font-semibold">Type: </span>
            {type}
         </p>
         <p className="text-muted-foreground my-1 text-sm">
            <span className="font-semibold">Responsibilities: </span>
            {responsibilities}
         </p>
         <p className="text-muted-foreground mt-1 flex flex-wrap items-center gap-1 text-sm">
            <span className="font-semibold">Skills: </span>
            {skills.map((skill) => (
               <Badge text={skill} key={skill} variant="done" />
            ))}
         </p>
      </div>
   );
};

export { WorkCard };
