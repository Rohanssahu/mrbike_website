export interface BrandRecord {
  id: string;
  slug: string;
  name: string;
  /** Stand-in for `logoImageId` (Phase 2.5 §3) — no brand logo assets exist yet. */
  initials: string;
  modelCount: number;
}

/** Stand-in for the Brand collection — mirrors `/brands/*` from the approved sitemap (Phase 2 §3). */
export const BRANDS: BrandRecord[] = [
  {
    id: "brand_royal-enfield",
    slug: "royal-enfield",
    name: "Royal Enfield",
    initials: "RE",
    modelCount: 6,
  },
  { id: "brand_honda", slug: "honda", name: "Honda", initials: "HN", modelCount: 8 },
  { id: "brand_tvs", slug: "tvs", name: "TVS", initials: "TVS", modelCount: 7 },
  { id: "brand_yamaha", slug: "yamaha", name: "Yamaha", initials: "YM", modelCount: 5 },
  { id: "brand_bajaj", slug: "bajaj", name: "Bajaj", initials: "BJ", modelCount: 6 },
  { id: "brand_hero", slug: "hero", name: "Hero", initials: "HR", modelCount: 6 },
  { id: "brand_suzuki", slug: "suzuki", name: "Suzuki", initials: "SZ", modelCount: 4 },
  { id: "brand_ktm", slug: "ktm", name: "KTM", initials: "KTM", modelCount: 4 },
];
