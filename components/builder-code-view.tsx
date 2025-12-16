"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mergeComponentImports } from "@/lib/merge-imports";
import type { BuilderComponent, BuilderProjectPage } from "@/types/builder";
import { motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Download,
  Eye,
  Loader2,
  Save,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CodeBlock } from "./code-block";

type BuilderCodeViewProps = {
  pages: BuilderProjectPage[];
  activePageId: string | null;
};

const escapeForJSXText = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const replaceNextOccurrence = (
  source: string,
  search: string,
  replacement: string
) => {
  if (!search) return source;
  const index = source.indexOf(search);
  if (index === -1) return source;
  return `${source.slice(0, index)}${replacement}${source.slice(index + search.length)}`;
};

const applyTextOverrides = (
  code: string,
  textContent?: BuilderComponent["textContent"]
) => {
  if (!textContent) return code;

  const entries = Object.entries(textContent)
    .map(([key, content]) => {
      const parts = key.split("-");
      const index = Number(parts[parts.length - 1]);

      return {
        content,
        index: Number.isNaN(index) ? 0 : index,
      };
    })
    .sort((a, b) => a.index - b.index);

  return entries.reduce((acc, { content: { original, value } }) => {
    if (!original) return acc;
    if (value === undefined || value === original) return acc;

    return replaceNextOccurrence(acc, original, escapeForJSXText(value));
  }, code);
};

const escapeForTemplateLiteral = (value: string) =>
  value.replace(/\\/g, "\\").replace(/`/g, "\`").replace(/\$/g, "\$");

type PageArtifact = {
  id: string;
  name: string;
  slug: string;
  code: string;
  componentCount: number;
};

const slugifyName = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);

const buildPageCode = async (
  currentPage: BuilderProjectPage,
  allPages: BuilderProjectPage[]
): Promise<string> => {
  const components = currentPage.components;

  const componentUsages: string[] = [];
  const allImports: string[] = [];
  const componentDefinitions: string[] = [];

  for (const component of components) {
    let animationCode = component.animation.code;

    // If code is not available, fetch it from the API
    if (!animationCode && component.animation.id) {
      try {
        const response = await fetch(`/api/registry/${component.animation.id}`);
        if (response.ok) {
          const data = await response.json();
          // The API returns files array with content property
          animationCode = data.files?.[0]?.content || data.code;
        } else {
          console.warn(
            `Failed to load code for component ${component.animation.id}: ${response.status}`
          );
          continue;
        }
      } catch (error) {
        console.error(
          `Error loading code for component ${component.animation.id}:`,
          error
        );
        continue;
      }
    }

    if (!animationCode) {
      console.warn(`Component ${component.animation.id} has no code available`);
      continue;
    }
    const codeWithOverrides = applyTextOverrides(
      animationCode,
      component.textContent
    );

    const functionMatch = codeWithOverrides.match(
      /export\s+(?:function|const)\s+(\w+)/
    );
    const componentFunctionName = functionMatch
      ? functionMatch[1]
      : component.animation.name.replace(/\s+/g, "");

    componentUsages.push(`        {/* ${component.animation.name} */}
        <section>
          <${componentFunctionName} />
        </section>`);

    const lines = codeWithOverrides.split("\n");

    const componentLines: string[] = [];
    let inImportSection = true;
    let inMultilineImport = false;
    let multilineImportBuffer: string[] = [];

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (/^(['"])use client\1;?\s*(\/\/.*)?$/.test(trimmedLine)) {
        continue;
      }

      if (inImportSection) {
        if (inMultilineImport) {
          multilineImportBuffer.push(line);
          if (trimmedLine.includes("}") && trimmedLine.includes("from")) {
            allImports.push(multilineImportBuffer.join("\n"));
            multilineImportBuffer = [];
            inMultilineImport = false;
          }
          continue;
        }

        if (trimmedLine.startsWith("import ")) {
          if (
            trimmedLine.match(/^import\s*{/) &&
            !trimmedLine.includes("from")
          ) {
            inMultilineImport = true;
            multilineImportBuffer.push(line);
          } else {
            allImports.push(line);
          }
          continue;
        } else if (trimmedLine === "" || trimmedLine.startsWith("//")) {
          continue;
        } else {
          inImportSection = false;
        }
      }

      if (!inImportSection) {
        if (/^(['"])use client\1;?\s*(\/\/.*)?$/.test(trimmedLine)) {
          continue;
        }
        componentLines.push(line);
      }
    }

    const componentCode = componentLines
      .join("\n")
      .replace(/^export\s+(?:function|const)\s+/m, "function ")
      .trim();

    if (componentCode.length > 0) {
      componentDefinitions.push(
        `// ${component.animation.name}\n${componentCode}`
      );
    }
  }

  const mainContent =
    componentUsages.length > 0
      ? componentUsages.join("\n\n")
      : `        <div className="rounded-lg border border-dashed border-border/60 p-12 text-center text-muted-foreground">
          Add blocks from the builder sidebar to populate this page.
        </div>`;

  const importsCode =
    allImports.length > 0
      ? `'use client'\n\n${allImports.join("\n")}`
      : `'use client'`;

  const pageTemplate = `

${componentDefinitions.join(componentDefinitions.length > 0 ? "\n\n" : "")}

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
${mainContent}
      </div>
    </div>
  )
}
`;

  const mergedImports = mergeComponentImports(importsCode);

  return mergedImports + pageTemplate;
};

