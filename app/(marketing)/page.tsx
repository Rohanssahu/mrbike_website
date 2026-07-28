import {
  BrandsWeService,
  CitiesWeServe,
  CustomerReviews,
  FeaturedGarages,
  Hero,
  HowItWorks,
  PopularServices,
  Serviceability,
  TrustBand,
  WhyChooseUs,
} from "@/components/home";
import { Container } from "@/components/shared/Container";

/**
 * Homepage — Phase 4C scope adds Brands We Service, Cities We Serve,
 * Featured Garages, and Customer Reviews. Remaining sections (Download App,
 * Become a Partner, Blogs, FAQs, final CTA) land in a later phase, per the
 * approved section order in docs/phase-3-homepage-ux.md §2.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Container id="serviceability" className="relative z-10 -mt-10 lg:-mt-16">
        <Serviceability />
      </Container>
      <PopularServices />
      <HowItWorks />
      <WhyChooseUs />
      <TrustBand />
      <BrandsWeService />
      <CitiesWeServe />
      <FeaturedGarages />
      <CustomerReviews />
    </>
  );
}
