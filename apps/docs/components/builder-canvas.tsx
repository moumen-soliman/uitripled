"use client";

import { defaultFreeCanvasForIndex } from "@/lib/builder-utils";
import type {
  BuilderComponent,
  BuilderFreeCanvas,
  BuilderLayoutMode,
} from "@/types/builder";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, GripVertical, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

type CanvasComponentProps = {
  component: BuilderComponent;
  onDelete: (id: string) => void;
  isTextEditing: boolean;
  onRegisterTextNode: (
    componentId: string,
    nodeId: string,
    originalText: string
  ) => void;
  onUpdateTextNode: (
    componentId: string,
    nodeId: string,
    newValue: string
  ) => void;
};

function useTextEditingLayer(
  component: BuilderComponent,
  isTextEditing: boolean,
  onRegisterTextNode: CanvasComponentProps["onRegisterTextNode"],
  onUpdateTextNode: CanvasComponentProps["onUpdateTextNode"]
) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleTextChange = useCallback(
    (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const textId = target.dataset.builderTextId;
      if (!textId) return;

      const newValue = target.textContent ?? "";
      onUpdateTextNode(component.id, textId, newValue);
    },
    [component.id, onUpdateTextNode]
  );

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const selector =
      "h1,h2,h3,h4,h5,h6,p,span,button,a,li,blockquote,figcaption,label,strong,em,small,div";
    const allElements = Array.from(
      container.querySelectorAll<HTMLElement>(selector)
    );

    const editableElements = allElements.filter((el) => {
      const text = el.textContent?.trim();
      if (!text) {
        return false;
      }

      const hasChildWithText = Array.from(
        el.querySelectorAll<HTMLElement>(selector)
      ).some((child) => {
        if (child === el) return false;
        const childText = child.textContent?.trim();
        return !!childText;
      });

      if (hasChildWithText) {
        return false;
      }

      return true;
    });

    editableElements.forEach((el, index) => {
      const textId = `${component.id}-${index}`;
      el.dataset.builderTextId = textId;
      onRegisterTextNode(component.id, textId, el.textContent ?? "");

      const storedValue = component.textContent?.[textId]?.value;
      if (storedValue !== undefined && storedValue !== el.textContent) {
        el.textContent = storedValue;
      }
      el.removeEventListener("input", handleTextChange);
      el.removeEventListener("blur", handleTextChange);

      if (isTextEditing) {
        el.setAttribute("contenteditable", "true");
        el.setAttribute("spellcheck", "false");
        el.style.outline = "1px dashed var(--primary)";
        el.style.outlineOffset = "2px";
        el.style.cursor = "text";
        el.addEventListener("input", handleTextChange);
        el.addEventListener("blur", handleTextChange);
      } else {
        el.removeAttribute("contenteditable");
        el.removeAttribute("spellcheck");
        el.style.outline = "";
        el.style.outlineOffset = "";
        el.style.cursor = "";
      }
    });

    return () => {
      editableElements.forEach((el) => {
        el.removeEventListener("input", handleTextChange);
        el.removeEventListener("blur", handleTextChange);
      });
    };
  }, [
    component.id,
    component.textContent,
    handleTextChange,
    isTextEditing,
    onRegisterTextNode,
  ]);

  return contentRef;
}

function StackCanvasComponent({
  component,
  onDelete,
  isTextEditing,
  onRegisterTextNode,
  onUpdateTextNode,
}: CanvasComponentProps) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
  } = useSortable({
    id: component.id,
    disabled: isTextEditing,
  });

  const contentRef = useTextEditingLayer(
    component,
    isTextEditing,
    onRegisterTextNode,
    onUpdateTextNode
  );

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const Component = component.animation.component;

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(!isTextEditing ? listeners : {})}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative mb-4 rounded-lg border-2 border-dashed bg-card/50 p-4 transition-all ${
        isOver && !isDragging
          ? "border-primary border-solid bg-primary/10"
          : isDragging
            ? "border-border opacity-50"
            : "border-border hover:border-primary"
      } ${isTextEditing ? "cursor-text" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(component.id);
            }}
            className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg transition-colors hover:bg-destructive/90"
          >
            <X className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          {component.animation.name}
        </span>
      </div>

      <div
        ref={contentRef}
        className="relative w-full overflow-hidden rounded-lg bg-background"
        style={component.styles ? stylesToCSS(component.styles) : undefined}
      >
        <div className="w-full overflow-x-auto">
          <div className="min-w-full">
            <Component />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** Convert BuilderComponentStyles to a React CSSProperties object. */
