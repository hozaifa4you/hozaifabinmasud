---
version: 1
slug: "src-app-works-page-tsx"
primary_target: "src/app/works/page.tsx"
related_targets: ["src/lib/data/works.ts"]
---

# Work history

Scope: `/works` (src/app/works/page.tsx, data in src/lib/data/works.ts). Mode: Read, the visitor checks his employment record. Audience: recruiters first, clients second. Job: see each role, when and for how long, what he did, what he shipped there and with what stack. Actions: open a shipped project, get in touch. Constraints (owner, 2026-10-22): each role lists the projects built there (from projects.ts owners); company social links removed (placeholders); company location as area and city only; every date span derived, newest role first.

## Direction contract

THESIS: The work history reads as a changelog: each role is a release entry, newest first, its dates and length on the right, and under it the same three parts every time, what he did, what he shipped there and the stack. It refuses the timeline of icon-labelled cards with @-prefixed fields.

OWN-WORLD: The Open Workspace. One Dark layers #21252B, #282C33, #2C313A, hairlines #3E4451; orchid #C778DD for the one action and focus, green #98C379 for the current role and live projects, amber for in development, blue underlines for links. Fira Sans reads; Fira Code names dates, spans, the subsection keys and project slugs. Square 1px rules; logos as content.

STORY: A recruiter sees how long and where he has worked, reads the current role first, checks what shipped there, and opens a project or gets in touch.

FIRST VIEWPORT: Breadcrumb; H1 "Work history" at display size; a derived summary line (years, companies, projects shipped); a mono fact line between hairlines; then the current role's entry head (title, company, a current pill, dates and span on the right) and its `did` and the start of its `shipped` subsections.

FORM: Changelog entries, 6th of 7 on the ranked list. Signature: each entry's subsection keys sit in a fixed left column (did, shipped, stack, where) on hairline rows, the same grid for every role, and shipped projects carry their live status and open their case study or directory row. seed:61922a50f6eb4123

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
