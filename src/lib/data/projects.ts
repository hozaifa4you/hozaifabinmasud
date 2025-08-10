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
      image: '/alternate/products/1.png',
      website: 'aionlinecourse.com',
   },
   {
      id: 2,
      title: 'PixelHost',
      shortDesc: 'Pixel-perfect web hosting solutions',
      technologies: ['React', 'TypeScript', 'Docker'],
      status: 'archive',
      slug: 'pixel-host',
      image: '/alternate/products/2.png',
      website: 'pixelhost.net',
      code: {
         host: 'github',
         repo: 'hostnet/pixelhost',
      },
   },
   {
      id: 3,
      title: 'CodeForge',
      shortDesc: 'Collaborative coding platform',
      technologies: ['Vue.js', 'Go', 'PostgreSQL'],
      status: 'developing',
      slug: 'code-forge',
      image: '/alternate/products/3.png',
      website: 'codeforge.ru',
      code: {
         host: 'gitlab',
         repo: 'codeforge/codeforge',
      },
   },
   {
      id: 4,
      title: 'Kotik Bot',
      image: '/alternate/products/4.png',
      shortDesc: 'A Discord bot for managing server tasks',
      slug: 'kotik-bot',
      status: 'live',
      technologies: ['FastAPI', 'Python', 'PostgreSQL'],
      code: {
         host: 'github',
         repo: 'ghostbudge/kotik-bot',
      },
      website: 'kotikbot.com',
   },
   {
      id: 5,
      image: '/alternate/products/5.png',
      shortDesc: 'My personal portfolio showcasing my work',
      slug: 'portfolio',
      status: 'live',
      technologies: ['NodeJs', 'ReactJs', 'TypeScript', 'MongoDB'],
      title: 'Portfolio',
      code: {
         host: 'github',
         repo: 'ghostbudge/portfolio',
      },
      website: 'example.dev',
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
   {
      id: 2,
      title: 'my Blog',
      slug: 'my-blog',
      tags: ['Nodejs', 'Expressjs', 'Reactjs', 'Mongodb'],
      shortDesc: 'Front-end of my future blog website written in mern',
      link: {
         title: 'Github',
         url: 'https//github.com/example',
      },
   },
   {
      id: 3,
      title: 'Weather App',
      slug: 'weather-app',
      tags: ['Reactjs', 'Typescript', 'Api', 'Css'],
      shortDesc: 'A simple weather app using OpenWeatherMap API',
      link: {
         title: 'Github',
         url: 'https://github.com/example/weather-app',
      },
   },
   {
      id: 4,
      title: 'Task Tracker',
      slug: 'task-tracker',
      tags: ['Nextjs', 'Mongodb', 'Tailwind', 'Typescript'],
      shortDesc: 'A minimal task tracker with Next.js and MongoDB',
      link: {
         title: 'Github',
         url: 'https://github.com/example/task-tracker',
      },
   },
   {
      id: 5,
      title: 'Markdown Previewer',
      slug: 'markdown-previewer',
      tags: ['Reactjs', 'Typescript', 'Markdown'],
      shortDesc: 'Live markdown previewer built with React and TypeScript',
      link: {
         title: 'Github',
         url: 'https://github.com/example/markdown-previewer',
      },
   },
   {
      id: 6,
      title: 'Expense Tracker',
      slug: 'expense-tracker',
      tags: ['Vuejs', 'Typescript', 'Localstorage'],
      shortDesc: 'Track your expenses with a simple Vue.js app',
      link: {
         title: 'Github',
         url: 'https://github.com/example/expense-tracker',
      },
   },
   {
      id: 7,
      title: 'Chat Widget',
      slug: 'chat-widget',
      tags: ['Socket.io', 'Nodejs', 'Reactjs'],
      shortDesc: 'A real-time chat widget using Socket.io and React',
      link: {
         title: 'Github',
         url: 'https://github.com/example/chat-widget',
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
export { projects, smallProjects };
