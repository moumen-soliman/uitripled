"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState, type ComponentType } from "react";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const PrismSyntaxHighlighter =
  SyntaxHighlighter as unknown as ComponentType<SyntaxHighlighterProps>;

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

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
    <div className="relative">
      <div className="rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
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
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="h-3 w-3" />
                  Copied
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-1.5"
                >
                  <Copy className="h-3 w-3" />
                  Copy
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <div className="overflow-x-auto bg-card">
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
      </div>
    </div>
  );
}
