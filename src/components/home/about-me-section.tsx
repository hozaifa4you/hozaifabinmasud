import Image from 'next/image';
import { ContentHeader } from './content-header';
import { DotGridLarge, DotGridRect, SquareBox } from '../ui/icons';
import Link from 'next/link';
import { Button } from '../ui/button';

const AboutMeSection = () => {
   return (
      <section id="about-me" className="section-padding relative">
         <div className="container">
            <ContentHeader
               text="about-me"
               maxLineWidth="sm:max-w-[250px] max-w-[150px] md:max-w-[320px]"
            />

            <div className="gap- mt-5 grid md:grid-cols-2 lg:grid-cols-8">
               <div className="lg:col-span-5">
                  <div className="grid max-w-[515px] gap-6">
                     <p>Hello, I&apos;m [Hozaifa Bin Masud]</p>
                     <p>
                        I’m a self-taught full-stack developer based in
                        Bangladesh. I build scalable, user-friendly web
                        applications from scratch — both frontend and backend —
                        using modern technologies like React, Next.js, NestJS,
                        Laravel and etc.
                     </p>
                     <p>
                        Coding has been my passion for over four years. I’ve
                        helped clients bring their ideas to life through clean,
                        functional, and well-structured applications. I enjoy
                        solving real problems with code, and I’m always
                        exploring new tools, frameworks, and AI integrations to
                        level up my work.
                     </p>

                     <Link href="/about-me">
                        <Button variant="outline" size="lg">
                           Read more!!
                        </Button>
                     </Link>
                  </div>
               </div>
               <div className="relative lg:col-span-3">
                  <div className="flex w-full items-center justify-center md:-mt-18">
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

         <SquareBox className="absolute top-1/3 left-0 rotate-180" />
         <DotGridLarge className="absolute top-2/3 -right-10" />
      </section>
   );
};

export { AboutMeSection };
