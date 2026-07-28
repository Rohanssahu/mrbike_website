import type { Metadata } from "next";

import { BLOG_POSTS, BlogHero, BlogSearch, CategoryChips, FeaturedPost } from "@/components/blog";
import { JsonLd } from "@/components/seo/json-ld";
import { DownloadAppCta } from "@/components/shared";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { breadcrumbSchema, organizationSchema } from "@/seo/json-ld";
import { buildMetadata } from "@/seo/metadata";

const BROWSE_HEADING_ID = "blog-browse-heading";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Bike maintenance guides, seasonal care tips, brand-specific advice, and more from MR Bike Doctor.",
  path: "/blog",
});

/** /blog hub — the site's primary SEO engine (Phase 4 §8/§13 item 4). */
export default function BlogPage() {
  const featured = BLOG_POSTS.find((post) => post.isFeatured) ?? BLOG_POSTS[0];

  return (
    <>
      <JsonLd
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      <BlogHero />

      {featured && (
        <Section aria-label="Featured article">
          <FeaturedPost post={featured} />
        </Section>
      )}

      <Section className="bg-muted/30" aria-labelledby={BROWSE_HEADING_ID}>
        <SectionHeading id={BROWSE_HEADING_ID} eyebrow="Browse" title="All Articles" />
        <CategoryChips className="mt-6" />
        <div className="mt-8">
          <BlogSearch posts={BLOG_POSTS} />
        </div>
      </Section>

      <DownloadAppCta />
    </>
  );
}
