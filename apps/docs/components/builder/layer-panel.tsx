"use client";

import type { BuilderComponent } from "@/types/builder";
import { Button } from "@uitripled/react-shadcn/ui/button";
import { cn } from "@/lib/utils";
import {
  Eye,
  EyeOff,
  GripVertical,
  Lock,
  Unlock,
  X,
} from "lucide-react";

type LayerPanelProps = {
  components: BuilderComponent[];
  selectedComponentId: string | null;
  onSelect: (id: string | null) => void;
  onToggleVisibility: (id: string) => void;
  onToggleLock: (id: string) => void;
  onReorderLayers: (oldIndex: number, newIndex: number) => void;
  onClose: () => void;
};

export function LayerPanel({
  components,
  selectedComponentId,
  onSelect,
  onToggleVisibility,
  onToggleLock,
  onReorderLayers,
  onClose,
}: LayerPanelProps) {
  // Sort by zIndex descending (highest layer first, matching visual stacking)
  const sorted = [...components]
    .map((c, originalIndex) => ({ component: c, originalIndex }))
    .sort((a, b) => {
      const zA = a.component.freeCanvas?.zIndex ?? a.originalIndex;
      const zB = b.component.freeCanvas?.zIndex ?? b.originalIndex;
      return zB - zA;
    });

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Layers
          </p>
          <p className="text-sm font-semibold">
            {components.length} component{components.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {sorted.length === 0 ? (
          <div className="px-3 py-8 text-center text-xs text-muted-foreground">
            No components on this page
          </div>
        ) : (
          <div className="py-1">
            {sorted.map(({ component, originalIndex }) => {
              const isSelected = component.id === selectedComponentId;
              const isHidden = component.visible === false;
              const isLocked = component.locked === true;

              return (
                <div
                  key={component.id}
                  className={cn(
                    "group flex items-center gap-1 px-2 py-1 text-sm transition-colors cursor-pointer",
                    isSelected
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                    isHidden && "opacity-50"
                  )}
                  onClick={() => onSelect(isSelected ? null : component.id)}
                >
                  <GripVertical className="h-3.5 w-3.5 shrink-0 cursor-grab text-muted-foreground/50" />

                  <span className="min-w-0 flex-1 truncate text-xs">
                    {component.animation.name}
                  </span>

                  <span className="mr-1 text-[10px] tabular-nums text-muted-foreground/60">
                    z{component.freeCanvas?.zIndex ?? originalIndex}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleVisibility(component.id);
                    }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded opacity-0 transition-opacity hover:bg-accent group-hover:opacity-100 data-[active=true]:opacity-100"
                    data-active={isHidden}
                    title={isHidden ? "Show" : "Hide"}
                  >
                    {isHidden ? (
                      <EyeOff className="h-3 w-3" />
                    ) : (
                      <Eye className="h-3 w-3" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLock(component.id);
                    }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded opacity-0 transition-opacity hover:bg-accent group-hover:opacity-100 data-[active=true]:opacity-100"
                    data-active={isLocked}
                    title={isLocked ? "Unlock" : "Lock"}
                  >
                    {isLocked ? (
                      <Lock className="h-3 w-3" />
                    ) : (
                      <Unlock className="h-3 w-3" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
