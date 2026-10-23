import { ProjectExplorer } from '@/components/home/project-explorer';
import { SectionHeading } from '@/components/home/section-heading';
import { projects } from '@/lib/data/projects';
import { toProjectView } from '@/lib/project-view';

const ProjectsSection = () => {
   return (
      <section
         id="projects"
         aria-labelledby="projects-title"
         className="depth-in container py-14 lg:py-20"
      >
         <SectionHeading
            id="projects-title"
            file="projects/"
            title="Selected work"
            link={{ href: '/projects', label: 'All projects' }}
            fileTabDesktopOnly
         />
         <ProjectExplorer projects={projects.map(toProjectView)} />
      </section>
   );
};

export { ProjectsSection };
