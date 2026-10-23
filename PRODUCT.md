# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, weighted equally (confirmed):

- **Freelance clients** arriving from Upwork, Fiverr, LinkedIn or a shared link, deciding whether to hire Hozaifa for a project. Success: they start a conversation through the contact form or a profile link.
- **Recruiters and hiring managers** assessing him for a full-time role. Success: they download the resume or get in touch. Many are Bangladeshi employers who screen on certificates before skills (owner, 2026-10-23), so education and training are part of their first look.

Both are evaluating fit quickly: can this person build what we need, and is there proof?

## Product Purpose

The personal portfolio of Hozaifa Bin Masud, a full-stack developer based in Bangladesh. It exists to turn a visit from a client or recruiter into contact or a resume download, by showing his projects, work history and skills.

The site is under active development (confirmed): much of the content is not real yet, and first-time visitors see a maintenance notice saying some features may not work.

## Positioning

Three claims, all confirmed by the owner, that future work should lead with:

1. **Full-stack plus AI integration**: building web applications with AI features built in ("Full-Stack Developer · AI Savvy").
2. **End-to-end delivery**: one person who builds both frontend and backend; the site copy names React, Next.js, NestJS and Laravel.
3. **Production experience at companies**: shipping live products at Namespace IT and AI Power IT, not only side projects.

## Operating Context

- Visitors usually come from a freelance marketplace profile, LinkedIn, GitHub or a direct link, and skim before deciding.
- Conversion points: the contact form (delivers an email to the owner through SMTP), the resume PDF (`public/hozaifa-resume.pdf`; owner chose it as the only linked PDF on 2026-10-22, and `public/hozaifa-resume-page.pdf` stays on disk unlinked), and outbound links to GitHub, LinkedIn, Upwork, Fiverr, Facebook and X.
- Project cards link to an in-site case study when one exists, otherwise to the live product site.
- Education and training are required, not optional (owner, 2026-10-23): once real, they appear on the homepage, the resume and their own pages (`/educations`, `/trainings`). Never propose removing those routes.
- Deployed on Vercel; production deploys from `main`.

## Capabilities and Constraints

- Sections and routes: home, projects (plus `/projects/[slug]` case studies), works, education and trainings, about me, contact, resume.
- All content is hardcoded TypeScript data in `src/lib/`; there is no CMS. Personal details (name, designation, social usernames, email, phone, address) come from environment variables.
- Only one project has a case study so far (`aionlinecourse`); the others link to their live sites or have no link.
- The contact form validates input, keeps it on errors, and has a honeypot spam filter with length limits.
- Current availability (confirmed 2026-10-21): open to full-time roles only, not taking freelance projects. Any availability line on the site must say this; re-confirm before changing it.
- Open decisions: which further projects get case studies; real education and training details (the owner is filling them in); real fun-fact content; real stats.

## Brand Commitments

- Name: Hozaifa Bin Masud (shown as the first name "Hozaifa" in the logo).
- Existing logo assets: `public/assets/logo.svg`, `logo-white.svg`, `logo-box.svg`, `logo-2.svg`, `logo.png`.
- Current voice, not yet confirmed as binding: developer-flavoured and lightly playful ("Turning coffee into clean code — one bug at a time...", code-style labels such as `@your-name` and `#contact-with>=me`).

## Evidence on Hand

Present in the repo (not yet individually verified by the owner):

- Project list with screenshots in `public/assets/projects/` and live URLs in `src/lib/data/projects.ts`.
- One case study with nine screenshots: `public/assets/project-details/aionline/`.
- Work history entries for AI Power IT and Namespace IT in `src/lib/data/works.ts`.
- Portrait photos in `public/alternate/` and resume PDFs in `public/`.
- Education (owner, 2026-10-23): a BSc at ISTT (Institute of Science, Trade & Technology), in progress. The subject, years and awarding university are still to be confirmed. He also has online trainings (Coursera and others) to list.

Placeholders, confirmed as not real; never use them as proof or build new work around them:

- Fun facts in `src/lib/data.ts`.
- Demo education and training entries in `src/lib/data/education.ts`, each marked `demo: true`. They exist to build the design with: they show locally and on Vercel previews, never on the production site, and the owner replaces them with real details (certificate images go under `public/`).

The owner says much other content is also not final. There are no testimonials, client logos, verified metrics or press. Do not invent any of them; ask before presenting any number or claim as fact.

## Product Principles

1. **Serve both audiences at once.** A client should be able to start a conversation and a recruiter should be able to get the resume from any key page, without hunting.
2. **Back every claim with a concrete project or role.** AI integration, end-to-end delivery and company experience are shown through specific work, not adjectives or invented numbers.
3. **Real content only.** Placeholder text is scaffolding; never present it as fact or design around it.
4. **Degrade honestly while under construction.** Missing pieces (case studies, real stats) fall back to something true, such as a link to the live product, rather than filler.
