import { siteConfig } from '@/config/site.config';
import { getExperienceYears, getProjectCount } from '@/lib/profile';
import { renderShareImage, shareImageSize } from '@/lib/share-image';

export const revalidate = 86400;

export const alt = `${siteConfig.name}, full-stack developer`;
export const size = shareImageSize;
export const contentType = 'image/png';

const Image = () =>
   renderShareImage({
      file: 'README.md',
      title: siteConfig.name,
      lead: 'Full-stack developer who builds web apps end to end and ships AI features in production.',
      status: { label: 'Open to full-time roles', color: '#98c379' },
      facts: [
         `${getExperienceYears()}+ yrs experience`,
         `${getProjectCount()} projects`,
         'Bangladesh · GMT+6',
      ],
   });

export default Image;
