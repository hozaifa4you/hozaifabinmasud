'use client';

import { useActionState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactAction } from '@/lib/action';

const ContactForm = () => {
   const [state, action, pending] = useActionState(contactAction, null);

   return (
      <>
         <h4 className="mt-10 mb-5 text-2xl font-semibold">
            <span className="text-primary">#</span>
            contact-with<span className="text-primary">{'>='}</span>
            me
         </h4>
         <form action={action} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
               <div>
                  <Input
                     label={
                        <span>
                           <span className="text-primary">@</span>
                           your-name
                        </span>
                     }
                     autoComplete="off"
                     name="name"
                  />
                  {state?.errors?.name && state.errors.name.length > 0 && (
                     <p className="mt-2 text-sm text-primary">
                        {state.errors.name[0]}
                     </p>
                  )}
               </div>
               <div>
                  <Input
                     type="email"
                     label={
                        <span>
                           <span className="text-primary">@</span>
                           your-email
                        </span>
                     }
                     name="email"
                  />
                  {state?.errors?.email && state.errors.email.length > 0 && (
                     <p className="mt-2 text-sm text-primary">
                        {state.errors.email[0]}
                     </p>
                  )}
               </div>
            </div>

            <div>
               <Input
                  label={
                     <span>
                        <span className="text-primary">@</span>
                        subject
                     </span>
                  }
                  name="subject"
               />
               {state?.errors?.subject && state.errors.subject.length > 0 && (
                  <p className="mt-2 text-sm text-primary">
                     {state.errors.subject[0]}
                  </p>
               )}
            </div>

            <div>
               <Textarea
                  label={
                     <span>
                        <span className="text-primary">@</span>
                        message
                     </span>
                  }
                  className="resize-none"
                  name="message"
               />
               {state?.errors?.message && state.errors.message.length > 0 && (
                  <p className="mt-2 text-sm text-primary">
                     {state.errors.message[0]}
                  </p>
               )}
            </div>

            <Button
               type="submit"
               variant="outline"
               size="lg"
               className="w-fit"
               disabled={pending}
            >
               <span>
                  <span className="text-primary">@</span>
                  {pending ? 'Sending...' : 'Send'}
               </span>
            </Button>

            {state?.message && (
               <p
                  role="status"
                  className={
                     state.success
                        ? 'text-sm text-text-secondary'
                        : 'text-sm text-primary'
                  }
               >
                  {state.message}
               </p>
            )}
         </form>
      </>
   );
};

export { ContactForm };
