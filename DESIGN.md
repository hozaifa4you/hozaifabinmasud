---
name: Hozaifa Bin Masud — Portfolio
description: A developer portfolio laid out as an open One Dark editor workspace, with real work shown as files.
colors:
   bg-sunken: '#21252b'
   bg-main: '#282c33'
   bg-raised: '#2c313a'
   line: '#3e4451'
   line-strong: '#747c8a'
   text: '#abb2bf'
   strong: '#e8eaee'
   muted: '#9298a5'
   primary: '#c778dd'
   primary-soft: '#d49be6'
   primary-ink: '#1e2127'
   success: '#98c379'
   warning: '#e5c07b'
   danger: '#e87d86'
   info: '#61afef'
typography:
   display:
      fontFamily: 'Fira Sans, ui-sans-serif, system-ui, sans-serif'
      fontSize: 'clamp(2.5rem, 1.5rem + 4vw, 4.25rem)'
      fontWeight: 600
      lineHeight: 1.04
      letterSpacing: '-0.03em'
   headline:
      fontFamily: 'Fira Sans, ui-sans-serif, system-ui, sans-serif'
      fontSize: 'clamp(1.75rem, 1.3rem + 1.4vw, 2.375rem)'
      fontWeight: 600
      lineHeight: 1.15
      letterSpacing: '-0.02em'
   lead:
      fontFamily: 'Fira Sans, ui-sans-serif, system-ui, sans-serif'
      fontSize: 'clamp(1.3rem, 1.1rem + 0.9vw, 1.75rem)'
      fontWeight: 400
      lineHeight: 1.35
   title:
      fontFamily: 'Fira Sans, ui-sans-serif, system-ui, sans-serif'
      fontSize: '1.5rem'
      fontWeight: 600
      lineHeight: 1.25
      letterSpacing: '-0.015em'
   body:
      fontFamily: 'Fira Sans, ui-sans-serif, system-ui, sans-serif'
      fontSize: '1.0625rem'
      fontWeight: 400
      lineHeight: 1.65
   control:
      fontFamily: 'Fira Sans, ui-sans-serif, system-ui, sans-serif'
      fontSize: '0.9375rem'
      fontWeight: 500
      lineHeight: 1.45
   label:
      fontFamily: 'Fira Sans, ui-sans-serif, system-ui, sans-serif'
      fontSize: '0.875rem'
      fontWeight: 500
      lineHeight: 1.43
   code:
      fontFamily: 'Fira Code, ui-monospace, SFMono-Regular, Menlo, monospace'
      fontSize: '0.875rem'
      fontWeight: 400
      lineHeight: 1.43
   code-ui:
      fontFamily: 'Fira Code, ui-monospace, SFMono-Regular, Menlo, monospace'
      fontSize: '0.8125rem'
      fontWeight: 400
      lineHeight: 1.5
   code-label:
      fontFamily: 'Fira Code, ui-monospace, SFMono-Regular, Menlo, monospace'
      fontSize: '0.75rem'
      fontWeight: 400
      lineHeight: 1.333
rounded:
   none: '0px'
   full: '9999px'
spacing:
   container-inline: '20px'
   container-max: '1120px'
   pane-sm: '20px'
   pane-lg: '32px'
   heading-gap: '40px'
   section-sm: '56px'
   section-lg: '80px'
   header: '64px'
components:
   button-primary:
      backgroundColor: '{colors.primary}'
      textColor: '{colors.primary-ink}'
      typography: '{typography.control}'
      rounded: '{rounded.none}'
      padding: '0 16px'
      height: '40px'
   button-primary-hover:
      backgroundColor: '{colors.primary-soft}'
      textColor: '{colors.primary-ink}'
   button-default:
      backgroundColor: 'transparent'
      textColor: '{colors.strong}'
      typography: '{typography.control}'
      rounded: '{rounded.none}'
      padding: '0 16px'
      height: '40px'
   button-default-hover:
      backgroundColor: '{colors.bg-raised}'
      textColor: '{colors.strong}'
   button-ghost:
      backgroundColor: 'transparent'
      textColor: '{colors.text}'
      typography: '{typography.control}'
      rounded: '{rounded.none}'
      padding: '0 16px'
      height: '40px'
   button-ghost-hover:
      backgroundColor: '{colors.bg-raised}'
      textColor: '{colors.strong}'
   button-lg:
      padding: '0 20px'
      height: '44px'
   button-sm:
      padding: '0 12px'
      height: '32px'
   input:
      backgroundColor: '{colors.bg-sunken}'
      textColor: '{colors.strong}'
      typography: '{typography.control}'
      rounded: '{rounded.none}'
      padding: '0 12px'
      height: '44px'
   tag:
      backgroundColor: '{colors.bg-raised}'
      textColor: '{colors.text}'
      typography: '{typography.code-label}'
      rounded: '{rounded.none}'
      padding: '2px 8px'
   filter-chip:
      backgroundColor: 'transparent'
      textColor: '{colors.text}'
      typography: '{typography.control}'
      rounded: '{rounded.none}'
      padding: '0 12px'
      height: '36px'
   filter-chip-pressed:
      backgroundColor: '{colors.bg-raised}'
      textColor: '{colors.strong}'
   status-pill:
      backgroundColor: '#98c3791a'
      textColor: '{colors.success}'
      typography: '{typography.code-label}'
      rounded: '{rounded.none}'
      padding: '0 6px'
   explorer-item:
      backgroundColor: 'transparent'
      textColor: '{colors.text}'
      typography: '{typography.code-ui}'
      padding: '0 16px'
      height: '32px'
   explorer-item-active:
      backgroundColor: '{colors.bg-raised}'
      textColor: '{colors.strong}'
   file-tab:
      backgroundColor: '{colors.bg-sunken}'
      textColor: '{colors.primary-soft}'
      typography: '{typography.code-label}'
      rounded: '{rounded.none}'
      padding: '4px 12px'
   directory-row:
      backgroundColor: 'transparent'
      textColor: '{colors.strong}'
      typography: '{typography.code-ui}'
      padding: '0 16px'
      height: '56px'
   directory-row-open:
      backgroundColor: '{colors.bg-raised}'
   pane:
      backgroundColor: '{colors.bg-sunken}'
      textColor: '{colors.text}'
      rounded: '{rounded.none}'
      padding: '{spacing.pane-sm}'
   nav-link:
      backgroundColor: 'transparent'
      textColor: '{colors.text}'
      typography: '{typography.code}'
      padding: '0 12px'
      height: '40px'
   nav-link-active:
      textColor: '{colors.strong}'
---

# Design System: Hozaifa Bin Masud — Portfolio

## Overview

**Creative North Star: "The Open Workspace"**

The site is a One Dark code editor opened on Hozaifa's real work, in a professional register. The editor is carried by structure, not ornament: a window with a title bar, an explorer that doubles as navigation, tab strips, a status bar, file names that label sections, and a git-log timeline. Inside that chrome the writing is set like a well-made product page, in a humanist sans, so a recruiter or client reads prose while the developer's world stays visible at the edges.

Surfaces are three flat One Dark layers separated by 1px hairlines with square corners. Colour comes from syntax roles: orchid acts and marks focus or the current file, green means live or available, amber means in progress, red means error, blue underlines outbound links. Everything else is cool charcoal and gray. Density is calm: generous section rhythm, compact chrome, reading columns held to about 65 characters.

Motion is brief and carries continuity rather than decoration, and it is where the workspace gets its depth: the panes stay flat, while the window and the media in it turn in perspective and ease back to flat; the one thing that holds depth at rest is the project deck, where the next projects stand back behind the chosen screenshot. On load the workspace window opens once like a screen lid hinged at its foot, its contents rising in a stagger as it swings up. With a mouse the window, the project screenshots and the certificates lean toward the pointer, and inside the window the README and the explorer list drift by a few pixels within their panes. In the project explorer the selection highlight glides to the chosen file, the preview pane wipes in from the left and its screenshot turns to face the reader from its left edge, while behind it the deck fans under the mouse and its cards glide between places as the choice changes. Opening a case study from the homepage explorer or the projects directory morphs the project screenshot into its place on the new page while the rest of the page turns away like a tab on a carousel, and the breadcrumb back reverses it. In the projects directory a row opens in place, growing to its content while its chevron turns and its screenshot turns to face the reader, and a filter moves the list in three beats: the rows that leave fade aside, the rows that stay glide to their new places and new ones rise in. As the reader scrolls, sections and entries settle from a slight backward lean; down the work log, the learning log and a case study the rail fills from Hairline to Strong Hairline as it is read and the commit being read lights its node orchid; on a case study each screen wipes in from the left and stands up as it scrolls into view. A screen opened full size grows out of its thumbnail over a fading backdrop, a step slides the next screen in from its side, and closing shrinks it back home. While a message sends, a light runs along the button's foot; field errors wipe in and each new outcome rises into the status line. On the contact page a sent message wipes in as a receipt in place of the form, its rows rising one after another, and the form wipes back in after "Write another". A copied email's check pops in. Past the hero, the status bar docks to the foot of the screen with a scroll-driven reading line. State changes are 200ms colour shifts. Reduced motion collapses all of it except what only follows the scroll (the reading line, the rail fill and the lit nodes), touch screens get the scroll depth and page turns but no tilt, and browsers without view transitions swap pages instantly. Confirmed rejections: drop shadows and glows, depth drawn with blur or bevels, rounded frames or media, hues outside the palette (technology logos excepted, as content), and code-punctuation ornaments (`#`, `@`, `<~>`) standing in for structure.

**Key Characteristics:**

