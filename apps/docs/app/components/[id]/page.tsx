import {
  componentsRegistry,
  getComponentById,
  loadComponentCode,
} from "@/lib/components-registry";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import AnimationDetailPageClient from "./AnimationDetailPage.client";

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

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
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

  // Load both baseui and shadcnui code for native components
  let baseuiCode: string | undefined;
  let shadcnuiCode: string | undefined;
  let carbonCode: string | undefined;

  let baseuiDemoCode: string | undefined;
  let shadcnuiDemoCode: string | undefined;
  let carbonDemoCode: string | undefined;

  if (component.category === "native") {
    const baseuiPath = `@uitripled/react-baseui/components/native/${component.id}-baseui.tsx`;
    const shadcnuiPath = `@uitripled/react-shadcn/components/native/${component.id}-shadcnui.tsx`;
    const carbonPath = `@uitripled/react-carbon/components/native/${component.id}-carbon.tsx`;

    // Demo paths
    const baseuiDemoPath = `@uitripled/react-baseui/components/native/demo/${component.id}-demo.tsx`;
    const shadcnuiDemoPath = `@uitripled/react-shadcn/components/native/demo/${component.id}-demo.tsx`;
    const carbonDemoPath = `@uitripled/react-carbon/components/native/demo/${component.id}-demo.tsx`;

    try {
      baseuiCode = await loadComponentCode({
        ...component,
        codePath: baseuiPath,
      });
    } catch (error) {
      // Baseui version doesn't exist, that's okay
    }

    try {
      baseuiDemoCode = await loadComponentCode({
        ...component,
        codePath: baseuiDemoPath,
      });
    } catch (error) {
      // Baseui demo doesn't exist, that's okay
    }

    try {
      shadcnuiCode = await loadComponentCode({
        ...component,
        codePath: shadcnuiPath,
      });
    } catch (error) {
      // Shadcnui version doesn't exist, that's okay
    }

    try {
      shadcnuiDemoCode = await loadComponentCode({
        ...component,
        codePath: shadcnuiDemoPath,
      });
    } catch (error) {
      // Shadcnui demo doesn't exist, that's okay
    }

    try {
      carbonCode = await loadComponentCode({
        ...component,
        codePath: carbonPath,
      });
    } catch (error) {
      // Carbon version doesn't exist, that's okay
    }

    try {
      carbonDemoCode = await loadComponentCode({
        ...component,
        codePath: carbonDemoPath,
      });
    } catch (error) {
      // Carbon demo doesn't exist, that's okay
    }
  }

  // Load baseui code for non-native components if available
  if (
    component.category !== "native" &&
    component.availableIn &&
    component.availableIn.includes("baseui")
  ) {
    // Try different paths based on component category and common subdirectories
    const subDirs = ["sections", "cards/baseui", "resumes/baseui", "blocks"];
    const possiblePaths = subDirs.map(
      (dir) => `@uitripled/react-baseui/components/${dir}/${component.id}-baseui.tsx`
    );

    for (const baseuiPath of possiblePaths) {
      try {
        const loadedBaseuiCode = await loadComponentCode({
          ...component,
          codePath: baseuiPath,
        });
        if (loadedBaseuiCode) {
          baseuiCode = loadedBaseuiCode;
          break;
        }
      } catch (error) {
        // Path doesn't exist, try next one
      }
    }

    // Ensure shadcnuiCode is set to the default code if not already set
    if (!shadcnuiCode) {
      // Try to find the shadcnui-specific path first if it exists
      const shadcnSubDirs = ["sections", "components/cards/shadcnui", "components/resumes/shadcnui", "blocks"];
      for (const dir of shadcnSubDirs) {
        const shadcnPath = `@uitripled/react-shadcn/components/${dir}/${component.id}.tsx`;
        try {
          const loadedShadcnCode = await loadComponentCode({
            ...component,
            codePath: shadcnPath,
          });
          if (loadedShadcnCode) {
            shadcnuiCode = loadedShadcnCode;
            break;
          }
        } catch (e) {}
      }

      if (!shadcnuiCode) {
        shadcnuiCode = code;
      }
    }
  }

  return (
    <AnimationDetailPageClient
      code={code}
      relatedComponents={relatedComponents}
      variantCodes={variantCodes}
      baseId={component.id}
      baseuiCode={baseuiCode}
      shadcnuiCode={shadcnuiCode}
      carbonCode={carbonCode}
      baseuiDemoCode={baseuiDemoCode}
      shadcnuiDemoCode={shadcnuiDemoCode}
      carbonDemoCode={carbonDemoCode}
    />
  );
}
