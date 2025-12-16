"use client";

import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { componentsRegistry } from "@/lib/components-registry";
import { motion } from "framer-motion";
import { ArrowLeft, Code, ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ComponentType, useEffect, useRef, useState } from "react";

type SavedProjectComponent = {
  id?: string;
  animationId: string;
  textContent?: Record<
    string,
    {
      original: string;
      value: string;
    }
  >;
};

type SavedProjectPage = {
  id?: string;
  name?: string;
  slug?: string;
  components?: SavedProjectComponent[];
  code?: string;
};

type SavedProject = {
  name: string;
  uuid?: string;
  deploymentSlug?: string;
  pages?: SavedProjectPage[];
  entryPageId?: string;
  components?: SavedProjectComponent[];
  code?: string;
  savedAt: string;
  deploymentId?: string;
  deploymentUrl?: string;
};

type TextContentEntry = {
  original: string;
  value: string;
};

type ComponentInstance = {
  id: string;
  animationId: string;
  textContent?: Record<string, TextContentEntry>;
  component: ComponentType<any>;
};

type PreviewProjectPage = {
  id: string;
  name: string;
  slug: string;
  code?: string;
  components: ComponentInstance[];
};

type NormalizedProject = {
  name: string;
  savedAt: string;
  pages: PreviewProjectPage[];
  entryPageId: string;
};

const sanitizeSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);

const createFallbackPageCode = () => `'use client'

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Content coming soon</h1>
      <p className="mt-4 text-muted-foreground">Add blocks in the builder and re-save to update this page.</p>
    </div>
  )
}
`;

function extractSavedPages(project: SavedProject): SavedProjectPage[] {
  if (project.pages && project.pages.length > 0) {
    return project.pages;
  }

  return [
    {
      id:
        project.entryPageId ||
        `page-${sanitizeSlug(project.name || "landing") || "landing"}`,
      name: "Landing",
      slug: "landing",
      components: project.components ?? [],
      code: project.code,
    },
  ];
}

function normalizeProject(project: SavedProject): NormalizedProject | null {
  const rawPages = extractSavedPages(project);
  if (rawPages.length === 0) {
    return null;
  }

  const slugsInUse: string[] = [];
  const pages: PreviewProjectPage[] = rawPages.map((page, index) => {
    const safeName =
      page.name?.trim() || (index === 0 ? "Landing" : `Page ${index + 1}`);

    const baseSlug =
      sanitizeSlug(page.slug?.trim() || safeName) || `page-${index + 1}`;
    let slug = baseSlug;
    let attempt = 2;
    while (slugsInUse.includes(slug)) {
      slug = `${baseSlug}-${attempt++}`;
    }
    slugsInUse.push(slug);

    const pageId =
      page.id && page.id.length > 0
        ? page.id
        : `page-${index}-${Math.random().toString(36).slice(2, 8)}`;

    const componentInstances = (page.components ?? [])
      .map<ComponentInstance | null>((comp, componentIndex) => {
        const animation = componentsRegistry.find(
          (a) => a.id === comp.animationId
        );
        if (!animation) {
          return null;
        }

        return {
          id:
            comp.id && comp.id.length > 0
              ? comp.id
              : `component-${pageId}-${componentIndex}`,
          animationId: comp.animationId,
          textContent: comp.textContent,
          component: animation.component,
        };
      })
      .filter((value): value is ComponentInstance => Boolean(value));

    const resolvedCode =
      page.code && page.code.trim().length > 0
        ? page.code
        : index === 0 && project.code && project.code.trim().length > 0
          ? project.code
          : createFallbackPageCode();

    return {
      id: pageId,
      name: safeName,
      slug,
      code: resolvedCode,
      components: componentInstances,
    };
  });

  const entryPageCandidate = project.entryPageId;
  const entryPageId =
    entryPageCandidate && pages.some((page) => page.id === entryPageCandidate)
      ? entryPageCandidate
      : pages[0].id;

  return {
    name: project.name,
    savedAt: project.savedAt,
    pages,
    entryPageId,
  };
}

