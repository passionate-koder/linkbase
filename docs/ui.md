# Linkbase UI Component & Layout Specification

This document details all 13 UI primitives, variants, states, layout patterns, and accessibility guidelines for building **Linkbase** in Next.js (App Router) and Tailwind CSS.

---

## 1. Developer Conventions & Rules

- **Next.js App Router**: Components default to **Server Components**. Add `'use client'` at the top of files that utilize state (`useState`), interactivity, or event handlers.
- **Iconography**: Icons use `lucide-react`. Standard outline style, `strokeWidth={2}`.
- **Copy & Voice**:
  - Second-person ("your link", "your bio").
  - Short, confident, action-oriented verbs.
  - Sentence case everywhere (no Title Case).
  - No emojis in core UI components.

---

## 2. Component Catalog

### 2.1 Button (`components/buttons/Button.tsx`)

Pill-shaped primary action button supporting 5 visual variants and 3 sizes.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | — | Button label or content |
| `variant` | `'primary' \| 'secondary' \| 'green' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height & padding size |
| `fullWidth` | `boolean` | `false` | Stretches button to `100%` width |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon rendered before label |
| `rightIcon` | `React.ReactNode` | `undefined` | Icon rendered after label |
| `disabled` | `boolean` | `false` | Disabled interactive state |
| `as` | `React.ElementType` | `'button'` | Rendered element tag (`'button'`, `'a'`) |

#### Variants & Sizes

- **Primary**: Background `#000000`, Text `#ffffff`. Hover: `#3a3a35`.
- **Secondary**: Background `#efefed`, Text `#0e0e0e`. Hover: `#e5e5e2`.
- **Green**: Background `#1cb454`, Text `#ffffff`. Hover: `#254f1a` (Kale).
- **Outline**: Background `#ffffff`, Text `#0e0e0e`, Border `#d3d3ce`. Hover: `#f7f7f5`.
- **Ghost**: Background `transparent`, Text `#0e0e0e`. Hover: `#efefed`.
- **Sizes**:
  - `sm`: Height `36px`, Padding `0 16px`, Font `14px` (`font-semibold`).
  - `md`: Height `48px`, Padding `0 24px`, Font `16px` (`font-bold`).
  - `lg`: Height `56px`, Padding `0 32px`, Font `18px` (`font-bold`).

#### Accessibility Notes
- Supports native `<button>` attributes (`type`, `disabled`, `onClick`).
- Preserves keyboard focus rings with `focus-visible:ring-3 focus-visible:ring-[#1cb454]/35`.

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'green' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  as?: any;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  as: Component = 'button',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full font-sans transition-all duration-150 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#1cb454]/35';

  const variantClasses = {
    primary: 'bg-black text-white hover:bg-[#3a3a35]',
    secondary: 'bg-[#efefed] text-[#0e0e0e] hover:bg-[#e5e5e2]',
    green: 'bg-[#1cb454] text-white hover:bg-[#254f1a]',
    outline: 'bg-white text-[#0e0e0e] border border-[#d3d3ce] hover:bg-[#f7f7f5]',
    ghost: 'bg-transparent text-[#0e0e0e] hover:bg-[#efefed]',
  };

  const sizeClasses = {
    sm: 'h-[36px] px-4 text-sm font-semibold',
    md: 'h-[48px] px-6 text-base font-bold',
    lg: 'h-[56px] px-8 text-lg font-bold',
  };

  return (
    <Component
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex items-center">{rightIcon}</span>}
    </Component>
  );
}
```

---

### 2.2 IconButton (`components/buttons/IconButton.tsx`)

Circular action button for icon-only interactions.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | — | Icon element |
| `label` | `string` | **Required** | Accessible label applied via `aria-label` |
| `variant` | `'soft' \| 'solid' \| 'white' \| 'ghost'` | `'soft'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button dimensions |

#### Sizes & Dimensions

- `sm`: `32px` diameter, `16px` icon.
- `md`: `44px` diameter, `20px` icon.
- `lg`: `52px` diameter, `22px` icon.

