"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  {
    title: "What is your return policy?",
    content:
      "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    title: "How long does shipping take?",
    content:
      "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.",
  },
  {
    title: "Do you ship internationally?",
    content:
      "Yes, we ship to over 50 countries worldwide. International shipping times vary by location.",
  },
];

export function AnimatedAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl border  bg-[var(--card-bg)]"
        >
          <motion.button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-4 text-left text-sm font-medium"
            whileHover={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}
          >
            <span>{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="border-t  p-4 text-sm text-[var(--foreground)]/70">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
