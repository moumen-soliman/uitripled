"use client";

import { Button } from "@/components/ui/button";
import type { BuilderComponent } from "@/types/builder";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AnimatePresence, motion } from "framer-motion";
import { Trash2, X } from "lucide-react";
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
  isSelected: boolean;
  onSelect: (id: string) => void;
  onToggleVisibility: (componentId: string, nodeId: string) => void;
  onOpenEditPopup: (
    componentId: string,
    nodeId: string,
    nodeType: "text" | "image" | "link" | "element",
    value: string,
    position: { x: number; y: number }
  ) => void;
  activeNodeId?: string | null;
  onElementsDiscovered?: (componentId: string, elements: any[]) => void;
  onUpdateStyle: (componentId: string, nodeId: string, style: React.CSSProperties) => void;
};


function CanvasComponent({
  component,
  onDelete,
  isTextEditing,
  onRegisterTextNode,
  onUpdateTextNode,
  isSelected,
  onSelect,
  onToggleVisibility,
  onOpenEditPopup,
  activeNodeId,
  onElementsDiscovered,
  onUpdateStyle,
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

    // Handle Text Nodes
    const textSelector =
      "h1,h2,h3,h4,h5,h6,p,span,button,a,li,blockquote,figcaption,label,strong,em,small";
    const allTextElements = Array.from(
      container.querySelectorAll<HTMLElement>(textSelector)
    );

    const editableTextElements = allTextElements.filter((el) => {
      // Don't treat images or links as simple text if they are meant to be handled separately
      // but we still want text inside links to be editable.
      const text = el.textContent?.trim();
      if (!text) {
        return false;
      }

      const hasChildWithText = Array.from(
        el.querySelectorAll<HTMLElement>(textSelector)
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

    editableTextElements.forEach((el, index) => {
      const textId = `${component.id}-text-${index}`;
      el.dataset.builderTextId = textId;

      const existing = component.textContent?.[textId];
      const currentContent = el.textContent ?? "";

      // Only register if we don't have it, or if it's unedited and the code changed
      if (
        !existing ||
        (existing.value === existing.original &&
          existing.original !== currentContent &&
          currentContent !== "")
      ) {
        onRegisterTextNode(component.id, textId, currentContent);
      }

      const storedValue = component.textContent?.[textId]?.value;
      if (storedValue !== undefined && storedValue !== el.textContent) {
        el.textContent = storedValue;
      }

      // Clean up any existing handlers first
      el.removeEventListener("input", handleTextChange);
      el.removeEventListener("blur", handleTextChange);
      if ((el as any)._builderClickHandler) {
        el.removeEventListener("click", (el as any)._builderClickHandler);
        delete (el as any)._builderClickHandler;
      }

      if (isTextEditing) {
        el.setAttribute("contenteditable", "true");
        el.setAttribute("spellcheck", "false");
        el.style.outline = "1px dashed var(--primary)";
        el.style.outlineOffset = "2px";
        el.style.cursor = "text";
        el.addEventListener("input", handleTextChange);
        el.addEventListener("blur", handleTextChange);
      } else if (isSelected) {
        // Clickable for inline edit popup when selected
        el.style.cursor = "pointer";
        if (textId === activeNodeId) {
          el.style.outline = "2px dashed var(--primary)";
          el.style.outlineOffset = "2px";
          el.style.zIndex = "20";
        } else {
          el.style.outline = "";
          el.style.outlineOffset = "";
        }
        const handleClick = (e: MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          const rect = el.getBoundingClientRect();
          onOpenEditPopup(
            component.id,
            textId,
            "text",
            el.textContent ?? "",
            { x: rect.left, y: rect.bottom }
          );
        };
        el.addEventListener("click", handleClick);
        (el as any)._builderClickHandler = handleClick;
      } else {
        el.removeAttribute("contenteditable");
        el.removeAttribute("spellcheck");
        el.style.outline = "";
        el.style.outlineOffset = "";
        el.style.cursor = "";
      }
    });

    // Handle Images
    const allImages = Array.from(container.querySelectorAll<HTMLImageElement>("img"));
    allImages.forEach((img, index) => {
      const imageId = `${component.id}-image-${index}`;
      img.dataset.builderImageId = imageId;

      const storedValue = component.imageContent?.[imageId]?.value;
      if (storedValue !== undefined && storedValue !== img.src) {
        img.src = storedValue;
      }

      // Clean up any existing click handler first
      if ((img as any)._builderClickHandler) {
        img.removeEventListener("click", (img as any)._builderClickHandler);
        delete (img as any)._builderClickHandler;
      }

      if (isSelected) {
        img.style.cursor = "pointer";
        if (imageId === activeNodeId) {
          img.style.outline = "2px dashed var(--primary)";
          img.style.outlineOffset = "2px";
          img.style.zIndex = "20";
        } else {
          img.style.outline = "";
          img.style.outlineOffset = "";
        }
        const handleClick = (e: MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          const rect = img.getBoundingClientRect();
          onOpenEditPopup(
            component.id,
            imageId,
            "image",
            img.src,
            { x: rect.left, y: rect.bottom }
          );
        };
        img.addEventListener("click", handleClick);
        (img as any)._builderClickHandler = handleClick;
      } else {
        img.style.cursor = "";
        img.style.outline = "";
        img.style.outlineOffset = "";
      }
    });

    // Handle Links
    const allLinks = Array.from(container.querySelectorAll<HTMLAnchorElement>("a"));
    allLinks.forEach((a, index) => {
      const linkId = `${component.id}-link-${index}`;
      a.dataset.builderLinkId = linkId;

      const storedValue = component.linkContent?.[linkId]?.value;
      if (storedValue !== undefined && storedValue !== a.href) {
        a.href = storedValue;
      }

      if (isSelected) {
        a.style.cursor = "pointer";
        if (linkId === activeNodeId) {
          a.style.outline = "2px dashed var(--primary)";
          a.style.outlineOffset = "2px";
          a.style.zIndex = "20";
        } else {
          a.style.outline = "";
          a.style.outlineOffset = "";
        }

        const handleClick = (e: MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          const rect = a.getBoundingClientRect();
          onOpenEditPopup(
            component.id,
            linkId,
            "link",
            a.href,
            { x: rect.left, y: rect.bottom }
          );
        };
        a.addEventListener("click", handleClick);
        (a as any)._builderClickHandler = handleClick;
      } else {
        a.style.cursor = "";
        a.style.outline = "";
        a.style.outlineOffset = "";
      }
    });

    // Handle Hidden Nodes - only apply visibility state, no click handlers
    // Delete functionality should only be available through explicit UI (popup delete button)
    const allContainerElements = Array.from(
      container.querySelectorAll<HTMLElement>("div, section, article, aside, main, header, footer")
    ).filter((el) => {
      if (el === container) return false;
      // Skip if it's explicitly a text element tag
      const isTextElement = ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "BUTTON", "A", "LABEL", "IMG", "BLOCKQUOTE", "FIGCAPTION", "STRONG", "EM", "SMALL"].includes(el.tagName);
      if (isTextElement) return false;
      // Skip if it's already used as a link in our link detection
      if (el.tagName === "A") return false;
      return true;
    });

    allContainerElements.forEach((el, index) => {
      const nodeId = `${component.id}-node-${index}`;
      el.dataset.builderNodeId = nodeId;

      // Apply hidden state if in hiddenNodes
      if (component.hiddenNodes?.includes(nodeId)) {
        el.style.display = "none";
      } else {
        if (el.style.display === "none") {
          el.style.display = "";
        }
      }

      // Clean up any existing handlers first
      if ((el as any)._builderClickHandler) {
        el.removeEventListener("click", (el as any)._builderClickHandler);
        delete (el as any)._builderClickHandler;
      }

      // Add click handler for selection if selected
      if (isSelected) {
        el.style.cursor = "pointer";
        if (nodeId === activeNodeId) {
          el.style.outline = "2px dashed var(--primary)";
          el.style.outlineOffset = "-2px";
          el.style.zIndex = "10";
        } else {
          // Subtle hover indicator for unselected nodes
          el.style.outline = "1px dashed var(--primary)";
          el.style.opacity = "0.4";
          el.style.outlineOffset = "-1px";
        }

        const handleClick = (e: MouseEvent) => {
          e.stopPropagation();
          e.preventDefault();
          const rect = el.getBoundingClientRect();
          onOpenEditPopup(
            component.id,
            nodeId,
            "element",
            "", // Elements don't have a simple value
            { x: rect.left, y: rect.bottom }
          );
        };
        el.addEventListener("click", handleClick);
        (el as any)._builderClickHandler = handleClick;
      } else {
        el.style.cursor = "";
        el.style.outline = "";
        el.style.outlineOffset = "";
      }
    });

    // Re-gridding logic
    const grids = Array.from(
      container.querySelectorAll<HTMLElement>(
        "[class*='grid-cols-'], [class*='md:grid-cols-'], [class*='lg:grid-cols-']"
      )
    );
    grids.forEach((grid) => {
      const visibleChildren = Array.from(grid.children).filter(
        (child) => (child as HTMLElement).style.display !== "none"
      );
      const count = visibleChildren.length;

      if (count > 0 && count <= 12) {
        // Find existing grid-cols classes and adjust them to the current count
        const classList = Array.from(grid.classList);
        classList.forEach((cls) => {
          if (cls.match(/^(?:md:|lg:)?grid-cols-\d+$/)) {
            const prefix = cls.split("grid-cols-")[0];
            grid.classList.remove(cls);
            grid.classList.add(`${prefix}grid-cols-${count}`);
          }
        });
      }
    });

    // Discovery logic for Layers Panel
    if (onElementsDiscovered && isSelected) {
      const discoveredElements: any[] = [];

      editableTextElements.forEach((el, index) => {
        discoveredElements.push({
          id: `${component.id}-text-${index}`,
          type: "text",
          label: el.textContent?.slice(0, 20) || "Text",
          hidden: component.hiddenNodes?.includes(`${component.id}-text-${index}`) || false
        });
      });

      allImages.forEach((img, index) => {
        discoveredElements.push({
          id: `${component.id}-image-${index}`,
          type: "image",
          label: "Image",
          hidden: component.hiddenNodes?.includes(`${component.id}-image-${index}`) || false
        });
      });

      allLinks.forEach((a, index) => {
        discoveredElements.push({
          id: `${component.id}-link-${index}`,
          type: "link",
          label: a.textContent?.slice(0, 20) || "Link",
          hidden: component.hiddenNodes?.includes(`${component.id}-link-${index}`) || false
        });
      });

      allContainerElements.forEach((el, index) => {
        discoveredElements.push({
          id: `${component.id}-node-${index}`,
          type: "container",
          label: el.className.split(' ').find(c => c.length > 2) || "Container",
          hidden: component.hiddenNodes?.includes(`${component.id}-node-${index}`) || false
        });
      });

      onElementsDiscovered(component.id, discoveredElements);
    }

    // Drag-to-move logic for sub-elements
    const setupSubElementDrag = (el: HTMLElement, nodeId: string) => {
      let isDraggingNode = false;
      let startX = 0;
      let startY = 0;
      let initialLeft = 0;
      let initialTop = 0;

      const onMouseDown = (e: MouseEvent) => {
        if (!isSelected) return;
        // Don't drag if text editing is active on this element
        if (isTextEditing && el.contentEditable === "true") return;

        e.stopPropagation();
        e.preventDefault();

        isDraggingNode = true;
        startX = e.clientX;
        startY = e.clientY;

        // Get initial positioning
        const style = window.getComputedStyle(el);
        initialLeft = parseInt(style.left) || 0;
        initialTop = parseInt(style.top) || 0;

        // Ensure position: relative/absolute for moving
        if (style.position === "static") {
          el.style.position = "relative";
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        el.style.cursor = "grabbing";
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDraggingNode) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        el.style.left = `${initialLeft + dx}px`;
        el.style.top = `${initialTop + dy}px`;
      };

      const onMouseUp = () => {
        if (!isDraggingNode) return;
        isDraggingNode = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        el.style.cursor = "grab";

        // Save position to overrides
        onUpdateStyle(component.id, nodeId, {
          ...(component.styleOverrides?.[nodeId] || {}),
          left: el.style.left,
          top: el.style.top,
          position: window.getComputedStyle(el).position as any,
        });
      };

      el.addEventListener("mousedown", onMouseDown);
      el.style.cursor = isSelected ? "grab" : "default";

      return () => {
        el.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
    };

    const dragCleanups: (() => void)[] = [];

    if (isSelected) {
      editableTextElements.forEach((el, i) => dragCleanups.push(setupSubElementDrag(el, `${component.id}-text-${i}`)));
      allImages.forEach((img, i) => dragCleanups.push(setupSubElementDrag(img, `${component.id}-image-${i}`)));
      allLinks.forEach((a, i) => dragCleanups.push(setupSubElementDrag(a, `${component.id}-link-${i}`)));
      allContainerElements.forEach((el, i) => dragCleanups.push(setupSubElementDrag(el, `${component.id}-node-${i}`)));
    }

    return () => {
      dragCleanups.forEach(cleanup => cleanup());
      editableTextElements.forEach((el) => {
        el.removeEventListener("input", handleTextChange);
        el.removeEventListener("blur", handleTextChange);
        if ((el as any)._builderClickHandler) {
          el.removeEventListener("click", (el as any)._builderClickHandler);
          delete (el as any)._builderClickHandler;
        }
      });
      allImages.forEach((img) => {
        if ((img as any)._builderClickHandler) {
          img.removeEventListener("click", (img as any)._builderClickHandler);
          delete (img as any)._builderClickHandler;
        }
      });
      allLinks.forEach((a) => {
        a.onclick = null;
      });
      allContainerElements.forEach((el) => {
        if ((el as any)._builderClickHandler) {
          el.removeEventListener("click", (el as any)._builderClickHandler);
          delete (el as any)._builderClickHandler;
        }
        el.style.cursor = "";
        el.style.outline = "";
        el.style.outlineOffset = "";
      });
    };
    // Only re-run when selection state or editing mode changes
    // Content updates are handled via DOM manipulation, not re-mounting
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    component.id,
    handleTextChange,
    isTextEditing,
    isSelected,
  ]);

  // Separate effect for updating DOM when content changes
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    // Update text content values in DOM
    if (component.textContent) {
      Object.entries(component.textContent).forEach(([textId, entry]) => {
        const el = container.querySelector<HTMLElement>(`[data-builder-text-id="${textId}"]`);
        if (el && entry.value !== undefined && el.textContent !== entry.value) {
          el.textContent = entry.value;
        }
      });
    }

    // Update image sources in DOM
    if (component.imageContent) {
      Object.entries(component.imageContent).forEach(([imageId, entry]) => {
        const img = container.querySelector<HTMLImageElement>(`[data-builder-image-id="${imageId}"]`);
        if (img && entry.value !== undefined && img.src !== entry.value) {
          img.src = entry.value;
        }
      });
    }

    // Update link hrefs in DOM
    if (component.linkContent) {
      Object.entries(component.linkContent).forEach(([linkId, entry]) => {
        const a = container.querySelector<HTMLAnchorElement>(`[data-builder-link-id="${linkId}"]`);
        if (a && entry.value !== undefined && a.href !== entry.value) {
          a.href = entry.value;
        }
      });
    }

    // Update hidden nodes
    if (component.hiddenNodes) {
      component.hiddenNodes.forEach((nodeId) => {
        const el = container.querySelector<HTMLElement>(`[data-builder-node-id="${nodeId}"]`);
        if (el) {
          el.style.display = "none";
        }
      });
    }

    // Apply Style Overrides
    if (component.styleOverrides) {
      Object.entries(component.styleOverrides).forEach(([nodeId, styles]) => {
        // Try all selector types since any node can have styles
        const selectors = [
          `[data-builder-text-id="${nodeId}"]`,
          `[data-builder-image-id="${nodeId}"]`,
          `[data-builder-link-id="${nodeId}"]`,
          `[data-builder-node-id="${nodeId}"]`
        ];

        const el = container.querySelector<HTMLElement>(selectors.join(","));
        if (el) {
          Object.entries(styles).forEach(([prop, value]) => {
            // Use setProperty for better compatibility and priority
            const cssProperty = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
            el.style.setProperty(cssProperty, value as string, 'important');
          });

          // Highlight if it's the active node
          if (nodeId === activeNodeId) {
            el.style.outline = "2px dashed var(--primary)";
            el.style.outlineOffset = "2px";
            el.style.zIndex = "20";
          }
        }
      });
    }

    // Reordering logic
    if (component.elementOrder && component.elementOrder.length > 0) {
      // Find containers that might need reordering (grids/flex)
      const containers = Array.from(container.querySelectorAll<HTMLElement>(
        "[class*='grid-cols-'], [class*='md:grid-cols-'], [class*='flex-']"
      ));

      containers.forEach(grid => {
        const children = Array.from(grid.children) as HTMLElement[];
        if (children.length < 2) return;

        // Sort children based on elementOrder if they have a data-builder-id
        const sortedChildren = children.slice().sort((a, b) => {
          const idA = a.dataset.builderTextId || a.dataset.builderImageId || a.dataset.builderLinkId || a.dataset.builderNodeId;
          const idB = b.dataset.builderTextId || b.dataset.builderImageId || b.dataset.builderLinkId || b.dataset.builderNodeId;

          if (!idA || !idB) return 0;

          const indexA = component.elementOrder!.indexOf(idA);
          const indexB = component.elementOrder!.indexOf(idB);

          if (indexA === -1 || indexB === -1) return 0;
          return indexA - indexB;
        });

        // Re-append in correct order
        sortedChildren.forEach(child => grid.appendChild(child));
      });
    }
  }, [component.id, component.textContent, component.imageContent, component.linkContent, component.hiddenNodes, component.styleOverrides, component.elementOrder, activeNodeId, isSelected, onElementsDiscovered]);

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
      onClick={() => onSelect(component.id)}
      className={`group relative mb-4 rounded-lg border-2 transition-all ${
        isSelected
          ? "border-transparent"
          : isOver && !isDragging
            ? "border-primary border-solid bg-primary/10"
            : isDragging
              ? "border-border opacity-50 border-dashed"
              : "border-border border-dashed hover:border-primary/50"
      } ${isTextEditing ? "cursor-text" : "cursor-pointer"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Component Toolbar */}
      <div className={`mb-2 flex items-center justify-between px-4 py-2 transition-colors ${isSelected ? "bg-primary/5" : ""}`}>
        <span className={`text-xs font-medium ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
          {component.animation.name}
        </span>

        {(isHovered || isSelected) && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(component.id);
            }}
            title="Delete Component"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        )}
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
  selectedComponentId: string | null;
  onSelectComponent: (id: string | null) => void;
  onToggleVisibility: (componentId: string, nodeId: string) => void;
  onOpenEditPopup: (
    componentId: string,
    nodeId: string,
    nodeType: "text" | "image" | "link" | "element",
    value: string,
    position: { x: number; y: number }
  ) => void;
  activeNodeId?: string | null;
  onElementsDiscovered?: (componentId: string, elements: any[]) => void;
  onUpdateStyle: (componentId: string, nodeId: string, style: React.CSSProperties) => void;
};

export function BuilderCanvas({
  components,
  onDelete,
  isTextEditing,
  onRegisterTextNode,
  onUpdateTextNode,
  selectedComponentId,
  onSelectComponent,
  onToggleVisibility,
  onOpenEditPopup,
  activeNodeId,
  onElementsDiscovered,
  onUpdateStyle,
}: BuilderCanvasProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: "builder-canvas",
  });

  const componentIds = components.map((c) => c.id);

  return (
    <div
      ref={setNodeRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onSelectComponent(null);
        }
      }}
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
                isSelected={selectedComponentId === component.id}
                onSelect={(id) => onSelectComponent(id)}
                onToggleVisibility={onToggleVisibility}
                onOpenEditPopup={onOpenEditPopup}
                activeNodeId={activeNodeId}
                onElementsDiscovered={onElementsDiscovered}
                onUpdateStyle={onUpdateStyle}
              />
            ))}
          </AnimatePresence>
        </SortableContext>
      )}
    </div>
  );
}
