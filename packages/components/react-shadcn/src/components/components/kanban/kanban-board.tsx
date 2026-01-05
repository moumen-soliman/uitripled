"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  closestCorners,
  defaultDropAnimationSideEffects,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Clock,
  Filter,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";

// --- Types ---

type Id = string | number;

type Column = {
  id: Id;
  title: string;
};

type Task = {
  id: Id;
  columnId: Id;
  content: string;
  priority: "low" | "medium" | "high";
  tags: string[];
  comments: number;
  attachments: number;
  dueDate?: string;
  assignees: string[];
};

// --- Mock Data ---

const initialColumns: Column[] = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "review", title: "Review" },
  { id: "done", title: "Done" },
];

const initialTasks: Task[] = [
  {
    id: "1",
    columnId: "todo",
    content: "Design new landing page",
    priority: "high",
    tags: ["Design", "Marketing"],
    comments: 3,
    attachments: 2,
    dueDate: "Tomorrow",
    assignees: ["/avatars/01.png", "/avatars/02.png"],
  },
  {
    id: "2",
    columnId: "todo",
    content: "Competitor analysis",
    priority: "medium",
    tags: ["Research"],
    comments: 1,
    attachments: 0,
    dueDate: "Next Week",
    assignees: ["/avatars/03.png"],
  },
  {
    id: "3",
    columnId: "in-progress",
    content: "Implement authentication flow",
    priority: "high",
    tags: ["Dev", "Backend"],
    comments: 5,
    attachments: 1,
    dueDate: "Today",
    assignees: ["/avatars/04.png", "/avatars/05.png"],
  },
  {
    id: "4",
    columnId: "in-progress",
    content: "Fix navigation bug on mobile",
    priority: "low",
    tags: ["Bug", "Mobile"],
    comments: 0,
    attachments: 0,
    assignees: ["/avatars/01.png"],
  },
  {
    id: "5",
    columnId: "review",
    content: "Update documentation",
    priority: "medium",
    tags: ["Docs"],
    comments: 2,
    attachments: 1,
    dueDate: "Yesterday",
    assignees: ["/avatars/02.png"],
  },
  {
    id: "6",
    columnId: "done",
    content: "Release v1.0.0",
    priority: "high",
    tags: ["Release"],
    comments: 12,
    attachments: 4,
    dueDate: "Last Week",
    assignees: ["/avatars/01.png", "/avatars/02.png", "/avatars/03.png"],
  },
];

// --- Components ---

