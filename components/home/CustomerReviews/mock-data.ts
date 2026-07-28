export interface ReviewRecord {
  id: string;
  authorName: string;
  rating: number;
  bodyText: string;
  serviceName: string;
  cityName: string;
  /** ISO date string. */
  createdAt: string;
  featured: boolean;
}

/**
 * Stand-in for the Review collection (Phase 2.5 §3/§14). The homepage only
 * ever queries `featured = true` records — mirrored here via `.filter()`
 * rather than assuming every mock row belongs on the homepage.
 */
export const CUSTOMER_REVIEWS: ReviewRecord[] = [
  {
    id: "review_ananya-rao",
    authorName: "Ananya Rao",
    rating: 5,
    bodyText:
      "The mechanic arrived right on time and changed my scooter's oil in the office parking lot. Didn't have to take a single hour off work.",
    serviceName: "Oil Change",
    cityName: "Gachibowli, Hyderabad",
    createdAt: "2026-06-12",
    featured: true,
  },
  {
    id: "review_vikram-reddy",
    authorName: "Vikram Reddy",
    rating: 5,
    bodyText:
      "My Classic 350 wouldn't start on a Sunday morning. Booked the emergency service and a mechanic was there in under 30 minutes.",
    serviceName: "Emergency Breakdown",
    cityName: "Kondapur, Hyderabad",
    createdAt: "2026-05-28",
    featured: true,
  },
  {
    id: "review_sneha-iyer",
    authorName: "Sneha Iyer",
    rating: 4,
    bodyText:
      "Loved seeing the exact price before I confirmed the booking. No surprise add-ons at the end, unlike the garage I used to go to.",
    serviceName: "Full Bike Service",
    cityName: "Madhapur, Hyderabad",
    createdAt: "2026-05-14",
    featured: true,
  },
  {
    id: "review_karthik-menon",
    authorName: "Karthik Menon",
    rating: 5,
    bodyText:
      "Tracking the mechanic's arrival on the map felt exactly like tracking a food delivery. Small thing, but it made me trust the whole process.",
    serviceName: "Battery Replacement",
    cityName: "Hitech City, Hyderabad",
    createdAt: "2026-04-30",
    featured: true,
  },
  {
    id: "review_priya-desai",
    authorName: "Priya Desai",
    rating: 5,
    bodyText:
      "We have three bikes at home and one account now keeps a service history for all of them. No more digging through old paper bills.",
    serviceName: "Chain Cleaning",
    cityName: "Jubilee Hills, Hyderabad",
    createdAt: "2026-04-09",
    featured: true,
  },
  {
    id: "review_arjun-nair",
    authorName: "Arjun Nair",
    rating: 4,
    bodyText:
      "Got a puncture on the way to work and had a mechanic fix it roadside within 20 minutes. Genuinely didn't think that was possible.",
    serviceName: "Puncture Repair",
    cityName: "Banjara Hills, Hyderabad",
    createdAt: "2026-03-22",
    featured: true,
  },
];
