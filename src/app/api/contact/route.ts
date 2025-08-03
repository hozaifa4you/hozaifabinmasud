import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

import { appConfig } from '@/config/app.config';
import { transporter } from '@/lib/nodemailer';

export const POST = async (request: NextRequest) => {
   const body = await request.json();
   const { success, data, error } = await z
      .object({
         name: z.string().min(1, 'Name is required'),
         email: z.email('Invalid email address'),
         message: z.string().min(1, 'Message is required'),
         subject: z.string().min(1, 'Subject is required'),
      })
      .safeParseAsync(body);
   if (!success) {
      return NextResponse.json(z.flattenError(error).fieldErrors, {
         status: 422,
      });
   }

   transporter.sendMail({
      from: `${appConfig.APP_NAME_SHORT} <${appConfig.SMTP_EMAIL}>`,
      to: data.email,
      subject: `New message from ${data.name} - ${data.subject}`,
      text: data.message,
      html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Subject:</strong> ${data.subject}</p>
             <p><strong>Message:</strong></p>
             <p>${data.message}</p>`,
   });

   return NextResponse.json({ success: true });
};