const buildProjectLayout = (
  allPages: BuilderProjectPage[],
  projectName: string
): string => {
  const brandTitle = allPages[0]?.name ?? projectName;
  const brandLabel = escapeForTemplateLiteral(brandTitle);
  const navLinks = allPages.map((page, index) => ({
    href: index === 0 ? "/" : `/${page.slug}`,
    label: escapeForTemplateLiteral(page.name),
  }));
  const currentYear = new Date().getFullYear();

  const navMarkup =
    navLinks.length > 0
      ? navLinks
          .map(
            (link) => `            <Link
              href="${link.href}"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              ${link.label}
            </Link>`
          )
          .join("\n")
      : `            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              ${brandLabel}
            </Link>`;

  const footerMarkup =
    navLinks.length > 0
      ? navLinks
          .map(
            (link) => `            <Link
              href="${link.href}"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              ${link.label}
            </Link>`
          )
          .join("\n")
      : `            <Link
              href="/"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              ${brandLabel}
            </Link>`;

  return `import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '${brandLabel} - Generated Experience',
  description: 'Generated with the UI Motion Builder',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-base font-semibold tracking-tight">
              ${brandLabel}
            </Link>
            <nav className="flex items-center gap-6">
${navMarkup}
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-border bg-muted/40">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <span>&copy; ${currentYear} ${brandLabel}. All rights reserved.</span>
            <nav className="flex flex-wrap items-center gap-4">
${footerMarkup}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  )
}
`;
};

