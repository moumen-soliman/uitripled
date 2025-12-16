"use client";

import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { componentsRegistry } from "@/lib/components-registry";
import { cn } from "@/lib/utils";
import { categoryNames } from "@/types";

type ComponentItem = (typeof componentsRegistry)[number];

type BuilderSidebarProps = {
  className?: string;
  onSelectComponent?: (componentId: string) => void;
  allowDrag?: boolean;
};

function DraggableComponent({ component }: { component: ComponentItem }) {
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
        "cursor-grab rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary hover:bg-accent/5 active:cursor-grabbing",
        isDragging && "opacity-50"
      )}
    >
      <div className="text-sm font-medium">{component.name}</div>
      <div className="mt-1 text-xs text-muted-foreground">
        {component.description}
      </div>
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
    </motion.div>
  );
}

function SelectableComponent({
  component,
  onSelect,
}: {
  component: ComponentItem;
  onSelect?: (componentId: string) => void;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect?.(component.id)}
      className="w-full rounded-lg border border-border bg-card p-3 text-left transition-colors hover:border-primary hover:bg-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      <div className="text-sm font-medium">{component.name}</div>
      <div className="mt-1 text-xs text-muted-foreground">
        {component.description}
      </div>
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
    </motion.button>
  );
}

export function BuilderSidebar({
  className,
  onSelectComponent,
  allowDrag = true,
}: BuilderSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnimations = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return componentsRegistry
      .filter(
        (component) =>
          component.display !== false &&
          (component.category === "blocks" || component.category === "resumes")
      )
      .filter((component) => {
        if (!query) return true;
        return (
          component.name.toLowerCase().includes(query) ||
          component.description.toLowerCase().includes(query) ||
          component.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });
  }, [searchQuery]);

  return (
    <div className={cn("flex h-full flex-col bg-card", className)}>
      <div className="border-b border-border p-4">
        <h2 className="mb-4 text-lg font-semibold">Component Library</h2>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
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
        {!allowDrag && (
          <p className="mt-3 text-xs text-muted-foreground">
            Tap a block to add it to your page.
          </p>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {filteredAnimations.length === 0 ? (
          <div className="py-8 text-center text-sm text-muted-foreground">
            No components found
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
