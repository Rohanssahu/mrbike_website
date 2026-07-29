export interface BrandRecord {
  id: string;
  slug: string;
  name: string;
  /** Alternate spellings/phrasings that resolve to this page (Phase 4 §16) — never a separate duplicate page. */
  aliases?: string[];
  /** Stand-in for `logoImageId` (Phase 2.5 §3) — no brand logo assets exist yet. */
  initials: string;
  modelCount: number;
  /** Generic servicing description — no partnership/exclusivity claims. */
  description: string;
  /** Public, general engineering characteristics — informs maintenance guidance, not a marketing claim. */
  engineNote: string;
  driveType: string;
  /** Generic, brand-appropriate upkeep advice — differentiated by real drivetrain/cooling characteristics, not copy-pasted across brands. */
  maintenanceTips: string[];
  /** Generic mechanical issues associated with this class of drivetrain/cooling — not brand-specific defect claims. */
  commonProblems: string[];
  /** General service interval range in kilometers — typical for the category, not a brand-specific guarantee. */
  serviceIntervalKm: { min: number; max: number };
}

/**
 * The Brand collection (Phase 2.5 §3, expanded per Phase 6's named brand
 * list). Maintenance tips/common problems are differentiated by each
 * brand's real, publicly-known drivetrain and cooling characteristics
 * (air-cooled vs. liquid-cooled, chain vs. belt vs. shaft, CVT scooters)
 * rather than generic copy repeated across all 13 pages — avoiding the
 * thin/duplicate-content pattern Phase 4 §17 warns against.
 */
