# MR Bike Doctor — Homepage UX Blueprint (Phase 3)

Status: Draft, pending approval. No UI, components, or code are produced in
this phase. This document assumes the sitemap and content model from
[Phase 2](phase-2-blueprint.md) and [Phase 2.5](phase-2.5-content-architecture.md)
as fixed — it designs the homepage's user flow, section layout, and
content behavior on top of them, not instead of them.

---

## Section 1 — User Journeys

Seven visitor types, each with a different entry point and a different
"good outcome." The homepage has to serve all seven from one layout —
these journeys are what the section order in Section 2 is optimized
against.

| Visitor                                   | Arrives via                                           | What they need first                                                                     | Path through the homepage                                                                            | Converts by                                       |
| ----------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **1. Looking for bike service** (general) | Direct/organic, no urgency                            | A fast, credible answer to "what is this"                                                | Hero → Serviceability → Popular Services → picks a service                                           | Tapping a service card or the primary CTA         |
| **2. "Bike service near me"**             | Organic search, location-primed                       | Immediate confirmation they're covered                                                   | Hero (glance) → Serviceability resolves automatically → sees Available state with area name          | Book Now inside the widget, or Download           |
| **3. Emergency repair**                   | Search or direct, high urgency, mobile                | An unmissable urgent path, zero scrolling required                                       | Hero → a persistent Emergency CTA visible without scrolling (not the 4th item in a services grid)    | Tap-to-call / WhatsApp, bypassing everything else |
| **4. Existing app user**                  | Habit, brand search, or a blog link                   | A fast way back into the app, not a re-sell of the value prop                            | Header's lightweight "Open App" link → skips the marketing funnel entirely                           | Opens the app (deep link) or heads to Support     |
| **5. New visitor** (cold, first time)     | Word of mouth, ad, awareness                          | The fullest explanation available                                                        | Hero → Serviceability → Popular Services → How It Works → Why Choose Us → Trust → Download           | Download App, after the full linear read          |
| **6. Garage owner wanting to partner**    | Header nav, or scroll-discovery                       | To not be routed through the customer funnel at all                                      | Header "Partner With Us" link (bypasses homepage body) or the dedicated Partner section further down | Register Your Garage → `/partner`                 |
| **7. SEO visitor from a blog**            | Clicks the logo/nav from an article they already read | Confirmation this is a real, credible business — they already got value from the article | Quick trust glance → straight to Popular Services (topic already primed)                             | Service page click-through or Download            |

**Design implication:** journeys 2 and 3 both need something resolved
_before_ the fold ends — a location/urgency decision — which is why the
Serviceability widget sits immediately after the Hero (Section 2), not
mid-page. Journey 6 needs an escape hatch that skips the entire customer
funnel, which is why "Partner With Us" lives in the header nav, not only
inside the homepage body.

---

## Section 2 — Homepage Structure

```
Header
  ↓
Hero
  ↓
Search / Serviceability Widget
  ↓
Popular Services
  ↓
How It Works
  ↓
Why Choose MR Bike Doctor
  ↓
Trust & Numbers band
  ↓
Brands We Service
  ↓
Cities We Serve
  ↓
Featured Garages
  ↓
Customer Reviews
  ↓
Download App
  ↓
Become a Partner
  ↓
Blogs
  ↓
FAQs
  ↓
Final CTA banner
  ↓
Footer
```

