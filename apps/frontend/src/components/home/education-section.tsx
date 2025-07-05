import { academics, trainings } from '@/lib/data';
import { ContentHeader } from './content-header';
import { AcademicCard } from './academic-card';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { DotGridLarge, SquareBox } from '../ui/icons';
import { TrainingCard } from './training-card';

const EducationNTraining = () => {
   return (
      <section className="section-padding relative" id="edu">
         <div className="container">
            <ContentHeader
               text="academic-&-trainings"
               buttonText="#show_more"
               navigateUrl="/educations-trainings"
               maxLineWidth="max-w-[240px]"
            />

            <div className="mt-5 flex items-stretch gap-8">
               <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                     <h3 className="text-2xl font-semibold">
                        <span className="text-primary">@</span>academic
                        <sup
                           className="text-primary text-base font-medium"
                           title="9+ academic qualifications"
                        >
                           9+
                        </sup>
                     </h3>

                     <Link href="/academics">
                        <Badge text="#show_more" />
                     </Link>
                  </div>

                  <div className="mt-2.5 grid gap-5">
                     {academics.map((academic) => (
                        <AcademicCard key={academic.id} {...academic} />
                     ))}
                  </div>
               </div>
               {/* Divider */}
               <div className="flex items-center justify-center">
                  <div className="bg-text/50 shadow-primary h-90 w-px shadow" />
               </div>

               <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                     <h3 className="text-2xl font-semibold">
                        <span className="text-primary">@</span>trainings
                        <sup
                           className="text-primary text-base font-medium"
                           title="9+ academic qualifications"
                        >
                           12+
                        </sup>
                     </h3>

                     <Link href="/trainings">
                        <Badge text="#show_more" />
                     </Link>
                  </div>

                  <div className="mt-2.5 grid gap-5">
                     {trainings.map((training) => (
                        <TrainingCard key={training.id} {...training} />
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <DotGridLarge className="absolute top-2/3 -right-5" />
         <SquareBox className="absolute top-1/3 -left-5 rotate-180" />
      </section>
   );
};

export { EducationNTraining };
