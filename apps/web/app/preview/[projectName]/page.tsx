import { createMetadata } from "@/lib/seo";
import PreviewProjectPageClient from "./PreviewProjectPage.client";

type PreviewPageProps = {
  params: Promise<{
    projectName: string;
  }>;
};

export async function generateMetadata({ params }: PreviewPageProps) {
  const { projectName } = await params;
  const projectLabel = projectName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return createMetadata({
    title: `${projectLabel} Preview`,
    description: `Live preview for the ${projectLabel} project generated with the UI TripleD motion builder.`,
    path: `/preview/${projectName}`,
    index: false,
  });
}

export default function PreviewProjectPage() {
  return <PreviewProjectPageClient />;
}
