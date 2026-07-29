import type { ComponentType, SVGProps } from "react";

import {
  BatteryReplacementIcon,
  BikeRepairIcon,
  BikeServiceIcon,
  BikeWashIcon,
  BrakeServiceIcon,
  ChainCleaningIcon,
  DoorstepRepairIcon,
  EmergencyBreakdownIcon,
  OilChangeIcon,
  PickupDropIcon,
  PremiumServiceIcon,
  PunctureRepairIcon,
  TyreReplacementIcon,
  WheelAlignmentIcon,
} from "@/components/icons/services";

export interface ServiceRecord {
  id: string;
  slug: string;
  name: string;
  /** Alternate names/search phrasings that resolve to this same page (Phase 4 §16) — never a separate duplicate page. */
  aliases?: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  shortDescription: string;
  /** 2–4 sentence, self-contained direct answer — "answer-first" format for AI search/AI Overviews (Phase 4 §14). */
  quickAnswer: string;
  /** Longer, still-generic explanation used on the /services/[service] detail page. */
  longDescription: string;
  /** Generic, mechanically standard checklist — not brand/city-specific. */
  whatsIncluded: string[];
  durationMinutes: { min: number; max: number };
  /**
   * Ordered, numbered process steps for `HowToSteps`/`howToSchema()`
   * (Phase 4 §14) — populated for the highest-search-value services as a
   * demonstration of the pattern, not required on every record.
   */
  steps?: string[];
  /** Slug of a genuinely comparable service — renders a comparison table demonstrating the AI-search "comparison section" pattern (Phase 4 §14). */
  comparisonSlug?: string;
}

/**
 * The Service collection (Phase 2.5 §3, expanded per Phase 6's named
 * service list). Two requested names were intentionally merged as aliases
 * rather than shipped as separate pages — "General Service" into "Bike
 * Service" and "Brake Repair" absorbing "Brake Service" — since both pairs
 * would otherwise produce two pages with identical content targeting the
 * same search intent, which is exactly the thin/duplicate-content pattern
 * Phase 4 §17 warns against for combinatorial pages. Every other requested
 * name got its own genuinely distinct page.
 */
