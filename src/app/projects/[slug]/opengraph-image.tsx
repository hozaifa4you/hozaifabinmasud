import { notFound } from 'next/navigation';

import { siteConfig } from '@/config/site.config';
import { getProjectDetails, projectDetails } from '@/lib/data/project-details';
import { projects } from '@/lib/data/projects';
import { renderShareImage, shareImageSize } from '@/lib/share-image';

export const alt = `A project case study by ${siteConfig.name}`;
export const size = shareImageSize;
export const contentType = 'image/png';

export const generateStaticParams = () =>
   projectDetails.map(({ slug }) => ({ slug }));

const STATUS = {
   live: { label: 'Live', color: '#98c379' },
   developing: { label: 'In development', color: '#e5c07b' },
   archive: { label: 'Archived', color: '#9298a5' },
};

const Image = async ({ params }: { params: Promise<{ slug: string }> }) => {
   const { slug } = await params;
   const project = getProjectDetails(slug);
   const card = projects.find((item) => item.slug === slug);
   if (!project || !card) notFound();

   return renderShareImage({
      file: `${slug}.md`,
      title: project.name,
      lead: project.tagline,
      status: STATUS[card.status],
      facts: [project.company?.name, project.role, project.duration].filter(
         (fact): fact is string => Boolean(fact),
      ),
   });
};

export default Image;
