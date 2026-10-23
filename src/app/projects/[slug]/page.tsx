import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DirectionalPage } from '@/components/directional-page';
import {
   NextProject,
   ProjectDetailsView,
} from '@/components/projects/project-details-view';
import {
   getProjectDetails,
   hasProjectDetails,
   projectDetails,
} from '@/lib/data/project-details';
import { projects } from '@/lib/data/projects';

type Props = {
   params: Promise<{ slug: string }>;
};

// Only projects with detail data get a page; any other slug is a real 404
export const dynamicParams = false;

export const generateStaticParams = () =>
   projectDetails.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({
   params,
}: Props): Promise<Metadata> => {
   const { slug } = await params;
   const project = getProjectDetails(slug);
   if (!project) {
      return {};
   }

   return {
      title: project.title,
      description: project.description,
      alternates: { canonical: `/projects/${slug}` },
   };
};

// The project after this one in the list, as the page's last exit. Without a
// case study of its own it opens in the homepage explorer instead
const getNextProject = (slug: string): NextProject | undefined => {
   const index = projects.findIndex((project) => project.slug === slug);
   const next = projects[(index + 1) % projects.length];
   if (!next || next.slug === slug) return undefined;
   return hasProjectDetails(next.slug)
      ? { title: next.title, href: `/projects/${next.slug}`, isCaseStudy: true }
      : {
           title: next.title,
           href: `/#project-${next.slug}`,
           isCaseStudy: false,
        };
};

const ProjectDetailsPage = async ({ params }: Props) => {
   const { slug } = await params;
   const project = getProjectDetails(slug);
   if (!project) {
      notFound();
   }

   return (
      <DirectionalPage>
         <ProjectDetailsView
            project={project}
            nextProject={getNextProject(slug)}
         />
      </DirectionalPage>
   );
};

export default ProjectDetailsPage;
