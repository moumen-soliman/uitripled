"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate } from "framer-motion";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface NativeMarqueeItem {
  id: string;
  icon?: React.ReactNode;
  label: string;
}

interface NativeMarqueeProps {
  className?: string;
  speed?: number;
  items: NativeMarqueeItem[];
  gap?: number;
  isVertical?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
  pauseOnTouch?: boolean;
}

function NativeMarquee({
  items,
  speed = 10,
  gap = 2,
  isVertical = false,
  reverse = false,
  pauseOnHover = false,
  pauseOnTouch = false,
  className = "",
}: NativeMarqueeProps) {
  const { containerRef, marqueeRef, multiplier, isMounted } = useMarquee({
    isVertical,
  });

  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const anim1Ref = useRef<any>(null);
  const anim2Ref = useRef<any>(null);

  const duration = 100 / speed;

  useEffect(() => {
    if (!isMounted || !scope1.current || !scope2.current) return;

    const axis = isVertical ? "y" : "x";
    const from = reverse ? -100 : 0;
    const to = reverse ? 0 : -100;

    const start = () => {
      anim1Ref.current = animate1(
        scope1.current,
        { [axis]: [from + "%", to + "%"] },
        { duration, ease: "linear", repeat: Infinity }
      );
      anim2Ref.current = animate2(
        scope2.current,
        { [axis]: [from + "%", to + "%"] },
        { duration, ease: "linear", repeat: Infinity }
      );
    };

    const animationFrame = requestAnimationFrame(start);

    return () => cancelAnimationFrame(animationFrame);
  }, [isMounted, isVertical, speed, reverse]);

  const content = useMemo(
    () => (
      <ul className={`flex items-center gap-2 ${isVertical ? "flex-col" : ""}`}>
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              "flex items-center gap-2 ",
              "border border-border bg-background px-4 py-2 rounded-full text-sm text-muted-foreground whitespace-nowrap",
              "hover:bg-muted hover:border-foreground/20",
              isVertical ? "w-full justify-center" : ""
            )}
          >
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
    ),
    [items, isVertical]
  );

  const copies = useCallback(
    (multiplier: number) => {
      const arraySize = multiplier >= 0 ? multiplier : 0;
      return [...Array(arraySize)].map((_, i) => (
        <span key={i} aria-hidden="true" className="shrink-0">
          {content}
        </span>
      ));
    },
    [items]
  );

  const pause = () => {
    anim1Ref.current?.pause();
    anim2Ref.current?.pause();
  };

  const resume = () => {
    anim1Ref.current?.play();
    anim2Ref.current?.play();
  };

  const hoverProps = pauseOnHover
    ? { onMouseEnter: pause, onMouseLeave: resume }
    : {};
  const touchProps = pauseOnTouch
    ? { onTouchStart: pause, onTouchEnd: resume }
    : {};

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex shrink-0 grow-0 basis-auto overflow-hidden",
        isVertical ? "flex-col h-full" : "w-full ",
        className
      )}
      {...hoverProps}
      {...touchProps}
    >
      <motion.div ref={scope1}>
        <div
          className={cn(
            "flex grow-0 shrink-0 basis-auto min-w-min",
            isVertical ? "flex-col" : ""
          )}
          style={{
            marginRight: isVertical ? 0 : `${gap}px`,
            marginBottom: isVertical ? `${gap}px` : 0,
            gap: `${gap}px`,
          }}
        >
          {/* to match the other span elements paddings */}
          <span ref={marqueeRef} className="shrink-0">
            {content}
          </span>
          {copies(multiplier - 1)}
        </div>
      </motion.div>
      <motion.div ref={scope2}>
        <div
          className={cn(
            "flex grow-0 shrink-0 basis-auto min-w-min",
            isVertical ? "flex-col" : ""
          )}
          aria-hidden="true"
          style={{
            marginRight: isVertical ? 0 : `${gap}px`,
            marginBottom: isVertical ? `${gap}px` : 0,
            gap: `${gap}px`,
          }}
        >
          {copies(multiplier)}
        </div>
      </motion.div>
    </div>
  );
}

function useMarquee(
  { isVertical = false }: { isVertical?: boolean } = { isVertical: false }
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const calculateMultiplier = useCallback(() => {
    if (!containerRef.current || !marqueeRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const marqueeRect = marqueeRef.current.getBoundingClientRect();

    let marqueeSize: number;
    let containerSize: number;
    let scale: number;
    if (isVertical) {
      containerSize = containerRect.height;
      marqueeSize = marqueeRect.height;
      scale = Math.ceil(containerSize / marqueeSize);
    } else {
      containerSize = containerRect.width;
      marqueeSize = marqueeRect.width;
      scale = Math.min(Math.ceil(containerSize / marqueeSize), 20);
    }
    setMultiplier(marqueeSize < containerSize ? scale : 1);
  }, [isVertical]);

  // ensure the marquee is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    calculateMultiplier();
    if (marqueeRef.current && containerRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        calculateMultiplier();
      });
      resizeObserver.observe(marqueeRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [calculateMultiplier, isMounted]);

  return { containerRef, marqueeRef, multiplier, isMounted };
}

function SideFadeGradients({ isVertical = false }: { isVertical?: boolean }) {
  return (
    <>
      <div
        className={cn(
          "absolute z-10 pointer-events-none",
          isVertical
            ? "inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
            : "inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"
        )}
      />
      <div
        className={cn(
          "absolute z-10 pointer-events-none",
          isVertical
            ? "inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
            : "inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"
        )}
      />
    </>
  );
}
export { NativeMarquee, SideFadeGradients, useMarquee };
