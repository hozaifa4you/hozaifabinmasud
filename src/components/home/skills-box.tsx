import Image from 'next/image';

import { SkillType } from '@/lib/data/skills';

interface SkillsBoxProps {
   title: string;
   skills: SkillType[];
}

const SkillsBox = ({ title, skills }: SkillsBoxProps) => {
   return (
      <div className="w-full border border-text">
         <div className="border-b border-b-text p-2">
            <h4 className="font-semibold text-white">{title}</h4>
         </div>
         <div className="flex flex-wrap gap-0.5 p-2">
            {skills.map((skill) => {
               return (
                  <span
                     key={skill.id}
                     className="inline-flex items-center gap-1 rounded-sm bg-text/20 px-1 text-sm"
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
