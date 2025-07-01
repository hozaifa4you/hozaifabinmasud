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
   { id: 3.4, name: 'Prime React', icon: '/icons/primereact.svg' },
   { id: 3.7, name: 'D3js', icon: '/icons/d3js.svg' },
   { id: 3.8, name: 'Jest', icon: '/icons/jest.svg' },
   { id: 3.9, name: 'PassportJs', icon: '/icons/passportjs.svg' },
   { id: 3.1, name: 'Prisma', icon: '/icons/prisma.svg' },
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
];

const academics = [
   {
      id: 1,
      title: 'B.Sc. in Computer Science & Engineering',
      short: 'CSE',
      startDate: '30/11/2023',
      endDate: 'Running',
      boardOrUniversity:
         'Institute of Science, Trade & Technology, Dhaka - ISTT',
      link: 'https://istt.edu.bd',
      grade: 'CGPA-3.6',
      status: 'ongoing',
   },
   {
      id: 2,
      title: 'Higher Secondary Certificate',
      short: 'HSC',
      startDate: '01/06/2019',
      endDate: '31/12/2022',
      boardOrUniversity: 'Shimu-Reza MP College, Satkhira.',
      link: 'https://www.facebook.com/SRMPCOLLEGE',
      grade: 'GPA-4.83',
      status: 'completed',
   },
   {
      id: 3,
      title: 'Secondary School Certificate',
      short: 'SSC',
      startDate: '01/02/2017',
      endDate: '020/04/2019',
      boardOrUniversity: 'Mir Nowbul Hq. M. High School',
      link: 'https://www.facebook.com/salimuddinrezakobi',
      grade: 'GPA-3.89',
      status: 'completed',
   },
];

const trainings = [
   {
      id: 1,
      title: 'NestJS Zero to Hero - Modern TypeScript Back-end Development',
      slug: 'nestjs-zero-to-hero',
      startDate: '05/2023',
      endDate: '07/2023',
      host: 'Udemy',
      hostLink: 'https://www.udemy.com/',
      certificateLink: undefined,
      status: 'done',
   },
   {
      id: 2,
      title: 'MERN From Scratch 2023 | eCommerce Platform',
      slug: 'mern-from-scratch-2023',
      startDate: '03/2023',
      endDate: '04/2023',
      host: 'Udemy',
      hostLink: 'https://www.udemy.com/',
      certificateLink: undefined,
      status: 'done',
   },
   {
      id: 3,
      title: 'The AI Engineer Path',
      slug: 'the-ai-engineer-path',
      startDate: '06/2025',
      endDate: '07/2025',
      host: 'Scrimba',
      hostLink: 'https://www.scrimba.com',
      certificateLink: 'https://www.scrimba.com',
      status: 'active',
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
   academics,
   trainings,
};

export type AcademicType = (typeof academics)[number];
export type TrainingType = (typeof trainings)[number];
