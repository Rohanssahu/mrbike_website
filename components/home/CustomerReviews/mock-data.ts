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
 * Placeholder reviews for Hyderabad, added at explicit user request ahead of
 * real Play Store / backend review data being available. Replace with real
 * reviews once they exist — see git history for the previous Phase 5F
 * cleanup that removed an earlier batch of fabricated reviews for the same
 * reason this batch should eventually be replaced.
 */
export const CUSTOMER_REVIEWS: ReviewRecord[] = [
  {
    id: "review_praveen-kumar-reddy",
    authorName: "Praveen Kumar Reddy",
    rating: 5,
    bodyText:
      "Booked a bike service through the app and the mechanic was at my apartment in Gachibowli within the hour. Clean work, fair pricing shown upfront — no surprises at the end.",
    serviceName: "Bike Service",
    cityName: "Gachibowli, Hyderabad",
    createdAt: "2026-07-18",
    featured: true,
  },
  {
    id: "review_syed_abdul-rahman",
    authorName: "Syed Abdul Rahman",
    rating: 5,
    bodyText:
      "My bike wouldn't start on a Sunday morning and I used the emergency service. Mechanic reached Madhapur in about 25 minutes and got it running again. Genuinely useful for breakdowns.",
    serviceName: "Emergency Bike Service",
    cityName: "Madhapur, Hyderabad",
    createdAt: "2026-07-10",
    featured: true,
  },
  {
    id: "review_lakshmi-prasanna",
    authorName: "Lakshmi Prasanna",
    rating: 4,
    bodyText:
      "Doorstep oil change was convenient since I work from home in Kondapur. Took about 25 minutes and the mechanic explained what he was checking. Would've liked a bit more notice on arrival time.",
    serviceName: "Engine Oil Change",
    cityName: "Kondapur, Hyderabad",
    createdAt: "2026-06-22",
    featured: true,
  },
  {
    id: "review_mohammed-imran",
    authorName: "Mohammed Imran",
    rating: 5,
    bodyText:
      "Battery had died and I couldn't get the bike started. Booked through the app, mechanic swapped it at my building in Banjara Hills, checked the charging system too. Solid service.",
    serviceName: "Battery Replacement",
    cityName: "Banjara Hills, Hyderabad",
    createdAt: "2026-07-24",
    featured: true,
  },
  {
    id: "review_srinivas-rao",
    authorName: "Srinivas Rao",
    rating: 5,
    bodyText:
      "Brakes were feeling spongy for weeks. The mechanic in Kukatpally inspected pads and cables, topped up the brake fluid, and now the bike stops properly again. Should've booked this sooner.",
    serviceName: "Brake Repair",
    cityName: "Kukatpally, Hyderabad",
    createdAt: "2026-06-30",
    featured: true,
  },
  {
    id: "review_ayesha-fatima",
    authorName: "Ayesha Fatima",
    rating: 4,
    bodyText:
      "Used the pickup and drop option since I couldn't take time off work. Bike was collected from Gachibowli in the morning and returned by evening, serviced and clean.",
    serviceName: "Bike Pickup & Drop",
    cityName: "Gachibowli, Hyderabad",
    createdAt: "2026-07-05",
    featured: true,
  },
  {
    id: "review_karthik-varma",
    authorName: "Karthik Varma",
    rating: 5,
    bodyText:
      "Went with the premium service for my bike's first big checkup. Thorough inspection, got a proper report at the end, and the extra attention was obvious compared to a regular service.",
    serviceName: "Premium Service",
    cityName: "Madhapur, Hyderabad",
    createdAt: "2026-07-14",
    featured: true,
  },
  {
    id: "review_divya-sri",
    authorName: "Divya Sri",
    rating: 5,
    bodyText:
      "Chain was making a lot of noise on my commute. Got it cleaned and lubricated at home in Kondapur — smooth and silent now. Mechanic was on time and polite.",
    serviceName: "Chain Cleaning",
    cityName: "Kondapur, Hyderabad",
    createdAt: "2026-06-15",
    featured: true,
  },
  {
    id: "review_mohammed-farhan",
    authorName: "Mohammed Farhan",
    rating: 4,
    bodyText:
      "Bike was pulling to one side on the highway. Got the wheel alignment done at my office parking in Banjara Hills — handling feels normal again. Booking through the app was straightforward.",
    serviceName: "Wheel Alignment",
    cityName: "Banjara Hills, Hyderabad",
    createdAt: "2026-07-02",
    featured: true,
  },
  {
    id: "review_sowmya-reddy",
    authorName: "Sowmya Reddy",
    rating: 5,
    bodyText:
      "Got a full bike wash and detailing done in Kukatpally before a long trip. Looked brand new afterward, including the wheels and tyres. Good value for a doorstep service.",
    serviceName: "Bike Wash",
    cityName: "Kukatpally, Hyderabad",
    createdAt: "2026-06-28",
    featured: true,
  },
  {
    id: "review_naveen-chandra",
    authorName: "Naveen Chandra",
    rating: 5,
    bodyText:
      "Rear tyre was completely worn out. Mechanic came to Gachibowli with a replacement, balanced it and checked pressure before leaving. No need to ride to a shop at all.",
    serviceName: "Tyre Replacement",
    cityName: "Gachibowli, Hyderabad",
    createdAt: "2026-07-20",
    featured: true,
  },
  {
    id: "review_zainab-begum",
    authorName: "Zainab Begum",
    rating: 4,
    bodyText:
      "Had a puncture right outside my apartment in Madhapur. Booked the repair on the app and someone arrived within 30 minutes with a patch kit — quick and no fuss.",
    serviceName: "Puncture Repair",
    cityName: "Madhapur, Hyderabad",
    createdAt: "2026-07-08",
    featured: true,
  },
  {
    id: "review_ramesh-babu",
    authorName: "Ramesh Babu",
    rating: 5,
    bodyText:
      "Bike had an electrical fault and kept stalling. The mechanic diagnosed it properly instead of just guessing, replaced the faulty part, and took it for a test ride before handing it back.",
    serviceName: "Bike Repair",
    cityName: "Kondapur, Hyderabad",
    createdAt: "2026-06-19",
    featured: true,
  },
  {
    id: "review_priya-sharma",
    authorName: "Priya Sharma",
    rating: 5,
    bodyText:
      "Switched to this after a bad experience at a local garage. The doorstep service in Banjara Hills was transparent about pricing before starting any work, which I really appreciated.",
    serviceName: "Doorstep Bike Service",
    cityName: "Banjara Hills, Hyderabad",
    createdAt: "2026-07-26",
    featured: true,
  },
  {
    id: "review_abdul-kareem",
    authorName: "Abdul Kareem",
    rating: 4,
    bodyText:
      "General service was done at my home in Kukatpally over the weekend. Engine oil, brakes, chain and tyres all checked in one visit — saved me a trip to the workshop.",
    serviceName: "Bike Service",
    cityName: "Kukatpally, Hyderabad",
    createdAt: "2026-06-25",
    featured: true,
  },
  {
    id: "review_sandhya-rani",
    authorName: "Sandhya Rani",
    rating: 5,
    bodyText:
      "Bike broke down late at night near Gachibowli and I used the emergency option not expecting much. Mechanic showed up, fixed it on the spot, and I was riding home within the hour.",
    serviceName: "Emergency Bike Service",
    cityName: "Gachibowli, Hyderabad",
    createdAt: "2026-07-27",
    featured: true,
  },
];
