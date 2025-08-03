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

   const response = await fetch(`${appConfig.APP_URL}/api/contact`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   });

   const result = await response.json();
   if (!response.ok) {
      return {
         success: false,
         errors: result,
      };
   }

   return {
      success: true,
      message: 'Message sent successfully! Please wait for response.',
   };
};
