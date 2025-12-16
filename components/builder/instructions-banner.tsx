"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";

type InstructionsBannerProps = {
  show: boolean;
  onHide: () => void;
};

export function InstructionsBanner({ show, onHide }: InstructionsBannerProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-border bg-muted/30"
        >
          <Card className="m-4 border-2 border-primary/20 bg-primary/5 p-4">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <div className="flex-1 space-y-2 text-sm">
                <h3 className="font-semibold text-foreground">
                  Important Notes
                </h3>
                <ul className="space-y-1.5 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      The builder is just for previewing, not a final production
                      setup
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      The builder is currently in beta and may have some bugs
                      and limitations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>The builder doesn&apos;t support auto-grid yet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Only blocks are allowed for use</span>
                  </li>
                </ul>
                <div className="flex justify-end">
                  <Button
                    variant="default"
                    className="flex justify-start"
                    size="sm"
                    onClick={onHide}
                  >
                    Hide
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
