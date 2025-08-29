import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { getProjectDetails } from '@/lib/data/project-details';

type Props = {
   params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
   params,
}: Props): Promise<Metadata> => {
   const { slug } = await params;
   if (!slug) {
      return notFound();
   }

   const projectDetails = getProjectDetails(slug);
   if (!projectDetails) {
      return notFound();
   }

   return {
      title: projectDetails.title,
      description: projectDetails.description,
   };
};

const projectDetailsLayout = ({ children }: PropsWithChildren) => {
   return <>{children}</>;
};

export default projectDetailsLayout;
