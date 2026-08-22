# CLAUDE.md

## Project

Ramesh Sharma's personal portfolio — a single-page site, not a demo/template. See `PRODUCT.md` for the full product spec (users, positioning, brand commitments, what's real vs. still placeholder).

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4. Static, single page, no backend/database/CMS.

## Content

All page content (identity, socials, skills, work history, projects, articles) lives in `app/data/content.ts` — this is the single source of truth. Prefer editing that file over hardcoding strings in components.

- The Articles section is still placeholder content (`[Add an article title]`) — do not invent real-looking articles to fill it.
- Do not invent employers, metrics, client names, or claims not present in `content.ts` or sourced from the user — this is a real résumé-adjacent site, not demo flavor text.

## Skills

- `.claude/skills/impeccable/SKILL.md` — use for any design, redesign, visual audit, polish, or frontend UI work. There's a binding visual reference at `.impeccable/reference/pinned-reference.png`; the direction contract is also embedded in `app/layout.tsx` (the `CONTRACT` constant) — read it before making structural or visual changes.
