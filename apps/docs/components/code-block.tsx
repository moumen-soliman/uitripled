"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, ChevronDown } from "lucide-react";
import { useState, type ComponentType, useRef, useEffect } from "react";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

const PrismSyntaxHighlighter =
  SyntaxHighlighter as unknown as ComponentType<SyntaxHighlighterProps>;

type CodeBlockProps = {
  code: string;
  language?: string;
  expandable?: boolean;
};

export function CodeBlock({ code, language = "tsx", expandable = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandable && contentRef.current) {
      setHasOverflow(contentRef.current.scrollHeight > 300);
    }
  }, [expandable, code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayCode =
    code === "dummy"
      ? `'use client'

import { motion } from 'framer-motion'

export function ScaleHoverButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="rounded-lg bg-accent px-8 py-3 font-semibold text-white shadow-lg"
    >
      BUY NOW
    </motion.button>
  )
}`
      : code || "";

  return (
    <div className="relative group/code">
      <div className={cn(
        "rounded-lg border border-border bg-card transition-all duration-300 relative",
        expandable && !isExpanded && hasOverflow && "max-h-[300px] overflow-hidden"
      )}>
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-card">
          <span className="text-xs font-medium text-muted-foreground">
            TypeScript + React
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, filter: "blur(2px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(2px)" }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="h-3 w-3" />
                  Copied
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0, filter: "blur(2px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(2px)" }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center cursor-pointer gap-1.5"
                >
                  <Copy className="h-3 w-3" />
                  Copy
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <div ref={contentRef} className="overflow-x-auto bg-card">
          <PrismSyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1rem",
              fontSize: "0.75rem",
              lineHeight: "1.5",
              background: "transparent",
            }}
            codeTagProps={{
              style: {
                fontFamily: "inherit",
              },
            }}
          >
            {displayCode}
          </PrismSyntaxHighlighter>
        </div>

        {expandable && !isExpanded && hasOverflow && (
          <div className="absolute inset-x-0 bottom-0 flex h-40 items-end justify-center bg-gradient-to-t from-card via-card/95 via-card/70 to-transparent pb-6 transition-opacity">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-md px-4 py-1.5 text-xs font-medium shadow-sm transition-all hover:bg-muted hover:ring-1 hover:ring-ring"
            >
              <ChevronDown className="h-3 w-3" />
              Expand code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


