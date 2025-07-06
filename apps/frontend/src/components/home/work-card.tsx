import { WorkType } from '@/lib/data';
import { cn } from '@/lib/utils';
import { CiCalendarDate } from 'react-icons/ci';

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
         <div className="flex items-center gap-1 text-right text-sm">
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
            <span className="text-primary">@</span>
            {title.replaceAll(' ', '_')}
         </h4>
         <p className="text-muted-foreground text-sm">
            <span className="font-semibold">
               <span className="text-primary">@</span>t:{' '}
            </span>
            {company}
         </p>
         <p className="text-muted-foreground text-sm">
            <span className="font-semibold">
               <span className="text-primary">@</span>type:{' '}
            </span>
            {type}
         </p>
         <p className="text-muted-foreground my-1 text-sm">
            <span className="font-semibold">
               <span className="text-primary">@</span>responsibilities:{' '}
            </span>
            {responsibilities}
         </p>
         <p className="text-muted-foreground mt-1 flex flex-wrap items-center gap-1 text-sm">
            <span className="font-semibold">
               <span className="text-primary">@</span>skills:{' '}
            </span>
            {skills.map((skill, index) => (
               <span
                  className="text-primary/90 capitalize underline"
                  key={skill}
               >
                  {skill}
                  {index < skills.length - 1 && ','}
               </span>
            ))}
         </p>
      </div>
   );
};

export { WorkCard };
