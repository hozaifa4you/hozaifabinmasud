import { medias } from './medias';

export type SkillType = { id: number; name: string; icon: string };

const languages: SkillType[] = [
   {
      id: 0.1,
      name: medias.languages.typescript.name,
      icon: medias.languages.typescript.icon,
   },
   {
      id: 0.2,
      name: medias.languages.javascript.name,
      icon: medias.languages.javascript.icon,
   },
   {
      id: 0.3,
      name: medias.languages.php.name,
      icon: medias.languages.php.icon,
   },
   {
      id: 0.4,
      name: medias.languages.go.name,
      icon: medias.languages.go.icon,
   },
   {
      id: 0.9,
      name: medias.languages.c.name,
      icon: medias.languages.c.icon,
   },
   {
      id: 0.5,
      name: medias.languages.cpp.name,
      icon: medias.languages.cpp.icon,
   },
   {
      id: 0.6,
      name: medias.languages.html.name,
      icon: medias.languages.html.icon,
   },
   {
      id: 0.7,
      name: medias.languages.css.name,
      icon: medias.languages.css.icon,
   },
   {
      id: 0.8,
      name: medias.languages.scss.name,
      icon: medias.languages.scss.icon,
   },
];

const databases: SkillType[] = [
   {
      id: 1.1,
      name: medias.database.mongodb.name,
      icon: medias.database.mongodb.icon,
   },
   {
      id: 1.2,
      name: medias.database.mysql.name,
      icon: medias.database.mysql.icon,
   },
   {
      id: 1.3,
      name: medias.database.postgresql.name,
      icon: medias.database.postgresql.icon,
   },
   {
      id: 1.4,
      name: medias.database.redis.name,
      icon: medias.database.redis.icon,
   },
   {
      id: 1.5,
      name: medias.database.firebase.name,
      icon: medias.database.firebase.icon,
   },
   {
      id: 1.6,
      name: medias.database.vectordb.name,
      icon: medias.database.vectordb.icon,
   },
];

const frameworks: SkillType[] = [
   {
      id: 2.1,
      name: medias.frameworks.nodejs.name,
      icon: medias.frameworks.nodejs.icon,
   },
   {
      id: 2.2,
      name: medias.frameworks.nestjs.name,
      icon: medias.frameworks.nestjs.icon,
   },
   {
      id: 2.3,
      name: medias.frameworks.expressjs.name,
      icon: medias.frameworks.expressjs.icon,
   },
   {
      id: 2.4,
      name: medias.frameworks.reactjs.name,
      icon: medias.frameworks.reactjs.icon,
   },
   {
      id: 2.5,
      name: medias.frameworks.svelte.name,
      icon: medias.frameworks.svelte.icon,
   },
   {
      id: 2.6,
      name: medias.frameworks.nextjs.name,
      icon: medias.frameworks.nextjs.icon,
   },
   {
      id: 2.7,
      name: medias.frameworks.laravel.name,
      icon: medias.frameworks.laravel.icon,
   },
   {
      id: 2.8,
      name: medias.frameworks.mux.name,
      icon: medias.frameworks.mux.icon,
   },
   {
      id: 2.9,
      name: medias.frameworks.fastify.name,
      icon: medias.frameworks.fastify.icon,
   },
   {
      id: 2.11,
      name: medias.frameworks.t3stack.name,
      icon: medias.frameworks.t3stack.icon,
   },
];

const libraries: SkillType[] = [
   {
      id: 3.0,
      name: medias.libraries.tailwindcss.name,
      icon: medias.libraries.tailwindcss.icon,
   },
   {
      id: 3.1,
      name: medias.libraries.mui.name,
      icon: medias.libraries.mui.icon,
   },
   {
      id: 3.2,
      name: medias.libraries.shadcnui.name,
      icon: medias.libraries.shadcnui.icon,
   },
   {
      id: 3.3,
      name: medias.libraries.antd.name,
      icon: medias.libraries.antd.icon,
   },
   {
      id: 3.4,
      name: medias.libraries.blueprint.name,
      icon: medias.libraries.blueprint.icon,
   },
   {
      id: 3.5,
      name: medias.libraries.mantine.name,
      icon: medias.libraries.mantine.icon,
   },
   {
      id: 3.6,
      name: medias.libraries.prisma.name,
      icon: medias.libraries.prisma.icon,
   },
   {
      id: 3.7,
      name: medias.libraries.primereact.name,
      icon: medias.libraries.primereact.icon,
   },
   {
      id: 3.8,
      name: medias.libraries.d3.name,
      icon: medias.libraries.d3.icon,
   },
   {
      id: 3.9,
      name: medias.libraries.jest.name,
      icon: medias.libraries.jest.icon,
   },
   {
      id: 3.11,
      name: medias.libraries.passportjs.name,
      icon: medias.libraries.passportjs.icon,
   },
   {
      id: 3.12,
      name: medias.libraries.drizzleorm.name,
      icon: medias.libraries.drizzleorm.icon,
   },
   {
      id: 3.13,
      name: medias.libraries.typeorm.name,
      icon: medias.libraries.typeorm.icon,
   },
   {
      id: 3.14,
      name: medias.libraries.socketio.name,
      icon: medias.libraries.socketio.icon,
   },
];

const features: SkillType[] = [
   {
      id: 5.1,
      name: medias.features.mern.name,
      icon: medias.features.mern.icon,
   },
   {
      id: 5.2,
      name: medias.features.restapi.name,
      icon: medias.features.restapi.icon,
   },
   {
      id: 5.3,
      name: medias.features.graphql.name,
      icon: medias.features.graphql.icon,
   },
   {
      id: 5.4,
      name: medias.features.payment.name,
      icon: medias.features.payment.icon,
   },
   {
      id: 5.5,
      name: medias.features.fullstack.name,
      icon: medias.features.fullstack.icon,
   },
   {
      id: 5.6,
      name: medias.features.dashboard.name,
      icon: medias.features.dashboard.icon,
   },
   {
      id: 5.7,
      name: medias.features.aichatbot.name,
      icon: medias.features.aichatbot.icon,
   },
   {
      id: 5.8,
      name: medias.features.ecommerce.name,
      icon: medias.features.ecommerce.icon,
   },
];

const tools: SkillType[] = [
   {
      id: 6.1,
      name: medias.tools.git.name,
      icon: medias.tools.git.icon,
   },
   {
      id: 6.2,
      name: medias.tools.docker.name,
      icon: medias.tools.docker.icon,
   },
   {
      id: 6.3,
      name: medias.tools.cicd.name,
      icon: medias.tools.cicd.icon,
   },
   {
      id: 6.4,
      name: medias.tools.aws.name,
      icon: medias.tools.aws.icon,
   },
   {
      id: 6.5,
      name: medias.tools.orms.name,
      icon: medias.tools.orms.icon,
   },
   {
      id: 6.6,
      name: medias.tools.aiapis.name,
      icon: medias.tools.aiapis.icon,
   },
];

const others: SkillType[] = [
   {
      id: 7.1,
      name: medias.others.embeddedsystem.name,
      icon: medias.others.embeddedsystem.icon,
   },
   {
      id: 7.2,
      name: medias.others.arduino.name,
      icon: medias.others.arduino.icon,
   },
   {
      id: 7.3,
      name: medias.others.iot.name,
      icon: medias.others.iot.icon,
   },
   {
      id: 7.4,
      name: medias.others.bun.name,
      icon: medias.others.bun.icon,
   },
];

export { languages, databases, frameworks, libraries, features, tools, others };
