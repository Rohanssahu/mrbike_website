export interface BikeModelRecord {
  id: string;
  slug: string;
  brandSlug: string;
  name: string;
}

/**
 * A representative sample of well-known models per brand (Phase 4 §7/§16) —
 * not an exhaustive catalog. Model names are public product names, not MR
 * Bike Doctor business facts, so they're safe to list directly.
 */
export const BIKE_MODELS: BikeModelRecord[] = [
  { id: "model_re-classic-350", slug: "classic-350", brandSlug: "royal-enfield", name: "Classic 350" },
  { id: "model_re-hunter-350", slug: "hunter-350", brandSlug: "royal-enfield", name: "Hunter 350" },
  { id: "model_re-himalayan", slug: "himalayan", brandSlug: "royal-enfield", name: "Himalayan" },

  { id: "model_honda-shine", slug: "shine", brandSlug: "honda", name: "Shine" },
  { id: "model_honda-activa", slug: "activa", brandSlug: "honda", name: "Activa" },
  { id: "model_honda-unicorn", slug: "unicorn", brandSlug: "honda", name: "Unicorn" },

  { id: "model_tvs-apache-rtr", slug: "apache-rtr", brandSlug: "tvs", name: "Apache RTR" },
  { id: "model_tvs-jupiter", slug: "jupiter", brandSlug: "tvs", name: "Jupiter" },
  { id: "model_tvs-ntorq", slug: "ntorq", brandSlug: "tvs", name: "Ntorq" },

  { id: "model_yamaha-fz-s", slug: "fz-s", brandSlug: "yamaha", name: "FZ-S" },
  { id: "model_yamaha-r15", slug: "r15", brandSlug: "yamaha", name: "R15" },
  { id: "model_yamaha-mt-15", slug: "mt-15", brandSlug: "yamaha", name: "MT-15" },

  { id: "model_bajaj-pulsar", slug: "pulsar", brandSlug: "bajaj", name: "Pulsar" },
  { id: "model_bajaj-platina", slug: "platina", brandSlug: "bajaj", name: "Platina" },
  { id: "model_bajaj-dominar", slug: "dominar", brandSlug: "bajaj", name: "Dominar" },

  { id: "model_hero-splendor", slug: "splendor", brandSlug: "hero", name: "Splendor" },
  { id: "model_hero-xtreme", slug: "xtreme", brandSlug: "hero", name: "Xtreme" },
  { id: "model_hero-glamour", slug: "glamour", brandSlug: "hero", name: "Glamour" },

  { id: "model_suzuki-access-125", slug: "access-125", brandSlug: "suzuki", name: "Access 125" },
  { id: "model_suzuki-gixxer", slug: "gixxer", brandSlug: "suzuki", name: "Gixxer" },
  { id: "model_suzuki-burgman-street", slug: "burgman-street", brandSlug: "suzuki", name: "Burgman Street" },

  { id: "model_ktm-duke-200", slug: "duke-200", brandSlug: "ktm", name: "Duke 200" },
  { id: "model_ktm-duke-390", slug: "duke-390", brandSlug: "ktm", name: "Duke 390" },
  { id: "model_ktm-rc-200", slug: "rc-200", brandSlug: "ktm", name: "RC 200" },

  { id: "model_jawa-42", slug: "42", brandSlug: "jawa", name: "Jawa 42" },
  { id: "model_jawa-perak", slug: "perak", brandSlug: "jawa", name: "Perak" },
  { id: "model_jawa-350", slug: "350", brandSlug: "jawa", name: "Jawa 350" },

  { id: "model_yezdi-roadster", slug: "roadster", brandSlug: "yezdi", name: "Roadster" },
  { id: "model_yezdi-scrambler", slug: "scrambler", brandSlug: "yezdi", name: "Scrambler" },
  { id: "model_yezdi-adventure", slug: "adventure", brandSlug: "yezdi", name: "Adventure" },

  { id: "model_bmw-g-310-r", slug: "g-310-r", brandSlug: "bmw", name: "G 310 R" },
  { id: "model_bmw-g-310-gs", slug: "g-310-gs", brandSlug: "bmw", name: "G 310 GS" },
  { id: "model_bmw-r-1250-gs", slug: "r-1250-gs", brandSlug: "bmw", name: "R 1250 GS" },

  { id: "model_triumph-speed-400", slug: "speed-400", brandSlug: "triumph", name: "Speed 400" },
  {
    id: "model_triumph-scrambler-400x",
    slug: "scrambler-400x",
    brandSlug: "triumph",
    name: "Scrambler 400X",
  },
  { id: "model_triumph-trident-660", slug: "trident-660", brandSlug: "triumph", name: "Trident 660" },

  { id: "model_harley-x440", slug: "x440", brandSlug: "harley-davidson", name: "X440" },
  {
    id: "model_harley-iron-883",
    slug: "iron-883",
    brandSlug: "harley-davidson",
    name: "Iron 883",
  },
  {
    id: "model_harley-street-750",
    slug: "street-750",
    brandSlug: "harley-davidson",
    name: "Street 750",
  },
];
