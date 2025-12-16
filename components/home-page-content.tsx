"use client";

import { ColorThemePicker } from "@/components/color-theme-picker";
import { MultipleAccounts } from "@/components/components/account-switcher/multiple-accounts";
import { ImageSliderCard } from "@/components/components/cards/image-slider-card";
import { DetailTaskCard } from "@/components/components/cards/shadcnui/detail-task";
import { EcommerceHighlightCard } from "@/components/components/cards/shadcnui/ecommerce-highlight-card";
import { HoverExpandCard } from "@/components/components/cards/shadcnui/hover-expand";
import { AIChatInterface } from "@/components/components/chat/ai-chat-interface";
import { AnimatedList } from "@/components/components/lists/animated-list";
import { CashFlowChart } from "@/components/data/charts/cash-flow-chart";
import { GithubStarButton } from "@/components/github-star-button";
import GradientOverlay from "@/components/gradiant-overlay";
import { AnimatedDialog } from "@/components/modals/animated-dialog";
import { BottomModal } from "@/components/modals/bottom-modal";
import { AnimatedProfileMenu } from "@/components/navigation/animated-profile-menu";
import { BrowseFolder } from "@/components/sections/shadcnui/browse-folder";
import { CurrencyConverterCard } from "@/components/sections/shadcnui/currency-converter-card";
import { ProjectsBlock } from "@/components/sections/shadcnui/projects-block";
import { TweetsSlider } from "@/components/sections/tweets-slider";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

function StarButtonFallback() {
  return (
    <Button variant="outline" size="lg" className="min-w-[160px]" disabled>
      <Star aria-hidden="true" className="mr-2 h-4 w-4" />
      <span>...</span>
    </Button>
  );
}

export default function HomePageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top centered actions */}
      <section className="bg-background/80">
        <div className="container relative mx-auto flex flex-col items-center gap-4 px-4 pt-32 pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          ></div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          ></div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]"
          ></div>
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground text-center flex items-center justify-center gap-2"
          >
            When Framer Motion meets <HeroFlip />
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Browse, copy, and ship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-center text-sm text-foreground/70 md:max-w-md mx-auto"
          >
            You&apos;ll see more blocks than components here because we
            prioritize copy-ready pieces over complex builds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="mt-2 flex items-center justify-center gap-2"
          >
            <span className="text-xs text-muted-foreground">
              Try different colors:
            </span>
            <ColorThemePicker />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href="/components">
                Browse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Suspense fallback={<StarButtonFallback />}>
              <GithubStarButton />
            </Suspense>
          </motion.div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="w-full overflow-hidden bg-background py-12">
            <div className="flex gap-6">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-[350px] shrink-0 overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur"
                >
                  <div className="flex flex-row items-start gap-4 pb-2">
                    <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                    <div className="flex flex-col gap-0.5 flex-1">
                      <div className="h-4 w-24 rounded bg-muted animate-pulse" />
                      <div className="h-3 w-16 rounded bg-muted animate-pulse" />
                    </div>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="h-3 w-full rounded bg-muted animate-pulse" />
                    <div className="h-3 w-full rounded bg-muted animate-pulse" />
                    <div className="h-3 w-3/4 rounded bg-muted animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      >
        <TweetsSlider />
      </Suspense>

      {/* Components gallery in a bento-style grid */}
      <section className="container-fluid md:max-w-[95rem] px-6 mx-auto">
        <div className="flex w-full flex-col gap-12 py-12">
          <AnimatedProfileMenu />

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Left / primary column */}
            <div className="flex flex-col gap-8 md:col-span-2">
              <CashFlowChart />
              <BrowseFolder />

              {/* Hover & dialog next to converter on larger screens, stacked on mobile */}
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex flex-col gap-8 lg:w-1/2">
                  <HoverExpandCard />
                  <AnimatedDialog />
                </div>

                <div className="lg:w-1/2">
                  <CurrencyConverterCard />
                </div>
              </div>
              {/* <CashFlowChart /> */}
              <AIChatInterface />
              <DetailTaskCard />
            </div>

            {/* Right / secondary column */}
            <div className="flex flex-col gap-8">
              <MultipleAccounts />

              <ImageSliderCard />
              <BottomModal />
              <ProjectsBlock />
              <EcommerceHighlightCard />
              <AnimatedList />
            </div>
          </div>
        </div>
      </section>
      <GradientOverlay />
    </div>
  );
}

function HeroFlip() {
  const [index, setIndex] = useState(0);
  const libs = [
    {
      name: "shadcn/ui",
      logoLight: "/logos/shadcnui_dark.svg",
      logoDark: "/logos/shadcnui_white.svg",
    },
    {
      name: "Base UI",
      logoLight: "/logos/baseui_white.svg",
      logoDark: "/logos/baseui_dark.svg",
    },
    {
      name: "React",
      logoLight: "/logos/react-logo_dark.svg",
      logoDark: "/logos/react-logo_white.svg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % libs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = libs[index];

  return (
    <div className="inline-flex items-center justify-center overflow-hidden h-6 w-auto align-bottom">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ rotateX: -90, opacity: 0, filter: "blur(6px)" }}
          animate={{ rotateX: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ rotateX: 90, opacity: 0, filter: "blur(6px)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            opacity: { duration: 0.3 },
            filter: { duration: 0.3 },
            rotateX: { duration: 0.4 },
          }}
          className="flex items-center gap-2 justify-center w-[110px]"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Image
              src={current.logoLight}
              alt={current.name}
              width={18}
              height={18}
              className="block dark:hidden"
            />
            <Image
              src={current.logoDark}
              alt={current.name}
              width={18}
              height={18}
              className="hidden dark:block"
            />
          </div>
          <span className="font-bold text-lg tracking-normal normal-case text-foreground">
            {current.name}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
