"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TimelineItem = {
  id: string;
  title: string;
  description: string;
  date?: string;
};

type InteractiveTimelineProps = {
  items?: TimelineItem[];
};

function TimelineItemComponent({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <div ref={itemRef} className="relative flex gap-6">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          itemInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
        }
        transition={{ delay: index * 0.2, duration: 0.3 }}
        className="absolute left-4 top-2 h-4 w-4 rounded-full border-2 border-primary bg-primary"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          delay: index * 0.2 + 0.3,
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="ml-12 flex-1 rounded-lg border border-border bg-card p-4"
      >
        {item.date && (
          <span className="text-xs text-muted-foreground">{item.date}</span>
        )}
        <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
      </motion.div>
    </div>
  );
}

export function InteractiveTimeline({
  items = [
    { id: "1", title: "Started", description: "Project began", date: "2024" },
    {
      id: "2",
      title: "Development",
      description: "Active development phase",
      date: "2024",
    },
    { id: "3", title: "Launch", description: "Project launched", date: "2024" },
  ],
}: InteractiveTimelineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative w-full max-w-2xl">
      {/* Timeline line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-6 top-0 h-full w-0.5 origin-top bg-border"
      />

      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItemComponent key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
