export interface AreaRecord {
  id: string;
  slug: string;
  citySlug: string;
  name: string;
  summary: string;
  nearbyLandmarks: string[];
  localCoverage: string[];
  relatedServiceSlugs: string[];
  pickupDrop: string;
  faqs: Array<{ question: string; answer: string }>;
}

/**
 * Areas are only listed for live cities (Section 17 — no combinatorial page
 * is generated without real backing coverage). Hyderabad is the only live
 * city today (see `components/home/CitiesWeServe/mock-data.ts`).
 */
export const AREAS: AreaRecord[] = [
  {
    id: "area_hyderabad-gachibowli",
    slug: "gachibowli",
    citySlug: "hyderabad",
    name: "Gachibowli",
    summary:
      "Doorstep bike service for Gachibowli's apartment communities, office campuses, and daily commuters, with bookings and address confirmation handled in the MR Bike Doctor app.",
    nearbyLandmarks: ["GMC Balayogi Athletic Stadium", "DLF Cyber City", "ISB Hyderabad"],
    localCoverage: ["Gachibowli", "Financial District", "Nanakramguda"],
    relatedServiceSlugs: ["bike-service", "emergency-bike-service", "tyre-replacement"],
    pickupDrop:
      "Choose Bike Pickup & Drop when the work needs a workshop visit or you cannot wait with the bike. Add your Gachibowli pickup address and check the available option in the app.",
    faqs: [
      {
        question: "Is doorstep bike service available in Gachibowli?",
        answer:
          "Gachibowli is listed within MR Bike Doctor's live Hyderabad coverage. Enter your exact address in the app to confirm service availability and time slots.",
      },
      {
        question: "Can I request bike service at an office in Gachibowli?",
        answer:
          "You can enter a home or office service address when booking. The app confirms whether the selected address and service can be handled at that location.",
      },
    ],
  },
  {
    id: "area_hyderabad-madhapur",
    slug: "madhapur",
    citySlug: "hyderabad",
    name: "Madhapur",
    summary:
      "Bike servicing and roadside help for riders around Madhapur's technology district, residential streets, and office parking areas, booked through the MR Bike Doctor app.",
    nearbyLandmarks: ["HITEC City", "Shilparamam", "Durgam Cheruvu"],
    localCoverage: ["Madhapur", "HITEC City", "Kavuri Hills"],
    relatedServiceSlugs: ["emergency-bike-service", "puncture-repair", "bike-service"],
    pickupDrop:
      "If a repair cannot be completed where the bike is parked, check Bike Pickup & Drop availability for your Madhapur address in the app.",
    faqs: [
      {
        question: "Can a mechanic come to my office parking area in Madhapur?",
        answer:
          "Enter the office address and location details in the app. Availability depends on access to the parking area and the service selected.",
      },
      {
        question: "Can I book puncture or breakdown help in Madhapur?",
        answer:
          "Puncture Repair and Emergency Bike Service are listed services. Use the app to check current availability for your Madhapur location.",
      },
    ],
  },
  {
    id: "area_hyderabad-kondapur",
    slug: "kondapur",
    citySlug: "hyderabad",
    name: "Kondapur",
    summary:
      "Convenient doorstep maintenance for bikes parked at homes, gated communities, and workplaces across Kondapur, with service selection and pricing shown in the app.",
    nearbyLandmarks: [
      "Hyderabad Botanical Garden",
      "Kothaguda Junction",
      "Sarath City Capital Mall",
    ],
    localCoverage: ["Kondapur", "Kothaguda", "Whitefields"],
    relatedServiceSlugs: ["engine-oil-change", "chain-cleaning", "doorstep-bike-service"],
    pickupDrop:
      "For workshop-based work, select Bike Pickup & Drop and enter your Kondapur address. The app will show whether pickup is available for the chosen service.",
    faqs: [
      {
        question: "What bike maintenance can be done at home in Kondapur?",
        answer:
          "Routine work such as oil changes, chain cleaning, and general bike service may be completed at your location. The app identifies the booking options available for your bike and address.",
      },
      {
        question: "How do I check service slots in Kondapur?",
        answer:
          "Choose a service, add your Kondapur address, and review the available slots in the MR Bike Doctor app before confirming.",
      },
    ],
  },
  {
    id: "area_hyderabad-banjara-hills",
    slug: "banjara-hills",
    citySlug: "hyderabad",
    name: "Banjara Hills",
    summary:
      "Doorstep bike repairs and scheduled maintenance for Banjara Hills residents, with a mechanic coming to the confirmed home, office, or parking location.",
    nearbyLandmarks: ["KBR National Park", "GVK One", "Banjara Hills Road No. 12"],
    localCoverage: ["Banjara Hills", "Masab Tank", "Srinagar Colony"],
    relatedServiceSlugs: ["battery-replacement", "doorstep-bike-service", "wheel-alignment"],
    pickupDrop:
      "Bike Pickup & Drop provides an alternative when the selected job requires workshop equipment. Confirm the option for your Banjara Hills address in the app.",
    faqs: [
      {
        question: "Is doorstep bike repair available in Banjara Hills?",
        answer:
          "Banjara Hills is part of the listed Hyderabad service coverage. Exact availability is confirmed after you enter the service address in the app.",
      },
      {
        question: "Can I arrange pickup and drop from an apartment in Banjara Hills?",
        answer:
          "Select Bike Pickup & Drop and provide the apartment pickup details. The app shows availability for the service and address before booking.",
      },
    ],
  },
  {
    id: "area_hyderabad-kukatpally",
    slug: "kukatpally",
    citySlug: "hyderabad",
    name: "Kukatpally",
    summary:
      "Doorstep bike care for Kukatpally's residential neighbourhoods and busy commuting corridors, from general servicing to brake and wash bookings.",
    nearbyLandmarks: ["JNTU Hyderabad", "KPHB Colony", "Kukatpally Metro Station"],
    localCoverage: ["Kukatpally", "KPHB Colony", "Vivekananda Nagar"],
    relatedServiceSlugs: ["bike-service", "brake-repair", "bike-wash"],
    pickupDrop:
      "When your bike needs workshop attention, check Bike Pickup & Drop for your Kukatpally location and selected service in the app.",
    faqs: [
      {
        question: "Can I book a weekend bike service in Kukatpally?",
        answer:
          "Available dates and time slots are shown in the app after you select the service and enter your Kukatpally address.",
      },
      {
        question: "Do you service bikes around KPHB Colony?",
        answer:
          "KPHB Colony is included in the local coverage information for this page. Enter the exact address in the app to confirm current serviceability.",
      },
    ],
  },
];
