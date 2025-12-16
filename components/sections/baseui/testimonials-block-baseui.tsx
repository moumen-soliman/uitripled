"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Outstanding work! The project was delivered on time and exceeded our expectations. The attention to detail and code quality is exceptional.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at Innovate",
    content:
      "A true professional who understands both the technical and business aspects. Communication was excellent throughout the entire project.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder of DesignHub",
    content:
      "Incredible problem-solving skills and creativity. Turned our vision into reality with a beautiful, functional application.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "CTO at DataFlow",
    content:
      "Expert-level knowledge across the full stack. The scalable architecture delivered will serve our company for years to come.",
    rating: 5,
    avatar: "DK",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialsBlockBaseui() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12 lg:mb-16"
        >
          <h2 className="mb-3 text-2xl font-bold text-foreground sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Client Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Trusted by businesses and startups to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-border bg-card p-4 text-card-foreground shadow-sm transition-all duration-300 sm:p-6 hover:border-primary/50">
                <Quote className="absolute top-3 right-3 h-8 w-8 text-muted/10 transition-colors sm:top-4 sm:right-4 sm:h-12 sm:w-12 group-hover:text-primary/10" />

                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground sm:h-12 sm:w-12 sm:text-base">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="truncate text-sm font-semibold text-foreground sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="truncate text-xs text-muted-foreground sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3 flex gap-1 sm:mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15 + i * 0.1,
                          duration: 0.3,
                        }}
                      >
                        <Star className="h-3 w-3 fill-primary text-primary sm:h-4 sm:w-4" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
