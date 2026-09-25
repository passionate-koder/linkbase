# Linkbase Design System

The design system for **Linkbase** — a link-in-bio web app (Next.js + Tailwind). One shareable link opens a page holding all of someone's other links. This system captures the product's look, foundations, components, and full-screen recreations so designers and agents can build on-brand Linkbase surfaces.

> **Provenance & IP.** Linkbase is a Linktree-style product. The visual system here was pulled from four **Linktree screenshots** the user supplied as reference (`uploads/dashboard.png`, `uploads/landing-page.png`, `uploads/public-profile.png`, `uploads/welcome-page.png`) — no codebase, Figma, or brand files were provided. Everything is branded as **Linkbase** (the user's own product); Linktree's asterisk logo, photography, and partner logos are **not** reproduced. Where a brand mark would go we render the **Linkbase** wordmark in type (see Iconography → Logo).

---

## Sources given
- `uploads/dashboard.png` — admin content editor (link list + live phone preview).
- `uploads/public-profile.png` — the public link-in-bio page.
- `uploads/landing-page.png` — marketing homepage (color-block sections).
- `uploads/welcome-page.png` — username onboarding screen.

No repository or Figma link was attached. If you have the real codebase or design file, attach it and this system can be tightened to exact source values.

---

## Content fundamentals
How Linkbase copy is written:
- **Second person, always.** Talk to the creator: "A link in bio built for **you**," "Choose **your** username." Occasionally first-person plural for the brand ("We'll never share it").
- **Short, confident, friendly.** Plain verbs, active voice, no jargon. Headlines are declarative and benefit-led: "Analyze your audience and keep them engaged," "Share your Linkbase anywhere you like."
- **Casing.** Sentence case everywhere — headings, buttons, labels. Not Title Case. Proper nouns keep their casing ("Instagram", "Udemy").
- **Punctuation.** Headlines often end in a period; exclamation points appear sparingly for warmth ("Welcome to Linkbase!"). Meta uses a middle dot separator: "0 clicks · udemy.com".
- **Numbers as proof.** Big round social-proof numbers ("70M+ creators"). Analytics read as plain counts.
- **Verbs for actions.** Buttons are one or two words, imperative: "Add", "Continue", "Get started", "Upgrade", "New collection".
- **No emoji** in product or marketing copy. Warmth comes from tone and color, not emoji.
- **Vibe:** approachable, creator-first, un-corporate. See `guidelines/brand-voice.html` for say/don't-say examples.

---

## Visual foundations
- **Color.** A near-black + warm-gray + white neutral base carries the product UI. A single **brand green** is the accent (Upgrade button, toggles, highlights, the wordmark's "base"). The **marketing** site layers a saturated "color block" palette — chartreuse, cobalt, berry, sage, grape, blush, mustard — one solid color per full-bleed section. Max one or two colors per view in-product; marketing rotates blocks. Imagery is warm and full-color; no b&w or heavy grain.
- **Type.** Two families. Display (marketing headlines, wordmark) is a heavy grotesque; UI/body is a clean geometric sans. Headlines are extrabold/black with tight tracking (-0.02em) and sentence case. Body is regular/medium in warm gray. See substitution note in Iconography/Fonts below.
- **Spacing & layout.** 4px base scale. Product content sits in a centered column (profile ≤ 620px) or a max-640 editor panel beside a fixed phone preview. Marketing uses a ≤1120px wrapper with generous 90px section padding. The admin workspace is a rounded light sheet lifting off a black promo bar.
- **Corners.** Everything is soft. Buttons, chips and toggles are **full pills** (999px). Link cards ~16px, panels and the profile card ~24px, media ~20px. Nothing sharp.
- **Elevation.** Shadows are soft, low-contrast, and diffuse (large blur, ~4–16px y, 4–16% black). Cards often use a **hairline border + tiny shadow** rather than a heavy drop. No hard or colored shadows.
- **Backgrounds.** Solid fills — no gradients in-product except one **protection gradient**: the public page fades to black at the bottom behind the floating "join" pill. Marketing = flat color blocks. No textures, patterns, or hand-drawn illustration.
- **Borders.** 1px, warm gray (`--border-subtle`). Focus uses a soft green ring (`--focus-ring`).
- **Motion.** Subtle and quick (120–200ms ease). Hover **lifts** link buttons (`scale(1.015)`) and darkens button fills; press **shrinks** (`scale(.98)`). Toggle thumb slides; accordion chevron rotates. No bounces, no long animations.
- **Transparency/blur.** Rare. White pills float over content with a shadow rather than blur. On dark color blocks, on-dark surfaces use low-opacity white (`rgba(255,255,255,.06–.12)`).
- **Cards.** White, rounded (16–24px), hairline border or feather shadow. Marketing feature cards are solid-color rounded blocks (24px) with an image slot and a bold caption.

---

## Iconography
- **Icon set — SUBSTITUTION.** Linktree ships a private icon set; no icon assets were provided. We substitute **Lucide** (MIT, outline, 2px stroke, rounded caps) — the closest match to the source's clean, rounded, medium-weight outline icons. Loaded from CDN (`unpkg.com/lucide`) in cards and UI kits; `ui_kits/shared-icons.js` exposes `LB.Icon` which builds real Lucide SVGs as React elements (so they survive re-renders). **Flagged for the user** — supply the real icon set to replace.
- **Brand/social icons.** Instagram, YouTube, X/Twitter, TikTok, etc. use Lucide's brand glyphs as stand-ins. Swap for official marks in production.
- **No emoji, no Unicode-as-icon.** Icons are always SVG.
- **Logo — none provided.** There is **no Linkbase logo file**. The brand renders as the **Linkbase** wordmark in the display font, with the "base" in brand green (`guidelines/brand-wordmark.html`). Do not draw or reuse Linktree's asterisk mark. If a real logo exists, drop it in `assets/` and update the wordmark cards.
- **Fonts — SUBSTITUTION.** Display **Hanken Grotesk** substitutes Linktree's "DDC Hardware"; UI **Figtree** substitutes "Aeonik Pro". Both via Google Fonts (`tokens/fonts.css`). **Flagged** — provide the licensed fonts to swap.

---

## Components
Reusable primitives (`components/`), bundled to `window.LinkbaseDesignSystem_9f6309`:

- **Button** (`buttons/`) — pill button, 5 variants (primary/secondary/green/outline/ghost), 3 sizes.
- **IconButton** (`buttons/`) — circular icon action (soft/solid/white/ghost).
- **Input** (`forms/`) — filled text field with optional inline prefix (`linkbase.to/`).
- **Toggle** (`forms/`) — pill switch, green when on.
- **SidebarNav** (`navigation/`) — vertical icon rail for the admin console.
- **Tabs** (`navigation/`) — underline tab bar (Links / Shop).
- **Avatar** (`data-display/`) — circular image with initial/glyph fallback.
- **Card** (`data-display/`) — white rounded surface (shadow/bordered/flat).
- **Badge** (`data-display/`) — pill chip / tag (white/dark/green/soft).
- **LinkRow** (`links/`) — admin editor link row (thumb, title, clicks·domain, kebab).
- **ProfileLinkButton** (`links/`) — public-page link button (plain or media layout).
- **ProfileHeader** (`profile/`) — public profile identity block (avatar, name, socials).
- **Accordion** (`disclosure/`) — single-open FAQ, with on-dark variant.

Each component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and a `@dsCard` HTML specimen.

### Intentional additions
- **Accordion** — not a discrete element in the screenshots, but the marketing "Questions? Answered" FAQ needs it; kept minimal and on-brand.

---

## UI kits
Full-screen recreations (`ui_kits/`) composing the components above:
- **admin/** — content editor with live phone preview (from `dashboard.png`).
- **profile/** — public link-in-bio page (from `public-profile.png`).
- **marketing/** — color-block landing page (from `landing-page.png`).

The **welcome/onboarding** screen (`welcome-page.png`) is expressible with existing primitives (`Input` + `Button` + wordmark) and is demonstrated inside the marketing hero; a dedicated kit can be added on request.

---

## Foundations (specimen cards)
`guidelines/` — Colors (neutrals, brand green, marketing blocks, semantic roles), Type (display, UI/body, weights), Spacing (scale, radii, elevation), Brand (wordmark, voice). Rendered in the Design System tab.

---

## Index (root manifest)
- `styles.css` — entry point; `@import`s all tokens (link this one file).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadow.css`.
- `components/` — `buttons/`, `forms/`, `navigation/`, `data-display/`, `links/`, `profile/`, `disclosure/`.
- `ui_kits/` — `admin/`, `profile/`, `marketing/`, plus shared `shared-icons.js`.
- `guidelines/` — foundation specimen cards.
- `thumbnail.html` — homepage tile. `SKILL.md` — portable skill wrapper. `readme.md` — this file.
- `assets/` — (empty) drop real logo, fonts, icons, and imagery here when available.

---

## Caveats
Built from screenshots only. Fonts (Hanken Grotesk / Figtree), icons (Lucide), and all imagery/logos are **substitutions or placeholders** — see Iconography. Attach the real codebase, Figma, fonts, or brand assets to make this exact.
