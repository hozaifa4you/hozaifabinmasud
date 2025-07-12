'use client';
import { Breadcrumb } from '@/components/breadcrumb';
import { EducationCard } from '@/components/home/education-card';
import { buttonVariants } from '@/components/ui/button';
import { DotGridLarge, SquareBox } from '@/components/ui/icons';
import { educationData } from '@/lib/education-data';
import Link from 'next/link';
import { useCallback, useState } from 'react';

const EduAndTrainingsPage = () => {
   const [expandedEducation, setExpandedEducation] = useState<number | null>(
      null,
   );

   const toggleEducationExpand = useCallback((index: number) => {
      setExpandedEducation((prevExpanded) =>
         prevExpanded === index ? null : index,
      );
   }, []);

   return (
      <>
         <Breadcrumb
            title="educations"
            subtitle="My academics qualifications"
         />

         <section className="relative mb-10">
            <div className="container">
               <div className="grid gap-4 md:grid-cols-2">
                  {[...educationData, ...educationData].map((edu, index) => (
                     <EducationCard
                        key={index}
                        {...edu}
                        isExpanded={expandedEducation === index}
                        onToggleExpand={() => toggleEducationExpand(index)}
                        index={index}
                     />
                  ))}
               </div>

               <div className="mt-5 flex items-center justify-center">
                  <Link
                     href={`#`}
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

            <DotGridLarge className="absolute top-2/3 -right-5 hidden lg:block" />
            <SquareBox className="absolute top-1/3 -left-5 hidden rotate-180 lg:block" />
         </section>
      </>
   );
};

export default EduAndTrainingsPage;
