import { Breadcrumb } from '@/components/breadcrumb';
import { EducationCard } from '@/components/home/education-card';
import { educationData } from '@/lib/education-data';
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

         <section className="relative">
            <div className="container">
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
            </div>
         </section>
      </>
   );
};

export default EduAndTrainingsPage;
