"use client";

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import type { GradientLayer } from "./types";

interface LayerRendererProps {
  layer: GradientLayer;
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
  isAnimating: boolean;
}

export function LayerRenderer({
  layer,
  smoothX,
  smoothY,
  isAnimating,
}: LayerRendererProps) {
  const x = useMotionTemplate`calc(${layer.x}% + ${smoothX}px * ${layer.speed * 50})`;
  const y = useMotionTemplate`calc(${layer.y}% + ${smoothY}px * ${layer.speed * 50})`;

  const getBackgroundStyle = () => {
    switch (layer.type) {
      case "radial":
        return { backgroundColor: layer.color };
      case "conic":
        return {
          background: `conic-gradient(from ${layer.rotation || 0}deg, ${layer.color}, transparent)`,
        };
      case "linear":
        return {
          background: `linear-gradient(${layer.rotation || 0}deg, ${layer.color}, ${layer.secondaryColor || "transparent"})`,
        };
      case "mesh":
        return {
          background: `radial-gradient(ellipse at 30% 30%, ${layer.color}, transparent 50%), radial-gradient(ellipse at 70% 70%, ${layer.secondaryColor || layer.color}, transparent 50%)`,
        };
      default:
        return { backgroundColor: layer.color };
    }
  };

  const getAnimationProps = () => {
    if (!isAnimating || layer.animation === "none") return {};

    const duration = 4 / layer.animationSpeed;
    const repeat = layer.repeatInfinity ? Number.POSITIVE_INFINITY : 0;

    switch (layer.animation) {
      case "float":
        return {
          animate: { y: [0, -20, 0], x: [0, 10, 0] },
          transition: {
            duration,
            repeat,
            ease: "easeInOut" as const,
          },
        };
      case "pulse":
        return {
          animate: {
            scale: [1, 1.1, 1],
            opacity: [layer.opacity, layer.opacity * 0.8, layer.opacity],
          },
          transition: {
            duration: duration * 0.5,
            repeat,
            ease: "easeInOut" as const,
          },
        };
      case "rotate":
        return {
          animate: { rotate: [0, 360] },
          transition: {
            duration: duration * 5,
            repeat,
            ease: "linear" as const,
          },
        };
      case "breathe":
        return {
          animate: { scale: [1, 1.05, 1] },
          transition: {
            duration,
            repeat,
            ease: "easeInOut" as const,
          },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        ...getBackgroundStyle(),
        width: `${layer.width}%`,
        height: `${layer.height}%`,
        left: x,
        top: y,
        opacity: layer.opacity,
        filter: `blur(${layer.blur}px)`,
        mixBlendMode: layer.blendMode,
        transform: "translate(-50%, -50%)",
        zIndex: 1,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: layer.opacity,
        scale: 1,
        ...getAnimationProps().animate,
      }}
      transition={getAnimationProps().transition || { duration: 1 }}
    />
  );
}
