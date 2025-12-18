1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:Ta24,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"interactive-timeline"}],[["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
