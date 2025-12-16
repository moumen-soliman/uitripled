"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedProgress() {
  const progress = useMotionValue(0);
  const width = useTransform(progress, [0, 100], ["0%", "100%"]);
  const displayProgress = useTransform(progress, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    const animation = animate(progress, 75, {
      duration: 2,
      ease: "easeOut",
    });

    return animation.stop;
  }, [progress]);

  return (
    <div className="flex items-center justify-center p-12">
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-lg">Upload Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
            <motion.div
              style={{ width }}
              className="h-full bg-gradient-to-r from-accent to-slate-500"
            />
          </div>
          <motion.p className="mt-2 text-right text-sm text-[var(--foreground)]/70">
            {displayProgress}
          </motion.p>
        </CardContent>
      </Card>
    </div>
  );
}
