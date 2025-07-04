import { Breadcrumb } from '@/components/breadcrumb';
import { ProjectCard } from '@/components/home/project-card';
import { projectsAll } from '@/lib/data';

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
         </div>
      </>
   );
};

export default ProjectsPage;
