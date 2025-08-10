'use client';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { Breadcrumb } from '@/components/breadcrumb';
import { ProjectCard } from '@/components/home/project-card';
import { ProjectCardSmall } from '@/components/projects/project-card-small';
import { projects, smallProjects } from '@/lib/data/projects';

const ProjectsPage = () => {
   return (
      <>
         <Breadcrumb
            title="projects"
            subtitle="List of projects under employment & personal."
         />

         <div className="container mt-5">
            <ResponsiveMasonry columnsCountBreakPoints={{ 640: 2, 1024: 3 }}>
               <Masonry gutter="16px" className="gap-4">
                  {projects.map((project) => (
                     <ProjectCard key={project.id} {...project} />
                  ))}
               </Masonry>
            </ResponsiveMasonry>
         </div>

         <div className="section-padding container">
            <h4 className="text-text-secondary text-[26px] font-medium md:text-[28px] lg:text-[32px]">
               <span className="text-primary text-pretty">#</span>small-projects
            </h4>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
               {smallProjects.map((project) => (
                  <ProjectCardSmall key={project.id} {...project} />
               ))}
            </div>
         </div>
      </>
   );
};

export default ProjectsPage;
