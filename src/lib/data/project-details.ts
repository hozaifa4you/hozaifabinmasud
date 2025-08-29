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
export interface ProjectDetailsType {
   id: number;
   title: string;
   slug: string;
   company: PDCompanyType;
   role: string;
   duration: string;
   teamSize?: string;
   description: string;
   mainImage: string;
   additionalImages: Array<string>;
   features: Array<string>;
   technologies: Array<PDTechnologyType>;
   teamMembers?: Array<PDTeamMemberType>;
   liveUrl?: string;
   githubUrl?: string;
   status: 'completed' | 'in-progress' | 'on-hold' | 'archived';
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
         '/assets/project-details/aionline/aionline-preview-1.png',
         '/assets/project-details/aionline/aionline-preview-2.png',
         '/assets/project-details/aionline/aionline-preview-3.png',
         '/assets/project-details/aionline/aionline-preview-4.png',
         '/assets/project-details/aionline/aionline-preview-5.png',
         '/assets/project-details/aionline/aionline-preview-6.png',
         '/assets/project-details/aionline/aionline-preview-7.png',
         '/assets/project-details/aionline/aionline-preview-8.png',
      ],
      features: [
         'Real-time task collaboration',
         'Advanced project analytics',
         'Team performance tracking',
         'File sharing and version control',
         'Custom workflow automation',
         'Mobile-responsive design',
      ],
      technologies: [
         { name: 'React', category: 'Frontend', img: '/icons/reactjs.svg' },
         {
            name: 'TypeScript',
            category: 'Frontend',
            img: '/icons/typescript.svg',
         },
         {
            name: 'Tailwind CSS',
            category: 'Frontend',
            img: '/icons/tailwind.svg',
         },
         { name: 'Node.js', category: 'Backend', img: '/icons/nodejs.svg' },
         {
            name: 'Express.js',
            category: 'Backend',
            img: '/icons/expressjs.svg',
         },
         {
            name: 'PostgreSQL',
            category: 'Database',
            img: '/icons/postgresql.svg',
         },
         { name: 'Redis', category: 'Database', img: '/icons/redis.svg' },
         {
            name: 'Socket.io',
            category: 'Real-time',
            img: '/icons/socket-io.svg',
         },
         { name: 'Docker', category: 'DevOps', img: '/icons/docker.svg' },
         { name: 'AWS', category: 'Cloud', img: '/icons/aws.svg' },
      ],
      teamMembers: [
         { name: 'John Smith', role: 'Project Manager' },
         { name: 'Sarah Johnson', role: 'UI/UX Designer' },
         { name: 'Mike Chen', role: 'Backend Developer' },
         { name: 'Emily Davis', role: 'Frontend Developer' },
         { name: 'Alex Rodriguez', role: 'DevOps Engineer' },
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/taskflow',
      status: 'completed',
   },
   {
      id: 2,
      title: 'TaskFlow - Project Management Platform',
      slug: 'aionlinecourse',
      company: {
         name: 'Company Name',
         address: 'Street, Road, City, Country',
         website: 'https://example.com',
      },
      role: 'Full Stack Developer',
      duration: '6 months',
      teamSize: '5 developers',
      description:
         'A comprehensive project management platform designed to streamline team collaboration and project tracking. Built with modern technologies to handle complex workflows and real-time updates.',
      mainImage:
         'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      additionalImages: [
         'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
         'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
         'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
         'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
         'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
         'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      ],
      features: [
         'Real-time task collaboration',
         'Advanced project analytics',
         'Team performance tracking',
         'File sharing and version control',
         'Custom workflow automation',
         'Mobile-responsive design',
      ],
      technologies: [
         { name: 'React', category: 'Frontend', img: '/icons/reactjs.svg' },
         {
            name: 'TypeScript',
            category: 'Frontend',
            img: '/icons/typescript.svg',
         },
         {
            name: 'Tailwind CSS',
            category: 'Frontend',
            img: '/icons/tailwind.svg',
         },
         { name: 'Node.js', category: 'Backend', img: '/icons/nodejs.svg' },
         {
            name: 'Express.js',
            category: 'Backend',
            img: '/icons/expressjs.svg',
         },
         {
            name: 'PostgreSQL',
            category: 'Database',
            img: '/icons/postgresql.svg',
         },
         { name: 'Redis', category: 'Database', img: '/icons/redis.svg' },
         {
            name: 'Socket.io',
            category: 'Real-time',
            img: '/icons/socket-io.svg',
         },
         { name: 'Docker', category: 'DevOps', img: '/icons/docker.svg' },
         { name: 'AWS', category: 'Cloud', img: '/icons/aws.svg' },
      ],
      teamMembers: [
         { name: 'John Smith', role: 'Project Manager' },
         { name: 'Sarah Johnson', role: 'UI/UX Designer' },
         { name: 'Mike Chen', role: 'Backend Developer' },
         { name: 'Emily Davis', role: 'Frontend Developer' },
         { name: 'Alex Rodriguez', role: 'DevOps Engineer' },
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/taskflow',
      status: 'completed',
   },
];

const getProjectDetails = (slug: string) => {
   return projectDetails.find((project) => project.slug === slug);
};

export { projectDetails, getProjectDetails };
