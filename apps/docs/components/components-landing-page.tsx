"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function ComponentsLandingPage() {
  return (
    <main className="flex h-full flex-1 flex-col items-center justify-center overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex w-full max-w-md flex-col items-center gap-4 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground">
          <Menu className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold sm:text-xl">
            Browse the component library
          </h1>
          <p className="text-sm text-muted-foreground">
            Select an animation from the sidebar on desktop, or tap the
            <span className="mx-1 inline-flex items-center gap-1 rounded border border-border bg-background px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <Menu className="h-3.5 w-3.5" />
              Browse
            </span>
            button at the top on mobile to explore the collection.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
