"use client";

import { useEffect, useRef, useState } from "react";

interface MagnifierProps {
  enabled: boolean;
  zoom?: number;
  size?: number;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export function Magnifier({
  enabled,
  zoom = 2.5,
  size = 200,
  children,
  className = "",
  onClose,
}: MagnifierProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    const timeout = setTimeout(updateDimensions, 0);
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timeout);
    };
  }, [enabled]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    if (enabled) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onClose]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !lensRef.current || !contentRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Move the lens
    lensRef.current.style.left = `${x - size / 2}px`;
    lensRef.current.style.top = `${y - size / 2}px`;

    // Move the content inside the lens
    // The content needs to be positioned such that the point under cursor (x,y)
    // is at the center of the lens.
    // transform-origin is 0 0.
    // Content is scaled by zoom.
    // The point (x,y) becomes (x*zoom, y*zoom).
    // We want this point to be at (size/2, size/2) relative to the lens.
    // So: left + x*zoom = size/2  => left = size/2 - x*zoom
    contentRef.current.style.left = `${size / 2 - x * zoom}px`;
    contentRef.current.style.top = `${size / 2 - y * zoom}px`;
  };

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-50 cursor-none ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={lensRef}
        className={`absolute pointer-events-none transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: size,
          height: size,
          left: 0,
          top: 0,
          // Hardware acceleration for smoother movement
          transform: "translate3d(0,0,0)",
          willChange: "left, top",
        }}
      >
        {/* Magnifier Circle */}
        <div className="w-full h-full rounded-full border-2 border-white/50 bg-background shadow-2xl overflow-hidden relative z-10">
          <div
            ref={contentRef}
            style={{
              width: dimensions.width,
              height: dimensions.height,
              position: "absolute",
              transform: `scale(${zoom})`,
              transformOrigin: "0 0",
              willChange: "left, top",
            }}
          >
            {children}
          </div>
        </div>

        {/* Helper Text */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/70 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-md">
          Press Esc to close
        </div>
      </div>
    </div>
  );
}
