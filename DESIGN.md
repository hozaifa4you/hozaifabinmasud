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

Motion is brief and expo-out, and it carries continuity rather than decoration. The workspace window assembles once on load (a staggered rise). In the project explorer the selection highlight glides to the chosen file and the preview pane wipes in from the left. Opening a case study from the homepage explorer or the projects directory morphs the project screenshot into its place on the new page while the rest of the page slides forward, and the breadcrumb back reverses it. In the projects directory a row opens in place, growing to its content while its chevron turns. On a case study each screen wipes in from the left as it scrolls into view, the commit being read lights its node orchid, and a screen opened full size fades in. Past the hero, the status bar docks to the foot of the screen with a scroll-driven reading line. State changes are 200ms colour shifts. Reduced motion collapses all of it, and browsers without view transitions swap pages instantly. Confirmed rejections: drop shadows and glows, rounded frames or media, hues outside the palette (technology logos excepted, as content), and code-punctuation ornaments (`#`, `@`, `<~>`) standing in for structure.

**Key Characteristics:**

- Editor structure (explorer, tabs, status bar, file names, commit log) carries the metaphor; no glyph ornaments.
- Fira Sans reads; Fira Code names files, dates, stacks, keys and status.
- Three flat surface layers plus 1px hairlines; no shadows anywhere.
- Square corners; full rounding only for status dots and commit nodes.
- Syntax colours as roles; one filled orchid button per view.
- Expo-out motion: one-time window assembly, a gliding file highlight with a clip-path wipe, a screenshot morph into each case study, and scroll-linked screen wipes down its log.

## Colors

One Dark layers and syntax hues, used as roles rather than decoration: cool charcoal surfaces, gray text, and five accent hues that each have exactly one job.

### Primary

- **Syntax Orchid** (`primary`): the single filled action in a view, focus outlines (2px, 2px offset), the caret, the active nav underline, the icon of the open file or selected project, the node of the case-study commit being read, the frame of the pressed filter chip, and the left edge of the owner's team row and of an open directory row. Selection highlight is orchid at 38%.
- **Soft Orchid** (`primary-soft`): orchid for small mono text that must stay legible on dark layers: file tabs under section headings, data keys (`builds`, `languages`, `phone`), footer column keys, the `stack` filter key, the `me` key on the owner's team row, the hover fill of the primary button, and the hover/current state in the mobile menu.
- **Orchid Ink** (`primary-ink`): text on an orchid fill (primary button, skip link).

### Secondary

- **String Green** (`success`): availability and liveness only: the status-bar dot and "Open to full-time roles", the live project dot, the HEAD pill, the current commit node and a case study's HEAD node, the "Copied" check, and form success.
- **Keyword Amber** (`warning`): the "In development" project status.
- **Error Rose** (`danger`): field borders, rings and messages for invalid input; form failure status. Never decorative.
- **Function Blue** (`info`): outbound and inline links in prose, and the about page's proof and technology links, drawn as a 50% blue underline that turns fully blue (text and line) on hover.

### Neutral

- **Sidebar Charcoal** (`bg-sunken`): window chrome and panes: title bar, explorer, tab strips, status bar, project file list, fact and contact panels, inputs, the mobile menu, the footer, and the screen viewer's solid backdrop.
- **Editor Charcoal** (`bg-main`): the page and document canvas; the active tab sits on it so it reads as open, and so do the tags and the filtered-technology frame inside an open directory row.
- **Line Highlight** (`bg-raised`): hover and selected rows (a resting directory row at 50% on hover), tag fills, default-button hover, the pressed filter chip, the open directory row, the owner's team row.
- **Hairline** (`line`): every 1px frame, divider, rule and timeline rail.
- **Strong Hairline** (`line-strong`): frames that must read as controls (default button, inputs, the zoom hint, a filter chip on hover), the frame around the filtered technology in a directory row, dashed empty-image frames, past commit nodes, the hover frame of a case-study screen, breadcrumb separators.
- **Comment Gray** (`text`): body copy and resting UI text.
- **Cursor White** (`strong`): headings, titles, active items, input text, emphasized first paragraphs. (`text-secondary` is a legacy alias with the same value; use `strong`.)
- **Dim Gray** (`muted`): metadata, dates, inactive icons, helper text, the footer legal row.

