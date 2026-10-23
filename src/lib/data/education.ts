import 'server-only';

// Education and training, for the homepage, the resume, /educations and
// /trainings. Bangladeshi employers screen on certificates, so these are
// required wherever the owner's real entries exist (PRODUCT.md).
//
// Entries marked `demo` are sample data to build the design with. They show
// locally and on Vercel previews, never on the production site. To publish an
// entry, replace its details with the real ones and delete `demo: true`.

export interface Education {
   /** The qualification, e.g. 'BSc', 'HSC', 'SSC' */
   degree: string;
   /** The subject or group, e.g. 'Computer Science and Engineering', 'Science' */
   subject: string;
   institution: string;
   /** The awarding university or education board, when it is not the institution */
   awardedBy?: string;
   city: string;
   start: number;
   /** The year it ended, or is expected to end while ongoing */
   end?: number;
   ongoing?: boolean;
   /** As it should read, e.g. 'CGPA 3.50 / 4.00'; leave out to keep it private */
   result?: string;
   demo?: boolean;
}

export interface Training {
   title: string;
   /** Who made the course, e.g. 'Meta', 'Google', or the instructor */
   provider: string;
   /** Where it was taken, e.g. 'Coursera', 'Udemy' */
   platform: string;
   /** Month finished, 'YYYY-MM'; leave out while it is in progress */
   completed?: string;
   /** The certificate's public verification link */
   certificateUrl?: string;
   skills: string[];
   demo?: boolean;
}

// Newest first
const education: Education[] = [
   {
      // Real: a BSc at ISTT, in progress. Confirm the subject, the full
      // institution name, the awarding university and the years, then drop demo
      degree: 'BSc',
      subject: 'Computer Science and Engineering',
      institution: 'Institute of Science, Trade & Technology (ISTT)',
      city: 'Dhaka',
      start: 2022,
      end: 2026,
      ongoing: true,
      demo: true,
   },
   {
      degree: 'HSC',
      subject: 'Science',
      institution: 'Sample Higher Secondary College',
      awardedBy: 'Board of Intermediate and Secondary Education, Dhaka',
      city: 'Dhaka',
      start: 2019,
      end: 2021,
      result: 'GPA 5.00 / 5.00',
      demo: true,
   },
   {
      degree: 'SSC',
      subject: 'Science',
      institution: 'Sample High School',
      awardedBy: 'Board of Intermediate and Secondary Education, Dhaka',
      city: 'Dhaka',
      start: 2017,
      end: 2019,
      result: 'GPA 5.00 / 5.00',
      demo: true,
   },
];

// Newest first; in-progress courses lead
const trainings: Training[] = [
   {
      title: 'IBM Full Stack Software Developer',
      provider: 'IBM',
      platform: 'Coursera',
      skills: ['Node.js', 'React', 'Docker', 'Kubernetes'],
      demo: true,
   },
   {
      title: 'Meta Front-End Developer',
      provider: 'Meta',
      platform: 'Coursera',
      completed: '2024-05',
      certificateUrl: 'https://www.coursera.org/verify/professional-cert/DEMO',
      skills: ['React', 'JavaScript', 'Accessibility', 'UX'],
      demo: true,
   },
   {
      title: 'Google IT Automation with Python',
      provider: 'Google',
      platform: 'Coursera',
      completed: '2023-11',
      certificateUrl: 'https://www.coursera.org/verify/professional-cert/DEMO',
      skills: ['Python', 'Git', 'Automation'],
      demo: true,
   },
   {
      title: 'Docker & Kubernetes: The Practical Guide',
      provider: 'Maximilian Schwarzmüller',
      platform: 'Udemy',
      completed: '2023-02',
      certificateUrl: 'https://www.udemy.com/certificate/DEMO/',
      skills: ['Docker', 'Kubernetes', 'CI/CD'],
      demo: true,
   },
];

// Vercel sets VERCEL_ENV at build and run time; locally it is unset
const showsDemo = process.env.VERCEL_ENV !== 'production';
const published = <T extends { demo?: boolean }>(entries: T[]) =>
   entries.filter((entry) => !entry.demo || showsDemo);

/** The education to show: real entries everywhere, demo ones off production */
export const getEducation = () => published(education);

/** The trainings to show: real entries everywhere, demo ones off production */
export const getTrainings = () => published(trainings);