- Editor structure (explorer, tabs, status bar, file names, commit log) carries the metaphor; no glyph ornaments.
- Fira Sans reads; Fira Code names files, dates, stacks, keys and status.
- Three flat surface layers plus 1px hairlines; no shadows anywhere.
- Square corners; full rounding only for status dots and commit nodes.
- Syntax colours as roles; one filled orchid button per view.
- Motion carries continuity: a gliding file highlight with a clip-path wipe, a screenshot morph into each case study, screens that grow out of their thumbnails, scroll-linked screen wipes, and rails that fill as they are read.
- Depth through motion: the window opens like a lid, the window and media lean toward the mouse, a chosen screenshot turns to face the reader, blocks settle as they scroll in and pages turn like tabs; every pose eases back to flat except the project deck, the one stack that holds its depth at rest.

## Colors

One Dark layers and syntax hues, used as roles rather than decoration: cool charcoal surfaces, gray text, and five accent hues that each have exactly one job.

### Primary

- **Syntax Orchid** (`primary`): the single filled action in a view, focus outlines (2px, 2px offset), the caret, the current nav item's underline, the icon of the open file or selected project (and of the open education or training tab), the node of the commit being read (on a case study the commit crossing the reading band; on the work log and the learning log the ring of a plain node while it crosses that band), the frame of the pressed filter chip, the left edge of the owner's team row, of an open directory row, of the contact page's open `message` row and of the 404's best fix, and the inset focus outline around a contact channel row and a 404 fix row. Selection highlight is orchid at 38%.
- **Soft Orchid** (`primary-soft`): orchid for small mono text that must stay legible on dark layers: file tabs under section headings, data keys (`builds`, `languages`, `phone`), footer column keys, the `stack` filter key, the work history's entry keys, the resume's contact, skill, `built` and `result` keys, the `me` key on the owner's team row, the contact page's channel keys and the sent receipt's keys, the 404's `quick fixes` key, the homepage education section's `education` and `training` column keys, the learning log's row keys (`where`, `result`, `courses`, `projects`, `achievements`, `by`, `skills`, `certificate`), the hover fill of the primary button, and the hover/current state in the mobile menu.
- **Orchid Ink** (`primary-ink`): text on an orchid fill (primary button, skip link).

### Secondary

- **String Green** (`success`): availability and liveness only: the status-bar dot and "Open to full-time roles", the live project dot, the HEAD pill and the `current` pill in the work history and on the resume, the resume's status line, the current commit node and a case study's HEAD node, the contact page's availability line, the "Copied" check, the sent receipt's check, and form success.
- **Keyword Amber** (`warning`): the "In development" project status, the "in progress" line on an ongoing education or training entry, "in progress" after an ongoing qualification in the hero status bar, and on the education and training pages an in-progress entry's commit node (in a 50% ring) and its `in progress` pill, and the same pill on the resume's ongoing education and training entries.
- **Error Rose** (`danger`): field borders, rings and messages for invalid input; failure status: form failure, and the 404's problem icon and count pill. Never decorative.
- **Function Blue** (`info`): outbound and inline links in prose, the about page's proof and technology links, the work history's company and project links, the resume's contact, company and project links, its Verify on <platform> links and its Education details and Training details links, the education section's Verify certificate links and the training page's Verify on <platform> links, drawn as a 50% blue underline that turns fully blue (text and line) on hover.

### Neutral

- **Sidebar Charcoal** (`bg-sunken`): window chrome and panes: title bar, explorer, tab strips, status bar, project file list, fact and contact panels, the resume card, the 404's problems panel, the education and training tab strip, inputs, the mobile menu, the footer, and the screen viewer's solid backdrop.
- **Editor Charcoal** (`bg-main`): the page and document canvas; the active tab sits on it so it reads as open, and so do the tags and the filtered-technology frame inside an open directory row.
- **Line Highlight** (`bg-raised`): hover and selected rows (a resting directory row at 50% on hover), tag fills, default-button hover, the pressed filter chip, the open directory row, the owner's team row, the contact page's open `message` row (a channel row at 50% on hover), the 404's best fix (another fix row at 50% on hover), a resting education or training tab on hover.
- **Hairline** (`line`): every 1px frame, divider and rule, the stretch of a timeline rail not yet read, and the ring of a plain commit node outside the reading band.
- **Strong Hairline** (`line-strong`): frames that must read as controls (default button, inputs, the zoom hint, a filter chip on hover), the frame around the filtered technology in a directory row, dashed empty-image frames and the dashed note of an empty education or training log, past commit nodes, the read stretch of a timeline rail (filled from each node down to the next as it crosses the middle of the screen), the hover frame of a case-study screen or a certificate image, breadcrumb separators.
- **Comment Gray** (`text`): body copy and resting UI text, including a training's skills on the training page.
- **Cursor White** (`strong`): headings, titles, active items, input text, emphasized first paragraphs, the contact page's channel values and its live local time, the broken path on the 404, education results, the learning log's row values.
- **Dim Gray** (`muted`): metadata, dates, inactive icons, helper text, the footer legal row, the contact page's column header, opens column and row icons, the 404's `404` code and fix-row arrows, the education section's date lines, awarding boards and skill lines, the learning log's date lines, the `at` before an institution, its awarding boards and its empty note, the resume's `at` before an institution, its awarding boards and training providers, inactive education and training tabs, and the demo pill.

### Named Rules

**The Syntax Roles Rule.** Each accent hue has one job: orchid acts and marks focus or the current item, green means live or available, amber means in progress, red means error, blue means a link leaves the text. A hue never appears outside its role.

**The One Filled Button Rule.** Only the primary action in a view gets an orchid fill. When a stronger action is present (a case study beside a live site), the other becomes a default framed button.

**The Tint, Not a New Hue Rule.** Quiet variants of an accent are the same hue at 10% fill with a 40% border (status pills). Tailwind palette colours and literal white are not part of the system; print alone is black on white (see Print).