### Named Rules

**The Syntax Roles Rule.** Each accent hue has one job: orchid acts and marks focus or the current item, green means live or available, amber means in progress, red means error, blue means a link leaves the text. A hue never appears outside its role.

**The One Filled Button Rule.** Only the primary action in a view gets an orchid fill. When a stronger action is present (a case study beside a live site), the other becomes a default framed button.

**The Tint, Not a New Hue Rule.** Quiet variants of an accent are the same hue at 10% fill with a 40% border (status pills, badges) or 15% fill (outline hover). Tailwind palette colours and literal white are not part of the system.

**The Logos Are Content Rule.** Technology logos keep their brand colours, the way project screenshots keep theirs: they are content shown at 16–20px beside a name, not UI colour, so they are the one place hues outside the palette appear, and no logo colour ever tints UI. Every logo comes through `TechIcon`, from `public/icons` where a usable file exists. A dark one-colour logo that would vanish on the canvas (Next.js, Express, Fastify, OpenAI, AWS, Prisma, shadcn/ui, CI/CD, Blueprint, T3 Stack) is redrawn in Cursor White through a CSS mask, and so is the generic API mark for REST APIs, which is not a brand. A stored file that fails at icon size is replaced by a glyph in the brand colour: MySQL's wordmark by Tabler's dolphin in MySQL blue `#4479A1`, and the solid black `drizzle.png` tile by the simple-icons mark in Drizzle lime `#C5F74F`. Technologies with no stored file use their simple-icons mark in its brand colour (Python, FastAPI, Stripe, Lemon Squeezy, discord.js); a mark whose brand colour is near-black (LangChain) takes Cursor White. Where no brand mark applies a generic glyph stands in, in Dim Gray, never a stand-in brand mark: a database for vector databases, a route for Mux, a document for PDF.js. A technology with nothing on file shows no logo: its name stands alone (in the about page's inventory a logo-sized gap keeps the names aligned), and in the directory's logo strip it is left out unless it is the technology being filtered on, which then shows its mono name.

## Typography

**Display Font:** Fira Sans (with ui-sans-serif, system-ui fallback), weights 400–700
**Body Font:** Fira Sans
**Label/Mono Font:** Fira Code (with ui-monospace fallback)

**Character:** Fira Sans and Fira Code are one family split by job: the sans carries headings and reading text with a confident, slightly condensed 600; the mono carries anything an editor would show as a token. Together they read as engineered without making a recruiter read prose in monospace.

### Hierarchy

- **Display** (600, fluid 40–68px, line-height 1.04, -0.03em): the name in the hero README and the product name on a case study.
- **Headline** (600, fluid 28–38px, line-height 1.15, -0.02em): section headings and a case study's closing heading.
- **Lead** (400, fluid ~21–28px, line-height 1.35): the one positioning line under the display (a case study's tagline), held to about 32ch; the about page's introduction is a Lead paragraph in Cursor White held to 60ch.
- **Title** (600, 24px, line-height 1.25, -0.015em): project titles; role titles and case-study commit messages step from 20px to 24px at sm; the title in an open directory row and an about-page capability title stay at 20px.
- **Body** (400, 17px, line-height 1.65): reading paragraphs, held to 62–65ch. Dense descriptions use 16px with relaxed leading.
- **Control** (15px, line-height 1.45): button labels at 500 and field text at 400; also stack and fact values, filter chip labels and the directory's built-for column.
- **Label** (500, 14px): form labels, section "more" links, social links.
- **Code** (Fira Code 400, 14px): nav links, dates and durations, emails, contact handles, stack group keys, breadcrumbs, commit stat lines, the screen viewer's counter, the More projects links, the directory's `stack` key, live count and more toggle, the about inventory's group keys.
- **Code UI** (Fira Code 400, 13px): file names in explorers and tab strips; the case-study fact line; the directory's slugs, status lines, opens column and status summary; the about page's fact line, proof slugs and capability stacks.
- **Code Label** (Fira Code 400, 12px): status bar, tags, file tabs, data keys, the directory's column header and chip counts, the about inventory's project counts.

The named sizes are registered with the class merger (`cn()`), so a named size and a text colour on one element never cancel each other out.

### Named Rules

**The Two Faces Rule.** Fira Sans reads; Fira Code names. File names, paths, dates, durations, stack names, keys, emails and status are mono; sentences are sans, even inside a mono list (the WhatsApp row switches to the sans because it is words, not data).

**The Keys Label Data Rule.** Lowercase mono keys in Soft Orchid sit directly on the data they label (definition terms, panel rows, footer columns). They are never an eyebrow above a headline; a section's file name hangs below its heading on the rule.

## Layout

A single centered container (max 1120px, 20px inline padding) holds every section. Sections breathe at 56px vertical padding, 80px from lg; content starts 32–40px below a section heading. Panes pad 20px, 32px from sm. The sticky header is 64px tall and gains a bottom hairline after 8px of scroll; anchored sections land 80px below the top.

The hero is a full-width editor window: title bar (40px), then a 236px explorer column beside the document from lg, then a status bar. Below lg the explorer hides and the header menu takes over. The projects explorer is a 264px file list beside a preview pane from lg; below lg the list becomes a horizontally scrolling tab strip. The preview pane splits into a 380px screenshot column and text from md. Other sections use asymmetric two-column grids (text plus a 340px fact panel; contact copy plus a wider form) and a hairline grid of five stack groups (2 columns at sm, 5 at lg). Breakpoints are Tailwind's defaults (640 / 768 / 1024px).

The projects page is a single listing inside the container: from lg every directory row shares one fixed column template with the header, and an open row splits into a 416px screenshot column and text; below lg each row collapses to three lines and the filter chips scroll sideways.

The about page is a single column inside the container: from lg each capability row is a 272px title column, the summary and a 192px stack column, 32px apart, stacking below lg; the technology inventory is a hairline grid of six groups (2 columns at sm, 3 at lg).

On the homepage's first screen the hero explorer is the navigation, so the header's section links stay hidden until the hero scrolls away.

### Named Rules

**The Chrome Carries the Metaphor Rule.** The editor world is expressed through structure: windows, explorers, tab strips, status bars, file tabs on rules, a commit log. Reach for one of these before any decorative device.

## Elevation & Depth

The system is flat. Depth comes from three tonal layers (sunken chrome, main document, raised highlight) and 1px hairlines, never from shadows, glows or blur. The active tab overlaps the strip's bottom border by 1px so it reads as connected to the document below it. Hover lifts nothing; it changes a fill to Line Highlight or a text colour to Cursor White.

### Named Rules

**The Flat Pane Rule.** No box-shadow, drop-shadow or glow on any surface, including the hero. Separation is a layer change or a 1px line.

## Shapes

Every frame, button, input, tag, pill, pane, tab and image is square-cornered with a 1px border. Full rounding is reserved for small status circles: availability and project-status dots (6–8px) and the 20px commit nodes on the work timeline and the case-study log, which sit in a 5px canvas-coloured ring. Missing screenshots get a dashed Strong Hairline frame with a quiet icon and caption, at the same 33:20 ratio as real ones. Grids of cells share borders (top and left on the grid, right and bottom on each cell) so lines never double.

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
- **Resume download:** a default button labelled `resume.pdf` in mono (header and footer), `Resume.pdf` in sans (hero), or `Resume` in the docked status bar below lg, where the header hides it.
- The `outline`, `outlineSecondary` and `secondary` variants exist for the older pages; new surfaces use primary, default, ghost and link.

### Chips

- **Tag:** square, 1px Hairline frame on Line Highlight, Code Label in Comment Gray, 2px × 8px. Used for technology lists in projects and the work log. Not interactive. Inside an open directory row, which already sits on Line Highlight, tags sit on Editor Charcoal at 4px × 8px with a 16px logo before the name.
- **Filter chip:** a toggle button (`aria-pressed`), square and 36px tall with 12px inline padding: a 16px logo, the technology in Control and its project count in 12px Dim Gray mono, 8px apart. At rest a Hairline frame and Comment Gray label; hover brightens the frame to Strong Hairline and the label to Cursor White; pressed is a Syntax Orchid frame on Line Highlight with a Cursor White label (200ms colour change). An `All` chip without a logo clears the filter, and pressing the chosen chip again clears it too.
- **Status pill:** an accent at 10% fill with a 40% border and the accent as text (HEAD on the current role; the Badge primitive's orchid, blue and green variants follow the same recipe, with a 6px green dot on "active").
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
- **Error:** the frame and ring turn Error Rose and a 14px rose message sits below, linked by aria-describedby; entered values are kept.
- **Textarea:** same recipe, 10px vertical padding, relaxed leading, vertical resize.

### Navigation

- **Header:** sticky, Editor Charcoal, logo mark and first name at left (mark rotates 90° on hover). Desktop links are Code at 14px in Comment Gray; hover and the active section turn Cursor White, and the active one draws a 1px orchid underline that scales in from the left. A small default `resume.pdf` button closes the row.
- **Mobile:** a 44px ghost toggle opens a full-height Sidebar Charcoal panel that fades and drops in 8px; items are 56px rows in 18px mono Cursor White with hairline separators and a muted arrow, the current one in Soft Orchid; an xl primary "Download resume (PDF)" button ends the list. Escape closes it, and the page behind does not scroll.
- **Breadcrumb:** Code at 14px in Dim Gray, the path from `Workspace` to the page, through `Projects` on project pages (both back navigations), with a Strong Hairline `/` between items and none before the first; links turn Cursor White on hover, and the current page is plain Cursor White text at 500 with `aria-current`, not a link.
- **Footer:** Sidebar Charcoal with a top hairline; identity and a `resume.pdf` button, then `pages` and `elsewhere` columns of 14px links, then a hairline-separated legal row in 12px Dim Gray.

### Workspace Window

The signature component. A Hairline-framed window on Editor Charcoal: a 40px Sidebar Charcoal title bar with the path (`~/hozaifa`) and branch in 12px mono; an explorer column (an uppercase, 0.08em-tracked `Explorer` caption, then 32px file rows in Code UI with 16px icons, the open file on Line Highlight with an orchid icon, a folder's children indented 40px in Dim Gray); a tab strip with the open file's tab on the canvas; the document; and a status bar of 12px mono facts with a green availability dot and the timezone pushed right. Explorer rows double as in-page navigation and follow the scroll position.

### Docked Status Bar

The hero's status bar, continued. Once the hero's own status bar passes under the header, a Sidebar Charcoal bar with a top Hairline slides up from the foot of the screen (translate and fade, 500ms expo-out): the file being read in 12px mono with an orchid file icon (`projects/`, `work.log`, `stack`, `about.md`), the green availability line from md, and small default buttons for Email me and, below lg, Resume. A 1px orchid reading line runs along its top edge, driven by the page scroll (`animation-timeline: scroll(root)`; hidden where unsupported). It slides away again when the contact section reaches the upper 60% of the screen, because the contact channels take over there, and it is `inert` while hidden. It respects the bottom safe area. Its actions stay framed, never orchid-filled, so the one filled button in view still belongs to the content.

### Project Explorer

A file list beside a preview pane. Each project is a `slug.md` tab with a file icon (orchid when selected) and a trailing status dot; arrow keys, Home and End move between files. The selection highlight (Line Highlight with a 1px orchid edge, left on the vertical list and bottom on the mobile strip) is one element that glides to the chosen file with a transform (300ms expo-out), and the mobile strip scrolls the chosen tab into view. Selecting a file replays the wipe on the preview pane (clip-path from the left, opacity 0.4 to 1, 420ms expo-out). "Read case study" is a forward navigation: the screenshot is a shared element that morphs into the case study's main image (520ms expo-out, a 4px blur at mid-flight) while the outgoing page fades and slides 48px left and the incoming one follows from the right. The pane shows a framed 33:20 screenshot, title with status line, ownership context, description, tags and up to three actions.

### Section Heading

A headline with an optional "more" link (label style plus an arrow that nudges right on hover) at the far right, above a full-width Hairline rule. The section's file name hangs below the rule as a tab: Sidebar Charcoal, hairline sides and bottom, a 14px file icon and 12px Soft Orchid mono.

### Work Log

Work history as a git log: newest on top, a 1px Hairline rail, a 20px commit node per role (green with a soft green ring for the current role, Strong Hairline for past roles), mono dates and duration with a HEAD pill on the current role, then role title, company link, type, description and tags.

### Stack

The stack is a hairline grid of five groups (languages, frameworks, data, ai, tooling): one column, two from sm, five from lg. Each cell has its key in Soft Orchid Code above a list of technologies, each a 20px logo (see The Logos Are Content Rule) beside its name in Control, Cursor White, with a 10px gap. From lg the list is a column with a 32px rhythm, like explorer rows; below lg the items wrap in rows. The cell fills Line Highlight on hover. The items are not links.

### Case Study

A project told as its git log, newest first, on the Work Log's rail and nodes. The header runs breadcrumb, the product name in Display with its tagline in Lead, and at most two actions beside them from lg (primary "Visit live site", default "Source code", both lg and 48px from sm). Below, a fact line sits between Hairline rules: Code UI facts with no visible keys (the terms are for screen readers only), status first in String Green with an 8px dot, then role, duration, team size and the company as name and city.

- **Rail and nodes:** a 20px node column beside the content (16px gap, 28px from sm), the 1px Hairline rail running from each node to the next and stopping at the last. HEAD's node stays String Green with a 50% ring; past nodes are Strong Hairline in a Hairline ring; the commit crossing the reading band across the middle of the screen lights its node Syntax Orchid with a 60% ring, a 300ms expo-out colour change. Commits are 64px apart, 96px from lg.
- **Commit:** an h2 message (600, 20px, 24px from sm, Cursor White) with a `git log --stat` style line 6px below it in 14px Dim Gray mono (`main · in production`, `screens/ · 8 files`, `features.md · 8 lines`, `stack · 9 packages`, `team · 5 authors`). Messages and stats are built from the data's counts, never typed, and the stat line always follows the heading; it is never an eyebrow above it. Content starts 24px below.
- **HEAD:** the HEAD pill (see Chips) follows the message from sm; on phones it moves to the start of the stat line. HEAD holds the main screenshot in a URL-bar frame: Hairline on Sidebar Charcoal, a 36px bar with a 6px green dot and the live host in 12px Dim Gray mono, then the image, which is the shared morph target from the Project Explorer. The description follows as Body held to 65ch.
- **Screens:** one per row at content width, 40px apart (56px from sm), each in a 1px Hairline frame that brightens to Strong Hairline on hover, with an optional Body caption 16px below. Every screenshot is a zoom-in button that opens the Screen Viewer; a 36px zoom hint (Strong Hairline frame on Sidebar Charcoal, Cursor White icon) fades in at its top right on hover and keyboard focus.
- **Features:** hairline rows, two columns from sm with a 40px gap, each a Body line in Cursor White with 12px vertical padding over a bottom Hairline.
- **Stack:** the Stack section's hairline group grid (one column, two from sm, then as many 160px-minimum columns as fit from lg; a lone last cell spans the pair at sm). Each cell is a 14px Soft Orchid key over 20px TechIcon logos beside names in Control, Cursor White, 10px apart; cells fill Line Highlight on hover.
- **Team:** hairline rows of name (Body 500, Cursor White) and role (Control, Dim Gray). The owner's row sits on Line Highlight with a 1px Syntax Orchid left edge and a visible 12px Soft Orchid `me` key after the name. From lg a 288px company fact panel sits beside the rows: Sidebar Charcoal rows of `company`, `location` (city only) and `website`, the website a blue-underlined outbound link.
- **Close:** the Hiring Close (see below), its line naming this product.
- **More projects:** a row of two 14px Dim Gray mono links that turn Cursor White on hover, their arrows nudging 2px: back to the workspace, and the next project in the list (its title in Cursor White), computed on the server. It slides forward when that project has a case study and back to the homepage explorer when it does not.

### Screen Viewer

Screens at full size in a native modal dialog, so the browser supplies the top layer, focus trap, Escape and focus return to the screenshot that opened it. The backdrop is solid Sidebar Charcoal, never a blur or a translucent scrim, and the page behind does not scroll while it is open. A container-width column holds a mono counter at top left (14px Dim Gray, the current zero-padded number in Cursor White, `01 / 09`, announced politely), a close control at top right, the screen fitted to the remaining height, an optional centred Cursor White Body caption held to 65ch, and centred previous and next controls when there is more than one screen. Controls are square default icon buttons at 44px on Sidebar Charcoal with 20px icons. Arrow keys step through and wrap; a click on the backdrop or the empty frame around the screen closes. The dialog fades in and out (opacity, 300ms expo-out) and each screen change replays the wipe.

### Projects Directory

Every project as one row of an `ls -l`, on the projects page. The header runs the breadcrumb, `Projects` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), and a Lead count line held to 50ch, built from the projects' owners. Below it a status summary sits between Hairline rules in Code UI: each status as its dot and count in its hue (a status with no projects is left out), then the small projects in Dim Gray without a dot, so the line adds up; the terms are for screen readers only.

- **Filter:** a Soft Orchid `stack` key labels a group of filter chips (see Chips), most used technology first: `All`, the first ten, plus the chosen one when it sits past them, then a Dim Gray mono `+N more` / `fewer` toggle that turns Cursor White on hover. The live count sits at the right in 14px Dim Gray mono with the visible number in Cursor White, announced politely. The choice is written to the URL (`?stack=`) and read on the server, so a shared link renders filtered from the first paint. On phones the chip strip scrolls sideways to the screen edges instead of wrapping.
- **Listing:** a Hairline-topped list. From lg one column template serves the header and every row, so no column ever moves: name (up to 224px), status (144px), built for (152px), stack (the rest), opens (104px) and a 20px chevron, 20px apart. The header is a 36px row of 12px Dim Gray mono column names. Rows are 56px with 16px inline padding over a bottom Hairline, each an h2 button: a 16px file icon (Dim Gray, Syntax Orchid when open) and the slug in Code UI Cursor White; the status line; the owner in Control; the logo strip; and where the row leads (`case study`, `live site`, `source`, or a dash) as plain Code UI Dim Gray data, its column name repeated for screen readers. A resting row fills Line Highlight at 50% on hover.
- **Logo strip:** up to six 18px logos 10px apart (four on phones), with a 12px Dim Gray mono `+N` for the rest; the full list is in the row's accessible text. Under a filter the chosen technology leads in a Strong Hairline frame on Editor Charcoal, with its 16px logo or, when it has none, its 12px Cursor White mono name.
- **Phones:** below lg every row is three lines with the same rhythm: slug and chevron; status line and owner in Dim Gray Control; the logo strip; at 12px × 14px padding.
- **Row targets:** each row carries its slug as its id and lands 80px below the top, so a `/projects#<slug>` link (the about page's proof links) opens that row on arrival, beside the first row in view.
- **Open row:** a row opens in place: the panel grows to its content (grid rows from 0fr to 1fr, 300ms expo-out) while the chevron turns 180° and brightens to Cursor White, and a closed panel is inert. The open row sits on Line Highlight with a 1px Syntax Orchid left edge. Any number of rows can be open; the first row in view opens on load, and a filter that hides every open row opens its first match, so a screenshot always leads.
- **Panel:** from lg a 416px screenshot column beside the text, 40px apart (stacked 24px apart below lg). The screenshot is the 33:20 Hairline frame on Sidebar Charcoal or, with none on file, the dashed Strong Hairline frame with a 24px icon and 12px mono "No screenshot yet"; a small project shows no frame and its text spans both columns. Then the title (600, 20px, Cursor White), the ownership context in Dim Gray Control below lg only, the description in Body held to 60ch, the tags, and the actions 24px below: the primary "Read case study" (a forward navigation, its arrow nudging 2px right) only where a case study exists, and default "Visit live site" and "Source code" buttons otherwise beside it. Where a case study exists the screenshot is the shared `project-shot-<slug>` element, so it morphs into the case study's main image and back.

### About Page

Who Hozaifa is, what he builds and with what, on `/about-me`. There is no photo and no placeholder content (PRODUCT.md holds the truth rule); years, the first year and the current role are derived from data. The header runs the breadcrumb (`Workspace` back to the homepage About section, then `about-me`), `About me` in Display (Cursor White, 20px below the breadcrumb, 24px from sm), and the introduction 16px below in Lead, Cursor White, held to 60ch. Then the Case Study's fact line between Hairline rules (24px below, 32px from sm): Code UI facts in Comment Gray with screen-reader-only terms, availability first in String Green with an 8px dot, then years of experience, the year shipping began, the current role and the location with its timezone.

- **What I build:** a Section Heading (`builds`) 56px below the header (80px from lg) over capability rows, each with 24px vertical padding over a bottom Hairline and a Hairline above the first. From lg a row is three columns 32px apart: the title (600, 20px, Cursor White, balanced) in 272px, the summary in Body held to 60ch, and a 192px top-aligned stack column; below lg they stack 12px apart. The proof line sits 12px under the summary: the slugs of the projects that show this work in Code UI, 20px apart, each a Cursor White link on a 50% Function Blue underline (4px offset) that turns fully blue on hover while its 14px arrow nudges 2px right. A slug opens the case study where one exists, otherwise the directory with that row open (`/projects#<slug>`). Proof comes only from projects whose own data describes the work; with none the line reads `No public project yet` in Dim Gray. The stack column lists 16px logos beside Code UI names in Comment Gray, 8px apart, wrapping in rows below lg.
- **Technologies:** a Section Heading (`stack`, with an `All projects` more link) 64px below (96px from lg) over the full inventory in the Stack section's hairline grid: six groups (languages, frameworks, data, ui & libraries, ai, platforms & tooling), one column, two from sm, three from lg, each cell padded 20px (24px from sm) with a 14px Soft Orchid Code key over a column of 20px logos beside names in Control, Cursor White, 10px apart. A technology used by listed projects links to the directory filtered on it (`/projects?stack=`): its name takes the blue underline and turns blue on hover, followed by its project count in 12px Dim Gray mono (the word "projects" for screen readers only); an unused one is plain Cursor White text. These cells do not fill on hover.
- **Close:** the Hiring Close, its line about building web products end to end.

### Hiring Close

The close of a work page, shared by the case study, the projects page and the about page: a Hairline-topped section (80px above, 112px from lg; 40px inside) with the Headline question "Hiring for a full-time role?", one Body line held to 50ch that the page supplies, and two lg actions, at the right from sm: the primary "Get in touch" (a back navigation to the homepage contact) and a default `Resume.pdf` download.

## Do's and Don'ts

### Do:

- **Do** build the editor world from structure: windows, explorers, tab strips, status bars, file tabs on rules, the commit log.
- **Do** set reading text in Fira Sans and tokens (files, dates, stacks, keys, emails, status) in Fira Code.
- **Do** keep one orchid-filled button per view; secondary actions are default framed buttons, tertiary ones ghost.
- **Do** separate surfaces with the three layers and 1px Hairlines; use Line Highlight for hover and selection.
- **Do** keep each accent to its syntax role, with quiet variants as the same hue at 10% fill and 40% border.
- **Do** use expo-out timing (`cubic-bezier(0.16, 1, 0.3, 1)`): 200ms for colour, 300ms for small transforms and rows opening in place, 420–520ms for entrances and page transitions, all collapsed under reduced motion. Scroll-linked effects (the reading line, the case-study screen wipe) run linear on the scroll instead.
- **Do** give page transitions a direction only through links that declare one (`transitionTypes` `nav-forward` / `nav-back`); the header stays pinned through them, and any other navigation swaps instantly.
- **Do** derive every number shown in chrome (years, project counts) from data.

### Don't:

- **Don't** add box-shadows, drop-shadows or glows, including behind the hero.
- **Don't** round frames, buttons, tags, panes or media; full rounding is for status dots and commit nodes only.
- **Don't** use Tailwind palette hues or literal white (`text-white`); use `strong` and the syntax roles. Brand colours belong to logos only.
- **Don't** decorate with code punctuation (`#` before headings, `@` before labels, `<~>` on buttons); the metaphor lives in structure.
- **Don't** set paragraphs in Fira Code or use mono keys as eyebrows above headlines.
- **Don't** use orchid for long text, large fills or anything that is not an action, focus or current item.
