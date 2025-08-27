export type SkillType = { id: number; name: string; icon: string };

const languages: SkillType[] = [
   { id: 0.1, name: 'TypeScript', icon: '/icons/typescript.svg' },
   { id: 0.2, name: 'JavaScript', icon: '/icons/javascript.svg' },
   { id: 0.3, name: 'PHP', icon: '/icons/php.svg' },
   { id: 0.4, name: 'Go', icon: '/icons/go.svg' },
   { id: 0.9, name: 'C', icon: '/icons/c.svg' },
   { id: 0.5, name: 'C++', icon: '/icons/cpp.svg' },
   { id: 0.6, name: 'HTML', icon: '/icons/html.svg' },
   { id: 0.7, name: 'CSS', icon: '/icons/css.svg' },
   { id: 0.8, name: 'SCSS', icon: '/icons/scss.svg' },
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
   { id: 2.5, name: 'Svelte', icon: '/icons/svelte.svg' },
   { id: 2.6, name: 'NextJs', icon: '/icons/nextjs.svg' },
   { id: 2.7, name: 'Laravel', icon: '/icons/laravel.svg' },
   { id: 2.8, name: 'Mux', icon: '/icons/go.svg' },
   { id: 2.9, name: 'Fastify', icon: '/icons/fastify.svg' },
   { id: 2.11, name: 'T3 Stack', icon: '/icons/t3.svg' },
];

const libraries: SkillType[] = [
   { id: 3.0, name: 'Tailwind', icon: '/icons/tailwind.svg' },
   { id: 3.1, name: 'MUI', icon: '/icons/mui.svg' },
   { id: 3.2, name: 'Shadcn UI', icon: '/icons/shadcn.svg' },
   { id: 3.3, name: 'Ant Design', icon: '/icons/ant-design.svg' },
   { id: 3.4, name: 'Blueprint UI', icon: '/icons/blueprintui.svg' },
   { id: 3.5, name: 'Mantine', icon: '/icons/mantine.svg' },
   { id: 3.6, name: 'Prisma', icon: '/icons/prisma.svg' },
   { id: 3.7, name: 'Prime React', icon: '/icons/primereact.svg' },
   { id: 3.8, name: 'D3js', icon: '/icons/d3js.svg' },
   { id: 3.9, name: 'Jest', icon: '/icons/jest.svg' },
   { id: 3.11, name: 'PassportJs', icon: '/icons/passportjs.svg' },
   { id: 3.12, name: 'Drizzle ORM', icon: '/icons/drizzle.png' },
   { id: 3.13, name: 'Type ORM', icon: '/icons/typeorm.png' },
   { id: 3.14, name: 'Socket.io', icon: '/icons/socket-io.svg' },
];

const features: SkillType[] = [
   { id: 5.1, name: 'MERN Stack', icon: '/icons/mern.png' },
   { id: 5.2, name: 'Rest APIs', icon: '/icons/api.svg' },
   { id: 5.3, name: 'GraphQL', icon: '/icons/graphql.svg' },
   { id: 5.4, name: 'Payment', icon: '/icons/payment.svg' },
   { id: 5.5, name: 'Full Stack', icon: '/icons/fullstack.svg' },
   { id: 5.6, name: 'Dashboard', icon: '/icons/dashboard.svg' },
   { id: 5.7, name: 'Ai Chatbot', icon: '/icons/chatbot.svg' },
   { id: 5.8, name: 'eCommerce', icon: '/icons/ecommerce.svg' },
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
   { id: 7.1, name: 'Embedded System', icon: '/icons/iot.png' },
   { id: 7.2, name: 'Arduino', icon: '/icons/arduino.svg' },
   { id: 7.3, name: 'IoT', icon: '/icons/terminal.svg' },
   { id: 7.4, name: 'Bun', icon: '/icons/bun.svg' },
];

export { languages, databases, frameworks, libraries, features, tools, others };