export function BuilderCodeView({ pages, activePageId }: BuilderCodeViewProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [saved, setSaved] = useState(false);
  const [pendingAction, setPendingAction] = useState<
    "preview" | "deploy" | null
  >(null);
  const [exporting, setExporting] = useState(false);
  const [exported, setExported] = useState(false);
  const [pageArtifacts, setPageArtifacts] = useState<PageArtifact[]>([]);
  const [loadingCode, setLoadingCode] = useState(false);
  const router = useRouter();

  const totalComponentCount = useMemo(
    () => pages.reduce((sum, page) => sum + page.components.length, 0),
    [pages]
  );

  // Load code for all pages asynchronously
  useEffect(() => {
    let cancelled = false;

    async function loadPageCodes() {
      setLoadingCode(true);
      try {
        const artifacts = await Promise.all(
          pages.map(async (page) => ({
            id: page.id,
            name: page.name,
            slug: page.slug,
            code: await buildPageCode(page, pages),
            componentCount: page.components.length,
          }))
        );

        if (!cancelled) {
          setPageArtifacts(artifacts);
        }
      } catch (error) {
        console.error("Failed to load page codes:", error);
        if (!cancelled) {
          setPageArtifacts([]);
        }
      } finally {
        if (!cancelled) {
          setLoadingCode(false);
        }
      }
    }

    loadPageCodes();

    return () => {
      cancelled = true;
    };
  }, [pages]);

  const pageCodeMap = useMemo(() => {
    const map: Record<string, string> = {};
    pageArtifacts.forEach((artifact) => {
      map[artifact.id] = artifact.code;
    });
    return map;
  }, [pageArtifacts]);

  const activeArtifact = useMemo(() => {
    if (pageArtifacts.length === 0) {
      return null;
    }

    if (activePageId) {
      const match = pageArtifacts.find(
        (artifact) => artifact.id === activePageId
      );
      if (match) {
        return match;
      }
    }

    return pageArtifacts[0];
  }, [pageArtifacts, activePageId]);

  const projectSignature = useMemo(
    () =>
      JSON.stringify(
        pages.map((page) => ({
          components: page.components.map((component) => ({
            animationId: component.animationId,
            textContent: component.textContent ?? {},
          })),
        }))
      ),
    [pages]
  );

  const handleCopy = async () => {
    if (!activeArtifact) return;

    await navigator.clipboard.writeText(activeArtifact.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = useCallback(async () => {
    const normalizedName = projectName.trim();
    if (!normalizedName || totalComponentCount === 0) return;

    const existingProjects = JSON.parse(
      localStorage.getItem("builderProjects") || "{}"
    );
    const existingNormalizedEntry = existingProjects[normalizedName];

    let finalProjectName = normalizedName;
    if (!existingNormalizedEntry) {
      const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      const baseSlug = normalizedName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 40);

      const uniqueId =
        typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
          ? crypto.randomUUID().replace(/-/g, "").slice(0, 8)
          : Array.from({ length: 8 }, () =>
              chars.charAt(Math.floor(Math.random() * chars.length))
            ).join("");

      finalProjectName = baseSlug
        ? `${baseSlug}-${uniqueId}`
        : `project-${uniqueId}`;
    }

    const previousProjectData =
      existingProjects[finalProjectName] || existingNormalizedEntry || null;

    if (existingNormalizedEntry && normalizedName !== finalProjectName) {
      delete existingProjects[normalizedName];
    }

    // Ensure all page codes are loaded before saving
    const serializedPages = await Promise.all(
      pages.map(async (page) => ({
        id: page.id,
        name: page.name,
        slug: page.slug,
        components: page.components.map((component) => ({
          id: component.id,
          animationId: component.animationId,
          textContent: component.textContent ?? {},
        })),
        code: pageCodeMap[page.id] || (await buildPageCode(page, pages)),
      }))
    );

    const fallbackPage: BuilderProjectPage = {
      id: "page-fallback",
      name: "Home",
      slug: "home",
      components: [],
    };
    const fallbackCode = await buildPageCode(fallbackPage, [fallbackPage]);

    // Generate a short unique ID (5 characters) for the project if it doesn't exist
    const generateShortId = () => {
      // Use crypto for better randomness if available
      if (
        typeof crypto !== "undefined" &&
        typeof crypto.getRandomValues === "function"
      ) {
        const array = new Uint8Array(4);
        crypto.getRandomValues(array);
        return Array.from(array, (byte) => byte.toString(36).padStart(2, "0"))
          .join("")
          .slice(0, 5);
      }
      // Fallback: timestamp + random
      return (
        Date.now().toString(36) + Math.random().toString(36).slice(2)
      ).slice(-5);
    };

    const projectUuid = previousProjectData?.uuid ?? generateShortId();

    // Use short ID as deployment slug to ensure consistency
    const deploymentSlug = previousProjectData?.deploymentSlug ?? projectUuid;

    const projectData = {
      name: finalProjectName,
      uuid: projectUuid,
      deploymentSlug: deploymentSlug,
      pages: serializedPages,
      entryPageId: serializedPages[0]?.id ?? null,
      components: serializedPages[0]?.components ?? [],
      code: serializedPages[0]?.code ?? fallbackCode,
      savedAt: new Date().toISOString(),
      deploymentId: previousProjectData?.deploymentId ?? deploymentSlug,
      deploymentUrl: previousProjectData?.deploymentUrl,
    };

    existingProjects[finalProjectName] = projectData;
    localStorage.setItem("builderProjects", JSON.stringify(existingProjects));

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    setSaveDialogOpen(false);

    const action = pendingAction;
    setPendingAction(null);

    if (action === "preview") {
      router.push(`/preview/${encodeURIComponent(finalProjectName)}`);
    } else if (action === "deploy") {
      router.push(`/deploy?project=${encodeURIComponent(finalProjectName)}`);
    }

    setProjectName("");
  }, [
    pageCodeMap,
    pages,
    pendingAction,
    projectName,
    router,
    totalComponentCount,
  ]);

  const findMatchingProject = useCallback(() => {
    const existingProjects = JSON.parse(
      localStorage.getItem("builderProjects") || "{}"
    );
    return Object.values(existingProjects).find((project: any) => {
      const savedPages =
        Array.isArray(project.pages) && project.pages.length > 0
          ? project.pages
          : [
              {
                components: project.components ?? [],
              },
            ];

      const signature = JSON.stringify(
        savedPages.map((page: any) => ({
          components: (page.components ?? []).map((component: any) => ({
            animationId: component.animationId,
            textContent: component.textContent ?? {},
          })),
        }))
      );

      return signature === projectSignature;
    }) as { name: string } | undefined;
  }, [projectSignature]);

  const handlePreview = () => {
    if (totalComponentCount === 0) return;

    const existingProject = findMatchingProject();

    if (existingProject) {
      router.push(`/preview/${encodeURIComponent(existingProject.name)}`);
    } else {
      openSaveDialog("preview");
    }
  };

  const handleDeploy = () => {
    if (totalComponentCount === 0) return;

    const existingProject = findMatchingProject();

    if (existingProject) {
      router.push(
        `/deploy?project=${encodeURIComponent(existingProject.name)}`
      );
    } else {
      openSaveDialog("deploy");
    }
  };

  const handleExportProject = useCallback(async () => {
    if (totalComponentCount === 0 || exporting) return;

    setExporting(true);
    setExported(false);

    try {
      const matchingProject = findMatchingProject();
      const fallbackName = pages[0]?.name?.trim() ?? "builder-project";
      const projectNameForExport = matchingProject?.name?.trim().length
        ? matchingProject.name
        : fallbackName.length > 0
          ? fallbackName
          : "builder-project";

      const pageFiles = pageArtifacts.map((artifact, index) => {
        const sanitizedSlug =
          artifact.slug && artifact.slug.length > 0
            ? artifact.slug
            : slugifyName(artifact.name) || `page-${index + 1}`;

        const path =
          index === 0 ? "app/page.tsx" : `app/${sanitizedSlug}/page.tsx`;

        return {
          path,
          code: artifact.code,
        };
      });

      // Generate custom layout with nav/footer
      const layoutCode = buildProjectLayout(pages, projectNameForExport);

      const response = await fetch("/api/export", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectNameForExport,
          pages: pageFiles,
          layout: layoutCode,
        }),
      });

      if (!response.ok) {
        let errorMessage = `Export failed with status ${response.status}`;
        try {
          const errorBody = await response.json();
          if (typeof errorBody?.error === "string") {
            errorMessage = errorBody.error;
          }
        } catch {
          // ignore parsing errors
        }
        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const filenameBase =
        slugifyName(projectNameForExport) || "builder-project";

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${filenameBase}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(downloadUrl);
      }, 1000);

      setExported(true);
      setTimeout(() => setExported(false), 2000);
    } catch (error) {
      console.error("Failed to export project zip", error);
      window.alert("Failed to export project. Please try again.");
    } finally {
      setExporting(false);
    }
  }, [
    exporting,
    findMatchingProject,
    pageArtifacts,
    pages,
    totalComponentCount,
  ]);

  const saveButtonLabel =
    pendingAction === "preview"
      ? "Save & Preview"
      : pendingAction === "deploy"
        ? "Save & Deploy"
        : "Save Project";

  const encodedProjectName = projectName
    ? encodeURIComponent(projectName)
    : "project-name";

  const openSaveDialog = (action: "preview" | "deploy" | null = null) => {
    const existingProject = findMatchingProject();

    if (existingProject) {
      setProjectName(existingProject.name);
    } else if (!projectName.trim()) {
      const timestamp = new Date().toISOString().split("T")[0];
      setProjectName(`project-${timestamp}`);
    }

    setPendingAction(action);
    setSaveDialogOpen(true);
  };

  const [displayedCode, setDisplayedCode] = useState<string>("");

  useEffect(() => {
    async function loadDisplayedCode() {
      if (activeArtifact) {
        setDisplayedCode(activeArtifact.code);
      } else {
        const fallbackPage: BuilderProjectPage = {
          id: "page-preview-fallback",
          name: "Home",
          slug: "home",
          components: [],
        };
        const code = await buildPageCode(fallbackPage, [fallbackPage]);
        setDisplayedCode(code);
      }
    }

    loadDisplayedCode();
  }, [activeArtifact]);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : "60px" }}
        className="border-t border-border bg-card"
      >
        <div className="grid grid-cols-1 space-y-5 md:flex items-center justify-between border-b border-border px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">Generated Code</h3>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
              {pages.length} {pages.length === 1 ? "page" : "pages"}
            </span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
              {totalComponentCount}{" "}
              {totalComponentCount === 1 ? "component" : "components"}
            </span>
            {activeArtifact && (
              <span className="text-xs text-muted-foreground">
                Showing: {activeArtifact.name}
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 md:flex items-center gap-2">
            <button
              onClick={() => openSaveDialog()}
              disabled={totalComponentCount === 0}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saved ? (
                <>
                  <Check className="h-4 w-4" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save
                </>
              )}
            </button>
            <button
              onClick={handlePreview}
              disabled={totalComponentCount === 0}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Eye className="h-4 w-4" />
              Preview
            </button>
            {/* <button
              onClick={handleDeploy}
              disabled={totalComponentCount === 0}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Rocket className="h-4 w-4" />
              Deploy
            </button> */}
            <button
              onClick={handleExportProject}
              disabled={totalComponentCount === 0 || exporting}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {exporting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Exporting...
                </>
              ) : exported ? (
                <>
                  <Check className="h-4 w-4" />
                  Exported!
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Export
                </>
              )}
            </button>
            <button
              onClick={handleCopy}
              disabled={!activeArtifact}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-accent"
            >
              {isExpanded ? (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Expand
                </>
              )}
            </button>
          </div>
        </div>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-h-[500px] overflow-auto"
          >
            {loadingCode || !displayedCode ? (
              <div className="flex items-center justify-center py-12">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Generating code...
                  </p>
                </div>
              </div>
            ) : (
              <CodeBlock code={displayedCode} language="tsx" />
            )}
          </motion.div>
        )}
      </motion.div>

      <Dialog
        open={saveDialogOpen}
        onOpenChange={(open: boolean) => {
          setSaveDialogOpen(open);
          if (!open) {
            setPendingAction(null);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Project</DialogTitle>
            <DialogDescription>
              Enter a name for your project. A unique 5-character ID will be
              added automatically to prevent conflicts.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
            <p className="font-medium">
              ⚠️ Projects are saved in browser localStorage
            </p>
            <p className="mt-1 text-xs opacity-90">
              Your projects will be lost if you clear browser data, use
              incognito mode, or switch browsers. Export your code before
              clearing cookies.
            </p>
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input
                id="project-name"
                placeholder="my-awesome-project"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSave();
                  }
                }}
              />
              <p className="text-xs text-muted-foreground">
                Preview URL: /preview/{projectName || "project-name"}
                <br />
                Deploy URL: /deploy?project={encodedProjectName}
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setSaveDialogOpen(false);
                setPendingAction(null);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!projectName.trim() || totalComponentCount === 0}
            >
              {saveButtonLabel}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
