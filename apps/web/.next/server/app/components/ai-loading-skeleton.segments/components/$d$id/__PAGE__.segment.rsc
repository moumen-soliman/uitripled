1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:T7e7,"use client";

import { motion } from "framer-motion";

type SkeletonItemProps = {
  width?: string;
  height?: string;
  className?: string;
};

function SkeletonItem({
  width = "100%",
  height = "1rem",
  className = "",
}: SkeletonItemProps) {
  return (
    <div className={`rounded bg-muted ${className}`} style={{ width, height }}>
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          ],
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="h-full w-full"
      />
    </div>
  );
}

type AILoadingSkeletonProps = {
  lines?: number;
};

export function AILoadingSkeleton({ lines = 4 }: AILoadingSkeletonProps) {
  return (
    <div className="w-full max-w-md space-y-3 rounded-2xl border border-border bg-card p-6">
      {/* Avatar */}
      <div className="flex items-center gap-3">
        <SkeletonItem width="3rem" height="3rem" className="rounded-full" />
        <div className="flex-1 space-y-2">
          <SkeletonItem width="60%" />
          <SkeletonItem width="40%" />
        </div>
      </div>

      {/* Content lines */}
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <SkeletonItem width={index === lines - 1 ? "70%" : "100%"} />
          </motion.div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <SkeletonItem width="4rem" height="2rem" className="rounded-md" />
        <SkeletonItem width="4rem" height="2rem" className="rounded-md" />
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"ai-loading-skeleton"}],[["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
