# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4, confirmed by the user over Astro and plain HTML. Motion via `motion` (Framer Motion). Static-exportable single-page marketing site; no backend, no database, no CMS.

## Users

Primary: an engineering hiring manager or technical recruiter scanning a candidate for fit in under ninety seconds — usually on desktop, often late, usually with a browser full of other candidates' tabs.

Secondary: a peer engineer who arrived from a link in a repo, a comment thread, or a conference chat and wants to see what the person actually builds and writes.

Tertiary (the real buyer of this artifact): a developer evaluating this as a portfolio **template** they could adopt for themselves.

## Product Purpose

A single-page personal portfolio for a full-stack developer: who they are, what they build with, what they have written, what they have shipped, where they have worked, and how to reach them. Success is a visitor who can state the developer's stack and seniority from memory after one pass, and who has an obvious next action (view work, read writing, or make contact).

## Positioning

This is **Ramesh Sharma's real personal portfolio**, built on the spec-sheet template's visual system. Identity, work history, and skills are real, sourced from his CV. The Projects section links two real repositories; the Articles section remains placeholder, awaiting real writing.

## Operating Context

Read in a browser, most often desktop at 1280–1600px, frequently on a phone from a shared link. Sits alongside the visitor's other tabs: GitHub, a terminal, an ATS, other candidates' portfolios. No authentication, no state, no personalization. Deep-linkable in-page sections driven by the nav.

## Capabilities and Constraints

- Sections the nav must honor: About, Projects, Articles, Contacts. Work history and technology stack are part of About's territory.
- A language toggle (En / Ge) appears in the reference. Recorded as **undecided**: real i18n was not requested. It ships as a visible, non-functional-by-default control only if it can be made honest; otherwise it is dropped.
- Static site, no server. Contact resolves to `mailto:` and social links, not a form backed by an API.
- Terminology on the surface is engineering-literal: stack names, role titles, durations, article titles.
- No analytics, no cookie banner, no consent surface required.

## Brand Commitments

- **Binding visual reference supplied by the user** (`.impeccable/reference/pinned-reference.png`): a near-black portfolio with poster-scale monospace display type, hairline-outlined capsule components, large thin orbital arcs, mono technical section labels in `... /label ...` form, and a full-width hairline work-history table with an inverted hover row. The user confirmed fidelity level: **same visual world, composition mine to author.** This pin outranks any category-default aesthetic.
- CyberArrow, Prabidhee Innovations, and Anshu Tech are Ramesh's real former/current employers — do not alter their names or invent metrics, logos, or endorsements for them.

## Evidence on Hand

Sourced from Ramesh Sharma's CV and his GitHub repos. What's real vs. still placeholder:

- Developer identity: **Ramesh Sharma**, Senior Full-stack Developer — real, from CV.
- Employers, date ranges, and stack — real (CyberArrow, Prabidhee Innovations, Anshu Tech).
- Projects — two real repos (`dcmc-vue`, `pos`), summarized from their actual dependencies and README content.
- Articles — still placeholder (`[Add an article title]` entries); awaiting real writing.
- Portrait imagery — a real photo, cropped to the layout's 5:7 figure ratio.
- **Future work must not invent** client names, revenue, user counts, benchmark numbers, awards, or availability claims presented as fact — this applies doubly now that the site is real: an unverifiable claim here is a résumé claim, not template flavor.

## Product Principles

1. **The shell is the pitch.** Because the content is placeholder, composition, typography, and interaction carry the entire argument.
2. **Engineering-literal, never decorative-technical.** Mono type, tables, and labels are used because the subject is technical, not as costume; every technical element states a real fact about the resident content.
3. **Scannable in one pass.** Stack, seniority, and contact are reachable without reading prose.
4. **Every placeholder is labeled.** An adopter must be able to find and replace all synthetic content from one list.
5. **Monochrome discipline.** Restraint in color is the system's spine; emphasis comes from scale, weight, and inversion.

## Accessibility & Inclusion

No user-specific requirement was established, so the standard is WCAG 2.2 AA: keyboard-operable nav, carousel, and table; visible focus; text contrast ≥ 4.5:1 against the near-black ground; `prefers-reduced-motion` honored by every reveal and transition; the carousel never the sole route to its content.
