"use client";

import { useUILibrary } from "@/components/ui-library-provider";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { componentsRegistry } from "@/lib/components-registry";
import { Component, ComponentCategory, categoryNames } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type AnimationsSidebarProps = {
  selectedComponent: Component | null;
  onSelectComponent?: (component: Component) => void;
  useLinks?: boolean;
  target?: string | null;
};

export function AnimationsSidebar({
  selectedComponent,
  onSelectComponent,
  useLinks = false,
  target,
}: AnimationsSidebarProps) {
  const { selectedLibrary } = useUILibrary();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<
    Set<ComponentCategory | "all">
  >(new Set(["all"]));

  // Effect to control expanded categories based on target parameter or selected component
  useEffect(() => {
    if (target) {
      const normalizedTarget = target.toLowerCase();

      // Check if target is a valid category
      const validCategories: Array<string> = [
        "blocks",
        "microinteractions",
        "components",
        "page",
        "data",
        "decorative",
        "resumes",
        "forms",
        "cards",
        "native",
      ];

      if (validCategories.includes(normalizedTarget)) {
        // Close all categories and open only the target
        setExpandedCategories(
          new Set([normalizedTarget as ComponentCategory | "all"])
        );
      } else {
        // Target not found, open "all" by default
        setExpandedCategories(new Set(["all"]));
      }
    } else if (selectedComponent) {
      // If a component is selected, ensure its category is open
      // Keep other manually opened categories, but close "all" if it was the only one open
      setExpandedCategories((prev) => {
        const next = new Set(prev);
        // Add the component's category to the expanded set
        next.add(selectedComponent.category);
        // If only "all" was open, replace it with the component's category
        if (prev.size === 1 && prev.has("all")) {
          return new Set([selectedComponent.category]);
        }
        // Otherwise, keep existing categories and add the component's category
        return next;
      });
    } else {
      // No target or selected component, open "all" by default
      setExpandedCategories(new Set(["all"]));
    }
  }, [target, selectedComponent]);

  const categories: Array<ComponentCategory | "all"> = [
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

  const filteredAnimations = useMemo(() => {
    // First filter by display property (only show animations where display !== false)
    let filtered = componentsRegistry.filter((anim) => anim.display !== false);

    // Filter by selected UI library
    // If availableIn is not specified, component defaults to shadcnui only
    // Carbon = pure React, accessible from both shadcnui and baseui
    filtered = filtered.filter((anim) => {
      const availableLibraries = anim.availableIn || ["shadcnui"];

      // If component has "carbon" (pure React), it's compatible with shadcnui and baseui
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

  const animationsByCategory = useMemo(() => {
    const grouped: Record<ComponentCategory | "all", Component[]> = {
      all: filteredAnimations,
      blocks: [],
      microinteractions: [],
      components: [],
      page: [],
      data: [],
      decorative: [],
      resumes: [],
      forms: [],
      cards: [],
      native: [],
    };

    filteredAnimations.forEach((anim) => {
      grouped[anim.category].push(anim);
    });

    return grouped;
  }, [filteredAnimations]);

  const toggleCategory = (category: ComponentCategory | "all") => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  return (
    <div className="flex h-full flex-col bg-background overflow-hidden">
      {/* Search */}
      <div className="border-b border-border p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
          <Input
            type="text"
            placeholder="Search components & blocks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
            autoComplete="off"
            autoFocus={false}
            spellCheck={false}
          />
        </div>
      </div>

      {/* Categories List */}
      <ScrollArea className="flex-1">
        <div className="p-2 pb-8">
          {categories.map((category) => {
            const animations = animationsByCategory[category];
            const isExpanded = expandedCategories.has(category);
            const hasAnimations = animations.length > 0;

            return (
              <div key={category} className="mb-1">
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                  <span className="flex-1 text-left">
                    {category === "all" ? "All" : categoryNames[category]}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    {animations.length}
                  </span>
                </button>

                <AnimatePresence>
                  {isExpanded && hasAnimations && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-0.5 border-l border-border pl-2">
                        {animations.map((component) => {
                          const isSelected =
                            selectedComponent?.id === component.id;
                          const isFree = component.isFree !== false;
                          const hasAccess = true; // All features accessible
                          const showProBadge = false; // No pro badge shown
                          const itemClass = `flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-xs transition-colors ${
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`;

                          if (useLinks) {
                            return (
                              <Link
                                key={component.id}
                                href={`/components/${component.id}`}
                                className={itemClass}
                              >
                                <span className="flex-1 truncate">
                                  {component.name}
                                </span>
                                {showProBadge && (
                                  <span
                                    className={`ml-2 whitespace-nowrap rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                                      isSelected
                                        ? "border-primary-foreground/80 bg-primary-foreground/10 text-primary-foreground"
                                        : "backdrop-blur-sm border border-border bg-black/10 rounded-sm"
                                    }`}
                                  >
                                    PRO
                                  </span>
                                )}
                              </Link>
                            );
                          }

                          return (
                            <button
                              key={component.id}
                              onClick={() => onSelectComponent?.(component)}
                              className={itemClass}
                            >
                              <span className="flex-1 truncate">
                                {component.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