function stylesToCSS(
  styles: import("@/types/builder").BuilderComponentStyles
): React.CSSProperties {
  const css: React.CSSProperties = {};
  if (styles.padding) css.padding = styles.padding;
  if (styles.margin) css.margin = styles.margin;
  if (styles.backgroundColor) css.backgroundColor = styles.backgroundColor;
  if (styles.opacity !== undefined) css.opacity = styles.opacity;
  if (styles.borderRadius) css.borderRadius = styles.borderRadius;
  if (styles.borderWidth) css.borderWidth = styles.borderWidth;
  if (styles.borderColor) css.borderColor = styles.borderColor;
  if (styles.borderStyle)
    css.borderStyle = styles.borderStyle as React.CSSProperties["borderStyle"];
  if (styles.boxShadow) css.boxShadow = styles.boxShadow;
  if (styles.color) css.color = styles.color;
  if (styles.fontSize) css.fontSize = styles.fontSize;
  if (styles.fontWeight) css.fontWeight = styles.fontWeight;
  if (styles.fontFamily) css.fontFamily = styles.fontFamily;
  return css;
}

const SNAP_THRESHOLD = 6;
const ESTIMATED_COMPONENT_HEIGHT = 400;
const WORKSPACE_W = 2400;
const WORKSPACE_H = 3200;
const LANDING_PAGE_W = 1200;
const LANDING_PAGE_H = 2200;
const LANDING_FRAME_X = Math.floor((WORKSPACE_W - LANDING_PAGE_W) / 2);
const LANDING_FRAME_Y = 120;
const GRID_COLUMNS = 12;
const GRID_GUTTER = 24;
const GRID_MARGIN = 24;
const GRID_ROW_HEIGHT = 8;
const MIN_ZOOM = 0.15;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.08;

const GRID_INNER_WIDTH = LANDING_PAGE_W - GRID_MARGIN * 2;
const GRID_COLUMN_WIDTH =
  (GRID_INNER_WIDTH - GRID_GUTTER * (GRID_COLUMNS - 1)) / GRID_COLUMNS;

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  return (
    target.isContentEditable ||
    tag === "input" ||
    tag === "textarea" ||
    tag === "select"
  );
};

type SnapEdge = {
  val: number;
  axis: "x" | "y";
  type: "left" | "centerX" | "right" | "top" | "centerY" | "bottom";
};

const getGridColumnLines = () => {
  const lines: number[] = [];
  for (let i = 0; i <= GRID_COLUMNS; i++) {
    lines.push(GRID_MARGIN + i * (GRID_COLUMN_WIDTH + GRID_GUTTER));
  }
  return lines;
};

const snapToGridX = (x: number, threshold = 12) => {
  const lines = getGridColumnLines();
  let best = x;
  let bestDist = Infinity;
  for (const line of lines) {
    const d = Math.abs(line - x);
    if (d < bestDist) {
      bestDist = d;
      best = line;
    }
  }
  return bestDist <= threshold ? best : x;
};

const snapToGridY = (y: number, threshold = 8) => {
  const snapped = Math.round(y / GRID_ROW_HEIGHT) * GRID_ROW_HEIGHT;
  return Math.abs(snapped - y) <= threshold ? snapped : y;
};

