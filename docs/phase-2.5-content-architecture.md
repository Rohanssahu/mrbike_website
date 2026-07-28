# MR Bike Doctor — Content Architecture & Data Foundation (Phase 2.5)

Status: Draft, pending approval. No UI or code is produced in this phase.
This document is the single source of truth for how every page on
mrbikedoctor.com gets its data — city to area to garage to blog post —
for the next 5–10 years of growth. Phase 3 (Homepage Design &
Development) builds against this data model, not against hardcoded copy.

The one rule everything below serves: **adding a new city, service,
brand, model, garage, or blog post is a data change, never a code
change.**

---

## Section 1 — Master Content Model

Every entity below, why it exists, and how it differs from entities the
project brief listed separately but that are architecturally the same
thing.

| Entity                                      | Why it exists                                                                                                                                                                                                                                                  |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **City**                                    | Top-level geography container. Gives every deeper entity (Area, Garage) a parent, and gives the business itself a concrete expansion unit — Hyderabad today, the next city tomorrow, with no new page template required (Phase 2 §8).                          |
| **Area**                                    | Neighborhood-level geography under a City. Exists specifically to win hyperlocal "near me" search (Phase 2 §9) and to give Garages and Reviews a precise location tag rather than a city-wide one.                                                             |
| **Service**                                 | A bookable job type (oil change, brake service, …). The core transactional unit — Brand, Model, Garage, and Pricing all ultimately attach to a Service.                                                                                                        |
| **Brand**                                   | A bike manufacturer (Honda, Royal Enfield, …). Exists to catch brand-name search intent and to scope Models.                                                                                                                                                   |
| **Bike Model**                              | A specific model under a Brand. Exists to catch model-level long-tail search ("activa 6g service cost") and to scope service applicability and pricing precisely (Phase 2 §10).                                                                                |
| **Garage**                                  | A physical partner location. The one entity sourced from **live partner/ops data**, not editorial content — it's what ties Area, Brand, and Service together in one real, named place (Phase 2 §12).                                                           |
| **Review**                                  | A customer review, tagged against any combination of Service / Brand / Model / Garage / City / Area. Supplies every page type with real, unique content without hand-writing it (Phase 2 §14).                                                                 |
| **FAQ**                                     | A question/answer unit, taggable to any entity or page type, with a `context` of `marketing` (pre-booking objections) or `support` (post-booking help) — one entity, two use cases, so "Support Pages" from the brief don't become a second parallel system.   |
| **Offer**                                   | A promo/discount tied to a Service, optionally scoped to Brand/Model/City. Powers `/offers` and app-install campaigns.                                                                                                                                         |
| **Blog Post**                               | An article tied to one Category, optionally cross-linked to specific entities (a brand, a model, a city) for internal linking (Phase 2 §17).                                                                                                                   |
| **Category**                                | Groups Blog Posts (Maintenance Tips, Brand Guides, City Guides, …) and defines which entity type each category funnels traffic toward.                                                                                                                         |
| **Symptom**                                 | A "my bike won't start"–style problem, mapped to likely causes and recommended Services. Authored now as ordinary FAQ/blog content; becomes the mapping data for on-site AI search later (Phase 2 §18) — added to the model now so no refactor is needed then. |
| **Partner Application**                     | The intake record from the `/partner` funnel. Deliberately **separate** from Garage — an application only becomes a live, SEO-indexed Garage record once approved, so "applied" and "verified/live" are never the same state.                                  |
| **Legal Page**                              | Singleton long-form documents (Privacy, Terms, Refund Policy, Delete Account instructions), versioned by effective date. No relational complexity — these don't connect to other entities.                                                                     |
| **App Download** (config, not a collection) | A single record — store URLs, QR code, screenshot set, current version/changelog — referenced by every Download CTA sitewide, so a store-link change is one edit, not a find-and-replace across the site.                                                      |
| **Waitlist Lead**                           | Captured from serviceability "Notify Me" (Phase 2 §13). A generated lead record, not editorial content, but part of the same data foundation since the site produces it.                                                                                       |

