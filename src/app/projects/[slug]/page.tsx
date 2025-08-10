'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { LuX } from 'react-icons/lu';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { Breadcrumb } from '@/components/breadcrumb';
import { ContentHeader } from '@/components/home/content-header';
import { buttonVariants } from '@/components/ui/button';
import { projectDetails } from '@/lib/data';

function App() {
   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const project = projectDetails[0];

   // Prepare images for gallery
   const allImages = [...project.additionalImages];
   const galleryImages = allImages.map((image, index) => ({
      original: image,
      thumbnail: image,
      description:
         index === 0
            ? `${project.title} - Main Screenshot`
            : `${project.title} - Screenshot ${index}`,
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
         <Breadcrumb
            title="project-overview"
            size="md"
            subtitle={<Link href="/projects">{'<'}- back_to_projects</Link>}
         />

         {/* Main Content */}
         <main className="container">
            {/* Hero Section */}
            <div className="mb-12 lg:mb-16">
               <div className="mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                     <h2 className="mb-4 font-mono text-3xl leading-tight font-bold text-white lg:text-4xl xl:text-5xl">
                        {project.title}
                     </h2>
                     <p className="max-w-2xl text-base leading-relaxed text-gray-400 lg:text-lg">
                        {project.description}
                     </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-shrink-0">
                     <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                           variant: 'outlineSecondary',
                           size: 'xl',
                        })}
                     >
                        Live &lt;~&gt;
                     </Link>

                     <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                           variant: 'secondary',
                           size: 'xl',
                        })}
                     >
                        Cached &gt;
                     </Link>
                  </div>
               </div>

               {/* Project Info Cards */}
               <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mb-12">
                  <div className="border-text hover:border-primary border p-4 transition-all duration-200 ease-in-out">
                     <div className="text-primary mb-2 font-mono text-xs lg:text-sm">
                        <span className="text-white">@</span>Role
                     </div>
                     <div className="text-sm font-medium text-white lg:text-base">
                        {project.role}
                     </div>
                  </div>
                  <div className="border-text hover:border-primary border p-4 transition-all duration-200 ease-in-out">
                     <div className="text-primary mb-2 font-mono text-xs lg:text-sm">
                        <span className="text-white">@</span>Duration
                     </div>
                     <div className="text-sm font-medium text-white lg:text-base">
                        {project.duration}
                     </div>
                  </div>
                  <div className="border-text hover:border-primary border p-4 transition-all duration-200 ease-in-out">
                     <div className="text-primary mb-2 font-mono text-xs lg:text-sm">
                        <span className="text-white">@</span>Team
                     </div>
                     <div className="text-sm font-medium text-white lg:text-base">
                        {project.teamSize}
                     </div>
                  </div>
                  <div className="border-text hover:border-primary border p-4 transition-all duration-200 ease-in-out">
                     <div className="text-primary mb-2 font-mono text-xs lg:text-sm">
                        <span className="text-white">@</span>Location
                     </div>
                     <div className="text-sm font-medium text-white lg:text-base">
                        {project.location}
                     </div>
                  </div>
               </div>
            </div>

            {/* Main Image */}
            <div className="mb-12 lg:mb-16">
               <ContentHeader
                  text="project-overview"
                  maxLineWidth="max-w-[220px]"
                  size="md"
               />
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
                                 src={image}
                                 alt={`Screenshot ${index + 1}`}
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
                                 <div className="text-primary flex-shrink-0">
                                    *
                                 </div>
                                 <span className="text-sm text-gray-300 lg:text-base">
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
                                    <div className="text-primary mb-3 font-mono text-sm lg:mb-4 lg:text-base">
                                       {category}
                                    </div>
                                    <div className="flex flex-wrap gap-2 lg:gap-3">
                                       {categoryTechs.map((tech, index) => (
                                          <span
                                             key={index}
                                             className="tech-tag border-text text-text font-main hover:border-primary hover:text-primary flex items-center gap-x-1.5 border bg-transparent px-3 py-1.5 whitespace-nowrap transition-all duration-300 ease-in-out"
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
                     <div>
                        <ContentHeader
                           text="company"
                           maxLineWidth="max-w-[100px]"
                           size="sm"
                        />

                        <div className="project-card mt-5 p-4 lg:p-8">
                           <div className="space-y-4 lg:space-y-6">
                              <div>
                                 <div className="text-primary mb-2 font-mono text-xs lg:text-sm">
                                    <span className="text-white">@</span>Name
                                 </div>
                                 <div className="text-sm font-medium text-white lg:text-base">
                                    {project.company.name}
                                 </div>
                              </div>
                              <div>
                                 <div className="text-primary mb-2 font-mono text-xs lg:text-sm">
                                    <span className="text-white">@</span>Address
                                 </div>
                                 <div className="text-xs leading-relaxed text-gray-300 lg:text-sm">
                                    {project.company.address}
                                 </div>
                              </div>
                              <div>
                                 <div className="text-primary mb-2 font-mono text-xs lg:text-sm">
                                    <span className="text-white">@</span>Website
                                 </div>
                                 <a
                                    href={project.company.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-xs break-all transition-colors hover:text-white lg:text-sm"
                                 >
                                    {project.company.website}
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Team Members */}
                     <div>
                        <ContentHeader
                           text="team"
                           maxLineWidth="max-w-[100px]"
                           size="sm"
                        />

                        <div className="project-card mt-5 p-4 lg:p-8">
                           <div className="space-y-4 lg:space-y-5">
                              {project.teamMembers.map((member, index) => (
                                 <div
                                    key={index}
                                    className="flex items-center space-x-3"
                                 >
                                    <div className="bg-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded lg:h-10 lg:w-10">
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
                                       <div className="text-xs text-gray-400 lg:text-sm">
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
                              <div className="h-3 w-3 flex-shrink-0 rounded-full bg-green-500"></div>
                              <span className="text-sm font-medium text-white lg:text-base">
                                 Currently working on
                              </span>
                           </div>
                           <div className="text-primary font-mono text-xs lg:text-sm">
                              Production
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
                     className="absolute top-4 right-4 z-10 rounded-lg border border-gray-600 bg-gray-800/80 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gray-700/80"
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
}

export default App;
