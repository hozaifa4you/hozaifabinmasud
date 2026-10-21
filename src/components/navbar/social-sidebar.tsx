import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';

import { appConfig } from '@/config/app.config';

// Server component: reads non-public env vars, so the client Navbar receives it as a slot
const SocialSidebar = () => {
   return (
      <div className="fixed top-0 left-5 hidden w-5 flex-col justify-center gap-3 lg:flex">
         <div className="mx-auto h-[190px] w-px bg-text"></div>
         <div>
            <ul className="flex flex-col gap-2">
               <li>
                  <Link
                     href={`https://github.com/${appConfig.GITHUB_USERNAME}`}
                     target="_blank"
                  >
                     <FaGithub className="h-5 w-5" />
                  </Link>
               </li>
               <li>
                  <Link
                     href={`https://www.linkedin.com/in/${appConfig.LINKEDIN_USERNAME}/`}
                     target="_blank"
                  >
                     <FaLinkedin className="size-5" />
                  </Link>
               </li>
               <li>
                  <Link
                     href={`https://www.fiverr.com/${appConfig.FIVERR_USERNAME}`}
                     target="_blank"
                  >
                     <TbBrandFiverr className="size-5" />
                  </Link>
               </li>
               <li>
                  <Link
                     href={`https://www.upwork.com/freelancers/~${appConfig.UPWORK_USERNAME}?mp_source=share`}
                     target="_blank"
                  >
                     <FaUpwork className="size-5" />
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export { SocialSidebar };
