"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

export function HeartFavorite() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center justify-center p-12">
      <motion.button
        onClick={() => setIsLiked(!isLiked)}
        whileTap={{ scale: 0.9 }}
        className="rounded-full p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <motion.div
          animate={{
            scale: isLiked ? [1, 1.3, 1] : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Heart
            className={`h-8 w-8 transition-colors ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </motion.div>
      </motion.button>
    </div>
  );
}
