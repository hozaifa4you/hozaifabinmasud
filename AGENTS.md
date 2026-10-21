# AGENTS.md

Personal portfolio site (Next.js 16 App Router, React 19, Tailwind v4) deployed on Vercel. Day-to-day work happens on `develop`; production deploys from `main`.

`PRODUCT.md` records the audiences, positioning and which content is placeholder (fun facts, education, trainings and their stats are not real). Never present placeholder content as fact.

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
- nodemailer, react-image-gallery and react-responsive-masonry ship their own types — don't add `@types/*` for them. `sharp` comes in through `next`.

## Architecture

- **Content is hardcoded TypeScript data**, not a CMS or database: `src/lib/data/*.ts`, `src/lib/education-data.ts`, `src/lib/data.ts`. Pages and components import these arrays directly.
- **Project detail pages** (`/projects/[slug]`): `projects.ts` drives the cards and lists, while `project-details.ts` holds detail-page content (currently only `aionlinecourse`). `[slug]/page.tsx` is a server component that prerenders only the slugs in `project-details.ts` (`generateStaticParams` + `dynamicParams = false`, so other slugs are real 404s) and passes the data to the client `ProjectDetailsView`. Cards build their title link with `getProjectLink()` from `projects.ts`: the detail page if one exists, otherwise the live site, otherwise no link. To give a project a detail page, add it to `project-details.ts`.
- **Config** comes from env vars mapped in `src/config/app.config.ts` (see `.env.example`). Client components only receive `NEXT_PUBLIC_*` values; every other key is `undefined` in the browser bundle. To use one in client UI, render that part in a server component and pass it in, as `SocialSidebar` does for the client `Navbar`.
- **Contact flow:** `ContactForm` (client, `useActionState`) → server action `src/lib/action.ts` → `POST ${APP_URL}/api/contact` → `src/app/api/contact/route.ts` validates with zod (422 returns `fieldErrors`) and sends through `src/lib/nodemailer.ts`. Because the action calls the API over HTTP, `APP_URL` must be the deployed URL in production. Mail is sent from `SMTP_EMAIL` with the visitor as `replyTo`; visitor input is escaped with `escapeHtml` from `src/lib/utils.ts`. The off-screen `bot-field` input is a honeypot: the action forwards it as `botField`, and the route answers 200 without sending when it is filled. On failure the action returns the submitted `fields`, which the form uses as `defaultValue`s so React 19's automatic form reset doesn't wipe what the visitor typed.
- `src/components/ui/` holds shadcn-style primitives built with `class-variance-authority` and `cn()` (`src/lib/utils.ts`). `@/*` maps to `src/*`.
- Fun-fact texts in `src/lib/data.ts` are trusted HTML strings rendered with `dangerouslySetInnerHTML`.

## Styling and formatting

- `DESIGN.md` is the visual spec: four colors plus their opacities, Fira Code only, square 1px frames, flat surfaces. It lists existing code that drifts from it (Tailwind gray/cyan/emerald hues, `font-mono`, rounded media, shadows); don't copy those patterns into new UI.
- Tailwind v4 is configured in CSS only (no `tailwind.config`): theme tokens live in the `@theme` block of `src/styles/globals.css` (`bg-bg-main`, `text-primary`, `text-text`, `text-text-secondary`), along with a custom `container` utility capped at 1030px.
- Prettier: 3-space indent, single quotes. Imports are sorted by `@trivago/prettier-plugin-sort-imports` (packages, blank line, then local). Tailwind classes are sorted by `prettier-plugin-tailwindcss`, which reads the theme from `globals.css` via `tailwindStylesheet`.

## Next 16 / React 19 specifics in this repo

- `next.config.ts` allows only `images.qualities: [75, 100]`; any other `quality` prop is coerced to the closest one, so add new values there.
- Use `preload`, not the deprecated `priority`, on `next/image`.
- `<html data-scroll-behavior="smooth">` in the root layout stops the global `scroll-smooth` from animating route changes.
- `eslint-plugin-react-hooks` v7 rules are errors (e.g. calling setState inside an effect). `src/components/ui/maintenance-notice.tsx` shows the `useSyncExternalStore` pattern for reading localStorage.
- `react-responsive-masonry` ≥2.8 defaults `<Masonry>` to a 0 gutter, so pass `gutter` explicitly.

## AI tooling in the repo

`.claude/` and `.cursor/` contain the vendored "impeccable" design skill with its agents and hooks. ESLint and Prettier ignore these folders; don't hand-edit them. The shared `.claude/settings.json` runs the skill's design check after Edit/Write on UI files; `.claude/settings.local.json` is gitignored for personal settings.
