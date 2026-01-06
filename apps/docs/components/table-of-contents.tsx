"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    const tocItems: TocItem[] = headingElements.map((el) => {
      const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      if (!el.id) el.id = id;
      return {
        id,
        title: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      };
    }).filter(item => item.id !== "");

    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
        On this page
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              "text-sm transition-colors hover:text-foreground",
              item.level === 3 && "pl-4",
              activeId === item.id
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            <a href={`#${item.id}`} onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
