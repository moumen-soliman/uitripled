"use client";

import { motion } from "framer-motion";

export function GradientAnimation() {
  return (
    <div className="flex items-center justify-center p-12">
      <motion.div
        className="h-48 w-64 rounded-2xl"
        animate={{
          background: [
            "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
            "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
            "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)",
            "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
