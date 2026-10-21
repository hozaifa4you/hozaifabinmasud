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
