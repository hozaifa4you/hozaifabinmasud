import {
   ExplorerProject,
   ProjectExplorer,
} from '@/components/home/project-explorer';
import { SectionHeading } from '@/components/home/section-heading';
import { getProjectDetails } from '@/lib/data/project-details';
import { hasScreenshot, projects, ProjectType } from '@/lib/data/projects';
import { normalizeTech } from '@/lib/profile';

const describeContext = (owner: ProjectType['owner']) => {
   if (!owner) return null;
   if (owner.type === 'Employment') return `Built at ${owner.name}`;
   if (owner.type === 'Personal' || owner.type === 'Self')
      return 'Personal project';
   return `Built for ${owner.name}`;
};

const toExplorerProject = (project: ProjectType): ExplorerProject => {
   const details = getProjectDetails(project.slug);
   // Prefer the case study's full-size capture over the card thumbnail
   const image =
      details?.mainImage ??
      (hasScreenshot(project.image) ? project.image : null);

   return {
      slug: project.slug,
      title: project.title,
      description: project.shortDesc,
      technologies: [...new Set(project.technologies.map(normalizeTech))],
      status: project.status,
      image,
      context: describeContext(project.owner),
      liveUrl:
         project.status === 'live' && project.website
            ? `https://${project.website}`
            : null,
      codeUrl: project.code
         ? `https://${project.code.host}.com/${project.code.repo}`
         : null,
      caseStudyUrl: details ? `/projects/${project.slug}` : null,
   };
};

const ProjectsSection = () => {
   return (
      <section
         id="projects"
         aria-labelledby="projects-title"
         className="container py-14 lg:py-20"
      >
         <SectionHeading
            id="projects-title"
            file="projects/"
            title="Selected work"
            link={{ href: '/projects', label: 'All projects' }}
            fileTabDesktopOnly
         />
         <ProjectExplorer projects={projects.map(toExplorerProject)} />
      </section>
   );
};

export { ProjectsSection };
