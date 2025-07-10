import { ReactNode } from 'react';

interface SectionHeaderProps {
   text: string;
   count: number;
}

export function SectionHeader({ text, count }: SectionHeaderProps) {
   return (
      <h3 className="text-2xl font-semibold">
         <span className="text-primary">@</span>
         {text}
         <sup
            className="text-primary text-base font-medium"
            title={`${count}+ academic qualifications`}
         >
            {count}+
         </sup>
      </h3>
   );
}

interface BulletItemProps {
   children: ReactNode;
}

export function BulletItem({ children }: BulletItemProps) {
   return (
      <div className="flex items-start space-x-3">
         <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
         <span className="text-sm text-gray-300 lg:text-base">{children}</span>
      </div>
   );
}

interface StatItemProps {
   value: string;
   label: string;
}

export function StatItem({ value, label }: StatItemProps) {
   return (
      <div className="project-info-card text-center">
         <div className="text-primary mb-2 font-mono text-2xl font-bold lg:text-3xl">
            {value}
         </div>
         <div className="text-xs text-gray-400 lg:text-sm">
            <span className="text-primary">@</span>
            {label}
         </div>
      </div>
   );
}

interface ExpandableContentProps {
   isExpanded: boolean;
   children: ReactNode;
}

export function ExpandableContent({
   isExpanded,
   children,
}: ExpandableContentProps) {
   if (!isExpanded) return null;

   return (
      <div className="animate-in slide-in-from-top mt-6 space-y-6 border-t border-gray-600 pt-6 duration-300">
         {children}
      </div>
   );
}

interface SectionSubheaderProps {
   title: string;
}

export function SectionSubheader({ title }: SectionSubheaderProps) {
   return (
      <h4 className="text-primary mb-3 font-mono text-sm lg:text-base">
         {title}
      </h4>
   );
}
