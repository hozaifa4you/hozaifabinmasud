import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { DirectionalPage } from '@/components/directional-page';
import { ProjectDetailsView } from '@/components/projects/project-details-view';
import { getProjectDetails, projectDetails } from '@/lib/data/project-details';

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
         <ProjectDetailsView project={project} />
      </DirectionalPage>
   );
};

export default ProjectDetailsPage;
