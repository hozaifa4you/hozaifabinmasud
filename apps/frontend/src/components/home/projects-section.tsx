import { projects } from '@/lib/mock-data';
import { ContentHeader } from './content-header';
import { ProjectCard } from './project-card';
import { DotGridLarge, SquareBox } from '../ui/icons';

const ProjectsSection = () => {
   return (
      <section className="relative" id="projects">
         <div className="section-padding container">
            <ContentHeader
               text="projects"
               maxLineWidth="max-w-[510px]"
               buttonText="#view_all"
               navigateUrl="/projects"
            />

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
               {projects.map((project) => (
                  <ProjectCard {...project} key={project.id} />
               ))}
            </div>
         </div>

         <SquareBox className="absolute top-1/2 right-0" />
         <DotGridLarge className="absolute top-1/3 -left-12" />
      </section>
   );
};

export { ProjectsSection };
