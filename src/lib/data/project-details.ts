export type projectDetailsType = (typeof projectDetails)[number];
export type PDCompanyType={
   name:string
   address: string
   website?:string
}

const projectDetails = [
   {
      title: 'TaskFlow - Project Management Platform',
      company: {
         name: 'Company Name',
         address: 'Street, Road, City, Country',
         website: 'https://example.com',
      },
      role: 'Full Stack Developer',
      location: 'New Orangeland, Downtown',
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
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/taskflow',
   },
];


export{projectDetails}