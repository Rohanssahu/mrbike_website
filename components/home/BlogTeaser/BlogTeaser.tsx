import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PostCard } from "@/components/blog/PostCard";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllPosts } from "@/lib/content";

const HEADING_ID = "home-blog-heading";
const LATEST_COUNT = 3;

/**
 * Latest-articles teaser (Phase 4 §4 — "Blog (latest articles)" homepage
 * section). Surfaces already-published `/blog` content on the homepage so
 * it isn't reachable only via the header nav — closes the internal-linking
 * gap flagged in the Phase 5F audit.
 */
export function BlogTeaser() {
  const latestPosts = [...getAllPosts()]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, LATEST_COUNT);

  if (latestPosts.length === 0) return null;

  return (
    <Section aria-labelledby={HEADING_ID}>
      <SectionHeading
        id={HEADING_ID}
        eyebrow="From the Blog"
        title="Maintenance guides & tips"
        description="Practical advice on keeping your bike running, straight from the MR Bike Doctor blog."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" nativeButton={false} render={<Link href="/blog" />}>
          View All Articles
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
