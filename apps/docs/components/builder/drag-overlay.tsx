"use client";

import { DragOverlay as DndDragOverlay } from "@dnd-kit/core";

type DragOverlayProps = {
  activeComponentInfo: { name: string; type: "canvas" | "sidebar" } | null;
};

export function DragOverlay({ activeComponentInfo }: DragOverlayProps) {
  return (
    <DndDragOverlay>
      {activeComponentInfo && (
        <div className="rounded-lg border-2 border-primary bg-card p-4 shadow-lg opacity-90">
          <div className="text-sm font-medium">{activeComponentInfo.name}</div>
          {activeComponentInfo.type === "canvas" && (
            <div className="mt-1 text-xs text-muted-foreground">
              Reordering...
            </div>
          )}
        </div>
      )}
    </DndDragOverlay>
  );
}
