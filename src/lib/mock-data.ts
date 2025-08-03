const projects = [
   {
      id: 1,
      title: 'ChertNodes',
      shortDesc: 'Minecraft servers hosting ',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      status: 'Live',
      slug: 'chart-nodes',
      image: '/alternate/products/1.png',
      website: 'chertnodes.org',
      code: 'example/chertnodes',
   },
   {
      id: 2,
      title: 'PixelHost',
      shortDesc: 'Pixel-perfect web hosting solutions',
      technologies: ['React', 'TypeScript', 'Docker'],
      status: 'Beta',
      slug: 'pixel-host',
      image: '/alternate/products/2.png',
      website: 'pixelhost.net',
      code: 'hostnet/pixelhost',
   },
   {
      id: 3,
      title: 'CodeForge',
      shortDesc: 'Collaborative coding platform',
      technologies: ['Vue.js', 'Go', 'PostgreSQL'],
      status: 'Development',
      slug: 'code-forge',
      image: '/alternate/products/3.png',
      website: 'codeforge.ru',
      code: 'ghostbudge/codeforge',
   },
];

export { projects };
export type ProjectType = (typeof projects)[number];
