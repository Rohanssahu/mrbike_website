import Link from "next/link";

import { getClusterPostsForPillar, getPillarForCluster } from "@/lib/content/blog";

import type { BlogPostRecord } from "./mock-data";

interface HubNavProps {
  post: BlogPostRecord;
}

/**
 * Content Hub navigation (Phase 4 §15/Phase 6) — on a pillar post, links
 * out to every cluster article; on a cluster post, links back to its
 * pillar. Both directions read through the `lib/content/blog` access layer,
 * so a hub's shape is entirely defined by data, not page-specific code.
 */
export function HubNav({ post }: HubNavProps) {
  if (post.isPillar && post.clusterPostIds && post.clusterPostIds.length > 0) {
    const clusterPosts = getClusterPostsForPillar(post);
    if (clusterPosts.length === 0) return null;

    return (
      <div className="border-primary/30 bg-primary/5 rounded-xl border p-5">
        <h2 className="text-foreground mb-3 text-sm font-semibold">
          Part of this guide: {post.title.replace("[Sample] ", "")}
        </h2>
        <ul className="flex flex-col gap-2">
          {clusterPosts.map((clusterPost) => (
            <li key={clusterPost.id}>
              <Link
                href={`/blog/${clusterPost.categorySlug}/${clusterPost.slug}`}
                className="text-primary text-sm hover:underline"
              >
                {clusterPost.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (post.hubId && !post.isPillar) {
    const pillar = getPillarForCluster(post);
    if (!pillar) return null;

    return (
      <div className="border-border bg-muted/30 rounded-xl border p-5 text-sm">
        <span className="text-muted-foreground">Part of the guide: </span>
        <Link
          href={`/blog/${pillar.categorySlug}/${pillar.slug}`}
          className="text-primary hover:underline"
        >
          {pillar.title.replace("[Sample] ", "")}
        </Link>
      </div>
    );
  }

  return null;
}
