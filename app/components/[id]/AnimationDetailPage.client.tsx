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
import { ScrollArea } from "@/components/ui/scroll-area";
import { notFound } from "next/navigation";

export default function AnimationDetailPageClient({ code }: { code: string }) {
  const params = useParams();
  const component = getComponentById(params.id as string);
  const [refreshKey, setRefreshKey] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("view");
  const [copiedInstall, setCopiedInstall] = React.useState<string | null>(null);
  const [copiedMarkdown, setCopiedMarkdown] = React.useState(false);

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
              <TabsTrigger value="edit">Live Edit</TabsTrigger>
            </TabsList>

            <TabsContent value="view" className="space-y-6">
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">Preview</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRefresh}
                    className="gap-1.5"
                  >
                    <RefreshCw className="h-3 w-3" />
                    Refresh
                  </Button>
                </div>
                <div className="relative min-h-[320px] py-6 md:min-h-[550px]">
                  <motion.div
                    key={refreshKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="h-full w-full min-h-[320px] md:min-h-[400px] flex items-center justify-center relative"
                  >
                    <Component />
                  </motion.div>
                </div>

                {/* {requiresShadcn && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 rounded-lg border border-blue-500/50 bg-blue-500/10 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Info className="h-5 w-5 flex-shrink-0 text-blue-500 sm:mt-0.5" />
                      <div className="flex-1 space-y-3">
                        <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          This component requires shadcn/ui
                        </h3>
                        <p className="text-xs text-blue-700/80 dark:text-blue-300/80">
                          This component uses shadcn/ui components. Make sure
                          you have shadcn/ui set up in your project.
                        </p>
                        <ol className="space-y-1.5 text-xs text-blue-700/90 dark:text-blue-300/90 sm:ml-4 sm:list-decimal">
                          <li>
                            Install shadcn/ui:{" "}
                            <code className="rounded border border-blue-500/30 bg-blue-500/20 px-1.5 py-0.5 text-[11px]">
                              npx shadcn-ui@latest init
                            </code>
                          </li>
                          <li>
                            Install required components based on the imports in
                            the code (e.g.,{" "}
                            <code className="rounded border border-blue-500/30 bg-blue-500/20 px-1.5 py-0.5 text-[11px]">
                              npx shadcn-ui@latest add button
                            </code>
                            )
                          </li>
                          <li>
                            Ensure your{" "}
                            <code className="rounded border border-blue-500/30 bg-blue-500/20 px-1.5 py-0.5 text-[11px]">
                              tailwind.config.ts
                            </code>{" "}
                            and{" "}
                            <code className="rounded border border-blue-500/30 bg-blue-500/20 px-1.5 py-0.5 text-[11px]">
                              globals.css
                            </code>{" "}
                            are configured as per shadcn/ui documentation
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )} */}
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
                      Heads up - this component is long ({codeLineCount} lines)
                    </p>
                    <p>
                      We include everything in one file for easy copy-paste
                      (including dummy data), but keep in mind you should split
                      your logic when integrating it (e.g., move data fetching
                      to loaders, hooks, or API utilities).
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="mt-8">
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
                                npx shadcn@latest add @uitripled/{component.id}
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
                                    `yarn add @uitripled/${component.id}`,
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
                                yarn add @uitripled/{component.id}
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
                                    `pnpm add @uitripled/${component.id}`,
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
                                pnpm add @uitripled/{component.id}
                              </code>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="manual" className="mt-6">
                    <>
                      <CodeBlock code={code} />
                    </>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

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
                        classes. The default theme uses dark mode colors defined
                        in your{" "}
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
          </Tabs>
        </div>
      </ScrollArea>
    </main>
  );
}
