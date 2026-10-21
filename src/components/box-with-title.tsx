import { ReactNode } from 'react';

interface BoxWithTitleProps {
   title: ReactNode;
   content: ReactNode;
}

const BoxWithTitle = ({ title, content }: BoxWithTitleProps) => {
   return (
      <div className="border border-text">
         <div className="border-b border-b-text p-2">{title}</div>
         <div className="p-2">{content}</div>
      </div>
   );
};

export { BoxWithTitle };
