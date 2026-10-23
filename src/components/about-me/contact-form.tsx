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

const focusOnMount = (node: HTMLElement | null) => node?.focus();

const sentFormat = new Intl.DateTimeFormat(undefined, {
   dateStyle: 'medium',
   timeStyle: 'short',
});

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
         ].map((row, index) => (
            <div
               key={row.key}
               className="grid animate-rise grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-x-4 border-b border-line py-3"
               style={{ animationDelay: `${160 + index * 60}ms` }}
            >
               <dt className="font-mono text-xs text-primary-soft">
                  {row.key}
               </dt>
               <dd className="text-control wrap-break-word text-strong">
                  {row.value}
               </dd>
            </div>
         ))}
         <div
            className="grid animate-rise grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-x-4 border-b border-line py-3"
            style={{ animationDelay: '340ms' }}
         >
            <dt className="font-mono text-xs text-primary-soft">sent</dt>
            <dd className="font-mono text-ui text-strong">
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

const ContactForm = ({ recipient }: { recipient?: string }) => {
   const [state, action, pending] = useActionState(contactAction, null);
   const [dismissed, setDismissed] = useState<typeof state>(null);
   const nameId = useId();
   const result = state === dismissed ? null : state;
   const shownErrors = pending ? undefined : state?.errors;
   const shownResult = pending ? null : result;

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
      <form
         action={action}
         noValidate
         className={cn('relative grid gap-5', dismissed && 'animate-wipe')}
      >
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
                     error={shownErrors?.name?.[0]}
                  />

                  <Input
                     label="Email"
                     type="email"
                     name="email"
                     autoComplete="email"
                     required
                     maxLength={254}
                     defaultValue={state?.fields?.email}
                     error={shownErrors?.email?.[0]}
                  />
               </div>

               <Input
                  label="Subject"
                  name="subject"
                  required
                  maxLength={200}
                  defaultValue={state?.fields?.subject}
                  error={shownErrors?.subject?.[0]}
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
               error={shownErrors?.message?.[0]}
            />
         </div>

         <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Button
               type="submit"
               variant="primary"
               size="lg"
               disabled={pending}
               className="relative overflow-hidden"
            >
               <LuSend aria-hidden />
               {pending ? 'Sending…' : 'Send message'}
               {pending && (
                  <span
                     aria-hidden
                     className="absolute inset-x-0 bottom-0 h-0.5 motion-reduce:hidden"
                  >
                     <span className="block h-full w-2/5 animate-sending bg-strong/70" />
                  </span>
               )}
            </Button>
            <p className="text-sm text-muted">
               All fields are required. Replies come by email.
            </p>
         </div>

         <p
            role="status"
            className={cn(
               'flex items-center gap-2 text-sm empty:hidden',
               shownResult?.success ? 'text-success' : 'text-danger',
            )}
         >
            {shownResult?.message && (
               <span
                  key={`${shownResult.success}-${shownResult.message}`}
                  className="inline-flex animate-rise items-center gap-2"
               >
                  {shownResult.success ? (
                     <LuCircleCheck aria-hidden className="size-4 shrink-0" />
                  ) : (
                     <LuCircleAlert aria-hidden className="size-4 shrink-0" />
                  )}
                  {shownResult.message}
               </span>
            )}
         </p>
      </form>
   );
};

export { ContactForm };