### Two things the brief listed that are deliberately _not_ separate entities

- **"Customer Testimonial"** is not its own entity — it's a `featured: true`
  flag (plus optional curation order) on a **Review** record. Maintaining
  a second, hand-written testimonial system alongside real tagged reviews
  would mean two sources of truth for the same kind of content, and the
  hand-written one would be the one that goes stale.
- **"Pricing"** is not its own top-level entity either — it's a field set
  (`priceRange`, `currency`, `lastUpdated`) that lives on a Service record,
  optionally overridden per Brand/Model. It's called out on its own in
  Section 3 because it has its own update cadence (prices drift
  independently of descriptive copy), not because it's a different kind
  of object.

---

## Section 2 — Content Relationships

```
City            1 ──── N   Area
Area            1 ──── N   Garage
Brand           1 ──── N   Model
Garage          N ──── N   Brand      (brands a garage supports)
Garage          N ──── N   Service    (services a garage offers)
Service         1 ──── N   PriceRecord (base + per-Model overrides)
Symptom         N ──── N   Service    (likely-cause → recommended service)
Review          N ──── N   {Service, Brand, Model, Garage, City, Area}
FAQ             N ──── N   {any entity type}, scoped by `context`
Blog Post       N ──── 1   Category
Blog Post       N ──── N   {entities}   (related-content links)
Offer           N ──── 1   Service, optionally scoped to Brand/Model/City
Partner App.    1 ──── 1   Garage      (promoted on approval)
Waitlist Lead   N ──── 1   Area (or City, if area not yet resolved)
```

The two **polymorphic** relationships — Review and FAQ, each attachable
to many entity types at once — are the load-bearing ones. They're what
let a Garage page, a Model page, and an Area page each show genuinely
different, relevant reviews and FAQs without a content editor writing
three versions of the same thing (Phase 2 §7, §14, §17).

**Traversal example**, matching the brief's own chain: a visitor on
`/cities/hyderabad/gachibowli` sees Garages where `area = gachibowli`;
each Garage lists the Brands it supports and Services it offers; each
Service links to its Brand/Model detail; Reviews tagged to that Garage
_or_ that Area _or_ those Services surface on the page; FAQs tagged to
`area` or `service` context appear below; related Blog Posts are pulled
by shared Category or explicit entity link. Nothing on the page is
authored specifically for Gachibowli except the handful of fields that
must be (name, description, hero image) — everything else is a query
over shared entities.

---

## Section 3 — Data Structure

Every entity embeds the same reusable `seo` object (defined fully in
Section 4) rather than repeating loose title/description fields —
shown here as `seo: {…}` and expanded once, not per entity.

### Field reference

