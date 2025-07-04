import { Breadcrumb } from '@/components/breadcrumb';
import { ProjectCard } from '@/components/home/project-card';
import { Pagination } from '@/components/pagination';
import { ProjectCardSmall } from '@/components/projects/project-card-small';
import { projectsAll, smallProjects } from '@/lib/data';

const ProjectsPage = () => {
   return (
      <>
         <Breadcrumb
            title="projects"
            subtitle="List of projects under employment & personal."
         />

         <div className="container mt-5">
            <div className="grid gap-4 lg:grid-cols-3">
               {projectsAll.map((project) => (
                  <ProjectCard key={project.id} {...project} />
               ))}
            </div>

            <Pagination />
         </div>

         <div className="section-padding container">
            <h4 className="text-text-secondary text-[32px] font-medium">
               <span className="text-primary text-pretty">#</span>small-projects
            </h4>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
               {smallProjects.map((project) => (
                  <ProjectCardSmall key={project.id} {...project} />
               ))}
            </div>

            <Pagination />
         </div>
      </>
   );
};

export default ProjectsPage;
