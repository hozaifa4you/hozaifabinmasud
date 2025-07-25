import Link from 'next/link';

import {
   FaEnvelope,
   FaFacebookF,
   FaGithub,
   FaLinkedinIn,
   FaUpwork,
   FaWhatsapp,
   FaXTwitter,
} from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';

import { DotGridLarge } from '@/components/ui/icons';

import { ContactForm } from '../about-me/contact-form';
import { ContentHeader } from './content-header';

const ContactSection = () => {
   return (
      <section className="section-padding relative" id="contacts">
         <div className="container">
            <ContentHeader text="contact" maxLineWidth="max-w-[130px]" />

            <div className="mt-5 grid gap-10 md:grid-cols-3 md:gap-5">
               <div className="md:col-span-2">
                  <div>
                     <p className="max-w-[510px]">
                        I’m interested in freelance opportunities. However, if
                        you have other request or question, don’t hesitate to
                        contact me
                     </p>

                     <ContactForm />
                  </div>
               </div>
               <div className="md:col-span-1">
                  <div className="border-text border p-4">
                     <p className="mb-4 font-bold text-white">Message here!!</p>

                     <div>
                        <p className="line-clamp-1 inline-flex items-center gap-1.5 md:text-sm lg:text-base">
                           <FaEnvelope className="size-5" />
                           hozaifabinmasud@gmail.com
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1.5 md:text-sm lg:text-base">
                           <FaWhatsapp className="size-5" /> +880 1918 780770
                        </p>

                        <ul className="mt-3 flex items-center gap-4">
                           <li>
                              <Link
                                 href="https://github.com/hozaifa4you"
                                 target="_blank"
                                 className="hover:text-primary transition-all duration-200 ease-in-out"
                              >
                                 <FaGithub className="size-5" />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://www.linkedin.com/in/hozaifa-bin-masud-4b7835244/"
                                 target="_blank"
                                 className="hover:text-primary transition-all duration-200 ease-in-out"
                              >
                                 <FaLinkedinIn className="size-5" />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://facebook.com/hozaifa4you"
                                 target="_blank"
                                 className="hover:text-primary transition-all duration-200 ease-in-out"
                              >
                                 <FaFacebookF className="size-5" />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://x.com/hozaifa4you"
                                 target="_blank"
                                 className="hover:text-primary transition-all duration-200 ease-in-out"
                              >
                                 <FaXTwitter className="size-5" />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://www.upwork.com/freelancers/~01f0b1c3d4e5a6b7c8"
                                 target="_blank"
                                 className="hover:text-primary transition-all duration-200 ease-in-out"
                              >
                                 <FaUpwork className="size-5" />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://www.fiverr.com/hozaifa4you"
                                 target="_blank"
                                 className="hover:text-primary transition-all duration-200 ease-in-out"
                              >
                                 <TbBrandFiverr className="size-5" />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <DotGridLarge className="absolute top-1/2 -left-5" />
      </section>
   );
};

export { ContactSection };
