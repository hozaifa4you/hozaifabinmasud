import Image from 'next/image';
import { ContentHeader } from './content-header';
import { SkillsBox } from './skills-box';
import {
   databases,
   features,
   frameworks,
   languages,
   libraries,
   others,
   tools,
} from '@/lib/data';

const SkillsSection = () => {
   return (
      <section className="section-padding relative" id="skills">
         <div className="container">
            <ContentHeader
               text="Skills"
               maxLineWidth="max-w-[150px] sm:max-w-[200px] md:max-w-[240px]"
            />

            <div className="mt-5 grid lg:grid-cols-8 lg:gap-14">
               <div className="hidden lg:col-span-3 lg:block">
                  <Image
                     src="/assets/boxs.png"
                     alt="Boxs"
                     width={350}
                     height={280}
                     className="h-auto w-full object-cover object-center"
                  />
               </div>

               <div className="lg:col-span-5">
                  <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-3">
                     <div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                           <SkillsBox title="Languages" skills={languages} />
                           <SkillsBox title="Others" skills={others} />
                        </div>
                     </div>

                     <div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                           <SkillsBox title="Databases" skills={databases} />
                           <SkillsBox title="Libraries" skills={libraries} />
                        </div>
                     </div>

                     <div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                           <SkillsBox title="Frameworks" skills={frameworks} />
                           <SkillsBox title="Tools" skills={tools} />
                           <SkillsBox title="Features" skills={features} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { SkillsSection };
