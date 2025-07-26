import { ReactNode } from 'react';

interface BoxWithTitleProps {
   title: ReactNode;
   content: ReactNode;
}

const BoxWithTitle = ({ title, content }: BoxWithTitleProps) => {
   return (
      <div className="border-text border">
         <div className="border-b-text border-b p-2">{title}</div>
         <div className="p-2">{content}</div>
      </div>
   );
};

export { BoxWithTitle };
