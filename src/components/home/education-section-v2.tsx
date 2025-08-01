'use client';

import { useCallback, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Badge } from '../ui/badge';
import { DotGridLarge, SquareBox } from '../ui/icons';
import { ContentHeader } from './content-header';
import { EducationCard } from './education-card';
import { EnhancedTrainingCard } from './enhanced-training-card';
import { TabNavigation } from './tab-navigation';
import { educationData, StatusType, trainingData } from '@/lib/education-data';

function EducationTrainingSectionV2() {
   const [activeTab, setActiveTab] = useState<'educations' | 'trainings'>(
      'educations',
   );
   const [expandedEducation, setExpandedEducation] = useState<number | null>(
      null,
   );
   const [expandedTraining, setExpandedTraining] = useState<number | null>(
      null,
   );

   const toggleEducationExpand = useCallback((index: number) => {
      setExpandedEducation((prevExpanded) =>
         prevExpanded === index ? null : index,
      );
   }, []);

   const toggleTrainingExpand = useCallback((index: number) => {
      setExpandedTraining((prevExpanded) =>
         prevExpanded === index ? null : index,
      );
   }, []);

   return (
      <section className="section-padding relative" id="educations">
         <div className="container">
            <ContentHeader
               text="edu-&-trainings"
               maxLineWidth="max-w-[250px]"
               buttonText={<Badge text="#show_more ~>" variant="done" />}
               navigateUrl={`/${activeTab}`}
            />
         </div>

         <div className="container">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'educations' && (
               <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 2 }}>
                  <Masonry>
                     {educationData.map((edu, index) => (
                        <EducationCard
                           key={index}
                           {...edu}
                           isExpanded={expandedEducation === index}
                           onToggleExpand={() => toggleEducationExpand(index)}
                           index={index}
                        />
                     ))}
                  </Masonry>
               </ResponsiveMasonry>
            )}

            {activeTab === 'trainings' && (
               <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 2 }}>
                  <Masonry>
                     {trainingData.slice(0, 3).map((course, index) => (
                        <EnhancedTrainingCard
                           key={index}
                           {...course}
                           status={course.status as StatusType}
                           isExpanded={expandedTraining === index}
                           onToggleExpand={() => toggleTrainingExpand(index)}
                           index={index}
                        />
                     ))}
                  </Masonry>
               </ResponsiveMasonry>
            )}
         </div>

         <DotGridLarge className="absolute top-2/3 -right-5 hidden lg:block" />
         <SquareBox className="absolute top-1/3 -left-5 hidden rotate-180 lg:block" />
      </section>
   );
}

export { EducationTrainingSectionV2 };