export default function PreviewProjectPageClient() {
  const params = useParams();
  const router = useRouter();
  const projectName = decodeURIComponent(params.projectName as string);

  const [project, setProject] = useState<NormalizedProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [activePageId, setActivePageId] = useState<string | null>(null);

  useEffect(() => {
    // Load project from localStorage
    const projects = JSON.parse(
      localStorage.getItem("builderProjects") || "{}"
    );
    const foundProject = projects[projectName];

    if (foundProject) {
      const normalized = normalizeProject(foundProject as SavedProject);
      if (normalized) {
        setProject(normalized);
        setActivePageId(
          normalized.entryPageId || normalized.pages[0]?.id || null
        );
      }
    }

    setLoading(false);
  }, [projectName]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center bg-background px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-2 p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold">Project Not Found</h2>
            <p className="mb-6 text-muted-foreground">
              The project &quot;{projectName}&quot; could not be found. It may
              have been deleted or never existed.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={() => router.push("/builder")} size="lg">
                Go to Builder
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                size="lg"
              >
                Go Home
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  const activePage = project
    ? (project.pages.find((page) => page.id === activePageId) ??
      project.pages[0] ??
      null)
    : null;

  const componentInstances: ComponentInstance[] = activePage?.components ?? [];
  const codeToDisplay = activePage?.code ?? "";
  const activeRoute =
    project && activePage
      ? project.pages[0]?.id === activePage.id
        ? "/"
        : `/${activePage.slug}`
      : "/";

  const selector =
    "h1,h2,h3,h4,h5,h6,p,span,button,a,li,blockquote,figcaption,label,strong,em,small,div";

  function PreviewComponent({ instance }: { instance: ComponentInstance }) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container || !instance.textContent) return;

      const allElements = Array.from(
        container.querySelectorAll<HTMLElement>(selector)
      );

      const editableElements = allElements.filter((el) => {
        const text = el.textContent?.trim();
        if (!text) return false;

        const hasChildWithText = Array.from(
          el.querySelectorAll<HTMLElement>(selector)
        ).some((child) => {
          if (child === el) return false;
          const childText = child.textContent?.trim();
          return !!childText;
        });

        if (hasChildWithText) {
          return false;
        }

        return true;
      });

      editableElements.forEach((el, index) => {
        const textId = `${instance.id}-${index}`;
        const stored = instance.textContent?.[textId];

        if (stored) {
          el.dataset.builderTextId = textId;
          el.textContent = stored.value;
        }
      });
    }, [instance.id, instance.textContent]);

    const Component = instance.component;

    return (
      <div ref={containerRef} className="w-full">
        <Component />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-4 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/builder"
                className="text-muted-foreground transition-colors hover:text-foreground text-xs font-medium"
                aria-label="Back to Builder"
                target="_blank"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Builder
              </Link>
              <div className="border-l border-border pl-4">
                <h1 className="text-lg font-semibold">{project.name}</h1>
                <p className="text-xs text-muted-foreground">
                  Saved on {new Date(project.savedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCode(!showCode)}
              >
                <Code className="mr-2 h-4 w-4" />
                {showCode ? "Hide Code" : "Show Code"}
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  window.open(window.location.href, "_blank");
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in New Tab
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.pages.map((page) => (
                <Button
                  key={page.id}
                  size="sm"
                  variant={activePage?.id === page.id ? "default" : "outline"}
                  onClick={() => setActivePageId(page.id)}
                >
                  {page.name}
                </Button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              Route:{" "}
              <code className="rounded bg-muted px-2 py-0.5 text-foreground">
                {activeRoute}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Code View */}
      {showCode && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-border bg-card"
        >
          <div className="container mx-auto p-4">
            <h2 className="mb-4 text-lg font-semibold">Generated Code</h2>
            <div className="max-h-[500px] overflow-auto rounded-lg border border-border">
              <CodeBlock code={codeToDisplay} language="tsx" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Preview */}
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {componentInstances.map((instance, index) => (
            <motion.div
              key={instance.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full"
            >
              <PreviewComponent instance={instance} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
