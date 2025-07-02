import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import { DotGridIcon, LogoSvg } from '../ui/icons';
import { Quote } from './quoto';
import { PiReadCvLogoLight } from 'react-icons/pi';
import { Tooltip } from '../ui/tooltip';

const HeroSection = () => {
   return (
      <section id="hero">
         <div className="container pt-14 pb-28">
            <div className="grid gap-4 xl:grid-cols-7">
               <div className="xl:col-span-4">
                  <h1 className="text-text-secondary text-[32px] font-semibold">
                     Hozaifa is a{' '}
                     <span className="text-primary font-bold">full-stack</span>{' '}
                     and{' '}
                     <span className="text-primary font-bold">
                        ai developer
                     </span>
                  </h1>
                  <p className="pt-8 pb-6">
                     He engineers full-stack solutions where performance meets
                     user experience.
                  </p>

                  <div className="flex items-center gap-3">
                     <Button variant="outline">Contact me!!</Button>
                     <Link
                        href="/download-resume"
                        className={buttonVariants({ variant: 'default' })}
                     >
                        <PiReadCvLogoLight /> Download Resume
                     </Link>
                  </div>
               </div>
               <div className="xl:col-span-3">
                  <div className="relative flex flex-col items-center gap-0">
                     <Image
                        src="/alternate/me.png"
                        alt="Hozaifa"
                        width={457}
                        height={386}
                        quality={100}
                     />

                     <DotGridIcon className="absolute top-[13.5rem] right-2" />
                     <LogoSvg className="absolute top-16 left-0 -z-10 size-[155px]" />

                     <span
                        className={buttonVariants({
                           variant: 'outline',
                           className: '!text-text !font-normal',
                        })}
                     >
                        <span className="relative flex size-4">
                           <span className="bg-primary absolute inline-flex h-full w-full animate-ping opacity-75"></span>
                           <span className="bg-primary relative inline-flex size-4"></span>
                        </span>
                        Currently working on{' '}
                        <Tooltip content="As Freelancer Developer">
                           <Link
                              href="https://namespaceit.com"
                              className="font-semibold text-white"
                           >
                              Namespace IT
                           </Link>
                        </Tooltip>
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <Quote />
      </section>
   );
};

export { HeroSection };
