"use client";

import { Button } from "@/components/ui/button";
import { BuilderComponent } from "@/types/builder";
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  GripVertical,
  Type,
  Image as ImageIcon,
  Link as LinkIcon,
  Box,
  Trash2,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

type ElementInfo = {
  id: string;
  type: "text" | "image" | "link" | "container";
  label: string;
  hidden: boolean;
};

type SortableElementProps = {
  element: ElementInfo;
  onSelect: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onDelete: (id: string) => void;
  isActive: boolean;
};

function SortableElement({
  element,
  onSelect,
  onToggleVisibility,
  onDelete,
  isActive,
}: SortableElementProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : element.hidden ? 0.4 : 1,
  };

  const getIcon = () => {
    switch (element.type) {
      case "text":
        return <Type className="h-3 w-3" />;
      case "image":
        return <ImageIcon className="h-3 w-3" />;
      case "link":
        return <LinkIcon className="h-3 w-3" />;
      case "container":
        return <Box className="h-3 w-3" />;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-1 rounded px-1 py-0.5 text-xs ${
        isActive
          ? "bg-primary/20 text-primary"
          : "hover:bg-muted"
      } ${element.hidden ? "line-through text-muted-foreground" : ""}`}
    >
      <button
        {...attributes}
        {...listeners}
        className="cursor-grab touch-none p-0.5 text-muted-foreground hover:text-foreground"
      >
        <GripVertical className="h-3 w-3" />
      </button>
      <button
        onClick={() => onSelect(element.id)}
        className="flex flex-1 items-center gap-1.5 truncate text-left"
      >
        {getIcon()}
        <span className="truncate">{element.label}</span>
      </button>
      <button
        onClick={() => onToggleVisibility(element.id)}
        className="p-0.5 text-muted-foreground hover:text-foreground"
        title={element.hidden ? "Show" : "Hide"}
      >
        {element.hidden ? (
          <EyeOff className="h-3 w-3" />
        ) : (
          <Eye className="h-3 w-3" />
        )}
      </button>
      <button
        onClick={() => onDelete(element.id)}
        className="p-0.5 text-muted-foreground hover:text-destructive"
        title="Delete"
      >
        <Trash2 className="h-3 w-3" />
      </button>
    </div>
  );
}

type ElementLayersPanelProps = {
  component: BuilderComponent | null;
  elements: ElementInfo[];
  activeElementId: string | null;
  onSelectElement: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onDeleteElement: (id: string) => void;
  onReorderElements: (componentId: string, newOrder: string[]) => void;
};

export function ElementLayersPanel({
  component,
  elements,
  activeElementId,
  onSelectElement,
  onToggleVisibility,
  onDeleteElement,
  onReorderElements,
}: ElementLayersPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 4 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (!component || elements.length === 0) {
    return null;
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = elements.findIndex((e) => e.id === active.id);
    const newIndex = elements.findIndex((e) => e.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const newOrder = arrayMove(
        elements.map((e) => e.id),
        oldIndex,
        newIndex
      );
      onReorderElements(component.id, newOrder);
    }
  };

  return (
    <div className="border-t border-border bg-card/50 p-2">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex w-full items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronDown className="h-3 w-3" />
        )}
        Elements ({elements.length})
      </button>

      {!isCollapsed && (
        <div className="mt-2 max-h-48 space-y-0.5 overflow-y-auto">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={elements.map((e) => e.id)}
              strategy={verticalListSortingStrategy}
            >
              {elements.map((element) => (
                <SortableElement
                  key={element.id}
                  element={element}
                  onSelect={onSelectElement}
                  onToggleVisibility={onToggleVisibility}
                  onDelete={onDeleteElement}
                  isActive={activeElementId === element.id}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      )}
    </div>
  );
}