| #   | Section                                    | Why it exists here                                                                                                                                                                                                                   |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| —   | **Header**                                 | Sticky nav + a persistent location indicator + a Download button. Also where Journey 6 (partner) exits without touching the rest of the page.                                                                                        |
| 1   | **Hero**                                   | One value-prop sentence + primary/secondary CTA. The only content 100% of visitors see (Section 3).                                                                                                                                  |
| 2   | **Serviceability widget**                  | Promoted directly under the Hero — Journeys 2 and 3 both need a location/urgency decision before anything else, and making them scroll for it costs conversions on exactly the two most time-pressured visitor types (Section 4).    |
| 3   | **Popular Services**                       | Lets Journey 1 and Journey 7 (topic-primed) self-identify immediately (Section 5).                                                                                                                                                   |
| 4   | **How It Works**                           | Kills "how does this even work" hesitation for Journey 5 (cold visitors) before asking for an install.                                                                                                                               |
| 5   | **Why Choose MR Bike Doctor**              | States the differentiation argument the Hero has no room for.                                                                                                                                                                        |
| 6   | **Trust & Numbers band**                   | A compact proof strip (ratings, verified garages, bookings, cities, brands) — distinct from the fuller Brands/Cities/Reviews sections below it (Section 6 explains the split).                                                       |
| 7   | **Brands We Service**                      | Serves brand-name search intent directly; reassures brand-loyal visitors.                                                                                                                                                            |
| 8   | **Cities We Serve**                        | Internal-linking backbone into Area pages; proves local presence concretely.                                                                                                                                                         |
| 9   | **Featured Garages** _(new since Phase 2)_ | Made possible by the Garage entity formalized in Phase 2.5 — showing real, named, verified local businesses is a stronger trust signal than editorial copy, and it's a direct payoff of the partner-acquisition funnel in Section 8. |
| 10  | **Customer Reviews**                       | The full, browsable set — pulled from the structured Review entity (Phase 2.5 §14), not hand-written testimonials.                                                                                                                   |
| 11  | **Download App**                           | The dedicated conversion moment for the app-install goal (Section 7).                                                                                                                                                                |
| 12  | **Become a Partner**                       | Serves Journey 6 for visitors who scrolled this far without using the header shortcut (Section 8).                                                                                                                                   |
| 13  | **Blogs**                                  | Freshness signal + a return path for Journey 7 and repeat visitors.                                                                                                                                                                  |
| 14  | **FAQs**                                   | Objection-handling + the best on-page surface for exact-match long-tail phrasing (Section 9).                                                                                                                                        |
| 15  | **Final CTA banner**                       | One last unambiguous prompt for anyone who scrolled the whole page without converting on an earlier CTA.                                                                                                                             |
| 16  | **Footer**                                 | Full sitemap links — the single biggest lever for how search engines discover the deep pages (services, cities, brands, garages).                                                                                                    |

This is the same backbone as Phase 2 §4, evolved with two changes worth
calling out explicitly: the Serviceability widget is promoted from
"embedded in the hero" to its own section immediately following it (driven
by the Journey 2/3 analysis above), and Featured Garages is a new section
made possible only because Phase 2.5 formalized Garage as a full entity
with its own SEO page.

---

## Section 3 — Hero Section

**Layout:** two-column on desktop — left column is the text stack
(eyebrow → headline → subheadline → CTA row → trust strip), right column
is the app-preview visual. Single column on mobile, stacked in that same
order, with the visual compressed to a lightweight illustration rather
than the full phone mockup (Section 10).

**Headline** (value prop, not a slogan):

> Doorstep Bike Service, Booked in Minutes

**Subheadline** (states the mechanism + location, doing quiet SEO work
per Section 9):

> Verified mechanics come to your home or office in Hyderabad — book an
> oil change, battery replacement, or full service without the garage
> visit.

**Primary CTA:** `Download the App` — the app-install goal is the
homepage's top priority (Phase 2 §2, Goal 1).
**Secondary CTA:** `Check Service Near You` — a low-friction alternative
that scrolls to (or visually anchors) the Serviceability widget rather
than opening a new page, so Journey 2 visitors aren't asked to commit to
an install before they even know they're covered.

**Trust indicators** (small, inline, next to or below the CTAs — not a
separate section, just enough to not ask for an install cold):
a star-rating chip, a "Verified Mechanics" badge, and a one-line stat.

**Statistics strip:**
`50,000+ bikes serviced   ·   4.8★ rating   ·   30 min avg. response`
— three numbers only; more starts to compete with the headline for
attention.

**Background illustration concept:** not a generic gradient blob or stock
photo of a bike. A restrained line-art motif combining a location pin and
a wrench/tool silhouette — reinforcing "doorstep" (location) and
"mechanical service" (tool) in one mark, used as a subtle background
texture behind the text column, not as competing foreground art.

**App preview concept:** a single phone mockup showing the live
tracking/booking screen (map + mechanic ETA) — the most concrete,
differentiated thing the app does, and the one screen a visitor can
"get" in half a second without reading anything.

**Serviceability widget placement:** rendered as its own section
immediately below the Hero (Section 2), not nested inside it — but
visually connected, e.g. the widget card slightly overlaps the Hero's
bottom edge on desktop so the two read as one continuous unit rather than
a hard break.

---

## Section 4 — Search & Serviceability Widget

A single card: a location text input with autocomplete (area name,
pincode, or landmark) plus a **Use Current Location** button. Calls the
shared serviceability resolver (Phase 2.5 §10, same system the app uses —
Phase 2 §13). On page load, before the visitor types anything, a
best-effort silent IP-based guess pre-fills the input as a suggestion
("Looks like you're near Gachibowli — is this right?") rather than
committing to it — convenience without false confidence.

| State                               | What's shown                                                                                               | Primary action                                                                 | Secondary action                      |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------- |
| **Idle** (no location resolved yet) | "Check if we're in your area" + the two input options                                                      | —                                                                              | —                                     |
| **Available**                       | Resolved area name, estimated response time for that area, a confirmed/positive visual treatment           | `Book Now` (opens app deep link or a lightweight call/WhatsApp option)         | `View services in [Area]` → Area page |
| **Coming Soon**                     | "We're launching in [Area] soon"                                                                           | `Notify Me` (captures phone/email into the Waitlist Lead entity, Phase 2.5 §1) | `Change Location`                     |
| **Temporarily Paused**              | Same visual template as Coming Soon, with an explanatory note instead ("Paused in [Area] — resuming soon") | `Notify Me`                                                                    | `Change Location`                     |

