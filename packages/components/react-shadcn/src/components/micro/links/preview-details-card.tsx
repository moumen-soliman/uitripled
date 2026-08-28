"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { useId } from "react";

import { cn } from "@/lib/utils";

type PreviewHighlight = {
  label: string;
  value: string;
};

type PreviewDetailsCardProps = {
  href?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  badge?: string | null;
  highlights?: PreviewHighlight[];
  className?: string;
};

const DEFAULT_HIGHLIGHTS: PreviewHighlight[] = [
  { label: "Owner", value: "Avery Nolan" },
  { label: "Status", value: "Sprint ready" },
  { label: "Last update", value: "4 hours ago" },
];

export function PreviewDetailsCard({
  href = "#",
  eyebrow = "Workspace",
  title = "Preview Details Card",
  description = "Hover or focus to surface key workspace traits before diving into the full view.",
  badge = "Instant",
  highlights = DEFAULT_HIGHLIGHTS,
  className,
}: PreviewDetailsCardProps) {
  const titleId = useId();

  return (
    <article
      className={cn(
        "group relative isolate w-full rounded-2xl border border-border bg-card p-6",
        "shadow-[0_1px_2px_-1px_oklch(0_0_0/0.08),0_16px_40px_-24px_oklch(0_0_0/0.24)]",
        "transition-[border-color,box-shadow] duration-200 ease-[cubic-bezier(0.2,0,0,1)]",
        "hover:border-foreground/25",
        // The ring lives on the card, because the link's own box is only the title.
        "has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-background",
        "motion-reduce:transition-none",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex size-8 items-center justify-center rounded-full bg-muted text-foreground">
            <Sparkles className="size-4" strokeWidth={1.5} aria-hidden />
          </span>
          {eyebrow}
        </span>
        <ArrowUpRight
          className={cn(
            "size-4 shrink-0 text-muted-foreground",
            "transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)]",
            "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            "motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
          )}
          aria-hidden
        />
      </div>

      <h3
        id={titleId}
        className="mt-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
      >
        {/* Stretched link: the whole card is clickable, but the accessible name
            stays just the title. */}
        <a
          href={href}
          className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none"
        >
          {title}
        </a>
      </h3>

      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/*
        Always in the DOM, so assistive tech reads it without a live region and
        without depending on a hover it cannot perform. Sighted users get the
        reveal via a pure-CSS grid-row transition, which stays interruptible
        mid-animation in a way an AnimatePresence mount cannot.
      */}
      <div
        className={cn(
          "grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-[280ms] ease-[cubic-bezier(0.2,0,0,1)]",
          "opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100",
          "group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100",
          "motion-reduce:transition-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="mt-5 border-t border-border pt-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Preview
              </span>
              {badge && (
                <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground">
                  {badge}
                </span>
              )}
            </div>

            <dl className="mt-3 space-y-2.5">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4"
                >
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}
