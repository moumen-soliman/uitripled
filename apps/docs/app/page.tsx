import HomePageContent from "@/components/home-page-content";
import { createMetadata, siteConfig } from "@/lib/seo";

export const metadata = createMetadata({
  title: "UI Components, Blocks & Pages",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "UI components",
    "baseui components",
    "shadcn components",
    "tailwind css",
    "motion components",
    "React components",
    "Next.js components",
    "Framer Motion",
    "shadcn/ui",
    "Tailwind CSS",
    "landing page templates",
    "UI library",
    "interactive UI",
    "UI TripleD",
    "tripled",
    "UI components",
    "motion components",
  ],
});

export default function HomePage() {
  return <HomePageContent />;
}
