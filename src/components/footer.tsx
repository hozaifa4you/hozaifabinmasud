import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';

import { appConfig } from '@/config/app.config';

const Footer = () => {
   return (
      <footer>
         <hr />
         <div className="container py-5">
            <div className="grid gap-5 sm:grid-cols-2">
               <div>
                  <div className="flex items-center gap-5">
                     <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold text-white"
                     >
                        <Image
                           src="/assets/logo-2.svg"
                           alt="#"
                           width={16}
                           height={16}
                        />
                        {appConfig.FIRST_NAME}
                     </Link>

                     <Link href={'/contact'}>{appConfig.EMAIL}</Link>
                  </div>

                  <p className="mt-4 text-white">
                     Full-Stack Developer & AI Developer
                  </p>
               </div>

               <div className="flex sm:justify-end">
                  <div>
                     <span className="block font-semibold text-white">
                        Medias
                     </span>

                     <ul className="mt-3 flex items-center gap-4">
                        <li>
                           <Link
                              href={`https://github.com/${appConfig.GITHUB_USERNAME}`}
                              target="_blank"
                              className="hover:text-primary transition-all duration-200 ease-in-out"
                           >
                              <FaGithub className="size-5" />
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={`https://www.linkedin.com/in/${appConfig.LINKEDIN_USERNAME}`}
                              target="_blank"
                              className="hover:text-primary transition-all duration-200 ease-in-out"
                           >
                              <FaLinkedin className="size-5" />
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={`https://www.fiverr.com/${appConfig.FIVERR_USERNAME}`}
                              target="_blank"
                              className="hover:text-primary transition-all duration-200 ease-in-out"
                           >
                              <TbBrandFiverr className="size-5" />
                           </Link>
                        </li>
                        <li>
                           <Link
                              href={`https://www.upwork.com/freelancers/~${appConfig.UPWORK_USERNAME}?mp_source=share`}
                              target="_blank"
                              className="hover:text-primary transition-all duration-200 ease-in-out"
                           >
                              <FaUpwork className="size-5" />
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <p className="mt-5 text-center text-sm">
               &copy;{new Date().getFullYear()} {appConfig.APP_NAME_SHORT}. All
               rights reserved.
            </p>
         </div>
      </footer>
   );
};

export { Footer };
