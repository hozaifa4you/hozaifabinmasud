import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import {
   FaFacebookF,
   FaGithub,
   FaLinkedin,
   FaUpwork,
   FaXTwitter,
} from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';

import { DotGridRect, LogoSvg } from '@/components/ui/icons';
import { appConfig } from '@/config/app.config';

const Footer = () => {
   const currentYear = new Date().getFullYear();

   const quickLinks = [
      { label: 'About', href: '/about-me' },
      { label: 'Projects', href: '/projects' },
      { label: 'Resume', href: '/resume' },
      { label: 'Works', href: '/works' },
      { label: 'Contact', href: '/contact' },
   ];

   const services = [
      { label: 'Full-Stack Development', href: '/projects' },
      { label: 'AI Development', href: '/projects' },
      { label: 'Web Applications', href: '/projects' },
      { label: 'API Development', href: '/projects' },
      { label: 'Database Design', href: '/projects' },
   ];

   return (
      <footer className="border-text/30 bg-bg-main relative mt-20 border-t">
         {/* Background decorative elements */}
         <DotGridRect className="absolute top-10 right-5 opacity-20" />
         <LogoSvg className="absolute bottom-10 left-5 size-[100px] opacity-10" />

         <div className="container py-16">
            {/* Main Footer Content */}
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
               {/* Brand Section */}
               <div className="lg:col-span-1">
                  <Link
                     href="/"
                     className="hover:text-primary inline-flex items-center gap-3 text-xl font-bold text-white transition-colors duration-200"
                  >
                     <Image
                        src="/assets/logo-2.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                        className="rounded"
                     />
                     <span className="font-mono">
                        <span className="text-primary">[</span>
                        {appConfig.FIRST_NAME}
                        <span className="text-primary">]</span>
                     </span>
                  </Link>

                  <p className="text-text mt-4 leading-relaxed">
                     <span className="text-primary font-semibold">
                        Full-Stack Developer
                     </span>{' '}
                     &
                     <span className="text-primary font-semibold">
                        {' '}
                        AI Developer
                     </span>{' '}
                     passionate about creating innovative digital solutions that
                     bridge performance with user experience.
                  </p>

                  {/* Contact Info */}
                  <div className="mt-6 space-y-3">
                     <div className="flex items-center gap-3 text-sm">
                        <FaMapMarkerAlt className="text-primary size-4 flex-shrink-0" />
                        <span>{appConfig.ADDRESS}</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm">
                        <FaEnvelope className="text-primary size-4 flex-shrink-0" />
                        <Link
                           href={`mailto:${appConfig.EMAIL}`}
                           className="hover:text-primary transition-colors duration-200"
                        >
                           {appConfig.EMAIL}
                        </Link>
                     </div>
                     <div className="flex items-center gap-3 text-sm">
                        <FaPhone className="text-primary size-4 flex-shrink-0" />
                        <Link
                           href={`tel:${appConfig.PHONE}`}
                           className="hover:text-primary transition-colors duration-200"
                        >
                           {appConfig.PHONE}
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className="text-text-secondary mb-6 text-lg font-semibold">
                     <span className="text-primary">#</span>navigation
                  </h3>
                  <ul className="space-y-3">
                     {quickLinks.map((link) => (
                        <li key={link.href}>
                           <Link
                              href={link.href}
                              className="text-text hover:text-primary inline-block transform text-sm transition-all duration-200 hover:translate-x-1"
                           >
                              <span className="text-primary">→ </span>
                              {link.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Services */}
               <div>
                  <h3 className="text-text-secondary mb-6 text-lg font-semibold">
                     <span className="text-primary">#</span>services
                  </h3>
                  <ul className="space-y-3">
                     {services.map((service) => (
                        <li key={service.label}>
                           <Link
                              href={service.href}
                              className="text-text hover:text-primary inline-block transform text-sm transition-all duration-200 hover:translate-x-1"
                           >
                              <span className="text-primary">→ </span>
                              {service.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Social & Newsletter */}
               <div>
                  <h3 className="text-text-secondary mb-6 text-lg font-semibold">
                     <span className="text-primary">#</span>connect
                  </h3>

                  <p className="text-text mb-4 text-sm">
                     Follow me on social media for updates and insights into my
                     development journey.
                  </p>

                  {/* Social Links */}
                  <div className="mb-6 flex flex-wrap gap-3">
                     <Link
                        href={`https://github.com/${appConfig.GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-text/30 hover:border-primary bg-bg-main hover:bg-primary/10 group border p-2 transition-all duration-200"
                        title="GitHub"
                     >
                        <FaGithub className="group-hover:text-primary size-5 transition-colors duration-200" />
                     </Link>

                     <Link
                        href={`https://www.linkedin.com/in/${appConfig.LINKEDIN_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-text/30 hover:border-primary bg-bg-main hover:bg-primary/10 group border p-2 transition-all duration-200"
                        title="LinkedIn"
                     >
                        <FaLinkedin className="group-hover:text-primary size-5 transition-colors duration-200" />
                     </Link>

                     <Link
                        href={`https://facebook.com/${appConfig.FACEBOOK_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-text/30 hover:border-primary bg-bg-main hover:bg-primary/10 group border p-2 transition-all duration-200"
                        title="Facebook"
                     >
                        <FaFacebookF className="group-hover:text-primary size-5 transition-colors duration-200" />
                     </Link>

                     <Link
                        href={`https://x.com/${appConfig.X_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-text/30 hover:border-primary bg-bg-main hover:bg-primary/10 group border p-2 transition-all duration-200"
                        title="X (Twitter)"
                     >
                        <FaXTwitter className="group-hover:text-primary size-5 transition-colors duration-200" />
                     </Link>

                     <Link
                        href={`https://www.fiverr.com/${appConfig.FIVERR_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-text/30 hover:border-primary bg-bg-main hover:bg-primary/10 group border p-2 transition-all duration-200"
                        title="Fiverr"
                     >
                        <TbBrandFiverr className="group-hover:text-primary size-5 transition-colors duration-200" />
                     </Link>

                     <Link
                        href={`https://www.upwork.com/freelancers/~${appConfig.UPWORK_USERNAME}?mp_source=share`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-text/30 hover:border-primary bg-bg-main hover:bg-primary/10 group border p-2 transition-all duration-200"
                        title="Upwork"
                     >
                        <FaUpwork className="group-hover:text-primary size-5 transition-colors duration-200" />
                     </Link>
                  </div>

                  {/* Status Badge */}
                  <div className="border-primary/30 bg-primary/5 rounded-none border p-3">
                     <div className="flex items-center gap-2 text-sm">
                        <span className="relative flex size-3">
                           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                           <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                        </span>
                        <span className="text-text">
                           Available for projects
                        </span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Section */}
            <div className="border-text/20 mt-16 border-t pt-8">
               <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <div className="text-text flex items-center gap-2 text-sm">
                     <span>
                        &copy; {currentYear} {appConfig.APP_NAME_SHORT}. All
                        rights reserved.
                     </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                     <Link
                        href="/privacy-policy"
                        className="text-text hover:text-primary transition-colors duration-200"
                     >
                        Privacy Policy
                     </Link>
                     <Link
                        href="/terms-of-service"
                        className="text-text hover:text-primary transition-colors duration-200"
                     >
                        Terms of Service
                     </Link>
                  </div>

                  <div className="text-text flex items-center gap-2 text-sm">
                     <span>Made with</span>
                     <FaHeart className="size-4 animate-pulse text-red-500" />
                     <span>and</span>
                     <span className="text-primary font-mono">{'<code/>'}</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export { Footer };
