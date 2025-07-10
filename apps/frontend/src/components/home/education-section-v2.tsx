'use client';
import React, { useState, useCallback } from 'react';
import { SectionHeader } from './education-components';
import { educationData, trainingData } from '../../lib/education-data';
import { EducationCard } from './education-card';
import { EnhancedTrainingCard } from './enhanced-training-card';
import { TabNavigation } from './tab-navigation';
import { ContentHeader } from './content-header';
import { Badge } from '../ui/badge';
import { DotGridLarge, SquareBox } from '../ui/icons';

function EducationTrainingSectionV2() {
   // State management
   const [activeTab, setActiveTab] = useState<'education' | 'training'>(
      'education',
   );
   const [expandedEducation, setExpandedEducation] = useState<number | null>(
      null,
   );
   const [expandedTraining, setExpandedTraining] = useState<number | null>(
      null,
   );

   // Event handlers with useCallback for better performance
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
      <section
         className="section-padding relative min-h-screen"
         id="educations"
      >
         <div className="container">
            <ContentHeader
               text="edu-&-trainings"
               maxLineWidth="max-w-[250px]"
               buttonText={<Badge text="#viewAll ~>" variant="done" />}
               navigateUrl="/educations"
            />
         </div>

         <div className="container">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'education' && (
               <div className="space-y-4">
                  <SectionHeader text="academics" count={5} />
                  {educationData.map((edu, index) => (
                     <EducationCard
                        key={index}
                        {...edu}
                        isExpanded={expandedEducation === index}
                        onToggleExpand={() => toggleEducationExpand(index)}
                        index={index}
                     />
                  ))}
               </div>
            )}

            {activeTab === 'training' && (
               <div className="space-y-4">
                  <SectionHeader text="trainings" count={12} />
                  {trainingData.slice(0, 3).map((course, index) => (
                     <EnhancedTrainingCard
                        key={index}
                        {...course}
                        isExpanded={expandedTraining === index}
                        onToggleExpand={() => toggleTrainingExpand(index)}
                        index={index}
                     />
                  ))}
               </div>
            )}
         </div>

         <DotGridLarge className="absolute top-2/3 -right-5" />
         <SquareBox className="absolute top-1/3 -left-5 rotate-180" />
      </section>
   );
}

export { EducationTrainingSectionV2 };
