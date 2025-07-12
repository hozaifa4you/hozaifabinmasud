// Education and training data
export const educationData = [
   {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Dhaka',
      location: 'Dhaka, Bangladesh',
      duration: '2018 - 2022',
      grade: 'CGPA: 3.85/4.00',
      description:
         "Specialized in Software Engineering and Database Systems. Completed thesis on 'Real-time Collaborative Systems using WebSocket Technology'.",
      highlights: [
         "Dean's List for 6 consecutive semesters",
         'Led university programming club with 200+ members',
         'Published research paper on distributed systems',
         'Winner of Inter-University Programming Contest 2021',
      ],
      courses: [
         'Data Structures & Algorithms',
         'Database Management Systems',
         'Software Engineering',
         'Computer Networks',
         'Operating Systems',
         'Web Technologies',
      ],
   },
   {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Dhaka College',
      location: 'Dhaka, Bangladesh',
      duration: '2016 - 2018',
      grade: 'GPA: 5.00/5.00',
      description:
         'Science Group with focus on Mathematics, Physics, and Chemistry. Achieved perfect GPA with distinction in Mathematics.',
      highlights: [
         'Perfect GPA with distinction in Mathematics',
         'Science Olympiad Regional Champion',
         'Mathematics Club President',
         'Scholarship recipient for academic excellence',
      ],
      courses: [
         'Higher Mathematics',
         'Physics',
         'Chemistry',
         'Biology',
         'English',
         'ICT',
      ],
   },
];

export const trainingData = [
   {
      title: 'Advanced React Development',
      provider: 'Meta (Facebook)',
      platform: 'Coursera',
      duration: '3 months',
      completedDate: 'March 2023',
      certificate: 'https://coursera.org/certificate/react-advanced',
      skills: [
         'React Hooks',
         'Context API',
         'Performance Optimization',
         'Testing',
      ],
      description:
         'Comprehensive course covering advanced React patterns, performance optimization techniques, and modern development practices.',
      projects: [
         'Built a real-time chat application',
         'Optimized large-scale React application',
         'Implemented custom hooks library',
      ],
      rating: '4.9/5.0',
   },
   {
      title: 'AWS Solutions Architect',
      provider: 'Amazon Web Services',
      platform: 'AWS Training',
      duration: '6 months',
      completedDate: 'August 2023',
      certificate: 'https://aws.amazon.com/certificate/architect',
      skills: ['EC2', 'S3', 'Lambda', 'CloudFormation', 'VPC'],
      description:
         'Professional certification program covering AWS cloud architecture, security, and best practices for scalable applications.',
      projects: [
         'Designed multi-tier web application architecture',
         'Implemented CI/CD pipeline with AWS services',
         'Built serverless application with Lambda',
      ],
      rating: '4.8/5.0',
   },
   {
      title: 'Full Stack Web Development',
      provider: 'Programming Hero',
      platform: 'Programming Hero',
      duration: '6 months',
      completedDate: 'December 2022',
      certificate: 'https://programming-hero.com/certificate/fullstack',
      skills: ['MERN Stack', 'Node.js', 'MongoDB', 'Express.js', 'React.js'],
      description:
         'Intensive bootcamp covering full-stack development with MERN stack, including real-world project development.',
      projects: [
         'E-commerce platform with payment integration',
         'Social media application with real-time features',
         'Task management system with team collaboration',
      ],
      rating: '4.7/5.0',
   },
   {
      title: 'Docker & Kubernetes Mastery',
      provider: 'Docker Inc.',
      platform: 'Udemy',
      duration: '2 months',
      completedDate: 'June 2023',
      certificate: 'https://udemy.com/certificate/docker-k8s',
      skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'DevOps'],
      description:
         'Hands-on course covering containerization, orchestration, and deployment strategies for modern applications.',
      projects: [
         'Containerized microservices architecture',
         'Kubernetes cluster deployment',
         'CI/CD pipeline with Docker',
      ],
      rating: '4.9/5.0',
   },
];

export const educationStats = [
   { id: 3, value: '2', label: 'Companies' },
   { id: 6, value: '16+', label: 'Projects' },
   { id: 1, value: '2', label: 'Degrees' },
   { id: 2, value: '4', label: 'Certifi.' },
   { id: 4, value: '3.9', label: 'Year Expe.' },
   { id: 5, value: '32+', label: 'Technologies' },
];

export type StatType = (typeof educationStats)[number];
