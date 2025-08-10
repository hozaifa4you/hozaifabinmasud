import { Badge } from '../ui/badge';
import { DotGridLarge, SquareBox } from '../ui/icons';
import { ContentHeader } from './content-header';
import { ProjectCard } from './project-card';
import { projects } from '@/lib/data/projects';

const ProjectsSection = () => {
   return (
      <section className="relative" id="projects">
         <div className="section-padding container">
            <ContentHeader
               text="projects"
               maxLineWidth="lg:max-w-[510px] md:max-w-[250px] max-w-0 sm:max-w-[150px]"
               buttonText={<Badge text="#show_more" variant="gradient" />}
               navigateUrl="/projects"
            />

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
               {projects.slice(0, 3).map((project) => (
                  <div key={project.id}>
                     <ProjectCard {...project} />
                  </div>
               ))}
            </div>
         </div>

         <SquareBox className="absolute top-1/2 right-0 hidden lg:block" />
         <DotGridLarge className="absolute top-1/3 -left-12 hidden lg:block" />
      </section>
   );
};

export { ProjectsSection };