export function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3, // 3px movement required before drag starts
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  const filteredTasks = useMemo(() => {
    if (!searchQuery) return tasks;
    return tasks.filter((task) =>
      task.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, searchQuery]);

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    // Im dropping a Task over another Task
    if (isActiveTask && isOverTask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
          tasks[activeIndex].columnId = tasks[overIndex].columnId;
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverColumn = over.data.current?.type === "Column";

    // Im dropping a Task over a column
    if (isActiveTask && isOverColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        tasks[activeIndex].columnId = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveColumn = active.data.current?.type === "Column";
    if (isActiveColumn) {
      setColumns((columns) => {
        const activeIndex = columns.findIndex((col) => col.id === activeId);
        const overIndex = columns.findIndex((col) => col.id === overId);
        return arrayMove(columns, activeIndex, overIndex);
      });
    }
  }

  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col gap-6 overflow-hidden bg-background p-6">
      {/* Glassmorphism background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>
      {/* Header */}
      <div className="relative flex flex-col gap-4 rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-60" />
        <div className="relative z-10">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Product Roadmap
          </h1>
          <p className="text-foreground/60">
            Manage tasks, track progress, and collaborate with your team.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-foreground/40" />
            <Input
              placeholder="Search tasks..."
              className="w-[200px] pl-9 bg-background/60 border-border/50 backdrop-blur-md focus:bg-background/80 focus:border-border/70 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/60 border-border/50 backdrop-blur-md hover:bg-background/80"
          >
            <Filter className="h-4 w-4 text-foreground/70" />
          </Button>
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Plus className="h-4 w-4" />
            New Task
          </Button>
        </div>
      </div>

      {/* Board */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
      >
        <div className="flex h-full gap-6 overflow-x-auto pb-4">
          <SortableContext
            items={columnsId}
            strategy={horizontalListSortingStrategy}
          >
            {columns.map((col) => (
              <BoardColumn
                key={col.id}
                column={col}
                tasks={filteredTasks.filter((task) => task.columnId === col.id)}
              />
            ))}
          </SortableContext>
        </div>

        {/* Drag Overlay */}
        <DragOverlay dropAnimation={dropAnimation}>
          {activeColumn && (
            <BoardColumn
              column={activeColumn}
              tasks={tasks.filter((task) => task.columnId === activeColumn.id)}
              isOverlay
            />
          )}
          {activeTask && <TaskCard task={activeTask} isOverlay />}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
}

function BoardColumn({ column, tasks, isOverlay }: BoardColumnProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "group/column relative flex h-full w-[350px] min-w-[350px] flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/50 backdrop-blur-xl shadow-lg",
        isDragging && "opacity-50",
        isOverlay &&
          "rotate-2 scale-105 shadow-2xl cursor-grabbing bg-background/70"
      )}
    >
      {/* Gradient overlay for column */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/column:opacity-100" />

      {/* Column Header */}
      <div
        {...attributes}
        {...listeners}
        className="relative z-10 flex items-center justify-between border-b border-border/30 bg-background/30 p-4 backdrop-blur-sm cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary shadow-sm shadow-primary/20 backdrop-blur-sm">
            {tasks.length}
          </div>
          <h3 className="font-semibold text-foreground">{column.title}</h3>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-foreground/40 hover:text-foreground hover:bg-background/50"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Column Content */}
      <div className="relative z-10 flex flex-1 flex-col gap-3 p-3">
        <SortableContext
          items={tasksIds}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 border border-dashed border-border/30 text-foreground/60 hover:text-foreground hover:bg-background/60 hover:border-border/50 backdrop-blur-sm"
        >
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>
    </div>
  );
}

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

function TaskCard({ task, isOverlay }: TaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const priorityColors = {
    low: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    medium:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    high: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "group relative flex cursor-grab flex-col gap-3 overflow-hidden rounded-xl border border-border/40 bg-background/70 p-4 shadow-lg backdrop-blur-xl transition-all hover:border-border/60 hover:shadow-xl hover:-translate-y-1 active:cursor-grabbing",
        isDragging && "opacity-30",
        isOverlay &&
          "rotate-2 scale-105 shadow-2xl cursor-grabbing opacity-100 bg-background/90 backdrop-blur-xl z-50"
      )}
    >
      {/* Gradient overlay for card */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header / Tags */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-wrap gap-1.5">
          <Badge
            variant="outline"
            className={cn(
              "border px-1.5 py-0.5 text-[10px] uppercase tracking-wider backdrop-blur-sm",
              priorityColors[task.priority]
            )}
          >
            {task.priority}
          </Badge>
          {task.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground/80 px-1.5 py-0.5 text-[10px] backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <MoreHorizontal className="h-3 w-3" />
        </Button>
      </div>

      {/* Content */}
      <p className="relative z-10 text-sm font-medium text-foreground leading-relaxed">
        {task.content}
      </p>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between pt-1">
        <div className="flex items-center gap-3 text-xs text-foreground/50">
          {task.dueDate && (
            <div
              className={cn(
                "flex items-center gap-1",
                task.priority === "high" && "text-red-500/80"
              )}
            >
              <Clock className="h-3 w-3" />
              <span>{task.dueDate}</span>
            </div>
          )}
          {(task.comments > 0 || task.attachments > 0) && (
            <div className="flex items-center gap-2">
              {task.comments > 0 && (
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  <span>{task.comments}</span>
                </div>
              )}
              {task.attachments > 0 && (
                <div className="flex items-center gap-1">
                  <Paperclip className="h-3 w-3" />
                  <span>{task.attachments}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Assignees */}
        {task.assignees.length > 0 && (
          <div className="flex -space-x-2">
            {task.assignees.map((avatar, i) => (
              <Avatar key={i} className="h-6 w-6 border-2 border-background">
                <AvatarImage src={avatar} />
                <AvatarFallback className="text-[8px] bg-primary/10 text-primary">
                  U{i + 1}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