#### Accessibility Notes
- **Requires `label` prop** to render `aria-label` for screen reader accessibility.

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'soft' | 'solid' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function IconButton({
  children,
  label,
  variant = 'soft',
  size = 'md',
  className = '',
  ...props
}: IconButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full border border-transparent transition-all duration-150 active:scale-[0.94] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#1cb454]/35';

  const variantClasses = {
    soft: 'bg-[#efefed] text-[#0e0e0e] hover:bg-[#e5e5e2]',
    solid: 'bg-[#0e0e0e] text-white hover:bg-[#3a3a35]',
    white: 'bg-white text-[#0e0e0e] shadow-[0_1px_3px_rgba(16,16,16,0.06)] hover:bg-[#f7f7f5]',
    ghost: 'bg-transparent text-[#76766f] hover:bg-[#efefed] hover:text-[#0e0e0e]',
  };

  const sizeClasses = {
    sm: 'w-[32px] h-[32px]',
    md: 'w-[44px] h-[44px]',
    lg: 'w-[52px] h-[52px]',
  };

  return (
    <button
      aria-label={label}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

---

### 2.3 Avatar (`components/data-display/Avatar.tsx`)

Circular user avatar component supporting image, text initial, or fallback icon glyph.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `src` | `string` | `undefined` | Image URL |
| `alt` | `string` | `''` | Alt text for image |
| `name` | `string` | `undefined` | User name (generates single capital initial fallback) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar diameter |

#### Sizes

- `xs`: `32px` (`text-xs`)
- `sm`: `44px` (`text-base`)
- `md`: `64px` (`text-[22px]`)
- `lg`: `96px` (`text-[34px]`)
- `xl`: `1280px` (`128px`, `text-[46px]`)

#### Next.js + Tailwind Implementation

```tsx
import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar({ src, alt = '', name, size = 'md', className = '' }: AvatarProps) {
  const initial = name ? name.trim().charAt(0).toUpperCase() : null;

  const sizeClasses = {
    xs: 'w-[32px] h-[32px] text-xs',
    sm: 'w-[44px] h-[44px] text-base',
    md: 'w-[64px] h-[64px] text-[22px]',
    lg: 'w-[96px] h-[96px] text-[34px]',
    xl: 'w-[128px] h-[128px] text-[46px]',
  };

  return (
    <span
      className={`relative inline-flex flex-none items-center justify-center overflow-hidden rounded-full bg-[#d3d3ce] font-sans font-bold text-[#76766f] ${sizeClasses[size]} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt || name || 'Avatar'} className="h-full w-full object-cover" />
      ) : initial ? (
        initial
      ) : (
        <svg className="h-[60%] w-[60%] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.7-8 6v1h16v-1c0-3.3-3.6-6-8-6Z" />
        </svg>
      )}
    </span>
  );
}
```

---

### 2.4 Badge (`components/data-display/Badge.tsx`)

Pill-shaped badge / chip tag.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | — | Badge label |
| `variant` | `'soft' \| 'dark' \| 'green' \| 'white'` | `'soft'` | Visual variant |
| `size` | `'sm' \| 'md'` | `'md'` | Height variant (`sm`: `24px`, `md`: `34px`) |
| `leftIcon` | `React.ReactNode` | `undefined` | Icon element |

#### Next.js + Tailwind Implementation

```tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'soft' | 'dark' | 'green' | 'white';
  size?: 'sm' | 'md';
  leftIcon?: React.ReactNode;
  className?: string;
}

