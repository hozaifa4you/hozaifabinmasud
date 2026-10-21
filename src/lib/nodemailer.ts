import nodemailer from 'nodemailer';

import { appConfig } from '@/config/app.config';

export const transporter = nodemailer.createTransport({
   host: appConfig.SMTP_HOST,
   port: parseInt(appConfig.SMTP_PORT ?? '587'),
   secure: false,
   auth: {
      user: appConfig.SMTP_USERNAME,
      pass: appConfig.SMTP_PASSWORD,
   },
});
