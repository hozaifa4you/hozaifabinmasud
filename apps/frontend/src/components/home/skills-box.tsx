interface SkillsBoxProps {
   title: string;
   skills: string[];
}

const SkillsBox = ({ title, skills }: SkillsBoxProps) => {
   return (
      <div className="border-text w-full border">
         <div className="border-b-text border-b p-2">
            <h4 className="font-semibold text-white">{title}</h4>
         </div>
         <div className="flex flex-wrap p-2">
            {skills.map((skill, index) => (
               <span key={index} className="mr-2 text-sm">
                  {skill},
               </span>
            ))}
         </div>
      </div>
   );
};

export { SkillsBox };