export function Badge({
  children,
  variant = 'soft',
  size = 'md',
  leftIcon,
  className = '',
}: BadgeProps) {
  const variantClasses = {
    soft: 'bg-[#efefed] text-[#54544e]',
    dark: 'bg-[#0e0e0e] text-white',
    green: 'bg-[#43e660] text-[#0d3b1c]',
    white: 'bg-white text-[#0e0e0e] shadow-[0_1px_3px_rgba(16,16,16,0.06)]',
  };

  const sizeClasses = {
    sm: 'h-[24px] px-2.5 text-xs',
    md: 'h-[34px] px-4 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-sans font-semibold leading-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {leftIcon}
      {children}
    </span>
  );
}
```

---

### 2.5 Card (`components/data-display/Card.tsx`)

White rounded surface container.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | — | Card contents |
| `elevation` | `'bordered' \| 'shadow' \| 'flat'` | `'shadow'` | Border/shadow elevation style |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding (`0`, `16px`, `24px`, `32px`) |

#### Next.js + Tailwind Implementation

```tsx
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'bordered' | 'shadow' | 'flat';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  elevation = 'shadow',
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const elevationClasses = {
    bordered: 'border border-[#e5e5e2]',
    shadow: 'shadow-[0_4px_16px_rgba(16,16,16,0.06)]',
    flat: 'border-none shadow-none',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`rounded-[24px] bg-white font-sans ${elevationClasses[elevation]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
```

---

### 2.6 Accordion (`components/disclosure/Accordion.tsx`)

Single-open FAQ disclosure component.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array<{ q: string, a: React.ReactNode }>` | `[]` | Question & Answer items |
| `onDark` | `boolean` | `false` | Enables white text / subtle border on dark color block background |
| `defaultOpen` | `number` | `-1` | Index of default expanded item |

#### Accessibility Notes
- `button` element uses `aria-expanded={isOpen}`.

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  q: string;
  a: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  onDark?: boolean;
  defaultOpen?: number;
  className?: string;
}

export function Accordion({ items, onDark = false, defaultOpen = -1, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <div className={`flex flex-col font-sans ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border-b transition-colors duration-150 ${
              onDark
                ? 'border-white/15 text-white'
                : 'border-[#e5e5e2] text-[#0e0e0e]'
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between py-6 text-left text-lg font-extrabold focus-visible:outline-none"
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 flex-none transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="pb-6 text-base font-normal leading-relaxed opacity-90">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
```

---

### 2.7 Input (`components/forms/Input.tsx`)

Filled form field with optional URL prefix.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `undefined` | Field label text |
| `prefix` | `string` | `undefined` | Inline text prefix (e.g. `linkbase.to/`) |
| `hint` | `string` | `undefined` | Informational helper text below field |
| `error` | `string` | `undefined` | Error text; triggers red error border state |

#### Accessibility Notes
- Connects label to input via `htmlFor` matching `id`.

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  prefix?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, prefix, hint, error, id, className = '', ...props }: InputProps) {
  const inputId = id || (label ? `lb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

  return (
    <div className={`flex w-full flex-col gap-1.5 font-sans ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-semibold text-[#0e0e0e]">
          {label}
        </label>
      )}
      <div
        className={`flex h-[52px] w-full items-center gap-1 rounded-xl border bg-[#efefed] px-4 transition-all duration-150 focus-within:border-[#d3d3ce] focus-within:bg-white focus-within:ring-3 focus-within:ring-[#1cb454]/35 ${
          error ? 'border-[#7a1e2e]' : 'border-transparent'
        }`}
      >
        {prefix && <span className="whitespace-nowrap text-base text-[#76766f]">{prefix}</span>}
        <input
          id={inputId}
          className="w-full flex-1 border-none bg-transparent text-base font-medium text-[#0e0e0e] placeholder-[#a9a9a2] focus:outline-none"
          {...props}
        />
      </div>
      {(hint || error) && (
        <span className={`text-xs ${error ? 'text-[#7a1e2e]' : 'text-[#76766f]'}`}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
```

---

### 2.8 Toggle (`components/forms/Toggle.tsx`)

Pill switch toggle control.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `checked` | `boolean` | `undefined` | Controlled state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled default state |
| `onChange` | `(e) => void` | `undefined` | Handler |
| `label` | `string` | `undefined` | Label beside switch |

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Toggle({ label, className = '', disabled, ...props }: ToggleProps) {
  return (
    <label className={`inline-flex items-center gap-2.5 cursor-pointer font-sans ${className}`}>
      <div className="relative">
        <input type="checkbox" disabled={disabled} className="sr-only peer" {...props} />
        <div className="h-[28px] w-[48px] rounded-full bg-[#d3d3ce] transition-colors duration-200 peer-checked:bg-[#1cb454] peer-disabled:opacity-40 peer-focus-visible:ring-3 peer-focus-visible:ring-[#1cb454]/35" />
        <div className="absolute left-[3px] top-[3px] h-[22px] w-[22px] rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-[20px]" />
      </div>
      {label && <span className="text-base font-medium text-[#0e0e0e]">{label}</span>}
    </label>
  );
}
```

---

### 2.9 LinkRow (`components/links/LinkRow.tsx`)

Admin content editor link item row.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Required** | Link title |
| `clicks` | `number` | `0` | Click counter |
| `domain` | `string` | `undefined` | Target domain |
| `thumb` | `string` | `undefined` | Thumbnail image |
| `thumbIcon` | `React.ReactNode` | `undefined` | Icon fallback |
| `onMenu` | `() => void` | `undefined` | Options menu trigger handler |

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';
import { MoreVertical } from 'lucide-react';

interface LinkRowProps {
  title: string;
  clicks?: number;
  domain?: string;
  thumb?: string;
  thumbIcon?: React.ReactNode;
  onMenu?: () => void;
  className?: string;
}

export function LinkRow({
  title,
  clicks = 0,
  domain,
  thumb,
  thumbIcon,
  onMenu,
  className = '',
}: LinkRowProps) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border border-[#e5e5e2] bg-white p-3.5 font-sans shadow-[0_1px_2px_rgba(16,16,16,0.04)] transition-shadow duration-150 hover:shadow-[0_1px_3px_rgba(16,16,16,0.06)] ${className}`}
    >
      <div className="flex h-[52px] w-[52px] flex-none items-center justify-center overflow-hidden rounded-xl bg-[#efefed]">
        {thumb ? (
          <img src={thumb} alt="" className="h-full w-full object-cover" />
        ) : (
          thumbIcon
        )}
      </div>

      <div className="flex flex-1 flex-col min-w-0">
        <span className="truncate text-base font-bold text-[#0e0e0e]">{title}</span>
        <span className="truncate text-sm text-[#76766f]">
          <strong className="font-semibold text-[#54544e]">{clicks} clicks</strong>
          {domain ? ` · ${domain}` : ''}
        </span>
      </div>

      <button
        type="button"
        aria-label="Link options"
        onClick={onMenu}
        className="flex h-[36px] w-[36px] flex-none items-center justify-center rounded-full text-[#76766f] transition-colors hover:bg-[#efefed] hover:text-[#0e0e0e]"
      >
        <MoreVertical className="h-5 w-5" />
      </button>
    </div>
  );
}
```

---

### 2.10 ProfileLinkButton (`components/links/ProfileLinkButton.tsx`)

Public link-in-bio button supporting plain text, thumbnail image, or 16:9 media card layout.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Required** | Link title text |
| `href` | `string` | `'#'` | Target URL |
| `thumb` | `string` | `undefined` | Media / Thumbnail image URL |
| `media` | `boolean` | `false` | Full 16:9 aspect ratio media layout |
| `leftThumb` | `string` | `undefined` | Left square avatar/icon image |
| `onMenu` | `() => void` | `undefined` | Share menu trigger handler |

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';
import { MoreVertical } from 'lucide-react';

interface ProfileLinkButtonProps {
  title: string;
  href?: string;
  thumb?: string;
  media?: boolean;
  leftThumb?: string;
  onMenu?: () => void;
  className?: string;
}

export function ProfileLinkButton({
  title,
  href = '#',
  thumb,
  media = false,
  leftThumb,
  onMenu,
  className = '',
}: ProfileLinkButtonProps) {
  const isMedia = media && thumb;

  return (
    <a
      href={href}
      onClick={(e) => href === '#' && e.preventDefault()}
      className={`relative flex w-full items-center justify-center rounded-2xl bg-white font-sans text-no-underline shadow-[0_1px_2px_rgba(16,16,16,0.04)] transition-all duration-150 hover:scale-[1.015] hover:shadow-[0_1px_3px_rgba(16,16,16,0.06)] active:scale-[0.99] ${
        isMedia ? 'flex-col p-0 overflow-hidden' : 'min-h-[60px] px-12 py-4'
      } ${className}`}
    >
      {isMedia && (
        <img src={thumb} alt="" className="aspect-video w-full object-cover" />
      )}

      {!isMedia && leftThumb && (
        <img
          src={leftThumb}
          alt=""
          className="absolute left-2.5 top-1/2 h-[44px] w-[44px] -translate-y-1/2 rounded-lg object-cover"
        />
      )}

      <span
        className={`text-center text-base font-bold text-[#0e0e0e] leading-snug ${
          isMedia ? 'w-full px-10 py-3.5' : ''
        }`}
      >
        {title}
      </span>

      <button
        type="button"
        aria-label="Share this link"
        onClick={(e) => {
          e.preventDefault();
          onMenu?.();
        }}
        className={`absolute right-3.5 flex h-[28px] w-[28px] items-center justify-center rounded-full text-[#a9a9a2] hover:bg-[#efefed] hover:text-[#0e0e0e] ${
          isMedia ? 'bottom-3 top-auto translate-y-0' : 'top-1/2 -translate-y-1/2'
        }`}
      >
        <MoreVertical className="h-4 w-4" />
      </button>
    </a>
  );
}
```

---

### 2.11 SidebarNav (`components/navigation/SidebarNav.tsx`)

Vertical icon navigation rail for the admin console. Width fixed at `96px`.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array<{ id: string, label: string, icon: React.ReactNode }>` | `[]` | Navigation items |
| `active` | `string` | — | Selected item ID |
| `onSelect` | `(id: string) => void` | — | Item selection callback |

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarNavProps {
  items: NavItem[];
  active: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function SidebarNav({ items, active, onSelect, className = '' }: SidebarNavProps) {
  return (
    <nav className={`flex w-[96px] flex-col items-center gap-5 py-6 font-sans ${className}`}>
      {items.map((it) => {
        const isActive = it.id === active;
        return (
          <button
            key={it.id}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onSelect?.(it.id)}
            className={`flex flex-col items-center gap-1.5 border-none bg-transparent p-0 transition-colors ${
              isActive ? 'text-[#0e0e0e]' : 'text-[#76766f]'
            }`}
          >
            <span
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-colors ${
                isActive ? 'bg-[#0e0e0e] text-white' : 'bg-transparent hover:bg-[#efefed] hover:text-[#0e0e0e]'
              }`}
            >
              {it.icon}
            </span>
            <span className="text-xs font-semibold">{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
```

---

### 2.12 Tabs (`components/navigation/Tabs.tsx`)

Underline tab strip control.

#### Accessibility Notes
- `role="tablist"` on wrapper container.
- `role="tab"` and `aria-selected={isActive}` on tab buttons.

#### Next.js + Tailwind Implementation

```tsx
'use client';

import React from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: (string | TabItem)[];
  active: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, active, onSelect, className = '' }: TabsProps) {
  return (
    <div role="tablist" className={`flex gap-6 border-b border-[#e5e5e2] font-sans ${className}`}>
      {tabs.map((t) => {
        const id = typeof t === 'string' ? t : t.id;
        const label = typeof t === 'string' ? t : t.label;
        const isActive = id === active;

        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect?.(id)}
            className={`relative pb-3.5 text-lg font-semibold transition-colors ${
              isActive ? 'text-[#0e0e0e]' : 'text-[#a9a9a2] hover:text-[#54544e]'
            }`}
          >
            {label}
            {isActive && (
              <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] rounded-sm bg-[#0e0e0e]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
```

---

### 2.13 ProfileHeader (`components/profile/ProfileHeader.tsx`)

Identity block for the public profile page.

#### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `avatar` | `React.ReactNode` | — | Rendered Avatar component |
| `name` | `string` | **Required** | Username / display name |
| `bio` | `string` | `undefined` | Creator bio paragraph |
| `socials` | `Array<{ label: string, icon: React.ReactNode, href?: string }>` | `[]` | Social media link icons |

#### Next.js + Tailwind Implementation

```tsx
import React from 'react';

interface SocialLink {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

interface ProfileHeaderProps {
  avatar: React.ReactNode;
  name: string;
  bio?: string;
  socials?: SocialLink[];
  className?: string;
}

export function ProfileHeader({
  avatar,
  name,
  bio,
  socials,
  className = '',
}: ProfileHeaderProps) {
  return (
    <header className={`flex w-full flex-col items-center gap-4 text-center font-sans ${className}`}>
      {avatar}
      <h1 className="text-2xl font-extrabold tracking-tight text-[#0e0e0e]">{name}</h1>
      {bio && <p className="max-w-[400px] text-base leading-normal text-[#54544e]">{bio}</p>}

      {socials && socials.length > 0 && (
        <div className="mt-0.5 flex items-center gap-4">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.href || '#'}
              aria-label={s.label}
              className="text-[#0e0e0e] transition-opacity hover:opacity-60"
            >
              {s.icon}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
```

---

## 3. Layout Patterns

### 3.1 Admin Console (Editor + Phone Preview) Layout

- **Promo Bar**: Top dark bar (`h-[56px]`, `bg-black`, text `#ffffff`).
- **Main Shell**: Light sheet lifting off promo bar (`bg-[#efefed]`, rounded top corners `rounded-t-[32px]`).
- **Navigation Rail**: `SidebarNav` on left (`w-[96px]`).
- **Editor Panel**: Center panel (`max-w-[640px]`, `p-6`).
- **Live Preview**: Fixed right container displaying phone mockup frame (`w-[340px]`).

```tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Top Black Banner */}
      <div className="flex h-[56px] items-center justify-center gap-4 px-4 text-white">
        <span className="text-sm font-semibold">Elevate your design with better themes.</span>
        <button className="h-8 rounded-full bg-[#1cb454] px-3 text-xs font-bold text-white hover:bg-[#254f1a]">
          Upgrade
        </button>
      </div>

      {/* Main Admin Sheet */}
      <div className="flex min-h-[calc(100vh-56px)] rounded-t-[32px] bg-[#efefed] p-4">
        {/* Navigation Sidebar */}
        <aside className="w-[96px] flex-none">
          {/* SidebarNav Component */}
        </aside>

        {/* Editor Main Content Area */}
        <main className="flex-1 max-w-[640px] p-6">
          {children}
        </main>

        {/* Live Phone Preview (Hidden on smaller screens) */}
        <aside className="hidden lg:flex lg:w-[380px] justify-center items-start pt-8">
          <div className="w-[340px] rounded-[40px] bg-white p-4 shadow-[0_8px_30px_rgba(16,16,16,0.10)] border border-[#e5e5e2]">
            {/* Live Profile App Preview */}
          </div>
        </aside>
      </div>
    </div>
  );
}
```

---

### 3.2 Public Profile Page Layout

- **Width Constraint**: Centered container, `max-w-[580px]` (or `620px`).
- **Padding**: `px-5 pt-5 pb-[160px]`.
- **Page Background**: `bg-[#efefed]`.
- **Bottom Banner**: Fixed protection gradient fading to black behind a floating "Join on Linkbase" pill.

```tsx
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#efefed] font-sans flex justify-center">
      <main className="w-full max-w-[580px] px-5 pt-5 pb-40">
        {children}
      </main>

      {/* Floating Join Bottom Protection Gradient */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-[180px] bg-gradient-to-b from-transparent via-black/55 to-black/92 flex flex-col items-center justify-end pb-6 gap-3">
        <div className="pointer-events-auto flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_12px_40px_rgba(16,16,16,0.16)]">
            <span className="font-bold text-[#0e0e0e]">linkbase.to/you</span>
          </div>
          <p className="text-sm font-bold text-white">Join creators on Linkbase today</p>
        </div>
      </div>
    </div>
  );
}
```

---

### 3.3 Marketing Landing Page Layout

- **Section Structure**: Full-bleed solid color blocks (chartreuse `#e9ef6b`, cobalt `#0b4bd1`, berry `#7a1e2e`, sage `#dce6cd`, etc.).
- **Container Wrapper**: `max-w-[1200px]` centered wrapper.
- **Section Padding**: Generous vertical padding (`py-[90px]`).

```tsx
export default function MarketingPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-[#e9ef6b] py-20 px-6">
        <div className="mx-auto max-w-[1200px] text-center">
          <h1 className="font-display text-[64px] font-black tracking-tight leading-tight text-[#0e0e0e]">
            Everything you are. In one simple link in bio.
          </h1>
        </div>
      </section>

      {/* Feature Block */}
      <section className="bg-[#0b4bd1] py-[90px] px-6 text-white">
        <div className="mx-auto max-w-[1200px]">
          {/* Feature Grid */}
        </div>
      </section>
    </div>
  );
}
```

---

## 4. Accessibility Checklist Summary

1. **Text Labels**: All interactive icon buttons (`IconButton`, link rows, share action buttons) must include `aria-label`.
2. **Focus Visibility**: Custom focus rings using `focus-visible:ring-3 focus-visible:ring-[#1cb454]/35`. Never use `outline-none` without providing a focus ring.
3. **Disclosure Elements**: `Accordion` headers use `aria-expanded="true|false"`.
4. **Navigation Rails**: `SidebarNav` active items set `aria-current="page"`.
5. **Tabs**: Tab container uses `role="tablist"`, buttons use `role="tab"` with `aria-selected`.
6. **Form Inputs**: Labels connected via `htmlFor` matching input `id`.
