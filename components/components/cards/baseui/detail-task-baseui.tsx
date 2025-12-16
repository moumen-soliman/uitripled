"use client";

import { NativeButton } from "@/components/native/baseui/native-button-baseui";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bold,
  ChevronDown,
  Italic,
  List,
  ListOrdered,
  Plus,
  RotateCcw,
  Save,
  Underline,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Priority = "high" | "medium" | "low";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

const allMembers: TeamMember[] = [
  {
    id: "sophia",
    name: "Sophia Williams",
    role: "Product Designer",
    initials: "SW",
    accent: "ring-foreground text-foreground",
  },
  {
    id: "liam",
    name: "Liam Johnson",
    role: "Design Manager",
    initials: "LJ",
    accent: "ring-foreground text-foreground",
  },
  {
    id: "olivia",
    name: "Olivia Smith",
    role: "UX Researcher",
    initials: "OS",
    accent: "ring-foreground text-foreground",
  },
  {
    id: "mia",
    name: "Mia Chen",
    role: "Product Owner",
    initials: "MC",
    accent: "ring-foreground text-foreground",
  },
  {
    id: "ethan",
    name: "Ethan Davis",
    role: "UI Engineer",
    initials: "ED",
    accent: "ring-foreground text-foreground",
  },
];

const priorityMap: Record<
  Priority,
  { label: string; badge: string; dot: string; description: string }
> = {
  high: {
    label: "High",
    badge:
      "border border-destructive/40 bg-destructive/20 text-destructive dark:text-red-400",
    dot: "bg-destructive",
    description: "Requires immediate focus and dedicated resources",
  },
  medium: {
    label: "Medium",
    badge:
      "border border-amber-500/30 bg-amber-500/20 text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    description: "Important but not blocking other work",
  },
  low: {
    label: "Low",
    badge:
      "border border-emerald-500/30 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    description: "Nice-to-have improvements to schedule later",
  },
};

const defaultDescription =
  "The goal is to update the current design system with the latest components and styles. This includes reviewing existing elements, identifying areas for improvement, and implementing changes to ensure consistency and usability across all platforms.";
const maxDescriptionLength = 200;

