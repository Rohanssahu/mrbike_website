# MR Bike Doctor — Marketing Website

Independent Next.js 15 project. Promotes the MR Bike Doctor mobile app and
targets `mrbikedoctor.com`. Not part of the mobile app or its build — no
shared code with `backend/`, `admin/`, or `user/`.

## Stack

- Next.js 15 (App Router, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui (`base-nova` style, `neutral` base color)
- Framer Motion
- Lucide React (icons)
- ESLint (`next/core-web-vitals`, `next/typescript`) + Prettier (with
  `prettier-plugin-tailwindcss` for class sorting)

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

Other scripts: `build`, `start`, `lint`, `lint:fix`, `format`,
`format:check`, `typecheck`.

## Folder structure

```
app/            Routes only (layout, pages, sitemap.ts, robots.ts). No business logic.
components/
  ui/           shadcn/ui primitives (button, card, dialog, ...). Don't hand-edit — regenerate via `npx shadcn add`.
  seo/          Presentational SEO components (JsonLd script injector).
features/       Domain modules added in Phase 2 (features/home, features/services, ...), each owning its own components/hooks/data.
lib/            Framework-level helpers (fonts, shadcn's `cn`).
hooks/          Reusable React hooks (use-media-query, ...).
services/       Data-access layer — API/CMS clients. Empty until Phase 2 defines real integrations.
utils/          Framework-agnostic pure functions (slugify, formatDate).
types/          Shared TypeScript types (SiteConfig, SeoProps, ...).
constants/      Static app-wide constants (breakpoints, ...).
config/         `env.ts` (typed env access) and `site.ts` (single source of truth for brand name, domain, description, contact info — feeds metadata, JSON-LD, sitemap).
seo/            SEO logic: `metadata.ts` (buildMetadata/defaultMetadata) and `json-ld.ts` (organizationSchema, websiteSchema, breadcrumbSchema).
styles/         globals.css (Tailwind + shadcn theme tokens).
content/        MDX/JSON page content — populated in Phase 2.
assets/         Bundler-optimized images/SVGs imported into components (vs. public/, served verbatim).
public/         Static files served as-is (favicon via app/favicon.ico, site.webmanifest).
```

## Absolute imports

`@/*` maps to the project root (`tsconfig.json`), e.g. `@/config/site`,
`@/components/ui/button`, `@/seo/metadata`.

## SEO foundation

- **Metadata**: `seo/metadata.ts` exports `defaultMetadata` (used in root
  `app/layout.tsx`) and `buildMetadata(overrides)` for individual routes to
  call from their own `export const metadata`. Handles title templating,
  canonical URLs, robots directives, Open Graph, and Twitter Cards.
- **JSON-LD**: `seo/json-ld.ts` builds schema objects (`Organization`,
  `WebSite`, `BreadcrumbList`); `components/seo/json-ld.tsx` renders them as
  a `<script type="application/ld+json">` tag. Organization + WebSite schema
  is already wired into the root layout.
- **Sitemap / robots**: `app/sitemap.ts` and `app/robots.ts` use the Next.js
  Metadata Route conventions and read from `config/site.ts`, so they stay in
  sync with the canonical domain automatically. Add new routes to the
  `routes` array in `sitemap.ts` as pages are built.
- **Site identity**: everything above pulls from `config/site.ts`, which
  itself reads validated env vars from `config/env.ts` — update the site
  name, description, or contact info in one place.

## What's intentionally not here yet

No homepage design, service pages, city pages, or written copy — this
commit is foundation only. `app/page.tsx` is a placeholder. `content/`,
`features/`, `services/`, and `assets/` are empty (each has a README
explaining its purpose) pending Phase 2.
# mrbike_website
