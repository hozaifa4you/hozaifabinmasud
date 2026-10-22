import { getFirstWorkYear } from '@/lib/profile';

/** The one-paragraph introduction, shared by the homepage and /about-me */
export const ABOUT_INTRO =
   "I'm a self-taught full-stack developer based in Bangladesh. I build scalable, user-friendly web applications from scratch, frontend and backend, with React, Next.js, NestJS and Laravel.";

export const getAboutStory = () =>
   `I've been shipping software for clients and companies since ${getFirstWorkYear()}, turning ideas into clean, functional and well-structured applications. I enjoy solving real problems with code, and I keep exploring new tools, frameworks and AI integrations to level up my work.`;

export type Capability = {
   title: string;
   summary: string;
   /** Slugs from projects.ts whose own descriptions show this work */
   projects: string[];
   /** Canonical technology names, so TechIcon finds each logo */
   stack: string[];
};

// Kinds of work, each backed only by projects whose data describes it
export const capabilities: Capability[] = [
   {
      title: 'AI chat over documents and data',
      summary:
         'Chat with uploaded files, and ask a database questions in plain language.',
      projects: ['office-ai', 'ai-db-query'],
      stack: ['OpenAI', 'LangChain', 'Vector databases'],
   },
   {
      title: 'AI planning and task tools',
      summary:
         'Plan a day or manage tasks with an AI assistant that generates and organises them.',
      projects: ['ai-daily-planner', 'ai-task-man'],
      stack: ['OpenAI', 'NestJS', 'Prisma'],
   },
   {
      title: 'Document search and analysis',
      summary:
         'Upload case documents, then query, search and analyse them with AI.',
      projects: ['case-pdf'],
      stack: ['Laravel', 'OpenAI', 'PDF.js'],
   },
   {
      title: 'Learning platforms',
      summary: 'Courses, quizzes, tutorials, a project store and live coding.',
      projects: ['aionlinecourse'],
      stack: ['Laravel', 'Next.js', 'GraphQL'],
   },
   {
      title: 'Payments and checkout',
      summary:
         'Paid products and project sales, with Lemon Squeezy and Stripe.',
      projects: ['aionlinecourse', 'office-ai'],
      stack: ['Lemon Squeezy', 'Stripe'],
   },
   {
      title: 'Admin and user dashboards',
      summary: 'Interactive dashboards for admins and users.',
      projects: ['uppercodes'],
      stack: ['Next.js', 'PostgreSQL', 'Prisma'],
   },
];
