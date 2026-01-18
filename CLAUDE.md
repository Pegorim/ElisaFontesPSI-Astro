# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

Requires Node.js >= 20.0.0.

## Architecture

This is a psychology practice website built with **Astro 5** and **Tailwind CSS 4**.

### Tech Stack
- Astro 5 with static site generation
- Tailwind CSS 4 via Vite plugin (configured in `astro.config.mjs`)
- TypeScript with strict config

### Project Structure
- `src/pages/` - Page routes (file-based routing)
- `src/layouts/Layout.astro` - Base HTML layout with meta tags and fonts
- `src/components/` - Reusable UI components (Header, Footer, Hero, ServiceCards, etc.)
- `src/content/` - Content collections for blog posts and pages
- `src/styles/global.css` - Theme variables and global styles

### Content Collections
Defined in `src/content/config.ts`:
- **blog** - Blog posts with title, description, pubDate, image (optional), category
- **pages** - Static pages with title and optional description

### Styling
Theme colors and fonts are defined in `src/styles/global.css` using Tailwind's `@theme` directive:
- `--color-primary-bg`, `--color-card-bg`, `--color-accent`, `--color-text-main`
- Fonts: Playfair Display (headings), Lato (body)

### Language
Site content is in Brazilian Portuguese (pt-BR).

## Extra Claude Rules:
1. First think through the problem, read the codebase for relevant files.
2. Before you make any major changes, check in with me and I will verify the plan.
3. Please every step of the way just give me a high level explanation of what changes you made
4. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
5. Maintain a documentation file that describes how the architecture of the app works inside and out.
6. Never speculate about code you have not opened. If the user references a specific file, you MUST read the file before answering. Make sure to investigate and read relevant files BEFORE answering questions about the codebase. Never make any claims about code before investigating unless you are certain of the correct answer - give grounded and hallucination-free answers.