| Entity                  | Core fields                                                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **City**                | `id`, `slug`, `name`, `state`, `status` (`live` \| `coming_soon` \| `paused`), `launchDate`, `heroImageId`, `stats` (areasServed, garages, avgResponseMinutes), `coverageAreaIds[]`, `faqIds[]`, `seo`                        |
| **Area**                | `id`, `slug`, `cityId`, `name`, `pincode`, `landmarks[]`, `heroImageId`, `garageIds[]`, `faqIds[]`, `seo`                                                                                                                     |
| **Brand**               | `id`, `slug`, `name`, `logoImageId`, `modelIds[]`, `seo`                                                                                                                                                                      |
| **Bike Model**          | `id`, `slug`, `brandId`, `name`, `type` (`scooter` \| `motorcycle`), `applicableServiceIds[]`, `serviceIntervalKm`, `commonIssues[]`, `heroImageId`, `seo`                                                                    |
| **Service**             | `id`, `slug`, `name`, `iconImageId`, `heroImageId`, `shortDescription`, `problemFraming`, `processSteps[]`, `basePriceRange`, `modelPriceOverrides[]` ({modelId, priceRange}), `relatedServiceIds[]`, `faqIds[]`, `seo`       |
| **Garage**              | `id`, `slug`, `name`, `areaId`, `address`, `geo` ({lat, lng}), `openingHours[]`, `verified`, `supportedBrandIds[]`, `offeredServiceIds[]`, `photoImageIds[]`, `aggregateRating`, `reviewCount`, `partnerApplicationId`, `seo` |
| **Review**              | `id`, `authorName`, `rating`, `bodyText`, `bookingId` (proof of a real completed booking), `tags` ({serviceIds[], brandId, modelId, garageId, cityId, areaId}), `featured`, `createdAt`                                       |
| **FAQ**                 | `id`, `question`, `answer`, `context` (`marketing` \| `support`), `tags` ({entityType, entityId}[])                                                                                                                           |
| **Offer**               | `id`, `code`, `title`, `description`, `serviceId`, `brandId?`, `modelId?`, `cityId?`, `discountValue`, `validFrom`, `validTo`, `seo`                                                                                          |
| **Blog Post**           | `id`, `slug`, `categoryId`, `title`, `bodyMdx`, `coverImageId`, `relatedEntities[]` ({entityType, entityId}), `publishedAt`, `seo`                                                                                            |
| **Category**            | `id`, `slug`, `name`, `funnelsInto` (entity type this category links toward, e.g. `brand`)                                                                                                                                    |
| **Symptom**             | `id`, `slug`, `phrase` ("bike won't start"), `likelyCauses[]`, `recommendedServiceIds[]`, `urgency` (`routine` \| `urgent` \| `emergency`)                                                                                    |
| **Partner Application** | `id`, `garageName`, `contact`, `proposedAreaId`, `status` (`pending` \| `approved` \| `rejected`), `submittedAt`                                                                                                              |
| **Waitlist Lead**       | `id`, `contact`, `resolvedAreaId?`, `resolvedCityId?`, `capturedAt`                                                                                                                                                           |

### One fully worked example — Garage

Chosen because it's the most relationally dense entity (it's where Area,
Brand, Service, and Review all meet):

```json
{
  "id": "garage_abc-bike-care",
  "slug": "abc-bike-care",
  "name": "ABC Bike Care",
  "areaId": "area_gachibowli",
  "address": "Plot 12, Gachibowli Main Road, Hyderabad",
  "geo": { "lat": 17.4401, "lng": 78.3489 },
  "openingHours": [
    { "day": "mon-sat", "open": "09:00", "close": "20:00" },
    { "day": "sun", "open": "10:00", "close": "17:00" }
  ],
  "verified": true,
  "supportedBrandIds": ["brand_honda", "brand_royal-enfield", "brand_tvs"],
  "offeredServiceIds": ["service_oil-change", "service_brake-service", "service_chain-cleaning"],
  "photoImageIds": ["img_garage_abc-bike-care_01", "img_garage_abc-bike-care_02"],
  "aggregateRating": 4.7,
  "reviewCount": 128,
  "partnerApplicationId": "partner_app_00231",
  "seo": { "title": "ABC Bike Care, Gachibowli — Verified Bike Garage | MR Bike Doctor" }
}
```

Every relationship above is an **id reference**, never an inline copy of
the related record — a Brand's name is fetched by `supportedBrandIds`,
not duplicated onto every Garage that supports it. That's what keeps a
brand rename, a service description edit, or a price update a one-place
change (Section 12).

---

## Section 4 — SEO Content Model

One reusable `seo` object, embedded on every content entity that
produces a page:

```json
"seo": {
  "title": "string, ≤60 chars",
  "metaDescription": "string, 150–160 chars",
  "canonicalPath": "string, derived from entity slug hierarchy",
  "keywords": ["string"],
  "robots": { "index": true, "follow": true },
  "openGraph": { "title": "string?", "description": "string?", "imageId": "string?", "type": "website" },
  "twitter": { "card": "summary_large_image", "title": "string?", "description": "string?", "imageId": "string?" },
  "breadcrumb": [{ "label": "string", "path": "string" }],
  "schema": {
    "types": ["LocalBusiness", "Service", "FAQPage", "..."],
    "faqEntries": [{ "question": "string", "answer": "string" }],
    "aggregateRating": { "ratingValue": "number?", "reviewCount": "number?" }
  }
}
```

