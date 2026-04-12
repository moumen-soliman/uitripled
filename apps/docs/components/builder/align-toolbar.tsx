"use client";

import type { BuilderComponent, BuilderFreeCanvas } from "@/types/builder";
import { Button } from "@uitripled/react-shadcn/ui/button";
import {
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignStartHorizontal,
  AlignStartVertical,
} from "lucide-react";

const LANDING_PAGE_W = 1200;
const LANDING_PAGE_H = 2200;

type AlignToolbarProps = {
  selectedComponent: BuilderComponent;
  onFreeCanvasChange: (componentId: string, patch: Partial<BuilderFreeCanvas>) => void;
};

export function AlignToolbar({
  selectedComponent,
  onFreeCanvasChange,
}: AlignToolbarProps) {
  const canvas = selectedComponent.freeCanvas;
  if (!canvas) return null;

  const w = canvas.width ?? 380;

  const alignLeft = () => onFreeCanvasChange(selectedComponent.id, { x: 0 });
  const alignCenterH = () =>
    onFreeCanvasChange(selectedComponent.id, {
      x: Math.round((LANDING_PAGE_W - w) / 2),
    });
  const alignRight = () =>
    onFreeCanvasChange(selectedComponent.id, {
      x: Math.max(0, LANDING_PAGE_W - w),
    });
  const alignTop = () => onFreeCanvasChange(selectedComponent.id, { y: 0 });
  const alignCenterV = () =>
    onFreeCanvasChange(selectedComponent.id, {
      y: Math.round(LANDING_PAGE_H / 2 - 200),
    });
  const alignBottom = () =>
    onFreeCanvasChange(selectedComponent.id, {
      y: Math.max(0, LANDING_PAGE_H - 400),
    });

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-card/95 p-1 shadow-sm backdrop-blur-sm">
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={alignLeft}
        title="Align left"
      >
        <AlignStartVertical className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={alignCenterH}
        title="Align center horizontally"
      >
        <AlignCenterVertical className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={alignRight}
        title="Align right"
      >
        <AlignEndVertical className="h-3.5 w-3.5" />
      </Button>
      <div className="mx-0.5 h-4 w-px bg-border" />
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={alignTop}
        title="Align top"
      >
        <AlignStartHorizontal className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={alignCenterV}
        title="Align center vertically"
      >
        <AlignCenterHorizontal className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7"
        onClick={alignBottom}
        title="Align bottom"
      >
        <AlignEndHorizontal className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
}
