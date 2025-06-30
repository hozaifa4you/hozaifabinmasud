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

export { languages, databases, frameworks, libraries };
