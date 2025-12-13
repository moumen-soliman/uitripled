"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  Info,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Copy,
  Check,
  FileText,
} from "lucide-react";
import { useParams } from "next/navigation";
import { getComponentById } from "@/lib/components-registry";
import { categoryNames } from "@/types";
import { CodeBlock } from "@/components/code-block";
import { LiveEditor } from "@/components/live-editor";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { notFound } from "next/navigation";

export default function AnimationDetailPageClient({
  code,
  relatedComponents,
  variantCodes,
  baseId,
}: {
  code: string;
  relatedComponents?: {
    id: string;
    name: string;
    description: string;
    component: React.ComponentType<any>;
  }[];
  variantCodes?: Record<string, string>;
  baseId?: string;
}) {
  const params = useParams();
  const component = getComponentById(params.id as string);
  const [selectedVariantId, setSelectedVariantId] = React.useState<string>(
    relatedComponents?.[0]?.id || "default"
  );
  const [refreshKey, setRefreshKey] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("view");
  const [copiedInstall, setCopiedInstall] = React.useState<string | null>(null);
  const [copiedMarkdown, setCopiedMarkdown] = React.useState(false);
  const [variantRefreshKeys, setVariantRefreshKeys] = React.useState<
    Record<string, number>
  >({});

  if (!component) {
    notFound();
  }

  const Component = component.component;
  const requiresShadcn = component.tags.includes("shadcn");
  const codeLineCount = React.useMemo(() => code.split("\n").length, [code]);
  const showLongCodeNote = codeLineCount > 400;

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleVariantRefresh = (variantId: string) => {
    setVariantRefreshKeys((prev) => ({
      ...prev,
      [variantId]: (prev[variantId] || 0) + 1,
    }));
  };

  const handleCopyInstall = async (command: string, type: string) => {
    await navigator.clipboard.writeText(command);
    setCopiedInstall(type);
    setTimeout(() => setCopiedInstall(null), 2000);
  };

  const handleCopyMarkdown = async () => {
    try {
      const response = await fetch(`/md/${component.id}.md`);
      if (response.ok) {
        const markdownContent = await response.text();
        await navigator.clipboard.writeText(markdownContent);
        setCopiedMarkdown(true);
        setTimeout(() => setCopiedMarkdown(false), 2000);
      } else {
        console.error("Failed to fetch markdown file");
      }
    } catch (error) {
      console.error("Error copying markdown:", error);
    }
  };

  // Reset to "view" tab when a new animation is selected
  React.useEffect(() => {
    setActiveTab("view");
    setRefreshKey((prev) => prev + 1);
  }, [component.id]);

  return (
    <main className="flex h-full flex-1 flex-col overflow-hidden">
      <ScrollArea className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded border border-border bg-card px-2 py-1 text-xs font-medium text-muted-foreground">
                {categoryNames[component.category]}
              </span>
              {component.duration && (
                <span className="text-xs text-muted-foreground">
                  {component.duration}
                </span>
              )}
              {component.easing && (
                <span className="text-xs text-muted-foreground">
                  {component.easing}
                </span>
              )}
            </div>
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="mb-2 text-3xl font-semibold sm:text-4xl">
                  {component.name}
                </h1>
                <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                  {component.description}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyMarkdown}
                className="gap-2"
              >
                {copiedMarkdown ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied .md
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4" />
                    Copy .md
                  </>
                )}
              </Button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {component.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 hidden items-center gap-2 text-xs text-muted-foreground/70 md:flex"
            >
              <span>Use</span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <ArrowLeft className="h-3 w-3" />
              </kbd>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <ArrowRight className="h-3 w-3" />
              </kbd>
              <span>to navigate between components</span>
            </motion.div>
          </motion.div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="max-w-full overflow-x-auto">
              <TabsTrigger value="view">Preview</TabsTrigger>
              {component.category !== "native" && (
                <TabsTrigger value="edit">Live Edit</TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="view" className="space-y-6">
              <div className="space-y-8">
                {/* Preview & Usage Section */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">Preview</h2>
                    <div className="flex items-center gap-2">
                      {relatedComponents && relatedComponents.length > 0 && (
                        <Select
                          value={selectedVariantId}
                          onValueChange={setSelectedVariantId}
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select variant" />
                          </SelectTrigger>
                          <SelectContent>
                            {relatedComponents.map((variant) => (
                              <SelectItem key={variant.id} value={variant.id}>
                                {variant.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (
                            relatedComponents &&
                            relatedComponents.length > 0
                          ) {
                            handleVariantRefresh(selectedVariantId);
                          } else {
                            handleRefresh();
                          }
                        }}
                        className="gap-1.5"
                      >
                        <RefreshCw className="h-3 w-3" />
                        Refresh
                      </Button>
                    </div>
                  </div>

                  <div className="relative min-h-[320px] py-6 md:min-h-[50vh] border border-border rounded-lg flex items-center justify-center bg-background/50 overflow-hidden">
                    {relatedComponents && relatedComponents.length > 0 ? (
                      (() => {
                        const selectedVariant =
                          relatedComponents.find(
                            (v) => v.id === selectedVariantId
                          ) || relatedComponents[0];
                        if (!selectedVariant) return null;
                        const ActiveComponent = selectedVariant.component;
                        return (
                          <motion.div
                            key={
                              selectedVariant.id +
                              (variantRefreshKeys[selectedVariant.id] || 0)
                            }
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center w-full h-full p-8"
                          >
                            <ActiveComponent />
                          </motion.div>
                        );
                      })()
                    ) : (
                      <motion.div
                        key={refreshKey}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center w-full h-full p-8"
                      >
                        <Component />
                      </motion.div>
                    )}
                  </div>

                  {relatedComponents && relatedComponents.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium">Usage</h3>
                      <CodeBlock
                        code={
                          relatedComponents &&
                          relatedComponents.length > 0 &&
                          variantCodes
                            ? variantCodes[selectedVariantId] || code
                            : code
                        }
                      />
                    </div>
                  )}
                </div>

                {showLongCodeNote && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-3 flex gap-3 rounded-lg border border-yellow-500/40 bg-yellow-500/10 p-3 text-yellow-700/80 dark:text-yellow-200"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-600 dark:text-yellow-300" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <p className="font-semibold text-yellow-700 dark:text-yellow-200">
                        Heads up - this component is long ({codeLineCount}{" "}
                        lines)
                      </p>
                      <p>
                        We include everything in one file for easy copy-paste
                        (including dummy data), but keep in mind you should
                        split your logic when integrating it (e.g., move data
                        fetching to loaders, hooks, or API utilities).
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Installation Section - Unified */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Installation</h2>
                  </div>

                  <Tabs defaultValue="cli" className="w-full">
                    <TabsList className="w-full justify-start border-b rounded-none bg-transparent p-0 h-auto">
                      <TabsTrigger
                        value="cli"
                        className="rounded-none border-b-2 border-transparent cursor-pointer data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                      >
                        CLI
                      </TabsTrigger>
                      <TabsTrigger
                        value="manual"
                        className="rounded-none border-b-2 border-transparent cursor-pointer data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                      >
                        Manual
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="cli" className="mt-6 md:max-w-2xl">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Tabs defaultValue="npx" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="npx">npx</TabsTrigger>
                            <TabsTrigger value="yarn">yarn</TabsTrigger>
                            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                          </TabsList>
                          <TabsContent value="npx" className="mt-4">
                            <div className="relative rounded-lg border border-border bg-card">
                              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                                <span className="text-xs font-medium text-muted-foreground">
                                  Terminal
                                </span>
                                <button
                                  onClick={() =>
                                    handleCopyInstall(
                                      `npx shadcn@latest add @uitripled/${component.id}`,
                                      "npx"
                                    )
                                  }
                                  className="flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
                                >
                                  <AnimatePresence mode="wait">
                                    {copiedInstall === "npx" ? (
                                      <motion.div
                                        key="check"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="flex items-center gap-1.5"
                                      >
                                        <Check className="h-3 w-3" />
                                        Copied
                                      </motion.div>
                                    ) : (
                                      <motion.div
                                        key="copy"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="flex items-center gap-1.5"
                                      >
                                        <Copy className="h-3 w-3" />
                                        Copy
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </button>
                              </div>
                              <div className="overflow-x-auto bg-card p-4">
                                <code className="text-sm text-foreground">
                                  npx shadcn@latest add @uitripled/
                                  {component.id}
                                </code>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="yarn" className="mt-4">
                            <div className="relative rounded-lg border border-border bg-card">
                              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                                <span className="text-xs font-medium text-muted-foreground">
                                  Terminal
                                </span>
                                <button
                                  onClick={() =>
                                    handleCopyInstall(
                                      `yarn shadcn@latest add @uitripled/${component.id}`,
                                      "yarn"
                                    )
                                  }
                                  className="flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
                                >
                                  <AnimatePresence mode="wait">
                                    {copiedInstall === "yarn" ? (
                                      <motion.div
                                        key="check"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="flex items-center gap-1.5"
                                      >
                                        <Check className="h-3 w-3" />
                                        Copied
                                      </motion.div>
                                    ) : (
                                      <motion.div
                                        key="copy"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="flex items-center gap-1.5"
                                      >
                                        <Copy className="h-3 w-3" />
                                        Copy
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </button>
                              </div>
                              <div className="overflow-x-auto bg-card p-4">
                                <code className="text-sm text-foreground">
                                  yarn shadcn@latest add @uitripled/
                                  {component.id}
                                </code>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="pnpm" className="mt-4">
                            <div className="relative rounded-lg border border-border bg-card">
                              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                                <span className="text-xs font-medium text-muted-foreground">
                                  Terminal
                                </span>
                                <button
                                  onClick={() =>
                                    handleCopyInstall(
                                      `pnpm dlx shadcn@latest add @uitripled/${component.id}`,
                                      "pnpm"
                                    )
                                  }
                                  className="flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
                                >
                                  <AnimatePresence mode="wait">
                                    {copiedInstall === "pnpm" ? (
                                      <motion.div
                                        key="check"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="flex items-center gap-1.5"
                                      >
                                        <Check className="h-3 w-3" />
                                        Copied
                                      </motion.div>
                                    ) : (
                                      <motion.div
                                        key="copy"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="flex items-center gap-1.5"
                                      >
                                        <Copy className="h-3 w-3" />
                                        Copy
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </button>
                              </div>
                              <div className="overflow-x-auto bg-card p-4">
                                <code className="text-sm text-foreground">
                                  pnpm dlx shadcn@latest add @uitripled/
                                  {component.id}
                                </code>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="manual" className="mt-6">
                      <CodeBlock code={code} />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </TabsContent>

            {component.category !== "native" && (
              <TabsContent value="edit">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded-lg border border-border p-4"
                  >
                    <div className="flex gap-3">
                      <Info className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="mb-1.5 text-sm font-semibold">
                          Live Editor - Colors & Theme
                        </h3>
                        <p className="text-xs text-muted-foreground/80">
                          The colors and theme are customizable via Tailwind CSS
                          classes. The default theme uses dark mode colors
                          defined in your{" "}
                          <code className="rounded border border-border px-1.5 py-0.5 text-[11px]">
                            globals.css
                          </code>{" "}
                          file.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <LiveEditor initialCode={code} />
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>
      </ScrollArea>
    </main>
  );
}
