1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
8:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
9:"$Sreact.suspense"
3:T1a20,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"ai-response-typing"}],["$L4","$L5","$L6"],"$L7"]}],"loading":null,"isPartial":false}
4:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
5:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
6:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
7:["$","$L8",null,{"children":["$","$9",null,{"name":"Next.MetadataOutlet","children":"$@a"}]}]
a:null
