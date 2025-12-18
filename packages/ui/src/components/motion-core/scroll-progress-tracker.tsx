"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type ScrollProgressTrackerProps = {
  sections?: string[];
  height?: number;
};

export function ScrollProgressTracker({
  sections = [],
  height = 4,
}: ScrollProgressTrackerProps) {
  // Wrap in a container div to avoid fixed positioning issues in preview
  return (
    <div className="relative h-16 w-full">
      <ScrollProgressTrackerInner sections={sections} height={height} />
    </div>
  );
}

function ScrollProgressTrackerInner({
  sections = [],
  height = 4,
}: ScrollProgressTrackerProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (sections.length > 0) {
        const sectionIndex = Math.floor(latest * sections.length);
        if (sectionIndex !== currentSection) {
          setCurrentSection(sectionIndex);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, sections.length, currentSection]);

  const colorProgress = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(99, 102, 241)", "rgb(139, 92, 246)", "rgb(236, 72, 153)"]
  );

  return (
    <div className="relative h-1 w-full bg-background/50 backdrop-blur-sm">
      <motion.div
        style={{
          scaleX,
          backgroundColor: sections.length > 0 ? undefined : colorProgress,
        }}
        className="h-full origin-left"
      >
        {sections.length > 0 && (
          <motion.div
            style={{
              backgroundColor: colorProgress,
            }}
            className="h-full w-full"
          />
        )}
      </motion.div>

      {sections.length > 0 && (
        <motion.div
          style={{
            boxShadow:
              currentSection < sections.length
                ? `0 0 20px ${colorProgress.get()}`
                : "none",
          }}
          className="pointer-events-none absolute inset-0"
        />
      )}
    </div>
  );
}
