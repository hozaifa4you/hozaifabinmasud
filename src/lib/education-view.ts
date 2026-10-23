import type { Education, Training } from '@/lib/data/education';

const monthFormat = new Intl.DateTimeFormat('en-GB', {
   month: 'short',
   year: 'numeric',
   timeZone: 'UTC',
});

/** 'May 2024' from 'YYYY-MM' */
const monthOf = (yyyyMm: string) =>
   monthFormat.format(new Date(`${yyyyMm}-01T00:00:00Z`));

/** 'BSc in Computer Science and Engineering' */
export const qualificationOf = (entry: Education) =>
   `${entry.degree} in ${entry.subject}`;

/** '2022 – 2026', or '2022 – present' with no end year */
export const yearsOf = (entry: Education) =>
   `${entry.start} – ${entry.end ?? 'present'}`;

/** 'May 2024' for a finished course, null while it is in progress */
export const completedOf = (training: Training) =>
   training.completed ? monthOf(training.completed) : null;

/** 'Aug 2025' for a course in progress with a start month, otherwise null */
export const startedOf = (training: Training) =>
   !training.completed && training.started ? monthOf(training.started) : null;
