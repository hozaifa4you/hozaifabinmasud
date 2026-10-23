import { projects } from '@/lib/data/projects';
import { works } from '@/lib/data/works';

const MONTHS = [
   'jan',
   'feb',
   'mar',
   'apr',
   'may',
   'jun',
   'jul',
   'aug',
   'sep',
   'oct',
   'nov',
   'dec',
];

const parseMonthYear = (value: string) => {
   const [month, year] = value.trim().split(/\s+/);
   return new Date(
      Number(year),
      MONTHS.indexOf(month.slice(0, 3).toLowerCase()),
      1,
   );
};

const monthsBetween = (start: Date, end: Date) =>
   (end.getFullYear() - start.getFullYear()) * 12 +
   (end.getMonth() - start.getMonth()) +
   1;

const formatSpan = (months: number) => {
   const years = Math.floor(months / 12);
   const rest = months % 12;

   return [
      years > 0 && `${years} yr${years > 1 ? 's' : ''}`,
      rest > 0 && `${rest} mo${rest > 1 ? 's' : ''}`,
   ]
      .filter(Boolean)
      .join(' ');
};

const formatMonthYear = (date: Date) =>
   date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const toIsoMonth = (date: Date) =>
   `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

export const getWorkHistory = (now = new Date()) =>
   works
      .map((work) => {
         const start = parseMonthYear(work.startDate);
         const isCurrent = work.status === 'present' || !work.endDate;
         const end = isCurrent ? now : parseMonthYear(work.endDate!);
         return {
            ...work,
            isCurrent,
            startLabel: formatMonthYear(start),
            endLabel: isCurrent ? 'present' : formatMonthYear(end),
            startIso: toIsoMonth(start),
            endIso: isCurrent ? undefined : toIsoMonth(end),
            span: formatSpan(monthsBetween(start, end)),
            sortKey: start.getTime(),
         };
      })
      .sort((a, b) => b.sortKey - a.sortKey);

export const getExperienceYears = (now = new Date()) => {
   const first = Math.min(
      ...works.map((work) => parseMonthYear(work.startDate).getTime()),
   );
   return Math.floor(monthsBetween(new Date(first), now) / 12);
};

export const getFirstWorkYear = () =>
   Math.min(
      ...works.map((work) => parseMonthYear(work.startDate).getFullYear()),
   );

export const getCurrentWork = () =>
   works.find((work) => work.status === 'present');

export const getProjectCount = () => projects.length;

const SKILL_NAMES: Record<string, string> = {
   nodejs: 'Node.js',
   reactjs: 'React',
   typescript: 'TypeScript',
   mongodb: 'MongoDB',
   nextjs: 'Next.js',
   wordpress: 'WordPress',
   openai: 'OpenAI',
   langchain: 'LangChain',
   vectordb: 'Vector databases',
};

export const getSkillName = (key: string) => SKILL_NAMES[key] ?? key;

const TECH_NAMES: Record<string, string> = {
   NextJs: 'Next.js',
   ReactJs: 'React',
   NestJs: 'NestJS',
   TailwindCss: 'Tailwind CSS',
   TailwindCSS: 'Tailwind CSS',
   ShadcnUI: 'shadcn/ui',
   Shadcn: 'shadcn/ui',
   'Drizzle-ORM': 'Drizzle ORM',
   AntD: 'Ant Design',
   'PDF.Js': 'PDF.js',
   VectorDB: 'Vector databases',
   'Vector DB': 'Vector databases',
   'JS & TS': 'TypeScript',
   'Lemon Squeeze': 'Lemon Squeezy',
   Ts: 'TypeScript',
   Nodejs: 'Node.js',
   Discordjs: 'discord.js',
};

export const normalizeTech = (name: string) => TECH_NAMES[name] ?? name;
