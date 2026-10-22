import Image from 'next/image';
import { CSSProperties } from 'react';
import { IconType } from 'react-icons';
import { LuDatabase } from 'react-icons/lu';
import { SiLangchain } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';

import { cn } from '@/lib/utils';

type TechIconSource =
   // A logo from public/icons, drawn in its own brand colours
   | { kind: 'image'; src: string }
   // A dark one-colour logo that would vanish on the canvas, redrawn in the
   // text colour through a mask
   | { kind: 'mask'; src: string }
   // A react-icons glyph: a brand mark in its brand colour, or a generic
   // glyph in the muted colour where no logo exists
   | { kind: 'glyph'; Icon: IconType; color?: string; generic?: boolean };

// Keyed by the canonical names normalizeTech() produces
const TECH_ICONS: Record<string, TechIconSource> = {
   TypeScript: { kind: 'image', src: '/icons/typescript.svg' },
   JavaScript: { kind: 'image', src: '/icons/javascript.svg' },
   PHP: { kind: 'image', src: '/icons/php.svg' },
   Go: { kind: 'image', src: '/icons/go.svg' },
   HTML: { kind: 'image', src: '/icons/html.svg' },
   CSS: { kind: 'image', src: '/icons/css.svg' },
   'Next.js': { kind: 'mask', src: '/icons/nextjs.svg' },
   React: { kind: 'image', src: '/icons/reactjs.svg' },
   'Node.js': { kind: 'image', src: '/icons/nodejs.svg' },
   NestJS: { kind: 'image', src: '/icons/nestjs.svg' },
   Express: { kind: 'mask', src: '/icons/expressjs.svg' },
   Laravel: { kind: 'image', src: '/icons/laravel.svg' },
   Fastify: { kind: 'mask', src: '/icons/fastify.svg' },
   // The stored mysql.svg (like simple-icons' mark) is a wordmark, unreadable
   // at icon size; Tabler's dolphin reads
   MySQL: { kind: 'glyph', Icon: TbBrandMysql, color: '#4479a1' },
   PostgreSQL: { kind: 'image', src: '/icons/postgresql.svg' },
   MongoDB: { kind: 'image', src: '/icons/mongodb.svg' },
   Redis: { kind: 'image', src: '/icons/redis.svg' },
   Prisma: { kind: 'mask', src: '/icons/prisma.svg' },
   'Drizzle ORM': { kind: 'image', src: '/icons/drizzle.png' },
   GraphQL: { kind: 'image', src: '/icons/graphql.svg' },
   OpenAI: { kind: 'mask', src: '/icons/openai.svg' },
   // LangChain's brand colour is a near-black teal, so it takes the text colour
   LangChain: { kind: 'glyph', Icon: SiLangchain },
   Pinecone: { kind: 'glyph', Icon: LuDatabase, generic: true },
   'Vector databases': { kind: 'glyph', Icon: LuDatabase, generic: true },
   Git: { kind: 'image', src: '/icons/git.svg' },
   Docker: { kind: 'image', src: '/icons/docker.svg' },
   'CI/CD': { kind: 'mask', src: '/icons/cicd.svg' },
   AWS: { kind: 'mask', src: '/icons/aws.svg' },
   'Tailwind CSS': { kind: 'image', src: '/icons/tailwind.svg' },
   'shadcn/ui': { kind: 'mask', src: '/icons/shadcn.svg' },
};

/** The logo for a technology, or nothing when none is on file. Decorative:
 * always render it beside the technology's name. */
const TechIcon = ({
   name,
   className,
}: {
   name: string;
   className?: string;
}) => {
   const source = TECH_ICONS[name];
   if (!source) return null;

   const box = cn('size-5 shrink-0', className);

   if (source.kind === 'image') {
      return (
         <Image
            src={source.src}
            alt=""
            aria-hidden
            width={20}
            height={20}
            className={cn(box, 'object-contain')}
         />
      );
   }

   if (source.kind === 'mask') {
      const mask: CSSProperties = { maskImage: `url(${source.src})` };
      return (
         <span
            aria-hidden
            style={mask}
            className={cn(
               box,
               'bg-strong mask-contain mask-center mask-no-repeat',
            )}
         />
      );
   }

   const { Icon, color, generic } = source;
   return (
      <Icon
         aria-hidden
         style={color ? { color } : undefined}
         className={cn(box, 'p-px', generic ? 'text-muted' : 'text-strong')}
      />
   );
};

export { TechIcon };
