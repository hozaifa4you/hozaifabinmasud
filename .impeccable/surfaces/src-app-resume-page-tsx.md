---
version: 1
slug: "src-app-resume-page-tsx"
primary_target: "src/app/resume/page.tsx"
related_targets: ["src/components/resume"]
---

# Resume

Scope: `/resume` (src/app/resume/page.tsx and src/components/resume/). Mode: Read. Audience: recruiters first, clients second. Job: read the CV on screen, download the PDF, or print a clean A4 copy. Constraints (owner, 2026-10-22): one PDF only (public/hozaifa-resume.pdf); the summary is the shared about introduction; the page prints as a clean CV. Every date and span derived from data. Education and training are required (owner, 2026-10-23): they sit right after Experience (the second appendix row from lg, and next in phone and print order), every training is listed, and the sections read from getEducation()/getTrainings(), so demo entries show locally and on previews with the demo mark ("(demo)" in print) and never in production. The owner first picked "resume.json", then re-chose "Business card + appendix" on the same hand (same day).

## Direction contract

THESIS: The resume opens on a business card: name, role, the one-paragraph introduction, the PDF and Print actions, and a key/value contact panel, all in one sunken pane; everything else is an appendix of plain CV sections set in two columns. It refuses the boxed two-column template with skill badges and a sidebar of icons.

OWN-WORLD: The Open Workspace. The card is a Sidebar Charcoal pane with a 1px Hairline frame, split by a hairline into the identity column and the contact panel; contact keys in Soft Orchid Fira Code, values in Cursor White; availability green; links blue-underlined. Appendix headings at Headline size on hairline rules, dates in Fira Code. Print: black on white, Fira Sans, hairline rules.

STORY: A recruiter reads who he is and how to reach him in the first screen, downloads the PDF or prints, then scans experience, education and training, selected projects, skills and languages below.

FIRST VIEWPORT: Breadcrumb; the card across the container: the name at display size, the designation, the introduction, Resume.pdf (primary) and Print; at the right (below on phones) the contact panel: status, email, phone, website, GitHub, LinkedIn, based. Under the card the appendix starts with Experience and Selected projects side by side.

FORM: Card plus appendix, 7th of 7 on the ranked list (dealt; re-chosen by the owner). Signature: the card is the CV's letterhead, a single pane that carries every way to act; the appendix is reference, two columns from lg, every section on the same hairline-ruled heading; Print swaps the page for a conventional A4 CV from the same data. seed:9a6881a4cfd638ca

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
