// The owner's public details, shown across the site. None of them is a secret,
// so they live here rather than in env vars (app.config.ts holds only the
// deploy URL and the SMTP credentials), and client components can read them too.
export const siteConfig = {
   /** The name as the site shows it: header copy, footer, resume, mail sender */
   name: 'Hozaifa B. Masud',
   /** The logo and the hero's workspace folder */
   firstName: 'Hozaifa',
   /** The browser tab's title */
   title: 'Hozaifa B. Masud - Full Stack Developer & AI Savvy',
   designation: 'Software Engineer',
   email: 'hozaifa4you@gmail.com',
   phone: '+8801918780770',
   /** The site's host, without the protocol */
   website: 'hozaifabinmasud.vercel.app',
   address: 'Uttara 10, Bangladesh',
   githubUsername: 'hozaifa4you',
   linkedinUsername: 'hozaifabinmasud',
};
