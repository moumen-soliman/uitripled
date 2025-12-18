1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
4:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
5:"$Sreact.suspense"
3:T958,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"animated-quote-block"}],[["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}],["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}],["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]],["$","$L4",null,{"children":["$","$5",null,{"name":"Next.MetadataOutlet","children":"$@6"}]}]]}],"loading":null,"isPartial":false}
6:null
