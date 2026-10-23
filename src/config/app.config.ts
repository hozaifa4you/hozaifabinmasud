import 'server-only';

// The env vars: the deployed URL and the SMTP credentials (see .env.example).
// Everything public about the owner is in site.config.ts.
export const appConfig = {
   APP_URL: process.env.APP_URL!,
   SMTP_HOST: process.env.SMTP_HOST,
   SMTP_USERNAME: process.env.SMTP_USERNAME,
   SMTP_PASSWORD: process.env.SMTP_PASSWORD,
   SMTP_PORT: process.env.SMTP_PORT,
   SMTP_EMAIL: process.env.SMTP_EMAIL,
};
