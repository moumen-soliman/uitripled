"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useState } from "react";

export function ToastNotification() {
  const [isVisible, setIsVisible] = useState(false);

  const showToast = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <Button onClick={showToast}>Show Notification</Button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed right-4 top-4 z-50"
          >
            <Card className="flex w-80 items-start gap-3 p-4 shadow-2xl">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-500" />
              <div className="flex-1">
                <h4 className="font-semibold">Success!</h4>
                <p className="text-sm text-[var(--foreground)]/70">
                  Your changes have been saved.
                </p>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 rounded-sm opacity-70 hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
