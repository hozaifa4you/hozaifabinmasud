---
version: 1
slug: "src-app-about-me-page-tsx"
primary_target: "src/app/about-me/page.tsx"
related_targets: ["src/lib/data/about.ts"]
---

# About me

Scope: `/about-me` (src/app/about-me/page.tsx and its data in src/lib/data/about.ts and src/lib/data/skills.ts). Mode: Read, the visitor wants to understand who he is and what he can build. Audience: freelance clients and recruiters, equally. Job: learn who he is in one paragraph, see what kinds of product he builds with the projects that prove each, then check the full technology list. Actions: open a proof project, filter projects by a technology, get in touch. Constraints (owner, 2026-10-22): no fun facts (placeholder), no photo until a real face-visible one arrives, technologies and kinds of work shown apart; every number derived from data; no claim a project in the data does not support.

## Direction contract

THESIS: The about page answers "what can he build?" with evidence: right after a one-paragraph introduction, each kind of work he builds is a row carrying the projects that prove it and the stack it used, and the full technology list follows as reference. It refuses the portrait-and-bio template and the wall of skill badges.

OWN-WORLD: The Open Workspace. One Dark layers #21252B, #282C33, #2C313A, hairlines #3E4451; orchid #C778DD for the one action and focus, green #98C379 for availability, blue #61AFEF underlines for links out of the text. Fira Sans reads; Fira Code names projects, groups, counts and facts. Square 1px rules; logos as content.

STORY: A visitor reads who he is, sees the kinds of product he ships with real projects behind each, checks a technology they need, and goes to a project or to contact.

FIRST VIEWPORT: Breadcrumb; H1 "About me" at display size; the introduction as a lead paragraph in Cursor White; a mono fact line between hairlines (availability, years, since, current role, timezone); then the "What I build" heading on its rule and its first rows: capability title, summary with proof links, logo stack.

FORM: Capability rows, 5th of 7 on the ranked list. Signature: each proof link opens its project (the case study, or the projects directory with that row open), and every technology in the reference list that a project used links to the directory filtered by it, with its count. seed:5fcbc4a68dfe7c7a

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
