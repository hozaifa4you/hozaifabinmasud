'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LuArrowUpRight, LuMaximize2 } from 'react-icons/lu';

import { DemoMark } from '@/components/education/demo-mark';
import {
   CommitDate,
   CommitRow,
   CommitRows,
   CommitTitle,
   InlineList,
   InProgressPill,
   LogCommit,
} from '@/components/education/learning-log';
import { Screen, ScreenViewer } from '@/components/projects/screen-viewer';
import type { Training } from '@/lib/data/education';
import { completedOf, startedOf } from '@/lib/education-view';

/** The trainings as a learning log; certificate images open full size */
const TrainingLog = ({ trainings }: { trainings: Training[] }) => {
   const [viewerIndex, setViewerIndex] = useState<number | null>(null);

   // Each certificate image's place in the viewer, by the training's position
   const screens: Screen[] = [];
   const screenIndex = new Map<number, number>();
   trainings.forEach((training, position) => {
      if (!training.certificateImage) return;
      screenIndex.set(position, screens.length);
      screens.push({
         path: training.certificateImage,
         alt: `${training.title} certificate`,
         caption: `${training.title} · ${training.provider}`,
      });
   });

   return (
      <>
         <ol aria-label="Trainings, newest first" className="mt-10 lg:mt-14">
            {trainings.map((training, position) => {
               const completed = completedOf(training);
               const started = startedOf(training);
               // A demo link would verify nothing
               const verifyUrl = training.demo
                  ? undefined
                  : training.certificateUrl;
               const shot = screenIndex.get(position);

               return (
                  <LogCommit
                     key={`${training.title}-${position}`}
                     inProgress={!completed}
                  >
                     <CommitDate>
                        {completed && (
                           <span>
                              completed{' '}
                              <time dateTime={training.completed}>
                                 {completed}
                              </time>
                           </span>
                        )}
                        {started && (
                           <span>
                              started{' '}
                              <time dateTime={training.started}>{started}</time>
                           </span>
                        )}
                        {!completed && <InProgressPill />}
                        {training.demo && <DemoMark />}
                     </CommitDate>
                     <CommitTitle>{training.title}</CommitTitle>
                     <CommitRows>
                        <CommitRow term="by">
                           {training.provider} · {training.platform}
                        </CommitRow>
                        <CommitRow term="skills">
                           <InlineList
                              items={training.skills}
                              className="font-mono text-sm text-text"
                           />
                        </CommitRow>
                        {(verifyUrl || shot !== undefined) && (
                           <CommitRow term="certificate">
                              {verifyUrl && (
                                 <a
                                    href={verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1 text-control text-strong underline decoration-info/50 underline-offset-4 transition-colors hover:text-info hover:decoration-info"
                                 >
                                    Verify on {training.platform}
                                    <LuArrowUpRight
                                       aria-hidden
                                       className="size-4 text-muted transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                    <span className="sr-only">
                                       (opens in a new tab)
                                    </span>
                                 </a>
                              )}
                              {shot !== undefined && (
                                 <button
                                    type="button"
                                    onClick={() => setViewerIndex(shot)}
                                    className="group/shot relative mt-4 block w-full max-w-sm cursor-zoom-in border border-line bg-bg-sunken transition-colors duration-200 ease-out-expo first:mt-0 hover:border-line-strong"
                                 >
                                    <span className="relative block aspect-99/70">
                                       <Image
                                          src={screens[shot].path}
                                          alt={screens[shot].alt}
                                          fill
                                          sizes="384px"
                                          className="object-contain"
                                       />
                                    </span>
                                    <span
                                       aria-hidden
                                       className="absolute top-3 right-3 grid size-9 place-items-center border border-line-strong bg-bg-sunken text-strong opacity-0 transition-opacity duration-200 ease-out-expo group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
                                    >
                                       <LuMaximize2 className="size-4" />
                                    </span>
                                    <span className="sr-only">
                                       View the certificate full size
                                    </span>
                                 </button>
                              )}
                           </CommitRow>
                        )}
                     </CommitRows>
                  </LogCommit>
               );
            })}
         </ol>

         {screens.length > 0 && (
            <ScreenViewer
               screens={screens}
               index={viewerIndex}
               onIndexChange={setViewerIndex}
               onClose={() => setViewerIndex(null)}
               label="Certificates"
            />
         )}
      </>
   );
};

export { TrainingLog };
