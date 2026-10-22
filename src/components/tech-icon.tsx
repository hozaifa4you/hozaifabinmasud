import Image from 'next/image';
import { CSSProperties } from 'react';
import { IconType } from 'react-icons';
import { LuDatabase, LuFileText, LuRoute } from 'react-icons/lu';
import {
   SiDiscorddotjs,
   SiDrizzle,
   SiFastapi,
   SiLangchain,
   SiLemonsqueezy,
   SiPython,
   SiStripe,
   SiWordpress,
} from 'react-icons/si';
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
   // The stored drizzle.png is a solid black tile that reads as a hole on the
   // canvas; the simple-icons mark in Drizzle's lime sits like the others
   'Drizzle ORM': { kind: 'glyph', Icon: SiDrizzle, color: '#c5f74f' },
   GraphQL: { kind: 'image', src: '/icons/graphql.svg' },
   OpenAI: { kind: 'mask', src: '/icons/openai.svg' },
   // LangChain's brand colour is a near-black teal, so it takes the text colour
   LangChain: { kind: 'glyph', Icon: SiLangchain },
   'Vector databases': { kind: 'glyph', Icon: LuDatabase, generic: true },
   Git: { kind: 'image', src: '/icons/git.svg' },
   Docker: { kind: 'image', src: '/icons/docker.svg' },
   'CI/CD': { kind: 'mask', src: '/icons/cicd.svg' },
   AWS: { kind: 'mask', src: '/icons/aws.svg' },
   'Tailwind CSS': { kind: 'image', src: '/icons/tailwind.svg' },
   'shadcn/ui': { kind: 'mask', src: '/icons/shadcn.svg' },
   D3: { kind: 'image', src: '/icons/d3js.svg' },
   Redux: { kind: 'image', src: '/icons/redux.svg' },
   Bootstrap: { kind: 'image', src: '/icons/bootstrap.svg' },
   'Ant Design': { kind: 'image', src: '/icons/ant-design.svg' },
   // No stored logo for these; simple-icons marks in their brand colours
   Python: { kind: 'glyph', Icon: SiPython, color: '#3776ab' },
   FastAPI: { kind: 'glyph', Icon: SiFastapi, color: '#009688' },
   Stripe: { kind: 'glyph', Icon: SiStripe, color: '#635bff' },
   'Lemon Squeezy': { kind: 'glyph', Icon: SiLemonsqueezy, color: '#ffc233' },
   'discord.js': { kind: 'glyph', Icon: SiDiscorddotjs, color: '#5865f2' },
   // The rest of the inventory on /about-me
   C: { kind: 'image', src: '/icons/c.svg' },
   'C++': { kind: 'image', src: '/icons/cpp.svg' },
   SCSS: { kind: 'image', src: '/icons/scss.svg' },
   Firebase: { kind: 'image', src: '/icons/firebase.svg' },
   Svelte: { kind: 'image', src: '/icons/svelte.svg' },
   'T3 Stack': { kind: 'mask', src: '/icons/t3.svg' },
   MUI: { kind: 'image', src: '/icons/mui.svg' },
   Mantine: { kind: 'image', src: '/icons/mantine.svg' },
   Blueprint: { kind: 'mask', src: '/icons/blueprintui.svg' },
   PrimeReact: { kind: 'image', src: '/icons/primereact.svg' },
   Jest: { kind: 'image', src: '/icons/jest.svg' },
   'Passport.js': { kind: 'image', src: '/icons/passportjs.svg' },
   TypeORM: { kind: 'image', src: '/icons/typeorm.png' },
   'Socket.IO': { kind: 'image', src: '/icons/socket-io.svg' },
   Bun: { kind: 'image', src: '/icons/bun.svg' },
   Arduino: { kind: 'image', src: '/icons/arduino.svg' },
   WordPress: { kind: 'glyph', Icon: SiWordpress },
   // No logo exists for these; generic glyphs in the muted colour
   Mux: { kind: 'glyph', Icon: LuRoute, generic: true },
   'PDF.js': { kind: 'glyph', Icon: LuFileText, generic: true },
   // A generic API mark, not a brand: drawn in the text colour
   'REST APIs': { kind: 'mask', src: '/icons/api.svg' },
};

const hasTechIcon = (name: string) => name in TECH_ICONS;

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

export { TechIcon, hasTechIcon };
