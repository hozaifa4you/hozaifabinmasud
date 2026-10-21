import {
   LuAward,
   LuCalendar,
   LuChevronDown,
   LuChevronUp,
   LuExternalLink,
} from 'react-icons/lu';

import { Badge } from '../ui/badge';
import {
   BulletItem,
   ExpandableContent,
   SectionSubheader,
} from './education-components';
import { StatusType } from '@/lib/education-data';

export interface TrainingItemProps {
   title: string;
   provider: string;
   platform: string;
   duration: string;
   completedDate: string;
   certificate: string;
   skills: string[];
   description: string;
   projects: string[];
   rating: string;
   isExpanded: boolean;
   onToggleExpand: () => void;
   index: number;
   status: StatusType;
}

export function EnhancedTrainingCard({
   title,
   provider,
   platform,
   duration,
   completedDate,
   certificate,
   skills,
   description,
   projects,
   rating,
   isExpanded,
   onToggleExpand,
   index,
   status,
}: TrainingItemProps) {
   return (
      <div className="project-card p-4 transition-all duration-300 hover:border-primary">
         <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
               <h3 className="mb-2 font-mono text-base font-bold text-white">
                  {title}{' '}
                  <Badge
                     text={status}
                     variant={
                        status === 'running'
                           ? 'active'
                           : status === 'completed'
                             ? 'done'
                             : 'default'
                     }
                  />
               </h3>
               <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-medium text-primary">
                     {provider}
                  </span>
                  <div className="flex items-center space-x-2 font-mono text-xs text-muted">
                     <LuCalendar size={14} />
                     <span>{duration}</span>
                  </div>
               </div>
               <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs text-text">{platform}</span>
                  <span className="text-xs text-muted">
                     Completed: {completedDate}
                  </span>
               </div>
               <div className="mb-3 flex items-center justify-between">
                  <a
                     href={certificate}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center space-x-2 font-mono text-xs text-primary transition-colors hover:text-white"
                  >
                     <LuExternalLink size={14} />
                     <span>View Certificate</span>
                  </a>
                  <div className="flex items-center space-x-2 font-mono text-xs text-primary lg:text-sm">
                     <LuAward size={14} />
                     <span>{rating}</span>
                  </div>
               </div>
            </div>
            <button
               onClick={onToggleExpand}
               className="ml-4 p-2 text-muted transition-colors hover:text-primary"
               aria-expanded={isExpanded}
               aria-controls={`training-details-${index}`}
            >
               {isExpanded ? (
                  <LuChevronUp size={20} />
               ) : (
                  <LuChevronDown size={20} />
               )}
            </button>
         </div>

         <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">
            {description}
         </p>

         {/* Skills Tags */}
         <div className="mb-4 flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
               <span
                  key={skillIndex}
                  className="tech-tag rounded-full border border-line px-1 py-0.5 text-xs"
               >
                  <span className="text-primary">#</span>
                  {skill}
               </span>
            ))}
         </div>

         <ExpandableContent isExpanded={isExpanded}>
            <div>
               <SectionSubheader title="Projects Completed" />
               <div className="space-y-3">
                  {projects.map((project, idx) => (
                     <BulletItem key={idx}>{project}</BulletItem>
                  ))}
               </div>
            </div>
         </ExpandableContent>
      </div>
   );
}
