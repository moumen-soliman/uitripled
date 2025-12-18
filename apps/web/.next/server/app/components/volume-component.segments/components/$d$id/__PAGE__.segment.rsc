1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T1292,"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  className?: string;
  label?: string;
}

export function VolumeComponent({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  onChange,
  className,
  label = "Volume",
}: SliderProps) {
  const [value, setValue] = useState(defaultValue);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const width = useMotionValue(0);

  // Convert value to position
  const valueToPosition = (val: number, trackWidth: number) => {
    const percentage = (val - min) / (max - min);
    return percentage * trackWidth;
  };

  // Convert position to value
  const positionToValue = (pos: number, trackWidth: number) => {
    const percentage = pos / trackWidth;
    const rawValue = percentage * (max - min) + min;
    const steppedValue = Math.round(rawValue / step) * step;
    return Math.min(Math.max(steppedValue, min), max);
  };

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.offsetWidth;
      width.set(trackWidth);
      x.set(valueToPosition(value, trackWidth));
    }
  }, [value, min, max, width, x]);

  const handleDrag = (event: any, info: any) => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.offsetWidth;
      const newValue = positionToValue(x.get(), trackWidth);
      if (newValue !== value) {
        setValue(newValue);
        onChange?.(newValue);
      }
    }
  };

  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const trackWidth = rect.width;
      const newValue = positionToValue(clickX, trackWidth);

      setValue(newValue);
      onChange?.(newValue);

      animate(x, clickX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  };

  const fillWidth = useTransform(x, (latest) => {
    return Math.max(0, latest);
  });

  return (
    <div className={cn("w-full max-w-md p-6", className)}>
      <div className="flex justify-between items-center mb-4">
        <label className="text-sm font-medium text-foreground/80">
          {label}
        </label>
        <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">
          {value}
        </span>
      </div>

      <div
        className="relative h-6 flex items-center cursor-pointer group"
        ref={trackRef}
        onClick={handleTrackClick}
      >
        {/* Track Background */}
        <div className="absolute w-full h-2 bg-secondary rounded-full overflow-hidden">
          {/* Fill */}
          <motion.div
            className="h-full bg-primary"
            style={{ width: fillWidth }}
          />
        </div>

        {/* Drag Handle */}
        <motion.div
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={handleDrag}
          style={{ x }}
          className="absolute top-1/2 -translate-y-1/2 left-0 -ml-3 z-10"
        >
          <motion.div
            className={cn(
              "w-6 h-6 rounded-full bg-background border-2 border-primary shadow-lg flex items-center justify-center transition-colors",
              isDragging
                ? "scale-110 border-primary"
                : "group-hover:border-primary/80"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
          </motion.div>

          {/* Tooltip on Drag */}
          {isDragging && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -30 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-md border border-border"
            >
              {value}
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"volume-component"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
