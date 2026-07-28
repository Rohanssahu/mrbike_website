import {
  BadgeCheck,
  History,
  Home,
  IndianRupee,
  Navigation2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface FeatureRecord {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** The differentiation argument the Hero has no room for (Phase 3 §2). */
export const WHY_CHOOSE_US_FEATURES: FeatureRecord[] = [
  {
    id: "verified-mechanics",
    icon: ShieldCheck,
    title: "Verified Mechanics",
    description:
      "Every mechanic is background-checked, trained, and rated by real customers before they reach your doorstep.",
  },
  {
    id: "doorstep-convenience",
    icon: Home,
    title: "Doorstep Convenience",
    description:
      "No dropping your bike off and waiting around — service comes to your home, office, or roadside.",
  },
  {
    id: "transparent-pricing",
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "See the price upfront in the app. No verbal haggling and no surprise charges on the final bill.",
  },
  {
    id: "service-warranty",
    icon: BadgeCheck,
    title: "Service Warranty",
    description:
      "Every job is backed by a warranty on parts and labor, so you're covered after the mechanic leaves.",
  },
  {
    id: "live-tracking",
    icon: Navigation2,
    title: "Live Tracking",
    description:
      "Track your mechanic's arrival in real time, the same way you'd track a cab or a food delivery.",
  },
  {
    id: "digital-service-history",
    icon: History,
    title: "Digital Service History",
    description:
      "Every service is logged to your bike's permanent digital record — no lost paper bills, ever.",
  },
];
