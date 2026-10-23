import { siteConfig } from '@/config/site.config';

export const RESUME_PDF = '/hozaifa-resume.pdf';

// Freelance marketplaces (Upwork, Fiverr) are left out while availability is
// full-time only (PRODUCT.md).
export const getSocialLinks = () => [
   {
      name: 'GitHub',
      handle: siteConfig.githubUsername,
      href: `https://github.com/${siteConfig.githubUsername}`,
   },
   {
      name: 'LinkedIn',
      handle: siteConfig.linkedinUsername,
      href: `https://www.linkedin.com/in/${siteConfig.linkedinUsername}/`,
   },
];

export interface ContactChannel {
   /** Mono key that names the channel */
   label: string;
   value: string;
   href: string;
   external?: boolean;
   /** Words, not data: set in the reading face */
   prose?: boolean;
}

// The direct channels after email: phone and WhatsApp, then the profiles.
export const getContactChannels = (): ContactChannel[] => {
   const { phone } = siteConfig;
   const digits = phone.replace(/[^\d+]/g, '');

   return [
      { label: 'phone', value: phone, href: `tel:${digits}` },
      {
         label: 'whatsapp',
         value: 'Message on WhatsApp',
         href: `https://wa.me/${digits.replace('+', '')}`,
         external: true,
         prose: true,
      },
      ...getSocialLinks().map((social) => ({
         label: social.name.toLowerCase(),
         value: social.handle,
         href: social.href,
         external: true,
      })),
   ];
};
