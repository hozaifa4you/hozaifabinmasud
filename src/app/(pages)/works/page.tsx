import Link from 'next/link';

import { BiLinkExternal } from 'react-icons/bi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaFacebook, FaGlobe } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import { Breadcrumb } from '@/components/breadcrumb';

import { works } from '@/lib/data';
import { cn } from '@/lib/utils';

const WorksPage = () => {
   return (
      <>
         <Breadcrumb
            title="work-histories"
            subtitle="The short details about my employment"
         />

         <section className="mb-20">
            <div className="container grid gap-10">
               {works.map((work) => (
                  <div
                     key={work.id}
                     className="border-b-primary/30 grid gap-3 border-b pb-10 last:border-b-0 last:pb-0 md:grid-cols-4"
                  >
                     <div className="md:col-span-1">
                        <div className="text-right text-sm">
                           [<CiCalendarDate className="inline" />{' '}
                           <span className="text-primary">$</span>
                           {work.startDate.toLowerCase().replaceAll(' ', '_')}
                           <span
                              className={cn('', {
                                 'text-emerald-500 text-shadow-2xs':
                                    work.status === 'present',
                              })}
                           >
                              {' '}
                              - <span className="text-primary">$</span>
                              {work.endDate
                                 ? work.endDate
                                      .toLowerCase()
                                      .replaceAll(' ', '_')
                                 : work.status}
                           </span>
                           ]
                        </div>
                        <p className="mt-1.5 text-right">
                           <span className="text-primary">@</span>
                           {work.duration.toLowerCase().replaceAll(' ', '-')}
                        </p>
                     </div>
                     <div className="md:col-span-3">
                        <h4 className="mb-2.5 text-lg leading-none font-semibold">
                           {work.company}
                           <span className="text-primary text-xs font-light text-pretty">
                              (company)
                           </span>
                        </h4>

                        <h3 className="my-4 text-2xl leading-none font-semibold text-white">
                           <span className="text-primary">@</span>
                           {work.title.toLowerCase().replaceAll(' ', '_')}
                        </h3>

                        <div className="border-text mb-2 flex w-fit flex-wrap items-center gap-0 border">
                           <p className="px-3 py-2 leading-none">
                              <span className="font-semibold">
                                 <span className="text-primary">@</span>type:
                              </span>{' '}
                              {work.type}
                           </p>

                           <p className="border-l-text border-l px-3 py-2 leading-none">
                              <span className="font-semibold">
                                 <span className="text-primary">@</span>website:
                              </span>{' '}
                              {work.website}{' '}
                              <Link href={work.website} target="_blank">
                                 <BiLinkExternal className="inline" />
                              </Link>
                           </p>
                        </div>

                        <p className="mb-2">
                           <span className="font-semibold">
                              <span className="text-primary">@</span>
                              responsibilities:{' '}
                           </span>
                           {work.responsibilities}
                        </p>

                        <p className="mb-2">
                           <span className="font-semibold">
                              <span className="text-primary">@</span>address:
                           </span>{' '}
                           {work.address}
                        </p>

                        <p className="text-muted-foreground mt-1 flex flex-wrap items-center gap-1 text-sm">
                           <span className="font-semibold">
                              <span className="text-primary">@</span>
                              skills:{' '}
                           </span>
                           {work.skills.map((skill, index) => (
                              <span
                                 className="text-primary/90 capitalize underline"
                                 key={skill}
                              >
                                 {skill}
                                 {index < work.skills.length - 1 && ','}
                              </span>
                           ))}
                        </p>

                        <div className="mt-2 flex items-center gap-1.5">
                           <span className="font-semibold">
                              <span className="text-primary">@</span>
                              navigation:{' '}
                           </span>
                           <Link href={work.website}>
                              <FaGlobe className="size-4" />
                           </Link>
                           {work.social.map((item) => (
                              <Link key={item.id} href={item.url}>
                                 {item.name === 'facebook' ? (
                                    <FaFacebook className="size-4" />
                                 ) : item.name === 'x' ? (
                                    <FaXTwitter className="size-4" />
                                 ) : item.name === 'linkedin' ? (
                                    <FaLinkedin className="size-4" />
                                 ) : null}
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
};

export default WorksPage;
