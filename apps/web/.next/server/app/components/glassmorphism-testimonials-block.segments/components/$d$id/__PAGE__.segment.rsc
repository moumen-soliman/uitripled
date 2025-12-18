1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T9ac,"use client";

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
4:T9a3,"use client";

import { Star } from "lucide-react";

export function GlassmorphismTestimonialsBlockBaseui() {
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
            <div
              key={index}
              className="group rounded-lg border border-border/50 bg-background/50 p-10 text-card-foreground backdrop-blur-xl transition-all duration-500 hover:border-border"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
5:T9ac,"use client";

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
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"glassmorphism-testimonials-block","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
