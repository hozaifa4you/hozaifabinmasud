import Image from 'next/image';
import { ContentHeader } from './content-header';
import { DotGridIcon, DotGridRectIcon, SquareIcon } from '../ui/icons';
import Link from 'next/link';
import { Button } from '../ui/button';

const AboutMeSection = () => {
   return (
      <section className="section-padding relative">
         <div className="container">
            <ContentHeader text="about-me" maxLineWidth="max-w-[320px]" />

            <div className="gap- mt-5 grid xl:grid-cols-8">
               <div className="xl:col-span-5">
                  <div className="grid max-w-[515px] gap-6">
                     <p>Hello, I&apos;m Hozaifa Bin Masud</p>
                     <p>
                        I’m a self-taught front-end developer based in Kyiv,
                        Ukraine. I can develop responsive websites from scratch
                        and raise them into modern user-friendly web
                        experiences.{' '}
                     </p>
                     <p>
                        Transforming my creativity and knowledge into a websites
                        has been my passion for over a year. I have been helping
                        various clients to establish their presence online. I
                        always strive to learn about the newest technologies and
                        frameworks.
                     </p>

                     <Link href="/about-more">
                        <Button variant="outline">Read more!!</Button>
                     </Link>
                  </div>
               </div>
               <div className="relative xl:col-span-3">
                  <div className="-mt-18 flex w-full items-center justify-center">
                     <Image
                        src="/alternate/me2.png"
                        alt="Hozaifa"
                        width={340}
                        height={505}
                        className="mx-auto w-full max-w-[340px] object-contain object-center"
                     />
                  </div>

                  <DotGridIcon className="absolute top-5 left-5 size-[84px]" />
                  <DotGridRectIcon className="absolute right-10 bottom-1/3" />
               </div>
            </div>
         </div>

         <SquareIcon className="absolute top-1/3 left-0 rotate-180" />
         <DotGridIcon className="absolute top-2/3 -right-10" />
      </section>
   );
};

export { AboutMeSection };
