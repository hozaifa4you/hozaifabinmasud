'use server';

import 'server-only';

import { appConfig } from '@/config/app.config';

export const contactAction = async (prevState: unknown, newState: FormData) => {
   const data = {
      name: newState.get('name'),
      email: newState.get('email'),
      subject: newState.get('subject'),
      message: newState.get('message'),
   };

   try {
      const response = await fetch(`${appConfig.APP_URL}/api/contact`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (response.status === 422) {
         return {
            success: false,
            errors: await response.json(),
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
      };
   }

   return {
      success: true,
      message: 'Message sent successfully! Please wait for response.',
   };
};