const snapWidthToGrid = (leftX: number, width: number) => {
  const lines = getGridColumnLines();
  const rightRaw = leftX + width;
  let bestRight = rightRaw;
  let bestDist = Infinity;
  for (const line of lines) {
    if (line <= leftX + 80) continue;
    const d = Math.abs(line - rightRaw);
    if (d < bestDist) {
      bestDist = d;
      bestRight = line;
    }
  }
  if (bestDist <= 16) {
    return Math.max(120, Math.round(bestRight - leftX));
  }
  return Math.max(120, Math.round(width));
};

function computeSnapEdges(
  components: BuilderComponent[],
  excludeId: string
): SnapEdge[] {
  const edges: SnapEdge[] = [
    { val: 0, axis: "x", type: "left" },
    { val: LANDING_PAGE_W / 2, axis: "x", type: "centerX" },
    { val: LANDING_PAGE_W, axis: "x", type: "right" },
    { val: 0, axis: "y", type: "top" },
    { val: LANDING_PAGE_H / 2, axis: "y", type: "centerY" },
    { val: LANDING_PAGE_H, axis: "y", type: "bottom" },
  ];
  for (let i = 0; i < components.length; i++) {
    const c = components[i];
    if (c.id === excludeId) continue;
    const fc = c.freeCanvas ?? defaultFreeCanvasForIndex(i);
    const w = fc.width ?? 380;

    edges.push(
      { val: fc.x, axis: "x", type: "left" },
      { val: fc.x + w / 2, axis: "x", type: "centerX" },
      { val: fc.x + w, axis: "x", type: "right" },
      { val: fc.y, axis: "y", type: "top" },
      { val: fc.y + ESTIMATED_COMPONENT_HEIGHT / 2, axis: "y", type: "centerY" },
      { val: fc.y + ESTIMATED_COMPONENT_HEIGHT, axis: "y", type: "bottom" }
    );
  }
  return edges;
}

type ActiveGuide = {
  axis: "x" | "y";
  val: number;
};

function snapToGuides(
  x: number,
  y: number,
  width: number,
  edges: SnapEdge[]
): { x: number; y: number; guides: ActiveGuide[] } {
  let snappedX = x;
  let snappedY = y;
  const guides: ActiveGuide[] = [];

  const selfEdgesX = [
    { val: x, offset: 0 },
    { val: x + width / 2, offset: width / 2 },
    { val: x + width, offset: width },
  ];
  const selfEdgesY = [
    { val: y, offset: 0 },
    {
      val: y + ESTIMATED_COMPONENT_HEIGHT / 2,
      offset: ESTIMATED_COMPONENT_HEIGHT / 2,
    },
    { val: y + ESTIMATED_COMPONENT_HEIGHT, offset: ESTIMATED_COMPONENT_HEIGHT },
  ];

  let bestDx = Infinity;
  let bestSnapX = x;
  let bestGuideX: number | null = null;

  for (const se of selfEdgesX) {
    for (const edge of edges) {
      if (edge.axis !== "x") continue;
      const d = Math.abs(se.val - edge.val);
      if (d < SNAP_THRESHOLD && d < bestDx) {
        bestDx = d;
        bestSnapX = x + (edge.val - se.val);
        bestGuideX = edge.val;
      }
    }
  }
  if (bestGuideX !== null) {
    snappedX = bestSnapX;
    guides.push({ axis: "x", val: bestGuideX });
  }

  let bestDy = Infinity;
  let bestSnapY = y;
  let bestGuideY: number | null = null;

  for (const se of selfEdgesY) {
    for (const edge of edges) {
      if (edge.axis !== "y") continue;
      const d = Math.abs(se.val - edge.val);
      if (d < SNAP_THRESHOLD && d < bestDy) {
        bestDy = d;
        bestSnapY = y + (edge.val - se.val);
        bestGuideY = edge.val;
      }
    }
  }
  if (bestGuideY !== null) {
    snappedY = bestSnapY;
    guides.push({ axis: "y", val: bestGuideY });
  }

  // If not aligned to another component edge, snap to landing grid lines.
  if (!guides.some((g) => g.axis === "x")) {
    const gridX = snapToGridX(snappedX);
    if (gridX !== snappedX) {
      snappedX = gridX;
      guides.push({ axis: "x", val: gridX });
    }
  }

  if (!guides.some((g) => g.axis === "y")) {
    const gridY = snapToGridY(snappedY);
    if (gridY !== snappedY) {
      snappedY = gridY;
      guides.push({ axis: "y", val: gridY });
    }
  }

  return { x: snappedX, y: snappedY, guides };
}

