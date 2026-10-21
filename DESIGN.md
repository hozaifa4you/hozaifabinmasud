---
name: Hozaifa Bin Masud — Portfolio
description: A developer portfolio that reads like a file open in a One Dark code editor.
colors:
   primary: '#C778DD'
   bg-main: '#282C33'
   text: '#ABB2BF'
   text-secondary: '#FFFFFF'
typography:
   display:
      fontFamily: 'Fira Code, monospace'
      fontSize: '48px'
      fontWeight: 700
      lineHeight: 1.25
   headline:
      fontFamily: 'Fira Code, monospace'
      fontSize: '32px'
      fontWeight: 500
      lineHeight: 1.25
   title:
      fontFamily: 'Fira Code, monospace'
      fontSize: '24px'
      fontWeight: 500
      lineHeight: 1.333
   body:
      fontFamily: 'Fira Code, monospace'
      fontSize: '16px'
      fontWeight: 400
      lineHeight: 1.5
   label:
      fontFamily: 'Fira Code, monospace'
      fontSize: '14px'
      fontWeight: 500
      lineHeight: 1.429
rounded:
   none: '0px'
   full: '9999px'
spacing:
   box: '8px'
   gutter: '10px'
   card: '16px'
   section: '50px'
components:
   button-default:
      backgroundColor: 'transparent'
      textColor: '{colors.text}'
      rounded: '{rounded.none}'
      padding: '8px 16px'
      height: '37px'
   button-default-hover:
      backgroundColor: '#ABB2BF33'
      textColor: '{colors.text-secondary}'
   button-outline:
      backgroundColor: 'transparent'
      textColor: '{colors.text-secondary}'
      rounded: '{rounded.none}'
      padding: '8px 16px'
      height: '37px'
   button-outline-hover:
      backgroundColor: '#C778DD33'
      textColor: '{colors.text-secondary}'
   button-outline-active:
      backgroundColor: '#C778DD33'
      textColor: '{colors.text-secondary}'
   button-link:
      backgroundColor: 'transparent'
      textColor: '{colors.text-secondary}'
   button-link-hover:
      textColor: '{colors.primary}'
   input:
      backgroundColor: 'transparent'
      textColor: '{colors.text}'
      rounded: '{rounded.none}'
      padding: '16px 10px 10px'
   badge:
      backgroundColor: '#C778DD26'
      textColor: '{colors.primary}'
      rounded: '{rounded.full}'
      padding: '4px 12px'
   card:
      backgroundColor: 'transparent'
      textColor: '{colors.text}'
      rounded: '{rounded.none}'
      padding: '{spacing.card}'
   nav-link:
      textColor: '{colors.text}'
   nav-link-hover:
      textColor: '{colors.text-secondary}'
---

# Design System: Hozaifa Bin Masud — Portfolio

## Overview

**Creative North Star: "The Dark-Theme Editor"**

The site reads like a file open in a One Dark code editor late at night. A charcoal canvas, comment-gray body text, white for what matters, and one orchid accent that behaves like syntax highlighting: it marks the token, never the paragraph. Every word is set in Fira Code, and structure comes from thin gray frames and code punctuation (an orchid `#` before headings, `@` before labels, `/` in breadcrumbs, `<~>` on action buttons, `>=` inside headings) rather than from color blocks, shadows or imagery.

The mood is calm and precise, playful-technical, and confident and minimal at once. The play lives in the copy and the glyphs ("Turning coffee into clean code — one bug at a time..."); the layout itself stays quiet, square and exact, like well-formatted code. Density is moderate: generous vertical rhythm between sections, compact text inside frames.

Confirmed rejections: hues outside the palette (Tailwind grays, cyan, emerald, purple-to-pink gradients, blue glows), drop shadows and lifted surfaces, and rounded frames or media. Where the current code still has them, they are drift to converge on, not precedent.

**Key Characteristics:**

- One typeface (Fira Code) for everything; hierarchy from size and weight only.
- Four colors plus their opacities; orchid is a highlight, not a fill.
- 1px frames separate surfaces; hover turns the frame orchid.
- Square corners everywhere except status dots and pills.
- Code glyphs (`#`, `@`, `/`, `<~>`) as the signature ornament.

## Colors

A dark, low-contrast editor palette: one warm-violet accent over cool charcoal and gray.