export function DetailTaskCardBaseUI() {
  const [title, setTitle] = useState("Edit Design System");
  const [priority, setPriority] = useState<Priority>("high");
  const [assignees, setAssignees] = useState<TeamMember[]>(
    allMembers.slice(0, 3)
  );
  const [description, setDescription] = useState(defaultDescription);
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const remainingCharacters = maxDescriptionLength - description.length;

  const availableMembers = useMemo(
    () =>
      allMembers.filter(
        (member) => !assignees.some((assigned) => assigned.id === member.id)
      ),
    [assignees]
  );

  const handleRemoveAssignee = (id: string) => {
    setAssignees((prev) => prev.filter((member) => member.id !== id));
  };

  const handleAddPerson = () => {
    if (availableMembers.length === 0) return;
    const [nextMember] = availableMembers;
    setAssignees((prev) => [...prev, nextMember]);
  };

  const handleReset = () => {
    setTitle("Edit Design System");
    setPriority("high");
    setAssignees(allMembers.slice(0, 3));
    setDescription(defaultDescription);
    setReminderEnabled(true);
    setIsSaved(false);
  };

  const handleSave = () => {
    if (isSaving) return;
    setIsSaving(true);
    setIsSaved(false);
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }, 900);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toolbarIcons = [Bold, Italic, Underline, List, ListOrdered];

  return (
    <div className="">
      {/* Card replacement */}
      <div className="group relative w-full overflow-hidden rounded-2xl border border-border/40 bg-background/60 text-foreground backdrop-blur transition-all hover:border-border/60 hover:shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

        {/* CardHeader replacement */}
        <div className="relative flex flex-col gap-3 border-b border-border/40 bg-background/40 px-6 py-6">
          {/* Badge replacement */}
          <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            Task Manager
          </span>
          {/* CardTitle replacement */}
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground">
            Detail Task Overview
          </h3>
          {/* CardDescription replacement */}
          <p className="text-sm text-foreground/70">
            Keep your task aligned with team priorities and deliverables.
          </p>
        </div>

        {/* CardContent replacement */}
        <div className="space-y-10 px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="space-y-3">
              <label
                htmlFor="task-title"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
              >
                Title Task
              </label>
              {/* Input replacement */}
              <input
                id="task-title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="flex h-10 w-full rounded-xl border border-border/40 bg-background/40 px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-border/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-describedby="task-title-description"
              />
              <p
                id="task-title-description"
                className="text-xs text-foreground/60"
              >
                Keep it short and goal oriented.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Priority
              </span>
              {/* DropdownMenu replacement */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl border border-border/40 bg-background/40 px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-border/60 hover:bg-background/60"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${priorityMap[priority].dot}`}
                      aria-hidden="true"
                    />
                    <span>{priorityMap[priority].label}</span>
                  </span>
                  <ChevronDown
                    className="h-4 w-4 text-foreground/60"
                    aria-hidden="true"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-44 rounded-xl border border-border/40 bg-background/70 p-1 backdrop-blur shadow-lg">
                    {(Object.keys(priorityMap) as Priority[]).map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setPriority(option);
                          setDropdownOpen(false);
                        }}
                        className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-background/60 hover:text-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${priorityMap[option].dot}`}
                            aria-hidden="true"
                          />
                          {priorityMap[option].label}
                        </span>
                        {priority === option ? (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] ${priorityMap[option].badge}`}
                          >
                            Selected
                          </span>
                        ) : null}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs text-foreground/60">
                {priorityMap[priority].description}
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Assign Task To
              </span>
              <span className="rounded-full border border-border/40 bg-background/50 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/70 backdrop-blur transition-colors hover:border-border/60 hover:bg-background/70 hover:text-foreground">
                Team
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <AnimatePresence>
                {assignees.map((member) => (
                  <motion.div
                    layout
                    key={member.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/40 px-3 py-2 backdrop-blur transition-colors hover:border-border/60"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full bg-background/70 text-xs font-semibold tracking-tight ring-1 ring-border/40 ring-offset-2 ring-offset-background ${member.accent}`}
                    >
                      {member.initials}
                    </span>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-medium text-foreground">
                        {member.name}
                      </span>
                      <span className="text-xs text-foreground/60">
                        {member.role}
                      </span>
                    </div>
                    {/* Button replacement */}
                    <button
                      type="button"
                      onClick={() => handleRemoveAssignee(member.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-foreground/60 transition-colors hover:bg-background/60 hover:text-foreground"
                      aria-label={`Remove ${member.name} from this task`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              <button
                type="button"
                onClick={handleAddPerson}
                disabled={availableMembers.length === 0}
                className="flex items-center gap-2 rounded-xl border border-dashed border-border/50 bg-transparent px-3 py-2 text-sm text-foreground/80 transition-all hover:border-border/70 hover:bg-background/40 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Plus className="h-4 w-4" />
                Add another person
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Description
              </span>
              <span className="text-xs text-foreground/60">
                {Math.max(0, remainingCharacters)} / {maxDescriptionLength}
              </span>
            </div>

            <div className="rounded-2xl border border-border/40 bg-background/40 backdrop-blur">
              <div className="flex items-center gap-1 border-b border-border/40 px-3 py-2 text-foreground/60">
                {toolbarIcons.map((Icon, index) => (
                  <button
                    key={Icon.displayName ?? index}
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/60 transition-colors hover:bg-background/60 hover:text-foreground"
                    aria-label={`Formatting option ${Icon.displayName ?? index + 1}`}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
              {/* Textarea replacement */}
              <textarea
                value={description}
                onChange={(event) =>
                  setDescription(
                    event.target.value.slice(0, maxDescriptionLength)
                  )
                }
                className="h-32 w-full resize-none border-0 bg-transparent px-3 py-3 text-sm text-foreground/80 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-label="Task description"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-background/40 px-4 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                role="switch"
                aria-label="Toggle reminder task"
                aria-checked={reminderEnabled}
                onClick={() => setReminderEnabled((prev) => !prev)}
                className={`relative flex h-6 w-12 items-center rounded-full border border-border/50 transition-all ${
                  reminderEnabled ? "bg-primary/20" : "bg-background/60"
                }`}
              >
                <motion.span
                  layout
                  className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary shadow-lg"
                  animate={{ x: reminderEnabled ? 22 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              </motion.button>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Reminder Task
                </p>
                <p className="text-xs text-foreground/60">
                  {reminderEnabled
                    ? "We will notify the assignees 24 hours before the due date."
                    : "Enable reminders to keep everyone on track."}
                </p>
              </div>
            </div>

            <span className="rounded-full border border-border/40 bg-background/60 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/70 backdrop-blur transition-colors hover:border-border/60 hover:bg-background/70 hover:text-foreground">
              Sprint Q4
            </span>
          </div>
        </div>

        {/* CardFooter replacement */}
        <div className="flex flex-col gap-4 border-t border-border/40 bg-background/50 px-6 py-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            <span>Need to start over?</span>
            <button
              type="button"
              className="px-0 text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          <div className="flex items-center gap-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {isSaved ? (
                <motion.span
                  key="saved"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-emerald-600 dark:text-emerald-400"
                >
                  Saved!
                </motion.span>
              ) : null}
            </AnimatePresence>
            <NativeButton
              variant="default"
              size="default"
              onClick={handleSave}
              disabled={isSaving}
              loading={isSaving}
            >
              <Save className="h-4 w-4" aria-hidden="true" />
              {isSaving ? "Saving..." : "Save Changes"}
            </NativeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