type FreeCanvasComponentProps = CanvasComponentProps & {
  resolvedCanvas: BuilderFreeCanvas;
  onFreeCanvasChange: (id: string, patch: Partial<BuilderFreeCanvas>) => void;
  allComponents: BuilderComponent[];
  onActiveGuidesChange: (guides: ActiveGuide[]) => void;
  selected: boolean;
  onSelect: (id: string | null) => void;
  onDuplicate: (id: string) => void;
  onBringToFront: (id: string) => void;
};

function FreeCanvasComponent({
  component,
  resolvedCanvas,
  onDelete,
  onFreeCanvasChange,
  isTextEditing,
  onRegisterTextNode,
  onUpdateTextNode,
  allComponents,
  onActiveGuidesChange,
  selected,
  onSelect,
  onDuplicate,
  onBringToFront,
}: FreeCanvasComponentProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [drag, setDrag] = useState<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    pointerId: number;
  } | null>(null);
  const [resize, setResize] = useState<{
    startX: number;
    origWidth: number;
    pointerId: number;
  } | null>(null);

  const contentRef = useTextEditingLayer(
    component,
    isTextEditing,
    onRegisterTextNode,
    onUpdateTextNode
  );
  const { x, y, width, zIndex = 0 } = resolvedCanvas;

  const snapEdges = useMemo(
    () => computeSnapEdges(allComponents, component.id),
    [allComponents, component.id]
  );

  useEffect(() => {
    if (!drag) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerId !== drag.pointerId) return;
      const rawX = Math.max(0, drag.origX + (e.clientX - drag.startX));
      const rawY = Math.max(0, drag.origY + (e.clientY - drag.startY));

      const w = resolvedCanvas.width ?? 380;
      const { x, y, guides } = snapToGuides(rawX, rawY, w, snapEdges);
      const clampedX = Math.min(Math.max(0, x), Math.max(0, LANDING_PAGE_W - 80));
      const clampedY = Math.min(
        Math.max(0, y),
        Math.max(0, LANDING_PAGE_H - ESTIMATED_COMPONENT_HEIGHT)
      );
      onFreeCanvasChange(component.id, { x: clampedX, y: clampedY });
      onActiveGuidesChange(guides);
    };

    const onUp = (e: PointerEvent) => {
      if (e.pointerId !== drag.pointerId) return;
      setDrag(null);
      onActiveGuidesChange([]);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [
    drag,
    component.id,
    onFreeCanvasChange,
    snapEdges,
    resolvedCanvas.width,
    onActiveGuidesChange,
  ]);

  useEffect(() => {
    if (!resize) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerId !== resize.pointerId) return;
      const rawWidth = Math.max(120, resize.origWidth + (e.clientX - resize.startX));
      const snappedWidth = Math.min(
        snapWidthToGrid(x, rawWidth),
        Math.max(120, LANDING_PAGE_W - x)
      );
      onFreeCanvasChange(component.id, { width: snappedWidth });
    };

    const onUp = (e: PointerEvent) => {
      if (e.pointerId !== resize.pointerId) return;
      setResize(null);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [resize, component.id, onFreeCanvasChange]);

  const Component = component.animation.component;

  return (
    <motion.div
      className={`group absolute rounded-lg border-2 border-dashed bg-card/90 shadow-sm backdrop-blur-sm transition-colors ${
        selected
          ? "border-primary ring-2 ring-primary/30"
          : "border-border hover:border-primary"
      }`}
      style={{
        left: x,
        top: y,
        width: width ?? undefined,
        maxWidth: width == null ? "min(100%, 420px)" : undefined,
        zIndex: 10 + zIndex,
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={(e) => {
        e.stopPropagation();
        onSelect(component.id);
      }}
    >
      <div className="flex items-center gap-1 border-b border-border bg-muted/40 px-1 py-0.5">
        <button
          type="button"
          aria-label={`Move ${component.animation.name}`}
          className="flex cursor-grab touch-none items-center rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground active:cursor-grabbing"
          disabled={isTextEditing}
          onPointerDown={(e) => {
            if (isTextEditing) return;
            e.preventDefault();
            e.stopPropagation();
            onSelect(component.id);
            onBringToFront(component.id);
            setDrag({
              startX: e.clientX,
              startY: e.clientY,
              origX: x,
              origY: y,
              pointerId: e.pointerId,
            });
          }}
        >
          <GripVertical className="h-4 w-4 shrink-0" />
        </button>
        <span className="min-w-0 flex-1 truncate text-xs font-medium text-muted-foreground">
          {component.animation.name}
        </span>
        {(isHovered || selected) && (
          <button
            type="button"
            aria-label={`Duplicate ${component.animation.name}`}
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate(component.id);
            }}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <Copy className="h-3.5 w-3.5" />
          </button>
        )}
        {(isHovered || selected) && (
          <button
            type="button"
            aria-label={`Delete ${component.animation.name}`}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(component.id);
            }}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-destructive hover:bg-destructive/10"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div
        ref={contentRef}
        className={`relative overflow-hidden rounded-b-lg bg-background p-2 ${isTextEditing ? "cursor-text" : ""}`}
        style={component.styles ? stylesToCSS(component.styles) : undefined}
      >
        <div className="w-full overflow-x-auto">
          <div className="min-w-full">
            <Component />
          </div>
        </div>
      </div>

      {/* Right-edge resize handle */}
      <div
        className="absolute -right-1 top-0 bottom-0 z-20 flex w-3 cursor-col-resize items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
        onPointerDown={(e) => {
          if (isTextEditing) return;
          e.preventDefault();
          e.stopPropagation();
          setResize({
            startX: e.clientX,
            origWidth: width ?? 380,
            pointerId: e.pointerId,
          });
        }}
      >
        <div className="h-8 w-1 rounded-full bg-primary/60" />
      </div>
    </motion.div>
  );
}