### Primary

- **Syntax Orchid** (`primary`): the highlight. Used for the `#`/`@`/`/` prefixes, section-header rules, the outline (call-to-action) button frame, hover frames, active states, links on hover and form error text. As a fill it only appears as a tint (10–20% opacity) behind active buttons, footer icons and badges, plus the sticky header's underglow.

### Neutral

- **Editor Charcoal** (`bg-main`): the page canvas, and the patch that sits behind floating labels and quote marks where they cut through a frame.
- **Comment Gray** (`text`): body copy, default frames (1px) and default button labels. At 30% opacity it draws quieter frames and dividers.
- **Cursor White** (`text-secondary`): headings, card titles, the current breadcrumb segment, and text that becomes active on hover or focus.

### Named Rules

**The Syntax Highlight Rule.** Orchid marks tokens, edges and states. It never fills an area at more than 20% opacity, and long passages of text are never orchid.

**The Opacity, Not a New Hue Rule.** When a quieter or tinted variant is needed, use an existing token at reduced opacity (`text` at 20–30%, `primary` at 5–20%). Never introduce a new hue from the Tailwind palette.

## Typography

**Display Font:** Fira Code (with monospace fallback)
**Body Font:** Fira Code (with monospace fallback)

**Character:** A single monospaced family, loaded in weights 300–700 through `next/font` and applied on `<body>`. Its ligatures and even rhythm make prose read like source code. Hierarchy comes only from size (12–48px) and weight (400 / 500 / 700).

### Hierarchy

- **Display** (700, 32px → 40px → 48px at md/lg, line-height 1.25): the hero name line only, in Cursor White.
- **Headline** (500, 26px → 28px → 32px, line-height 1.25): section headers, led by an orchid `#` and followed by a 1px orchid rule. Page titles in the breadcrumb block use 700 at 30px → 36px → 48px.
- **Title** (500, 24px): card and project titles in Cursor White.
- **Body** (400, 16px, line-height 1.5): paragraphs in Comment Gray; the hero lead runs 18–20px at line-height 1.625.
- **Label** (500, 14px; 12px for badges and tags): breadcrumbs, button-adjacent metadata, form labels and footer links.

### Named Rules

**The One Typeface Rule.** Everything is Fira Code. Never use the `font-mono` utility: it resolves to the system monospace stack (`ui-monospace, SFMono-Regular, Menlo, Consolas…`), not Fira Code. It currently appears about 35 times in the code; that is drift.

## Layout

Content sits in a centered container (max 1030px wide, 10px inline padding). Sections stack with a 50px vertical rhythm. Inside sections, grids stay simple: project cards in a masonry of 2 columns from 640px and 3 from 1024px; education and training cards in a masonry of 1 then 2 columns (switching at 750px and 900px), with an explicit 10px gutter. Detail pages split into a wide main column and a narrow sidebar (2:1) at lg.

The header is sticky. After 50px of scroll it fills with Editor Charcoal and gains a thin orchid underglow. On screens 1024px and wider, a fixed left rail holds a vertical 1px gray line and the social icons. Decorative SVG dot grids and outlined squares float in negative space around sections; they are ornament, never content.

Breakpoints follow Tailwind's defaults (640 / 768 / 1024 / 1280px).

## Elevation & Depth

The system is flat. Surfaces are separated by 1px frames, opacity tints and stacking order, never by shadows or lift. The only sanctioned glow is behind the hero portrait: a blurred orchid gradient that widens on hover.

### Named Rules

**The Frame, Not Float Rule.** A surface that needs separation gets a 1px frame or a tint, not a shadow. The tooltip's drop shadow (`0 10px 25px rgba(0,0,0,0.4)`) and the hero's blue glow are drift; the sticky header's orchid underglow reads as a line and stays.

## Shapes

Corners are square (0px) on every frame, button, input, card, image and panel. Full rounding is reserved for small, meaningful circles: status dots (the pulsing "available" and live indicators) and pill badges. Rounded media and panels in the current code (the hero portrait at 12–16px, the gallery close button, team initials) are drift.

Frames are 1px and are allowed to break: the quote block cuts its own border with charcoal patches carrying the quote marks, and its author tag hangs off the bottom-right with no top border. Boxed lists use a header row separated by a 1px rule.

