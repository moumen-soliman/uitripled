"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, type Variants } from "framer-motion";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 sm:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-6 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/[0.03] blur-[130px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            Contact
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let’s build something exceptional together
          </h2>
          <p className="max-w-2xl text-foreground/70">
            Share your project details and our team will reach out within one
            business day. We’re here to collaborate and craft meaningful
            experiences.
          </p>
        </motion.div>

        <Card className="group relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-0 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative grid gap-10 px-6 py-8 md:grid-cols-2 md:px-10 md:py-12"
            aria-label="Contact form"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-8 text-left text-foreground/70"
            >
              <motion.div
                variants={iconVariants}
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-primary/80" />
                Response within 24 hours
              </motion.div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Tell us about your project
                </h3>
                <p className="text-sm text-foreground/70">
                  We’ll schedule a discovery call to understand your goals,
                  timeline, and success metrics. Prefer email? Reach us at{" "}
                  <a
                    href="mailto:hello@example.com"
                    className="text-foreground underline decoration-border/70 underline-offset-4 transition-colors hover:text-primary"
                  >
                    hello@example.com
                  </a>
                  .
                </p>
              </div>

              <div className="grid gap-4 text-sm text-foreground/70">
                <div className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/40 p-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 text-foreground/60"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p>hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border/40 bg-background/40 p-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 text-foreground/60"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Alex Johnson"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border border-border/40 bg-background/40 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                    aria-required="true"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
                      aria-hidden="true"
                    />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@studio.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl border border-border/40 bg-background/40 pl-10 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                      autoComplete="email"
                      aria-required="true"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
                    aria-hidden="true"
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl border border-border/40 bg-background/40 pl-10 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60"
                >
                  Message
                </Label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-3 top-3 h-4 w-4 text-foreground/50"
                    aria-hidden="true"
                  />
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your vision, timeline, and deliverables."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[140px] rounded-xl border border-border/40 bg-background/40 pl-10 text-sm text-foreground transition-all focus-visible:border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30"
                    aria-required="true"
                    required
                  />
                </div>
              </div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  size="lg"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Send Message
                  <Send
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              <p className="text-xs text-foreground/60">
                By submitting this form you agree to our{" "}
                <a
                  href="#"
                  className="text-foreground underline decoration-border/70 underline-offset-4 transition-colors hover:text-primary"
                >
                  privacy policy
                </a>
                .
              </p>
            </motion.div>
          </motion.form>
        </Card>
      </div>
    </section>
  );
}
