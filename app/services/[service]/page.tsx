import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getFaqsByTag } from "@/components/faq";
import { POPULAR_SERVICES } from "@/components/home/PopularServices/mock-data";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceDetail } from "@/components/services";
import { DownloadAppCta } from "@/components/shared";
import {
  breadcrumbSchema,
  faqPageSchema,
  howToSchema,
  organizationSchema,
  serviceSchema,
} from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return POPULAR_SERVICES.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = POPULAR_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.quickAnswer,
    path: `/services/${service.slug}`,
  });
}

/** /services/[service] — informational service detail page (Phase 4 §13 item 3, extended Phase 6). */
export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = POPULAR_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = POPULAR_SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const faqs = getFaqsByTag(`service:${service.slug}`);

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.name,
            description: service.longDescription,
            path: `/services/${service.slug}`,
          }),
          ...(service.steps && service.steps.length > 0
            ? [
                howToSchema({
                  name: `How ${service.name} Works`,
                  description: service.quickAnswer,
                  steps: service.steps,
                }),
              ]
            : []),
          ...(faqs.length > 0 ? [faqPageSchema(faqs)] : []),
        ]}
      />

      <ServiceDetail service={service} related={related} />
      <DownloadAppCta />
    </>
  );
}
