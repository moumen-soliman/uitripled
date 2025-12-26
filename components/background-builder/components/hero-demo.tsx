"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

export interface HeroDemoProps {
  textColor?: string;
  buttonColor?: string;
}

export function HeroDemo({
  textColor = "#ffffff", // Default will be handled by parent or fallback here
  buttonColor = "#ffffff",
}: HeroDemoProps) {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
      <div className="text-center px-4 max-w-4xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-md mb-6"
        >
          v2.0 is now live
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-sm"
          style={{ color: textColor }}
        >
          Build beautiful <br />
          backgrounds instantly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed opacity-90"
          style={{ color: textColor }}
        >
          Create stunning, animated gradients and patterns for your next project.
          Export compatible code with a single click.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full h-12 px-8 text-base shadow-lg shadow-primary/20"
            style={{
              backgroundColor: buttonColor,
              color: buttonColor === "#ffffff" ? "#000000" : "#ffffff" // Simple contrast check
            }}
          >
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-white/20 hover:bg-background/80"
            style={{
              color: textColor,
              borderColor: textColor ? `${textColor}40` : undefined
            }}
          >
            <Github className="mr-2 w-4 h-4" /> View on GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
