export type PDCompanyType = {
   name: string;
   /** City only; street addresses stay off the site */
   location: string;
   website?: string;
};
export type PDTechnologyType = {
   /** A canonical name, as normalizeTech() produces, so TechIcon finds its logo */
   name: string;
   category: string;
};
export type PDTeamMemberType = {
   name: string;
   role: string;
   /** Marks the site owner's own row */
   isMe?: boolean;
};
type ImageType = { title: string; path: string };
type StatusType = {
   type: 'completed' | 'in-progress' | 'on-hold' | 'archived' | 'production';
   text: string;
};

export interface ProjectDetailsType {
   id: number;
   /** Full title, used for metadata */
   title: string;
   /** The product's name, the page's H1 */
   name: string;
   /** One line on what the product is */
   tagline: string;
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
      name: 'Aionlinecourse',
      tagline: 'An AI/ML learning and project-selling platform',
      slug: 'aionlinecourse',
      company: {
         name: 'Namespace IT',
         location: 'Dhaka',
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
         'AI/ML coding project selling',
         'Lemon Squeezy payment gateway',
         'AI quizzes',
         'AI tutorials',
         'AI blogs',
         'AI tools',
         'Live coding',
      ],
      technologies: [
         { name: 'Next.js', category: 'Frontend' },
         { name: 'JavaScript', category: 'Frontend' },
         { name: 'GraphQL', category: 'Frontend' },
         { name: 'Tailwind CSS', category: 'Frontend' },
         { name: 'Laravel', category: 'Backend' },
         { name: 'PHP', category: 'Backend' },
         { name: 'MySQL', category: 'Database' },
         { name: 'Docker', category: 'DevOps' },
         { name: 'AWS', category: 'Cloud' },
      ],
      teamMembers: [
         { name: 'Mashpy', role: 'Project Manager' },
         { name: 'Hozaifa Bin Masud', role: 'Developer', isMe: true },
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

const hasProjectDetails = (slug: string) => {
   return projectDetails.some((project) => project.slug === slug);
};

export { projectDetails, getProjectDetails, hasProjectDetails };
