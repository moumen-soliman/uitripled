"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  radius: number;
  color: string;
}

const COLORS = [
  "#FF0080", // Pink
  "#7928CA", // Purple
  "#0070F3", // Blue
  "#00DFD8", // Cyan
  "#FF4D4D", // Red
  "#FFD700", // Gold
];

export const LiquidCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, moved: false });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.moved = true;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const addPoint = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.5;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      pointsRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        radius: Math.random() * 20 + 10, // Random radius between 10 and 30
        color,
      });
    };

    const animate = () => {
      // Clear with a slight fade for trails, or full clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new points if mouse moved
      if (mouseRef.current.moved) {
        const dist = Math.hypot(
          mouseRef.current.x - mouseRef.current.lastX,
          mouseRef.current.y - mouseRef.current.lastY
        );

        // Interpolate points for smooth lines
        if (dist > 0) {
          const steps = Math.min(dist, 20); // Limit steps to avoid lag
          for (let i = 0; i < steps; i += 2) {
            const t = i / steps;
            const x =
              mouseRef.current.lastX +
              (mouseRef.current.x - mouseRef.current.lastX) * t;
            const y =
              mouseRef.current.lastY +
              (mouseRef.current.y - mouseRef.current.lastY) * t;
            // Only add points occasionally to avoid overcrowding
            if (Math.random() > 0.5) addPoint(x, y);
          }
        }

        mouseRef.current.lastX = mouseRef.current.x;
        mouseRef.current.lastY = mouseRef.current.y;
        mouseRef.current.moved = false; // Reset moved flag until next event
      } else {
        // If mouse stopped, we update last position to current to be safe
        mouseRef.current.lastX = mouseRef.current.x;
        mouseRef.current.lastY = mouseRef.current.y;
      }

      // Update and draw points
      for (let i = pointsRef.current.length - 1; i >= 0; i--) {
        const p = pointsRef.current[i];

        p.life -= 0.01; // Decay rate
        p.x += p.vx;
        p.y += p.vy;
        p.radius *= 0.99; // Shrink slightly

        if (p.life <= 0 || p.radius < 0.5) {
          pointsRef.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        // Use globalAlpha for fading
        ctx.globalAlpha = p.life;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* SVG Filter for the Gooey Effect */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-cursor-filter">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ filter: "url(#liquid-cursor-filter)" }}
      />
    </div>
  );
};
