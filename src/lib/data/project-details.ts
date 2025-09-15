import { medias } from './medias';

export type PDCompanyType = {
   name: string;
   address: string;
   website?: string;
};
export type PDTechnologyType = {
   name: string;
   category: string;
   img: string;
};
export type PDTeamMemberType = {
   avatar?: string;
   name: string;
   role: string;
};
type ImageType = { title: string; path: string };
type StatusType = {
   type: 'completed' | 'in-progress' | 'on-hold' | 'archived' | 'production';
   text: string;
};

export interface ProjectDetailsType {
   id: number;
   title: string;
   slug: string;
   company?: PDCompanyType;
   role: string;
   duration: string;
   teamSize?: string;
   description: string;
   mainImage: string;
   additionalImages: Array<ImageType>;
   features: Array<string>;
   technologies: Array<PDTechnologyType>;
   teamMembers?: Array<PDTeamMemberType>;
   liveUrl?: string;
   githubUrl?: string;
   status: StatusType;
}

const projectDetails: Array<ProjectDetailsType> = [
   {
      id: 1,
      title: 'Aionlinecourse - AI/ML learning and project selling platform',
      slug: 'aionlinecourse',
      company: {
         name: 'Namespace IT',
         address: '4B, H#13, R#11, Uttara 11, Dhaka.',
         website: 'https://namespaceit.com',
      },
      role: 'Full Stack Developer',
      duration: '6 months',
      teamSize: '5 developers',
      description:
         'Developed AI Online Course, a modern e-learning platform powered by a Laravel GraphQL API backend and Next.js frontend. The site delivers interactive courses, coding projects, and quizzes with scalable performance, intuitive navigation, and responsive design for an engaging learning experience.',
      mainImage: '/assets/project-details/aionline/aionline-main.png',
      additionalImages: [
         {
            title: 'Preview 1',
            path: '/assets/project-details/aionline/aionline-preview-1.png',
         },
         {
            title: 'Preview 2',
            path: '/assets/project-details/aionline/aionline-preview-2.png',
         },
         {
            title: 'Preview 3',
            path: '/assets/project-details/aionline/aionline-preview-3.png',
         },
         {
            title: 'Preview 4',
            path: '/assets/project-details/aionline/aionline-preview-4.png',
         },
         {
            title: 'Preview 5',
            path: '/assets/project-details/aionline/aionline-preview-5.png',
         },
         {
            title: 'Preview 6',
            path: '/assets/project-details/aionline/aionline-preview-6.png',
         },
         {
            title: 'Preview 7',
            path: '/assets/project-details/aionline/aionline-preview-7.png',
         },
         {
            title: 'Preview 8',
            path: '/assets/project-details/aionline/aionline-preview-8.png',
         },
      ],
      features: [
         'AI/ML learning platform',
         'ML/ML coding project selling',
         'Lemon Squizee Payment Gateway',
         'AI Quizes',
         'AI Tutorials',
         'AI Blogs',
         'AI Tools',
         'Live Coding',
      ],
      technologies: [
         {
            name: medias.frameworks.nextjs.name,
            category: 'Frontend',
            img: medias.frameworks.nextjs.icon,
         },
         {
            name: medias.languages.javascript.name,
            category: 'Frontend',
            img: medias.languages.javascript.icon,
         },
         {
            name: medias.features.graphql.name,
            category: 'Frontend',
            img: medias.features.graphql.icon,
         },
         {
            name: medias.libraries.tailwindcss.name,
            category: 'Frontend',
            img: medias.libraries.tailwindcss.icon,
         },
         {
            name: medias.languages.php.name,
            category: 'Backend',
            img: medias.languages.php.icon,
         },
         {
            name: medias.frameworks.laravel.name,
            category: 'Backend',
            img: medias.frameworks.laravel.icon,
         },
         {
            name: medias.database.mysql.name,
            category: 'Database',
            img: medias.database.mysql.icon,
         },
         {
            name: medias.tools.docker.name,
            category: 'DevOps',
            img: medias.tools.docker.icon,
         },
         {
            name: medias.tools.aws.name,
            category: 'Cloud',
            img: medias.tools.aws.icon,
         },
      ],
      teamMembers: [
         { name: 'Mashpy', role: 'Project Manager' },
         { name: 'Hozaifa Bin Masud', role: 'Developer' },
         { name: 'Tareq Aziz Uday', role: 'ML Engineer' },
         { name: 'Pavel', role: 'Sr. Developer' },
         { name: 'Mashruf Tahsin', role: 'AI/ML Eng. & Researcher' },
      ],
      liveUrl: 'https://aionlinecourse.com',
      status: {
         text: 'Currently working on',
         type: 'production',
      },
   },
];

const getProjectDetails = (slug: string) => {
   return projectDetails.find((project) => project.slug === slug);
};

export { projectDetails, getProjectDetails };
