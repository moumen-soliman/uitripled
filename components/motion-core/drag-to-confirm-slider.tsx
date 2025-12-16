"use client";

import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

type DragToConfirmSliderProps = {
  onConfirm?: () => void;
  label?: string;
  confirmText?: string;
};

export function DragToConfirmSlider({
  onConfirm,
  label = "Drag to confirm",
  confirmText = "Confirmed!",
}: DragToConfirmSliderProps) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  const progress = useTransform(x, [0, 200], [0, 100]);
  const opacity = useTransform(x, [0, 200], [1, 0]);
  const labelOpacity = useTransform(progress, [0, 100], [1, 0]);
  const width = useTransform(x, [0, 200], [48, 248]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const currentX = x.get();
    if (currentX >= 180) {
      setIsConfirmed(true);
      if (onConfirm) {
        setTimeout(() => onConfirm(), 300);
      }
    } else {
      x.set(0);
    }
    setIsDragging(false);
  };

  if (isConfirmed) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-primary-foreground"
      >
        <Check className="h-5 w-5" />
        <span className="ml-2 text-sm font-medium">{confirmText}</span>
      </motion.div>
    );
  }

  return (
    <div className="relative h-12 w-full max-w-xs overflow-hidden rounded-full border border-border bg-muted">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 200 }}
        dragElastic={0}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x, width }}
        className="absolute left-0 top-0 flex h-full cursor-grab items-center justify-center rounded-full bg-primary active:cursor-grabbing"
        whileDrag={{ scale: 1.05 }}
      >
        <motion.div style={{ opacity }} className="flex items-center gap-2">
          <span className="text-sm font-medium text-primary-foreground">→</span>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          style={{ opacity: labelOpacity }}
          className="text-sm font-medium text-muted-foreground"
        >
          {label}
        </motion.span>
      </div>
    </div>
  );
}
