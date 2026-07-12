"use client";

import type React from "react";

import { LibrarySelector } from "@/components/library-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@uitripled/react-shadcn/ui/dropdown-menu";
import { Separator } from "@uitripled/react-shadcn/ui/separator";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ChevronDown,
  GithubIcon,
  Grid3X3,
  LayoutTemplate,
  Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinkClass =
  "text-xs font-medium text-muted-foreground transition-colors hover:text-foreground rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

const iconLinkClass =
  "text-muted-foreground transition-colors hover:text-foreground rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

// --- Aurora hover effect for the Background Builder menu item ---

type WaveConfig = {
  height: number;
  bottomRange: [number, number];
  blur: number;
  xKeyframes: string[];
  duration: number;
};

const WAVES: WaveConfig[] = [
  {
    height: 60,
    bottomRange: [-10, 5],
    blur: 8,
    xKeyframes: ["-25%", "0%", "-25%"],
    duration: 8,
  },
  {
    height: 50,
    bottomRange: [15, 30],
    blur: 6,
    xKeyframes: ["0%", "-25%", "0%"],
    duration: 6,
  },
  {
    height: 40,
    bottomRange: [35, 50],
    blur: 4,
    xKeyframes: ["-10%", "-35%", "-10%"],
    duration: 10,
  },
];

type AuroraPalette = {
  base: string;
  waves: [string, string, string];
  blobs: [string, string];
};

const LIGHT_PALETTE: AuroraPalette = {
  base: "linear-gradient(135deg, rgba(239, 246, 255, 0.6) 0%, rgba(219, 234, 254, 0.4) 50%, rgba(191, 219, 254, 0.3) 100%)",
  waves: [
    "linear-gradient(180deg, transparent 0%, rgba(191, 219, 254, 0.7) 40%, rgba(147, 197, 253, 0.5) 100%)",
    "linear-gradient(180deg, transparent 0%, rgba(125, 211, 252, 0.5) 50%, rgba(191, 219, 254, 0.6) 100%)",
    "linear-gradient(180deg, transparent 0%, rgba(219, 234, 254, 0.6) 60%, rgba(239, 246, 255, 0.4) 100%)",
  ],
  blobs: [
    "radial-gradient(ellipse, rgba(219, 234, 254, 0.8) 0%, rgba(191, 219, 254, 0.4) 40%, transparent 70%)",
    "radial-gradient(ellipse, rgba(125, 211, 252, 0.5) 0%, rgba(219, 234, 254, 0.3) 50%, transparent 70%)",
  ],
};

const DARK_PALETTE: AuroraPalette = {
  base: "linear-gradient(135deg, rgba(254, 202, 202, 0.9) 0%, rgba(252, 165, 165, 0.85) 50%, rgba(248, 113, 113, 0.75) 100%)",
  waves: [
    "linear-gradient(180deg, transparent 0%, rgba(254, 226, 226, 0.6) 40%, rgba(254, 202, 202, 0.5) 100%)",
    "linear-gradient(180deg, transparent 0%, rgba(254, 205, 211, 0.5) 50%, rgba(251, 207, 232, 0.6) 100%)",
    "linear-gradient(180deg, transparent 0%, rgba(255, 241, 242, 0.6) 60%, rgba(255, 228, 230, 0.4) 100%)",
  ],
  blobs: [
    "radial-gradient(ellipse, rgba(254, 202, 202, 0.7) 0%, rgba(252, 165, 165, 0.4) 40%, transparent 70%)",
    "radial-gradient(ellipse, rgba(254, 226, 226, 0.5) 0%, rgba(254, 202, 202, 0.3) 50%, transparent 70%)",
  ],
};

