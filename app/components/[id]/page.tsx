import AnimationDetailPageClient from "./AnimationDetailPage.client";
import { createMetadata } from "@/lib/seo";
import {
  getComponentById,
  componentsRegistry,
  loadComponentCode,
} from "@/lib/components-registry";
import { Component } from "@/types";
import { notFound } from "next/navigation";

type PageParams = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return componentsRegistry
    .filter((component) => component.display !== false)
    .map((component) => ({ id: component.id }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageParams) {
  const { id } = await params;
  const component = getComponentById(id);

  if (!component) {
    return createMetadata({
      title: "Component Not Found",
      description:
        "The requested motion component could not be found in the UI TripleD library.",
      path: `/components/${id}`,
      index: false,
    });
  }

  return createMetadata({
    title: `${component.name} Component`,
    description: component.description
      ? `${component.description} View the live demo, animation settings, and production-ready code.`
      : `Explore the ${component.name} motion component with live demo, animation settings, and production-ready code.`,
    path: `/components/${component.id}`,
    keywords: [
      component.name,
      `${component.category} component`,
      "motion component",
      "Frame Motion",
      "shadcn/ui",
      "Tailwind CSS",
      "Framer Motion example",
      "UI TripleD component",
    ].filter(Boolean),
  });
}

export default async function AnimationDetailPage({ params }: PageParams) {
  const { id } = await params;
  const component = getComponentById(id);

  if (!component) {
    notFound();
  }

  const code = await loadComponentCode(component);
  const relatedComponents = component.variants;

  // Load code for each variant
  const variantCodes: Record<string, string> = {};
  if (relatedComponents) {
    await Promise.all(
      relatedComponents.map(async (variant) => {
        if (variant.code) {
          variantCodes[variant.id] = variant.code;
        } else {
          const variantComponent = getComponentById(variant.id);
          if (variantComponent) {
            variantCodes[variant.id] =
              await loadComponentCode(variantComponent);
          }
        }
      })
    );
  }

  return (
    <AnimationDetailPageClient
      code={code}
      relatedComponents={relatedComponents}
      variantCodes={variantCodes}
      baseId={component.id}
    />
  );
}
