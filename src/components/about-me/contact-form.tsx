'use client';

import { useActionState } from 'react';
import { LuCircleAlert, LuCircleCheck, LuSend } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactAction } from '@/lib/action';
import { cn } from '@/lib/utils';

const ContactForm = () => {
   const [state, action, pending] = useActionState(contactAction, null);

   return (
      // Server-side validation drives the messages, so skip the browser bubbles
      <form action={action} noValidate className="relative grid gap-5">
         {/* Honeypot: off-screen for people, but bots tend to fill every field */}
         <div aria-hidden="true" className="absolute left-[-10000px]">
            <label>
               Leave this field empty
               <input
                  type="text"
                  name="bot-field"
                  tabIndex={-1}
                  autoComplete="off"
               />
            </label>
         </div>

         <div className="grid gap-5 sm:grid-cols-2">
            <Input
               label="Name"
               name="name"
               autoComplete="name"
               required
               maxLength={100}
               defaultValue={state?.fields?.name}
               error={state?.errors?.name?.[0]}
            />
            <Input
               label="Email"
               type="email"
               name="email"
               autoComplete="email"
               required
               maxLength={254}
               defaultValue={state?.fields?.email}
               error={state?.errors?.email?.[0]}
            />
         </div>

         <Input
            label="Subject"
            name="subject"
            required
            maxLength={200}
            defaultValue={state?.fields?.subject}
            error={state?.errors?.subject?.[0]}
         />

         <Textarea
            label="Message"
            name="message"
            required
            maxLength={5000}
            className="min-h-36 resize-y"
            defaultValue={state?.fields?.message}
            error={state?.errors?.message?.[0]}
         />

         <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Button
               type="submit"
               variant="primary"
               size="lg"
               disabled={pending}
            >
               <LuSend aria-hidden />
               {pending ? 'Sending…' : 'Send message'}
            </Button>
            <p className="text-sm text-muted">
               All fields are required. Replies come by email.
            </p>
         </div>

         <p
            role="status"
            className={cn(
               'flex items-center gap-2 text-sm empty:hidden',
               state?.success ? 'text-success' : 'text-danger',
            )}
         >
            {state?.message && (
               <>
                  {state.success ? (
                     <LuCircleCheck aria-hidden className="size-4 shrink-0" />
                  ) : (
                     <LuCircleAlert aria-hidden className="size-4 shrink-0" />
                  )}
                  {state.message}
               </>
            )}
         </p>
      </form>
   );
};

export { ContactForm };
