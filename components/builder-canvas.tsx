"use client";

import type { BuilderComponent } from "@/types/builder";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

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

function CanvasComponent({
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
      {/* Delete Button */}
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

      {/* Component Label */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          {component.animation.name}
        </span>
      </div>

      {/* Rendered Component */}
      <div
        ref={contentRef}
        className="relative w-full overflow-hidden rounded-lg bg-background"
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

type BuilderCanvasProps = {
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
};

export function BuilderCanvas({
  components,
  onDelete,
  isTextEditing,
  onRegisterTextNode,
  onUpdateTextNode,
}: BuilderCanvasProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: "builder-canvas",
  });

  const componentIds = components.map((c) => c.id);

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
              <CanvasComponent
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
