import { projects, ProjectType } from './mock-data';

export type SkillType = { id: number; name: string; icon: string };

const languages: SkillType[] = [
   { id: 1, name: 'TypeScript', icon: '/icons/typescript.svg' },
   { id: 2, name: 'JavaScript', icon: '/icons/javascript.svg' },
   { id: 3, name: 'PHP', icon: '/icons/php.svg' },
   { id: 4, name: 'Go', icon: '/icons/go.svg' },
   { id: 5, name: 'HTML', icon: '/icons/html.svg' },
   { id: 6, name: 'CSS', icon: '/icons/css.svg' },
   { id: 7, name: 'SCSS', icon: '/icons/scss.svg' },
];

const databases: SkillType[] = [
   { id: 1.1, name: 'MongoDB', icon: '/icons/mongodb.svg' },
   { id: 1.2, name: 'MySQL', icon: '/icons/mysql.svg' },
   { id: 1.3, name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
   { id: 1.4, name: 'Redis', icon: '/icons/redis.svg' },
   { id: 1.5, name: 'Firebase', icon: '/icons/firebase.svg' },
   { id: 1.6, name: 'Vector DB', icon: '/icons/ai.svg' },
];

const frameworks: SkillType[] = [
   { id: 2.1, name: 'NodeJs', icon: '/icons/nodejs.svg' },
   { id: 2.2, name: 'NestJs', icon: '/icons/nestjs.svg' },
   { id: 2.3, name: 'ExpressJs', icon: '/icons/expressjs.svg' },
   { id: 2.4, name: 'ReactJs', icon: '/icons/reactjs.svg' },
   { id: 2.5, name: 'NextJs', icon: '/icons/nextjs.svg' },
   { id: 2.6, name: 'Laravel', icon: '/icons/laravel.svg' },
   { id: 2.7, name: 'Mux', icon: '/icons/go.svg' },
   { id: 2.8, name: 'Fastify', icon: '/icons/fastify.svg' },
   { id: 2.9, name: 'T3 Stack', icon: '/icons/t3.svg' },
];

const libraries: SkillType[] = [
   { id: 3.0, name: 'Tailwind', icon: '/icons/tailwind.svg' },
   { id: 3.1, name: 'MUI', icon: '/icons/mui.svg' },
   { id: 3.5, name: 'Shadcn UI', icon: '/icons/shadcn.svg' },
   { id: 3.2, name: 'Ant Design', icon: '/icons/ant-design.svg' },
   { id: 3.3, name: 'Blueprint UI', icon: '/icons/blueprintui.svg' },
   { id: 3.14, name: 'Mantine', icon: '/icons/mantine.svg' },
   { id: 3.1, name: 'Prisma', icon: '/icons/prisma.svg' },
   { id: 3.4, name: 'Prime React', icon: '/icons/primereact.svg' },
   { id: 3.7, name: 'D3js', icon: '/icons/d3js.svg' },
   { id: 3.8, name: 'Jest', icon: '/icons/jest.svg' },
   { id: 3.9, name: 'PassportJs', icon: '/icons/passportjs.svg' },
   { id: 3.11, name: 'Drizzle ORM', icon: '/icons/drizzle.png' },
   { id: 3.12, name: 'Type ORM', icon: '/icons/typeorm.png' },
   { id: 3.13, name: 'Socket.io', icon: '/icons/socket-io.svg' },
];

const features: SkillType[] = [
   { id: 5.1, name: 'MERN Stack', icon: '/icons/mern.png' },
   { id: 5.2, name: 'Rest APIs', icon: '/icons/api.svg' },
   { id: 5.3, name: 'GraphQL', icon: '/icons/graphql.svg' },
   { id: 5.8, name: 'Payment', icon: '/icons/payment.svg' },
   { id: 5.4, name: 'Full Stack', icon: '/icons/fullstack.svg' },
   { id: 5.5, name: 'Dashboard', icon: '/icons/dashboard.svg' },
   { id: 5.6, name: 'Ai Chatbot', icon: '/icons/chatbot.svg' },
   { id: 5.7, name: 'eCommerce', icon: '/icons/ecommerce.svg' },
];

const tools: SkillType[] = [
   { id: 6.1, name: 'Git', icon: '/icons/git.svg' },
   { id: 6.2, name: 'Docker', icon: '/icons/docker.svg' },
   { id: 6.3, name: 'CI/CD', icon: '/icons/cicd.svg' },
   { id: 6.4, name: 'AWS', icon: '/icons/aws.svg' },
   { id: 6.5, name: 'ORMs', icon: '/icons/prisma.svg' },
   { id: 6.6, name: 'AI APIs', icon: '/icons/openai.svg' },
];

const others: SkillType[] = [
   { id: 7.1, name: 'Embedded System', icon: '/icons/system.svg' },
   { id: 7.2, name: 'Arduino', icon: '/icons/arduino.svg' },
   { id: 7.3, name: 'IoT', icon: '/icons/terminal.svg' },
   { id: 7.4, name: 'Bun', icon: '/icons/bun.svg' },
];

const works = [
   {
      id: 2,
      company: 'Namespace IT',
      title: 'Junior Software Engineer',
      startDate: 'Sep 2021',
      status: 'present',
      duration: '2.5 years',
      responsibilities:
         'Developed and maintained web applications using MERN stack, collaborated with cross-functional teams, and implemented RESTful APIs.',
      type: 'On-site',
      skills: [
         'nodejs',
         'reactjs',
         'typescript',
         'mongodb',
         'nextjs',
         'openai',
         'langchain',
         'pinecone',
      ],
      address: 'Lift 5, House 10, Uttara 10, Dhaka, Bangladesh.',
      website: 'namespaceit.com',
      social: [
         { id: 1, name: 'facebook', url: '#' },
         { id: 2, name: 'linkedin', url: '#' },
         { id: 3, name: 'x', url: '#' },
      ],
   },
   {
      id: 1,
      company: 'AI Power IT',
      title: 'Full Stack Developer',
      startDate: 'Dec 2023',
      endDate: 'Oct 2023',
      status: 'ended',
      duration: '1.5 years',
      responsibilities:
         'Developing AI-powered web applications, and optimizing performance.',
      type: 'On-site',
      skills: ['nodejs', 'reactjs', 'typescript', 'mongodb', 'nextjs'],
      address: 'Lift 4, House 13, Road 11, Uttara 11, Dhaka, Bangladesh.',
      website: 'aipowerit.com',
      social: [
         { id: 1, name: 'facebook', url: '#' },
         { id: 3, name: 'x', url: '#' },
      ],
   },
];

const projectsAll: ProjectType[] = [
   ...projects,
   {
      id: 4,
      title: 'Kotik Bot',
      image: '/alternate/products/4.png',
      shortDesc: 'A Discord bot for managing server tasks',
      slug: 'kotik-bot',
      status: 'active',
      technologies: ['FastAPI', 'Python', 'PostgreSQL'],
   },
   {
      id: 5,
      image: '/alternate/products/5.png',
      shortDesc: 'My personal portfolio showcasing my work',
      slug: 'portfolio',
      status: 'active',
      technologies: ['NodeJs', 'ReactJs', 'TypeScript', 'MongoDB'],
      title: 'Portfolio',
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

const funFacts = [
   {
      id: 1,
      text: 'I like <span class="text-white font-medium">winter</span> more than <span class="text-white font-medium">summer</span>',
   },
   {
      id: 2,
      text: 'I often <span class="text-white font-medium">bike</span> with my friends',
   },
   {
      id: 3,
      text: 'I like <span class="text-white font-medium">pizza</span> and <span class="text-white font-medium">pasta</span>',
   },
   {
      id: 4,
      text: 'I was in <span class="text-white font-medium">Egypt</span>, <span class="text-white font-medium">Poland</span> and <span class="text-white font-medium">Turkey</span>',
   },
   {
      id: 5,
      text: 'My favorite movie is <span class="text-white font-medium">The Green Mile</span>',
   },
   {
      id: 6,
      text: 'I am still in <span class="text-white font-medium">school</span>',
   },
   { id: 7, text: 'I don’t have any siblings' },
];

const projectDetails = [
   {
      title: 'TaskFlow - Project Management Platform',
      company: {
         name: 'Namespace IT',
         address: 'Lift 4, House 13, Road 11, Uttara 11, Dhaka, Bangladesh',
         website: 'https://namespaceit.com',
      },
      role: 'Full Stack Developer',
      location: 'Dhaka, Bangladesh',
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
      liveUrl: 'https://taskflow-demo.com',
      githubUrl: 'https://github.com/yourusername/taskflow',
   },
];

export {
   languages,
   databases,
   frameworks,
   libraries,
   features,
   tools,
   others,
   works,
   projectsAll,
   smallProjects,
   funFacts,
   projectDetails,
};

export type WorkType = (typeof works)[number];
export type SmallProjectType = (typeof smallProjects)[number];
export type FunFactType = (typeof funFacts)[number];
export type projectDetailsType = (typeof projectDetails)[number];
