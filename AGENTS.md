<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Linkbase Project Guide

Welcome to **Linkbase**. This document serves as a guide for AI agents and human developers working on this codebase.

---

## 1. Project Overview & Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI & React**: React 19 / React DOM 19
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Language**: TypeScript (v5) in `strict` mode
- **Linter**: ESLint 9 with `eslint-config-next`

---

## 2. Project Directory Structure

```
linkbase/
├── app/                  # Next.js App Router root
│   ├── favicon.ico       # Favicon asset
│   ├── globals.css       # Global styles & Tailwind CSS imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main landing page component
├── public/               # Static assets (images, SVGs, etc.)
├── .gitignore            # Git ignore rules
├── AGENTS.md             # AI Agent instructions (this file)
├── CLAUDE.md             # Anthropic Claude instructions reference (@AGENTS.md)
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── next-env.d.ts         # Next.js TypeScript declarations
├── package.json          # Dependencies & scripts
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS v4
└── tsconfig.json         # TypeScript configuration (`@/*` -> `./*`)
```

---

## 3. Development Workflow & Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles and builds the production bundle |
| `npm run start` | Runs the compiled production build |
| `npm run lint` | Runs ESLint analysis across the project |

---

## 4. Architectural & Development Conventions

### Path Aliases
- Use `@/*` to import from the project root (e.g. `import Header from '@/components/Header'`).

### Next.js App Router Guidelines
- Default to **Server Components** inside `app/`.
- Add `'use client'` at the top of component files only when client-side interactivity, state (`useState`), or hooks (`useEffect`, browser APIs) are needed.
- Note Next.js 16 breaking changes and APIs — consult `node_modules/next/dist/docs/` when introducing new routing or data fetching patterns.

### Styling Guidelines
- Tailwind CSS v4 is configured via PostCSS.
- Place root global styles or custom `@import "tailwindcss";` directives in `app/globals.css`.

---

## 5. Instructions for AI Agents

1. **Do Not Remove Next.js Agent Block**: The `<!-- BEGIN:nextjs-agent-rules -->` comment block at the top of `AGENTS.md` is automatically maintained by Next.js (`next dev`). Always retain it.
2. **Verification**: Always run `npm run lint` or `npm run build` to verify code changes before concluding tasks.
3. **TypeScript Compliance**: Ensure strict typing without using `any` unless strictly necessary.