function AlignmentGuides({ guides }: { guides: ActiveGuide[] }) {
  if (guides.length === 0) return null;
  return (
    <>
      {guides.map((g, i) =>
        g.axis === "x" ? (
          <div
            key={`guide-${i}`}
            className="pointer-events-none absolute top-0 bottom-0 z-50"
            style={{ left: g.val }}
          >
            <div className="h-full w-px bg-primary/60" />
          </div>
        ) : (
          <div
            key={`guide-${i}`}
            className="pointer-events-none absolute left-0 right-0 z-50"
            style={{ top: g.val }}
          >
            <div className="h-px w-full bg-primary/60" />
          </div>
        )
      )}
    </>
  );
}

export type BuilderCanvasProps = {
  layoutMode?: BuilderLayoutMode;
  components: BuilderComponent[];
  onDelete: (id: string) => void;
  isTextEditing: boolean;
  onRegisterTextNode: (
    componentId: string,
    nodeId: string,
    originalText: string
  ) => void;
  onUpdateTextNode: (
    componentId: string,
    nodeId: string,
    newValue: string
  ) => void;
  onFreeCanvasChange?: (id: string, patch: Partial<BuilderFreeCanvas>) => void;
  selectedComponentId?: string | null;
  onSelectComponent?: (id: string | null) => void;
  onDuplicateComponent?: (id: string) => void;
  onBringToFront?: (id: string) => void;
  /** Active breakpoint width override for the canvas frame. */
  canvasWidth?: number;
};

