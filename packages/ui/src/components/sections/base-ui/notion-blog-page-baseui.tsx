"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronDown, Clock, Quote } from "lucide-react";
import { useState } from "react";

const toggleSections = [
  {
    title: "Morning focus ritual",
    summary: "Anchor your attention before anything else.",
    content: [
      "Open your doc before you open your inbox. Protect the first five minutes for intention setting.",
      "Free-write everything in your head for three minutes. Highlight the sentence that has the most energy.",
      "Set a single outcome for this session. When the timer ends, the outcome should be either done or clearly moved forward.",
    ],
  },
  {
    title: "Drafting in layers",
    summary: "Treat each pass as a different job description.",
    content: [
      "Pass one: outline in short bullet blocks. Ignore tone, grammar, or flow.",
      'Pass two: expand each bullet into a paragraph that answers "so what?" for the reader.',
      "Pass three: polish transitions, add a visual, and cut at least 10% of the words.",
    ],
  },
  {
    title: "Publishing without panic",
    summary: "Make the final review a celebration, not a scramble.",
    content: [
      "Read the draft out loud once. Mark sentences that trip you up-they are almost always too long.",
      "Paste the introduction into a new page. If it still makes sense, you're ready. If not, keep tightening.",
      "Ship with a note to yourself about what felt easy. Capture it inside your writing playbook.",
    ],
  },
];

const miniGallery = [
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    alt: "Wooden desk with open notebook and coffee",
    caption: "A quiet desk lets the outline breathe.",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    alt: "Highlights in a notebook with pen",
    caption: "Colour-code revisions by pass.",
  },
];

const readingList = [
  "On Writing Well - William Zinsser",
  "The Art of Slow Productivity - Cal Newport",
  "Working in Public - Nadia Eghbal",
];

const cadence = [
  { label: "Monday", detail: "Research & interviews" },
  { label: "Wednesday", detail: "Draft messy outline" },
  { label: "Friday", detail: "Edit, ship, reflect" },
];

export function NotionBlogPageBaseui() {
  const [openToggle, setOpenToggle] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenToggle((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-muted/30 px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/40 bg-background shadow-xl shadow-black/5"
      >
        <div className="relative h-56 w-full bg-gradient-to-br from-amber-100 via-white to-slate-100 md:h-64">
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Writer desk with scattered notes"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur"
          >
            <BookOpen className="h-4 w-4 text-primary" />
            Mindful Publishing Playbook
          </motion.div>
        </div>

        <div className="space-y-12 px-6 py-10 md:px-12 md:py-16">
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-muted/40 px-3 py-1 font-medium">
                <BookOpen className="h-4 w-4 text-primary" />
                Field Notes
              </span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground/70" />9 min read
              </div>
              <span>Updated November 2025</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Slow Publishing: A Notion Workflow for Thoughtful Blogs
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Creative focus doesn't arrive by accident-it is the product of
              small rituals, generous constraints, and a system that remembers
              what works. This Notion-style page captures the cadence our team
              uses to ship a thoughtful story every Friday without burning out.
            </p>
          </motion.header>

          <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <motion.article
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8 text-base leading-relaxed text-muted-foreground"
            >
              <p>
                We treat every article as a field note: a snapshot of what we
                are learning in public. The goal is not to chase virality but to
                document a craft in motion. A good post leaves breadcrumbs for
                future us and an invitation for readers to try the practice
                themselves.
              </p>
              <p>
                The workflow begins on Monday morning. Instead of running toward
                a blank page, we pull from an idea backlog curated throughout
                the week. Each card includes a "why now" note and a quick voice
                memo. When a theme repeats three times, it earns a dedicated
                spot on the publishing calendar.
              </p>
              <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-muted/30 p-6 md:flex-row">
                <div className="relative h-40 overflow-hidden rounded-xl bg-muted md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                    alt="Sticky notes arranged on a wall"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Idea backlog hygiene
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Tag backlog cards by energy level, not topic. High-energy
                    cards are ready to outline quickly, while low-energy cards
                    need more research or a better story.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border-l-4 border-primary/60 bg-primary/5 p-6 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Quote className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <p className="text-base font-medium text-foreground">
                      Slow is smooth. Smooth becomes fast.
                    </p>
                    <p className="text-sm">
                      We don't remove friction; we design the right friction. If
                      a draft feels rushed, it usually means we skipped the
                      check-in block or jumped straight to editing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {toggleSections.map((section, index) => (
                  <div
                    key={section.title}
                    className="overflow-hidden rounded-xl border border-border/50 bg-background"
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/40"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {section.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {section.summary}
                        </p>
                      </div>
                      <motion.span
                        animate={{ rotate: openToggle === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {openToggle === index && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-4 pb-4"
                        >
                          <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                            {section.content.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-6">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
                  Weekly cadence
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {cadence.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start justify-between gap-4 rounded-lg bg-background/80 px-3 py-2"
                    >
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                      <span className="text-right text-muted-foreground/80">
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background p-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground/80">
                  Reading stack
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {readingList.map((title) => (
                    <li key={title} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                      {title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                {miniGallery.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-border/50 bg-background"
                  >
                    <div className="relative h-40 w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="px-4 py-3 text-sm text-muted-foreground">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>

          <motion.footer
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="space-y-6 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-6 text-sm text-muted-foreground"
          >
            <h3 className="text-base font-semibold text-foreground">
              Friday reflection prompts
            </h3>
            <ul className="space-y-2">
              <li>
                • What sentence did readers highlight the most? Add it to your
                intuition library.
              </li>
              <li>
                • What part of the workflow felt spacious? Capture the moment
                inside your rituals toggle.
              </li>
              <li>• What will future you thank you for writing down today?</li>
            </ul>
            <p>
              Iterate on the process, not just the prose. The page you are
              reading is a living document-duplicate it, remix the blocks, and
              keep the parts that help you publish with calm confidence.
            </p>
          </motion.footer>
        </div>
      </motion.div>
    </section>
  );
}
