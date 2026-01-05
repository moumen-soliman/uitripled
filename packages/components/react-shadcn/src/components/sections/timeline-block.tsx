"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Started with a vision to transform how businesses operate digitally.",
    icon: CheckCircle2,
  },
  {
    year: "2021",
    title: "First 1,000 Customers",
    description:
      "Reached our first major milestone with customers across 20 countries.",
    icon: CheckCircle2,
  },
  {
    year: "2022",
    title: "Series A Funding",
    description:
      "Raised $10M to accelerate product development and expand our team.",
    icon: CheckCircle2,
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Opened offices in 5 new countries and launched multilingual support.",
    icon: CheckCircle2,
  },
  {
    year: "2024",
    title: "AI Integration",
    description:
      "Launched AI-powered features to help businesses scale faster.",
    icon: CheckCircle2,
  },
];

export function TimelineBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            <Calendar className="mr-1 h-3 w-3" />
            Our Journey
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            The Story of Our Growth
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            From a small startup to a global platform trusted by thousands
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:left-1/2 md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    >
                      <Icon className="h-4 w-4 text-primary-foreground" />
                    </motion.div>
                    <motion.div
                      className="absolute h-8 w-8 rounded-full bg-primary/20"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="relative overflow-hidden border-border/50 bg-card p-4 shadow-lg md:p-6">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          whileHover={{ opacity: 1 }}
                        />

                        <div className="relative z-10">
                          <Badge className="mb-3" variant="outline">
                            {event.year}
                          </Badge>
                          <h3 className="mb-2 text-lg font-bold md:text-xl">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground md:text-base">
                            {event.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden w-5/12 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: timelineEvents.length * 0.2 + 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-primary"
            />
            <span className="text-sm font-medium">
              And the journey continues...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
