import { projects } from '@/lib/mock-data';
import { ContentHeader } from './content-header';
import { ProjectCard } from './project-card';
import { DotGridLarge, SquareBox } from '../ui/icons';
import { Badge } from '../ui/badge';

const ProjectsSection = () => {
   return (
      <section className="relative" id="projects">
         <div className="section-padding container">
            <ContentHeader
               text="projects"
               maxLineWidth="lg:max-w-[510px] md:max-w-[250px] max-w-0 sm:max-w-[150px]"
               buttonText={<Badge text="#showMore" variant="gradient" />}
               navigateUrl="/projects"
            />

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
               {projects.map((project, index) => (
                  <ProjectCard {...project} key={index} />
               ))}
            </div>
         </div>

         <SquareBox className="absolute top-1/2 right-0" />
         <DotGridLarge className="absolute top-1/3 -left-12" />
      </section>
   );
};

export { ProjectsSection };
