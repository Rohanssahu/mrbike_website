import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Static routes are registered here as they're built in later phases
 * (service pages, city pages, etc. will push additional entries).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [{ path: "/", priority: 1, changeFrequency: "weekly" }];

  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
