import {
  AppFeatures,
  AppShowcase,
  BlogTeaser,
  BrandsWeService,
  CitiesWeServe,
  CustomerReviews,
  FaqTeaser,
  Hero,
  HowItWorks,
  PopularServices,
  ServicesBanner,
  TrustBand,
  WhyChooseUs,
} from "@/components/home";
import { DownloadAppCta } from "@/components/shared/DownloadAppCta";

/**
 * Homepage — re-sequenced per the approved direction change
 * (docs/phase-4-direction-change.md §4). The Serviceability widget and
 * Featured Garages are removed entirely (§2/§12): the site never checks
 * location-gated availability or surfaces individual garage listings, since
 * booking only happens in the app. AppShowcase and AppFeatures showcase the
 * real, shipped app (real screenshots, real icons — no mockups) right after
 * the Hero, since the app itself is the product being sold here. BlogTeaser
 * and FaqTeaser (Phase 5F) close out the approved §4 section order and the
 * internal-linking gap those two pages had (previously reachable only via
 * header nav / footer, not the homepage).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <AppShowcase />
      <PopularServices />
      <ServicesBanner />
      <AppFeatures />
      <HowItWorks />
      <WhyChooseUs />
      <TrustBand />
      <BrandsWeService />
      <CitiesWeServe />
      <CustomerReviews />
      <BlogTeaser />
      <FaqTeaser />
      <DownloadAppCta />
    </>
  );
}
