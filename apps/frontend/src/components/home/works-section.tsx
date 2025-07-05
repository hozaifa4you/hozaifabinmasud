import { works } from '@/lib/data';
import { ContentHeader } from './content-header';
import { WorkCard } from './work-card';
import { Badge } from '../ui/badge';
import { calculateYearsFromDate } from '@/lib/utils';
import { DotGridLarge } from '../ui/icons';
import Image from 'next/image';

const WorksSection = () => {
   return (
      <section id="works" className="section-padding relative">
         <div className="container">
            <ContentHeader
               text="works"
               maxLineWidth="max-w-[350px]"
               buttonText={
                  <Badge
                     variant="active"
                     text={`#${calculateYearsFromDate('01/08/2021')}_years`}
                  />
               }
               navigateUrl="#"
            />

            <div className="mt-5 grid gap-5 xl:grid-cols-3">
               <div className="grid flex-col-reverse gap-4 xl:col-span-2">
                  {works.map((work) => (
                     <WorkCard key={work.id} {...work} />
                  ))}
               </div>

               <div className="w-full xl:col-span-1">
                  <Image
                     src="/assets/boxs.png"
                     alt="Boxs"
                     width={350}
                     height={280}
                     className="my-auto h-auto w-full object-cover object-center"
                  />
               </div>
            </div>
         </div>

         <DotGridLarge className="absolute top-1/2 left-10 rotate-90" />
      </section>
   );
};

export { WorksSection };
