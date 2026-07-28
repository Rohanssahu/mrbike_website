import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface HowItWorksStep {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** The six-step booking flow, in order. */
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: "choose-service",
    icon: ClipboardCheck,
    title: "Choose Service",
    description:
      "Pick what your bike needs — oil change, battery replacement, full service, or anything in between.",
  },
  {
    id: "select-location",
    icon: MapPin,
    title: "Select Location",
    description:
      "Tell us where you are — home, office, or roadside — so we know exactly where to send help.",
  },
  {
    id: "book-through-app",
    icon: Smartphone,
    title: "Book Through App",
    description:
      "Confirm your slot in the MR Bike Doctor app and see upfront, transparent pricing before you book.",
  },
  {
    id: "mechanic-arrives",
    icon: Wrench,
    title: "Verified Mechanic Arrives",
    description:
      "A background-checked mechanic reaches you on time, with live tracking the whole way.",
  },
  {
    id: "service-completed",
    icon: CheckCircle2,
    title: "Service Completed",
    description: "Your bike is serviced on the spot, using genuine parts and the right tools.",
  },
  {
    id: "digital-invoice",
    icon: FileText,
    title: "Digital Invoice",
    description:
      "Get an itemized digital invoice instantly, added to your bike's permanent service history.",
  },
];
