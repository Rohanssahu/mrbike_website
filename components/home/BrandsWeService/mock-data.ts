export interface BrandRecord {
  id: string;
  slug: string;
  name: string;
  /** Stand-in for `logoImageId` (Phase 2.5 §3) — no brand logo assets exist yet. */
  initials: string;
  modelCount: number;
  /** Generic servicing description — no partnership/exclusivity claims. */
  description: string;
}

/** Stand-in for the Brand collection — mirrors `/brands/*` from the approved sitemap (Phase 2 §3). */
export const BRANDS: BrandRecord[] = [
  {
    id: "brand_royal-enfield",
    slug: "royal-enfield",
    name: "Royal Enfield",
    initials: "RE",
    modelCount: 6,
    description: "Specialized servicing for Royal Enfield's classic and modern retro motorcycles.",
  },
  {
    id: "brand_honda",
    slug: "honda",
    name: "Honda",
    initials: "HN",
    modelCount: 8,
    description: "Routine and repair servicing for Honda's motorcycle and scooter lineup.",
  },
  {
    id: "brand_tvs",
    slug: "tvs",
    name: "TVS",
    initials: "TVS",
    modelCount: 7,
    description: "Servicing for TVS commuter and performance motorcycles.",
  },
  {
    id: "brand_yamaha",
    slug: "yamaha",
    name: "Yamaha",
    initials: "YM",
    modelCount: 5,
    description: "Servicing for Yamaha's sport and commuter motorcycle range.",
  },
  {
    id: "brand_bajaj",
    slug: "bajaj",
    name: "Bajaj",
    initials: "BJ",
    modelCount: 6,
    description: "Servicing for Bajaj's commuter and performance motorcycles.",
  },
  {
    id: "brand_hero",
    slug: "hero",
    name: "Hero",
    initials: "HR",
    modelCount: 6,
    description: "Servicing for Hero's commuter motorcycle lineup.",
  },
  {
    id: "brand_suzuki",
    slug: "suzuki",
    name: "Suzuki",
    initials: "SZ",
    modelCount: 4,
    description: "Servicing for Suzuki's scooters and motorcycles.",
  },
  {
    id: "brand_ktm",
    slug: "ktm",
    name: "KTM",
    initials: "KTM",
    modelCount: 4,
    description: "Servicing for KTM's performance motorcycles.",
  },
];
