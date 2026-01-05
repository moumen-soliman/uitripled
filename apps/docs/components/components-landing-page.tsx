"use client";

import { useUILibrary } from "@/components/ui-library-provider";
import { componentsRegistry } from "@/lib/components-registry";
import { Component, ComponentCategory, categoryNames } from "@/types";
import { Input } from "@uitripled/react-shadcn/ui/input";
import { ScrollArea } from "@uitripled/react-shadcn/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const ComponentCard = ({ component }: { component: Component }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={`/components/${component.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/50 p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-md"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {component.isFree === false && (
              <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                PRO
              </span>
            )}
          </div>
          <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-muted-foreground" />
        </div>

        <div className="space-y-1.5">
          <h3 className="font-semibold text-foreground">
            {component.name.replaceAll("Native", "")}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {component.description}
          </p>
        </div>

        {component.tags && component.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
            {component.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default function ComponentsLandingPage() {
  const { selectedLibrary } = useUILibrary();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = useMemo(() => {
    let filtered = componentsRegistry.filter((anim) => anim.display !== false);

    // Filter by selected UI library
    filtered = filtered.filter((anim) => {
      const availableLibraries = anim.availableIn || ["shadcnui"];
      if (availableLibraries.includes("carbon")) {
        return (
          selectedLibrary === "shadcnui" ||
          selectedLibrary === "baseui" ||
          selectedLibrary === "carbon"
        );
      }
      return availableLibraries.includes(selectedLibrary);
    });

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (anim) =>
          anim.name.toLowerCase().includes(lowerQuery) ||
          anim.description.toLowerCase().includes(lowerQuery) ||
          anim.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    }

    return filtered;
  }, [searchQuery, selectedLibrary]);

  const componentsByCategory = useMemo(() => {
    const grouped: Partial<Record<ComponentCategory | "all", Component[]>> = {};

    filteredComponents.forEach((component) => {
      if (!grouped[component.category]) {
        grouped[component.category] = [];
      }
      grouped[component.category]?.push(component);
    });

    return grouped;
  }, [filteredComponents]);

  const categories = Object.keys(componentsByCategory) as ComponentCategory[];

  // Define category order
  const categoryOrder: ComponentCategory[] = [
    "native",
    "blocks",
    "cards",
    "components",
    "page",
    "data",
    "resumes",
    "decorative",
    "forms",
    "microinteractions",
  ];

  // Sort categories based on predefined order
  categories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Search Header */}
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Components</h1>
            <p className="text-sm text-muted-foreground">
              Explore our collection of components and interactions.
            </p>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="mx-auto w-full max-w-7xl p-6">
          <AnimatePresence mode="wait">
            {categories.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                {categories.map((category) => (
                  <section key={category} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold capitalize tracking-tight">
                        {categoryNames[category]}
                      </h2>
                      <div className="h-px flex-1 bg-border/50" />
                      <span className="text-xs text-muted-foreground">
                        {componentsByCategory[category]?.length} items
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {componentsByCategory[category]?.map((component) => (
                        <ComponentCard
                          key={component.id}
                          component={component}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex h-[50vh] flex-col items-center justify-center text-center text-muted-foreground"
              >
                <Search className="mb-4 h-12 w-12 opacity-20" />
                <p className="text-lg font-medium">No components found</p>
                <p className="text-sm">
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </div>
  );
}
