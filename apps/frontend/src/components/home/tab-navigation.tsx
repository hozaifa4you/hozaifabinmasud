import { LuBookOpen, LuGraduationCap } from 'react-icons/lu';

interface TabNavigationProps {
   activeTab: 'education' | 'training';
   setActiveTab: (tab: 'education' | 'training') => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
   return (
      <div className="my-5">
         <div className="flex max-w-md space-x-1 rounded-lg border border-gray-600 bg-gray-800/30 p-1">
            <button
               onClick={() => setActiveTab('education')}
               className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 font-mono text-sm transition-all duration-300 ${
                  activeTab === 'education'
                     ? 'bg-primary font-bold text-black'
                     : 'text-gray-400 hover:text-white'
               }`}
            >
               <LuGraduationCap size={16} />
               <span>Education</span>
            </button>
            <button
               onClick={() => setActiveTab('training')}
               className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 font-mono text-sm transition-all duration-300 ${
                  activeTab === 'training'
                     ? 'bg-primary font-bold text-black'
                     : 'text-gray-400 hover:text-white'
               }`}
            >
               <LuBookOpen size={16} />
               <span>Training</span>
            </button>
         </div>
      </div>
   );
}
