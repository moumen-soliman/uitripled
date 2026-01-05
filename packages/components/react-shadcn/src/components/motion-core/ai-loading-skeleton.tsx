"use client";

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
