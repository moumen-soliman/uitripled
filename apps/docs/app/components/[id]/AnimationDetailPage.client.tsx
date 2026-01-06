"use client";

import { CodeBlock } from "@/components/code-block";
import { LiveEditor } from "@/components/live-editor";
import { useUILibrary } from "@/components/ui-library-provider";
import { getComponentById } from "@/lib/components-registry";
import { categoryNames, uiLibraryLabels, type UILibrary } from "@/types";
import { Button } from "@uitripled/react-shadcn/ui/button";
import { ScrollArea } from "@uitripled/react-shadcn/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@uitripled/react-shadcn/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@uitripled/react-shadcn/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  FileText,
  Info,
  RefreshCw,
} from "lucide-react";
import { notFound, useParams } from "next/navigation";
import React from "react";

export default function AnimationDetailPageClient({
  code,
  relatedComponents,
  variantCodes,
  baseId,
  baseuiCode,
  shadcnuiCode,
  carbonCode,
  baseuiDemoCode,
  shadcnuiDemoCode,
  carbonDemoCode,
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
  baseuiCode?: string;
  shadcnuiCode?: string;
  carbonCode?: string;
  baseuiDemoCode?: string;
  shadcnuiDemoCode?: string;
  carbonDemoCode?: string;
}) {
  const params = useParams();
  const component = getComponentById(params.id as string);
  const { selectedLibrary, setSelectedLibrary } = useUILibrary();
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
  const [isLoadingComponent, setIsLoadingComponent] = React.useState(false);

  if (!component) {
    notFound();
  }

  const Component = component.component;
  const requiresShadcn = component.tags.includes("shadcn");
  const codeLineCount = React.useMemo(() => code.split("\n").length, [code]);
  const showLongCodeNote = codeLineCount > 400;

  // Check if component is available in selected library
  const isAvailableInSelectedLibrary = React.useMemo(() => {
    // If component has availableIn defined, check it regardless of category
    if (component.availableIn && component.availableIn.length > 0) {
      // Carbon = pure React, compatible with shadcnui and baseui
      if (component.availableIn.includes("carbon")) {
        return selectedLibrary === "shadcnui" || selectedLibrary === "baseui";
      }
      return component.availableIn.includes(selectedLibrary);
    }
    // Default to shadcnui only if availableIn not specified
    return selectedLibrary === "shadcnui";
  }, [component, selectedLibrary]);

  // Get the list of libraries this component is available in
  const availableLibraries = React.useMemo((): UILibrary[] => {
    return component.availableIn || ["shadcnui"];
  }, [component]);

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

  // Dynamically load component and variant components based on selected library for native components
  const [dynamicComponent, setDynamicComponent] =
    React.useState<React.ComponentType<any> | null>(null);
  const [dynamicVariants, setDynamicVariants] = React.useState<
    Record<string, React.ComponentType<any>>
  >({});

  // Reset dynamic component when library changes to avoid stale state
  React.useEffect(() => {
    setDynamicComponent(null);
    setDynamicVariants({});
    setRefreshKey((prev) => prev + 1);
  }, [selectedLibrary]);

  React.useEffect(() => {
    // Determine if we need dynamic loading
    const needsDynamicLoad =
      component.category === "native" ||
      (component.availableIn &&
        component.availableIn.length > 1 &&
        selectedLibrary !== "shadcnui");

    if (!needsDynamicLoad) {
      setDynamicComponent(null);
      setDynamicVariants({});
      setIsLoadingComponent(false);
      return;
    }

    setIsLoadingComponent(true);

    if (component.category === "native") {
      const loadComponent = async () => {
        try {
          if (selectedLibrary === "baseui") {
            try {
              const baseuiModule = await import(
                `@uitripled/react-baseui/components/native/${component.id}-baseui`
              );
              // Find the exported component (usually the first export or matches component name)
              const exports = Object.keys(baseuiModule);
              const componentName =
                exports.find(
                  (name) =>
                    name
                      .toLowerCase()
                      .includes(component.id.replace(/-/g, "")) ||
                    name ===
                      component.id
                        .split("-")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join("")
                ) || exports[0];
              if (baseuiModule[componentName]) {
                // Try to load demo component first (e.g., NativeDialogDemo)
                try {
                  const demoModule = await import(
                    `@uitripled/react-baseui/components/native/demo/${component.id}-demo`
                  );
                  // Get component name (e.g., "NativeDialog" from "native-dialog")
                  const componentPrefix = component.id
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join("");
                  // componentPrefix is already like "NativeDialog", don't add Native again
                  const demoComponentName = `${componentPrefix}Demo`;

                  // Try to find the main demo component (e.g., NativeDialogDemo)
                  const demoKeys = Object.keys(demoModule);
                  const mainDemoComponent =
                    demoModule[demoComponentName] ||
                    demoModule[
                      demoKeys.find(
                        (name) =>
                          name.toLowerCase() ===
                            demoComponentName.toLowerCase() ||
                          name
                            .toLowerCase()
                            .includes(`${componentPrefix.toLowerCase()}demo`)
                      ) || ""
                    ];

                  if (mainDemoComponent) {
                    setDynamicComponent(() => mainDemoComponent);
                  } else {
                    setDynamicComponent(() => baseuiModule[componentName]);
                  }

                  // Load variant demo components from baseui
                  if (relatedComponents && relatedComponents.length > 0) {
                    const variantMap: Record<
                      string,
                      React.ComponentType<any>
                    > = {};

                    relatedComponents.forEach((variant) => {
                      // For 'default' variant, use the main demo component
                      if (variant.id === "default" && mainDemoComponent) {
                        variantMap[variant.id] = mainDemoComponent;
                        return;
                      }
                      // Try to find the demo component (e.g., NativeButtonDefault)
                      // Pattern: Native{ComponentName}{VariantName}
                      const variantName = variant.name
                        .split(" ")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join("");
                      const expectedName = `${componentPrefix}${variantName}`;

                      const demoName = Object.keys(demoModule).find(
                        (name) =>
                          name === expectedName ||
                          name.toLowerCase() ===
                            `${componentPrefix.toLowerCase()}${variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}` ||
                          name
                            .toLowerCase()
                            .includes(variant.id.toLowerCase()) ||
                          name
                            .toLowerCase()
                            .includes(
                              variant.name.toLowerCase().replace(/\s+/g, "")
                            )
                      );
                      if (demoName && demoModule[demoName]) {
                        variantMap[variant.id] = demoModule[demoName];
                      }
                    });
                    setDynamicVariants(variantMap);
                  }
                } catch (e) {
                  // Demo file doesn't exist, use the component directly
                  setDynamicComponent(() => baseuiModule[componentName]);
                  setDynamicVariants({});
                }
                return;
              }
            } catch (e) {
              // Baseui version doesn't exist, fall through to shadcnui
            }
          } else if (selectedLibrary === "carbon") {
            try {
              const carbonModule = await import(
                `@uitripled/react-carbon/components/native/${component.id}-carbon`
              );
              const exports = Object.keys(carbonModule);
              const componentName =
                exports.find(
                  (name) =>
                    name
                      .toLowerCase()
                      .includes(component.id.replace(/-/g, "")) ||
                    name ===
                      component.id
                        .split("-")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join("")
                ) || exports[0];
              if (carbonModule[componentName]) {
                try {
                  const demoModule = await import(
                    `@uitripled/react-carbon/components/native/demo/${component.id}-demo`
                  );
                  const componentPrefix = component.id
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join("");
                  // componentPrefix is already like "NativeDialog", don't add Native again
                  const demoComponentName = `${componentPrefix}Demo`;

                  const demoKeys = Object.keys(demoModule);
                  const mainDemoComponent =
                    demoModule[demoComponentName] ||
                    demoModule[
                      demoKeys.find(
                        (name) =>
                          name.toLowerCase() ===
                            demoComponentName.toLowerCase() ||
                          name
                            .toLowerCase()
                            .includes(`${componentPrefix.toLowerCase()}demo`)
                      ) || ""
                    ];

                  if (mainDemoComponent) {
                    setDynamicComponent(() => mainDemoComponent);
                  } else {
                    setDynamicComponent(() => carbonModule[componentName]);
                  }

                  if (relatedComponents && relatedComponents.length > 0) {
                    const variantMap: Record<
                      string,
                      React.ComponentType<any>
                    > = {};

                    relatedComponents.forEach((variant) => {
                      // For 'default' variant, use the main demo component
                      if (variant.id === "default" && mainDemoComponent) {
                        variantMap[variant.id] = mainDemoComponent;
                        return;
                      }
                      const variantName = variant.name
                        .split(" ")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join("");
                      const expectedName = `${componentPrefix}${variantName}`;

                      const demoName = Object.keys(demoModule).find(
                        (name) =>
                          name === expectedName ||
                          name.toLowerCase() ===
                            `${componentPrefix.toLowerCase()}${variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}` ||
                          name
                            .toLowerCase()
                            .includes(variant.id.toLowerCase()) ||
                          name
                            .toLowerCase()
                            .includes(
                              variant.name.toLowerCase().replace(/\s+/g, "")
                            )
                      );
                      if (demoName && demoModule[demoName]) {
                        variantMap[variant.id] = demoModule[demoName];
                      }
                    });
                    setDynamicVariants(variantMap);
                  }
                } catch (e) {
                  setDynamicComponent(() => carbonModule[componentName]);
                  setDynamicVariants({});
                }
                return;
              }
            } catch (e) {
              // Carbon version doesn't exist, fall through to shadcnui
            }
          }
          // Load shadcnui version (default or fallback)
          const shadcnuiModule = await import(
            `@uitripled/react-shadcn/components/native/${component.id}-shadcnui`
          );
          const exports = Object.keys(shadcnuiModule);
          const componentName =
            exports.find(
              (name) =>
                name.toLowerCase().includes(component.id.replace(/-/g, "")) ||
                name ===
                  component.id
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join("")
            ) || exports[0];
          if (shadcnuiModule[componentName]) {
            // Try to load demo component first (e.g., NativeDialogDemo)
            try {
              const demoModule = await import(
                `@uitripled/react-shadcn/components/native/demo/${component.id}-demo`
              );
              // Get component name prefix (e.g., "NativeButton" from "native-button")
              const componentPrefix = component.id
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join("");
              // componentPrefix is already like "NativeDialog", don't add Native again
              const demoComponentName = `${componentPrefix}Demo`;

              // Try to find the main demo component (e.g., NativeDialogDemo)
              const mainDemoComponent =
                demoModule[demoComponentName] ||
                Object.keys(demoModule).find(
                  (name) =>
                    name.toLowerCase() === demoComponentName.toLowerCase() ||
                    name
                      .toLowerCase()
                      .includes(`${componentPrefix.toLowerCase()}demo`)
                )
                  ? demoModule[
                      Object.keys(demoModule).find(
                        (name) =>
                          name.toLowerCase() ===
                            demoComponentName.toLowerCase() ||
                          name
                            .toLowerCase()
                            .includes(`${componentPrefix.toLowerCase()}demo`)
                      )!
                    ]
                  : null;

              if (mainDemoComponent) {
                setDynamicComponent(() => mainDemoComponent);
              } else {
                setDynamicComponent(() => shadcnuiModule[componentName]);
              }

              // Load variant demo components from shadcnui
              if (relatedComponents && relatedComponents.length > 0) {
                const variantMap: Record<string, React.ComponentType<any>> = {};

                relatedComponents.forEach((variant) => {
                  // For 'default' variant, use the main demo component
                  if (variant.id === "default" && mainDemoComponent) {
                    variantMap[variant.id] = mainDemoComponent;
                    return;
                  }
                  // Try to find the demo component (e.g., NativeButtonDefault)
                  // Pattern: Native{ComponentName}{VariantName}
                  const variantName = variant.name
                    .split(" ")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join("");
                  const expectedName = `${componentPrefix}${variantName}`;

                  const demoName = Object.keys(demoModule).find(
                    (name) =>
                      name === expectedName ||
                      name.toLowerCase() ===
                        `${componentPrefix.toLowerCase()}${variant.id.charAt(0).toUpperCase() + variant.id.slice(1)}` ||
                      name.toLowerCase().includes(variant.id.toLowerCase()) ||
                      name
                        .toLowerCase()
                        .includes(
                          variant.name.toLowerCase().replace(/\s+/g, "")
                        )
                  );
                  if (demoName && demoModule[demoName]) {
                    variantMap[variant.id] = demoModule[demoName];
                  }
                });
                setDynamicVariants(variantMap);
              }
            } catch (e) {
              // Demo file doesn't exist, use the component directly
              setDynamicComponent(() => shadcnuiModule[componentName]);
              setDynamicVariants({});
            }
          }
        } catch (error) {
          console.error("Failed to load component:", error);
          setDynamicComponent(null);
          setDynamicVariants({});
        } finally {
          setIsLoadingComponent(false);
        }
      };
      loadComponent();
    } else if (component.availableIn && component.availableIn.length > 1) {
      // Dynamic loading for non-native components (sections) if they support multiple libraries
      const loadSectionComponent = async () => {
        try {
          if (selectedLibrary === "baseui") {
            const baseuiModule = await import(
              `@uitripled/react-baseui/components/sections/${component.id}-baseui`
            );
            const exports = Object.keys(baseuiModule);
            // Prefer export that matches component name with -baseui suffix removed or CamelCase
            // But usually it's just the main export
            const componentName =
              exports.find(
                (key) =>
                  key.toLowerCase().includes(component.id.replace(/-/g, "")) ||
                  key.toLowerCase().includes("baseui")
              ) || exports[0];

            if (baseuiModule[componentName]) {
              setDynamicComponent(() => baseuiModule[componentName]);
            }
          } else {
            // For shadcnui (default), we rely on the statically imported component
            // passed via props, so set dynamic to null to fallback
            setDynamicComponent(null);
          }
        } catch (error) {
          console.error("Failed to load section component variant", error);
          setDynamicComponent(null);
        } finally {
          setIsLoadingComponent(false);
        }
      };
      loadSectionComponent();
    }
  }, [
    selectedLibrary,
    component.category,
    component.id,
    component.availableIn,
    relatedComponents,
  ]);

  // Determine the active component based on selected library
  // For non-native components with baseuiComponent defined, use it directly
  const ActiveComponent = React.useMemo(() => {
    if (dynamicComponent) {
      return dynamicComponent;
    }
    // If selectedLibrary is baseui and component has baseuiComponent, use it
    if (selectedLibrary === "baseui" && component.baseuiComponent) {
      return component.baseuiComponent;
    }
    return Component;
  }, [dynamicComponent, selectedLibrary, component.baseuiComponent, Component]);
  // Use the appropriate code based on selected library
  const displayCode = React.useMemo(() => {
    if (
      component.category === "native" ||
      (component.availableIn && component.availableIn.length > 1)
    ) {
      if (selectedLibrary === "baseui" && baseuiCode) {
        return baseuiCode;
      } else if (selectedLibrary === "shadcnui" && shadcnuiCode) {
        return shadcnuiCode;
      } else if (selectedLibrary === "carbon" && carbonCode) {
        return carbonCode;
      }
    }
    return code;
  }, [
    selectedLibrary,
    component.category,
    component.id,
    code,
    baseuiCode,
    shadcnuiCode,
    carbonCode,
  ]);

  const installId = React.useMemo(() => {
    if (
      component.category === "native" ||
      (component.availableIn && component.availableIn.length > 1)
    ) {
      return `${component.id}-${selectedLibrary}`;
    }
    return component.id;
  }, [component.id, component.category, selectedLibrary]);

  return (
    <main className="flex h-full flex-1 flex-col overflow-hidden">
      <ScrollArea className="flex-1 h-full">
        <div className="flex flex-1 items-start justify-center gap-10 px-6 py-6 sm:px-10 md:py-10">
          <div className="w-full flex-1">
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
              {component.availableIn?.includes("carbon") && (
                <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Pure React
                </span>
              )}
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
              {component.category !== "native" &&
                selectedLibrary !== "baseui" && (
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
                      {/* {component.category === "native" && (
                        <Select
                          value={selectedLibrary}
                          onValueChange={(value) =>
                            setSelectedLibrary(value as UILibrary)
                          }
                        >
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Select library" />
                          </SelectTrigger>
                          <SelectContent>
                            {(Object.keys(uiLibraryLabels) as UILibrary[]).map((lib) => (
                              <SelectItem key={lib} value={lib}>
                                {uiLibraryLabels[lib]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )} */}
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

                  <div className="relative min-h-[320px] py-6 md:min-h-[500px] border border-border rounded-lg flex items-center justify-center bg-background/50">
                    {isLoadingComponent ? (
                      <div className="flex flex-col items-center justify-center gap-4 p-8">
                        <p className="text-sm text-muted-foreground">
                          Loading component...
                        </p>
                      </div>
                    ) : !isAvailableInSelectedLibrary ? (
                      <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                        <div className="rounded-full bg-muted p-4">
                          <AlertTriangle className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">
                            Not Available in {uiLibraryLabels[selectedLibrary]}
                          </h3>
                          <p className="text-sm text-muted-foreground max-w-md">
                            This component is not implemented in{" "}
                            {uiLibraryLabels[selectedLibrary]}.
                            {availableLibraries.length > 0 && (
                              <>
                                {" "}
                                Available in:{" "}
                                {availableLibraries
                                  .map((lib) => uiLibraryLabels[lib])
                                  .join(", ")}
                                .
                              </>
                            )}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center">
                          {availableLibraries.map((lib) => (
                            <Button
                              key={lib}
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedLibrary(lib)}
                            >
                              Switch to {uiLibraryLabels[lib]}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : relatedComponents && relatedComponents.length > 0 ? (
                      (() => {
                        const selectedVariant =
                          relatedComponents.find(
                            (v) => v.id === selectedVariantId
                          ) || relatedComponents[0];
                        if (!selectedVariant) return null;
                        // Use dynamically loaded variant component if available, otherwise use original
                        const ActiveComponent =
                          dynamicVariants[selectedVariant.id] ||
                          selectedVariant.component;
                        return (
                          <motion.div
                            key={
                              selectedVariant.id +
                              selectedLibrary +
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
                        key={`${refreshKey}-${selectedLibrary}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center w-full h-full p-8"
                      >
                        <ActiveComponent />
                      </motion.div>
                    )}
                  </div>

                  {isAvailableInSelectedLibrary &&
                    relatedComponents &&
                    relatedComponents.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-medium">Usage</h3>
                        <CodeBlock
                          code={(() => {
                            // If we have a library-specific demo code and we are on the default variant (or just general usage), use it
                            // For native components with "default" variant, this overrides the registry code
                            if (
                              component.category === "native" &&
                              selectedVariantId === "default"
                            ) {
                              if (
                                selectedLibrary === "baseui" &&
                                baseuiDemoCode
                              )
                                return baseuiDemoCode;
                              if (
                                selectedLibrary === "shadcnui" &&
                                shadcnuiDemoCode
                              )
                                return shadcnuiDemoCode;
                              if (
                                selectedLibrary === "carbon" &&
                                carbonDemoCode
                              )
                                return carbonDemoCode;
                            }

                            // Fallback to existing logic
                            return relatedComponents &&
                              relatedComponents.length > 0 &&
                              variantCodes
                              ? variantCodes[selectedVariantId] || displayCode
                              : displayCode;
                          })()}
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
                {isAvailableInSelectedLibrary && (
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
                          <Tabs defaultValue="shadcn" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="shadcn" className="gap-2">
                                <img
                                  src="/logos/shadcnui_dark.svg"
                                  alt="shadcn"
                                  className="h-4 w-4 dark:hidden"
                                />
                                <img
                                  src="/logos/shadcnui_white.svg"
                                  alt="shadcn"
                                  className="hidden h-4 w-4 dark:block"
                                />
                                shadcn
                              </TabsTrigger>
                              <TabsTrigger value="uitripled" className="gap-2">
                                <img
                                  src="/logos/logo-black.svg"
                                  alt="uitripled"
                                  className="h-6 w-6 dark:hidden"
                                />
                                <img
                                  src="/logos/logo.svg"
                                  alt="uitripled"
                                  className="hidden h-6 w-6 dark:block"
                                />
                                uitripled
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent value="uitripled" className="mt-4">
                              <div className="relative rounded-lg border border-border bg-card">
                                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                                  <span className="text-xs font-medium text-muted-foreground">
                                    Terminal
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopyInstall(
                                        `npx uitripled add ${installId}`,
                                        "uitripled"
                                      )
                                    }
                                    className="flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
                                  >
                                    <AnimatePresence mode="wait">
                                      {copiedInstall === "uitripled" ? (
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
                                    npx uitripled add {installId}
                                  </code>
                                </div>
                              </div>
                            </TabsContent>
                            <TabsContent value="shadcn" className="mt-4">
                              <div className="relative rounded-lg border border-border bg-card">
                                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                                  <span className="text-xs font-medium text-muted-foreground">
                                    Terminal
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopyInstall(
                                        `npx shadcn@latest add @uitripled/${installId}`,
                                        "shadcn"
                                      )
                                    }
                                    className="flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
                                  >
                                    <AnimatePresence mode="wait">
                                      {copiedInstall === "shadcn" ? (
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
                                    npx shadcn@latest add @uitripled/{installId}
                                  </code>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </motion.div>
                      </TabsContent>

                      <TabsContent value="manual" className="mt-6">
                        <CodeBlock code={displayCode} />
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
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
        </div>
      </ScrollArea>
    </main>
  );
}
