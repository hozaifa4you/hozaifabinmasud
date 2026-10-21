'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, ViewTransition } from 'react';
import { LuX } from 'react-icons/lu';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/image-gallery.css';

import { Breadcrumb, BreadcrumbItem } from '@/components/breadcrumb';
import { ContentHeader } from '@/components/home/content-header';
import { Button, buttonVariants } from '@/components/ui/button';
import { ProjectDetailsType } from '@/lib/data/project-details';

const breadcrumbItems: BreadcrumbItem[] = [
   // Back to the homepage explorer, sliding the other way
   { href: '/#projects', title: 'Workspace', transitionTypes: ['nav-back'] },
   { href: '/projects', title: 'Projects' },
   { href: '#', title: 'Projects Overview' },
];

type ProjectDetailsViewProps = {
   project: ProjectDetailsType;
};

const ProjectDetailsView = ({ project }: ProjectDetailsViewProps) => {
   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // The main image is slide 0, so screenshot thumbnails open at index + 1
   const allImages = [
      { title: project.title, path: project.mainImage },
      ...project.additionalImages,
   ];
   const galleryImages = allImages.map((image) => ({
      original: image.path,
      thumbnail: image.path,
      description: image.title,
   }));

   const openGallery = (imageIndex: number) => {
      setCurrentImageIndex(imageIndex);
      setIsGalleryOpen(true);
   };

   const closeGallery = () => {
      setIsGalleryOpen(false);
   };

   return (
      <div className="bg-main mb-10 min-h-screen">
         <Breadcrumb size="md" items={breadcrumbItems} />

         {/* Main Content */}
         <main className="container">
            {/* Hero Section */}
            <div className="mb-12 lg:mb-16">
               <div className="mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                     <h2 className="mb-4 font-mono text-3xl leading-tight font-bold text-white lg:text-4xl xl:text-5xl">
                        {project.title}
                     </h2>
                     <p className="max-w-2xl text-base leading-relaxed text-muted lg:text-lg">
                        {project.description}
                     </p>
                  </div>
                  <div className="flex flex-col flex-wrap gap-3 sm:flex-row lg:flex-shrink-0">
                     <Button
                        variant="secondary"
                        size="xl"
                        className="capitalize"
                     >
                        {project.status.type} &gt;
                     </Button>
                     {project.liveUrl && (
                        <Link
                           href={project.liveUrl ?? '#'}
                           referrerPolicy="no-referrer"
                           target="_blank"
                           className={buttonVariants({
                              variant: 'outlineSecondary',
                              size: 'xl',
                           })}
                        >
                           Live &lt;~&gt;
                        </Link>
                     )}
                     {project.githubUrl && (
                        <Link
                           href={project.githubUrl}
                           referrerPolicy="no-referrer"
                           target="_blank"
                           className={buttonVariants({
                              variant: 'outlineSecondary',
                              size: 'xl',
                           })}
                        >
                           Code &lt;~&gt;
                        </Link>
                     )}
                  </div>
               </div>

               {/* Project Info Cards */}
               <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mb-12">
                  <div className="border border-text p-4 transition-all duration-200 ease-in-out hover:border-primary">
                     <div className="mb-2 font-mono text-xs text-primary lg:text-sm">
                        <span className="text-white">@</span>Role
                     </div>
                     <div className="text-sm font-medium text-white lg:text-base">
                        {project.role}
                     </div>
                  </div>
                  <div className="border border-text p-4 transition-all duration-200 ease-in-out hover:border-primary">
                     <div className="mb-2 font-mono text-xs text-primary lg:text-sm">
                        <span className="text-white">@</span>Duration
                     </div>
                     <div className="text-sm font-medium text-white lg:text-base">
                        {project.duration}
                     </div>
                  </div>
                  <div className="border border-text p-4 transition-all duration-200 ease-in-out hover:border-primary">
                     <div className="mb-2 font-mono text-xs text-primary lg:text-sm">
                        <span className="text-white">@</span>Team
                     </div>
                     <div className="text-sm font-medium text-white lg:text-base">
                        {project.teamSize}
                     </div>
                  </div>
                  {project.company && (
                     <div className="border border-text p-4 transition-all duration-200 ease-in-out hover:border-primary">
                        <div className="mb-2 font-mono text-xs text-primary lg:text-sm">
                           <span className="text-white">@</span>Location
                        </div>
                        <div className="text-sm font-medium text-white lg:text-base">
                           {project.company.address}
                        </div>
                     </div>
                  )}
               </div>
            </div>

            {/* Main Image */}
            <div className="mb-12 lg:mb-16">
               <ContentHeader
                  text="project-overview"
                  maxLineWidth="max-w-[220px]"
                  size="md"
               />
               {/* Shared element: the homepage explorer's screenshot morphs into this */}
               <ViewTransition
                  name={`project-shot-${project.slug}`}
                  share="morph"
                  default="none"
               >
                  <div className="project-card mt-5 overflow-hidden">
                     <Image
                        width={1000}
                        height={385}
                        src={project.mainImage}
                        alt={project.title}
                        className="h-64 w-full cursor-pointer object-cover transition-opacity hover:opacity-80 lg:h-80 xl:h-96"
                        onClick={() => openGallery(0)}
                     />
                  </div>
               </ViewTransition>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
               {/* Left Column */}
               <div className="space-y-8 lg:col-span-2 lg:space-y-12">
                  {/* Screenshots */}
                  <div>
                     <ContentHeader
                        text="medias"
                        maxLineWidth="max-w-[180px]"
                        size="md"
                     />
                     <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                        {project.additionalImages.map((image, index) => (
                           <div
                              key={index}
                              className="project-card overflow-hidden"
                           >
                              <Image
                                 width={315}
                                 height={100}
                                 src={image.path}
                                 alt={image.title}
                                 className="h-24 w-full cursor-pointer object-cover transition-opacity hover:opacity-80"
                                 onClick={() => openGallery(index + 1)}
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Features */}
                  <div>
                     <ContentHeader
                        text="features"
                        maxLineWidth="max-w-[190px]"
                        size="md"
                     />
                     <div className="project-card mt-5 p-4 lg:p-8">
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-6">
                           {project.features.map((feature, index) => (
                              <div
                                 key={index}
                                 className="flex items-center space-x-3"
                              >
                                 <div className="flex-shrink-0 text-primary">
                                    *
                                 </div>
                                 <span className="text-sm text-text lg:text-base">
                                    {feature}
                                 </span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Technologies */}
                  <div>
                     <ContentHeader
                        text="technologies"
                        maxLineWidth="max-w-[150px]"
                        size="md"
                     />
                     <div className="project-card mt-5 p-4 lg:p-8">
                        <div className="space-y-6 lg:space-y-8">
                           {[
                              'Frontend',
                              'Backend',
                              'Database',
                              'Real-time',
                              'DevOps',
                              'Cloud',
                           ].map((category) => {
                              const categoryTechs = project.technologies.filter(
                                 (tech) => tech.category === category,
                              );
                              if (categoryTechs.length === 0) return null;

                              return (
                                 <div key={category}>
                                    <div className="mb-3 font-mono text-sm text-primary lg:mb-4 lg:text-base">
                                       {category}
                                    </div>
                                    <div className="flex flex-wrap gap-2 lg:gap-3">
                                       {categoryTechs.map((tech, index) => (
                                          <span
                                             key={index}
                                             className="tech-tag flex items-center gap-x-1.5 border border-text bg-transparent px-3 py-1.5 font-mono whitespace-nowrap text-text transition-all duration-300 ease-in-out hover:border-primary hover:text-primary"
                                          >
                                             <Image
                                                src={tech.img}
                                                alt={tech.name}
                                                width={16}
                                                height={16}
                                             />
                                             {tech.name}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Sidebar */}
               <div>
                  <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                     {/* Company Info */}
                     {project.company && (
                        <div>
                           <ContentHeader
                              text="company"
                              maxLineWidth="max-w-[100px]"
                              size="sm"
                           />

                           <div className="project-card mt-5 p-4 lg:p-8">
                              <div className="space-y-4 lg:space-y-6">
                                 <div>
                                    <div className="mb-2 font-mono text-xs text-primary lg:text-sm">
                                       <span className="text-white">@</span>Name
                                    </div>
                                    <div className="text-sm font-medium text-white lg:text-base">
                                       {project.company.name}
                                    </div>
                                 </div>
                                 <div>
                                    <div className="mb-2 font-mono text-xs text-primary lg:text-sm">
                                       <span className="text-white">@</span>
                                       Address
                                    </div>
                                    <div className="text-xs leading-relaxed text-text lg:text-sm">
                                       {project.company.address}
                                    </div>
                                 </div>
                                 <div>
                                    <div className="mb-2 font-mono text-xs text-primary lg:text-sm">
                                       <span className="text-white">@</span>
                                       Website
                                    </div>
                                    <a
                                       href={project.company.website}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-xs break-all text-primary transition-colors hover:text-white lg:text-sm"
                                    >
                                       {project.company.website}
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )}

                     {/* Team Members */}
                     <div>
                        <ContentHeader
                           text="team"
                           maxLineWidth="max-w-[100px]"
                           size="sm"
                        />

                        <div className="project-card mt-5 p-4 lg:p-8">
                           <div className="space-y-4 lg:space-y-5">
                              {project?.teamMembers?.map((member, index) => (
                                 <div
                                    key={index}
                                    className="flex items-center space-x-3"
                                 >
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-primary lg:h-10 lg:w-10">
                                       <span className="font-mono text-xs font-bold text-black lg:text-sm">
                                          {member.name
                                             .split(' ')
                                             .map((n) => n[0])
                                             .join('')}
                                       </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                       <div className="truncate text-sm font-medium text-white lg:text-base">
                                          {member.name}
                                       </div>
                                       <div className="text-xs text-muted lg:text-sm">
                                          {member.role}
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Status */}
                     <div>
                        <ContentHeader
                           text="status"
                           maxLineWidth="max-w-[100px]"
                           size="sm"
                        />
                        <div className="project-card mt-5 p-4 lg:p-8">
                           <div className="mb-3 flex items-center space-x-3">
                              <span className="relative flex size-3">
                                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                                 <span className="relative inline-flex size-3 rounded-full bg-success"></span>
                              </span>
                              <span className="text-sm font-medium text-white lg:text-base">
                                 {project.status.text}
                              </span>
                           </div>
                           <div className="font-mono text-xs text-primary lg:text-sm">
                              {project.status.type}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>

         {/* Photo Gallery Modal */}
         {isGalleryOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
               <div className="relative h-full max-h-full w-full max-w-7xl">
                  <button
                     onClick={closeGallery}
                     className="absolute top-4 right-4 z-10 rounded-lg border border-line bg-bg-sunken p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-bg-raised"
                  >
                     <LuX size={20} />
                  </button>
                  <ImageGallery
                     items={galleryImages}
                     startIndex={currentImageIndex}
                     showThumbnails={true}
                     showFullscreenButton={false}
                     showPlayButton={false}
                     showBullets={false}
                     showNav={true}
                     autoPlay={false}
                     slideOnThumbnailOver={false}
                     additionalClass="custom-gallery"
                  />
               </div>
            </div>
         )}
      </div>
   );
};

export { ProjectDetailsView };
