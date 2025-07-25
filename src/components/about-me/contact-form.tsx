import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
   return (
      <>
         <h4 className="mt-10 mb-5 text-2xl font-semibold">
            <span className="text-primary">#</span>
            contact-with<span className="text-primary">{'>='}</span>
            me
         </h4>
         <form action="#" className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
               <Input
                  label={
                     <span>
                        <span className="text-primary">@</span>
                        your-name
                     </span>
                  }
                  autoComplete="off"
                  required
               />
               <Input
                  type="email"
                  label={
                     <span>
                        <span className="text-primary">@</span>
                        your-email
                     </span>
                  }
                  autoComplete="off"
                  required
               />
            </div>

            <Input
               label={
                  <span>
                     <span className="text-primary">@</span>
                     subject
                  </span>
               }
               autoComplete="off"
               required
            />

            <Textarea
               label={
                  <span>
                     <span className="text-primary">@</span>
                     message
                  </span>
               }
               autoComplete="off"
               className="resize-none"
               required
            />

            <Button type="submit" variant="outline" size="lg" className="w-fit">
               <span>
                  <span className="text-primary">@</span>send ~{'>'}
               </span>
            </Button>
         </form>
      </>
   );
};

export { ContactForm };
