import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

import { appConfig } from '@/config/app.config';
import { transporter } from '@/lib/nodemailer';
import { escapeHtml } from '@/lib/utils';

export const POST = async (request: NextRequest) => {
   // Invalid JSON falls through to the schema and gets a 422
   const body = await request.json().catch(() => null);

   // Honeypot: people never see this field, so a value means a bot.
   // Answer like a normal send so the bot has no reason to retry.
   if (body?.botField) {
      return NextResponse.json({ success: true });
   }

   const { success, data, error } = await z
      .object({
         name: z
            .string()
            .trim()
            .min(1, 'Name is required')
            .max(100, 'Name must be 100 characters or less'),
         email: z
            .email('Invalid email address')
            .max(254, 'Email must be 254 characters or less'),
         message: z
            .string()
            .trim()
            .min(1, 'Message is required')
            .max(5000, 'Message must be 5000 characters or less'),
         subject: z
            .string()
            .trim()
            .min(1, 'Subject is required')
            .max(200, 'Subject must be 200 characters or less'),
      })
      .safeParseAsync(body);
   if (!success) {
      return NextResponse.json(z.flattenError(error).fieldErrors, {
         status: 422,
      });
   }

   try {
      await transporter.sendMail({
         // Send from our own address so SPF/DMARC pass; replies go to the visitor
         from: {
            name: appConfig.APP_NAME_SHORT,
            address: appConfig.SMTP_EMAIL,
         },
         replyTo: { name: data.name, address: data.email },
         to: appConfig.SMTP_EMAIL,
         subject: data.subject,
         text: data.message,
         html: `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
             <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
             <p><strong>Message:</strong></p>
             <p>${escapeHtml(data.message)}</p>`,
      });
   } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return NextResponse.json(
         { message: 'Something went wrong' },
         { status: 500 },
      );
   }

   return NextResponse.json({ success: true });
};
