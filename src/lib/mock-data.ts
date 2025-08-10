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
      // code: 'hostnet/pixelhost',
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
];

export { projects };
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