function AuroraWave({
  config,
  gradient,
  smoothMouseY,
}: {
  config: WaveConfig;
  gradient: string;
  smoothMouseY: MotionValue<number>;
}) {
  const bottom = useTransform(smoothMouseY, [0, 100], config.bottomRange);

  return (
    <motion.div
      className="absolute w-[200%] left-[-50%]"
      style={{
        height: config.height,
        bottom,
        background: gradient,
        borderRadius: "100% 100% 0 0",
        filter: `blur(${config.blur}px)`,
      }}
      animate={{ x: config.xKeyframes }}
      transition={{
        duration: config.duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

function AuroraWaves({
  className,
  palette,
  smoothMouseX,
  smoothMouseY,
}: {
  className: string;
  palette: AuroraPalette;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
}) {
  const largeBlobX = useTransform(smoothMouseX, [0, 320], [-40, 200]);
  const largeBlobY = useTransform(smoothMouseY, [0, 100], [-30, 30]);
  const smallBlobX = useTransform(smoothMouseX, [0, 320], [40, -60]);
  const smallBlobY = useTransform(smoothMouseY, [0, 100], [10, -20]);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none ${className}`}
    >
      <div className="absolute inset-0" style={{ background: palette.base }} />

      {WAVES.map((wave, index) => (
        <AuroraWave
          key={index}
          config={wave}
          gradient={palette.waves[index]}
          smoothMouseY={smoothMouseY}
        />
      ))}

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 180,
          height: 100,
          background: palette.blobs[0],
          filter: "blur(20px)",
          x: largeBlobX,
          y: largeBlobY,
        }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 120,
          height: 80,
          background: palette.blobs[1],
          filter: "blur(15px)",
          right: 0,
          x: smallBlobX,
          y: smallBlobY,
        }}
      />
    </div>
  );
}

export function Header() {
  const currentURL = usePathname();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });
  const smoothMouseY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <MotionConfig reducedMotion="user">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container-fluid md:max-w-[95rem] mx-auto flex h-16 px-6 items-center justify-between">
          <div className="flex items-center gap-3 relative">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground relative mr-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src="/logos/logo-black.svg"
                alt="UI-TripleD"
                width={80}
                height={70}
                className="block dark:hidden"
              />
              <Image
                src="/logos/logo.svg"
                alt="UI-TripleD"
                width={80}
                height={70}
                className="hidden dark:block"
              />
            </Link>
            {currentURL !== "/" &&
              (currentURL.includes("/components") ||
                currentURL.includes("/builder")) && (
                <>
                  <Separator
                    orientation="vertical"
                    className="h-6 hidden md:block"
                  />
                  <LibrarySelector />
                </>
              )}
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="/components" className={navLinkClass}>
                Components
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer text-xs font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring group">
                  Builders
                  <ChevronDown
                    aria-hidden="true"
                    className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[320px] p-2 z-[100] bg-background/80 backdrop-blur-xl border-border/50"
                  sideOffset={8}
                >
                  <div className="grid gap-1">
                    <DropdownMenuItem
                      asChild
                      className="p-0 focus:bg-accent focus:text-accent-foreground cursor-pointer group"
                    >
                      <Link
                        href="/builder"
                        className="flex items-start gap-3 p-3 rounded-md select-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground relative overflow-hidden"
                      >
                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md mt-0.5 z-10 transition-colors group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
                          <LayoutTemplate className="w-4 h-4 text-zinc-500 dark:text-zinc-400 transition-colors group-hover:text-zinc-700 dark:group-hover:text-zinc-200" />
                        </div>
                        <div className="flex flex-col gap-1 z-10">
                          <div className="text-sm font-medium leading-none text-foreground">
                            Landing Builder
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            Build stunning landing pages with drag-and-drop
                            components.
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="p-0 focus:bg-transparent focus:text-accent-foreground cursor-pointer group"
                    >
                      <Link
                        href="/background-builder"
                        onMouseMove={handleMouseMove}
                        className="flex items-start gap-3 p-3 rounded-md select-none outline-none transition-all relative overflow-hidden"
                      >
                        <AuroraWaves
                          className="dark:hidden"
                          palette={LIGHT_PALETTE}
                          smoothMouseX={smoothMouseX}
                          smoothMouseY={smoothMouseY}
                        />
                        <AuroraWaves
                          className="hidden dark:block"
                          palette={DARK_PALETTE}
                          smoothMouseX={smoothMouseX}
                          smoothMouseY={smoothMouseY}
                        />

                        {/* Soft overlay shimmer */}
                        <motion.div
                          aria-hidden="true"
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                            backgroundSize: "200% 100%",
                          }}
                          animate={{
                            backgroundPosition: ["200% 0%", "-200% 0%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />

                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md mt-0.5 z-10 transition-colors group-hover:bg-white/90 dark:group-hover:bg-white/90 group-hover:shadow-sm">
                          <Palette className="w-4 h-4 text-zinc-500 dark:text-zinc-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-red-600" />
                        </div>
                        <div className="flex flex-col gap-1 z-10">
                          <div className="text-sm font-medium leading-none text-foreground group-hover:text-blue-600/80 dark:group-hover:text-zinc-900 transition-colors">
                            Background Builder
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 group-hover:text-blue-500/80 dark:group-hover:text-zinc-700 transition-colors">
                            Create Aurora gradients and Shader backgrounds.
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="p-0 focus:bg-accent focus:text-accent-foreground cursor-pointer group"
                    >
                      <Link
                        href="/grid-generator"
                        className="flex items-start gap-3 p-3 rounded-md select-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground relative overflow-hidden"
                      >
                        <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md mt-0.5 z-10 transition-colors group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
                          <Grid3X3 className="w-4 h-4 text-zinc-500 dark:text-zinc-400 transition-colors group-hover:text-zinc-700 dark:group-hover:text-zinc-200" />
                        </div>
                        <div className="flex flex-col gap-1 z-10">
                          <div className="text-sm font-medium leading-none text-foreground">
                            Grid Generator
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            Generate complex CSS grids and layouts visually.
                          </p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/hall-of-fame" className={navLinkClass}>
                GitHub Supporters
              </Link>
              <Link
                href="https://x.com/moumensoliman"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClass}
                aria-label="X (Twitter)"
              >
                <Image
                  src="/logos/x-black.svg"
                  alt=""
                  width={17}
                  height={17}
                  className="block dark:hidden"
                />
                <Image
                  src="/logos/x.svg"
                  alt=""
                  width={17}
                  height={17}
                  className="hidden dark:block"
                />
              </Link>
              <Link
                href="https://github.com/moumen-soliman/uitripled"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClass}
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>
    </MotionConfig>
  );
}
