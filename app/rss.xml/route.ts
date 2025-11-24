import { generateRegistryRssFeed } from "@wandry/analytics-sdk";
import type { NextRequest } from "next/server";

export const revalidate = 3600;

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
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
