'use server';

import 'server-only';

import { appConfig } from '@/config/app.config';

const getField = (formData: FormData, key: string) => {
   const value = formData.get(key);
   return typeof value === 'string' ? value : '';
};

export const contactAction = async (prevState: unknown, newState: FormData) => {
   // Returned on failure so the form can refill what the visitor typed
   const fields = {
      name: getField(newState, 'name'),
      email: getField(newState, 'email'),
      subject: getField(newState, 'subject'),
      message: getField(newState, 'message'),
   };

   try {
      const response = await fetch(`${appConfig.APP_URL}/api/contact`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            ...fields,
            botField: getField(newState, 'bot-field'),
         }),
      });

      if (response.status === 422) {
         return {
            success: false,
            errors: await response.json(),
            fields,
         };
      }

      if (!response.ok) {
         throw new Error(`Contact API responded with ${response.status}`);
      }
   } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return {
         success: false,
         message: 'Something went wrong. Please try again later.',
         fields,
      };
   }

   return {
      success: true,
      message: 'Message sent successfully! Please wait for response.',
      // What went out, for the contact page's receipt
      sent: {
         name: fields.name.trim(),
         email: fields.email.trim(),
         subject: fields.subject.trim(),
         at: new Date().toISOString(),
      },
   };
};
