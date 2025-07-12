import { LuBookOpen, LuGraduationCap } from 'react-icons/lu';

interface TabNavigationProps {
   activeTab: 'educations' | 'trainings';
   setActiveTab: (tab: 'educations' | 'trainings') => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
   return (
      <div className="my-5">
         <div className="flex max-w-md space-x-1 rounded-lg border border-gray-600 bg-gray-800/30 p-1">
            <button
               onClick={() => setActiveTab('educations')}
               className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 font-mono text-sm transition-all duration-300 ${
                  activeTab === 'educations'
                     ? 'bg-primary font-bold text-black'
                     : 'text-gray-400 hover:text-white'
               }`}
            >
               <LuGraduationCap size={16} />
               <span>
                  Education<sup>9+</sup>
               </span>
            </button>
            <button
               onClick={() => setActiveTab('trainings')}
               className={`flex flex-1 items-center justify-center space-x-2 rounded-md px-4 py-3 font-mono text-sm transition-all duration-300 ${
                  activeTab === 'trainings'
                     ? 'bg-primary font-bold text-black'
                     : 'text-gray-400 hover:text-white'
               }`}
            >
               <LuBookOpen size={16} />
               <span>
                  Training<sup>12+</sup>
               </span>
            </button>
         </div>
      </div>
   );
}