### Named Rules

**The Square Frame Rule.** If it has an edge, the edge is a 1px line with square corners. Roundness means "this is a status or a tag", nothing else.

## Components

### Buttons

Precise, framed, typographic; a button is a bordered word, not a colored slab.

- **Shape:** square corners (0px), 1px frame, Fira Code 500 at 16px with line-height 1, 8px × 16px padding, height capped at 37px. The `lg`/`xl` sizes add vertical padding but cannot grow past that cap, so in practice every button is about 37px tall.
- **Outline (primary call to action):** orchid frame, Cursor White label; on hover a 20% orchid tint fills in (300ms ease-in-out). The active or selected state keeps that tint permanently.
- **Default:** Comment Gray frame and label; on hover both turn white over a 20% gray tint.
- **Link:** no frame, Cursor White label that turns orchid on hover; used for the `#show_more ~>` link beside section headers.
- **Glyph labels:** action labels carry code punctuation, such as "Live <~>", "Code <~>", or an `@` before the label.

### Chips

- **Style:** pill badge (full radius), 12px 500, 4px × 12px padding, Syntax Orchid text on a 15% orchid tint; scales to 105% on hover. The cyan, purple-pink, emerald and blue gradient variants are drift.
- **Tags:** technology lists inside cards are plain comma-separated text in a framed header row, not chips.

### Cards / Containers

- **Corner Style:** square (0px).
- **Background:** transparent over Editor Charcoal.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px Comment Gray; turns Syntax Orchid on hover (200–300ms).
- **Internal Padding:** 8px for boxed lists with a header row, 16px for project cards. A project card stacks a cover image, a framed technology row, then title, description and actions.

### Inputs / Fields

- **Style:** transparent field, 1px Comment Gray frame, square corners, 14px text, 16px top / 10px side and bottom padding.
- **Floating label:** sits on a charcoal patch over the frame, rests at full size inside the field, and lifts to 75% scale over the top border when focused or filled.
- **Focus:** the frame and label turn white; no glow or ring.
- **Error:** 14px Syntax Orchid text directly below the field.

### Navigation

- **Style:** lowercase items in Comment Gray, each led by an orchid `#` (for example `#home`, `#projects`); on hover the label turns white and medium weight.
- **Header:** sticky; it fills with charcoal and gains the orchid underglow once scrolled.
- **Mobile:** a hamburger opens a full-width panel listing the items at 18px 500, which scale slightly and turn white on hover.
- **Social:** the fixed left rail on large screens, and square-framed icon buttons in the footer (frame at 30% gray, turning orchid with a 10% orchid tint on hover).

### Section Header

The signature pattern. An orchid `#`, the section name at headline size, an optional orchid superscript count ("11+"), then a 1px orchid rule running to the right to a set maximum width. A link-style button can sit at the far right, labelled `#show_more ~>` (currently wrapped in a gradient badge, which is drift; a plain link label fits the system).

### Breadcrumb Block

An orchid `/`, then path segments at 14px with the current segment in Cursor White 500, followed by the page title as `#Title` at 700. The other segments are currently drawn in Tailwind grays; that is drift, and they should use Comment Gray and its opacities.

## Do's and Don'ts

### Do:

- **Do** keep the palette to the four tokens plus opacities: `text` at 30% for quiet frames, `primary` at 10–20% for tints.
- **Do** prefix section titles with an orchid `#`, labels with `@` and paths with `/`; add `<~>` to action labels.
- **Do** separate surfaces with 1px frames and switch the frame to Syntax Orchid on hover or active.
- **Do** set every word in Fira Code and build hierarchy from size and weight (400 / 500 / 700).
- **Do** keep transitions short and functional: 200–300ms ease-in-out on color and border.
- **Do** keep corners square; use full rounding only for status dots and pill badges.

### Don't:

- **Don't** introduce Tailwind palette hues (gray-300 to gray-600, cyan, emerald, purple-to-pink gradients, blue glows); the existing ones in the breadcrumb, project details, badges and hero are drift.
- **Don't** use the `font-mono` utility; it swaps Fira Code for the system monospace stack.
- **Don't** add drop shadows or lift; the hero portrait glow is the only sanctioned glow.
- **Don't** round frames, panels or media.
- **Don't** fill large areas or long text with Syntax Orchid.
