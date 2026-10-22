---
version: 1
slug: "src-app-projects-slug-page-tsx"
primary_target: "src/app/projects/[slug]/page.tsx"
related_targets: ["src/components/projects"]
---

# Case study

Scope: `/projects/[slug]` (src/app/projects/[slug]/page.tsx and src/components/projects/). Mode: Experience, the work leads (owner chose "work first", 2026-10-22). Audience: freelance clients and recruiters, equally. Job: see the shipped product, understand what it is and his part in it. Actions: visit the live site, then contact or the next project. Proof: the live product, nine real screenshots, the role at Namespace IT, and the owner's own account of what he built. Constraints: the homepage screenshot morphs into the main image (keep the shared `project-shot-<slug>` name); no placeholder sections; no company street address (owner, 2026-10-22); feature-list spelling corrected (owner approved).

Unresolved: the owner is writing "what I built" content (parts built, hardest problem, results, a caption per screen). Until it lands, log entries come only from facts already in the data.

## Direction contract

THESIS: The case study reads as the project's git log: HEAD, the product in production, carries the full screenshot the homepage morphs into, and each older commit pairs one piece of the work with its screen. It refuses the template case study of hero image, a row of fact cards and a modal gallery.

OWN-WORLD: The Open Workspace. One Dark layers #21252B, #282C33, #2C313A, hairlines #3E4451; orchid #C778DD for the one action and focus, green #98C379 for live and HEAD. Fira Sans reads; Fira Code names hashes, dates and files. Square 1px panes; the rail and commit nodes from work.log.

STORY: A visitor sees the shipped product first, learns what it is plus role, time, team and company in one line, reads down the log to what was built and with what, then leaves for the live site, contact or the next project.

FIRST VIEWPORT: Breadcrumb; H1 "Aionlinecourse" at display size with a lead line; "Visit live site" primary at the right of the title row; a mono fact line (In production · role · duration · team · company) between hairlines; then the rail starts with the HEAD node, pill and commit message, and the main screenshot in a URL-bar frame filling the rest of the viewport.

FORM: Commit log, 5th of 7 on the ranked list. Signature: each commit node lights as it reaches the reading line and its screen wipes in; screens open full size in a native dialog viewer with arrow keys. seed:b010b020bb11b9a1

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
