'use client';

import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { HiOutlineEmojiSad } from 'react-icons/hi';

import { buttonVariants } from '@/components/ui/button';
import { DotGridLarge, LogoSvg } from '@/components/ui/icons';

const NotFoundPage = () => {
   return (
      <div className="section-padding flex min-h-screen items-center justify-center">
         <div className="container">
            <div className="relative mx-auto max-w-4xl text-center">
               <DotGridLarge className="absolute -top-16 -left-16 opacity-30" />
               <DotGridLarge className="absolute -right-16 -bottom-16 opacity-30" />
               <LogoSvg className="absolute top-1/2 left-1/2 -z-10 size-[300px] -translate-x-1/2 -translate-y-1/2 opacity-10" />

               <div className="relative z-10">
                  <div className="mb-8">
                     <h1 className="text-[120px] leading-none font-bold md:text-[160px] lg:text-[200px]">
                        <span className="text-primary">4</span>
                        <span className="relative text-text-secondary">
                           0
                           <HiOutlineEmojiSad className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-primary opacity-80 md:size-20 lg:size-24" />
                        </span>
                        <span className="text-primary">4</span>
                     </h1>
                  </div>

                  <div className="mb-8 space-y-4">
                     <h2 className="text-2xl font-semibold text-text-secondary md:text-3xl lg:text-4xl">
                        <span className="text-primary">[</span>
                        Page Not Found
                        <span className="text-primary">]</span>
                     </h2>
                     <p className="mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
                        <span className="text-primary">#</span>
                        Oops! It seems like the page you&apos;re looking for has{' '}
                        <span className="font-semibold text-primary">
                           wandered off
                        </span>{' '}
                        into the digital void.
                     </p>
                     <p className="mx-auto max-w-xl text-base opacity-80">
                        Don&apos;t worry, even the best developers encounter{' '}
                        <span className="font-mono text-primary">404s</span>.
                        Let&apos;s get you back on track!
                     </p>
                  </div>

                  <div className="mb-8 inline-block">
                     <div className="border border-text bg-bg-main/50 backdrop-blur-sm">
                        <div className="border-b border-b-text p-3">
                           <span className="font-mono text-sm text-primary">
                              ~/error.log
                           </span>
                        </div>
                        <div className="p-6 text-left font-mono">
                           <div className="space-y-2 text-sm">
                              <div>
                                 <span className="text-primary">Error:</span>{' '}
                                 <span className="text-danger">HTTP 404</span>
                              </div>
                              <div>
                                 <span className="text-primary">Status:</span>{' '}
                                 <span className="text-yellow-400">
                                    Not Found
                                 </span>
                              </div>
                              <div>
                                 <span className="text-primary">Message:</span>{' '}
                                 <span className="text-text">
                                    Resource does not exist
                                 </span>
                              </div>
                              <div>
                                 <span className="text-primary">
                                    Suggestion:
                                 </span>{' '}
                                 <span className="text-success">
                                    Navigate to homepage
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                     <Link
                        href="/"
                        className={buttonVariants({
                           variant: 'outline',
                           size: 'lg',
                           className: 'group',
                        })}
                     >
                        <FaHome className="transition-transform duration-200 group-hover:scale-110" />
                        Back to Home
                     </Link>

                     <Link
                        href="/projects"
                        className={buttonVariants({
                           variant: 'default',
                           size: 'lg',
                           className: 'group',
                        })}
                     >
                        <FaSearch className="transition-transform duration-200 group-hover:scale-110" />
                        Explore Projects
                     </Link>
                  </div>

                  <div className="border-t border-text/30 pt-8">
                     <p className="mb-4 text-sm text-text/80">
                        <span className="text-primary">#</span>
                        Quick Navigation
                     </p>
                     <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                           href="/about-me"
                           className="text-sm underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline"
                        >
                           About Me
                        </Link>
                        <span className="text-text/30">|</span>
                        <Link
                           href="/resume"
                           className="text-sm underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline"
                        >
                           Resume
                        </Link>
                        <span className="text-text/30">|</span>
                        <Link
                           href="/contact"
                           className="text-sm underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline"
                        >
                           Contact
                        </Link>
                        <span className="text-text/30">|</span>
                        <Link
                           href="/works"
                           className="text-sm underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline"
                        >
                           Works
                        </Link>
                     </div>
                  </div>

                  <div className="mt-8 rounded-none border border-primary/30 bg-primary/5 p-4">
                     <p className="font-mono text-sm">
                        <span className="text-primary">{'//'} </span>
                        &quot;There are only 10 types of people: those who
                        understand binary and those who don&apos;t.&quot;
                     </p>
                     <p className="mt-2 text-xs text-text/60">
                        - A classic developer joke while you&apos;re here 😉
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFoundPage;
