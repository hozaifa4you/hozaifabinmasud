import { Breadcrumb } from '@/components/breadcrumb';
import Link from 'next/link';
import {
   FaFacebookF,
   FaGithub,
   FaXTwitter,
   FaWhatsapp,
   FaEnvelope,
   FaUpwork,
   FaLinkedinIn,
   FaBitcoin,
   FaLink,
} from 'react-icons/fa6';
import { DotGridLarge } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TbBrandFiverr } from 'react-icons/tb';
import { FaEthereum } from 'react-icons/fa';

const ContactPage = () => {
   return (
      <>
         <Breadcrumb title="contact" subtitle="Are your interested?" />

         <section className="section-padding relative">
            <div className="container">
               <div className="grid gap-5 xl:grid-cols-3">
                  <div className="xl:col-span-2">
                     <div>
                        <p className="max-w-[510px]">
                           I’m interested in freelance opportunities. However,
                           if you have other request or question, don’t hesitate
                           to contact me
                        </p>

                        <h4 className="mt-10 mb-5 text-2xl font-semibold">
                           <span className="text-primary">#</span>
                           contact-with=me
                        </h4>
                        <form action="#" className="grid gap-4">
                           <div className="grid gap-4 md:grid-cols-2">
                              <Input
                                 label={
                                    <span>
                                       <span className="text-primary">@</span>
                                       your-name
                                    </span>
                                 }
                                 autoComplete="off"
                              />
                              <Input
                                 label={
                                    <span>
                                       <span className="text-primary">@</span>
                                       your-email
                                    </span>
                                 }
                                 autoComplete="off"
                              />
                           </div>

                           <Input
                              label={
                                 <span>
                                    <span className="text-primary">@</span>
                                    subject
                                 </span>
                              }
                              autoComplete="off"
                           />

                           <Textarea
                              label={
                                 <span>
                                    <span className="text-primary">@</span>
                                    message
                                 </span>
                              }
                              autoComplete="off"
                           />

                           <Button variant="outline" className="w-fit">
                              <span>
                                 <span className="text-primary">@</span>send
                              </span>
                           </Button>
                        </form>
                     </div>
                  </div>
                  <div className="xl:col-span-1">
                     <div className="grid gap-4">
                        <div className="border-text border p-4">
                           <p className="mb-4 font-bold text-white">
                              Message here!!
                           </p>

                           <div>
                              <p className="inline-flex items-center gap-1.5">
                                 <FaEnvelope className="size-5" />{' '}
                                 hozaifabinmasud@gmail.com
                              </p>
                              <p className="mt-1 inline-flex items-center gap-1.5">
                                 <FaWhatsapp className="size-5" /> +880 1918
                                 780770
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
                                       <FaLinkedinIn className="size-5" />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       href="https://facebook.com/hozaifa4you"
                                       target="_blank"
                                    >
                                       <FaFacebookF className="size-5" />
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
                                 <li>
                                    <Link
                                       href="https://www.upwork.com/freelancers/~01f0b1c3d4e5a6b7c8"
                                       target="_blank"
                                    >
                                       <FaUpwork className="size-5" />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       href="https://www.fiverr.com/hozaifa4you"
                                       target="_blank"
                                    >
                                       <TbBrandFiverr className="size-5" />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>

                        <div className="border-text border">
                           <p className="px-4 pt-4 font-bold text-white">
                              Support now!!
                           </p>

                           <div className="p-4">
                              <ul className="grid gap-3">
                                 <li className="flex items-center justify-between gap-5">
                                    <div className="flex items-center gap-1.5">
                                       <FaBitcoin className="text-primary" />
                                       <span className="text-primary font-medium">
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
                                       <span className="text-primary font-medium">
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
