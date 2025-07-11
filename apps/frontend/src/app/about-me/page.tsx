import { FunFactSection } from '@/components/about-me/fun-facts-section';
import { Breadcrumb } from '@/components/breadcrumb';
import { SkillsBox } from '@/components/home/skills-box';
import { DotGridLarge, DotGridRect, SquareBox } from '@/components/ui/icons';
import {
   databases,
   features,
   frameworks,
   languages,
   libraries,
   others,
   tools,
} from '@/lib/data';
import Image from 'next/image';

const AboutMePage = () => {
   return (
      <>
         <Breadcrumb title="about-me" subtitle="Who am I?" />

         <section className="relative w-full">
            <div className="container">
               <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-8">
                  <div className="lg:col-span-5">
                     <div className="grid max-w-[515px] gap-6">
                        <p>Hello, I&apos;m [Hozaifa Bin Masud]</p>
                        <p>
                           I’m a self-taught full-stack developer based in
                           Bangladesh. I build scalable, user-friendly web
                           applications from scratch — both frontend and backend
                           — using modern technologies like React, Next.js,
                           NestJS, Laravel and etc.
                        </p>
                        <p>
                           Coding has been my passion for over four years. I’ve
                           helped clients bring their ideas to life through
                           clean, functional, and well-structured applications.
                           I enjoy solving real problems with code, and I’m
                           always exploring new tools, frameworks, and AI
                           integrations to level up my work.
                        </p>
                     </div>
                  </div>
                  <div className="relative lg:col-span-3">
                     <div className="flex w-full items-center justify-center md:-mt-14">
                        <Image
                           src="/alternate/me2.png"
                           alt="Hozaifa"
                           width={340}
                           height={505}
                           className="mx-auto w-full max-w-[340px] object-contain object-center"
                        />
                     </div>

                     <DotGridLarge className="absolute top-5 left-5 size-[84px]" />
                     <DotGridRect className="absolute right-10 bottom-1/3" />
                  </div>
               </div>
            </div>

            <DotGridLarge className="absolute top-1/3 left-0 size-[50px]" />
            <SquareBox className="absolute top-1/6 right-0" />
            <DotGridLarge className="absolute -right-8 -bottom-10" />
         </section>

         <section className="section-padding relative">
            <div className="container">
               <h4 className="text-[26px] font-medium text-white md:text-[28px] lg:text-[32px]">
                  <span className="text-primary">#</span>skills
               </h4>

               <div className="mt-5 grid gap-5 md:grid-cols-8 md:gap-8 lg:gap-14">
                  <div className="hidden md:col-span-3 md:block">
                     <Image
                        src="/assets/boxs.png"
                        alt="Boxs"
                        width={350}
                        height={280}
                        className="h-auto w-full object-cover object-center"
                     />
                  </div>
                  <div className="md:col-span-5">
                     <div className="grid gap-4 md:grid-cols-3">
                        <div>
                           <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                              <SkillsBox title="Languages" skills={languages} />
                              <SkillsBox title="Others" skills={others} />
                           </div>
                        </div>

                        <div>
                           <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                              <SkillsBox title="Databases" skills={databases} />
                              <SkillsBox title="Libraries" skills={libraries} />
                           </div>
                        </div>

                        <div>
                           <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                              <SkillsBox
                                 title="Frameworks"
                                 skills={frameworks}
                              />
                              <SkillsBox title="Tools" skills={tools} />
                              <SkillsBox title="Features" skills={features} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <FunFactSection />
      </>
   );
};

export default AboutMePage;
