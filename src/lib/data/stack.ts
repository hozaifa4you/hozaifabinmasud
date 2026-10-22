// The homepage's curated view of the stack. The full inventory lives in skills.ts.
// Names match TechIcon's keys, so each one shows its logo.
export const stackGroups = [
   {
      key: 'languages',
      items: ['TypeScript', 'JavaScript', 'PHP', 'Go', 'HTML', 'CSS'],
   },
   {
      key: 'frameworks',
      items: [
         'Next.js',
         'React',
         'Node.js',
         'NestJS',
         'Express',
         'Laravel',
         'Fastify',
      ],
   },
   {
      key: 'data',
      items: [
         'MySQL',
         'PostgreSQL',
         'MongoDB',
         'Redis',
         'Prisma',
         'Drizzle ORM',
         'GraphQL',
      ],
   },
   {
      key: 'ai',
      items: ['OpenAI', 'LangChain', 'Pinecone', 'Vector databases'],
   },
   {
      key: 'tooling',
      items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Tailwind CSS', 'shadcn/ui'],
   },
];