function FreeCanvasArtboard({
  components,
  onDelete,
  isTextEditing,
  onRegisterTextNode,
  onUpdateTextNode,
  onFreeCanvasChange,
  selectedComponentId,
  onSelectComponent,
  onDuplicateComponent,
  onBringToFront,
  isOver,
  setNodeRef,
  canvasWidth,
}: {
  components: BuilderComponent[];
  onDelete: BuilderCanvasProps["onDelete"];
  isTextEditing: boolean;
  onRegisterTextNode: BuilderCanvasProps["onRegisterTextNode"];
  onUpdateTextNode: BuilderCanvasProps["onUpdateTextNode"];
  onFreeCanvasChange: NonNullable<BuilderCanvasProps["onFreeCanvasChange"]>;
  selectedComponentId: string | null;
  onSelectComponent: NonNullable<BuilderCanvasProps["onSelectComponent"]>;
  onDuplicateComponent: NonNullable<BuilderCanvasProps["onDuplicateComponent"]>;
  onBringToFront: NonNullable<BuilderCanvasProps["onBringToFront"]>;
  isOver: boolean;
  setNodeRef: (el: HTMLElement | null) => void;
  canvasWidth?: number;
}) {
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const [zoom, setZoom] = useState(0.55);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const [activeGuides, setActiveGuides] = useState<ActiveGuide[]>([]);

  const handleActiveGuidesChange = useCallback((guides: ActiveGuide[]) => {
    setActiveGuides(guides);
  }, []);

  const selectedComponent = useMemo(
    () => components.find((c) => c.id === selectedComponentId) ?? null,
    [components, selectedComponentId]
  );

  const fitToView = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const fitZoom = Math.max(
      MIN_ZOOM,
      Math.min(
        MAX_ZOOM,
        Math.min(
          (viewport.clientWidth * 0.92) / LANDING_PAGE_W,
          (viewport.clientHeight * 0.88) / LANDING_PAGE_H
        )
      )
    );
    const desiredLeft = (viewport.clientWidth - LANDING_PAGE_W * fitZoom) / 2;
    const desiredTop = Math.max(
      24,
      (viewport.clientHeight - LANDING_PAGE_H * fitZoom) / 2
    );
    setZoom(fitZoom);
    setPan({
      x: desiredLeft - LANDING_FRAME_X * fitZoom,
      y: desiredTop - LANDING_FRAME_Y * fitZoom,
    });
  }, []);

  useEffect(() => {
    fitToView();
  }, [fitToView]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
        setZoom((prev) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prev + delta)));
      } else {
        setPan((prev) => ({
          x: prev.x - e.deltaX,
          y: prev.y - e.deltaY,
        }));
      }
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) return;
      if (e.code === "Space") {
        setIsSpacePressed(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setIsSpacePressed(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target) || !selectedComponent) return;

      if (e.key === "Delete" || e.key === "Backspace") {
        e.preventDefault();
        onSelectComponent(null);
        onDelete(selectedComponent.id);
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "d") {
        e.preventDefault();
        onDuplicateComponent(selectedComponent.id);
        return;
      }

      const step = e.shiftKey ? 10 : 1;
      const fc = selectedComponent.freeCanvas;
      if (!fc) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onFreeCanvasChange(selectedComponent.id, { x: Math.max(0, fc.x - step) });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onFreeCanvasChange(selectedComponent.id, { x: fc.x + step });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        onFreeCanvasChange(selectedComponent.id, { y: Math.max(0, fc.y - step) });
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        onFreeCanvasChange(selectedComponent.id, { y: fc.y + step });
      } else if (e.key === "Escape") {
        e.preventDefault();
        onSelectComponent(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    onDelete,
    onDuplicateComponent,
    onFreeCanvasChange,
    onSelectComponent,
    selectedComponent,
  ]);

  const handleViewportPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const shouldPan =
      e.button === 1 ||
      (e.button === 0 && e.altKey) ||
      (e.button === 0 && isSpacePressed);
    if (shouldPan) {
      e.preventDefault();
      setIsPanning(true);
      panStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        panX: pan.x,
        panY: pan.y,
      };
      return;
    }

    if (e.currentTarget === e.target) {
      onSelectComponent(null);
    }
  };

  useEffect(() => {
    if (!isPanning) return;

    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - panStartRef.current.x;
      const dy = e.clientY - panStartRef.current.y;
      setPan({
        x: panStartRef.current.panX + dx,
        y: panStartRef.current.panY + dy,
      });
    };

    const onUp = () => setIsPanning(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [isPanning]);

  const zoomPercent = Math.round(zoom * 100);

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden">
      {/* Zoom controls */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-40 flex items-center gap-1">
        <div className="pointer-events-auto flex items-center gap-1 rounded-lg border border-border bg-card/95 px-2 py-1 shadow-sm backdrop-blur-sm">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            onClick={() =>
              setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP * 2))
            }
          >
            -
          </button>
          <span className="min-w-[3rem] text-center text-xs font-medium text-muted-foreground">
            {zoomPercent}%
          </span>
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            onClick={() =>
              setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP * 2))
            }
          >
            +
          </button>
          <div className="mx-1 h-4 w-px bg-border" />
          <button
            type="button"
            className="rounded px-2 py-0.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            onClick={() => {
              setZoom(0.55);
              setPan({ x: 0, y: 0 });
            }}
          >
            Reset
          </button>
          <button
            type="button"
            className="rounded px-2 py-0.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            onClick={fitToView}
          >
            Fit
          </button>
        </div>
      </div>

      {/* Viewport */}
      <div
        ref={(el) => {
          viewportRef.current = el;
          setNodeRef(el);
        }}
        className={`h-full w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 ${
          isPanning
            ? "cursor-grabbing"
            : isSpacePressed
              ? "cursor-grab"
              : "cursor-default"
        } ${
          isOver ? "ring-2 ring-primary ring-inset" : ""
        }`}
        onPointerDown={handleViewportPointerDown}
      >
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
            width: WORKSPACE_W,
            height: WORKSPACE_H,
          }}
          className="relative bg-[length:20px_20px] [background-image:linear-gradient(to_right,rgb(0_0_0/5%)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/5%)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgb(255_255_255/6%)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/6%)_1px,transparent_1px)]"
        >
          <div
            className="absolute rounded-xl border border-border/70 bg-background shadow-2xl transition-all duration-300"
            style={{
              left: Math.floor((WORKSPACE_W - (canvasWidth ?? LANDING_PAGE_W)) / 2),
              top: LANDING_FRAME_Y,
              width: canvasWidth ?? LANDING_PAGE_W,
              height: LANDING_PAGE_H,
            }}
          >
            <div className="pointer-events-none absolute -top-7 left-0 rounded-md border border-border bg-card px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Landing Preview Canvas
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <div className="pointer-events-none absolute inset-0 z-[1]">
                {/* 12-column layout grid */}
                <div className="absolute inset-y-0 left-6 right-6 flex">
                  {Array.from({ length: GRID_COLUMNS }).map((_, index) => (
                    <div
                      key={`col-${index}`}
                      className="h-full bg-primary/[0.045] border-x border-primary/[0.07]"
                      style={{
                        width: GRID_COLUMN_WIDTH,
                        marginRight: index === GRID_COLUMNS - 1 ? 0 : GRID_GUTTER,
                      }}
                    />
                  ))}
                </div>
                {/* horizontal row grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, rgb(99 102 241 / 0.08), rgb(99 102 241 / 0.08) 1px, transparent 1px, transparent 8px)",
                  }}
                />
              </div>

              <div className="pointer-events-none absolute right-3 top-3 z-[60] max-w-[300px] rounded-md border border-border bg-card/95 p-2 shadow-sm backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Grid helper
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  12 columns, 24px gutters, 8px rows. Components snap to grid
                  and alignment lines while moving/resizing.
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Tip: hold <span className="font-medium text-foreground">Shift</span> with arrows for 10px nudges.
                </p>
              </div>

              <AlignmentGuides guides={activeGuides} />
              <AnimatePresence mode="popLayout">
                {components.map((component, index) => {
                  if (component.visible === false) return null;
                  const resolved =
                    component.freeCanvas ?? defaultFreeCanvasForIndex(index);
                  return (
                    <FreeCanvasComponent
                      key={component.id}
                      component={component}
                      resolvedCanvas={resolved}
                      onDelete={onDelete}
                      onFreeCanvasChange={
                        component.locked ? () => {} : onFreeCanvasChange
                      }
                      isTextEditing={isTextEditing}
                      onRegisterTextNode={onRegisterTextNode}
                      onUpdateTextNode={onUpdateTextNode}
                      allComponents={components}
                      onActiveGuidesChange={handleActiveGuidesChange}
                      selected={selectedComponentId === component.id}
                      onSelect={
                        component.locked ? () => {} : onSelectComponent
                      }
                      onDuplicate={onDuplicateComponent}
                      onBringToFront={onBringToFront}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {components.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-muted-foreground">
                  <svg
                    className="mx-auto h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold">Free canvas</h3>
                <p className="max-w-md text-sm text-muted-foreground">
                  This area matches a landing page-sized frame so dropped blocks
                  look close to the final result. Scroll to pan, Ctrl/Cmd+scroll
                  to zoom, Alt/Space + drag to pan.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function BuilderCanvas({
  layoutMode = "stack",
  components,
  onDelete,
  isTextEditing,
  onRegisterTextNode,
  onUpdateTextNode,
  onFreeCanvasChange,
  selectedComponentId = null,
  onSelectComponent = () => {},
  onDuplicateComponent = () => {},
  onBringToFront = () => {},
  canvasWidth,
}: BuilderCanvasProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: "builder-canvas",
  });

  const componentIds = components.map((c) => c.id);

  if (layoutMode === "free") {
    return (
      <FreeCanvasArtboard
        components={components}
        onDelete={onDelete}
        isTextEditing={isTextEditing}
        onRegisterTextNode={onRegisterTextNode}
        onUpdateTextNode={onUpdateTextNode}
        onFreeCanvasChange={
          onFreeCanvasChange ??
          (() => {
            /* no-op */
          })
        }
        selectedComponentId={selectedComponentId}
        onSelectComponent={onSelectComponent}
        onDuplicateComponent={onDuplicateComponent}
        onBringToFront={onBringToFront}
        isOver={isOver}
        setNodeRef={setNodeRef}
        canvasWidth={canvasWidth}
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      className={`min-h-full rounded-lg border-2 border-dashed p-4 md:p-6 transition-colors ${
        isOver ? "border-primary bg-primary/5" : "border-border bg-muted/30"
      }`}
    >
      {components.length === 0 ? (
        <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
          <div className="mb-4 text-muted-foreground">
            <svg
              className="mx-auto h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold">Empty Canvas</h3>
          <p className="max-w-md text-sm text-muted-foreground">
            Drag components from the sidebar to start building your page.
            Components will be automatically responsive.
          </p>
        </div>
      ) : (
        <SortableContext
          items={componentIds}
          strategy={verticalListSortingStrategy}
        >
          <AnimatePresence mode="popLayout">
            {components.map((component) => (
              <StackCanvasComponent
                key={component.id}
                component={component}
                onDelete={onDelete}
                isTextEditing={isTextEditing}
                onRegisterTextNode={onRegisterTextNode}
                onUpdateTextNode={onUpdateTextNode}
              />
            ))}
          </AnimatePresence>
        </SortableContext>
      )}
    </div>
  );
}