export const POPULAR_SERVICES: ServiceRecord[] = [
  {
    id: "service_bike-service",
    slug: "bike-service",
    name: "Bike Service",
    aliases: ["Full Bike Service", "General Service"],
    comparisonSlug: "premium-service",
    icon: BikeServiceIcon,
    shortDescription: "A complete multi-point checkup and tune-up for your bike.",
    quickAnswer:
      "A bike service is a scheduled, multi-point inspection and tune-up — engine oil, brakes, chain, and tyres are all checked and adjusted in one visit. Most bikes benefit from a full service every 2,500–3,000 km or every 3 months, whichever comes first.",
    longDescription:
      "A complete multi-point checkup covering the engine, brakes, chain, and tyres, so small issues get caught before they become breakdowns.",
    whatsIncluded: [
      "Engine oil check",
      "Brake inspection",
      "Chain lubrication",
      "Tyre pressure check",
    ],
    durationMinutes: { min: 60, max: 90 },
    steps: [
      "Request a bike service through the MR Bike Doctor app and pick a time slot.",
      "A verified mechanic arrives at your location with the tools and parts needed.",
      "The mechanic runs through the multi-point checkup — engine, brakes, chain, tyres.",
      "Any issues found are flagged before work continues, with pricing shown upfront in the app.",
      "The bike is tested and handed back, with the service logged to its digital history.",
    ],
  },
  {
    id: "service_doorstep-bike-service",
    slug: "doorstep-bike-service",
    name: "Doorstep Bike Service",
    icon: DoorstepRepairIcon,
    shortDescription: "General repairs and servicing handled right at your home or office.",
    quickAnswer:
      "Doorstep bike service means a mechanic comes to your home, office, or wherever your bike is parked, instead of you riding it to a workshop. It covers routine jobs like oil changes, general servicing, and battery checks without a garage visit.",
    longDescription:
      "General mechanical repairs and servicing handled wherever your bike is — home, office, or roadside — without a workshop visit.",
    whatsIncluded: [
      "On-the-spot diagnosis",
      "Common part replacements",
      "Minor adjustments",
      "Test ride before handover",
    ],
    durationMinutes: { min: 30, max: 60 },
  },
  {
    id: "service_emergency-bike-service",
    slug: "emergency-bike-service",
    name: "Emergency Bike Service",
    aliases: ["Emergency Breakdown"],
    icon: EmergencyBreakdownIcon,
    shortDescription: "Stranded on the road? Get urgent, on-the-spot help.",
    quickAnswer:
      "Emergency bike service is urgent, on-the-spot roadside help for a bike that's stopped working — a dead battery, a stalled engine, or a mechanical fault — so a rider isn't stuck waiting for a tow.",
    longDescription:
      "Urgent, on-the-spot help for a bike that's stopped working on the road, so you're not stuck longer than necessary.",
    whatsIncluded: [
      "On-road diagnosis",
      "Basic on-the-spot fixes",
      "Towing/transport coordination if needed",
    ],
    durationMinutes: { min: 20, max: 40 },
  },
  {
    id: "service_bike-pickup-drop",
    slug: "bike-pickup-drop",
    name: "Bike Pickup & Drop",
    aliases: ["Pickup & Drop"],
    icon: PickupDropIcon,
    shortDescription: "Can't wait around? We collect and return your bike.",
    quickAnswer:
      "Bike pickup & drop collects a bike from the rider's location, takes it to a workshop for jobs that need heavier equipment, and returns it once the work is done — useful for repairs that doorstep service alone can't cover.",
    longDescription:
      "For jobs that need a workshop visit — the bike is picked up from your location and returned once the work is done.",
    whatsIncluded: [
      "Bike pickup from your location",
      "Transport to the service point",
      "Return delivery after service",
    ],
    durationMinutes: { min: 15, max: 30 },
  },
  {
    id: "service_bike-repair",
    slug: "bike-repair",
    name: "Bike Repair",
    icon: BikeRepairIcon,
    shortDescription: "Diagnosis and repair for mechanical or electrical faults.",
    quickAnswer:
      "Bike repair covers diagnosing and fixing a specific fault — unusual noises, a warning light, an electrical issue, or a part that's stopped working — as distinct from a routine, scheduled bike service.",
    longDescription:
      "Diagnosis and repair for a specific mechanical or electrical fault, rather than the routine multi-point checkup of a scheduled service.",
    whatsIncluded: [
      "Fault diagnosis",
      "Parts inspection and replacement where needed",
      "Post-repair test ride",
    ],
    durationMinutes: { min: 30, max: 90 },
  },
  {
    id: "service_premium-service",
    slug: "premium-service",
    name: "Premium Service",
    comparisonSlug: "bike-service",
    icon: PremiumServiceIcon,
    shortDescription: "A more thorough service tier for riders who want extra care.",
    quickAnswer:
      "Premium service is a more thorough version of a standard bike service — it covers everything a general service does, plus a deeper inspection pass and additional checks, for riders who want extra assurance between services.",
    longDescription:
      "A more thorough service tier that builds on the standard multi-point checkup with a deeper inspection pass.",
    whatsIncluded: [
      "Everything in a standard bike service",
      "Extended multi-point inspection",
      "Detailed pre- and post-service report",
    ],
    durationMinutes: { min: 90, max: 120 },
  },
  {
    id: "service_engine-oil-change",
    slug: "engine-oil-change",
    name: "Engine Oil Change",
    aliases: ["Oil Change"],
    icon: OilChangeIcon,
    shortDescription: "Engine oil and filter replacement with genuine oil.",
    quickAnswer:
      "An engine oil change replaces old, degraded oil and the oil filter with fresh oil, restoring lubrication and heat management. Most bikes need one every 2,500–3,000 km or roughly every 3 months, whichever comes first.",
    longDescription:
      "A straightforward engine oil and filter replacement to keep the engine running smoothly between full services.",
    whatsIncluded: ["Engine oil drain and refill", "Oil filter replacement", "Level and leak check"],
    durationMinutes: { min: 20, max: 30 },
    steps: [
      "The mechanic warms the engine briefly so old oil drains fully.",
      "Old oil is drained and the used oil filter is removed.",
      "A new filter is fitted and fresh oil is added to the manufacturer-specified level.",
      "The engine is run briefly to check for leaks around the drain plug and filter.",
      "Final oil level is confirmed before handover.",
    ],
  },
  {
    id: "service_battery-replacement",
    slug: "battery-replacement",
    name: "Battery Replacement",
    icon: BatteryReplacementIcon,
    shortDescription: "Fast diagnosis and swap for a dead or dying battery.",
    quickAnswer:
      "Battery replacement diagnoses a dead or weak bike battery and swaps it for a new one, along with a terminal clean and charging-system check, so the bike starts reliably again.",
    longDescription:
      "A quick diagnosis of a dead or weak battery, followed by a swap so you're not stuck waiting for a jump-start.",
    whatsIncluded: [
      "Battery health check",
      "Terminal cleaning",
      "New battery fitment",
      "Charging system check",
    ],
    durationMinutes: { min: 20, max: 40 },
    steps: [
      "The mechanic tests the existing battery's voltage and charge retention.",
      "Terminals are cleaned of any corrosion buildup.",
      "If the battery is confirmed dead or weak, a new one is fitted.",
      "The charging system (regulator/rectifier output) is checked so the new battery isn't undermined by an existing fault.",
      "The bike is started and checked for a stable idle before handover.",
    ],
  },
  {
    id: "service_brake-repair",
    slug: "brake-repair",
    name: "Brake Repair",
    aliases: ["Brake Service"],
    icon: BrakeServiceIcon,
    shortDescription: "Pad, cable, and disc inspection and repair for safer stopping.",
    quickAnswer:
      "Brake repair inspects and fixes a bike's braking system — pads, cables, and discs or drums — addressing issues like spongy braking, squealing, or reduced stopping power.",
    longDescription:
      "A safety-focused inspection and repair of your bike's braking system — pads, cables, and discs or drums.",
    whatsIncluded: [
      "Brake pad inspection",
      "Cable and lever check",
      "Disc/drum inspection",
      "Brake fluid top-up, where applicable",
    ],
    durationMinutes: { min: 30, max: 45 },
  },
  {
    id: "service_chain-cleaning",
    slug: "chain-cleaning",
    name: "Chain Cleaning",
    icon: ChainCleaningIcon,
    shortDescription: "Deep clean, lube, and adjustment for a smoother ride.",
    quickAnswer:
      "Chain cleaning degreases, deep-cleans, re-lubricates, and re-tensions a bike's drive chain, cutting down on noise, wear, and the risk of the chain skipping.",
    longDescription:
      "A deep clean, re-lubrication, and tension adjustment for the drive chain, cutting down on noise and wear.",
    whatsIncluded: ["Chain degreasing", "Deep clean", "Lubrication", "Tension adjustment"],
    durationMinutes: { min: 20, max: 30 },
  },
  {
    id: "service_wheel-alignment",
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    icon: WheelAlignmentIcon,
    shortDescription: "Corrects a misaligned wheel for straighter, safer handling.",
    quickAnswer:
      "Wheel alignment corrects a bike that pulls to one side or feels unstable at speed by realigning the front and rear wheels, which also reduces uneven tyre wear over time.",
    longDescription:
      "Corrects wheel misalignment that causes a bike to pull to one side, feel unstable, or wear tyres unevenly.",
    whatsIncluded: [
      "Alignment inspection",
      "Wheel/axle adjustment",
      "Post-adjustment test ride",
    ],
    durationMinutes: { min: 30, max: 60 },
  },
  {
    id: "service_bike-wash",
    slug: "bike-wash",
    name: "Bike Wash",
    icon: BikeWashIcon,
    shortDescription: "A thorough exterior wash and detailing session.",
    quickAnswer:
      "A bike wash is a thorough exterior clean — body, wheels, and tyres washed, dried, and wiped down, with basic detailing — that leaves the bike properly cared for, not just rinsed.",
    longDescription:
      "A thorough exterior wash and wipe-down that leaves the bike looking cared for, not just rinsed.",
    whatsIncluded: [
      "Exterior wash",
      "Wheel and tyre cleaning",
      "Drying and wipe-down",
      "Basic detailing",
    ],
    durationMinutes: { min: 30, max: 45 },
  },
  {
    id: "service_tyre-replacement",
    slug: "tyre-replacement",
    name: "Tyre Replacement",
    icon: TyreReplacementIcon,
    shortDescription: "Full tyre swap for worn tread or irreparable damage.",
    quickAnswer:
      "Tyre replacement swaps a bike's front or rear tyre entirely — for worn-out tread or damage a puncture repair can't fix — and includes balancing and a pressure check, as distinct from a quick puncture patch.",
    longDescription:
      "A full tyre swap for tread worn past a safe limit or damage that a puncture repair can't fix, including balancing and a pressure check.",
    whatsIncluded: [
      "Tread/wear inspection",
      "Old tyre removal and new tyre fitment",
      "Balancing and pressure check",
    ],
    durationMinutes: { min: 30, max: 60 },
  },
  {
    id: "service_puncture-repair",
    slug: "puncture-repair",
    name: "Puncture Repair",
    icon: PunctureRepairIcon,
    shortDescription: "Quick tube/tyre fix so you're back on the road fast.",
    quickAnswer:
      "Puncture repair patches or replaces the inner tube after a puncture and re-inflates the tyre, getting a rider back on the road quickly — a faster, cheaper fix than a full tyre replacement when the tyre itself is otherwise in good condition.",
    longDescription:
      "A quick tube or tyre fix for a puncture, checked and re-inflated so you're back on the road fast.",
    whatsIncluded: [
      "Tube/tyre inspection",
      "Puncture patch or tube replacement",
      "Air pressure check",
    ],
    durationMinutes: { min: 15, max: 25 },
  },
];
