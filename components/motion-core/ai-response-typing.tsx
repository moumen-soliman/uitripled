"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AIResponseTypingProps = {
  text?: string;
  speed?: number;
  showCursor?: boolean;
  onComplete?: () => void;
  thinkingState?: "idle" | "thinking" | "typing";
};

export function AIResponseTyping({
  text = "Hello! I'm an AI assistant. I can help you with questions, provide information, and assist with various tasks. Feel free to ask me anything!",
  speed = 30,
  showCursor = true,
  onComplete,
  thinkingState = "typing",
}: AIResponseTypingProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (thinkingState === "thinking") {
      setIsThinking(true);
      setIsTyping(false);
      setDisplayedText("");
      return;
    }

    if (thinkingState === "typing" && text) {
      setIsThinking(false);
      setIsTyping(true);
      setDisplayedText("");

      let currentIndex = 0;
      const chars = text.split("");

      const typeNextChar = () => {
        if (currentIndex < chars.length) {
          const nextChar = chars[currentIndex];

          // Simulate natural typing pauses at punctuation
          const isPause =
            nextChar === "." ||
            nextChar === "," ||
            nextChar === "!" ||
            nextChar === "?" ||
            nextChar === "\n";

          setDisplayedText((prev) => prev + nextChar);
          currentIndex++;

          // Schedule next character with pause if needed
          if (isPause) {
            intervalRef.current = setTimeout(() => {
              typeNextChar();
            }, speed * 3);
          } else {
            intervalRef.current = setTimeout(() => {
              typeNextChar();
            }, speed);
          }
        } else {
          if (intervalRef.current) clearTimeout(intervalRef.current);
          setIsTyping(false);
          onComplete?.();
        }
      };

      // Start typing
      typeNextChar();

      return () => {
        if (intervalRef.current) clearTimeout(intervalRef.current);
      };
    }
  }, [text, speed, thinkingState, onComplete]);

  return (
    <div className="w-full max-w-2xl">
      <div className="relative rounded-2xl border border-border bg-card p-6 min-h-[100px]">
        {/* Thinking state shimmer */}
        {isThinking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-muted-foreground">Thinking</span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Typing output */}
        {displayedText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-foreground leading-relaxed whitespace-pre-wrap break-words"
          >
            {displayedText}
            {showCursor && isTyping && (
              <motion.span
                className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
                animate={{ opacity: [1, 1, 1, 0, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              />
            )}
            {showCursor && !isTyping && !isThinking && displayedText && (
              <motion.span
                className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle opacity-50"
                animate={{ opacity: [0.5, 0.5, 0, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />
            )}
          </motion.p>
        )}

        {/* Shimmer effect overlay */}
        {(isTyping || isThinking) && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
            }}
          />
        )}

        {/* Decorative gradient border */}
        {(isTyping || isThinking) && (
          <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                background: [
                  "linear-gradient(135deg, transparent, transparent)",
                  "linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent)",
                  "linear-gradient(135deg, transparent, transparent)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )}
      </div>

      {/* Status indicator */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <motion.div
            animate={{
              scale: isTyping ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isTyping ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="w-2 h-2 rounded-full bg-green-500"
          />
          <span>
            {isThinking
              ? "AI is thinking..."
              : isTyping
                ? "AI is typing..."
                : "Ready"}
          </span>
        </div>
      </div>
    </div>
  );
}
