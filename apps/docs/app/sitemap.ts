import { componentsRegistry } from "@/lib/registry";
import { siteConfig, sitemapEntries } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const componentEntries: MetadataRoute.Sitemap = componentsRegistry
    .filter((component) => component.display !== false)
    .map((component) => ({
      url: `${siteConfig.url}/components/${component.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...sitemapEntries, ...componentEntries].map((entry) => ({
    ...entry,
    lastModified,
  }));
}
