"use client";

import { cn } from "@uitripled/utils";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";
import { type ReactNode, useState, useCallback, useEffect, useRef } from "react";

interface FolderAnimationProps {
  /**
   * Duration of the animation cycle in seconds.
   * Default: 3
   */
  animationDuration?: number;
  /**
   * Custom folder icon to display. If not provided, a default folder icon is rendered.
   */
  folderIcon?: ReactNode;
  /**
   * Content to display in the card footer.
   */
  children?: ReactNode;
  /**
   * Additional CSS classes for the container.
   */
  className?: string;
  /**
   * Accessible label for the animation area.
   */
  ariaLabel?: string;
}

export function FolderAnimation({
  animationDuration = 3,
  folderIcon,
  children,
  className,
  ariaLabel = "Animated folder illustration",
}: FolderAnimationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const blurControls = useAnimationControls();
  const isAnimatingRef = useRef(false);
  const shouldStopRef = useRef(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleFocus = useCallback(() => setIsHovered(true), []);
  const handleBlur = useCallback(() => setIsHovered(false), []);

  // Animation sequence: center → right → (wrap to left) → center → repeat
  const runAnimation = useCallback(async () => {
    if (prefersReducedMotion) return;

    isAnimatingRef.current = true;
    shouldStopRef.current = false;

    while (!shouldStopRef.current) {
      // Phase 1: Center to right (exit right with blur)
      await Promise.all([
        controls.start({
          x: "150%",
          opacity: [1, 1, 0],
          transition: {
            duration: animationDuration / 2,
            ease: "easeIn",
            times: [0, 0.7, 1],
          },
        }),
        blurControls.start({
          filter: ["blur(0px)", "blur(0px)", "blur(8px)", "blur(16px)"],
          transition: {
            duration: animationDuration / 2,
            ease: "easeIn",
            times: [0, 0.5, 0.75, 1],
          },
        }),
      ]);

      if (shouldStopRef.current) break;

      // Instantly move to left (off-screen)
      await controls.set({ x: "-150%", opacity: 0 });
      await blurControls.set({ filter: "blur(16px)" });

      if (shouldStopRef.current) break;

      // Phase 2: Left to center (enter from left, deblur)
      await Promise.all([
        controls.start({
          x: "0%",
          opacity: [0, 1, 1],
          transition: {
            duration: animationDuration / 2,
            ease: "easeOut",
            times: [0, 0.3, 1],
          },
        }),
        blurControls.start({
          filter: ["blur(16px)", "blur(8px)", "blur(0px)", "blur(0px)"],
          transition: {
            duration: animationDuration / 2,
            ease: "easeOut",
            times: [0, 0.25, 0.5, 1],
          },
        }),
      ]);

      if (shouldStopRef.current) break;

      // Brief pause at center
      await new Promise((resolve) => setTimeout(resolve, 400));
    }

    isAnimatingRef.current = false;
  }, [controls, blurControls, animationDuration, prefersReducedMotion]);

  // Return to center smoothly
  const returnToCenter = useCallback(async () => {
    shouldStopRef.current = true;

    await Promise.all([
      controls.start({
        x: "0%",
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth deceleration
        },
      }),
      blurControls.start({
        filter: "blur(0px)",
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }),
    ]);

    isAnimatingRef.current = false;
  }, [controls, blurControls]);

  useEffect(() => {
    if (isHovered && !prefersReducedMotion) {
      runAnimation();
    } else {
      returnToCenter();
    }
  }, [isHovered, prefersReducedMotion, runAnimation, returnToCenter]);

  // Set initial position
  useEffect(() => {
    controls.set({ x: "0%", opacity: 1 });
    blurControls.set({ filter: "blur(0px)" });
  }, [controls, blurControls]);

  return (
    <div className={cn(className)}>
      {/* Card Container */}
      <div className="bg-card p-2 rounded-lg overflow-hidden w-full border border-border">
        {/* Animation Area */}
        <div
          className="relative w-full h-64 bg-muted overflow-hidden flex items-center justify-center rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
          role="img"
          aria-label={ariaLabel}
        >
          {/* Animated Icon/Folder */}
          <motion.div
            animate={controls}
            className="absolute"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              animate={blurControls}
              className="relative"
              style={{ willChange: "filter" }}
            >
              {folderIcon ? (
                <div className="flex items-center justify-center">{folderIcon}</div>
              ) : (
                <div className="relative w-28 h-24">
                  {/* Folder Back */}
                  <div className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20">
                    {/* Tab */}
                  </div>

                  {/* Files inside */}
                  <div className="absolute bottom-2 left-2 right-2 h-20 bg-background border border-border rounded shadow-sm transform -rotate-3 origin-bottom-left flex flex-col p-2 gap-1.5">
                    <div className="w-8 h-1 bg-muted rounded-full" />
                    <div className="w-full h-1 bg-muted/50 rounded-full" />
                    <div className="w-16 h-1 bg-muted/50 rounded-full" />
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 h-20 bg-background border border-border rounded shadow-sm transform rotate-3 origin-bottom-right z-10 flex flex-col p-2 gap-1.5">
                    <div className="flex gap-2 items-center mb-1">
                      <div className="w-4 h-4 bg-primary/10 rounded-full" />
                      <div className="w-10 h-1 bg-muted rounded-full" />
                    </div>
                    <div className="w-full h-1 bg-muted/50 rounded-full" />
                    <div className="w-3/4 h-1 bg-muted/50 rounded-full" />
                  </div>

                  {/* Folder Front */}
                  <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-md rounded-lg border-t border-white/20 border-x border-primary/10 shadow-lg z-20 flex items-center justify-center">
                    <div className="w-8 h-1 bg-primary/20 rounded-full" />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Card Footer */}
        {children && <div className="p-3 mt-5">{children}</div>}
      </div>
    </div>
  );
}
