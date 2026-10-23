import type { Metadata } from 'next';

import { BreadcrumbNav } from '@/components/breadcrumb';
import { DirectionalPage } from '@/components/directional-page';
import { ProblemsPanel } from '@/components/not-found/problems-panel';
import { hasProjectDetails } from '@/lib/data/project-details';
import { projects, smallProjects } from '@/lib/data/projects';
import { PageTarget } from '@/lib/nearest-page';

export const metadata: Metadata = {
   title: 'Page not found',
};

// The real pages a broken path may have meant; placeholder pages are left out
const PAGES: PageTarget[] = [
   {
      key: 'Workspace',
      href: '/',
      note: 'Back to the homepage',
      names: ['home', 'index', 'workspace'],
   },
   {
      key: 'projects/',
      href: '/projects',
      note: 'Every project, filterable by technology',
      names: ['projects', 'project', 'portfolio', 'work-samples'],
   },
   {
      key: 'work.log',
      href: '/works',
      note: 'Roles, dates and what was built at each',
      names: ['works', 'work', 'work.log', 'experience', 'jobs', 'career'],
   },
   {
      key: 'education.md',
      href: '/educations',
      note: 'Degrees, institutions and results',
      names: ['educations', 'education', 'education.md', 'study', 'academic'],
   },
   {
      key: 'trainings.md',
      href: '/trainings',
      note: 'Courses and their certificates',
      names: [
         'trainings',
         'training',
         'trainings.md',
         'courses',
         'certificates',
         'certifications',
      ],
   },
   {
      key: 'stack',
      href: '/#stack',
      note: 'The technologies I work with',
      names: ['stack', 'skills', 'tech', 'technologies'],
   },
   {
      key: 'about.md',
      href: '/about-me',
      note: 'What I build and with what',
      names: ['about-me', 'about', 'aboutme', 'about.md', 'me', 'bio'],
   },
   {
      key: 'resume',
      href: '/resume',
      note: 'The CV, as a page and a PDF',
      names: ['resume', 'cv', 'hozaifa-resume'],
   },
   {
      key: 'contact',
      href: '/contact',
      note: 'Write to me or pick a channel',
      names: ['contact', 'contact-me', 'hire', 'hire-me', 'email'],
   },
];

const toName = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

// Projects match on their slug and title; without a case study they open
// their directory row
const getTargets = (): PageTarget[] => [
   ...PAGES,
   ...projects.map((project) => {
      const caseStudy = hasProjectDetails(project.slug);
      return {
         key: project.slug,
         href: caseStudy
            ? `/projects/${project.slug}`
            : `/projects#${project.slug}`,
         note: caseStudy
            ? `The ${project.title} case study`
            : `${project.title} has a row in the project directory; there's no case study`,
         names: [project.slug, toName(project.title)],
      };
   }),
   ...smallProjects.map((project) => ({
      key: project.slug,
      href: `/projects#${project.slug}`,
      note: `${project.title}, a small project in the directory`,
      names: [project.slug, toName(project.title)],
   })),
];

const NotFoundPage = () => {
   return (
      <DirectionalPage>
         <article className="container pt-6 pb-20 sm:pt-8 lg:pt-12 lg:pb-28">
            <BreadcrumbNav
               items={[
                  {
                     href: '/',
                     title: 'Workspace',
                     transitionTypes: ['nav-back'],
                  },
                  { href: '/', title: 'not found' },
               ]}
            />
            <h1 className="mt-5 text-display font-semibold text-strong sm:mt-6">
               Page not found
            </h1>
            <ProblemsPanel targets={getTargets()} />
         </article>
      </DirectionalPage>
   );
};

export default NotFoundPage;
