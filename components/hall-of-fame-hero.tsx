"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HallOfFameHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />

        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-[0.15] dark:bg-[radial-gradient(#374151_1.5px,transparent_1.5px)] dark:opacity-[0.25]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sidebar-primary/20 via-background to-background blur-3xl" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-bold tracking-tighter mb-6">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-sidebar-foreground via-sidebar-foreground/80 to-sidebar-foreground/50 letter-spacing-[2px]">
              Hall of Fame
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-light"
        >
          Celebrating the first <span className="text-sidebar-primary font-medium">100 stargazers</span> who believed in us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-sidebar-primary to-transparent rounded-full opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
