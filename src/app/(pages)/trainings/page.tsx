'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Breadcrumb } from '@/components/breadcrumb';
import { EnhancedTrainingCard } from '@/components/home/enhanced-training-card';
import { buttonVariants } from '@/components/ui/button';
import { DotGridLarge, SquareBox } from '@/components/ui/icons';
import { StatusType, trainingData } from '@/lib/education-data';

const TrainingsPage = () => {
   const searchParams = useSearchParams();
   const [expandedTraining, setExpandedTraining] = useState<number | null>(
      null,
   );

   const toggleTrainingExpand = useCallback((index: number) => {
      setExpandedTraining((prevExpanded) =>
         prevExpanded === index ? null : index,
      );
   }, []);

   const type = searchParams.get('type');

   return (
      <>
         <Breadcrumb
            title="trainings"
            subtitle="Which trainings I have participate"
         />

         <section className="mb-10 overflow-hidden">
            <div className="container">
               <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Link
                     className={buttonVariants({
                        variant:
                           !type || type == 'all'
                              ? 'outlineSecondary'
                              : 'default',
                     })}
                     href="?type=all"
                  >
                     All
                  </Link>
                  <Link
                     className={buttonVariants({
                        variant:
                           type === 'professional'
                              ? 'outlineSecondary'
                              : 'default',
                     })}
                     href="?type=professional"
                  >
                     Professional
                  </Link>
                  <Link
                     className={buttonVariants({
                        variant:
                           type === 'bhootcamp'
                              ? 'outlineSecondary'
                              : 'default',
                     })}
                     href="?type=bhootcamp"
                  >
                     Bootcamp
                  </Link>
               </div>

               <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 2 }}>
                  <Masonry>
                     {trainingData.map((course, index) => (
                        <div key={index}>
                           <EnhancedTrainingCard
                              {...course}
                              status={course.status as StatusType}
                              isExpanded={expandedTraining === index}
                              onToggleExpand={() => toggleTrainingExpand(index)}
                              index={index}
                           />
                        </div>
                     ))}
                  </Masonry>
               </ResponsiveMasonry>

               <div className="mt-5 flex items-center justify-center">
                  <Link
                     href="#"
                     className={buttonVariants({
                        variant: 'outlineSecondary',
                        size: 'lg',
                        class: '!gap-0',
                     })}
                  >
                     <span className="text-primary">#</span>load_more
                  </Link>
               </div>
            </div>

            <DotGridLarge className="absolute top-2/3 -left-5 hidden lg:block" />
            <SquareBox className="absolute top-1/3 -right-5 hidden lg:block" />
         </section>
      </>
   );
};

export default TrainingsPage;
