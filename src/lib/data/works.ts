const works: WorkType[] = [
   {
      id: 1,
      company: 'AI Power IT',
      title: 'Full Stack Developer',
      startDate: 'July 2021',
      endDate: 'Oct 2023',
      status: 'ended',
      responsibilities:
         'Developed AI-powered web applications and optimized their performance.',
      type: 'On-site',
      skills: [
         'nodejs',
         'reactjs',
         'typescript',
         'mongodb',
         'nextjs',
         'wordpress',
      ],
      location: 'Uttara, Dhaka',
      website: 'aipowerit.com',
   },
   {
      id: 2,
      company: 'Namespace IT',
      title: 'Junior Software Engineer',
      startDate: 'Dec 2023',
      status: 'present',
      responsibilities:
         'Developed and maintained web applications using the MERN stack, collaborated with cross-functional teams, and implemented RESTful APIs.',
      type: 'On-site',
      skills: [
         'nodejs',
         'reactjs',
         'typescript',
         'mongodb',
         'nextjs',
         'openai',
         'langchain',
         'vectordb',
      ],
      location: 'Uttara, Dhaka',
      website: 'namespaceit.com',
   },
];

export type WorkType = {
   id: number;
   company: string;
   title: string;
   startDate: string;
   endDate?: string;
   status: 'ended' | 'present';
   responsibilities: string;
   type: 'On-site' | 'Hybrid' | 'Remote' | 'Contact' | 'Freelancer';
   skills: string[];
   /** Area and city only */
   location: string;
   website: string;
};
export { works };
