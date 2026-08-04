import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { ServiceDetail } from "@/components/services";
import { DownloadAppCta } from "@/components/shared";
import {
  getAllServices,
  getRelatedServices,
  getServiceBySlug,
  getServiceFaqs,
  getServiceProcess,
} from "@/lib/content";
import {
  breadcrumbSchema,
  faqPageSchema,
  howToSchema,
  organizationSchema,
  serviceSchema,
  SPEAKABLE_SELECTORS,
} from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return getAllServices().map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
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
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const faqs = getServiceFaqs(service);
  const process = getServiceProcess(service);

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
            speakable: [SPEAKABLE_SELECTORS.quickAnswer],
          }),
          howToSchema({
            name: `How ${service.name} Works`,
            description: service.quickAnswer,
            steps: process,
          }),
          ...(faqs.length > 0
            ? [faqPageSchema(faqs, { speakable: [SPEAKABLE_SELECTORS.faqAnswer] })]
            : []),
        ]}
      />

      <ServiceDetail service={service} related={related} />
      <DownloadAppCta />
    </>
  );
}