Every state is communicated with an icon **and** text label, not color
alone (Section 11). This widget and the one embedded contextually on
individual service pages (Phase 2 §9/§13) are the same component reading
from the same resolver — not two implementations.

---

## Section 5 — Popular Services

**Card content, per service:** icon (from the Service entity's
`iconImageId`, Phase 2.5 §3), service name, one-line description, a price
preview ("Starting ₹XXX" from `basePriceRange`), and a time estimate
("30–45 min"). CTA: `Book Now` for high-intent services, `Learn More` for
descriptive ones — the two variants share the same card layout.

> **Data-model note:** a time-estimate field isn't in the Phase 2.5
> Service schema yet. This is a small, additive field
> (`estimatedDurationMinutes`) to add to that entity — not a redesign of
> it — flagged here rather than assumed, per the instruction not to
> change the content model in this phase.

**Related links:** shown on the individual service page (already planned,
Phase 2 §5), not crammed onto the homepage card — keeping each card to a
single glanceable unit rather than a mini service page.

**Which services show, and in what order:** data-driven, not hand-fixed —
pulled from `GET /api/popular-services` (Phase 2.5 §10) ranked by actual
booking volume, falling back to a manually curated order at launch before
that data exists.

**Layout:** a horizontal, thumb-swipeable card carousel on mobile (9–10
services won't fit vertically without pushing everything else far down
the page); a 3–4 column static grid on tablet/desktop with a "View all
services" link as the final grid cell.

---

## Section 6 — Trust Building

This section is a **compact proof band**, not a repeat of the fuller
sections that already exist further down the page (Brands, Cities,
Reviews each get their own dedicated section) — its job is to put every
trust dimension in one glanceable strip early, while the deeper
treatment of each lives where a visitor who wants more detail will scroll
to anyway.

**Visual hierarchy:** a row of 4–6 stat tiles (large number + short
label), horizontally scrollable on mobile, a static row on desktop:

- Verified Garages — count, plus a one-line note on what "verified" means
- Rating — aggregate value + review count, sourced from the `Review`
  rollups in Phase 2.5 §14 (only bookings-verified reviews count, so the
  number is defensible, not just claimed)
- Bookings Completed — a running total
- Cities Covered — count
- Brands Supported — count, linking down to the full Brands section

Deliberately **no review quotes here** — a rotating testimonial carousel
already lives in the dedicated Customer Reviews section further down;
repeating quotes in both places would read as padding rather than proof.

---

## Section 7 — Download App

**Store badges:** Google Play as the primary, live badge; App Store badge
present but visually marked "Coming Soon" (Play is the live channel per
current config; iOS ships later). **QR code** alongside both, resolving
through a single smart link that routes to the correct store by device —
useful for desktop visitors who'd otherwise have to search manually.

**Benefits list:** short, specific, app-only capabilities — live booking
tracking, multi-bike wallet & service history, in-app offers and
notifications — not a repeat of the website's own value prop, since the
point of this section is to justify the _install_, not the _service_
itself again.

**Screenshots:** a swipeable phone-mockup carousel, 3–4 screens — booking
flow, live tracking map, digital invoice, service history — each doing
one job (show the one differentiated action, not a full feature tour).

---

## Section 8 — Become a Partner

**Value proposition**, framed from the garage owner's side, not the
platform's:

> Grow your garage with steady bookings — no upfront cost.

**Benefits:** a consistent flow of nearby customers, a verified badge
that raises credibility, flexible commission terms, simple digital tools
to manage incoming bookings, and free exposure through the garage's own
SEO-indexed profile page (Phase 2 §12).

**CTA:** `Register Your Garage` → `/partner`.

**Expected conversion flow**, restating the growth loop from Phase 2 §12
because this section is its literal entry point: homepage teaser (one
CTA) → full application on `/partner` → a Partner Application record is
created (Phase 2.5 §1) → on approval, a live Garage profile page is
generated automatically → that page compounds the site's local SEO
coverage, which drives more organic leads, which justifies acquiring more
partners.

---

## Section 9 — SEO Content (natural coverage, no stuffing)

Each target phrase has one natural home — never injected as a list:

