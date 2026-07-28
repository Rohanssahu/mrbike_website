/** Formats a whole-rupee amount as a localized INR string, e.g. `formatINR(299)` → "₹299". */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
