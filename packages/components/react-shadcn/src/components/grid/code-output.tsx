"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Code2, Copy } from "lucide-react";

interface CodeOutputProps {
  code: string;
  copied: boolean;
  onCopyCode: () => void;
  options?: React.ReactNode;
}

export function CodeOutput({
  code,
  copied,
  onCopyCode,
  options,
}: CodeOutputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-8 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg w-full min-w-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            Generated Code
          </h2>
          <Button onClick={onCopyCode} className="gap-2 px-5 py-3">
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
        {options ? (
          <div className="grid md:grid-cols-2 gap-3 mb-4">{options}</div>
        ) : null}
        <pre className="bg-muted text-foreground p-6 rounded-xl overflow-x-auto text-sm font-mono border border-border shadow-inner">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
}
