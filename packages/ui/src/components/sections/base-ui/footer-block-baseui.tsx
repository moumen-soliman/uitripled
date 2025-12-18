"use client";

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Documentation", "API Reference"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit"],
  },
  {
    title: "Resources",
    links: ["Community", "Help Center", "Partners", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export function FooterBlockBaseui() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shouldReduceMotion = useReducedMotion();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative w-full overflow-hidden border-t border-border bg-card/90 backdrop-blur-xl"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.2, 0.45, 0.2], scale: [0.9, 1.05, 0.95] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 12, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute -bottom-36 right-0 h-96 w-96 rounded-full bg-[hsl(var(--primary)_/_0.18)] blur-[200px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.18, 0.4, 0.18], rotate: [0, 25, 0] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 16, repeat: Infinity, ease: "linear" }
          }
        />
      </div>
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="mb-4 inline-flex items-center gap-3"
            >
              <div className="rounded-2xl border border-border/60 bg-card/80 px-3 py-1 text-xs uppercase tracking-[0.32em] text-muted-foreground shadow-[0_10px_30px_-20px_rgba(15,23,42,0.8)]">
                Brand
              </div>
              <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                Since 2018
              </span>
            </motion.div>
            <p className="mb-4 max-w-md text-sm text-muted-foreground">
              Building amazing products with modern technologies. Join us on our
              journey to create better user experiences.
            </p>

            {/* Newsletter */}
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-foreground">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 flex-1 rounded-xl border border-border/60 bg-background/60 px-3 py-2 text-sm backdrop-blur placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-primary/90 text-primary-foreground shadow-[0_12px_35px_-20px_rgba(15,23,42,0.7)] hover:bg-primary"
                  aria-label="Subscribe"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                <span>123 Business St, City 12345</span>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" aria-hidden />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" aria-hidden />
                <span>hello@example.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            >
              <h4 className="mb-4 text-sm font-semibold text-foreground/90">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { x: 5, color: "hsl(var(--primary))" }
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-10 h-px bg-border/70"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex gap-2"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.6 + index * 0.05,
                }}
              >
                <Button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-white/5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <motion.div
                    transition={{ duration: shouldReduceMotion ? 0.25 : 0.3 }}
                  >
                    <social.icon className="h-4 w-4" aria-hidden />
                  </motion.div>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>© 2024 Brand. All rights reserved.</span>
            <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs font-semibold">
              v1.0.0
            </span>
          </motion.div>

          {/* Scroll to Top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={scrollToTop}
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { repeat: Infinity, duration: 1.5 }
                }
              >
                <ArrowUp className="h-4 w-4" aria-hidden />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
