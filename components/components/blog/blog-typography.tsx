"use client";

import { motion, type Variants } from "framer-motion";
import { Code, ExternalLink, Quote } from "lucide-react";
import Image from "next/image";
import type React from "react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
}

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Animated Link Component
function AnimatedLink({ href, children, external = false }: LinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative inline-flex items-center gap-1 text-primary font-medium transition-colors hover:text-primary/80"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
      aria-label={
        external ? `${children} (opens in new tab)` : `Navigate to ${children}`
      }
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </span>
      {external && (
        <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
      )}
    </motion.a>
  );
}

// Image Card Component
function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <motion.figure
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      role="figure"
      aria-label={caption || alt}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {caption && (
        <figcaption className="p-4 text-sm text-foreground/70 border-t border-border/20">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

// Callout Box Component
function Callout({ children, type = "info" }: CalloutProps) {
  const colors = {
    info: "bg-primary/10 border-primary/30 text-foreground",
    warning: "bg-amber-500/10 border-amber-500/30 text-foreground",
    success: "bg-emerald-500/10 border-emerald-500/30 text-foreground",
  };

  return (
    <motion.aside
      variants={itemVariants}
      className={`rounded-xl border p-6 backdrop-blur ${colors[type]}`}
      role="note"
      aria-label={`${type} callout`}
    >
      <div className="text-sm leading-relaxed">{children}</div>
    </motion.aside>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function BlogTypography() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Glassmorphism background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      {/* Main Content */}
      <div className="relative px-6 py-12 lg:py-16">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl space-y-8"
          role="article"
          aria-label="Blog post demonstrating typography styles"
        >
          {/* Article Header */}
          <motion.header variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
              <span
                className="h-2 w-2 rounded-full bg-primary"
                aria-hidden="true"
              />
              Design System
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                The Art of Beautiful Typography
              </span>
            </h1>

            <p className="text-lg text-foreground/70">
              Exploring the nuances of type design, hierarchy, and readability
              in modern web interfaces
            </p>

            <div className="flex items-center gap-4 text-sm text-foreground/60">
              <time dateTime="2025-11-28">November 28, 2025</time>
              <span aria-hidden="true">•</span>
              <span>8 min read</span>
            </div>
          </motion.header>

          {/* Introduction */}
          <motion.section variants={itemVariants} className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/80">
              Typography is the foundation of good design. It&apos;s not just
              about choosing beautiful fonts-it&apos;s about creating hierarchy,
              establishing rhythm, and guiding the reader through your content
              with intention and care.
            </p>

            <p className="text-base leading-relaxed text-foreground/70">
              In this article, we&apos;ll explore the fundamental principles
              that make typography work, from the basics of font pairing to the
              subtle art of whitespace. Whether you&apos;re designing a website,
              an app, or a printed publication, these principles will help you
              create more readable, accessible, and beautiful designs.
            </p>
          </motion.section>

          {/* Image Example */}
          <ImageCard
            src="https://images.unsplash.com/photo-1764017884266-b53a65cf0044?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Example of beautiful typography hierarchy"
            caption="Figure 1: A well-structured typographic hierarchy guides the reader's eye through the content"
          />

          {/* Section 1 */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              The Fundamentals of Type Hierarchy
            </h2>

            <p className="leading-relaxed text-foreground/70">
              Type hierarchy is about creating visual distinction between
              different levels of information. Your readers should be able to
              scan your content and instantly understand what&apos;s important.
              This is achieved through careful manipulation of:
            </p>

            <ul className="space-y-3 pl-6" role="list">
              <li className="relative leading-relaxed text-foreground/70 before:absolute before:-left-4 before:content-['•'] before:text-primary">
                <strong className="font-semibold text-foreground">Size</strong>{" "}
                - Larger text naturally draws more attention
              </li>
              <li className="relative leading-relaxed text-foreground/70 before:absolute before:-left-4 before:content-['•'] before:text-primary">
                <strong className="font-semibold text-foreground">
                  Weight
                </strong>{" "}
                - Bold text stands out from regular weight
              </li>
              <li className="relative leading-relaxed text-foreground/70 before:absolute before:-left-4 before:content-['•'] before:text-primary">
                <strong className="font-semibold text-foreground">
                  Spacing
                </strong>{" "}
                - Generous whitespace creates breathing room
              </li>
              <li className="relative leading-relaxed text-foreground/70 before:absolute before:-left-4 before:content-['•'] before:text-primary">
                <strong className="font-semibold text-foreground">Color</strong>{" "}
                - Contrast and opacity guide attention
              </li>
            </ul>
          </motion.section>

          {/* Callout Example */}
          <Callout type="info">
            <strong className="font-semibold">Pro Tip:</strong> Maintain a
            consistent scale for your typography. A modular scale (like 1.25 or
            1.333) helps create harmonious relationships between different text
            sizes.
          </Callout>

          {/* Section 2 with Blockquote */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Choosing the Right Typeface
            </h2>

            <p className="leading-relaxed text-foreground/70">
              The typeface you choose sets the tone for your entire design.
              Serif fonts like Georgia and Times convey tradition and authority,
              while sans-serif fonts like{" "}
              <AnimatedLink href="https://vercel.com/font" external>
                Geist
              </AnimatedLink>{" "}
              and Inter feel modern and clean.
            </p>

            <motion.blockquote
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-8 backdrop-blur transition-all hover:border-border/60"
              role="blockquote"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

              <Quote
                className="h-8 w-8 text-primary/40 mb-4"
                aria-hidden="true"
              />

              <p className="text-xl leading-relaxed text-foreground/90 italic mb-4">
                "Typography is what language looks like. It&apos;s the visual
                form of the spoken word, and it has the power to enhance or
                diminish the message."
              </p>

              <footer className="text-sm text-foreground/60">
                - Ellen Lupton, <cite>Thinking with Type</cite>
              </footer>
            </motion.blockquote>
          </motion.section>

          {/* Section 3 with Code */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Implementing Typography in Code
            </h3>

            <p className="leading-relaxed text-foreground/70">
              When implementing typography in your design system, consistency is
              key. Here&apos;s an example of how you might define your type
              scale using CSS custom properties:
            </p>

            <motion.pre
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

              <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.15em] text-foreground/60">
                <Code className="h-3 w-3" aria-hidden="true" />
                CSS
              </div>

              <code className="text-sm text-foreground/90 font-mono">
                <span className="text-primary/70">:root</span> {"{"}
                <br />
                {"  "}--font-size-xs: 0.75rem;
                <br />
                {"  "}--font-size-sm: 0.875rem;
                <br />
                {"  "}--font-size-base: 1rem;
                <br />
                {"  "}--font-size-lg: 1.125rem;
                <br />
                {"  "}--font-size-xl: 1.25rem;
                <br />
                {"  "}--font-size-2xl: 1.5rem;
                <br />
                {"}"}
              </code>
            </motion.pre>
          </motion.section>

          {/* Ordered List Example */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Best Practices for Web Typography
            </h3>

            <ol
              className="space-y-4 pl-6 list-decimal list-outside"
              role="list"
            >
              <li className="leading-relaxed text-foreground/70 pl-2">
                <strong className="font-semibold text-foreground">
                  Limit line length
                </strong>{" "}
                - Keep your text between 50-75 characters per line for optimal
                readability
              </li>
              <li className="leading-relaxed text-foreground/70 pl-2">
                <strong className="font-semibold text-foreground">
                  Use adequate line height
                </strong>{" "}
                - A line height of 1.5-1.8 prevents text from feeling cramped
              </li>
              <li className="leading-relaxed text-foreground/70 pl-2">
                <strong className="font-semibold text-foreground">
                  Consider contrast
                </strong>{" "}
                - Ensure sufficient color contrast (minimum 4.5:1 for body text)
              </li>
              <li className="leading-relaxed text-foreground/70 pl-2">
                <strong className="font-semibold text-foreground">
                  Test at different sizes
                </strong>{" "}
                - Your typography should work on both mobile and desktop screens
              </li>
            </ol>
          </motion.section>

          {/* Another Image */}
          <ImageCard
            src="https://images.unsplash.com/photo-1764017884266-b53a65cf0044?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Visual comparison of different contrast ratios"
            caption="Figure 2: Proper contrast ratios ensure accessibility for all users"
          />

          {/* Warning Callout */}
          <Callout type="warning">
            <strong className="font-semibold">Accessibility Note:</strong>{" "}
            Always test your typography with actual users, including those using
            screen readers or other assistive technologies. What looks beautiful
            isn't always what works best.
          </Callout>

          {/* Conclusion */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Conclusion
            </h2>

            <p className="leading-relaxed text-foreground/70">
              Great typography is invisible-it doesn&apos;t call attention to
              itself, but rather creates a seamless reading experience. By
              understanding the fundamentals of hierarchy, choosing appropriate
              typefaces, and following best practices, you can create designs
              that are both beautiful and functional.
            </p>

            <p className="leading-relaxed text-foreground/70">
              Remember, typography is an art that takes time to master.
              Experiment, iterate, and always prioritize readability and
              accessibility over purely aesthetic concerns. Your readers will
              thank you.
            </p>
          </motion.section>

          {/* Footer with Links */}
          <motion.footer
            variants={itemVariants}
            className="border-t border-border/40 pt-8 mt-12"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground mb-4">
              Further Reading
            </h3>

            <nav className="flex flex-col gap-3" aria-label="Related resources">
              <AnimatedLink href="https://x.com/moumensoliman" external>
                Google Fonts
              </AnimatedLink>
              <AnimatedLink href="https://x.com/moumensoliman" external>
                Typewolf - Typography Inspiration
              </AnimatedLink>
              <AnimatedLink href="https://x.com/moumensoliman" external>
                Smashing Magazine Typography Articles
              </AnimatedLink>
            </nav>
          </motion.footer>
        </motion.article>
      </div>
    </main>
  );
}
