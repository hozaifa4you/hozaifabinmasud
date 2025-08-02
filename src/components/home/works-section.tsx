import Image from 'next/image';

import { Badge } from '../ui/badge';
import { DotGridLarge } from '../ui/icons';
import { ContentHeader } from './content-header';
import { WorkCardV2 } from './work-card-v2';
import { works } from '@/lib/data';
import { calculateYearsFromDate } from '@/lib/utils';

const WorksSection = () => {
   return (
      <section id="works" className="section-padding relative">
         <div className="container">
            <ContentHeader
               text="works"
               maxLineWidth="max-w-0 md:max-w-[350px]"
               buttonText={
                  <Badge
                     variant="active"
                     text={`#${calculateYearsFromDate('01/08/2021')}_years ~>`}
                  />
               }
               navigateUrl="/works"
            />

            <div className="mt-5 grid gap-5 lg:grid-cols-3">
               <div className="grid flex-col-reverse gap-4 lg:col-span-2">
                  {works.map((exp, index) => (
                     <WorkCardV2 key={index} {...exp} />
                  ))}
               </div>

               <div className="hidden w-full lg:col-span-1 lg:block">
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

         <DotGridLarge className="absolute top-1/2 left-10 hidden rotate-90 xl:block" />
      </section>
   );
};

export { WorksSection };
