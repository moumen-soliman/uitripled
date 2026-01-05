"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "This library has transformed how we build user interfaces. The animations are smooth, professional, and easy to implement.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer, StartupXYZ",
    content:
      "Best animation library we've used. The components are production-ready and the documentation is excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Designer, Creative Studio",
    content:
      "Beautiful animations that bring our designs to life. Highly recommended for any modern web project.",
    rating: 5,
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="text-sm text-[var(--foreground)]/70 sm:text-base md:text-lg">
            Don&apos;t just take our word for it - hear from our community
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className=" bg-[var(--card-bg)]">
                <CardHeader>
                  <div className="mb-4 flex items-center gap-2">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      )
                    )}
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mb-2 inline-flex"
                  >
                    <Quote className="h-6 w-6 text-[var(--muted-foreground)]" />
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base leading-relaxed sm:text-lg">
                    {testimonials[currentIndex].content}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-[var(--foreground)]/60">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-2 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ width: 8 }}
                  animate={{ width: index === currentIndex ? 24 : 8 }}
                  style={{
                    backgroundColor:
                      index === currentIndex
                        ? "rgb(var(--accent))"
                        : "rgb(var(--border))",
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
