"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type AnimatedQuoteBlockProps = {
  quote?: string;
  author?: string;
  typingSpeed?: number;
};

export function AnimatedQuoteBlock({
  quote = "The only way to do great work is to love what you do.",
  author = "Steve Jobs",
  typingSpeed = 50,
}: AnimatedQuoteBlockProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < quote.length) {
        setDisplayedText(quote.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setShowPulse(true);
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [quote, typingSpeed]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-8">
      <motion.div
        animate={{
          scale: showPulse ? [1, 1.02, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: showPulse ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <div className="text-4xl font-bold text-primary">"</div>

        <div className="py-4 text-xl leading-relaxed">
          <AnimatePresence mode="wait">
            {isTyping ? (
              <motion.span
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 bg-current"
                />
              </motion.span>
            ) : (
              <motion.span
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {quote}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 text-right text-sm text-muted-foreground">
          - {author}
        </div>
      </motion.div>
    </div>
  );
}
