import {
   LuAward,
   LuCalendar,
   LuChevronDown,
   LuChevronUp,
   LuExternalLink,
} from 'react-icons/lu';
import {
   BulletItem,
   ExpandableContent,
   SectionSubheader,
} from './education-components';

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
}: TrainingItemProps) {
   return (
      <div className="project-card hover:border-primary p-6 transition-all duration-300 lg:p-8">
         <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
               <h3 className="mb-2 font-mono text-base font-bold text-white lg:text-lg">
                  {title}
               </h3>
               <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-primary text-sm font-medium lg:text-base">
                     {provider}
                  </span>
                  <div className="flex items-center space-x-2 font-mono text-xs text-gray-400 lg:text-sm">
                     <LuCalendar size={14} />
                     <span>{duration}</span>
                  </div>
               </div>
               <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs text-gray-300 lg:text-sm">
                     {platform}
                  </span>
                  <span className="text-xs text-gray-400 lg:text-sm">
                     Completed: {completedDate}
                  </span>
               </div>
               <div className="mb-3 flex items-center justify-between">
                  <a
                     href={certificate}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-primary flex items-center space-x-2 font-mono text-xs transition-colors hover:text-white lg:text-sm"
                  >
                     <LuExternalLink size={14} />
                     <span>View Certificate</span>
                  </a>
                  <div className="text-primary flex items-center space-x-2 font-mono text-xs lg:text-sm">
                     <LuAward size={14} />
                     <span>{rating}</span>
                  </div>
               </div>
            </div>
            <button
               onClick={onToggleExpand}
               className="hover:text-primary ml-4 p-2 text-gray-400 transition-colors"
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

         <p className="mb-4 text-sm leading-relaxed text-gray-400 lg:text-base">
            {description}
         </p>

         {/* Skills Tags */}
         <div className="mb-4 flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
               <span key={skillIndex} className="tech-tag text-xs">
                  {skill}
               </span>
            ))}
         </div>

         <ExpandableContent isExpanded={isExpanded}>
            {/* Projects */}
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
