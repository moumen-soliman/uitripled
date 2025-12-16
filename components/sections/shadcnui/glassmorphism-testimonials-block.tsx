"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function GlassmorphismTestimonialsBlock() {
  const testimonials = [
    {
      content:
        "This platform has completely transformed how we build products. The speed and reliability are unmatched.",
      author: "Sarah Johnson",
      role: "CTO at TechCorp",
      rating: 5,
    },
    {
      content:
        "Best investment we've made this year. Our team's productivity has increased dramatically.",
      author: "Michael Chen",
      role: "Product Manager at StartupXYZ",
      rating: 5,
    },
    {
      content:
        "The attention to detail and user experience is exceptional. Highly recommend to any team.",
      author: "Emily Rodriguez",
      role: "Head of Engineering at ScaleUp",
      rating: 5,
    },
  ];

  return (
    <section className="bg-foreground/[0.02] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-5 text-center">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
            Loved by teams everywhere
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            See what our customers have to say
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border border-border/50 bg-background/50 p-10 backdrop-blur-xl transition-all duration-500 hover:border-border"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current text-foreground"
                  />
                ))}
              </div>
              <p className="mb-8 text-base leading-relaxed text-foreground/80">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
