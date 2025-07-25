import Image from 'next/image';

import { SkillType } from '@/lib/data';

interface SkillsBoxProps {
   title: string;
   skills: SkillType[];
}

const SkillsBox = ({ title, skills }: SkillsBoxProps) => {
   return (
      <div className="border-text w-full border">
         <div className="border-b-text border-b p-2">
            <h4 className="font-semibold text-white">{title}</h4>
         </div>
         <div className="flex flex-wrap gap-0.5 p-2">
            {skills.map((skill) => {
               return (
                  <span
                     key={skill.id}
                     className="bg-text/20 inline-flex items-center gap-1 rounded-sm px-1 text-sm"
                  >
                     <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={14}
                        height={14}
                     />
                     {skill.name}
                  </span>
               );
            })}
         </div>
      </div>
   );
};

export { SkillsBox };
