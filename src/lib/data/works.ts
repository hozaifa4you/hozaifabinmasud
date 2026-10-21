const works: WorkType[] = [
   {
      id: 1,
      company: 'AI Power IT',
      title: 'Full Stack Developer',
      startDate: 'July 2021',
      endDate: 'Oct 2023',
      status: 'ended',
      duration: 2.3,
      responsibilities:
         'Developing AI-powered web applications, and optimizing performance.',
      type: 'On-site',
      skills: [
         'nodejs',
         'reactjs',
         'typescript',
         'mongodb',
         'nextjs',
         'wordpress',
      ],
      address: '4B, House 4, Road 10, Uttara 10, Dhaka, BD.',
      website: 'aipowerit.com',
      social: [
         { id: 1, name: 'facebook', url: '#' },
         { id: 3, name: 'x', url: '#' },
      ],
   },
   {
      id: 2,
      company: 'Namespace IT',
      title: 'Junior Software Engineer',
      startDate: 'Dec 2023',
      status: 'present',
      duration: 1.8,
      responsibilities:
         'Developed and maintained web applications using MERN stack, collaborated with cross-functional teams, and implemented RESTful APIs.',
      type: 'On-site',
      skills: [
         'nodejs',
         'reactjs',
         'typescript',
         'mongodb',
         'nextjs',
         'openai',
         'langchain',
         'pinecone',
      ],
      address: '4B, House 13, Uttara 11, Road 11, Dhaka, BD.',
      website: 'namespaceit.com',
      social: [
         { id: 1, name: 'facebook', url: 'namespaceit' },
         { id: 2, name: 'linkedin', url: 'namespaceit' },
         { id: 3, name: 'x', url: 'namespaceit' },
      ],
   },
];

export const getEmpDuration = () => {
   return works.reduce((acc, item) => acc + item.duration, 0);
};

export type WorkType = {
   id: number;
   company: string;
   title: string;
   startDate: string;
   endDate?: string;
   status: 'ended' | 'present';
   duration: number;
   responsibilities: string;
   type: 'On-site' | 'Hybrid' | 'Remote' | 'Contact' | 'Freelancer';
   skills: string[];
   address: string;
   website: string;
   social: { id: number; name: string; url: string }[];
};
export { works };
