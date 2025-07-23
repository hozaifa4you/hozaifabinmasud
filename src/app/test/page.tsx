import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Test = () => {
   return (
      <div>
         <div>
            Button:
            <div className="flex items-center gap-4">
               <Button variant="default">Default</Button>
               <Button variant="link">Link</Button>
               <Button variant="outline">Outline</Button>
               <Button variant="secondary">Secondary</Button>
               <Button variant="outlineSecondary">Outline Secondary</Button>
            </div>
         </div>

         <div className="mt-5">
            Badge:
            <div className="flex items-center gap-4">
               <Badge text="Accent" variant="accent" />
               <Badge text="Active" variant="active" />
               <Badge text="Default" variant="default" />
               <Badge text="Done" variant="done" />
               <Badge text="Gradient" variant="gradient" />
            </div>
         </div>
      </div>
   );
};

export default Test;
