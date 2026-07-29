# MR Bike Doctor — Illustration Style Guide

Source of truth for every SVG under `assets/illustrations/**` and its
matching React wrapper. Read this before drawing anything so the whole
library reads as one system, not a pile of unrelated graphics.

## Brand palette

Defined as CSS vars in `styles/globals.css` (`:root` + `@theme inline`),
matching the app icon's navy + gold identity. Illustration SVGs use the
literal hex values directly (illustrations are brand-colored art, not
theme-reactive UI, so they don't need `currentColor` — except icon
components, see below).

| Token | Hex | Use |
|---|---|---|
| `--color-primary-dark` | `#0C1650` | Deepest navy — outlines, phone frames, darkest shapes/gradient stops |
| `--brand-navy` (mid, `#162060`) | `#162060` | Primary dark — jumpsuits, vans, dark shapes |
| `--color-primary-light` | `#1A2870` | Secondary dark — shading, gradients |
| `--color-accent` | `#FED428` | Accent — tools, highlights, CTAs inside art, energy/motion marks, badges, gradient stops |

Neutrals: white `#ffffff`, and light warm grays (`#f1f5f9`, `#e2e8f0`) for
skin/ground/secondary shapes. Keep every illustration to navy + gold +
neutrals — no other hues — so the library reads as one brand.

## Style

- **Geometric flat-plus-depth**, not detailed character art: build bikes,
  mechanics, phones, and vans out of simple primitives — rounded rects,
  circles, capsules, simple bezier silhouettes. Depth comes from soft
  `linearGradient` fills and a single soft drop-shadow (`feDropShadow` or a
  blurred ellipse beneath the subject), not from many gradients or
  outlines.
- **Restrained line work**: 2–3px strokes in navy at reduced opacity for
  detail lines (panel seams, stitching, tread), never full black outlines.
- **A bike is always recognizable**: two wheels (circle + spoke hint),
  a frame, at minimum. Simplification is fine; illegibility isn't.
- **Mechanics wear navy jumpsuits with a small yellow chest accent** (never
  the literal logo image — that's raster and can't be inlined into hand-
  authored SVG; instead nod to the brand with a rounded badge shape in
  yellow-on-navy, echoing the real app-icon badge without copying it).
- **Scenes get a soft rounded-blob or dot-grid backdrop** (see `shared/`)
  at low opacity, never a hard rectangle background — illustrations must
  drop onto both light and dark section backgrounds cleanly, so avoid
  full-bleed white/navy rectangles as the outermost shape.
- **No text baked into art** (breaks localization/accessibility) except
  a generic "MR" chest-badge mark, which is a shape, not a word.

## Technical conventions

- **Scenes** (home/about/blog/faq/contact/download/cities): `viewBox="0 0
  400 300"` widescreen canvas, `<svg>` root with no fixed `width`/`height`
  (scales via container). Root `<svg>` gets `role="img"` +
  `<title>` describing the scene for accessibility.
- **Icons** (services/benefits): `viewBox="0 0 24 24"` square canvas,
  drawn with `currentColor` (fills/strokes) so the existing icon-tile
  pattern (`<span class="bg-primary/10 text-primary size-11 ..."><Icon
  class="size-5"/></span>`) recolors them automatically like the lucide
  icons they replace — no baked-in navy/yellow hex in icon files.
- **Layer IDs for future animation**: group moving parts in a named `<g
  id="...">` (e.g. `id="wheel-front"`, `id="gear"`, `id="phone-glow"`) even
  if no animation ships yet — this is what "Lottie-ready layers" means in
  practice for hand-authored SVG (clean, separable groups), not literal
  Lottie JSON.
- **A couple of illustrations per batch should carry a small built-in SMIL
  loop** (`<animateTransform>` rotating a gear, `<animate>` a gentle
  float/opacity pulse) so the "animated" requirement is demonstrably true
  out of the box, not just "technically possible later." Keep loops subtle
  and slow (6–10s), and make sure they still look correct as a static
  frame for reduced-motion contexts.
- File names: kebab-case, matching the descriptive names used in this
  guide's brief (e.g. `doorstep-mechanic.svg`, `battery-replacement.svg`).

## Folder map

```
assets/illustrations/
  home/        hero + homepage scenes
  services/    one icon per POPULAR_SERVICES entry (components/home/PopularServices/mock-data.ts)
  benefits/    one icon per WHY_CHOOSE_US_FEATURES entry (components/home/WhyChooseUs/mock-data.ts)
  about/       company/team/technology scenes
  blog/        one scene per real BLOG_CATEGORIES entry (components/blog/mock-data.ts) — do NOT invent generic categories, use the real 7
  faq/         support/help-center scenes
  contact/     contact/workshop scenes
  download/    app-usage scenes
  cities/      generic city-service scenes (not city-specific — only Hyderabad is live)
  shared/      reusable backdrop motifs (dot-grid, blobs) referenced by name/recipe, not by cross-file <use>
```

Icons additionally get a thin React wrapper under `components/icons/services/`
or `components/icons/benefits/` (same file content inlined as JSX, so
Tailwind/currentColor sizing works exactly like the lucide icons they
replace).
