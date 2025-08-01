interface Training {
   title: string;
   provider: string;
   duration: string;
   platform: string;
   completedDate: string;
   skills: string[];
}

const ResumeTrainingCard = ({ ...training }: Training) => {
   return (
      <div className="border border-gray-600 p-4">
         <h3 className="mb-2 text-sm font-bold text-white">{training.title}</h3>
         <div className="mb-2 flex items-center justify-between">
            <span className="text-primary text-sm">{training.provider}</span>
            <span className="text-xs text-gray-400">{training.duration}</span>
         </div>
         <div className="mb-2 text-xs text-gray-400">{training.platform}</div>
         <div className="mb-2 text-xs text-gray-400">
            Completed: {training.completedDate}
         </div>
         <div className="flex flex-wrap gap-1">
            {training.skills.map((skill, skillIndex) => (
               <span
                  key={skillIndex}
                  className="bg-gray-700 px-2 py-1 text-xs text-gray-300"
               >
                  {skill}
               </span>
            ))}
         </div>
      </div>
   );
};

export { ResumeTrainingCard };
