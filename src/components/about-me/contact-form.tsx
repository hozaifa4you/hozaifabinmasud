'use client';

import { useActionState, useId, useState } from 'react';
import {
   LuCircleAlert,
   LuCircleCheck,
   LuPenLine,
   LuSend,
} from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactAction } from '@/lib/action';
import { cn } from '@/lib/utils';

type Sent = NonNullable<
   NonNullable<Awaited<ReturnType<typeof contactAction>>>['sent']
>;

// Stable, so the heading takes focus once when the receipt appears
const focusOnMount = (node: HTMLElement | null) => node?.focus();

const sentFormat = new Intl.DateTimeFormat(undefined, {
   dateStyle: 'medium',
   timeStyle: 'short',
});

/** What went out, held in place of the form until the visitor writes again */
const SentReceipt = ({
   sent,
   recipient,
   onWriteAnother,
}: {
   sent: Sent;
   recipient: string;
   onWriteAnother: () => void;
}) => (
   <div className="animate-wipe">
      <h3
         ref={focusOnMount}
         tabIndex={-1}
         className="flex items-center gap-2 text-xl font-semibold text-strong outline-none"
      >
         <LuCircleCheck aria-hidden className="size-5 shrink-0 text-success" />
         Message sent
      </h3>
      <p className="mt-3 max-w-[60ch] text-body text-pretty">
         Thanks, {sent.name}. I&apos;ll reply by email to{' '}
         <span className="font-mono text-sm wrap-break-word text-strong">
            {sent.email}
         </span>
         .
      </p>
      <dl className="mt-6 border-t border-line">
         {[
            { key: 'to', value: recipient },
            { key: 'from', value: sent.name },
            { key: 'subject', value: sent.subject },
         ].map((row) => (
            <div
               key={row.key}
               className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-x-4 border-b border-line py-3"
            >
               <dt className="font-mono text-xs text-primary-soft">
                  {row.key}
               </dt>
               <dd className="text-control wrap-break-word text-strong">
                  {row.value}
               </dd>
            </div>
         ))}
         <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-x-4 border-b border-line py-3">
            <dt className="font-mono text-xs text-primary-soft">sent</dt>
            <dd className="font-mono text-ui text-strong">
               {/* Formatted in the reader's own time zone */}
               <time dateTime={sent.at} suppressHydrationWarning>
                  {sentFormat.format(new Date(sent.at))}
               </time>
            </dd>
         </div>
      </dl>
      <Button
         type="button"
         variant="default"
         size="lg"
         onClick={onWriteAnother}
         className="mt-6"
      >
         <LuPenLine aria-hidden />
         Write another
      </Button>
   </div>
);

const ContactForm = ({
   recipient,
}: {
   /** Who the receipt names; with it, a sent message shows a receipt in place of the form */
   recipient?: string;
}) => {
   const [state, action, pending] = useActionState(contactAction, null);
   // The result the visitor closed with "Write another"
   const [dismissed, setDismissed] = useState<typeof state>(null);
   const nameId = useId();
   const result = state === dismissed ? null : state;

   if (recipient && result?.sent) {
      return (
         <SentReceipt
            sent={result.sent}
            recipient={recipient}
            onWriteAnother={() => {
               setDismissed(state);
               requestAnimationFrame(() =>
                  document.getElementById(nameId)?.focus(),
               );
            }}
         />
      );
   }

   return (
      // Server-side validation drives the messages, so skip the browser bubbles
      <form
         action={action}
         noValidate
         // Back from a receipt, the form wipes in the way the receipt did
         className={cn('relative grid gap-5', dismissed && 'animate-wipe')}
      >
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

         {/* In a wide container the message sits beside the other fields */}
         <div className="grid gap-5 @3xl:grid-cols-2">
            <div className="grid content-start gap-5">
               <div className="grid gap-5 sm:grid-cols-2 @3xl:grid-cols-1">
                  <Input
                     id={nameId}
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
            </div>

            <Textarea
               label="Message"
               name="message"
               required
               maxLength={5000}
               containerClassName="@3xl:flex @3xl:flex-col"
               className="min-h-36 resize-y @3xl:flex-1"
               defaultValue={state?.fields?.message}
               error={state?.errors?.message?.[0]}
            />
         </div>

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
               result?.success ? 'text-success' : 'text-danger',
            )}
         >
            {result?.message && (
               <>
                  {result.success ? (
                     <LuCircleCheck aria-hidden className="size-4 shrink-0" />
                  ) : (
                     <LuCircleAlert aria-hidden className="size-4 shrink-0" />
                  )}
                  {result.message}
               </>
            )}
         </p>
      </form>
   );
};

export { ContactForm };
