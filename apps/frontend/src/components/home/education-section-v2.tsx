'use client';
import React, { useState, useCallback } from 'react';
import { educationData, trainingData } from '@/lib/education-data';
import { EducationCard } from './education-card';
import { EnhancedTrainingCard } from './enhanced-training-card';
import { TabNavigation } from './tab-navigation';
import { ContentHeader } from './content-header';
import { Badge } from '../ui/badge';
import { DotGridLarge, SquareBox } from '../ui/icons';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

function EducationTrainingSectionV2() {
   // State management
   const [activeTab, setActiveTab] = useState<'educations' | 'trainings'>(
      'educations',
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
      <section className="section-padding relative" id="educations">
         <div className="container">
            <ContentHeader
               text="edu-&-trainings"
               maxLineWidth="max-w-[250px]"
               buttonText={<Badge text="#viewAll ~>" variant="done" />}
               navigateUrl={`/${activeTab}`}
            />
         </div>

         <div className="container">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'educations' && (
               <div className="grid gap-4 md:grid-cols-2">
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

            {activeTab === 'trainings' && (
               <div className="grid gap-4 md:grid-cols-2">
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

         <div className="mt-5 flex items-center justify-center">
            <Link
               href={`/${activeTab}`}
               className={buttonVariants({
                  variant: 'outlineSecondary',
                  size: 'lg',
                  class: '!gap-0',
               })}
            >
               <span className="text-primary">#</span>viewAll
            </Link>
         </div>

         <DotGridLarge className="absolute top-2/3 -right-5 hidden lg:block" />
         <SquareBox className="absolute top-1/3 -left-5 hidden rotate-180 lg:block" />
      </section>
   );
}

export { EducationTrainingSectionV2 };
