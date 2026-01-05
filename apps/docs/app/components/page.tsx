import ComponentsLandingPage from "@/components/components-landing-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Component Library",
  description:
    "Browse 70+ production-ready motion components built with Framer Motion, shadcn/ui, baseui, and Tailwind CSS.",
  path: "/components",
  keywords: [
    "React components",
    "motion components",
    "baseui components",
    "shadcn components",
    "tailwind css",
    "component library",
    "Framer Motion UI",
    "UI TripleD",
    "tripled",
    "UI components",
    "motion components",
    "React components",
    "Next.js components",
    "Framer Motion",
  ],
});

export default function ComponentsPage() {
  return <ComponentsLandingPage />;
}
