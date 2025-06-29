import Link from 'next/link';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import { DotGridIcon, LogoSvg } from '../ui/icons';

const HeroSection = () => {
   return (
      <div className="container pt-14 pb-28">
         <div className="grid gap-4 xl:grid-cols-7">
            <div className="xl:col-span-4">
               <h1 className="text-text-secondary text-[32px] font-semibold">
                  Hozaifa is a <span className="text-primary">full-stack</span>{' '}
                  and <span className="text-primary">ai developer</span>
               </h1>
               <p className="pt-8 pb-6">
                  He crafts responsive websites where technologies meet
                  creativity
               </p>

               <div className="flex items-center gap-3">
                  <Button variant="outline">Contact me!!</Button>
                  <Link
                     href="/download-resume"
                     className={buttonVariants({ variant: 'default' })}
                  >
                     Download Resume
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
                     <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <rect
                           x="0.5"
                           y="1"
                           width="15"
                           height="15"
                           fill="#C778DD"
                           stroke="#C778DD"
                        />
                     </svg>
                     Currently working on{' '}
                     <span className="font-semibold text-white">
                        Namespace IT
                     </span>
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export { HeroSection };
