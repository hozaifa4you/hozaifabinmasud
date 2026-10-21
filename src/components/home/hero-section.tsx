import Image from 'next/image';
import Link from 'next/link';
import { FaBrain, FaCode, FaRocket } from 'react-icons/fa';
import { PiReadCvLogoLight } from 'react-icons/pi';

import { Badge } from '../ui/badge';
import { buttonVariants } from '../ui/button';
import { DotGridLarge, LogoSvg } from '../ui/icons';
import { Tooltip } from '../ui/tooltip';
import { Quote } from './quoto';
import { appConfig } from '@/config/app.config';

const HeroSection = () => {
   const techStack = [
      'TypeScript',
      'React',
      'Node.js',
      'Next.js',
      'AI/ML',
      'MongoDB',
   ];

   const achievements = [
      { icon: FaCode, label: '50+', desc: 'Projects' },
      { icon: FaRocket, label: '4.1+', desc: 'Years Exp' },
      { icon: FaBrain, label: 'AI', desc: 'Savvy' },
   ];

   return (
      <section id="hero" className="relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-20">
            <div className="bg-primary/5 absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full blur-3xl"></div>
            <div className="absolute right-10 bottom-20 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl delay-1000"></div>
         </div>

         <div className="relative container pt-14 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
            <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-7">
               <div className="space-y-8 lg:col-span-4">
                  {/* Main Heading with Animation */}
                  <div className="space-y-4">
                     <div className="border-primary/30 bg-primary/5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                        <span className="relative flex size-2">
                           <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                           <span className="bg-primary relative inline-flex size-2 rounded-full"></span>
                        </span>
                        <span className="text-primary font-medium">
                           Available for hire
                        </span>
                     </div>

                     <h1 className="text-text-secondary text-[32px] leading-tight font-bold md:text-[40px] lg:text-[48px]">
                        <span className="text-primary">[</span>
                        {appConfig.APP_NAME_SHORT}
                        <span className="text-primary">]</span>
                        <br />
                        <span className="mt-2 block">
                           Full-Stack{' '}
                           <span className="relative">
                              <span className="text-primary from-primary bg-gradient-to-r to-blue-400 bg-clip-text font-bold">
                                 Developer
                              </span>
                              <span className="from-primary absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r to-blue-400"></span>
                           </span>
                        </span>
                        <span className="mt-2 block text-[24px] md:text-[28px] lg:text-[32px]">
                           &{' '}
                           <span className="text-primary font-bold">
                              AI Savvy
                           </span>
                        </span>
                     </h1>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                     <p className="text-text text-lg leading-relaxed md:text-xl">
                        I engineer{' '}
                        <span className="text-primary font-semibold">
                           full-stack solutions
                        </span>{' '}
                        where{' '}
                        <span className="font-semibold text-white">
                           performance meets user experience
                        </span>
                        , powered by cutting-edge AI technologies.
                     </p>

                     {/* Tech Stack Pills */}
                     <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                           <Badge
                              key={tech}
                              text={tech}
                              variant={
                                 index % 3 === 0
                                    ? 'accent'
                                    : index % 3 === 1
                                      ? 'gradient'
                                      : 'default'
                              }
                           />
                        ))}
                     </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center gap-6 py-4">
                     {achievements.map((achievement, index) => (
                        <div
                           key={index}
                           className="group flex items-center gap-3"
                        >
                           <div className="border-primary/30 bg-primary/10 group-hover:bg-primary/20 rounded-lg border p-2 transition-colors duration-200">
                              <achievement.icon className="text-primary size-5" />
                           </div>
                           <div>
                              <div className="text-xl font-bold text-white">
                                 {achievement.label}
                              </div>
                              <div className="text-text text-sm">
                                 {achievement.desc}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col items-start gap-4 sm:flex-row">
                     <Link
                        href="/contact"
                        className={buttonVariants({
                           variant: 'outline',
                           size: 'lg',
                           className: 'group relative overflow-hidden',
                        })}
                     >
                        <span className="relative z-10">
                           Let&apos;s Work Together
                        </span>
                        <div className="bg-primary/20 absolute inset-0 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
                     </Link>
                     <Link
                        href="/resume"
                        className={buttonVariants({
                           variant: 'default',
                           size: 'lg',
                           className: 'group',
                        })}
                     >
                        <PiReadCvLogoLight className="transition-transform duration-200 group-hover:scale-110" />
                        Download Resume
                     </Link>
                  </div>
               </div>

               {/* Right Side - Image and Decorations */}
               <div className="lg:col-span-3">
                  <div className="relative flex flex-col items-center">
                     {/* Main Image with Glow Effect */}
                     <div className="group relative">
                        <div className="from-primary/20 absolute inset-0 rounded-2xl bg-gradient-to-r to-blue-500/20 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                        <div className="border-primary/20 from-primary/5 relative overflow-hidden rounded-2xl border bg-gradient-to-br to-transparent p-1">
                           <Image
                              src="/alternate/me.png"
                              alt="Hozaifa - Full Stack Developer"
                              width={457}
                              height={386}
                              quality={100}
                              className="rounded-xl transition-transform duration-500 group-hover:scale-105"
                              preload
                           />
                        </div>
                     </div>

                     {/* Floating Elements */}
                     <div className="absolute -top-5 -right-5 animate-bounce delay-300">
                        <div className="bg-primary/10 border-primary/30 rounded-full border p-3 backdrop-blur-sm">
                           <FaCode className="text-primary size-6" />
                        </div>
                     </div>

                     <div className="absolute -bottom-5 -left-5 animate-bounce delay-700">
                        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 p-3 backdrop-blur-sm">
                           <FaBrain className="size-6 text-blue-400" />
                        </div>
                     </div>

                     {/* Background Decorative Elements */}
                     <DotGridLarge className="absolute top-[13.5rem] right-2 opacity-30" />
                     <LogoSvg className="absolute top-16 left-0 -z-10 size-[155px] opacity-5" />

                     {/* Status Badge */}
                     <div className="mt-6">
                        <span
                           className={buttonVariants({
                              variant: 'outline',
                              className:
                                 '!text-text bg-bg-main/80 border-primary/40 !font-normal backdrop-blur-sm',
                           })}
                        >
                           <span className="relative flex size-4">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex size-4 rounded-full bg-green-500"></span>
                           </span>
                           Currently working at{' '}
                           <Tooltip content={appConfig.DESIGNATION}>
                              <Link
                                 href={appConfig.COMPANY_WEBSITE}
                                 className="text-primary font-semibold transition-colors duration-200 hover:text-white"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {appConfig.COMPANY}
                              </Link>
                           </Tooltip>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Quote />
      </section>
   );
};

export { HeroSection };
