---
version: 1
slug: "src-app-not-found-tsx"
primary_target: "src/app/not-found.tsx"
related_targets: ["src/components/not-found","src/lib/nearest-page.ts"]
---

# Not found

Scope: the site's 404 (src/app/not-found.tsx, the quick-fix matcher, the problems panel). Mode: Operate. Audience: recruiters and clients who followed a broken or mistyped link, often a shared project link (`/projects/<slug>` for a project with no case study is a real 404). Job: see what failed and take the nearest real page in one click. Constraints (owner, 2026-10-22): the joke and emoji go, the tone is plain and professional; the one filled button leads to the nearest real page, or to the Workspace when nothing matches. Placeholder pages (educations, trainings) are never suggested.

## Direction contract

THESIS: A 404 is a problem with quick fixes: one line says what could not be resolved, then the nearest real pages, the best one as the only filled action. It refuses the giant 404 numeral, the illustration and the joke.

OWN-WORLD: The Open Workspace. A Sidebar Charcoal panel in a 1px Hairline frame with a 40px tab strip (`problems` tab on the canvas, a rose count pill), one problem row (rose circle icon, Cursor White sentence, the path in Fira Code, `404` in Dim Gray), a Soft Orchid `quick fixes` key, then hairline fix rows; the best fix on Line Highlight with a 1px orchid edge and the orchid button.

STORY: The visitor reads that the address does not exist, sees the path they followed kept on the page, and takes the best fix, or one of two plain alternatives.

FIRST VIEWPORT: Breadcrumb (Workspace / not found); `Page not found` in Display; a Lead naming the path in mono; the problems panel with the problem row and exactly three fix rows, the first open with the primary button.

FORM: Problems panel, 3rd of 7 on the ranked list (dealt lead). Signature: the fixes are computed from the broken path (route aliases, project slugs, edit distance), so `/projects/case-pdf` offers the case-pdf directory row first; the path is never dropped. seed:88ad8c5d5f1ac1dc

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
