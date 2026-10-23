import type { MetadataRoute } from 'next';

import { getEducation, getTrainings } from '@/lib/data/education';
import { projectDetails } from '@/lib/data/project-details';
import { siteUrl } from '@/lib/seo';

const sitemap = (): MetadataRoute.Sitemap =>
   [
      '/',
      '/projects',
      ...projectDetails.map(({ slug }) => `/projects/${slug}`),
      '/works',
      ...(getEducation().length > 0 ? ['/educations'] : []),
      ...(getTrainings().length > 0 ? ['/trainings'] : []),
      '/about-me',
      '/resume',
      '/contact',
   ].map((path) => ({ url: `${siteUrl}${path === '/' ? '' : path}` }));

export default sitemap;
