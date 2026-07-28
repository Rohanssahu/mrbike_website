export interface AreaRecord {
  id: string;
  slug: string;
  citySlug: string;
  name: string;
}

/**
 * Areas are only listed for live cities (Section 17 — no combinatorial page
 * is generated without real backing coverage). Hyderabad is the only live
 * city today (see `components/home/CitiesWeServe/mock-data.ts`).
 */
export const AREAS: AreaRecord[] = [
  { id: "area_hyderabad-gachibowli", slug: "gachibowli", citySlug: "hyderabad", name: "Gachibowli" },
  { id: "area_hyderabad-madhapur", slug: "madhapur", citySlug: "hyderabad", name: "Madhapur" },
  { id: "area_hyderabad-kondapur", slug: "kondapur", citySlug: "hyderabad", name: "Kondapur" },
  {
    id: "area_hyderabad-banjara-hills",
    slug: "banjara-hills",
    citySlug: "hyderabad",
    name: "Banjara Hills",
  },
  { id: "area_hyderabad-kukatpally", slug: "kukatpally", citySlug: "hyderabad", name: "Kukatpally" },
];
