import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaUpwork } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si';

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
                           alt="Hozaifa"
                           width={16}
                           height={16}
                        />
                        Hozaifa
                     </Link>

                     <Link href={'/'}>hozaifabinmasud.com</Link>
                  </div>

                  <p className="mt-4 text-white">
                     Full-Stack Developer & AI Developer
                  </p>
               </div>

               <div className="flex sm:justify-end">
                  <div>
                     <span className="block font-semibold text-white">
                        Media
                     </span>

                     <ul className="mt-3 flex items-center gap-4">
                        <li>
                           <Link
                              href="https://github.com/hozaifa4you"
                              target="_blank"
                           >
                              <FaGithub className="size-5" />
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="https://www.linkedin.com/in/hozaifa-bin-masud-4b7835244/"
                              target="_blank"
                           >
                              <FaLinkedin className="size-5" />
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="https://www.fiverr.com/hozaifa4you"
                              target="_blank"
                           >
                              <SiFiverr className="size-5" />
                           </Link>
                        </li>
                        <li>
                           <Link
                              href="https://www.upwork.com/freelancers/~01361961bd46c0b936?mp_source=share"
                              target="_blank"
                           >
                              <FaUpwork className="size-5" />
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            <p className="mt-5 text-center text-sm">
               &copy;{new Date().getFullYear()} Hozaifa Bin Masud. All rights
               reserved.
            </p>
         </div>
      </footer>
   );
};

export { Footer };
