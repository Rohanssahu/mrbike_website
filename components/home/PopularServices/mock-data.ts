import type { ComponentType, SVGProps } from "react";

import {
  BatteryReplacementIcon,
  BikeServiceIcon,
  BikeWashIcon,
  BrakeServiceIcon,
  ChainCleaningIcon,
  DoorstepRepairIcon,
  EmergencyBreakdownIcon,
  OilChangeIcon,
  PickupDropIcon,
  PunctureRepairIcon,
} from "@/components/icons/services";

export interface ServiceRecord {
  id: string;
  slug: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  shortDescription: string;
  /** Longer, still-generic explanation used on the /services/[service] detail page. */
  longDescription: string;
  /** Generic, mechanically standard checklist — not brand/city-specific. */
  whatsIncluded: string[];
  durationMinutes: { min: number; max: number };
}

/**
 * Stand-in for the Service collection (Phase 2.5 §3) — mirrors the 10 core
 * services from the approved sitemap (Phase 2 §3 `/services/*`).
 */
export const POPULAR_SERVICES: ServiceRecord[] = [
  {
    id: "service_bike-service",
    slug: "bike-service",
    name: "Full Bike Service",
    icon: BikeServiceIcon,
    shortDescription: "A complete multi-point checkup and tune-up for your bike.",
    longDescription:
      "A complete multi-point checkup covering the engine, brakes, chain, and tyres, so small issues get caught before they become breakdowns.",
    whatsIncluded: [
      "Engine oil check",
      "Brake inspection",
      "Chain lubrication",
      "Tyre pressure check",
    ],
    durationMinutes: { min: 60, max: 90 },
  },
  {
    id: "service_doorstep-repair",
    slug: "doorstep-repair",
    name: "Doorstep Repair",
    icon: DoorstepRepairIcon,
    shortDescription: "General repairs handled right at your home or office.",
    longDescription:
      "General mechanical repairs handled wherever your bike is — home, office, or roadside — without a workshop visit.",
    whatsIncluded: [
      "On-the-spot diagnosis",
      "Common part replacements",
      "Minor adjustments",
      "Test ride before handover",
    ],
    durationMinutes: { min: 30, max: 60 },
  },
  {
    id: "service_oil-change",
    slug: "oil-change",
    name: "Oil Change",
    icon: OilChangeIcon,
    shortDescription: "Engine oil and filter replacement with genuine oil.",
    longDescription:
      "A straightforward engine oil and filter replacement to keep the engine running smoothly between full services.",
    whatsIncluded: ["Engine oil drain and refill", "Oil filter replacement", "Level and leak check"],
    durationMinutes: { min: 20, max: 30 },
  },
  {
    id: "service_battery-replacement",
    slug: "battery-replacement",
    name: "Battery Replacement",
    icon: BatteryReplacementIcon,
    shortDescription: "Fast diagnosis and swap for a dead or dying battery.",
    longDescription:
      "A quick diagnosis of a dead or weak battery, followed by a swap so you're not stuck waiting for a jump-start.",
    whatsIncluded: [
      "Battery health check",
      "Terminal cleaning",
      "New battery fitment",
      "Charging system check",
    ],
    durationMinutes: { min: 20, max: 40 },
  },
  {
    id: "service_brake-service",
    slug: "brake-service",
    name: "Brake Service",
    icon: BrakeServiceIcon,
    shortDescription: "Pad, cable, and disc inspection for safer stopping.",
    longDescription:
      "A safety-focused inspection and service of your bike's braking system — pads, cables, and discs or drums.",
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
    longDescription:
      "A deep clean, re-lubrication, and tension adjustment for the drive chain, cutting down on noise and wear.",
    whatsIncluded: ["Chain degreasing", "Deep clean", "Lubrication", "Tension adjustment"],
    durationMinutes: { min: 20, max: 30 },
  },
  {
    id: "service_bike-wash",
    slug: "bike-wash",
    name: "Bike Wash",
    icon: BikeWashIcon,
    shortDescription: "A thorough exterior wash and detailing session.",
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
    id: "service_pickup-drop",
    slug: "pickup-drop",
    name: "Pickup & Drop",
    icon: PickupDropIcon,
    shortDescription: "Can't wait around? We collect and return your bike.",
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
    id: "service_emergency-breakdown",
    slug: "emergency-breakdown",
    name: "Emergency Breakdown",
    icon: EmergencyBreakdownIcon,
    shortDescription: "Stranded on the road? Get urgent, on-the-spot help.",
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
    id: "service_puncture-repair",
    slug: "puncture-repair",
    name: "Puncture Repair",
    icon: PunctureRepairIcon,
    shortDescription: "Quick tube/tyre fix so you're back on the road fast.",
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