`schema.types` is the entity's own line item from the Phase 2 §15
schema-to-page-type table — stored on the record, not decided in
component code, so the schema-builder module just reads what's already
there.

**Inheritance, not repetition.** Every field above is optional at the
leaf level and falls back up the hierarchy: a Model's missing
`openGraph.imageId` falls back to its Brand's; a Brand's missing OG image
falls back to the site default. This is what makes thousands of
model/area/garage pages viable without a content editor filling in six
SEO fields per record by hand — only the exceptions need explicit values.

---

## Section 5 — Image Architecture

| Category           | Where it's used                              | Count profile                                                                        |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------ |
| Hero images        | City, Area, Service, Brand pages             | One per entity, editorially chosen                                                   |
| Brand logos        | Brand cards/pages, garage "supported brands" | One per Brand, vector where possible                                                 |
| Service images     | Service grid icon + service page hero        | One icon + one hero per Service                                                      |
| Garage photos      | Garage profile gallery                       | Variable (partner-uploaded), needs moderation                                        |
| Blog images        | Cover + inline article images                | One cover + N inline per post                                                        |
| Area / City images | Area/City hero and card                      | One per entity                                                                       |
| Icons              | UI iconography (nav, feature list bullets)   | Component-level asset, not CMS-managed                                               |
| OG images          | Social preview cards                         | Hand-authored for key hub pages; template-generated for the long tail                |
| Alt text           | Every image record                           | **Mandatory field, not optional** — accessibility and image search both depend on it |

### Image record shape

```json
{
  "id": "img_garage_abc-bike-care_01",
  "url": "string",
  "alt": "string, required",
  "width": 1600,
  "height": 1200,
  "focalPoint": { "x": 0.5, "y": 0.4 },
  "tags": ["garage", "gachibowli"]
}
```

### Naming convention

`{entity-type}-{slug}-{purpose}[-{index}].{ext}` —
`city-hyderabad-hero.jpg`, `brand-honda-logo.svg`,
`garage-abc-bike-care-photo-03.jpg`. This makes an asset's origin
readable from its filename alone, which matters once there are
thousands of files across hundreds of garages.

### Optimization strategy

- Serve everything through Next.js `<Image>` for automatic responsive
  `srcset` and WebP/AVIF conversion — no manually maintained image
  variants.
- Lazy-load everything below the fold; hero images alone are eager/priority.
- Garage photos are user/partner-uploaded, so they need a
  compression + moderation step server-side before entering the CMS —
  distinct from editorial images, which arrive pre-optimized.
- OG images are hand-authored only for high-traffic hub pages (home,
  city hubs, top service pages); the long tail (individual areas,
  models, garages) gets a **templated, dynamically generated OG image**
  (entity name + rating + a brand-consistent frame) so thousands of leaf
  pages never need a hand-made social card.

---

## Section 6 — URL Strategy

One standard: all lowercase, hyphen-separated slugs, no trailing slash,
and nesting that exactly mirrors the entity hierarchy from Section 2 —
`/{hub}/{parent-slug}/{child-slug}`, never deeper than two levels of
nesting under a hub.

```
/services/oil-change
/cities/hyderabad
/cities/hyderabad/gachibowli
/brands/honda
/brands/honda/shine
/garage/abc-bike-care
/blog/maintenance-tips/how-often-to-change-engine-oil
```

**The slug is stored, not computed at request time.** A slug is set once
when a record is created and frozen — renaming a City's _display name_
later (e.g. a spelling fix) never changes its URL. If a slug genuinely
must change, that's an explicit **redirect record**
(`{ from: "/cities/hyderbad", to: "/cities/hyderabad", type: 301 }`), not
a silent slug edit — otherwise every inbound link and all accumulated SEO
equity on the old URL breaks silently.

---

## Section 7 — Content Reuse

