import { getProjectDetails } from '@/lib/data/project-details';
import {
   hasScreenshot,
   ProjectType,
   SmallProjectType,
} from '@/lib/data/projects';
import { normalizeTech } from '@/lib/profile';

/** A project as the homepage explorer and the projects directory show it */
export type ProjectView = {
   slug: string;
   title: string;
   description: string;
   /** Canonical names, so TechIcon finds each logo */
   technologies: string[];
   status: ProjectType['status'];
   /** A real screenshot, or null; placeholders never stand in */
   image: string | null;
   /** "Built at …", "Built for …" or "Personal project" */
   context: string | null;
   /** Who it was built for, short: a company name or "Personal" */
   builtFor: string | null;
   liveUrl: string | null;
   codeUrl: string | null;
   caseStudyUrl: string | null;
};

type Owner = ProjectType['owner'];

const isPersonal = (owner: NonNullable<Owner>) =>
   owner.type === 'Personal' || owner.type === 'Self';

const describeContext = (owner: Owner) => {
   if (!owner) return null;
   if (owner.type === 'Employment') return `Built at ${owner.name}`;
   if (isPersonal(owner)) return 'Personal project';
   return `Built for ${owner.name}`;
};

const describeBuiltFor = (owner: Owner) => {
   if (!owner) return null;
   return isPersonal(owner) ? 'Personal' : owner.name;
};

const canonicalStack = (names: string[]) => [
   ...new Set(names.map(normalizeTech)),
];

const toProjectView = (project: ProjectType): ProjectView => {
   const details = getProjectDetails(project.slug);
   // Prefer the case study's full-size capture over the card thumbnail
   const image =
      details?.mainImage ??
      (hasScreenshot(project.image) ? project.image : null);

   return {
      slug: project.slug,
      title: project.title,
      description: project.shortDesc,
      technologies: canonicalStack(project.technologies),
      status: project.status,
      image,
      context: describeContext(project.owner),
      builtFor: describeBuiltFor(project.owner),
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

/** Small projects carry no status or screenshot, only a link */
const toSmallProjectView = (
   project: SmallProjectType,
): Omit<ProjectView, 'status'> & { status: null } => ({
   slug: project.slug,
   title: project.title,
   description: project.shortDesc,
   technologies: canonicalStack(project.tags),
   status: null,
   image: null,
   context: describeContext(project.owner as Owner),
   builtFor: describeBuiltFor(project.owner as Owner),
   liveUrl: null,
   codeUrl: project.link.url,
   caseStudyUrl: null,
});

export { toProjectView, toSmallProjectView };
