interface Education {
   degree: string;
   institution: string;
   duration: string;
   grade: string;
   description: string;
}

const ResumeEducationCard = ({ ...edu }: Education) => {
   return (
      <div className="border border-line p-4">
         <h3 className="mb-2 text-sm font-bold text-white">{edu.degree}</h3>
         <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-primary">{edu.institution}</span>
            <span className="text-xs text-muted">{edu.duration}</span>
         </div>
         <div className="mb-2 text-xs font-bold text-primary">{edu.grade}</div>
         <p className="text-xs leading-relaxed text-text">{edu.description}</p>
      </div>
   );
};

export { ResumeEducationCard };
