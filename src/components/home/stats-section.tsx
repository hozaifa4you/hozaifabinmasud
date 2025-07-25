import { StatType } from '@/lib/education-data';

import { StatItem } from './education-components';

interface StatProps {
   stats: StatType[];
}

export function StatsGrid({ stats }: StatProps) {
   return (
      <section className="section-padding">
         <div className="container grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {stats.map((stat, index) => (
               <StatItem key={index} value={stat.value} label={stat.label} />
            ))}
         </div>
      </section>
   );
}
