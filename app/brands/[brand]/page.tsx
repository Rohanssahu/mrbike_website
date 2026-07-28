import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BrandDetail } from "@/components/brands";
import { BIKE_MODELS } from "@/components/brands/mock-data";
import { BRANDS } from "@/components/home/BrandsWeService/mock-data";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface BrandPageProps {
  params: Promise<{ brand: string }>;
}

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) return {};

  return buildMetadata({
    title: `${brand.name} Service`,
    description: brand.description,
    path: `/brands/${brand.slug}`,
  });
}

/** /brands/[brand] — informational brand detail page (Phase 4 §13 item 3). */
export default async function BrandPage({ params }: BrandPageProps) {
  const { brand: slug } = await params;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) notFound();

  const models = BIKE_MODELS.filter((model) => model.brandSlug === brand.slug);

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
        ]}
      />

      <BrandDetail brand={brand} models={models} />
      <DownloadAppCta />
    </>
  );
}
