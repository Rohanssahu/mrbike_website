import {
  BatteryCharging,
  CircleDot,
  Cog,
  Disc,
  Droplet,
  Home,
  Siren,
  SprayCan,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface ServiceRecord {
  id: string;
  slug: string;
  name: string;
  icon: LucideIcon;
  shortDescription: string;
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
    icon: Wrench,
    shortDescription: "A complete multi-point checkup and tune-up for your bike.",
    durationMinutes: { min: 60, max: 90 },
  },
  {
    id: "service_doorstep-repair",
    slug: "doorstep-repair",
    name: "Doorstep Repair",
    icon: Home,
    shortDescription: "General repairs handled right at your home or office.",
    durationMinutes: { min: 30, max: 60 },
  },
  {
    id: "service_oil-change",
    slug: "oil-change",
    name: "Oil Change",
    icon: Droplet,
    shortDescription: "Engine oil and filter replacement with genuine oil.",
    durationMinutes: { min: 20, max: 30 },
  },
  {
    id: "service_battery-replacement",
    slug: "battery-replacement",
    name: "Battery Replacement",
    icon: BatteryCharging,
    shortDescription: "Fast diagnosis and swap for a dead or dying battery.",
    durationMinutes: { min: 20, max: 40 },
  },
  {
    id: "service_brake-service",
    slug: "brake-service",
    name: "Brake Service",
    icon: Disc,
    shortDescription: "Pad, cable, and disc inspection for safer stopping.",
    durationMinutes: { min: 30, max: 45 },
  },
  {
    id: "service_chain-cleaning",
    slug: "chain-cleaning",
    name: "Chain Cleaning",
    icon: Cog,
    shortDescription: "Deep clean, lube, and adjustment for a smoother ride.",
    durationMinutes: { min: 20, max: 30 },
  },
  {
    id: "service_bike-wash",
    slug: "bike-wash",
    name: "Bike Wash",
    icon: SprayCan,
    shortDescription: "A thorough exterior wash and detailing session.",
    durationMinutes: { min: 30, max: 45 },
  },
  {
    id: "service_pickup-drop",
    slug: "pickup-drop",
    name: "Pickup & Drop",
    icon: Truck,
    shortDescription: "Can't wait around? We collect and return your bike.",
    durationMinutes: { min: 15, max: 30 },
  },
  {
    id: "service_emergency-breakdown",
    slug: "emergency-breakdown",
    name: "Emergency Breakdown",
    icon: Siren,
    shortDescription: "Stranded on the road? Get urgent, on-the-spot help.",
    durationMinutes: { min: 20, max: 40 },
  },
  {
    id: "service_puncture-repair",
    slug: "puncture-repair",
    name: "Puncture Repair",
    icon: CircleDot,
    shortDescription: "Quick tube/tyre fix so you're back on the road fast.",
    durationMinutes: { min: 15, max: 25 },
  },
];
