import { generateRegistryRssFeed } from "@wandry/analytics-sdk";
import type { NextRequest } from "next/server";

// Revalidate every 6 hours to reduce edge invocations
export const revalidate = 21600; // 6 hours

export async function GET(request: NextRequest) {
  const baseUrl = new URL(request.url).origin;

  const rssXml = await generateRegistryRssFeed({
    baseUrl,
    componentsUrl: "components",
    blocksUrl: "components?target=blocks",
    rss: {
      title: "UITripleD Components and Blocks",
      description:
        "Production-ready UI components and blocks built with shadcn/ui and Framer Motion.",
      link: "https://ui.tripled.work",
      endpoint: "/rss.xml",
      pubDateStrategy: "githubLastEdit",
    },
    registry: {
      path: "r/registry.json",
    },
    github: {
      owner: "moumen-soliman",
      repo: "uitripled",
      token: process.env.GITHUB_TOKEN,
      sha: "master",
    },
  });

  if (!rssXml) {
    return new Response("RSS feed not available", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      // Aggressive caching to reduce edge requests - cache for 6 hours, allow stale for 1 day
      "Cache-Control":
        "public, max-age=21600, s-maxage=21600, stale-while-revalidate=86400",
    },
  });
}
