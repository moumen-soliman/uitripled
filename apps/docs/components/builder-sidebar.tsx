"use client";

import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { useUILibrary } from "@/components/ui-library-provider";
import { componentsRegistry } from "@/lib/components-registry";
import { cn } from "@/lib/utils";
import type { BuilderLayoutMode } from "@/types/builder";
import { categoryNames, type ComponentCategory } from "@/types";

type ComponentItem = (typeof componentsRegistry)[number];

type BuilderSidebarProps = {
  className?: string;
  onSelectComponent?: (componentId: string) => void;
  allowDrag?: boolean;
  layoutMode?: BuilderLayoutMode;
};

function DraggableComponent({
  component,
  compact = false,
}: {
  component: ComponentItem;
  compact?: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: component.id,
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "cursor-grab rounded-lg border border-border bg-card transition-colors hover:border-primary hover:bg-accent/5 active:cursor-grabbing",
        compact ? "px-2.5 py-2" : "p-3",
        isDragging && "opacity-50"
      )}
    >
      <div className={compact ? "text-xs font-medium" : "text-sm font-medium"}>
        {component.name}
      </div>
      {!compact && (
        <div className="mt-1 text-xs text-muted-foreground">
          {component.description}
        </div>
      )}
      {!compact && (
        <div className="mt-2 flex flex-wrap gap-1">
          {component.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function SelectableComponent({
  component,
  onSelect,
  compact = false,
}: {
  component: ComponentItem;
  onSelect?: (componentId: string) => void;
  compact?: boolean;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect?.(component.id)}
      className={cn(
        "w-full rounded-lg border border-border bg-card text-left transition-colors hover:border-primary hover:bg-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        compact ? "px-2.5 py-2" : "p-3"
      )}
    >
      <div className={compact ? "text-xs font-medium" : "text-sm font-medium"}>
        {component.name}
      </div>
      {!compact && (
        <div className="mt-1 text-xs text-muted-foreground">
          {component.description}
        </div>
      )}
      {!compact && (
        <div className="mt-2 flex flex-wrap gap-1">
          {component.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.button>
  );
}

const FREE_CANVAS_CATEGORIES: ComponentCategory[] = [
  "blocks",
  "components",
  "cards",
  "forms",
  "data",
  "decorative",
];

export function BuilderSidebar({
  className,
  onSelectComponent,
  allowDrag = true,
  layoutMode = "stack",
}: BuilderSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { selectedLibrary } = useUILibrary();
  const isFree = layoutMode === "free";

  const allowedCategories: ComponentCategory[] = isFree
    ? FREE_CANVAS_CATEGORIES
    : ["blocks"];

  const filteredAnimations = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return componentsRegistry
      .filter(
        (component) =>
          component.display !== false &&
          component.category !== "native" &&
          allowedCategories.includes(component.category)
      )
      .filter((component) => {
        if (!component.availableIn || component.availableIn.length === 0) {
          return true;
        }
        return component.availableIn.includes(selectedLibrary);
      })
      .filter((component) => {
        if (!query) return true;
        return (
          component.name.toLowerCase().includes(query) ||
          component.description.toLowerCase().includes(query) ||
          component.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });
  }, [searchQuery, selectedLibrary, allowedCategories]);

  const groupedByCategory = useMemo(() => {
    if (!isFree) return null;
    const groups = new Map<ComponentCategory, ComponentItem[]>();
    for (const comp of filteredAnimations) {
      const list = groups.get(comp.category) ?? [];
      list.push(comp);
      groups.set(comp.category, list);
    }
    return groups;
  }, [filteredAnimations, isFree]);

  return (
    <div className={cn("flex h-full flex-col bg-card", className)}>
      <div className={cn("border-b border-border", isFree ? "p-2.5" : "p-4")}>
        <h2
          className={cn(
            "font-semibold",
            isFree ? "mb-2 text-sm" : "mb-4 text-lg"
          )}
        >
          {isFree ? "Library" : "Component Library"}
        </h2>
        <div className={cn("relative", isFree ? "mb-2" : "mb-4")}>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className={cn(
              "w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
              isFree ? "py-1.5" : "py-2 pl-10 pr-4"
            )}
          />
        </div>
        {!isFree && (
          <>
            <div className="mb-2 text-xs font-medium text-muted-foreground">
              Available Components
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                {categoryNames.blocks}
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                Only blocks/resumes allowed
              </span>
            </div>
          </>
        )}
        {!allowDrag && (
          <p className="mt-2 text-xs text-muted-foreground">
            Tap to add to canvas.
          </p>
        )}
      </div>

      <div
        className={cn(
          "flex-1 overflow-y-auto",
          isFree ? "p-2" : "p-4"
        )}
      >
        {filteredAnimations.length === 0 ? (
          <div className="py-8 text-center text-sm text-muted-foreground">
            No components found
          </div>
        ) : isFree && groupedByCategory ? (
          <div className="space-y-3">
            {Array.from(groupedByCategory.entries()).map(([cat, items]) => (
              <div key={cat}>
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {categoryNames[cat]} ({items.length})
                </p>
                <div className="space-y-1">
                  {items.map((component) =>
                    allowDrag ? (
                      <DraggableComponent
                        key={component.id}
                        component={component}
                        compact
                      />
                    ) : (
                      <SelectableComponent
                        key={component.id}
                        component={component}
                        onSelect={onSelectComponent}
                        compact
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredAnimations.map((component) =>
              allowDrag ? (
                <DraggableComponent key={component.id} component={component} />
              ) : (
                <SelectableComponent
                  key={component.id}
                  component={component}
                  onSelect={onSelectComponent}
                />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
