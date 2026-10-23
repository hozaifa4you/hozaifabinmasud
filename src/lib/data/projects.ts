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
         'Lemon Squeeze',
      ],
      status: 'live',
      slug: 'aionlinecourse',
      image: '/assets/projects/aionlinecourse.png',
      website: 'aionlinecourse.com',
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
      },
   },
   {
      id: 2,
      title: 'CasePDF',
      shortDesc:
         'A case document website for a US. Lawyer. Upload case documents and query, search, analyze them using AI.',
      technologies: ['Laravel', 'MySQL', 'OpenAI', 'PDF.Js', 'Bootstrap'],
      status: 'live',
      slug: 'case-pdf',
      image: '/assets/projects/casepdf.png',
      website: 'casepdf.mashpy.me',
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
      },
   },
   {
      id: 3,
      title: 'Uppercodes',
      shortDesc:
         'A typing practices platform for improving typing speed and accuracy. With interactive admin and user dashboards.',
      technologies: [
         'NextJs',
         'PostgreSQL',
         'Prisma',
         'TailwindCSS',
         'MySQL',
         'ShadcnUI',
      ],
      status: 'live',
      slug: 'uppercodes',
      image: '/assets/projects/uppercodes.png',
      website: 'typing.uppercodes.com',
      owner: {
         name: 'Uppercodes Soft',
         type: 'Company',
         website: 'uppercodes.com',
      },
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
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
      },
   },
   {
      id: 5,
      image: '/assets/projects/hozaifabinmasud.png',
      shortDesc: 'My personal portfolio website.',
      slug: 'portfolio',
      status: 'live',
      technologies: ['NextJs', 'ReactJs', 'TypeScript', 'TailwindCss'],
      title: 'My Portfolio',
      website: 'hozaifabinmasud.vercel.app',
      owner: {
         name: 'My Self',
         type: 'Personal',
      },
   },
   {
      id: 6,
      image: '/assets/projects/baseecom.png',
      shortDesc: 'Company website for BaseEcom.',
      slug: 'baseecom',
      status: 'live',
      technologies: ['Laravel', 'MySQL', 'TypeScript', 'ReactJs'],
      title: 'BaseEcom',
      website: 'baseecom.com',
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
      },
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
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
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
         'Shadcn',
      ],
      title: 'AI Daily Planner',
      code: {
         host: 'github',
         repo: 'nasirkhannstu/dailyplanai',
      },
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
      },
   },
   {
      id: 10,
      title: 'AIDBQuery',
      image: '/alternate/products/5.png',
      shortDesc:
         'An AI Chatbot for data analysis using natural language. But the project was archive due to AI token limit',
      slug: 'ai-db-query',
      status: 'archive',
      technologies: [
         'NextJs',
         'MySQL',
         'TypeScript',
         'Drizzle-ORM',
         'OpenAI',
         'AntD',
      ],
      code: {
         host: 'github',
         repo: 'nasirkhannstu/aidbquery',
      },
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
      },
   },
   {
      id: 11,
      title: 'Office Ai',
      image: '/assets/projects/officeai.png',
      shortDesc:
         'AI Chatbot application on uploaded file (pdf, images, text, docx, URL). User can upload those files and question about the files.',
      slug: 'office-ai',
      status: 'archive',
      technologies: [
         'NextJs',
         'MySQL',
         'TypeScript',
         'OpenAI',
         'LangChain',
         'VectorDB',
         'Stripe',
         'Prisma',
         'Shadcn',
      ],
      code: {
         host: 'github',
         repo: 'nasirkhannstu/officeai',
      },
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
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
      owner: {
         name: 'Namespace IT',
         type: 'Employment',
         website: 'namespaceit.com',
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
   owner?: {
      type: 'Employment' | 'Company' | 'Personal' | 'Self' | 'Freelance';
      name: string;
      website?: string;
   };
   code?: {
      host: 'github' | 'gitlab';
      repo: string;
   };
}

// Stand-in image for projects without a screenshot; not a real preview
const PLACEHOLDER_IMAGE = '/alternate/products/5.png';
const hasScreenshot = (image: string) => image !== PLACEHOLDER_IMAGE;

export { projects, smallProjects, hasScreenshot };
