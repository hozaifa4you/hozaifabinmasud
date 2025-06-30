import Link from 'next/link';
import { ContentHeader } from './content-header';
import {
   FaFacebook,
   FaGithub,
   FaXTwitter,
   FaWhatsapp,
   FaEnvelope,
   FaLinkedin,
} from 'react-icons/fa6';
import { DotGridIcon } from '../ui/icons';

const ContactSection = () => {
   return (
      <section className="section-padding relative">
         <div className="container">
            <ContentHeader text="contact" maxLineWidth="max-w-[130px]" />

            <div className="mt-5 grid gap-5 xl:grid-cols-3">
               <div className="xl:col-span-2">
                  <p className="max-w-[510px]">
                     I’m interested in freelance opportunities. However, if you
                     have other request or question, don’t hesitate to contact
                     me
                  </p>
               </div>
               <div className="xl:col-span-1">
                  <div className="border-text border p-4">
                     <p className="mb-4 font-bold text-white">Message here!!</p>

                     <div>
                        <p className="inline-flex items-center gap-1.5">
                           <FaEnvelope className="size-5" />{' '}
                           hozaifabinmasud@gmail.com
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1.5">
                           <FaWhatsapp className="size-5" /> +380 95 123 4567
                        </p>

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
                                 href="https://facebook.com/hozaifa4you"
                                 target="_blank"
                              >
                                 <FaFacebook className="size-5" />
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="https://x.com/hozaifa4you"
                                 target="_blank"
                              >
                                 <FaXTwitter className="size-5" />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <DotGridIcon className="absolute top-1/2 -left-5" />
      </section>
   );
};

export { ContactSection };
