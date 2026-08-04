import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BrandDetail } from "@/components/brands";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import {
  getAllBrands,
  getBrandBySlug,
  getBrandFaqs,
  getFaqsByTag,
  getModelsByBrand,
} from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  SPEAKABLE_SELECTORS,
} from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface BrandPageProps {
  params: Promise<{ brand: string }>;
}

export function generateStaticParams() {
  return getAllBrands().map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return buildMetadata({
    title: `${brand.name} Service`,
    description: brand.description,
    path: `/brands/${brand.slug}`,
  });
}

/** /brands/[brand] — informational brand detail page (Phase 4 §13 item 3, extended Phase 6). */
export default async function BrandPage({ params }: BrandPageProps) {
  const { brand: slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const models = getModelsByBrand(brand.slug);
  const faqs = [...getFaqsByTag(`brand:${brand.slug}`), ...getBrandFaqs(brand)];

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
            { name: brand.name, path: `/brands/${brand.slug}` },
          ]),
          articleSchema({
            headline: `${brand.name} Service & Maintenance Guide`,
            description: brand.description,
            path: `/brands/${brand.slug}`,
            speakable: [SPEAKABLE_SELECTORS.quickAnswer],
          }),
          ...(faqs.length > 0
            ? [faqPageSchema(faqs, { speakable: [SPEAKABLE_SELECTORS.faqAnswer] })]
            : []),
        ]}
      />

      <BrandDetail brand={brand} models={models} />
      <DownloadAppCta />
    </>
  );
}
