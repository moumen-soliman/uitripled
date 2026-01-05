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
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
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
          Celebrating the first{" "}
          <span className="text-foreground font-medium">100 stargazers</span>{" "}
          who believed in us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8"
        >
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="https://github.com/moumen-soliman/uitripled"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:rotate-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span>Star on GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