Homepage sections, city/area pages, service pages, and blog posts all
read from the **same entity collections** — none of them own a private
copy of "homepage copy."

- Homepage "Services We Offer" queries the same `Service` records
  (`name`, `iconImageId`, `shortDescription`) that `/services/[service]`
  uses for its own hero — the grid tile and the page heading are one
  source, not two.
- Homepage testimonials query `Review` where `featured = true`, sorted by
  curation order — the exact same records that populate a Garage or
  Area page's review list, just filtered differently.
- Homepage "Brands We Service" and "Areas We Serve" are queries over
  `Brand` and `Area` collections respectively — adding a Model or Area
  record makes it appear in these homepage grids automatically, with no
  homepage edit.
- Blog teaser sections query the latest N `Blog Post` records by
  `publishedAt` — nothing homepage-specific is written per post.

The only content that's genuinely unique per page is the small set of
fields Section 3 marks as entity-specific (a City's `stats`, an Area's
`landmarks`) — everything else is composition over shared data, which is
what keeps Phase 2 §7's duplicate-content requirement achievable at scale
instead of becoming a growing manual writing burden.

---

## Section 8 — CMS Strategy

**Now (Hyderabad launch, low record count): structured JSON/MDX files**
in the `content/` directory already scaffolded in Phase 1
(`content/README.md`). Zero infrastructure cost, git-versioned (every
content change is a reviewable diff), type-safe against the TypeScript
shapes in Section 3, and fast to iterate on while the record count is in
the dozens.

**Trigger to migrate to a headless CMS:** once any of the following is
true —

