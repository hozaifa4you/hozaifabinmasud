import type { Education, Training } from '@/lib/data/education';

const monthFormat = new Intl.DateTimeFormat('en-GB', {
   month: 'short',
   year: 'numeric',
   timeZone: 'UTC',
});

/** 'BSc in Computer Science and Engineering' */
export const qualificationOf = (entry: Education) =>
   `${entry.degree} in ${entry.subject}`;

/** '2022 – 2026', or '2022 – present' with no end year */
export const yearsOf = (entry: Education) =>
   `${entry.start} – ${entry.end ?? 'present'}`;

/** 'May 2024' for a finished course, null while it is in progress */
export const completedOf = (training: Training) =>
   training.completed
      ? monthFormat.format(new Date(`${training.completed}-01T00:00:00Z`))
      : null;