export const BRANDS: BrandRecord[] = [
  {
    id: "brand_royal-enfield",
    slug: "royal-enfield",
    name: "Royal Enfield",
    initials: "RE",
    modelCount: 6,
    description: "Specialized servicing for Royal Enfield's classic and modern retro motorcycles.",
    engineNote: "Predominantly air-cooled single-cylinder engines (e.g. the Classic 350)",
    driveType: "Chain drive",
    maintenanceTips: [
      "Check oil level more often in slow city traffic — air-cooled singles run hotter at low speeds",
      "Keep the chain cleaned and lubricated; it's the main drivetrain wear point",
      "Watch for fastener loosening from engine vibration, typical of single-cylinder engines",
    ],
    commonProblems: [
      "Chain stretch from inconsistent lubrication",
      "Overheating in stop-and-go traffic",
      "Vibration-related loosening of body/engine fasteners",
    ],
    serviceIntervalKm: { min: 2500, max: 3000 },
  },
  {
    id: "brand_honda",
    slug: "honda",
    name: "Honda",
    initials: "HN",
    modelCount: 8,
    description: "Routine and repair servicing for Honda's motorcycle and scooter lineup.",
    engineNote: "Air-cooled commuter engines (Shine, Unicorn) alongside CVT-based scooters (Activa)",
    driveType: "Chain drive on motorcycles, CVT/variator belt on scooters",
    maintenanceTips: [
      "On chain-drive models, keep the chain lubricated and correctly tensioned",
      "On CVT scooters, have the variator belt and rollers inspected — they wear over time and aren't visible day to day",
      "Check coolant on liquid-cooled variants; don't rely on engine feel alone",
    ],
    commonProblems: [
      "Worn CVT belt/rollers on scooters, causing hesitant acceleration",
      "Chain wear on geared models",
      "Reduced mileage from a clogged air filter",
    ],
    serviceIntervalKm: { min: 3000, max: 4000 },
  },
  {
    id: "brand_tvs",
    slug: "tvs",
    name: "TVS",
    initials: "TVS",
    modelCount: 7,
    description: "Servicing for TVS commuter and performance motorcycles.",
    engineNote: "Air-cooled commuter/sport engines (Apache RTR) alongside CVT scooters (Jupiter, Ntorq)",
    driveType: "Chain drive on motorcycles, CVT/variator belt on scooters",
    maintenanceTips: [
      "Sport models like the Apache RTR benefit from more frequent chain lubrication under spirited riding",
      "Scooter owners should have the CVT variator checked periodically for wear",
      "Keep tyre pressure correct — it affects both mileage and handling on lighter commuter frames",
    ],
    commonProblems: [
      "Chain wear on performance-oriented models",
      "CVT belt wear on scooters",
      "Reduced mileage from under-inflated tyres",
    ],
    serviceIntervalKm: { min: 3000, max: 3500 },
  },
  {
    id: "brand_yamaha",
    slug: "yamaha",
    name: "Yamaha",
    initials: "YM",
    modelCount: 5,
    description: "Servicing for Yamaha's sport and commuter motorcycle range.",
    engineNote: "Liquid-cooled sport engines (R15, MT-15) alongside air-cooled commuter models (FZ-S)",
    driveType: "Chain drive",
    maintenanceTips: [
      "Monitor coolant level on liquid-cooled models — don't let it run low between services",
      "Keep the chain clean and tensioned, especially after sustained high-RPM riding",
      "Check the radiator for road debris on liquid-cooled sport models",
    ],
    commonProblems: [
      "Coolant loss or leaks on liquid-cooled models",
      "Chain wear from high-RPM use",
      "Radiator fin damage from debris",
    ],
    serviceIntervalKm: { min: 3000, max: 4000 },
  },
  {
    id: "brand_bajaj",
    slug: "bajaj",
    name: "Bajaj",
    initials: "BJ",
    modelCount: 6,
    description: "Servicing for Bajaj's commuter and performance motorcycles.",
    engineNote: "Air-cooled commuter engines (Platina) alongside oil/liquid-cooled performance models (Pulsar, Dominar)",
    driveType: "Chain drive",
    maintenanceTips: [
      "Check oil-cooler fins for debris on oil-cooled Pulsar variants",
      "Keep the chain lubricated — Dominar and Pulsar owners riding longer distances should check tension more often",
      "Commuter (Platina) owners should prioritize chain care since the engine itself needs less frequent attention",
    ],
    commonProblems: [
      "Chain wear on higher-mileage riders",
      "Reduced cooling efficiency from a dirty oil cooler",
      "Clutch wear on models used heavily in city traffic",
    ],
    serviceIntervalKm: { min: 2500, max: 3500 },
  },
  {
    id: "brand_hero",
    slug: "hero",
    name: "Hero",
    initials: "HR",
    modelCount: 6,
    description: "Servicing for Hero's commuter motorcycle lineup.",
    engineNote: "Air-cooled commuter engines built for daily distance riding (Splendor, Glamour)",
    driveType: "Chain drive",
    maintenanceTips: [
      "Track service by kilometers, not calendar time — commuter bikes rack up distance fast",
      "Keep the chain lubricated; it's the main recurring maintenance point on these engines",
      "Check brake pad wear regularly given frequent stop-and-go city use",
    ],
    commonProblems: [
      "Chain wear from high daily mileage",
      "Brake pad wear from frequent city stop-and-go riding",
      "Reduced mileage from a neglected air filter",
    ],
    serviceIntervalKm: { min: 2500, max: 3000 },
  },
  {
    id: "brand_suzuki",
    slug: "suzuki",
    name: "Suzuki",
    initials: "SZ",
    modelCount: 4,
    description: "Servicing for Suzuki's scooters and motorcycles.",
    engineNote: "CVT-based scooters (Access 125) alongside liquid-cooled sport motorcycles (Gixxer)",
    driveType: "CVT/variator belt on scooters, chain drive on motorcycles",
    maintenanceTips: [
      "Access 125 owners should have the CVT variator inspected periodically",
      "Gixxer owners should monitor coolant level and chain tension together",
      "Both benefit from routine air filter checks in dusty conditions",
    ],
    commonProblems: [
      "CVT belt/roller wear on scooters",
      "Chain wear on the Gixxer under spirited riding",
      "Reduced mileage from a dirty air filter",
    ],
    serviceIntervalKm: { min: 3000, max: 4000 },
  },
  {
    id: "brand_ktm",
    slug: "ktm",
    name: "KTM",
    initials: "KTM",
    modelCount: 4,
    description: "Servicing for KTM's performance motorcycles.",
    engineNote: "Liquid-cooled, performance-tuned single-cylinder engines (Duke, RC series)",
    driveType: "Chain drive",
    maintenanceTips: [
      "Monitor coolant level closely — performance engines run at higher operating temperatures",
      "Chain and sprocket wear faster under spirited/track-style riding — check more often than a commuter bike",
      "Use the manufacturer-recommended oil grade given the higher state of tune",
    ],
    commonProblems: [
      "Faster chain/sprocket wear from performance riding",
      "Coolant loss on high-mileage or track-used bikes",
      "Clutch wear from frequent high-RPM use",
    ],
    serviceIntervalKm: { min: 3000, max: 5000 },
  },
  {
    id: "brand_jawa",
    slug: "jawa",
    name: "Jawa",
    initials: "JW",
    modelCount: 3,
    description: "Servicing for Jawa's retro-classic single-cylinder motorcycles.",
    engineNote: "Air-cooled single-cylinder retro-styled engines",
    driveType: "Chain drive",
    maintenanceTips: [
      "Check oil level more often in slow traffic, typical of air-cooled singles",
      "Keep the chain cleaned and lubricated — the main recurring drivetrain task",
      "Inspect fasteners periodically for vibration-related loosening",
    ],
    commonProblems: [
      "Chain wear from inconsistent lubrication",
      "Overheating in heavy traffic",
      "Vibration-related fastener loosening",
    ],
    serviceIntervalKm: { min: 2500, max: 3000 },
  },
  {
    id: "brand_yezdi",
    slug: "yezdi",
    name: "Yezdi",
    initials: "YZ",
    modelCount: 3,
    description: "Servicing for Yezdi's retro and adventure-styled motorcycles.",
    engineNote: "Air-cooled single-cylinder engines across the Roadster, Scrambler, and Adventure range",
    driveType: "Chain drive",
    maintenanceTips: [
      "Adventure model owners should check the chain more often after off-road riding — dust and grit accelerate wear",
      "Keep oil changes on schedule; air-cooled singles rely on fresh oil for heat management",
      "Inspect suspension linkages periodically on the Adventure variant",
    ],
    commonProblems: [
      "Chain wear accelerated by dust/grit on off-road-oriented models",
      "Overheating in heavy traffic",
      "Suspension linkage wear on the Adventure variant",
    ],
    serviceIntervalKm: { min: 2500, max: 3000 },
  },
  {
    id: "brand_bmw",
    slug: "bmw",
    name: "BMW",
    initials: "BMW",
    modelCount: 3,
    description: "Servicing for BMW Motorrad's touring and adventure motorcycles.",
    engineNote: "Liquid-cooled engines across the range — single-cylinder on entry models (G 310 R), boxer-twin on larger tourers (R 1250 GS)",
    driveType: "Chain drive on entry models, shaft drive on larger boxer-engine models",
    maintenanceTips: [
      "Shaft-drive models need periodic gear-oil checks instead of chain lubrication — a different rhythm than most bikes on this list",
      "Chain-drive entry models (G 310 series) still need regular chain care like any geared motorcycle",
      "Monitor coolant level given the liquid-cooled engines across the range",
    ],
    commonProblems: [
      "Gear-oil level neglect on shaft-drive models (easy to forget since there's no chain to visually check)",
      "Chain wear on entry-level chain-drive models",
      "Coolant leaks on higher-mileage bikes",
    ],
    serviceIntervalKm: { min: 5000, max: 10000 },
  },
  {
    id: "brand_triumph",
    slug: "triumph",
    name: "Triumph",
    initials: "TR",
    modelCount: 3,
    description: "Servicing for Triumph's modern classic and performance motorcycles.",
    engineNote: "Liquid-cooled single- and multi-cylinder engines (Speed 400, Trident 660)",
    driveType: "Chain drive",
    maintenanceTips: [
      "Monitor coolant level regularly across the liquid-cooled range",
      "Keep the chain cleaned and tensioned, especially on the multi-cylinder Trident under higher-RPM use",
      "Check valve clearances at the manufacturer-recommended interval — more involved than a single-cylinder commuter engine",
    ],
    commonProblems: [
      "Coolant loss on higher-mileage bikes",
      "Chain wear from spirited riding",
      "Valve clearance drift over extended mileage",
    ],
    serviceIntervalKm: { min: 3000, max: 6000 },
  },
  {
    id: "brand_harley-davidson",
    slug: "harley-davidson",
    name: "Harley-Davidson",
    aliases: ["Harley Davidson"],
    initials: "HD",
    modelCount: 3,
    description: "Servicing for Harley-Davidson's cruiser motorcycles.",
    engineNote: "V-twin engines on larger cruisers, single-cylinder on the India-built X440",
    driveType: "Belt drive on larger V-twin cruisers, chain drive on the X440",
    maintenanceTips: [
      "Belt-drive models need periodic belt tension and wear checks instead of chain lubrication",
      "The X440's chain drive needs the same routine care as any geared motorcycle",
      "V-twin engines run hot at idle in traffic — extra care with oil level and cooling checks helps",
    ],
    commonProblems: [
      "Belt wear or mistensioning on larger cruiser models",
      "Chain wear on the X440",
      "Heat soak in stationary traffic on V-twin models",
    ],
    serviceIntervalKm: { min: 5000, max: 8000 },
  },
];
