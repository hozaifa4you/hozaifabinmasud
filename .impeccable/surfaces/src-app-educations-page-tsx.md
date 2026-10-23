---
version: 1
slug: "src-app-educations-page-tsx"
primary_target: "src/app/educations/page.tsx"
related_targets: ["src/app/trainings/page.tsx","src/components/education"]
---

# Education and training

Scope: `/educations` and `/trainings` (src/app/educations/page.tsx, src/app/trainings/page.tsx, src/components/education/). Mode: Read. Audience: recruiters, many of them Bangladeshi employers who screen on certificates first (PRODUCT.md); clients second. Job: read every qualification with its result and details, read every training with its provider, date and proof, verify a certificate or view its image. Constraints (owner, 2026-10-23): both routes stay; data comes from `getEducation()` / `getTrainings()`; demo entries carry the demo pill locally and on previews and never reach production, where an empty list reads honestly ("details are being added"); certificate images will be supplied by the owner and show only when present (no empty frames); extra education details (courses, projects or thesis, achievements) show only when given; no semester or year-of-study line.

## Direction contract

THESIS: Education and training read as a learning log: one commit rail per page, newest on top, the degree in progress on an amber node, each commit carrying its record as keyed rows; the two pages are two tabs of one reference. It refuses the old masonry of degree and course cards with badges, ratings and placeholder stats.

OWN-WORLD: The Work Log's grammar on the canvas: a 1px Hairline rail and 20px commit nodes (amber with a soft ring for in progress, Strong Hairline for finished), Code dates and spans, Title-size commit messages with the institution after a Dim Gray "at", hairline key rows with Soft Orchid Code keys like the works page. A Sidebar Charcoal tab strip (`education.md`, `trainings.md`) with the open tab on the canvas. Amber pills for in progress, the neutral demo pill, blue-underlined verify links, certificate images in 1px Hairline frames that open in the screen viewer.

STORY: A recruiter sees the degree in progress first, then the earlier ones with their results; switches to trainings in one click; verifies a certificate on its platform or opens its image full size.

FIRST VIEWPORT: Breadcrumb (Workspace / education); `Education` in Display; a Lead line; the tab strip with `education.md` open; then the rail: the BSc commit (amber node, `in progress` pill, years, "BSc in Computer Science and Engineering at ISTT", rows `where`, `courses`, `projects`, `achievements` as given) and the next commit beginning below.

FORM: Learning log, 5th of 7 on the ranked list (dealt; chosen by the owner). Signature: the same rail and nodes as the work log and the case study, so education reads as history; the tab strip pairs the two pages; a certificate image opens in the screen viewer and steps through the others. seed:5c8c8cf706f111a7

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
