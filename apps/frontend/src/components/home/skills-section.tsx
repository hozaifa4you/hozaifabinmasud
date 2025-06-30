import Image from 'next/image';
import { ContentHeader } from './content-header';
import { SkillsBox } from './skills-box';
import { databases, languages } from '@/lib/data';

const SkillsSection = () => {
   return (
      <section className="section-padding relative">
         <div className="container">
            <ContentHeader text="Skills" maxLineWidth="max-w-[240px]" />

            <div className="mt-5 grid xl:grid-cols-8 xl:gap-14">
               <div className="xl:col-span-3">
                  <Image
                     src="/assets/boxs.png"
                     alt="Boxs"
                     width={350}
                     height={280}
                     className="h-auto w-full object-cover object-center"
                  />
               </div>
               <div className="xl:col-span-5">
                  <div className="grid gap-4 xl:grid-cols-3">
                     <div>
                        <div>
                           <SkillsBox title="Languages" skills={languages} />
                        </div>
                     </div>

                     <div>
                        <div className="grid gap-4">
                           <SkillsBox title="Databases" skills={databases} />

                           <SkillsBox
                              title="Frameworks"
                              // skills={[
                              //    'NodeJs',
                              //    'ExpressJs',
                              //    'NestJs',
                              //    'ReactJs',
                              //    'NextJs',
                              //    'Laravel',
                              //    'Tailwind CSS',
                              // ]}
                              skills={languages}
                           />
                        </div>
                     </div>

                     <div>
                        <div className="grid gap-4">
                           <SkillsBox
                              title="Tools"
                              // skills={[
                              //    'Git',
                              //    'Docker',
                              //    'AI APIs',
                              //    'CI/CD',
                              //    'AWS',
                              //    'ORMs',
                              //    'GraphQL',
                              // ]}

                              skills={languages}
                           />

                           <SkillsBox
                              title="Features"
                              // skills={[
                              //    'Rest APIs',
                              //    'Chat Bot',
                              //    'Socket',
                              //    'eCommerce',
                              //    'Dashboard',
                              //    'Full Stack',
                              // ]}

                              skills={languages}
                           />

                           <SkillsBox
                              title="Others"
                              // skills={['Embedded System', 'Arduino', 'IoT']}
                              skills={languages}
                           />
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
