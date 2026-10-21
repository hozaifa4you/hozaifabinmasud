---
target: homepage
total_score: 15
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 4
target_identity: "file:D:\\hozaifabinmasud\\src\\app\\page.tsx"
target_fingerprint: "sha256:fcec6f2006b5c0f4511c1405e8dda9917818daf06353fcf0d180333062504607"
target_path: "D:\\hozaifabinmasud\\src\\app\\page.tsx"
timestamp: 2026-10-21T16-28-05Z
slug: src-app-page-tsx
---
Method: dual-agent (A: isolated design-review sub-agent · B: isolated detector sub-agent)

Environment note: the local .env holds .env.example values, so the build shows "[Full Name]" / "Company Name"; not scored as design defects, but the site has no guard against missing env values.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | No active-section nav state; `#contact` nav link dead (section id is `contacts`); stale hardcoded "Present [1.8_years]" |
| 2 | Match System / Real World | 2 | Code-syntax labels force translation (`![Dec 2023 - Present][1.8_years]`, `#more_dets.`, `@Year Expe.`); "Download Resume" opens an HTML page |
| 3 | User Control and Freedom | 2 | First-visit modal ignores Escape/backdrop; mobile menu has no Escape |
| 4 | Consistency and Standards | 1 | Project counts 50+/10+/16+, experience 4.1+/5.2/3.9/"four years"; "self-taught" vs BSc; two clashing visual languages |
| 5 | Error Prevention | 2 | Required fields not marked; no maxLength matching server limits |
| 6 | Recognition Rather Than Recall | 2 | 16 unlabeled icon links; tech pills look clickable; case-study link visible only on hover |
| 7 | Flexibility and Efficiency | n/a | One-time persuasive read |
| 8 | Aesthetic and Minimalist Design | 1 | Decoration (dot grids, boxs.png x2, glows, bouncing icons, "Dr. AI" quote, ~60-chip skills wall, stats grid) outweighs proof |
| 9 | Error Recovery | 3 | Specific inline errors that keep input; no aria-describedby; error color = accent |
| 10 | Help and Documentation | n/a | Portfolio |
| **Total** | | **15/32** | **Poor (47%)** |

## Design Specificity Verdict

LLM: category-interchangeable. Near one-to-one Elias Figma template (palette, Fira Code, `#section` + rule, dot grids, framed "Dr." quote, "Currently working at" box) overlaid with a contradicting SaaS/AI-kit layer (cyan/emerald/purple gradient pills, glows, bouncing icons, three pinging dots, "50+ / 4.1+ / AI Savvy" stat row). The specific material (CasePDF AI document analysis, Namespace IT production LLM work, the one case study) is buried at equal weight. The editor metaphor is surface glyphs only. Both portraits hide the face.

Deterministic: CLI over 32 files: 1 primary (gradient-text, hero-section.tsx:60) + 7 advisory (5 design-system-font-size, 2 bounce-easing). Live CDP: 50-58 findings/scan; real: low-contrast 3.8:1 default Badge (the DESIGN.md-documented badge), 2.5:1 white on emerald status chip (work-card-v2.tsx:18), advisory 4.4:1 "Available for hire" and tag pills, 2 skipped headings (skills-box.tsx:14, contact-form.tsx:15), pulsing dot, 2 bounce icons, 24 font-mono elements on system mono, duplicate inline SVG ids, mobile body text 10px from edge. False positives: 31-33 ai-color-palette on brand #C778DD (CDP ignores DESIGN.md), gradient-text (dead classes, never renders; A agrees), bounce on body (Tailwind token), font-size advisories documented in DESIGN.md prose. Detector caught what A missed: the system's own badge failing AA, duplicate SVG ids. No user-visible overlay (headless).

## Priority Issues

- [P0] Fabricated credentials and contradictory numbers presented as fact (fake BSc/HSC, "Education 9+" with 2 cards, stats vs hero counts, "self-taught" vs degree). Fix: remove edu/stats from homepage until real; derive numbers from one source; compute "Present" duration. Command: distill
- [P1] Both conversions hard to find, mislabelled or broken (no resume in desktop nav, resume CTA opens a page, Let's Work Together leaves the page, dead #contact anchor, freelance-only contact copy, non-tappable email/phone). Fix: one filled primary CTA + Resume (PDF) in hero and nav; fix id; dual-audience copy; mailto/tel. Command: clarify
- [P1] First impression undermines trust (blocking maintenance modal without dialog semantics/focus/Escape; face-hidden portraits). Fix: remove or make a non-blocking bar; real face photo or typographic hero. Command: onboard
- [P1] Keyboard, screen-reader and mobile failures (outline-0 no focus style, zero aria-labels, 20px unlabeled hamburger, mobile menu overlapped by hero at scroll top, closed menu in tab order, no <main>, no reduced motion, button nested in link, 3.8:1 and 2.5:1 contrast). Fix: focus token, labels, permanent header z-index, inert closed menu, <main>, motion-safe, badge contrast. Command: harden
- [P1] Template identity plus a contradictory second visual language (gradient badges cycled by index, glows, blue gradients, rounded tab switcher, emerald pill, font-mono, boxs.png filler). Fix: strip drift, then author a content-carrying signature (projects as files with role/outcome, work as commit log, AI claim via CasePDF/LLM work). Command: shape (after distill)

## Design system weaknesses

Badge token fails AA (orchid on its own tint 3.8:1; orchid on bg only 4.77:1); no semantic success/warning/error colors; no focus or motion tokens; button lg/xl sizes neutralized by max-h-37px; type ramp steps missing from frontmatter and all-mono body hurts long reading; font-mono drift and self-referencing --font-main.

## Persona Red Flags

- Jordan: modal "may not work"; code labels; dead pills; resume opens page; dead #contact.
- Riley: 50+/10+/16+ projects; four experience figures; "Education 9+" with 2 cards; 404 Privacy/Terms; works.reverse() mutates data.
- Casey: mobile menu unreadable at top; 20px targets; ~10,000px page with form at bottom; ~1,000px skills wall; non-tappable email/phone.
- Freelance client: no services/process; cards don't state role or outcome; case study hover-only; faceless photo.
- Recruiter: no desktop resume; fake degree vs self-taught; four experience figures; "freelance opportunities" reads as not seeking full-time; "Available for hire" next to "Currently working at".

## Minor Observations

"Developer" gradient never renders (only off-palette blue underline); alt="#" on About portrait, alt="Boxs" on decoration; `#more_dets.` opacity-0 until hover; copy errors ("Laravel and etc.", "Read more!!", "Message here!!", Namespace It/IT); "#Skills" capitalised; red pulsing footer heart; generic hero lead.

## Questions to Consider

- Without the One Dark palette and Fira Code, would anything say "Hozaifa" rather than "the Elias template"?
- Why should a visitor read an apology before your name?
- Why does the strongest evidence (AI document analysis, production LLM work) get the same weight as a typing app and a skills wall?
