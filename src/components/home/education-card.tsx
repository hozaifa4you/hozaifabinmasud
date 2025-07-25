import {
   LuAward,
   LuCalendar,
   LuChevronDown,
   LuChevronUp,
   LuMapPin,
} from 'react-icons/lu';

import {
   BulletItem,
   ExpandableContent,
   SectionSubheader,
} from './education-components';

export interface EducationItemProps {
   degree: string;
   institution: string;
   location: string;
   duration: string;
   grade: string;
   description: string;
   highlights: string[];
   courses: string[];
   isExpanded: boolean;
   onToggleExpand: () => void;
   index: number;
}

export function EducationCard({
   degree,
   institution,
   location,
   duration,
   grade,
   description,
   highlights,
   courses,
   isExpanded,
   onToggleExpand,
   index,
}: EducationItemProps) {
   return (
      <div className="project-card p-4 transition-all duration-300">
         <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
               <h3 className="mb-2 font-mono text-lg font-bold text-white">
                  {degree}
               </h3>
               <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-primary text-sm font-medium">
                     {institution}
                  </span>
                  <div className="flex items-center space-x-2 font-mono text-xs text-gray-400">
                     <LuCalendar size={14} />
                     <span>{duration}</span>
                  </div>
               </div>
               <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-300">
                     <LuMapPin size={14} />
                     <span>{location}</span>
                  </div>
                  <div className="text-primary flex items-center space-x-2 font-mono text-xs font-bold">
                     <LuAward size={14} />
                     <span>{grade}</span>
                  </div>
               </div>
            </div>
            <button
               onClick={onToggleExpand}
               className="hover:text-primary ml-4 p-2 text-gray-400 transition-colors"
               aria-expanded={isExpanded}
               aria-controls={`education-details-${index}`}
            >
               {isExpanded ? (
                  <LuChevronUp size={20} />
               ) : (
                  <LuChevronDown size={20} />
               )}
            </button>
         </div>

         <p className="mb-4 text-sm leading-relaxed text-gray-400">
            {description}
         </p>

         <ExpandableContent isExpanded={isExpanded}>
            {/* Highlights */}
            <div>
               <SectionSubheader title="Achievements" />
               <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {highlights.map((highlight, idx) => (
                     <BulletItem key={idx}>{highlight}</BulletItem>
                  ))}
               </div>
            </div>

            {/* Courses */}
            <div>
               <SectionSubheader title="Key Courses" />
               <div className="flex flex-wrap gap-2">
                  {courses.map((course, idx) => (
                     <span key={idx} className="tech-tag text-xs">
                        {course}
                     </span>
                  ))}
               </div>
            </div>
         </ExpandableContent>
      </div>
   );
}
