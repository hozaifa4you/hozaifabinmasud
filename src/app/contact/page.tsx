import Link from 'next/link';
import { FaEthereum } from 'react-icons/fa';
import {
   FaBitcoin,
   FaEnvelope,
   FaFacebookF,
   FaGithub,
   FaLink,
   FaLinkedinIn,
   FaUpwork,
   FaWhatsapp,
   FaXTwitter,
} from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';

import { ContactForm } from '@/components/about-me/contact-form';
import { Breadcrumb } from '@/components/breadcrumb';
import { DotGridLarge } from '@/components/ui/icons';
import { appConfig } from '@/config/app.config';

const ContactPage = () => {
   return (
      <>
         <Breadcrumb title="contact" subtitle="Are your interested?" />

         <section className="relative mb-10">
            <div className="container">
               <div className="grid gap-8 md:grid-cols-3 md:gap-5">
                  <div className="md:col-span-2">
                     <div>
                        <p className="max-w-[510px]">
                           I’m interested in freelance opportunities. However,
                           if you have other request or question, don’t hesitate
                           to contact me
                        </p>

                        <ContactForm />
                     </div>
                  </div>
                  <div className="md:col-span-1">
                     <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
                        <div className="border border-text p-4">
                           <p className="mb-4 font-bold text-white">
                              Message here!!
                           </p>

                           <div>
                              <p className="inline-flex items-center gap-1.5">
                                 <FaEnvelope className="size-5" />{' '}
                                 {appConfig.EMAIL}
                              </p>
                              <p className="mt-1 inline-flex items-center gap-1.5">
                                 <FaWhatsapp className="size-5" />{' '}
                                 {appConfig.PHONE}
                              </p>

                              <ul className="mt-3 flex items-center gap-4">
                                 <li>
                                    <Link
                                       href={`https://github.com/${appConfig.GITHUB_USERNAME}`}
                                       target="_blank"
                                       className="transition-all duration-200 ease-in-out hover:text-primary"
                                       referrerPolicy="no-referrer"
                                    >
                                       <FaGithub className="size-5" />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       href={`https://www.linkedin.com/in/${appConfig.LINKEDIN_USERNAME}`}
                                       target="_blank"
                                       className="transition-all duration-200 ease-in-out hover:text-primary"
                                       referrerPolicy="no-referrer"
                                    >
                                       <FaLinkedinIn className="size-5" />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       href={`https://facebook.com/${appConfig.FACEBOOK_USERNAME}`}
                                       target="_blank"
                                       className="transition-all duration-200 ease-in-out hover:text-primary"
                                    >
                                       <FaFacebookF className="size-5" />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       href={`https://x.com/${appConfig.X_USERNAME}`}
                                       target="_blank"
                                       className="transition-all duration-200 ease-in-out hover:text-primary"
                                    >
                                       <FaXTwitter className="size-5" />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       href={`https://www.upwork.com/freelancers/~${appConfig.UPWORK_USERNAME}?mp_source=share`}
                                       target="_blank"
                                       className="transition-all duration-200 ease-in-out hover:text-primary"
                                    >
                                       <FaUpwork className="size-5" />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       href={`https://www.fiverr.com/${appConfig.FIVERR_USERNAME}`}
                                       target="_blank"
                                       className="transition-all duration-200 ease-in-out hover:text-primary"
                                    >
                                       <TbBrandFiverr className="size-5" />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div className="border border-text">
                           <p className="px-4 pt-4 font-bold text-white">
                              Support me!!
                           </p>

                           <div className="p-4">
                              <ul className="grid gap-3">
                                 <li className="flex items-center justify-between gap-5">
                                    <div className="flex items-center gap-1.5">
                                       <FaBitcoin className="text-primary" />
                                       <span className="font-medium text-primary">
                                          Bitcoin
                                       </span>
                                    </div>
                                    <Link target="_blank" href="#">
                                       <FaLink />
                                    </Link>
                                 </li>
                                 <li className="flex items-center justify-between gap-5">
                                    <div className="flex items-center gap-1.5">
                                       <FaEthereum className="text-primary" />
                                       <span className="font-medium text-primary">
                                          Ethereum
                                       </span>
                                    </div>
                                    <Link target="_blank" href="#">
                                       <FaLink />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <DotGridLarge className="absolute top-1/2 -left-5" />
         </section>
      </>
   );
};

export default ContactPage;
