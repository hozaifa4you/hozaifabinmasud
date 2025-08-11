const projects: ProjectType[] = [
   {
      id: 1,
      title: 'Aionlinecourse.com',
      shortDesc: 'AI ML learning and project selling platform.',
      technologies: [
         'Laravel',
         'NextJs',
         'JS & TS',
         'GraphQL',
         'MySQL',
         'D3',
         'Redux',
      ],
      status: 'live',
      slug: 'aionlinecourse',
      image: '/assets/projects/aionlinecourse.png',
      website: 'aionlinecourse.com',
   },
   {
      id: 2,
      title: 'CasePDF',
      shortDesc:
         'A case document website for a US. Lawyer. Upload case documents and query, search, analyze them using AI.',
      technologies: ['Laravel', 'MySQL', 'OpenAI', 'PDF.Js'],
      status: 'live',
      slug: 'case-pdf',
      image: '/alternate/products/2.png',
      website: 'casepdf.mashpy.me',
   },
   {
      id: 3,
      title: 'Uppercodes',
      shortDesc:
         'A typing practices platform for improving typing speed and accuracy. With interactive admin and user dashboards.',
      technologies: ['NextJs', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'MySQL'],
      status: 'live',
      slug: 'uppercodes',
      image: '/assets/projects/uppercodes.png',
      website: 'typing.uppercodes.com',
   },
   {
      id: 4,
      title: 'Windowsestimates',
      image: '/assets/projects/windowsestimates.png',
      shortDesc:
         "A window buying project for US customers. (For security I can't share more details)",
      slug: 'windowsestimates',
      status: 'developing',
      technologies: ['FastAPI', 'Python', 'MySQL', 'NextJs', 'JavaScript'],
   },
   {
      id: 5,
      image: '/assets/projects/hozaifabinmasud.png',
      shortDesc: 'My personal portfolio website.',
      slug: 'portfolio',
      status: 'live',
      technologies: ['NextJs', 'ReactJs', 'TypeScript'],
      title: 'My Portfolio',
      website: 'hozaifabinmasud.vercel.app',
   },
   {
      id: 6,
      image: '/alternate/products/5.png',
      shortDesc: 'Company website for BaseEcom.',
      slug: 'baseecom',
      status: 'live',
      technologies: ['Laravel', 'MySQL', 'TypeScript', 'ReactJs'],
      title: 'BaseEcom',
      website: 'baseecom.com',
   },
   {
      id: 7,
      image: '/alternate/products/5.png',
      shortDesc:
         'Company website for BaseEcom. A fully-functional, backend-ready company profile website',
      slug: 'baseecom',
      status: 'live',
      technologies: ['Laravel', 'MySQL', 'TypeScript', 'ReactJs'],
      title: 'BaseEcom',
      website: 'baseecom.com',
   },
   {
      id: 8,
      image: '/alternate/products/5.png',
      shortDesc:
         'A complex AI task management app. Manage tasks with AI assistance. The app was on archive due to company interest.',
      slug: 'ai-task-man',
      status: 'archive',
      technologies: [
         'NextJs',
         'MySQL',
         'TypeScript',
         'Prisma',
         'OpenAI',
         'Vector DB',
         'LangChain',
      ],
      title: 'AI Task Man',
      code: {
         host: 'github',
         repo: 'nasirkhannstu/taskman',
      },
   },
   {
      id: 9,
      image: '/alternate/products/5.png',
      shortDesc:
         'Generate and manage daily tasks with OpenAI. User can generate his daily plan with easy prompt with AI. There is an AI agent for manage and generate tasks.',
      slug: 'ai-daily-planner',
      status: 'developing',
      technologies: [
         'NextJs',
         'NestJs',
         'MySQL',
         'TypeScript',
         'Prisma',
         'OpenAI',
      ],
      title: 'AI Daily Planner',
      code: {
         host: 'github',
         repo: 'nasirkhannstu/dailyplanai',
      },
   },
   {
      id: 10,
      title: 'AIDBQuery',
      image: '/alternate/products/5.png',
      shortDesc:
         'A tool for data analysis using natural language. But the project was archive due to AI token limit',
      slug: 'ai-db-query',
      status: 'archive',
      technologies: ['NextJs', 'MySQL', 'TypeScript', 'Drizzle-ORM', 'OpenAI'],
      code: {
         host: 'github',
         repo: 'nasirkhannstu/aidbquery',
      },
   },
   {
      id: 11,
      title: 'Office AI',
      image: '/alternate/products/5.png',
      shortDesc:
         'AI Query application on uploaded file (pdf, images, text, images). User can upload those files and question about the files.',
      slug: 'office-ai',
      status: 'archive',
      technologies: [
         'NextJs',
         'MySQL',
         'TypeScript',
         'Drizzle-ORM',
         'OpenAI',
         'LangChain',
         'VectorDB',
      ],
      code: {
         host: 'github',
         repo: 'nasirkhannstu/officeai',
      },
   },
];

const smallProjects = [
   {
      id: 1,
      title: 'Bot Boilerplate',
      slug: 'bot-boilerplate',
      tags: ['Discordjs', 'Ts', 'Nodejs', 'Express'],
      shortDesc:
         'Start creating scalable discord.js bot with typescript in seconds',
      link: {
         title: 'Github',
         url: 'https//github.com/example',
      },
   },
];

export type SmallProjectType = (typeof smallProjects)[number];
export interface ProjectType {
   id: number;
   title: string;
   shortDesc: string;
   technologies: string[];
   status: 'live' | 'archive' | 'developing';
   slug: string;
   image: string;
   website?: string;
   code?: {
      host: 'github' | 'gitlab';
      repo: string;
   };
}
const projectCount = projects.length;
export { projects, smallProjects, projectCount };
