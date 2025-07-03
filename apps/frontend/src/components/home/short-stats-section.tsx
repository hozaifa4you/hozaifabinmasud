import { calculateYearsFromDate } from '@/lib/utils';

const ShortStatsSection = () => {
   return (
      <section className="section-padding rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-8">
         <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
               <div className="mb-2 text-3xl font-bold text-white">
                  {calculateYearsFromDate('01/08/2021')}
                  <sup className="text-primary font-semibold">+</sup>
               </div>
               <div className="text-sm text-slate-400">$years_experience</div>
            </div>
            <div className="text-center">
               <div className="mb-2 text-3xl font-bold text-white">
                  15<sup>+</sup>
               </div>
               <div className="text-sm text-slate-400">$projects_completed</div>
            </div>
            <div className="text-center">
               <div className="mb-2 text-3xl font-bold text-white">
                  32<sup>+</sup>
               </div>
               <div className="text-sm text-slate-400">$technologies</div>
            </div>
            <div className="text-center">
               <div className="mb-2 text-3xl font-bold text-white">2</div>
               <div className="text-sm text-slate-400">$companies</div>
            </div>
         </div>
      </section>
   );
};

export { ShortStatsSection };
