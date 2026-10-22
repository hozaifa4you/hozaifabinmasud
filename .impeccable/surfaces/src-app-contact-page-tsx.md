---
version: 1
slug: "src-app-contact-page-tsx"
primary_target: "src/app/contact/page.tsx"
related_targets: ["src/components/contact","src/components/about-me/contact-form.tsx"]
---

# Contact

Scope: `/contact` (src/app/contact/page.tsx, the shared contact form, the contact channels). Mode: Operate. Audience: recruiters first, clients second, arriving from the navbar, footer or 404 on any page except the homepage. Job: send a message from the page, or take a direct channel (copy the email, call, WhatsApp, LinkedIn, GitHub), or grab the resume. Constraints (owner, 2026-10-22): its own page, not a redirect to `/#contact`; the crypto "Support me" block is removed; channels match the homepage (email, phone, WhatsApp, GitHub, LinkedIn; no Upwork, Fiverr, Facebook or X while availability is full-time only); the old "freelance opportunities" copy is replaced because it contradicts availability. The homepage contact section keeps its own behaviour.

## Direction contract

THESIS: Contact is a directory of every way to reach Hozaifa, one row per channel, with the message row open by default and the form inside it. It refuses the stock contact page of copy plus a form beside a sidebar of icons.

OWN-WORLD: The Open Workspace. The projects directory's grammar: a Hairline-topped list with a 36px Dim Gray mono column header, 56px rows, Soft Orchid Code keys on the data they label, values in Fira Code (sentences in Fira Sans), and where each row leads in Dim Gray Code UI. The open row sits on Line Highlight with a 1px orchid left edge. One orchid button: Send message.

STORY: A recruiter sees he is available, what time it is in Bangladesh and that replies come by email, then writes in the open row or copies the email, and leaves with an answer path or the resume.

FIRST VIEWPORT: Breadcrumb; `Contact` in Display; a Lead line; the fact line between Hairline rules (availability in green, local time ticking in tabular figures, Bangladesh · GMT+6, replies by email); then the directory: the open `message` row with the form, then `email` (copy), `phone`, `whatsapp`, `linkedin`, `github`, `resume`.

FORM: Channel directory, 4th of 7 on the ranked list (dealt lead). Signature: sending swaps the open row's form for a sent receipt (to, from, subject, sent at) that holds until "Write another", replaying the wipe; the clock never moves the layout. seed:a3240a120f8376e3

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
