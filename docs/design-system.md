# Linkbase Design System Specification

This document provides the foundational design tokens, specifications, and Tailwind CSS mappings for **Linkbase** (a Next.js + Tailwind CSS link-in-bio web application). Engineers can use these specifications to configure Tailwind CSS v4 / v3 and build consistent user interfaces.

---

## 1. Overview & Provenance

- **Product Vibe**: Friendly, creator-first, approachable, un-corporate.
- **Brand Identity**: Branded as **Linkbase**. Wordmark rendered in type (`Hanken Grotesk` display font with signature brand green for "base").
- **Font Substitutions**:
  - **Display Font**: `Hanken Grotesk` (Substituted for Linktree's proprietary *DDC Hardware*).
  - **UI / Body Font**: `Figtree` (Substituted for Linktree's proprietary *Aeonik Pro*).
- **Icon Set**: `Lucide Icons` (Outline, 2px stroke, rounded caps; MIT licensed).

---

## 2. Color Palette

The Linkbase color system features a warm neutral base, a vibrant **brand green** signature accent, and a set of saturated **marketing color blocks**.

### 2.1 Neutrals (Subtly Warm Ramps)

| Token Name | Hex Code | Tailwind Class / Arbitrary | Description / Usage |
| :--- | :--- | :--- | :--- |
| `--white` | `#ffffff` | `bg-white`, `text-white` | Pure white background, card surfaces, button text on dark |
| `--black` | `#000000` | `bg-black`, `text-black` | Absolute black, promo bar background, primary buttons |
| `--ink` | `#0e0e0e` | `bg-[#0e0e0e]`, `text-[#0e0e0e]` | Near-black primary text, solid icon buttons, active tabs |
| `--gray-50` | `#f7f7f5` | `bg-[#f7f7f5]` | Sunken background surfaces, hover states |
| `--gray-100` | `#efefed` | `bg-[#efefed]` | App background, public profile background, soft inputs/buttons |
| `--gray-200` | `#e5e5e2` | `bg-[#e5e5e2]`, `border-[#e5e5e2]` | Subtle borders, hover background for soft buttons |
| `--gray-300` | `#d3d3ce` | `bg-[#d3d3ce]`, `border-[#d3d3ce]` | Stronger borders, inactive toggle tracks |
| `--gray-400` | `#a9a9a2` | `text-[#a9a9a2]`, `placeholder-[#a9a9a2]` | Tertiary text, disabled icons, placeholder text |
| `--gray-500` | `#76766f` | `text-[#76766f]` | Secondary body text, ghost button icons, meta labels |
| `--gray-600` | `#54544e` | `text-[#54544e]` | Medium gray text, profile bio, link hover text |
| `--gray-700` | `#3a3a35` | `bg-[#3a3a35]`, `text-[#3a3a35]` | Dark hover state for solid black buttons |
| `--gray-900` | `#131311` | `bg-[#131311]` | Deep background containers |

### 2.2 Brand Green Accent Palette

| Token Name | Hex Code | Tailwind Class | Description / Usage |
| :--- | :--- | :--- | :--- |
| `--green-bright` | `#43e660` | `bg-[#43e660]`, `text-[#43e660]` | Bright signature green accent (wordmark "base", highlights, chips) |
| `--green` / `--accent-action` | `#1cb454` | `bg-[#1cb454]` | Primary action green (Upgrade buttons, active toggles) |
| `--green-ink` | `#0d3b1c` | `text-[#0d3b1c]` | Deep green text used over bright green surfaces |
| `--kale` | `#254f1a` | `bg-[#254f1a]` | Dark forest green hover state for action green buttons |

### 2.3 Marketing "Color Block" Palette

| Token Name | Hex Code | Tailwind Class | Usage (Full-Bleed Landing Page Sections) |
| :--- | :--- | :--- | :--- |
| `--chartreuse` | `#e9ef6b` | `bg-[#e9ef6b]` | Marketing Hero section background |
| `--cobalt` | `#0b4bd1` | `bg-[#0b4bd1]` | Feature block background |
| `--berry` | `#7a1e2e` | `bg-[#7a1e2e]` | Dark red block background / Input error border & text |
| `--sage` | `#dce6cd` | `bg-[#dce6cd]` | Pale mint feature block background |
| `--grape` | `#612b9b` | `bg-[#612b9b]` | Purple section background |
| `--blush` | `#f3c6da` | `bg-[#f3c6da]` | Soft pink feature card surface |
| `--mustard` | `#e0a82e` | `bg-[#e0a82e]` | Welcome / Onboarding background block |

### 2.4 Semantic Tokens & Aliases

| Semantic Token | Maps To | Default Value | Tailwind Equivalent |
| :--- | :--- | :--- | :--- |
| `--text-primary` | `var(--ink)` | `#0e0e0e` | `text-[#0e0e0e]` |
| `--text-secondary` | `var(--gray-500)` | `#76766f` | `text-[#76766f]` |
| `--text-tertiary` | `var(--gray-400)` | `#a9a9a2` | `text-[#a9a9a2]` |
| `--text-on-dark` | `var(--white)` | `#ffffff` | `text-white` |
| `--text-on-green` | `var(--green-ink)` | `#0d3b1c` | `text-[#0d3b1c]` |
| `--surface-page` | `var(--gray-100)` | `#efefed` | `bg-[#efefed]` |
| `--surface-card` | `var(--white)` | `#ffffff` | `bg-white` |
| `--surface-sunken` | `var(--gray-50)` | `#f7f7f5` | `bg-[#f7f7f5]` |
| `--surface-inverse` | `var(--black)` | `#000000` | `bg-black` |
| `--border-subtle` | `var(--gray-200)` | `#e5e5e2` | `border-[#e5e5e2]` |
| `--border-strong` | `var(--gray-300)` | `#d3d3ce` | `border-[#d3d3ce]` |
| `--border-focus` | `var(--ink)` | `#0e0e0e` | `border-[#0e0e0e]` |

### 2.5 Focus Ring Spec
- **CSS Token**: `--focus-ring: 0 0 0 3px rgba(28,180,84,.35)`
- **Tailwind Utility**: `focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#1cb454]/35`

---

## 3. Typography & Type Scale

### 3.1 Font Families

```css
--font-display: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
--font-sans: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### 3.2 Font Weights

| Token Name | Weight | Value | Tailwind Class |
| :--- | :--- | :--- | :--- |
| `--fw-regular` | Regular | `400` | `font-normal` |
| `--fw-medium` | Medium | `500` | `font-medium` |
| `--fw-semibold` | Semibold | `600` | `font-semibold` |
| `--fw-bold` | Bold | `700` | `font-bold` |
| `--fw-extrabold` | Extrabold | `800` | `font-extrabold` |
| `--fw-black` | Black | `900` | `font-black` |

### 3.3 Type Scale

| Token Name | Size (px) | Rem | Line Height Token | Letter Spacing Token | Tailwind Class |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--text-xs` | `12px` | `0.75rem` | `--leading-normal` (1.4) | `--tracking-normal` (0) | `text-xs` |
| `--text-sm` | `14px` | `0.875rem` | `--leading-normal` (1.4) | `--tracking-normal` (0) | `text-sm` |
| `--text-base` | `16px` | `1rem` | `--leading-normal` (1.4) | `--tracking-normal` (0) | `text-base` |
| `--text-lg` | `18px` | `1.125rem` | `--leading-snug` (1.2) | `--tracking-normal` (0) | `text-lg` |
| `--text-xl` | `20px` | `1.25rem` | `--leading-snug` (1.2) | `--tracking-tight` (-0.02em) | `text-xl` |
| `--text-2xl` | `24px` | `1.5rem` | `--leading-tight` (1.05) | `--tracking-tight` (-0.02em) | `text-2xl` |
| `--text-3xl` | `30px` | `1.875rem` | `--leading-tight` (1.05) | `--tracking-tight` (-0.02em) | `text-3xl` |
| `--text-4xl` | `38px` | `2.375rem` | `--leading-tight` (1.05) | `--tracking-tight` (-0.02em) | `text-[38px]` |
| `--text-5xl` | `48px` | `3rem` | `--leading-tight` (1.05) | `--tracking-tight` (-0.02em) | `text-5xl` |
| `--text-6xl` | `64px` | `4rem` | `--leading-tight` (1.05) | `--tracking-tight` (-0.02em) | `text-[64px]` |
| `--text-display` | `84px` | `5.25rem` | `--leading-tight` (1.05) | `--tracking-tight` (-0.02em) | `text-[84px]` |

### 3.4 Line Heights & Letter Spacing

| Token Name | Value | Tailwind Class |
| :--- | :--- | :--- |
| `--leading-tight` | `1.05` | `leading-[1.05]` |
| `--leading-snug` | `1.2` | `leading-snug` / `leading-[1.2]` |
| `--leading-normal` | `1.4` | `leading-normal` / `leading-[1.4]` |
| `--leading-relaxed` | `1.6` | `leading-relaxed` / `leading-[1.6]` |
| `--tracking-tight` | `-0.02em` | `tracking-[-0.02em]` / `tracking-tight` |
| `--tracking-normal` | `0` | `tracking-normal` |
| `--tracking-wide` | `0.02em` | `tracking-[0.02em]` |

---

## 4. Spacing & Dimensions Scale

### 4.1 Spacing Scale (4px Base)

| Token Name | Pixels | Rem | Tailwind Utility |
| :--- | :--- | :--- | :--- |
| `--space-0` | `0px` | `0` | `p-0`, `gap-0`, `m-0` |
| `--space-1` | `4px` | `0.25rem` | `p-1`, `gap-1`, `m-1` |
| `--space-2` | `8px` | `0.5rem` | `p-2`, `gap-2`, `m-2` |
| `--space-3` | `12px` | `0.75rem` | `p-3`, `gap-3`, `m-3` |
| `--space-4` | `16px` | `1rem` | `p-4`, `gap-4`, `m-4` |
| `--space-5` | `20px` | `1.25rem` | `p-5`, `gap-5`, `m-5` |
| `--space-6` | `24px` | `1.5rem` | `p-6`, `gap-6`, `m-6` |
| `--space-8` | `32px` | `2rem` | `p-8`, `gap-8`, `m-8` |
| `--space-10` | `40px` | `2.5rem` | `p-10`, `gap-10`, `m-10` |
| `--space-12` | `48px` | `3rem` | `p-12`, `gap-12`, `m-12` |
| `--space-16` | `64px` | `4rem` | `p-16`, `gap-16`, `m-16` |
| `--space-20` | `80px` | `5rem` | `p-20`, `gap-20`, `m-20` |
| `--space-24` | `96px` | `6rem` | `p-24`, `gap-24`, `m-24` |

### 4.2 Layout Dimensions

| Token Name | Value | Description | Tailwind Equivalent |
| :--- | :--- | :--- | :--- |
| `--container-max` | `1200px` | Marketing max container width | `max-w-[1200px]` |
| `--profile-max` | `580px` | Public profile column width | `max-w-[580px]` (or `max-w-[620px]`) |
| `--sidebar-width` | `96px` | Admin console navigation rail width | `w-[96px]` |

---

## 5. Border Radius Scale

All interactive elements and cards use soft, rounded corners. Sharp corners are never used.

| Token Name | Value | Usage | Tailwind Class |
| :--- | :--- | :--- | :--- |
| `--radius-sm` | `8px` | Small thumbnails inside links | `rounded-lg` / `rounded-[8px]` |
| `--radius-md` | `12px` | Form inputs, link row thumbnails | `rounded-xl` / `rounded-[12px]` |
| `--radius-lg` | `16px` | Link rows, public profile buttons | `rounded-2xl` / `rounded-[16px]` |
| `--radius-xl` | `24px` | Content cards, editor panels | `rounded-3xl` / `rounded-[24px]` |
| `--radius-2xl` | `32px` | Large feature cards | `rounded-[32px]` |
| `--radius-pill` | `999px` | Buttons, badges, toggles | `rounded-full` |

---

## 6. Shadows & Elevation System

Shadows are soft, low-contrast, and diffuse.

| Token Name | Value | Tailwind Class / Arbitrary | Usage |
| :--- | :--- | :--- | :--- |
| `--shadow-xs` | `0 1px 2px rgba(16,16,16,.04)` | `shadow-[0_1px_2px_rgba(16,16,16,0.04)]` | Minimal card lift, editor rows |
| `--shadow-sm` | `0 1px 3px rgba(16,16,16,.06)` | `shadow-[0_1px_3px_rgba(16,16,16,0.06)]` | Button hovers, badges |
| `--shadow-card` | `0 4px 16px rgba(16,16,16,.06)` | `shadow-[0_4px_16px_rgba(16,16,16,0.06)]` | Cards, elevated containers |
| `--shadow-float` | `0 8px 30px rgba(16,16,16,.10)` | `shadow-[0_8px_30px_rgba(16,16,16,0.10)]` | Phone preview, floating bars |
| `--shadow-pop` | `0 12px 40px rgba(16,16,16,.16)` | `shadow-[0_12px_40px_rgba(16,16,16,0.16)]` | Popovers, bottom join pill |

---

## 7. Responsive Breakpoints

> **TBD** — The design system tokens do not explicitly define custom `@media` query tokens.

Engineers should use Tailwind CSS default responsive breakpoints along with explicit container max-widths:

| Breakpoint | Min-Width | Usage in Linkbase Specs |
| :--- | :--- | :--- |
| `sm` | `640px` | Mobile profile layout / single column input |
| `md` | `768px` | Tablet stack / hides phone preview on smaller screens |
| `lg` | `1024px` | Admin split view (Editor panel + Phone preview) |
| `xl` | `1280px` | Full Desktop Marketing site / Admin viewport (`1280x820`) |

---

## 8. Motion & Micro-Interactions

| Property | Specification | Implementation Notes |
| :--- | :--- | :--- |
| **Duration** | `120ms` – `200ms` | Fast, subtle interactions (`duration-150`) |
| **Easing** | `ease` / `ease-in-out` | Smooth linear curve, no bouncy physics |
| **Hover Scale (Links)** | `transform: scale(1.015)` | Used on public profile link buttons on hover |
| **Active/Press (Buttons)** | `transform: scale(0.98)` | Standard buttons contract slightly on press |
| **Active/Press (IconBtn)** | `transform: scale(0.94)` | Circular icon buttons shrink on click |
| **Active/Press (Links)** | `transform: scale(0.99)` | Profile link buttons press down |
| **Toggle Transition** | `0.2s ease` | Thumb slides `translateX(20px)` when turned on |
| **Accordion Chevron** | `0.2s ease` | Rotates `180deg` when item expands |

---

## 9. Tailwind CSS Configuration Code Block

Engineers can include these definitions in `tailwind.config.ts` or Tailwind CSS v4 `@theme` directives:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e0e',
        'gray-50': '#f7f7f5',
        'gray-100': '#efefed',
        'gray-200': '#e5e5e2',
        'gray-300': '#d3d3ce',
        'gray-400': '#a9a9a2',
        'gray-500': '#76766f',
        'gray-600': '#54544e',
        'gray-700': '#3a3a35',
        'gray-900': '#131311',
        'green-bright': '#43e660',
        'green-action': '#1cb454',
        'green-ink': '#0d3b1c',
        kale: '#254f1a',
        chartreuse: '#e9ef6b',
        cobalt: '#0b4bd1',
        berry: '#7a1e2e',
        sage: '#dce6cd',
        grape: '#612b9b',
        blush: '#f3c6da',
        mustard: '#e0a82e',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Hanken Grotesk', 'sans-serif'],
        sans: ['var(--font-sans)', 'Figtree', 'sans-serif'],
      },
      borderRadius: {
        'card-sm': '8px',
        'card-md': '12px',
        'card-lg': '16px',
        'panel': '24px',
        'pill': '999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(16,16,16,0.04)',
        sm: '0 1px 3px rgba(16,16,16,0.06)',
        card: '0 4px 16px rgba(16,16,16,0.06)',
        float: '0 8px 30px rgba(16,16,16,0.10)',
        pop: '0 12px 40px rgba(16,16,16,0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
```
