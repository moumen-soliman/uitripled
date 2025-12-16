import type { Metadata, MetadataRoute } from "next";

type RobotsConfig = NonNullable<Metadata["robots"]>;

export type PageSeoConfig = {
  title: string;
  description: string;
  url?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  index?: boolean;
};

type SitemapEntry = MetadataRoute.Sitemap[number];

const DEFAULT_OG_IMAGE =
  "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtAc2cc4nrC37b1yitXR5Fm2HP6TVsYEDNGcjO";

export const siteConfig = {
  name: "UI TripleD",
  shortName: "tripled",
  url: "https://ui.tripled.work",
  description:
    "UI TripleD (tripled) offers production-ready UI components, motion blocks, and landing page templates powered by shadcn/ui and Framer Motion.",
  keywords: [
    "UI TripleD",
    "tripled",
    "UI components",
    "motion components",
    "React components",
    "Next.js components",
    "Framer Motion",
    "shadcn/ui",
    "Tailwind CSS",
    "landing page templates",
    "UI library",
    "interactive UI",
  ],
  twitterHandle: "@tripled",
  defaultImage: DEFAULT_OG_IMAGE,
  contactEmail: "support@tripled.work",
};

const metadataBase = new URL(siteConfig.url);

const defaultRobots: RobotsConfig = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

const noIndexRobots: RobotsConfig = {
  index: false,
  follow: false,
  googleBot: {
    index: false,
    follow: false,
  },
};

const defaultImageAbsolute = new URL(
  siteConfig.defaultImage,
  metadataBase
).toString();

const defaultOpenGraph: NonNullable<Metadata["openGraph"]> = {
  title: `${siteConfig.name} – UI Components, Blocks & Templates`,
  description: siteConfig.description,
  url: siteConfig.url,
  siteName: siteConfig.name,
  locale: "en_US",
  type: "website",
  images: [
    {
      url: defaultImageAbsolute,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} – UI Components, Blocks & Templates`,
    },
  ],
};

const defaultTwitter: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  site: siteConfig.twitterHandle,
  creator: siteConfig.twitterHandle,
  title: `${siteConfig.name} – UI Components, Blocks & Templates`,
  description: siteConfig.description,
  images: [defaultImageAbsolute],
};

export const baseMetadata: Metadata = {
  metadataBase,
  title: {
    default: `${siteConfig.name} – UI Components, Blocks & Templates`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  robots: defaultRobots,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
  index = true,
}: PageSeoConfig): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const absoluteUrl = new URL(canonicalPath, metadataBase).toString();
  const imageUrl =
    image ||
    (path.startsWith("/components/")
      ? `${siteConfig.url}/og?component=${path.split("/").pop()}`
      : DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: absoluteUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} – ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      ...defaultTwitter,
      title,
      description,
      images: [imageUrl],
    },
    robots: index ? defaultRobots : noIndexRobots,
  };
}

export const sitemapEntries: SitemapEntry[] = [
  {
    url: siteConfig.url,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${siteConfig.url}/components`,
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteConfig.url}/templates`,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${siteConfig.url}/builder`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.url}/deploy`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.url}/privacy`,
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    url: `${siteConfig.url}/terms`,
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    url: `${siteConfig.url}/refund`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];