| Phrase                | Where it appears naturally                      |
| --------------------- | ----------------------------------------------- |
| Bike Service          | Hero headline, Popular Services heading         |
| Doorstep Bike Service | Hero subheadline, How It Works step 1           |
| Bike Repair           | Popular Services card copy, Why Choose Us       |
| Bike Mechanic         | Trust band ("verified mechanics"), footer links |
| Engine Oil Change     | Popular Services card (Oil Change)              |
| Puncture Repair       | Popular Services card                           |
| Battery Replacement   | Popular Services card                           |
| Bike Service Near Me  | Serviceability widget copy, Hero secondary CTA  |

**The FAQ section is the highest-value surface for exact-match long-tail
phrasing** — real questions naturally contain the query itself ("How much
does bike service cost near me?"), which is a legitimate reason for a
phrase to appear verbatim without it reading as stuffing anywhere else on
the page.

---

## Section 10 — Responsive Strategy

Breakpoints follow the values already defined in the Phase 1 foundation
(`constants/breakpoints.ts`): `sm 640 / md 768 / lg 1024 / xl 1280`.

| Section               | Mobile (< 768)                                                                                     | Tablet (768–1024)                                   | Desktop (≥ 1024)                           |
| --------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| Hero                  | Single column, stacked; illustration compressed, phone mockup dropped in favor of a lighter visual | Two columns begin to separate; smaller phone mockup | Full two-column, phone mockup at full size |
| Serviceability widget | Full-width card, stacked inputs                                                                    | Full-width card, inline inputs                      | Card overlapping Hero's bottom edge        |
| Popular Services      | Horizontal swipe carousel                                                                          | 2–3 column grid                                     | 4 column grid + "view all" tile            |
| How It Works          | Vertical stepped list                                                                              | 2×2 grid                                            | Single horizontal row                      |
| Trust band            | Horizontal scroll of stat tiles                                                                    | 3-per-row grid                                      | Full row, all tiles visible                |
| Brands / Cities       | Horizontal scroll of logo/city chips                                                               | Wrapped grid                                        | Full grid                                  |
| Featured Garages      | Single-card carousel                                                                               | 2-card grid                                         | 3–4 card grid                              |
| Reviews               | Single-card carousel                                                                               | 2-card grid                                         | 3-card grid                                |
| Download App          | Stacked: badges → QR → screenshots                                                                 | Two-column: text/badges beside screenshots          | Same two-column, more breathing room       |
| FAQs                  | Accordion, one open at a time                                                                      | Accordion                                           | Two-column accordion                       |

---

## Section 11 — Accessibility

- **Keyboard navigation:** logical tab order following visual order; a
  skip-to-content link before the header; every carousel (Popular
  Services, Reviews, Screenshots) reachable and operable via arrow keys,
  not mouse/touch-drag only.
- **Contrast:** text and interactive elements meet WCAG AA at minimum,
  including inside the Serviceability widget's status states.
- **Touch targets:** minimum 44×44px for every tappable element, including
  carousel dots/arrows and icon-only buttons.
- **ARIA:** icon-only buttons (location, carousel controls) get accessible
  labels; the Serviceability widget's live status update is announced via
  an `aria-live` region so screen reader users hear the Available/Coming
  Soon/Paused result without needing to re-navigate to it.
- **Screen readers:** carousels use proper list/slide roles; auto-rotating
  elements (review carousel) include a visible pause control and never
  autoplay content that can't be paused.
- **Focus states:** every interactive element has a visible focus
  indicator that doesn't rely on color alone; serviceability states pair
  color with an icon and a text label for the same reason.

---

## Section 12 — Performance

- **Lazy loading:** everything below the Hero + Serviceability widget
  loads lazily (Popular Services onward); the Hero's visual and the
  widget itself are the only above-the-fold assets loaded eagerly.
- **Image loading priority:** Hero visual > Serviceability widget icon >
  Popular Services icons > everything below the fold (Garage photos, Blog
  images), which defers until it scrolls into view.
- **Font loading:** already self-hosted via `next/font` with
  `display: swap` in the Phase 1 foundation (`lib/fonts.ts`) — no new font
  requests to add, no external font CDN, no layout shift from a
  late-swapping webfont.
- **Animation strategy:** subtle entrance animations triggered on
  scroll-into-view for below-fold sections only; no hero video or heavy
  parallax that competes with LCP; every animation respects
  `prefers-reduced-motion`.
- **Core Web Vitals:**
  - _LCP_ — the Hero headline/visual must render fast; the Serviceability
    widget's initial (idle) state must not block on a network call.
  - _CLS_ — reserve fixed space for every carousel, image, and the
    widget's result card before content loads, so nothing jumps once data
    arrives.
  - _INP_ — keep the widget and carousels on lightweight, native-feeling
    interactions rather than heavy animation/JS libraries for what are
    fundamentally simple UI patterns.

---

## Next step

Pending approval of this document, Phase 4 begins: Homepage UI
Development, implementing this section order, hero content, widget
states, and responsive/accessibility/performance rules against the data
model defined in Phase 2.5.
