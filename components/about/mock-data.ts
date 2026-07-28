import {
  BadgeCheck,
  FileCheck2,
  MapPinned,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStepRecord {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * High-level service process — distinct from the in-app UX flow described in
 * HowItWorks (Phase 4 §19 "Service Process"). Describes the physical
 * service visit at a level already established as safe/approved content
 * elsewhere in this codebase (doorstep servicing, verified network).
 */
export const OUR_PROCESS_STEPS: ProcessStepRecord[] = [
  {
    id: "request",
    icon: Smartphone,
    title: "Request Submitted",
    description: "A rider requests a service through the MR Bike Doctor app.",
  },
  {
    id: "assigned",
    icon: BadgeCheck,
    title: "Verified Mechanic Assigned",
    description: "A background-checked mechanic from the verified network is matched to the request.",
  },
  {
    id: "arrival",
    icon: MapPinned,
    title: "Doorstep Arrival",
    description: "The mechanic reaches the rider's location — home, office, or roadside.",
  },
  {
    id: "service",
    icon: Wrench,
    title: "Service & Quality Check",
    description: "The bike is serviced on the spot and checked before handover.",
  },
  {
    id: "invoice",
    icon: FileCheck2,
    title: "Digital Invoice",
    description: "An itemized invoice is generated in the app, added to the bike's service history.",
  },
];
