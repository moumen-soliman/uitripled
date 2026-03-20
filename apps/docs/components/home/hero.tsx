"use client";

import {
  GithubStarButton,
  StarButtonFallback,
} from "@/components/github-star-button";
import { BrowserComponentGallery } from "@/components/home/browser-component-gallery";
import { HeroFlip } from "@/components/home/hero-flip";
import { TweetsSlider } from "@/components/home/tweets-slider";
import { NativeAvatarWithName } from "@/components/native/native-avatar-with-name-shadcnui";
import { Button } from "@uitripled/react-shadcn/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const SPONSORS = [
  {
    username: "ReactBits",
    url: "https://reactbits.dev?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
    logo: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtd7oHoWu8kXBdOAypChQmW2xzMgu5YERnZaGF",
  },
  {
    username: "shadcn/studio",
    url: "https://shadcnstudio.com?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
    logo: "https://ts-assets.b-cdn.net/ss-assets/logo/logo.svg",
  },
  {
    username: "shadcnspace",
    url: "https://shadcnspace.com?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
    logo: "/logos/sponsors/shadcnspace.webp",
  },
  {
    username: "shadcnblocks",
    url: "https://shadcnblocks.com?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
  },
  {
    username: "Vercel",
    url: "https://vercel.com?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
    logo: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtuqajWzprxyYW6bihoVlEHGRpePK59zqZ4DLQ",
  },
  {
    username: "OpenPanel",
    url: "https://openpanel.dev?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
    logo: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtZSdcHpLMoTtqyenU7vkYSxEW4uPQlw3ps6NX",
  },
  {
    username: "lucide-animated",
    url: "https://lucide-animated.com?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
    logo: "/logos/sponsors/lucide-animated.svg",
  },
  {
    username: "shadcraft",
    url: "https://shadcraft.com?utm_source=uitripled&utm_medium=referral&utm_campaign=sponsors",
  },
];

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl text-balance">
            UI blocks, components & pages
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">
              <span>Built on top of</span>
              <div className="flex items-center gap-1.5 text-foreground">
                <svg
                  viewBox="0 0 1103 386"
                  className="h-3 w-auto"
                  aria-label="Motion"
                >
                  <path
                    fill="#FFF312"
                    d="M416.473 0 198.54 385.66H0L170.17 84.522C196.549 37.842 262.377 0 317.203 0Zm486.875 96.415c0-53.249 44.444-96.415 99.27-96.415 54.826 0 99.27 43.166 99.27 96.415 0 53.248-44.444 96.415-99.27 96.415-54.826 0-99.27-43.167-99.27-96.415ZM453.699 0h198.54L434.306 385.66h-198.54Zm234.492 0h198.542L716.56 301.138c-26.378 46.68-92.207 84.522-147.032 84.522h-99.27Z"
                  />
                </svg>
                <span>Motion</span>
              </div>
            </div>

            <span className="hidden md:inline dark:text-neutral-700 text-neutral-300">
              /
            </span>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">
              <span>Core available in</span>
              <HeroFlip />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Button
              asChild
              size="lg"
              className="min-w-[160px] h-12 rounded-full text-base px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Link href="/components">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Suspense fallback={<StarButtonFallback />}>
              <GithubStarButton />
            </Suspense>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-3"
          role="region"
          aria-label="Sponsors"
        >
          <span className="text-xs font-medium text-muted-foreground/80">
            Sponsored by
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SPONSORS.map((sponsor) => (
              <div key={sponsor.username}>
                <Link
                  href={sponsor.url || `https://github.com/${sponsor.username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full"
                  aria-label={`Visit ${sponsor.username} sponsor`}
                >
                  <NativeAvatarWithName
                    src={
                      sponsor.logo ||
                      `https://github.com/${sponsor.username}.png`
                    }
                    name={sponsor.username}
                    size="sm"
                    direction="top"
                    motionClassName="border-2 border-border rounded-full p-1"
                    className="p-0"
                  />
                </Link>
              </div>
            ))}

            <Link
              href="https://github.com/sponsors/moumen-soliman"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed bg-background transition-all hover:bg-muted border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Become a sponsor"
            >
              <Plus
                className="h-3 w-3 text-foreground"
                strokeWidth={3}
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      <Suspense
        fallback={
          <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 z-10 relative">
            <div className="flex gap-6 overflow-hidden">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-[300px] sm:w-[350px] shrink-0 rounded-xl border border-border bg-background p-5 shadow-sm"
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

      <BrowserComponentGallery />
    </div>
  );
}