- Garage profiles are being created by the ops/partner team, not
  engineers (this will happen quickly once partner approvals scale,
  Phase 2 §12's growth loop).
- City count grows past roughly ten, and area/garage record volume with it.
- Content needs a review/approval workflow or scheduled publishing that
  a plain file-and-PR flow can't give non-technical editors.

At that point, migrate to a headless CMS (e.g. Sanity, Contentful,
Payload, or a self-hosted structured option) **mapped 1:1 onto the same
entity schema already defined in Sections 1 and 3** — this is a data
import, not a re-architecture, because pages already consume data
through a "fetch a record by slug" interface rather than importing JSON
files directly.

**Hybrid, permanently:** Legal Pages and possibly Support docs stay as
MDX indefinitely, even after everything else moves to a CMS — they
change rarely, and being reviewed via git diff is a feature for
compliance-sensitive text, not a limitation to migrate away from.

---

## Section 9 — Search Index

A single, flattened search-document shape, one record per searchable
item regardless of source entity — Service, Brand, Model, Garage, Area,
City, Blog Post, or FAQ:

```json
{
  "id": "string",
  "type": "service | brand | model | garage | area | city | blog | faq",
  "title": "string",
  "path": "string",
  "keywords": ["string"],
  "summary": "string",
  "boost": "number",
  "location": { "cityId": "string?", "areaId": "string?" }
}
```

This index is **derived, never hand-maintained** — a build step (or a
CMS webhook, once migrated per Section 8) regenerates it whenever a
source entity changes, so it can't drift out of sync with the real
content. It's what powers on-site search today and becomes the same data
the `SearchAction` schema (Phase 2 §15) and the future AI search intent
mapping (Phase 2 §18) both read from — one index, multiple consumers,
matching the "one resolver, many consumers" pattern already used for
location (Phase 2 §9/§13).

---

## Section 10 — Future APIs

Designed now, built when needed — none required for Phase 3:

| Endpoint                                       | Purpose                                                  |
| ---------------------------------------------- | -------------------------------------------------------- |
| `GET /api/garages/nearby?lat&lng`              | Powers near-me (§9) and garage surfacing (Phase 2 §12)   |
| `GET /api/search?q=`                           | Backs the search index (§9)                              |
| `GET /api/serviceability?location=`            | Available / Coming Soon / Paused (Phase 2 §13)           |
| `GET /api/garages/[slug]/reviews`              | Paginated reviews for a garage profile                   |
| `GET /api/services/[slug]/pricing?brand&model` | Cost estimator (Phase 2 §11)                             |
| `POST /api/waitlist`                           | "Notify Me" capture (Phase 2 §13)                        |
| `POST /api/partner-applications`               | `/partner` form intake                                   |
| `GET /api/popular-services?city=`              | Drives dynamic "most booked" ranking on city/homepage    |
| `GET /api/trending-searches`                   | Feeds future AI search suggestions (Phase 2 §18)         |
| `GET /api/reviews/aggregate?entity=&id=`       | Rollup rating for `AggregateRating` schema (Phase 2 §15) |

Where possible these should read from the **same backend the mobile app
already uses** for garages/serviceability/reviews, rather than the
website standing up a parallel data source — consistent with the
single-source-of-truth principle already set for serviceability in
Phase 2 §13.

---

## Section 11 — Content Governance

- **Slugs**: lowercase, hyphenated, ASCII only, set once at creation and
  frozen thereafter (`royal-enfield`, `classic-350`, `gachibowli`). Any
  rename goes through the redirect record from Section 6, never a direct
  slug edit.
- **IDs**: `{entity-prefix}_{slug}` — `city_hyderabad`,
  `garage_abc-bike-care`, `brand_honda`. Model IDs are namespaced under
  their brand (`model_honda-activa-6g`) so two brands can each have a
  model called, say, "Classic" without colliding.
- **Folder conventions** (while on the JSON/MDX phase from §8): mirror the
  URL structure exactly — `content/cities/hyderabad.json`,
  `content/cities/hyderabad/areas/gachibowli.json`,
  `content/brands/honda/models/activa-6g.json`.
- **Image naming**: as defined in Section 5.
- **Metadata naming**: page titles follow `{Entity/Keyword} | {Modifier}
— MR Bike Doctor`, capped near 60 characters; meta descriptions run
  150–160 characters and always include a location or entity qualifier
  plus one trust signal (rating, "verified," "doorstep").
- **Taxonomy control**: Blog categories and FAQ tags are drawn from one
  controlled list, never free-text per record — otherwise the internal
  linking graph (Phase 2 §17) fragments as content scales into the
  thousands of pages this architecture is built to support.

---

## Section 12 — Migration Strategy

The concrete version of "adding a city is a data change, not a code
change":

1. Add one **City** record — name, slug, state, `status: "coming_soon"`,
   hero image, `seo` block.
2. Add its **Area** records, each referencing the City's `id`.
3. `app/sitemap.ts` (already wired in Phase 1, extended to read content
   records instead of a hardcoded array) picks up the new routes
   automatically on next build.
4. The schema-builder module (Phase 2 §15) emits `LocalBusiness` /
   `BreadcrumbList` for the new records with no template code touched.
5. Internal linking (Phase 2 §17) surfaces the new city in the Cities
   hub, the footer, and any Area cross-links automatically, since those
   are generated from the relationship graph in Section 2, not
   hand-curated per page.
6. The search index (§9) picks up the new records on its next rebuild.
7. Serviceability (Phase 2 §13) defaults to whatever `status` the City
   record carries — flipping it from `coming_soon` to `live` once ops is
   ready is the entire "launch" action. On a CMS (post-§8-migration)
   that's a toggle with no deploy; on static JSON it's a small PR — worth
   naming as one concrete, dated reason to migrate once launch cadence
   picks up.

The same one-line pattern applies to every other entity: a new **Service**
is a record referencing nothing but its own fields; a new **Bike Model**
is a record referencing its Brand's `id`; a new **Garage** is a record
referencing an Area's `id` plus the Brand/Service `id`s it supports; a
new **Blog Post** is a record referencing a Category's `id`. None of them
touch a route file, a component, or a template.

---

## Next step

Pending approval of this document, Phase 3 begins: Homepage Design &
Development, built to read from the entity shapes defined in Section 3,
through the SEO model in Section 4, following the URL strategy in
Section 6 — not against hardcoded homepage copy.
