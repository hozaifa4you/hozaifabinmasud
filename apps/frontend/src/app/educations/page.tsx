import { Breadcrumb } from '@/components/breadcrumb';
import { AcademicCard } from '@/components/home/academic-card';
import { TrainingCard } from '@/components/home/training-card';
import { academicAll, trainingAll } from '@/lib/data';

const EduAndTrainingsPage = () => {
   return (
      <>
         <Breadcrumb
            title="educations-&-trainings"
            subtitle="My academics and trainings showcase"
         />

         <section className="relative">
            <div className="container">
               <h3 className="text-2xl font-semibold">
                  <span className="text-primary">@</span>academic
                  <sup
                     className="text-primary text-base font-medium"
                     title="9+ academic qualifications"
                  >
                     9+
                  </sup>
               </h3>

               <div className="mt-5 grid gap-4 xl:grid-cols-2">
                  {academicAll.map((academic, index) => (
                     <AcademicCard key={index} {...academic} />
                  ))}
               </div>
            </div>
         </section>

         <section className="mt-[50px]">
            <hr className="bg-text" />
         </section>

         <section className="section-padding">
            <div className="container">
               <h3 className="text-2xl font-semibold">
                  <span className="text-primary">@</span>trainings
                  <sup
                     className="text-primary text-base font-medium"
                     title="9+ academic qualifications"
                  >
                     12+
                  </sup>
               </h3>

               <div className="mt-5 grid gap-4 xl:grid-cols-2">
                  {trainingAll.map((training, index) => (
                     <TrainingCard key={index} {...training} />
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default EduAndTrainingsPage;
