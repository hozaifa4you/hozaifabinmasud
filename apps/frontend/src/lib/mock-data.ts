const products = [
   {
      id: 1,
      title: 'ChertNodes',
      shortDesc: 'Minecraft servers hosting ',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      status: 'Live',
      slug: 'chart-nodes',
      image: '/alternate/products/1.png',
   },
   {
      id: 2,
      title: 'PixelHost',
      shortDesc: 'Pixel-perfect web hosting solutions',
      technologies: ['React', 'TypeScript', 'Docker'],
      status: 'Beta',
      slug: 'pixel-host',
      image: '/alternate/products/2.png',
   },
   {
      id: 3,
      title: 'CodeForge',
      shortDesc: 'Collaborative coding platform',
      technologies: ['Vue.js', 'Go', 'PostgreSQL'],
      status: 'Development',
      slug: 'code-forge',
      image: '/alternate/products/3.png',
   },
];

export { products };
export type ProductType = (typeof products)[number];
