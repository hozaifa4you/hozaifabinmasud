# AGENTS.md

Personal portfolio site (Next.js 16 App Router, React 19, Tailwind v4) deployed on Vercel. Day-to-day work happens on `develop`; production deploys from `main`.

`PRODUCT.md` records the audiences, positioning and which content is placeholder (fun facts, stats and the demo education entries are not real; the trainings are real, from the owner's certificates). Never present placeholder content as fact.

## Commands

Bun is the package manager (`bun.lock`). Don't use npm/yarn/pnpm, they would add a second lockfile.

```sh
bun install
bun run dev           # next dev (Turbopack is the default in Next 16)
bun run build         # next build — type-checks, but does NOT lint
bun run lint          # eslint . — Prettier runs inside ESLint, so formatting issues are lint errors
bun run typecheck     # next typegen && tsc --noEmit (typegen writes the gitignored next-env.d.ts + route types)
bun run format        # prettier --write .
bun run format:check
bun audit
```

There is no test suite.

**Line endings:** `.gitattributes` forces LF on every OS (except `*.cmd`/`*.bat`), because Prettier enforces LF and reports every CRLF line as a lint error. If a working copy still has CRLF files, re-check them out rather than reformatting.

## Version constraints

- `typescript` is pinned to `~6.0`. Do not upgrade to 7: typescript-eslint (used by `eslint-config-next`) only supports TS `<6.1`.
- `next` and `eslint-config-next` are pinned to the same exact version; bump them together. `prettier` is pinned exact.
- ESLint 10 works through patches inside `eslint-config-next`; peer-dependency warnings from eslint-plugin-react/import/jsx-a11y are expected.
- `@types/node` major tracks the Vercel Node runtime (24.x).
- nodemailer ships its own types — don't add `@types/nodemailer`. `sharp` comes in through `next`.

## Architecture

- **Content is hardcoded TypeScript data**, not a CMS or database: `src/lib/data/*.ts`, `src/lib/data.ts`. Pages and components import these arrays directly.
- **Education and training** come from `src/lib/data/education.ts` (server only) through `getEducation()` and `getTrainings()`. Entries marked `demo: true` are sample data. They show locally and on Vercel previews, and are filtered out when `VERCEL_ENV` is `production`. Always read through the getters, never the raw arrays, and pass the results to client components as props, because the browser has no `VERCEL_ENV`. The owner replaces demo entries with real ones. They feed the homepage `EducationSection`, and `/educations` and `/trainings`. Those two pages share a learning log in `src/components/education/` (the work log's rail) and an `education.md | trainings.md` tab strip. An empty list renders "details are being added" there. A training's `certificateImage` (under `public/`, given with its pixel size so the frame takes the certificate's own shape) opens in the case study's `ScreenViewer`.
- **Derived numbers live in `src/lib/profile.ts`**: years of experience, role durations ("2 yrs 11 mos"), the current employer and the project count are computed from `works.ts`/`projects.ts`, never typed by hand. The homepage sets `revalidate = 86400` so these stay current. `normalizeTech()` maps the data's ad-hoc tech spellings (`NextJs`) to canonical names.
- **Homepage** (`src/app/page.tsx`) reads as an editor workspace: `WorkspaceHero` (explorer + README + status bar), `ProjectsSection` → client `ProjectExplorer` (ARIA tablist; `#project-<slug>` links open a project), `WorkLog`, `EducationSection`, `StackSection` (curated list in `src/lib/data/stack.ts`), `AboutSection`, `ContactSection`, plus a client `DockedStatusBar` (shown between the hero's `#hero-status` bar and `#contact`, so keep those ids). Each section uses `SectionHeading` (file name + title). `EducationSection`, the hero's `education.md` explorer file, its status-bar degree and the nav's `education.md` item all depend on there being entries to show, decided on the server. `getLearningHref()` says where "education" leads: `/educations` while it has entries, `/trainings` when only training is published, otherwise null. The root layout passes it to `Navbar` as `educationHref`, and null hides the item. Demo entries carry a `DemoMark` pill and never show a certificate link. Placeholder stats are deliberately not on the homepage.
- **Project detail pages** (`/projects/[slug]`): `projects.ts` drives the cards and lists, while `project-details.ts` holds detail-page content (currently only `aionlinecourse`). `[slug]/page.tsx` is a server component that prerenders only the slugs in `project-details.ts` (`generateStaticParams` + `dynamicParams = false`, so other slugs are real 404s) and passes the data to the client `ProjectDetailsView`. The homepage explorer and the projects directory show each project through `toProjectView()` in `src/lib/project-view.ts`, which gives it separate `caseStudyUrl` (only when a detail page exists), `liveUrl` (live projects with a website) and `codeUrl` links. To give a project a detail page, add it to `project-details.ts`.
- **Config:** the owner's public details (name, page title, designation, email, phone, website, address, GitHub and LinkedIn usernames) are plain data in `src/config/site.config.ts`, so server and client components can both read them. Only the deploy URL and the SMTP credentials are env vars, mapped in `src/config/app.config.ts` (`server-only`; see `.env.example`). Social links and contact channels come from `getSocialLinks()` and `getContactChannels()` in `src/lib/links.ts`.
- **Contact flow:** `ContactForm` (client, `useActionState`) → server action `src/lib/action.ts` → `POST ${APP_URL}/api/contact` → `src/app/api/contact/route.ts` validates with zod (422 returns `fieldErrors`) and sends through `src/lib/nodemailer.ts`. Because the action calls the API over HTTP, `APP_URL` must be the deployed URL in production. Mail is sent from `SMTP_EMAIL` with the visitor as `replyTo`; visitor input is escaped with `escapeHtml` from `src/lib/utils.ts`. The off-screen `bot-field` input is a honeypot: the action forwards it as `botField`, and the route answers 200 without sending when it is filled. On failure the action returns the submitted `fields`, which the form uses as `defaultValue`s so React 19's automatic form reset doesn't wipe what the visitor typed. On success it returns `sent` (name, email, subject, time): `/contact` passes `recipient` so the form shows a receipt in place of the fields until "Write another", while the homepage keeps its inline success line. Both take their channel list from `getContactChannels()` in `src/lib/links.ts`. The form's two-column field layout is a container query, so it applies only inside an `@container` (the contact page's message row).
- **Depth through motion** (DESIGN.md's Depth Is Motion Rule): `TiltSurface` (`src/components/tilt-surface.tsx`) turns its contents toward a mouse and eases back; descendants marked `data-depth` drift as parallax, and `onTilt` hands the eased pointer to others. Scroll depth is CSS only (`.depth-in`, `.scroll-stand` in `globals.css`). The one three.js scene is the homepage project deck: `src/lib/project-deck.ts` is the engine and must only ever be reached through the dynamic `import()` in `src/components/home/project-deck.tsx`, so three.js stays out of the initial bundle (it loads near the projects, from md, with WebGL). Never import `three` or the engine statically.
- `src/components/ui/` holds shadcn-style primitives built with `class-variance-authority` and `cn()` (`src/lib/utils.ts`). `@/*` maps to `src/*`.
- Fun facts in `src/lib/data.ts` are placeholder (not real) and are not rendered anywhere; keep them off the site until the owner supplies real ones.

## Styling and formatting

- `DESIGN.md` is the visual spec ("The Open Workspace"): One Dark surfaces with syntax colours as roles, Fira Sans for reading and Fira Code for names/dates/data, square 1px flat panes, one filled button per view, and the editor metaphor carried by structure (window, explorer, tabs, status bar, file tabs), never by eyebrows or glyph decoration. Its Don'ts (shadows, rounded frames, Tailwind palette colours or `text-white`, decorative code punctuation) describe the old look the site has moved off; don't bring any of it back. `.impeccable/design.json` is its sidecar; regenerate both together with `/impeccable document`.
- Tailwind v4 is configured in CSS only (no `tailwind.config`): tokens live in the `@theme` blocks of `src/styles/globals.css`: surfaces (`bg-sunken`, `bg-main`, `bg-raised`), lines (`line`, `line-strong`), text (`text`, `strong`, `muted`), syntax-colour roles (`primary`, `primary-soft`, `success`, `danger`, `info`, `warning`), a named type scale (`text-ui`, `text-control`, `text-body`, `text-lead`, `text-headline`, `text-display`), `ease-out-expo` and the `animate-rise`/`animate-wipe` entrances, plus a `container` utility capped at 1120px. Use these instead of Tailwind palette colours or arbitrary `text-[…px]` sizes.
- Technology logos live in `public/icons` and render through `TechIcon` (`src/components/tech-icon.tsx`), keyed by the canonical names `normalizeTech()` produces. A logo that is dark or one-colour must be `kind: 'mask'` (drawn in the text colour), or it vanishes on the dark canvas; check a new icon on `bg-main` before adding it.
- `cn()` (`src/lib/utils.ts`) teaches tailwind-merge the named type scale; when adding a `text-*` size token to `globals.css`, add it there too, or `cn()` treats it as a colour and drops it (or the colour) whenever both appear.
- Fonts: Fira Sans (`font-sans`, the default) for reading, Fira Code (`font-mono`) only for code-like data: file names, dates, stacks, status. Both load through `next/font` variables on `<html>`.
- Prettier: 3-space indent, single quotes. Imports are sorted by `@trivago/prettier-plugin-sort-imports` (packages, blank line, then local). Tailwind classes are sorted by `prettier-plugin-tailwindcss`, which reads the theme from `globals.css` via `tailwindStylesheet`.

## Next 16 / React 19 specifics in this repo

- `next.config.ts` allows only `images.qualities: [75, 100]`; any other `quality` prop is coerced to the closest one, so add new values there.
- Use `preload`, not the deprecated `priority`, on `next/image`.
- `<html data-scroll-behavior="smooth">` in the root layout stops the global `scroll-smooth` from animating route changes.
- `eslint-plugin-react-hooks` v7 rules are errors (e.g. calling setState synchronously inside an effect body). Set state from event or `requestAnimationFrame` callbacks instead, as `project-explorer.tsx` does for its hash sync, or use `useSyncExternalStore` for external stores.
- Absolutely positioned children (including Tailwind's `sr-only`) escape an `overflow-x-auto` scroller unless the scroller is positioned; give horizontal scrollers `relative`, or they widen the page on mobile.
- The root `not-found.tsx` is prerendered once (`/_not-found`) and served for every missing path, so its server HTML never knows the path. `ProblemsPanel` reads the path after hydration and matches it to the nearest real page (`src/lib/nearest-page.ts`). Don't make the root 404 dynamic (`connection()`, `headers()`, a proxy header): Next then serves an empty `__next_error__` shell that renders only in the browser. Anything in the root layout that reads the pathname disagrees between server and client on the 404 for the same reason, which is why the nav's current page comes from `useSelectedLayoutSegment()` in `src/hooks/use-menu.ts`.
- Page transitions use React's `<ViewTransition>` (no Next config needed). Pages that slide are wrapped in `DirectionalPage`, and a navigation only slides when its `Link` passes `transitionTypes={['nav-forward']}` or `['nav-back']` (the `Breadcrumb` items accept `transitionTypes` too); every other navigation swaps instantly. The project screenshot morphs between the homepage explorer and the case study because both wrap it in `<ViewTransition name={`project-shot-${slug}`} share="morph">`; keep those names in step. The animations live in `globals.css`, where the root is not animated and the header (`view-transition-name: site-header`) stays pinned. Named view-transition layers paint above the page, so don't give an element that sits under text (such as the explorer's selection highlight) a name; move it with a transform instead.

## AI tooling in the repo

`.claude/` and `.cursor/` contain the vendored "impeccable" design skill with its agents and hooks. Third-party skills are installed with the `skills` CLI as copies in `.claude/skills/` for Claude Code and `.agents/skills/` for Cursor, pinned by `skills-lock.json`: the `threejs-*` set (`CloudAI-X/threejs-skills`), `tailwind-design-system`, `vercel-react-best-practices`, `vercel-react-view-transitions` and `shadcn`. Update them with `bunx skills update -p`. ESLint and Prettier ignore all of these, and `globals.css` keeps them out of Tailwind's class scan (`@source not`), because their example class names would otherwise end up in the site's CSS. Don't hand-edit them. The shared `.claude/settings.json` runs the skill's design check after Edit/Write on UI files; `.claude/settings.local.json` is gitignored for personal settings.
