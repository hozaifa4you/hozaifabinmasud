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
   /** The institution's short name for titles, e.g. 'ISTT'; the full name otherwise */
   institutionShort?: string;
   /** A short form for tight spots such as the hero status bar, e.g. 'BSc in CSE · ISTT' */
   short?: string;
   /** The awarding university or education board, when it is not the institution */
   awardedBy?: string;
   city: string;
   start: number;
   /** The year it ended, or is expected to end while ongoing */
   end?: number;
   ongoing?: boolean;
   /** As it should read, e.g. 'CGPA 3.50 / 4.00'; leave out to keep it private */
   result?: string;
   // Shown on /educations when given; leave any of them out
   /** Main subjects or courses */
   courses?: string[];
   /** Projects or a thesis, one line each */
   projects?: string[];
   /** Awards, scholarships, competitions, roles */
   achievements?: string[];
   demo?: boolean;
}

export interface Training {
   title: string;
   /** Who made the course, e.g. 'Meta', 'Google', or the instructor */
   provider: string;
   /** Where it was taken, e.g. 'Coursera', 'Udemy' */
   platform: string;
   /** Month started, 'YYYY-MM'; shown while the course is in progress */
   started?: string;
   /** Month finished, 'YYYY-MM'; leave out while it is in progress */
   completed?: string;
   /** The certificate's public verification link */
   certificateUrl?: string;
   /** An image of the certificate under public/, with its pixel size */
   certificateImage?: { src: string; width: number; height: number };
   /** What the course covered, taken from the certificate; leave out when it names nothing */
   skills?: string[];
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
      institutionShort: 'ISTT',
      short: 'BSc in CSE · ISTT',
      city: 'Dhaka',
      start: 2022,
      end: 2026,
      ongoing: true,
      courses: [
         'Data Structures',
         'Algorithms',
         'Database Systems',
         'Computer Networks',
         'Software Engineering',
      ],
      projects: ['A course project in web development'],
      achievements: ['Member of the programming club'],
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

// Newest first; in-progress courses lead. Every entry here is from the owner's
// certificates in public/certificates (added 2026-10-23); skills are the
// courses each certificate lists
const trainings: Training[] = [
   {
      // An en dash held to the words before it, so no line starts with it
      title: 'Master Svelte Framework – The Complete Course',
      provider: 'Packt',
      platform: 'Coursera',
      completed: '2025-09',
      certificateUrl: 'https://coursera.org/verify/SDE0C840X817',
      certificateImage: {
         src: '/certificates/packt-master-svelte-framework-the-complete-course.webp',
         width: 1600,
         height: 1234,
      },
      skills: ['Svelte'],
   },
   {
      title: 'Programming with Google Go',
      provider: 'University of California, Irvine',
      platform: 'Coursera',
      completed: '2025-08',
      certificateUrl: 'https://coursera.org/verify/specialization/5O104QAPNNYI',
      certificateImage: {
         src: '/certificates/uci-programming-with-google-go.webp',
         width: 1600,
         height: 1234,
      },
      skills: ['Go', 'Functions', 'Methods', 'Interfaces', 'Concurrency'],
   },
   {
      title: 'Preparing for Google Cloud Certification: Cloud Developer',
      provider: 'Google Cloud',
      platform: 'Coursera',
      completed: '2025-07',
      certificateUrl:
         'https://coursera.org/verify/professional-cert/QDCWMN4RR3UD',
      certificateImage: {
         src: '/certificates/google-cloud-google-cloud-developer.webp',
         width: 1600,
         height: 1234,
      },
      skills: [
         'Google Cloud',
         'Cloud Run',
         'Cloud Run functions',
         'Containers',
         'Service orchestration',
         'Gemini',
      ],
   },
   {
      title: 'The AI Engineer Path',
      provider: 'Scrimba',
      platform: 'Scrimba',
      completed: '2025-07',
      certificateUrl:
         'https://scrimba.com/certificate-cert2JbLs3qgAvfnFeT4StqV8rDV6jXPqFaRNX3fhk',
      certificateImage: {
         src: '/certificates/scrimba-the-ai-engineer-path.webp',
         width: 1002,
         height: 1326,
      },
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

/** Whether the homepage section, its explorer file and its nav item show */
export const hasEducationContent = () =>
   getEducation().length > 0 || getTrainings().length > 0;

/**
 * Where "education" leads: the education page while it has entries, the
 * training page when only training is published, null when neither is
 */
export const getLearningHref = () => {
   if (getEducation().length > 0) return '/educations';
   if (getTrainings().length > 0) return '/trainings';
   return null;
};
