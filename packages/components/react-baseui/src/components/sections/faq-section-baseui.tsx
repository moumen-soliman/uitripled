"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Simply install the library using npm or yarn, import the components you need, and start building amazing interfaces!",
  },
  {
    question: "Is this library free to use?",
    answer:
      "Yes, the library is completely free and open source. You can use it in both personal and commercial projects.",
  },
  {
    question: "Can I customize the animations?",
    answer:
      "Absolutely! All components are fully customizable. You can modify colors, durations, easing functions, and more.",
  },
  {
    question: "Does it work with Next.js?",
    answer:
      "Yes, all components are fully compatible with Next.js, including both App Router and Pages Router.",
  },
  {
    question: "Is TypeScript supported?",
    answer:
      "Yes! The entire library is written in TypeScript and includes comprehensive type definitions.",
  },
];

export function FAQSectionBaseui() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-4 inline-flex rounded-full bg-accent/10 p-3"
            aria-hidden="true"
          >
            <HelpCircle
              className="h-8 w-8 text-muted-foreground"
              aria-hidden="true"
            />
          </motion.div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-foreground/70 sm:text-base md:text-lg">
            Everything you need to know about our library
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <motion.button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring"
                      whileHover={{ x: 4 }}
                      aria-expanded={openIndex === index}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      <span className="text-lg font-semibold">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-5 w-5 text-foreground/60" />
                      </motion.div>
                    </motion.button>
                  </div>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        role="region"
                        id={answerId}
                        aria-labelledby={questionId}
                      >
                        <div className="p-6 pt-0">
                          <p className="text-foreground/70">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
