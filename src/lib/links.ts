import { appConfig } from '@/config/app.config';

export const RESUME_PDF = '/hozaifa-resume.pdf';

// Built from non-public env vars: use only in server components.
// Freelance marketplaces (Upwork, Fiverr) are left out while availability is
// full-time only (PRODUCT.md); their usernames stay in app.config.ts.
export const getSocialLinks = () => [
   {
      name: 'GitHub',
      handle: appConfig.GITHUB_USERNAME,
      href: `https://github.com/${appConfig.GITHUB_USERNAME}`,
   },
   {
      name: 'LinkedIn',
      handle: appConfig.LINKEDIN_USERNAME,
      href: `https://www.linkedin.com/in/${appConfig.LINKEDIN_USERNAME}/`,
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
// Server components only, like getSocialLinks.
export const getContactChannels = (): ContactChannel[] => {
   const phone = appConfig.PHONE;
   const digits = phone?.replace(/[^\d+]/g, '') ?? '';

   return [
      ...(phone
         ? [
              { label: 'phone', value: phone, href: `tel:${digits}` },
              {
                 label: 'whatsapp',
                 value: 'Message on WhatsApp',
                 href: `https://wa.me/${digits.replace('+', '')}`,
                 external: true,
                 prose: true,
              },
           ]
         : []),
      ...getSocialLinks().map((social) => ({
         label: social.name.toLowerCase(),
         value: social.handle,
         href: social.href,
         external: true,
      })),
   ];
};