**The Logos Are Content Rule.** Technology logos keep their brand colours, the way project screenshots and certificate images keep theirs: they are content shown at 16–20px beside a name, not UI colour, so they are the one place hues outside the palette appear, and no logo colour ever tints UI. Every logo comes through `TechIcon`, from `public/icons` where a usable file exists. A dark one-colour logo that would vanish on the canvas (Next.js, Express, Fastify, OpenAI, AWS, Prisma, shadcn/ui, CI/CD, Blueprint, T3 Stack) is redrawn in Cursor White through a CSS mask, and so is the generic API mark for REST APIs, which is not a brand. A stored file that fails at icon size is replaced by a glyph in the brand colour: MySQL's wordmark by Tabler's dolphin in MySQL blue `#4479A1`, and the solid black `drizzle.png` tile by the simple-icons mark in Drizzle lime `#C5F74F`. Technologies with no stored file use their simple-icons mark in its brand colour (Python, FastAPI, Stripe, Lemon Squeezy, discord.js); a mark whose brand colour is near-black (LangChain) or too dark to hold on the canvas (WordPress) takes Cursor White. Where no brand mark applies a generic glyph stands in, in Dim Gray, never a stand-in brand mark: a database for vector databases, a route for Mux, a document for PDF.js. A technology with nothing on file shows no logo: its name stands alone (in the about page's inventory a logo-sized gap keeps the names aligned), and in the directory's logo strip it is left out unless it is the technology being filtered on, which then shows its mono name.

## Typography

**Display Font:** Fira Sans (with ui-sans-serif, system-ui fallback), weights 400–700
**Body Font:** Fira Sans
**Label/Mono Font:** Fira Code (with ui-monospace fallback)

**Character:** Fira Sans and Fira Code are one family split by job: the sans carries headings and reading text with a confident, slightly condensed 600; the mono carries anything an editor would show as a token. Together they read as engineered without making a recruiter read prose in monospace.

### Hierarchy

- **Display** (600, fluid 40–68px, line-height 1.04, -0.03em): the name in the hero README, the product name on a case study, the name on the resume card, the 404's `Page not found`, and `Education` and `Training`.
- **Headline** (600, fluid 28–38px, line-height 1.15, -0.02em): section headings, a case study's closing heading, the work history's role titles and the resume's appendix headings.
- **Lead** (400, fluid ~21–28px, line-height 1.35): the one positioning line under the display (a case study's tagline), held to about 32ch; the about page's introduction is a Lead paragraph in Cursor White held to 60ch; the resume's designation is Lead in Comment Gray; the 404's "Nothing lives at" line is Lead in Comment Gray held to 60ch, its path in Fira Code, Cursor White; the education and training pages' line is Lead in Comment Gray held to 60ch.
- **Title** (600, 24px, line-height 1.25, -0.015em): project titles; role titles, case-study commit messages and learning-log commit titles step from 20px to 24px at sm; the title in an open directory row, an about-page capability title, the resume's entry titles, the contact form's "Message sent" receipt heading and the education section's degree and course titles stay at 20px.
- **Body** (400, 17px, line-height 1.65): reading paragraphs, held to 62–65ch. Dense descriptions use 16px with relaxed leading. The learning log's row values and its empty note are Body.
- **Control** (15px, line-height 1.45): button labels at 500 and field text at 400; also stack and fact values, filter chip labels, the directory's built-for column, the resume's contact values, skill values and languages, its institutions, awarding boards, training providers and Verify on <platform> links, the contact page's WhatsApp value and the sent receipt's values, the 404's problem sentence and fix notes, the education section's institutions, awarding boards and providers, the learning log's awarding boards and the training page's Verify on <platform> links.
- **Label** (500, 14px): form labels, section "more" links, social links, the education section's Verify certificate and All trainings links.
- **Code** (Fira Code 400, 14px): nav links, dates and durations, emails, contact handles, stack group keys, breadcrumbs, commit stat lines, the screen viewer's counter, the More projects links, the directory's `stack` key, live count and more toggle, the about inventory's group keys, the resume's skill keys and its Education details and Training details links, the work history's entry keys, the contact page's channel keys and values and the email row's `copy` label, the 404's fix keys, the education section's column keys, the learning log's date lines, row keys, results and skills.
- **Code UI** (Fira Code 400, 13px): file names in explorers and tab strips; the case-study fact line; the directory's slugs, status lines, opens column and status summary; the about page's fact line, proof slugs and capability stacks; the work history's fact line, date lines and built slugs; the resume's date lines, stack lines and education results; the contact page's fact line and opens column, and the sent receipt's time; the 404's `404` code; the education section's date lines, results and skill lines.
- **Code Label** (Fira Code 400, 12px): status bar, tags, file tabs, data keys, the directory's column header and chip counts, the about inventory's project counts, the resume's contact keys and its `built` and `result` keys, the contact page's column header and the sent receipt's keys, the 404's `problems` tab and `quick fixes` key, the education and training tabs, the in-progress pill and the demo pill.

The named sizes are registered with the class merger (`cn()`), so a named size and a text colour on one element never cancel each other out.

### Named Rules

**The Two Faces Rule.** Fira Sans reads; Fira Code names. File names, paths, dates, durations, stack names, keys, emails and status are mono; sentences are sans, even inside a mono list (the WhatsApp row switches to the sans because it is words, not data, and so does a language's fluency on the resume).

**The Keys Label Data Rule.** Lowercase mono keys in Soft Orchid sit directly on the data they label (definition terms, panel rows, footer columns). They are never an eyebrow above a headline; a section's file name hangs below its heading on the rule.

## Layout

A single centered container (max 1120px, 20px inline padding) holds every section. Sections breathe at 56px vertical padding, 80px from lg; content starts 32–40px below a section heading. Panes pad 20px, 32px from sm. The sticky header is 64px tall and gains a bottom hairline after 8px of scroll; anchored sections land 80px below the top.

The hero is a full-width editor window: title bar (40px), then a 236px explorer column beside the document from lg, then a status bar. Below lg the explorer hides and the header menu takes over. The projects explorer is a 264px file list beside a preview pane from lg; below lg the list becomes a horizontally scrolling tab strip. The preview pane splits into a 380px screenshot column and text from md. Other sections use asymmetric two-column grids (text plus a 340px fact panel; contact copy plus a wider form) and a hairline grid of five stack groups (2 columns at sm, 5 at lg). The homepage Education section is one column of lists, 48px apart, split into two columns 64px apart from lg; a list shown alone spans both columns, its entries in two columns 64px apart from lg. Breakpoints are Tailwind's defaults (640 / 768 / 1024px).

The projects page is a single listing inside the container: from lg every directory row shares one fixed column template with the header, and an open row splits into a 416px screenshot column and text; below lg each row collapses to three lines and the filter chips scroll sideways.

The about page is a single column inside the container: from lg each capability row is a 272px title column, the summary and a 192px stack column, 32px apart, stacking below lg; the technology inventory is a hairline grid of six groups (2 columns at sm, 3 at lg).

The resume page is a letterhead card across the container (from lg an identity column beside a 368px contact panel), then an appendix of up to six sections in two columns from lg, 48px apart with 80px between rows: Experience beside Selected projects, Education beside Training, Skills beside Languages. Below lg they stack 56px apart in source order, the order print also reads: Experience, Education, Training, Selected projects, Skills, Languages.

The works page is a single column inside the container: from sm every entry row is a 140px key column beside its content, 24px apart, the same grid for every role; below sm the key sits 8px above its content. Built projects run in one column, two from sm, three from lg.

The contact page is a single column inside the container: one column template serves the directory's header and every row, so no column ever moves. Below sm it is an 80px key column, the value and a 40px trailing slot, 12px apart; from sm the trailing slot widens to 96px and the gap to 16px; from lg it is a 160px key column, the value, a 160px opens column and the 96px trailing slot, 20px apart. From lg the open row's form starts under the value column. The contact form lays out by the width of its container, not the viewport: from 48rem wide (only the contact page provides such a container) the message sits beside the other fields.

The 404 is a single column inside the container, the problems panel spanning it. From sm each fix row is a 160px key column, the note and a trailing slot (the best fix's button, or a 16px arrow), 20px apart; below sm the key sits 4px above the note, the arrow at the right across both lines and the button 12px below. The problem row is a 16px icon column, the sentence and the `404` code, 12px apart, at every width.

The education and training pages are a single column inside the container (24px above, 32px from sm, 48px from lg): the header, then the learning log 40px below the tab strip (56px from lg). Each commit is a 20px node column beside its content, 20px apart (28px from sm), and commits are 56px apart (80px from lg). Each record's rows are held to 768px: from sm a 140px key column beside the value, 24px apart; below sm the key sits 8px above it. On phones the two tabs share the strip equally; from sm each takes its own width from the left.

On the homepage's first screen the hero explorer is the navigation, so the header's section links stay hidden until the hero scrolls away.

### Named Rules

**The Chrome Carries the Metaphor Rule.** The editor world is expressed through structure: windows, explorers, tab strips, status bars, file tabs on rules, a commit log. Reach for one of these before any decorative device.

## Elevation & Depth

The panes are flat. At rest, separation comes from three tonal layers (sunken chrome, main document, raised highlight) and 1px hairlines, never from shadows, glows, blur or bevels. The active tab overlaps the strip's bottom border by 1px so it reads as connected to the document below it. Hover raises no pane: it changes a fill to Line Highlight or a text colour to Cursor White, and where a surface tilts toward the mouse or the project deck fans it turns, casting nothing and changing no layer.

Depth is motion: perspective, tilt and parallax, applied as transforms that ease back to identity, so every movement but the deck's ends on the flat, square, 1px pane. Tilt belongs to the hero window, the one signature, and to media (project screenshots, certificates), never to other panes of text or links; the resume card stays still. The one exception to easing back is the project deck (below): its cards stand back in real depth at rest, yet each is still a flat, unlit, square pane with a 1px Hairline edge that recedes by tone alone. Under reduced motion none of it moves, and touch screens get the scroll depth and page turns but no tilt.

### Depth Vocabulary

- **Lid** (`animate-assemble`: 1000ms on quart-out `cubic-bezier(0.25, 1, 0.5, 1)`, from `perspective(1600px) rotateX(16deg) translateY(28px)`, hinged at the foot, fully opaque by 25%): the workspace window opening once on load, slow enough that the swing is seen, while the staggered rises of its contents still play. The one authored moment; nothing else reuses it.
- **Pointer tilt** (`TiltSurface`): the side under the pointer comes forward, each frame closing 12% of the way to the pointer, and the surface eases back to flat when the pointer leaves. Mouse only, gated by `(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)`. The outer box never moves, so the pointer is measured against a steady frame; an inner plane takes the transform, and `will-change` is set only while it moves, so text re-rasterizes crisp at a held angle. Strengths, reached at the edge: the hero window 3° at 2000px perspective; project screenshots 6° at 1100px, the same in the homepage explorer and the projects directory; certificate images on the training page 5° at 1100px; the case study's HEAD frame 2.5° at 2400px.
- **Parallax** (`data-depth`, in px): layers inside a tilting surface drift that far with the pointer, inside their panes: the README content 14px, the explorer list 6px, so the panes themselves never separate.
- **Turn** (`animate-turn`: 640ms expo-out, from opacity 0.35 and `perspective(1000px) rotateY(-18deg) translateX(-16px)`, hinged at the left edge): a chosen project screenshot turns to face the reader, with the preview pane's wipe on the homepage, and in the projects directory each time its row opens (it plays only in an open panel, since a closed one is inert).
- **Settle** (scroll-driven, from `perspective(1400px) rotateX(-7deg) translateY(36px)`, hinged at the top, linear over a block's first 280px on screen): the homepage sections after the hero, the work history's roles, the about page's two sections, the resume's appendix sections and the contact page's channel list. Only transforms move, so the text reads at every point; a block already on screen at load rests flat, and leaning back from a top hinge narrows the foot, so nothing widens the page.
- **Stand** (scroll-driven, from `perspective(1400px) rotateX(-16deg) scale(0.97)`, hinged at the top, over the first 360px on screen): each case-study screen stands up to face the reader together with its scroll wipe.
- **Deck** (three.js, behind the homepage explorer's chosen screenshot, from md): the next three projects in tab order, wrapping around, stand back in real 3D depth, their top edges peeking 9px each with 70px of depth between cards at rest. A mouse over the screenshot fans them to 14px and 120px, each card leaning back 0.035 rad per slot, and they drift against the pointer by depth (10px across and 6px down per slot) on the same eased values as the screenshot's 6° tilt. Choosing a project glides the cards between slots, each frame closing 14% of the way, and the deck fans briefly while they travel so the move is seen, then settles; a card leaving the front for the far end vanishes behind the screenshot rather than flying back through the deck. Cards are flat unlit panes (no light, shadow, glow or blur) with a 1 CSS px Hairline edge at any depth, fading toward Editor Charcoal in sRGB by slot (0.45, 0.315, 0.18 of full strength, then nothing). It is the one element that holds depth at rest, and the one three.js scene.
- **Page turn** (`nav-forward` / `nav-back`, at 2600px perspective): pages turn like tabs on a carousel, each offset 48px and swung 7° about the edge it leaves by, mirrored for back. The old page fades over 160ms and swings over 460ms; the new one fades in over 240ms from 140ms and swings over 520ms, expo-out. The header stays pinned and the screenshot morph is unchanged.

The settle and the stand run only with view-timeline support and no reduced-motion preference; without them the blocks are simply shown flat. Railed logs (the learning log and the case study's commits) never settle entry by entry, because leaning entries separately would break the rail.

### Named Rules

**The Flat Pane Rule.** No box-shadow, drop-shadow or glow on any surface, including the hero. Separation is a layer change or a 1px line.

**The Depth Is Motion Rule.** Depth is perspective, tilt and parallax that eases back to flat, never a shadow, glow, blur or bevel. A pane at rest is flat, square, 1px and shadowless; tilt is for the hero window and media only, and a rail's entries never lean one by one. The project deck is the one element that holds depth at rest: its cards stand back in real 3D, yet each stays a flat, unlit, square pane with a 1px Hairline edge, receding by tone alone.

## Shapes

Every frame, button, input, tag, pill, pane, tab and image is square-cornered with a 1px border. Full rounding is reserved for small status circles: availability and project-status dots (6–8px) and the 20px commit nodes on the work timeline, the case-study log and the learning log, which sit in a 5px canvas-coloured ring. Missing screenshots get a dashed Strong Hairline frame with a quiet icon and caption, at the same 33:20 ratio as real ones. Grids of cells share borders (top and left on the grid, right and bottom on each cell) so lines never double.

### Named Rules

**The Square Frame Rule.** If it has an edge, the edge is a 1px line with square corners. Roundness means "this is a status", nothing else.

## Components

### Buttons

Framed, typographic and quiet; a single orchid slab marks the one thing to do.

- **Shape:** square, 1px border, label in the control style at 500 with a 16px icon and 8px gap. Sizes: sm 32px tall (12px padding, 14px), default 40px (16px padding, 15px), lg 44px (20px padding, 16px), xl 48px (24px padding). Hero actions grow to 48px from sm.
- **Primary:** Syntax Orchid fill and border, Orchid Ink label; hover moves to Soft Orchid.
- **Default:** transparent with a Strong Hairline frame and Cursor White label; hover brightens the frame to Comment Gray and fills Line Highlight.
- **Ghost:** borderless, Comment Gray label; hover fills Line Highlight and turns the label white. Used for copy-email, source-code links and the menu toggle.
- **Link:** borderless Cursor White label that turns Soft Orchid and underlines on hover.
- **Hover / Focus:** 200ms expo-out colour transitions; keyboard focus is the global 2px orchid outline at 2px offset. Disabled drops to 50% opacity.
- **Pending:** while the contact form sends, Send message reads "Sending…" and a 2px light in Cursor White at 70% sweeps along its foot (a 1100ms loop on `cubic-bezier(0.65, 0, 0.35, 1)`), mounted only while pending and hidden under reduced motion. The label carries the state; the light shows the send is still live.
- **Resume download:** a default button labelled `resume.pdf` in mono (header and footer), `Resume.pdf` in sans (hero), or `Resume` in the docked status bar below lg, where the header hides it. On the resume card it is the view's primary lg `Resume.pdf`, beside a default lg Print button.

### Chips

- **Tag:** square, 1px Hairline frame on Line Highlight, Code Label in Comment Gray, 2px × 8px. Used for technology lists in projects and the work log. Not interactive. Inside an open directory row, which already sits on Line Highlight, tags sit on Editor Charcoal at 4px × 8px with a 16px logo before the name.
- **Filter chip:** a toggle button (`aria-pressed`), square and 36px tall with 12px inline padding: a 16px logo, the technology in Control and its project count in 12px Dim Gray mono, 8px apart. At rest a Hairline frame and Comment Gray label; hover brightens the frame to Strong Hairline and the label to Cursor White; pressed is a Syntax Orchid frame on Line Highlight with a Cursor White label (200ms colour change). An `All` chip without a logo clears the filter, and pressing the chosen chip again clears it too.
- **Status pill:** an accent at 10% fill with a 40% border and the accent as text (HEAD on the current role, `current` in the work history).
- **Demo pill:** the status pill's neutral variant, in Dim Gray on the same recipe (10% fill, 40% border, 6px inline padding, 12px mono, 20px tall), reading `demo`. It marks a sample education or training entry, which renders locally and on previews only, never on the production site. In the hero status bar it is held to the bar's 16px line height so the bar keeps its height.
- **Status line:** a 6–8px dot plus a mono label in the status hue (Live green, In development amber, Archived muted). A small project has no status and reads `Small project` in Dim Gray without a dot.

### Cards / Containers

- **Corner Style:** square (0px).
- **Background:** Sidebar Charcoal for panels and chrome; transparent over the canvas for form frames and stack cells.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px Hairline; rows inside a panel are separated by Hairline rules.
- **Internal Padding:** 20px, 32px from sm; panel rows 20px × 16px (12px for link lists).
- **Hover:** list rows and stack cells fill Line Highlight; outbound-arrow icons nudge 2px up-right (300ms expo-out).

### Inputs / Fields

- **Style:** square, 1px Strong Hairline frame on Sidebar Charcoal, Cursor White text in the control style, Dim Gray placeholder, 12px inline padding, 44px tall. Labels sit above in the label style, Cursor White, 8px gap.
- **Hover:** the frame brightens to Comment Gray.
- **Focus:** the frame turns Syntax Orchid with a 1px orchid ring; the caret is orchid.
- **Error:** the frame and ring turn Error Rose and a 14px rose message sits below, linked by aria-describedby, wiping in (the wipe) and keyed on the message, so a new message replays it; entered values are kept. While the form sends, the last attempt's errors and status line are held back, since they no longer describe the fields. An empty field and a malformed one get different messages (`Email is required`, `Enter a valid email address`).
- **Textarea:** same recipe, 10px vertical padding, relaxed leading, vertical resize.

### Navigation

- **Header:** sticky, Editor Charcoal, logo mark and first name at left (mark rotates 90° on hover). Desktop links are Code at 14px in Comment Gray; hover and the current item turn Cursor White, and the current one draws a 1px orchid underline that scales in from the left. On the homepage the current item is the section in view (`aria-current="location"`); on any other page it is the item whose page the route is on or below (`aria-current="page"`, so `projects/` stays current on a case study, `contact` on `/contact`, and `education.md` on both `/educations` and `/trainings`). The items are the workspace's files: `projects/`, `work.log`, `education.md`, `stack`, `about.md`, `contact`; `education.md` is left out when there are no education or training entries to show (decided on the server); on the homepage it opens `#education`, and elsewhere it leads to `/educations`, or to `/trainings` while only training is published. The 404 marks no item current, wherever the broken path points. A small default `resume.pdf` button closes the row.
- **Mobile:** a 44px ghost toggle opens a full-height Sidebar Charcoal panel that fades and drops in 8px; items are 56px rows in 18px mono Cursor White with hairline separators and a muted arrow, the current one in Soft Orchid; an xl primary "Download resume (PDF)" button ends the list. Escape closes it, and the page behind does not scroll.
- **Breadcrumb:** Code at 14px in Dim Gray, the path from `Workspace` to the page, through `Projects` on project pages (both back navigations), with a Strong Hairline `/` between items and none before the first; links turn Cursor White on hover, and the current page is plain Cursor White text at 500 with `aria-current`, not a link.
- **Page tabs:** the education and training pages are two tabs of one reference, `education.md` and `trainings.md`, in a 40px Sidebar Charcoal strip inside a 1px Hairline frame. Each tab is a link in 12px mono with a 14px file icon 8px before the name, 16px inline padding and a Hairline on its right. The open tab sits on Editor Charcoal in Cursor White with a Syntax Orchid icon, overlaps the strip's bottom border by 1px and carries `aria-current="page"`; the other is Dim Gray, its icon too, and fills Line Highlight with a Cursor White label on hover (200ms expo-out). On phones the tabs share the strip equally, centred; from sm each takes its own width from the left.
- **Footer:** Sidebar Charcoal with a top hairline; identity and a `resume.pdf` button, then `pages` and `elsewhere` columns of 14px links, then a hairline-separated legal row in 12px Dim Gray.

### Workspace Window

The signature component. A Hairline-framed window on Editor Charcoal: a 40px Sidebar Charcoal title bar with the path (`~/hozaifa`) and branch in 12px mono; an explorer column (an uppercase, 0.08em-tracked `Explorer` caption, then 32px file rows (`README.md`, `projects/` with its project files, `work.log`, `education.md` when there are entries to show, `stack`, `about.md`, `contact`) in Code UI with 16px icons, the open file on Line Highlight with an orchid icon, a folder's children indented 40px in Dim Gray); a tab strip with the open file's tab on the canvas; the document; and a status bar of 12px mono facts: the green availability dot and line, the derived years and project count, the latest qualification's short form (`BSc in CSE · ISTT`) followed 8px later by "in progress" in Keyword Amber when it is ongoing and the demo pill on a sample entry, and the timezone pushed right from sm. Explorer rows double as in-page navigation and follow the scroll position. On load the window opens once like a screen lid hinged at its foot (the Lid, see Elevation & Depth) while its contents rise in a stagger; with a mouse it leans up to 3° toward the pointer, the README content drifting 14px and the explorer list 6px inside their panes.

### Docked Status Bar

The hero's status bar, continued. Once the hero's own status bar passes under the header, a Sidebar Charcoal bar with a top Hairline slides up from the foot of the screen (translate and fade, 500ms expo-out): the file being read in 12px mono with an orchid file icon (`projects/`, `work.log`, `education.md`, `stack`, `about.md`), the green availability line from md, and small default buttons for Email me and, below lg, Resume. A 1px orchid reading line runs along its top edge, driven by the page scroll (`animation-timeline: scroll(root)`; hidden where unsupported). It slides away again when the contact section reaches the upper 60% of the screen, because the contact channels take over there, and it is `inert` while hidden. It respects the bottom safe area. Its actions stay framed, never orchid-filled, so the one filled button in view still belongs to the content.

### Project Explorer

A file list beside a preview pane. Each project is a `slug.md` tab with a file icon (orchid when selected) and a trailing status dot; arrow keys, Home and End move between files. The selection highlight (Line Highlight with a 1px orchid edge, left on the vertical list and bottom on the mobile strip) is one element that glides to the chosen file with a transform (300ms expo-out), and the mobile strip scrolls the chosen tab into view. Selecting a file replays the wipe on the preview pane (clip-path from the left, opacity 0.4 to 1, 420ms expo-out) while the screenshot, or its empty frame, turns to face the reader from its left edge (the Turn, 640ms expo-out); with a mouse the screenshot then leans up to 6° toward the pointer. "Read case study" is a forward navigation: the screenshot is a shared element that morphs into the case study's main image (520ms expo-out, a 4px blur at mid-flight) while the outgoing page fades and turns away 48px to the left, swinging 7° on its left edge, and the incoming one turns in from the right (the Page turn). The pane shows a framed 33:20 screenshot, title with status line, ownership context, description, tags and up to three actions.

- **Deck:** from md the next three projects (the following tabs, wrapping around) stand back behind the chosen screenshot as the Deck (see Elevation & Depth). The screenshot stays the HTML image and the morph source, layered above the canvas; the canvas reaches 44px above it, and the screenshot column drops 12px for that headroom. A card shows its screenshot cropped like the HTML frame (cover, from the top); a project with no screenshot gets a drawn face matching the HTML empty frame, Sidebar Charcoal with a dashed Strong Hairline frame and "No public screenshot" in Dim Gray Fira Code.
- **Peeking cards:** with a mouse, a peeking card is a shortcut that selects its project, with a pointer cursor. The tabs remain the accessible control and the canvas is hidden from assistive tech.
- **Conditions:** three.js loads by dynamic import only when the projects come within 600px of the viewport, as its own chunk (about 131KB gzipped) outside the homepage's initial scripts. Without WebGL the deck does not render; under reduced motion it stands static, without fan or glide; below md the explorer is unchanged.

### Section Heading

A headline with an optional "more" link (label style plus an arrow that nudges right on hover) at the far right, above a full-width Hairline rule. The section's file name hangs below the rule as a tab: Sidebar Charcoal, hairline sides and bottom, a 14px file icon and 12px Soft Orchid mono.

### Work Log

Work history as a git log: newest on top, a 1px Hairline rail, a 20px commit node per role (green with a soft green ring for the current role, Strong Hairline in a Hairline ring for past roles), mono dates and duration with a HEAD pill on the current role, then role title, company link, type, description and tags.

- **Rail fill:** the rail fills as it is read: from each node down to the next it brightens to Strong Hairline, never orchid, as that stretch crosses the middle of the screen (a view timeline, from `cover 50vh` to `cover calc(100% - 50vh)`).
- **Lit node:** a past role's ring lights Syntax Orchid while its node crosses the reading band, 50px either side of the middle line, the commit being read, and returns to Hairline once passed. The current role's node keeps its green.
- **Conditions:** both follow only the reader's scroll, like the reading line, so they stay under reduced motion; without scroll-timeline support the rail stays plain Hairline. The learning log and the case study share the rail fill.

### Education

Education and training on the homepage, after the work log, as the record employers screen on. A Section Heading (`education.md`, titled for what is published: "Education & training", "Education" or "Training"; a "Full details" more link to `/educations`, or to `/trainings` while only training is published) over two lists 40px below it, side by side from lg. Each list is a 14px Soft Orchid Code key (`education`, `training`) over a Hairline-topped list, 12px below it, of rows with 20px vertical padding over a bottom Hairline. A list shown alone spans both columns: its key is kept for screen readers only, and from lg its rows run in two columns 64px apart under the one top Hairline. The section shows real entries everywhere and demo entries locally and on previews only; with nothing to show the section, its explorer file, its nav item and the status-bar qualification are all absent.

- **Date line:** Code UI in Dim Gray, its items 12px apart: the years (`2022 – present` while ongoing) followed, on an ongoing qualification, by the in-progress status line (a 6px Keyword Amber dot and "in progress", 6px apart); for a course, `completed` and the month and year, or that in-progress line in its place; a sample entry ends with the demo pill (see Chips).
- **Education row:** the qualification 8px below as a 20px Title (600, snug leading, Cursor White, balanced), "<degree> in <subject>"; the institution and city 4px below in Control; the awarding board 2px below in Control, Dim Gray; the result 8px below in Code UI, Cursor White.
- **Training row:** the course title as the same 20px Title; provider and platform 4px below in Control, joined by `·`, or the one name when the provider is its own platform; the skills, when given, 8px below as a Dim Gray Code UI inline list (see Learning Log); then, 12px below and only for a real entry with a certificate on file, "Verify certificate" in 14px Cursor White at 500 on the 50% Function Blue underline (4px offset), turning fully blue on hover while its 16px Dim Gray outbound arrow nudges 2px up-right. A demo entry never shows the link, since it would verify nothing.
- **Limit:** the four latest trainings, then an "All trainings" link 20px below (`All N trainings` when there are more), in the label style with an arrow that nudges right, like a section's more link. It is left out when the heading's Full details link already leads to `/trainings`.

### Stack

The stack is a hairline grid of five groups (languages, frameworks, data, ai, tooling): one column, two from sm, five from lg. Each cell has its key in Soft Orchid Code above a list of technologies, each a 20px logo (see The Logos Are Content Rule) beside its name in Control, Cursor White, with a 10px gap. From lg the list is a column with a 32px rhythm, like explorer rows; below lg the items wrap in rows. The cell fills Line Highlight on hover. The items are not links.

### Case Study

A project told as its git log, newest first, on the Work Log's rail and nodes. The header runs breadcrumb, the product name in Display with its tagline in Lead, and at most two actions beside them from lg (primary "Visit live site", default "Source code", both lg and 48px from sm). Below, a fact line sits between Hairline rules: Code UI facts with no visible keys (the terms are for screen readers only), status first in String Green with an 8px dot, then role, duration, team size and the company as name and city.

- **Rail and nodes:** a 20px node column beside the content (16px gap, 28px from sm), the 1px Hairline rail running from each node to the next and stopping at the last, filling to Strong Hairline as it is read (see Work Log). HEAD's node stays String Green with a 50% ring; past nodes are Strong Hairline in a Hairline ring; the commit crossing the reading band across the middle of the screen lights its node Syntax Orchid with a 60% ring, a 300ms expo-out colour change. Commits are 64px apart, 96px from lg.
- **Commit:** an h2 message (600, 20px, 24px from sm, Cursor White) with a `git log --stat` style line 6px below it in 14px Dim Gray mono (`main · in production`, `screens/ · 8 files`, `features.md · 8 lines`, `stack · 9 packages`, `team · 5 authors`). Messages and stats are built from the data's counts, never typed, and the stat line always follows the heading; it is never an eyebrow above it. Content starts 24px below.
- **HEAD:** the HEAD pill (see Chips) follows the message from sm; on phones it moves to the start of the stat line. HEAD holds the main screenshot in a URL-bar frame: Hairline on Sidebar Charcoal, a 36px bar with a 6px green dot and the live host in 12px Dim Gray mono, then the image, which is the shared morph target from the Project Explorer. With a mouse the whole frame leans up to 2.5° toward the pointer. The description follows as Body held to 65ch.
- **Screens:** one per row at content width, 40px apart (56px from sm), each in a 1px Hairline frame that brightens to Strong Hairline on hover, with an optional Body caption 16px below. Each screen wipes in from the left and stands up from a 16° lean as it scrolls into view (the Stand). Every screenshot is a zoom-in button that opens the Screen Viewer; a 36px zoom hint (Strong Hairline frame on Sidebar Charcoal, Cursor White icon) fades in at its top right on hover and keyboard focus.
- **Features:** hairline rows, two columns from sm with a 40px gap, each a Body line in Cursor White with 12px vertical padding over a bottom Hairline.
- **Stack:** the Stack section's hairline group grid (one column, two from sm, then as many 160px-minimum columns as fit from lg; a lone last cell spans the pair at sm). Each cell is a 14px Soft Orchid key over 20px TechIcon logos beside names in Control, Cursor White, 10px apart; cells fill Line Highlight on hover.
- **Team:** hairline rows of name (Body 500, Cursor White) and role (Control, Dim Gray). The owner's row sits on Line Highlight with a 1px Syntax Orchid left edge and a visible 12px Soft Orchid `me` key after the name. From lg a 288px company fact panel sits beside the rows: Sidebar Charcoal rows of `company`, `location` (city only) and `website`, the website a blue-underlined outbound link.
- **Close:** the Hiring Close (see below), its line naming this product.
- **More projects:** a row of two 14px Dim Gray mono links that turn Cursor White on hover, their arrows nudging 2px: back to the workspace, and the next project in the list (its title in Cursor White), computed on the server. It turns forward when that project has a case study and back to the homepage explorer when it does not.

### Screen Viewer

Screens at full size in a native modal dialog, so the browser supplies the top layer, focus trap, Escape and focus return to the screenshot that opened it. The backdrop is Sidebar Charcoal, never a blur: solid while open, it fades only as a screen grows or shrinks, so the page and the thumbnail show at both ends, and the page behind does not scroll while it is open. Case-study screens and certificate images open it. A container-width column holds a mono counter at top left when there is more than one screen (14px Dim Gray, the current zero-padded number in Cursor White, `01 / 09`, announced politely), a close control that stays at top right with or without the counter, the screen fitted to the remaining height, an optional centred Cursor White Body caption held to 65ch, and centred previous and next controls when there is more than one screen. Controls are square default icon buttons at 44px on Sidebar Charcoal with 20px icons. The caller passes the dialog's whole accessible name: a case study's `<name> screens`, the training page's `Certificates`. Arrow keys step through and wrap; a click on the backdrop or the empty frame around the screen closes. The dialog fades in and out (opacity, 300ms expo-out).

- **Grow:** on open the screen grows out of its thumbnail (520ms expo-out), the contained image placed exactly over the thumbnail at the start, while the backdrop fades in over the same 520ms; the controls and caption arrive 240ms in (a 200ms fade), once the backdrop is nearly solid, so they never sit over the page's own text. A layer drawn from the thumbnail's already-loaded file stands in while the full size loads.
- **Shrink:** Escape, the close button or a click on the backdrop first shrinks the screen back into its thumbnail (300ms ease-in, `cubic-bezier(0.7, 0, 0.84, 0)`, only when the thumbnail is in view), the controls and caption fading first in 200ms and the backdrop fading out over 300ms; then the dialog closes and focus returns to the thumbnail.
- **Step:** the next screen slides in from the side it comes from (48px with a fade, 420ms expo-out).
- **Reduced motion:** no grow, shrink or slide; the dialog simply opens and closes.

### Projects Directory

Every project as one row of an `ls -l`, on the projects page. The header runs the breadcrumb, `Projects` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), and a Lead count line held to 50ch, built from the projects' owners. Below it a status summary sits between Hairline rules in Code UI: each status as its dot and count in its hue, the dot inside the value beside its screen-reader-only term (a status with no projects is left out), then the small projects in Dim Gray without a dot, so the line adds up; the terms are for screen readers only.

- **Filter:** a Soft Orchid `stack` key labels a group of filter chips (see Chips), most used technology first: `All`, the first ten, plus the chosen one when it sits past them, then a Dim Gray mono `+N more` / `fewer` toggle that turns Cursor White on hover. The live count sits at the right in 14px Dim Gray mono with the visible number in Cursor White, announced politely. The choice is written to the URL (`?stack=`) and read on the server, so a shared link renders filtered from the first paint. On phones the chip strip scrolls sideways to the screen edges instead of wrapping.
- **Filter motion:** a filter change is a transition on keyed rows, in three beats so nothing double-exposes, about 500ms in all. Rows that leave are gone in 120ms (linear, fading 8px to the left); rows that stay hold, then glide to their new places from 80ms over 300ms expo-out, their old and new faces swapping in 100ms from 80ms; new rows rise 10px in 280ms expo-out from 200ms. The Hiring Close below glides up with the shorter list.
- **Listing:** a Hairline-topped list. From lg one column template serves the header and every row, so no column ever moves: name (up to 224px), status (144px), built for (152px), stack (the rest), opens (104px) and a 20px chevron, 20px apart. The header is a 36px row of 12px Dim Gray mono column names. Rows are 56px with 16px inline padding over a bottom Hairline, each an h2 button: a 16px file icon (Dim Gray, Syntax Orchid when open) and the slug in Code UI Cursor White; the status line; the owner in Control; the logo strip; and where the row leads (`case study`, `live site`, `source`, or a dash) as plain Code UI Dim Gray data, its column name repeated for screen readers. A resting row fills Line Highlight at 50% on hover.
- **Logo strip:** up to six 18px logos 10px apart (four on phones), with a 12px Dim Gray mono `+N` for the rest; the full list is in the row's accessible text. Under a filter the chosen technology leads in a Strong Hairline frame on Editor Charcoal, with its 16px logo or, when it has none, its 12px Cursor White mono name.
- **Phones:** below lg every row is three lines with the same rhythm: slug and chevron; status line and owner in Dim Gray Control; the logo strip; at 12px × 14px padding.
- **Row targets:** each row carries its slug as its id and lands 80px below the top, so a `/projects#<slug>` link (the about page's proof links) opens that row on arrival, beside the first row in view.
- **Open row:** a row opens in place: the panel grows to its content (grid rows from 0fr to 1fr, 300ms expo-out) while the chevron turns 180° and brightens to Cursor White, and a closed panel is inert. The open row sits on Line Highlight with a 1px Syntax Orchid left edge. Any number of rows can be open; the first row in view opens on load, and a filter that hides every open row opens its first match, so a screenshot always leads.
- **Panel:** from lg a 416px screenshot column beside the text, 40px apart (stacked 24px apart below lg). The screenshot is the 33:20 Hairline frame on Sidebar Charcoal or, with none on file, the dashed Strong Hairline frame with a 24px icon and 12px mono "No screenshot yet"; a small project shows no frame and its text spans both columns. Each time its row opens the screenshot turns to face the reader from its left edge (the Turn), and with a mouse it leans up to 6° toward the pointer. Then the title (600, 20px, Cursor White), the ownership context in Dim Gray Control below lg only, the description in Body held to 60ch, the tags, and the actions 24px below: the primary "Read case study" (a forward navigation, its arrow nudging 2px right) only where a case study exists, and default "Visit live site" and "Source code" buttons otherwise beside it. Where a case study exists the screenshot is the shared `project-shot-<slug>` element, so it morphs into the case study's main image and back.

### About Page

Who Hozaifa is, what he builds and with what, on `/about-me`. There is no photo and no placeholder content (PRODUCT.md holds the truth rule); years, the first year and the current role are derived from data. The header runs the breadcrumb (`Workspace` back to the homepage About section, then `about-me`), `About me` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), and the introduction 16px below in Lead, Cursor White, held to 60ch. Then the Case Study's fact line between Hairline rules (24px below, 32px from sm): Code UI facts in Comment Gray with screen-reader-only terms, availability first in String Green with an 8px dot, then years of experience, the year shipping began, the current role and the location with its timezone.

- **What I build:** a Section Heading (`builds`) 56px below the header (80px from lg) over capability rows, each with 24px vertical padding over a bottom Hairline and a Hairline above the first. From lg a row is three columns 32px apart: the title (600, 20px, Cursor White, balanced) in 272px, the summary in Body held to 60ch, and a 192px top-aligned stack column; below lg they stack 12px apart. The proof line sits 12px under the summary: the slugs of the projects that show this work in Code UI, 20px apart, each a Cursor White link on a 50% Function Blue underline (4px offset) that turns fully blue on hover while its 14px arrow nudges 2px right. A slug opens the case study where one exists, otherwise the directory with that row open (`/projects#<slug>`). Proof comes only from projects whose own data describes the work; with none the line reads `No public project yet` in Dim Gray. The stack column lists 16px logos beside Code UI names in Comment Gray, 8px apart, wrapping in rows below lg.
- **Technologies:** a Section Heading (`stack`, with an `All projects` more link) 64px below (96px from lg) over the full inventory in the Stack section's hairline grid: six groups (programming, frameworks, data, ui & libraries, ai, platforms & tooling), one column, two from sm, three from lg, each cell padded 20px (24px from sm) with a 14px Soft Orchid Code key over a column of 20px logos beside names in Control, Cursor White, 10px apart. A technology used by listed projects links to the directory filtered on it (`/projects?stack=`): its name takes the blue underline and turns blue on hover, followed by its project count in 12px Dim Gray mono (the word "projects" for screen readers only); an unused one is plain Cursor White text. These cells do not fill on hover.
- **Close:** the Hiring Close, its line about building web products end to end.

### Work History

Every role as a changelog entry, newest first, on `/works` (the homepage Work Log's `Full history` link leads here). Dates, spans, counts and the summary are derived from data, and each role lists the projects built there. The header runs the breadcrumb (`Workspace` back to the homepage work log, then `works`), `Work history` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), and a Lead summary 12px below, held to 50ch: years, companies and the projects built at each. Then the Case Study's fact line between Hairline rules (24px below, 32px from sm): Code UI facts with screen-reader-only terms, availability first in String Green with an 8px dot, then the first year, the role count and the location with its timezone.

- **Entry head:** the first entry 48px below the header (56px from lg), the next ones 56px apart (80px from lg). An h2 in Headline (600, Cursor White): the role title, then `at` in Dim Gray at 400 and the company as a Cursor White link on a 50% Function Blue underline (4px offset) that turns fully blue on hover, its 20px Dim Gray arrow nudging 2px up-right; `at` and the company never break apart. 8px under it a Code UI line: the `current` status pill (see Chips) on the present role, the dates as `<time>` (`present` for the current role), a Dim Gray `·` and the derived span. A Hairline closes the head 16px below.
- **Rows:** a definition list of hairline rows, 16px vertical padding over a bottom Hairline. From sm each row is a 140px key column in Soft Orchid Code (`did`, `built`, `stack`, `where`) beside its content, 24px apart; below sm the key sits 8px above it. Every role has the same four rows in the same order.
- **did:** the responsibilities in Body, held to 65ch.
- **built:** the slugs of the projects built at the company in Code UI, each a Cursor White link on the blue underline that opens the case study where one exists, otherwise the directory with that row open (`/projects#<slug>`), followed by its status line: a 6px dot and a lowercase label in the status hue (`live`, `in development`, `archived`); a small project reads `small project` in Dim Gray without a dot. Items sit 10px apart, 32px between columns. A role with none reads `No projects listed for this role` in Control, Dim Gray.
- **stack:** tags (Hairline frame on Line Highlight, Code Label in Comment Gray, 4px × 8px) with a 16px logo 6px before the name, 8px apart.
- **where:** the employment type and the location (area and city) in Control, joined by `·`.
- **Close:** the Hiring Close, its line about building web products end to end.

### Resume

The CV on `/resume`: a letterhead card over an appendix. Dates, spans and the project selection are derived from data, and the introduction is the about page's. The breadcrumb runs `Workspace` (back to the homepage) then `resume`.

- **Letterhead card:** one Sidebar Charcoal pane in a 1px Hairline frame, 24px below the breadcrumb (32px from sm), carrying every way to act. From lg a Hairline splits it into the identity column and a 368px contact panel; below lg the panel sits under it behind a top Hairline. The identity column pads 24px (32px from sm): the name as the page's h1 in Display (Cursor White, balanced), the designation 8px below in Lead, the introduction 20px below in Body, Cursor White, held to 60ch, and 24px below that the primary lg `Resume.pdf` download beside a default lg Print button, 12px apart.
- **Contact panel:** a definition list of hairline rows, 14px vertical and 24px inline padding (32px from sm): an 88px key column in 12px Soft Orchid Code Label (`status`, `email`, `phone`, `website`, `github`, `linkedin`, `based`) beside its value in Control, Cursor White, 16px apart. The status is String Green with an 8px dot; email, phone, website and the profiles are links on the 50% Function Blue underline (4px offset) that turn fully blue on hover; `based` is the city with its timezone.
- **Appendix:** plain CV sections 56px below the card (80px from lg). From lg they pair as Experience beside Selected projects, Education beside Training, then Skills beside Languages; on phones they read in source order, Experience, Education, Training, Selected projects, Skills, Languages, as print does. Education and Training show only when they have entries (demo entries locally and on previews only). Each section is an h2 in Headline (Cursor White) over a bottom Hairline 12px below it, its entries 24px under the rule.
- **Experience:** every role, newest first, 32px apart. A Title at 20px (600, snug leading, Cursor White): the role, then `at` in Dim Gray at 400 and the company as a Cursor White link on the blue underline with a 16px Dim Gray outbound arrow; `at` and the company never break apart. 6px under it a Code UI line: the `current` status pill (see Chips) on the present role, the dates as `<time>`, a Dim Gray `·` and the derived span. Then, 12px apart: the summary in Body; a Control line of the projects built there, a 12px Soft Orchid mono `built` key before their titles, each a Cursor White link on the blue underline (the case study where one exists, otherwise the directory row), comma separated; and the stack as one Code UI line in Dim Gray joined by `·`.
- **Education:** every qualification, 32px apart, built like an Experience entry. A 20px Title (600, snug leading, Cursor White): "<degree> in <subject>", then `at` and the institution's short name (its full name when there is none) at 400 in Dim Gray, `at` held to the name by a non-breaking space; a short name stays whole, while a full name may wrap. 6px under it a Code UI line, its items 12px apart: the `in progress` pill (Keyword Amber, see Learning Log) first on an ongoing qualification, then the years, then the demo pill on a sample entry. Then the institution and city 12px below in Control, the awarding board under it in Control, Dim Gray, and 8px below the result: a 12px Soft Orchid mono `result` key before the value in Code UI, Cursor White, the same form as the `built` line. An `Education details` link to the education page in 14px Code (Cursor White on the blue underline) closes the list 24px below.
- **Training:** every course, 24px apart: the title as a 20px Title (600, snug leading, Cursor White, balanced), the provider and platform 4px below in Control, Dim Gray, joined by `·` (the one name when the provider is its own platform), then 6px below a Code UI line: the `in progress` pill first while unfinished, then `completed` and the month and year, or `started` and its month when known, then the demo pill on a sample entry. A real entry with a certificate link adds "Verify on <platform>" 8px below in Control, Cursor White on the blue underline with a 16px Dim Gray outbound arrow; a demo entry never shows it, since it would verify nothing. A `Training details` link to the training page closes the list 24px below, in the same 14px Code.
- **Selected projects:** the live projects, 24px apart: the title as a 20px Title link on the blue underline (the case study, otherwise `/projects#<slug>`), the ownership context 4px below in Control, Dim Gray, the description 8px below in Body, and the stack 8px below as the same Dim Gray Code UI line. An `All projects` link in 14px Code (Cursor White on the blue underline) closes the list 24px below.
- **Skills:** the about inventory's groups as hairline rows, a Hairline above the first and 12px vertical padding over a bottom Hairline: from sm a 160px key column in 14px Soft Orchid Code (`programming`, `frameworks`, `data`, ...) beside the technologies in Control, Cursor White, comma separated, 16px apart; below sm the key sits 4px above them.
- **Languages:** the same rows with the 160px column at every width: the language in Control, Cursor White, beside its fluency in Control, Dim Gray.
- **Close:** the Hiring Close, its line about building web products end to end, without its `Resume.pdf` download, which the card already carries.

### Contact

Every way to reach Hozaifa as one directory, on `/contact`, with the message row open and the form inside it. The header runs the breadcrumb (`Workspace` back to the homepage, then `contact`), `Contact` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), and one Lead line 16px below, held to 60ch. Then the Case Study's fact line between Hairline rules (24px below, 32px from sm): Code UI facts with screen-reader-only terms, availability first in String Green with an 8px dot, then the local time in Bangladesh (24-hour, in Cursor White tabular figures, `--:--` until the page hydrates, so the line never reflows) with its timezone, then `replies by email`.

- **Directory:** a Hairline-topped section 32px below the header (40px from lg). From lg a 36px header row of 12px Dim Gray mono column names (`channel`, `value`, `opens`) shares the rows' column template (see Layout). Rows sit over a bottom Hairline with 14px vertical and 12px inline padding, and from lg are 56px tall with 16px inline padding.
- **Channel rows:** `email`, `phone`, `whatsapp`, `github`, `linkedin` and `resume`, each its key in 14px Soft Orchid Code, its value in Code, Cursor White (WhatsApp's in Control, because it is words), and from lg where it leads as plain Code UI Dim Gray data (`mail app`, `call`, the host, `download`). The whole row is one link: the value's overlay takes the click, and keyboard focus draws the 2px orchid outline inset around the row. A row fills Line Highlight at 50% on hover (200ms) while its trailing 16px Dim Gray icon, an outbound arrow or the resume's download, nudges 2px up-right and turns Cursor White. Outbound rows open in a new tab.
- **Copy:** the email row's trailing slot is the ghost copy button at 36px with a 14px mono `copy` label (icon only below sm), sitting above the row's link; copying swaps its icon for a String Green check that pops in (scale 0.6 to 1 with a fade, 200ms expo-out) and its label for `Copied` for two seconds, announced politely.
- **Message row:** the open row, first in the list, on Line Highlight with a 1px Syntax Orchid left edge: the `message` key beside "Write to me from this page" in Control, Cursor White (`this page` in the opens column from lg), then the form 8px below with 28px under it (32px from lg). Send message is the view's one filled button.
- **Split form:** the shared contact form lays out by its container. In a container at least 48rem wide (only the message row provides one) the fields split into two columns 20px apart: Name, Email and Subject stacked on the left, Message filling the height of the right. Elsewhere, as on the homepage, Name and Email pair from sm above Subject and a Message at least 144px tall.
- **Sending:** the button's pending light (see Buttons) runs while the message sends, and the last attempt's field errors and status line are held back until the reply. The status line is a stable live region; each new outcome rises into it (the rise).
- **Receipt:** on the contact page a sent message replaces the form with a receipt until the visitor writes again: "Message sent" as a 20px Title (600, Cursor White) after a 20px String Green check, the heading taking focus; a Body thanks line 12px below, held to 60ch, with the sender's email in 14px Cursor White mono; 24px below, a definition list of hairline rows (a Hairline above the first, 12px vertical padding over a bottom Hairline), an 88px key column in 12px Soft Orchid Code Label (`to`, `from`, `subject`, `sent`) beside the value in Control, Cursor White, 16px apart, the sent time in Code UI in the reader's own time zone; then a default lg "Write another" button 24px below. Its rows rise one after another (the rise, from 160ms and 60ms apart, the `sent` row last at 340ms). The receipt wipes in (the Project Explorer's wipe), and "Write another" wipes the empty form back in with focus in Name; the form wipes only on that return, never on first paint. The homepage form has no receipt: a sent message shows its green status line.

### Not Found

A broken address as one problem with quick fixes, on the site's 404. The header runs the breadcrumb (`Workspace` back to the homepage, then `not found`), `Page not found` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), and one Lead line 16px below, held to 60ch: "Nothing lives at" the broken path, set in Fira Code, Cursor White, breaking anywhere so a long path never widens the page.

- **Problems panel:** a Sidebar Charcoal pane in a 1px Hairline frame, 32px below the lead (40px from sm). Its 40px tab strip over a bottom Hairline holds one `problems` tab on Editor Charcoal (overlapping the rule by 1px, a Hairline on its right, 16px inline padding) in 12px Cursor White mono, with its count 8px after it in an Error Rose status pill (10% fill, 40% border, 6px inline padding, 20px tall).
- **Problem row:** one row over a bottom Hairline, 16px padding (20px inline from sm): a 16px Error Rose circle-x set to the sentence's first line, "Cannot resolve" and the path (14px Fira Code) in Control, Cursor White, and `404` in Code UI, Dim Gray, in its own cell at the right.
- **Quick fixes:** a 12px Soft Orchid mono `quick fixes` key (16px above, 8px below) labels exactly three fixes, the real pages nearest the path: the site's pages by their workspace names (`Workspace`, `projects/`, `work.log`, `education.md`, `trainings.md`, `stack`, `about.md`, `resume`, `contact`) and every project by its slug, a project with a case study opening it and any other opening its directory row. Placeholder pages are never offered. With no match the fixes are `Workspace`, `projects/` and `contact`.
- **Best fix:** the first row, on Line Highlight between Hairlines with a 1px Syntax Orchid left edge, 16px padding (20px inline from sm): its key in Code, its note in Control, both Cursor White, and the view's one filled button, a primary lg "Open <key>" ("Back to the workspace" for `Workspace`) whose arrow nudges 2px right on hover.
- **Other fixes:** two rows over a bottom Hairline (none under the last), each one stretched link: the key in Code, Cursor White, the note in Control, Comment Gray, and a trailing 16px Dim Gray arrow; at least 56px tall from sm, 14px × 16px padding below sm. A row fills Line Highlight at 50% on hover (200ms) while its arrow nudges 2px right and turns Cursor White (300ms); keyboard focus draws the 2px orchid outline inset around the row.
- **Before hydration:** one prerendered 404 serves every missing path, so the path and its matched fixes appear once the page hydrates; until then, and without JavaScript, the lead and the problem read "this address" in Fira Sans and the fixes are the three fallbacks. A dynamic root 404 serves an empty error shell, so it stays static.

### Learning Log

Education and training as two pages of one reference, `/educations` and `/trainings`, each a git log on the Work Log's rail, newest first; the homepage Education section's `Full details` and `All trainings` links and the resume's `Education details` and `Training details` links lead here. Demo entries show locally and on previews only; with nothing published a page says so instead of showing a sample.

- **Header:** the breadcrumb (`Workspace`, back to the homepage Education section when it has entries and to the homepage otherwise, then `education` or `trainings`), `Education` or `Training` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), one Lead line 16px below in Comment Gray held to 60ch, then the page tabs 24px below (32px from sm; see Navigation).
- **Rail and nodes:** the Work Log's 1px Hairline rail and 20px nodes in a 5px canvas ring, the rail stopping at the last commit and filling as it is read. An in-progress entry's node is Keyword Amber in a 50% amber ring; a finished one is Strong Hairline in a Hairline ring that lights Syntax Orchid while it crosses the reading band (see Work Log).
- **Date line:** Code in Dim Gray, its items 12px apart: an education entry's years (`2022 – present` while ongoing); a training's `completed` and the month and year (`Sep 2025`, as in the work history), or while it is in progress `started` and its month when known. An in-progress entry follows with the `in progress` pill, Keyword Amber on the Tint recipe (10% fill, 40% border, 6px inline padding, 12px mono, 20px tall), and a sample entry ends with the demo pill (see Chips).
- **Commit title:** an h2 8px below, a 20px Title stepping to 24px at sm (600, snug leading, Cursor White, balanced). For education it is "<degree> in <subject>" followed by `at` and the institution's short name, both at 400 in Dim Gray, `at` held to the name by a non-breaking space; a short name stays whole, while a full name, used when there is no short one, may wrap. For training it is the course title.
- **Rows:** a definition list of hairline rows 20px below the title, held to 768px, a Hairline above the first and 16px vertical padding over a bottom Hairline. From sm each row is a 140px key column in 14px Soft Orchid Code beside its value in Body, Cursor White, 24px apart; below sm the key sits 8px above it. A row shows only when the entry gives it.
- **Education rows:** `where`, the institution and city, with the awarding board 2px below in Control, Dim Gray; `result` in 14px Code; `courses` as an inline list; `projects` and `achievements` as stacked lines 4px apart.
- **Training rows:** `by`, the provider and platform joined by `·`, or the one name when the provider is its own platform; `skills`, when given, an inline list in 14px Code, Comment Gray; `certificate`, when there is a verify link or an image.
- **Inline list:** the items comma separated, each kept whole, so a line breaks only between items.
- **Certificate:** "Verify on <platform>" in Control, Cursor White, on the 50% Function Blue underline (4px offset), turning fully blue on hover while its 16px Dim Gray outbound arrow nudges 2px up-right; only on a real entry, since a demo link would verify nothing. The certificate image, 16px below the link when both show, is a zoom-in button: a 1px Hairline frame around the image at its own shape and full width, with no backdrop, up to 384px wide for a landscape certificate and 240px for a portrait one, brightening to Strong Hairline on hover (200ms), with the Case Study's 36px zoom hint fading in at its top right on hover and keyboard focus; with a mouse it leans up to 5° toward the pointer, held like the paper it is. It opens the Screen Viewer (`Certificates`), captioned `<course> · <provider and platform>` as the `by` row reads, and stepping through every certificate on the page. An image shows only when one is on file; there is never an empty frame.
- **Empty log:** with nothing published, a dashed Strong Hairline note 40px below the header (56px from lg), with 32px vertical and 20px inline padding, in Body, Dim Gray: "Education details are being added." or "Training details are being added."
- **Close:** the Hiring Close, its line about building web products end to end.

### Hiring Close

The close of a work page, shared by seven pages (the case study, the projects page, the about page, the work history, the resume, and the education and training pages): a Hairline-topped section (80px above, 112px from lg; 40px inside) with the Headline question "Hiring for a full-time role?", one Body line held to 50ch that the page supplies, and two lg actions, at the right from sm: the primary "Get in touch" (a back navigation to the homepage contact) and a default `Resume.pdf` download, left out on the resume page.

### Print

The resume is the page with a print layout; its Print button opens the browser's print. The print stylesheet sets an A4 page with 14mm × 16mm margins, a light colour scheme, a white background and black text. The skip link, the header and the footer hide, and so does the whole screen resume (breadcrumb, card, appendix and close). In their place a conventional CV renders from the same data the screen reads, black on white in Fira Sans at 14px with relaxed leading: the name at 24px 600, the designation and availability on one line, the contact details as one 12px line joined by `·`, and the introduction. Then Experience, Education, Training, Selected projects, Skills and Languages, 20px apart (Education and Training only when they have entries), each headed in 14px 600 uppercase with wide tracking over a 30% black hairline, and a heading is never left at the foot of a page. Entries are 12px apart and never split across pages: a role's position and company in 600 with its dates at the right, over its summary and 12px `Built:` and `Stack:` lines; a qualification in 600 with its years at the right (followed by `(in progress)` while ongoing), over the institution, city and awarding board on one line joined by `·` and a 12px `Result:` line; a course on one line, its title in 600, a comma, then the provider and platform joined by `·` (or the one name), with the month and year it was completed at the right (`In progress since` and the start month while unfinished), over a 12px `Verify:` line giving the certificate link's host and path on a real entry; a sample qualification or course carries ` (demo)` at regular weight after its name, since demo entries print only off production; a project's name and host over its description and stack; the skills as a 176px column of the groups' print labels (`Programming languages`) beside their technologies; the languages as one line.

## Do's and Don'ts

### Do:

- **Do** build the editor world from structure: windows, explorers, tab strips, status bars, file tabs on rules, the commit log.
- **Do** set reading text in Fira Sans and tokens (files, dates, stacks, keys, emails, status) in Fira Code.
- **Do** keep one orchid-filled button per view; secondary actions are default framed buttons, tertiary ones ghost.
- **Do** separate surfaces with the three layers and 1px Hairlines; use Line Highlight for hover and selection.
- **Do** keep each accent to its syntax role, with quiet variants as the same hue at 10% fill and 40% border.
- **Do** use expo-out timing (`cubic-bezier(0.16, 1, 0.3, 1)`) by default: 200ms for colour, 300ms for small transforms and rows opening in place, 420–520ms for entrances and page turns, 640ms for the screenshot turn. The exceptions: the hero lid, 1000ms on quart-out (`cubic-bezier(0.25, 1, 0.5, 1)`) so its swing is seen; a screen shrinking home, 300ms ease-in (`cubic-bezier(0.7, 0, 0.84, 0)`); filtered-out rows, gone in 120ms linear; and the sending light, a 1100ms loop on `cubic-bezier(0.65, 0, 0.35, 1)`. All of it collapses under reduced motion. Scroll-linked effects (the reading line, the rail fill and lit nodes, the case-study screen wipe and stand, the block settle) run linear on the scroll instead; those that only follow the scroll (the reading line, the rail fill and lit nodes) stay under reduced motion.
- **Do** give depth through motion: perspective, tilt and parallax as transforms that ease back to flat, pointer tilt for the hero window and media only and for a mouse only, scroll depth that moves only transforms so text stays readable; the project deck alone holds depth at rest.
- **Do** give page transitions a direction only through links that declare one (`transitionTypes` `nav-forward` / `nav-back`); the header stays pinned through them, and any other navigation swaps instantly.
- **Do** derive every number shown in chrome (years, project counts, role spans) from data.

### Don't:

- **Don't** add box-shadows, drop-shadows or glows, including behind the hero.
- **Don't** tilt panes of text or links (rows, panels, the resume card), lean a rail's entries one by one, draw depth with blur, bevels or lighting, or add 3D scenes beyond the project deck; outside the deck, depth is motion that returns to flat.
- **Don't** round frames, buttons, tags, panes or media; full rounding is for status dots and commit nodes only.
- **Don't** use Tailwind palette hues or literal white (`text-white`); use `strong` and the syntax roles. Brand colours belong to logos only.
- **Don't** decorate with code punctuation (`#` before headings, `@` before labels, `<~>` on buttons); the metaphor lives in structure.
- **Don't** set paragraphs in Fira Code or use mono keys as eyebrows above headlines.
- **Don't** use orchid for long text, large fills or anything that is not an action, focus or current item.
