---
version: 1
slug: "src-app-projects-page-tsx"
primary_target: "src/app/projects/page.tsx"
related_targets: ["src/components/projects/project-directory.tsx"]
---

# Projects

Scope: `/projects` (src/app/projects/page.tsx and the directory component in src/components/projects/). Mode: Experience, an index of the work. Audience: freelance clients and recruiters, equally. Job: see every project at a glance, narrow by technology ("has he shipped X?"), open one for its screenshot and links. Actions: read the case study, visit a live site, view source; contact stays one step away. Proof: real screenshots (6 of 10 projects), live URLs, the one case study. Constraints: no placeholder screenshot may stand in for a project (a dashed "no screenshot" frame instead); technology names canonical with logos; the filter lives in the URL so a filtered view can be shared; the small project joins the end of the list (owner, 2026-10-22).

## Direction contract

THESIS: The projects page is an `ls -l` of the work: one row per project in strict columns (name, status, built for, stack logos), every column in the same place on every row, and a row opens in place to its screenshot, summary and links. It refuses the masonry wall of equal screenshot cards.

OWN-WORLD: The Open Workspace. One Dark layers #21252B, #282C33, #2C313A, hairlines #3E4451; orchid #C778DD for the one action, focus and the open row's edge; green, amber and gray for live, in development and archived. Fira Sans reads; Fira Code names projects, columns, statuses and the filter key. Square 1px panes; logos as content.

STORY: A visitor sees how much was built and for whom, filters by a technology they care about, opens a row to see the product and leaves for its case study or live site.

FIRST VIEWPORT: Breadcrumb; H1 "Projects" at display size with a count line; a status summary between hairlines; the stack filter as logo chips with counts; then the column header and rows, the first row open with its screenshot, summary and "Read case study".

FORM: Directory listing, 3rd of 7 on the ranked list, raised by Teletext Service's fixed-grid discipline. Signature: rows open in place with a height transition and the open row carries a 1px orchid edge; filtering re-flows rows without breaking the column grid; the case study screenshot morphs between this page and its case study. seed:98adeb4ce1924ba2

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
