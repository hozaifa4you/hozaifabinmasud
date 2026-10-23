import { Metadata } from 'next';

import { BreadcrumbNav } from '@/components/breadcrumb';
import { DirectionalPage } from '@/components/directional-page';
import { EmptyLog } from '@/components/education/learning-log';
import { LearningTabs } from '@/components/education/learning-tabs';
import { TrainingLog } from '@/components/education/training-log';
import { HiringClose } from '@/components/projects/hiring-close';
import { getTrainings, hasEducationContent } from '@/lib/data/education';

export const metadata: Metadata = {
   title: 'Training',
   description:
      "Hozaifa's training, newest first: each course with its provider, completion date and certificate.",
};

const TrainingsPage = () => {
   const trainings = getTrainings();

   return (
      <DirectionalPage>
         <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
            <header>
               <BreadcrumbNav
                  items={[
                     {
                        href: hasEducationContent() ? '/#education' : '/',
                        title: 'Workspace',
                        transitionTypes: ['nav-back'],
                     },
                     { href: '/trainings', title: 'trainings' },
                  ]}
               />
               <h1 className="mt-5 text-display font-semibold text-strong sm:mt-6">
                  Training
               </h1>
               <p className="mt-4 max-w-[60ch] text-lead text-pretty">
                  Courses finished and in progress, newest first, with each
                  certificate where there is one.
               </p>
               <LearningTabs current="trainings" />
            </header>

            {trainings.length > 0 ? (
               <TrainingLog trainings={trainings} />
            ) : (
               <EmptyLog>Training details are being added.</EmptyLog>
            )}

            <HiringClose line="I build web products end to end, from the API to the interface." />
         </article>
      </DirectionalPage>
   );
};

export default TrainingsPage;
