"use client";

import type React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { useUILibrary } from "@/components/ui-library-provider";
import type { UILibrary } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@uitripled/react-shadcn/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@uitripled/react-shadcn/ui/select";
import { Separator } from "@uitripled/react-shadcn/ui/separator";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

const uiLibraries = [
  {
    id: "shadcnui",
    name: "shadcn/ui",
    logoLight: "/logos/shadcnui_dark.svg",
    logoDark: "/logos/shadcnui_white.svg",
    description: "Beautifully designed components",
    badge: "Popular",
  },
  {
    id: "baseui",
    name: "Base UI",
    logoLight: "/logos/baseui_white.svg",
    logoDark: "/logos/baseui_dark.svg",
    description: "Unstyled React components",
  },
];

export function Header() {
  const currentURL = usePathname();
  const { selectedLibrary, setSelectedLibrary } = useUILibrary();

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
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 border-border bg-background/80 backdrop-blur-lg"
      >
        <div className="container-fluid md:max-w-[95rem] mx-auto flex h-16 px-6 items-center justify-between">
          <div className="flex items-center gap-3 relative">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground relative mr-2"
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

              {/* <Badge
                variant="outline"
                className="text-[xs] backdrop-blur-sm border border-border bg-black/10 rounded-sm absolute top-0 left-[76px]"
              >
                BETA
              </Badge> */}
            </Link>
            {currentURL.includes("/components") && (
              <>
                <Separator
                  orientation="vertical"
                  className="h-6 hidden md:block"
                />
                <Select
                  value={selectedLibrary}
                  onValueChange={(value) =>
                    setSelectedLibrary(value as UILibrary)
                  }
                >
                  <SelectTrigger
                    className="h-8 w-auto gap-2 cursor-pointer border-none bg-transparent px-2 focus:ring-0 shadow-none focus:ring-offset-0 ring-offset-0 outline-none"
                    aria-label="Select UI library"
                  >
                    <SelectValue placeholder="Select Library">
                      {selectedLibrary && (
                        <div className="flex items-center gap-2">
                          {/* Light Mode Logo */}
                          <Image
                            src={
                              uiLibraries.find(
                                (lib) => lib.id === selectedLibrary
                              )?.logoLight || ""
                            }
                            alt={
                              uiLibraries.find(
                                (lib) => lib.id === selectedLibrary
                              )?.name || ""
                            }
                            width={16}
                            height={16}
                            className="rounded-sm block dark:hidden"
                          />
                          {/* Dark Mode Logo */}
                          <Image
                            src={
                              uiLibraries.find(
                                (lib) => lib.id === selectedLibrary
                              )?.logoDark || ""
                            }
                            alt={
                              uiLibraries.find(
                                (lib) => lib.id === selectedLibrary
                              )?.name || ""
                            }
                            width={16}
                            height={16}
                            className="hidden dark:block"
                          />
                          <span className="font-medium text-sm">
                            {
                              uiLibraries.find(
                                (lib) => lib.id === selectedLibrary
                              )?.name
                            }
                          </span>
                        </div>
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="">
                    {uiLibraries.map((lib) => (
                      <SelectItem
                        key={lib.id}
                        value={lib.id}
                        className="py-3 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="mt-0.5 rounded-sm overflow-hidden flex-shrink-0">
                            <Image
                              src={lib.logoLight || "/placeholder.svg"}
                              alt={lib.name}
                              width={20}
                              height={20}
                              className="block dark:hidden"
                            />
                            <Image
                              src={lib.logoDark || "/placeholder.svg"}
                              alt={lib.name}
                              width={20}
                              height={20}
                              className="hidden dark:block"
                            />
                          </div>
                          <div className="flex flex-col gap-1 text-left">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm text-foreground">
                                {lib.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/components"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Components
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer text-xs font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1 outline-none group">
                  Builders
                  <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
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
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none dark:hidden">
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(239, 246, 255, 0.6) 0%, rgba(219, 234, 254, 0.4) 50%, rgba(191, 219, 254, 0.3) 100%)",
                            }}
                          />

                          <motion.div
                            className="absolute w-[200%] h-[60px] left-[-50%]"
                            style={{
                              bottom: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [-10, 5]
                              ),
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(191, 219, 254, 0.7) 40%, rgba(147, 197, 253, 0.5) 100%)",
                              borderRadius: "100% 100% 0 0",
                              filter: "blur(8px)",
                            }}
                            animate={{
                              x: ["-25%", "0%", "-25%"],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />

                          <motion.div
                            className="absolute w-[200%] h-[50px] left-[-50%]"
                            style={{
                              bottom: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [15, 30]
                              ),
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(125, 211, 252, 0.5) 50%, rgba(191, 219, 254, 0.6) 100%)",
                              borderRadius: "100% 100% 0 0",
                              filter: "blur(6px)",
                            }}
                            animate={{
                              x: ["0%", "-25%", "0%"],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />

                          <motion.div
                            className="absolute w-[200%] h-[40px] left-[-50%]"
                            style={{
                              bottom: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [35, 50]
                              ),
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(219, 234, 254, 0.6) 60%, rgba(239, 246, 255, 0.4) 100%)",
                              borderRadius: "100% 100% 0 0",
                              filter: "blur(4px)",
                            }}
                            animate={{
                              x: ["-10%", "-35%", "-10%"],
                            }}
                            transition={{
                              duration: 10,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />

                          <motion.div
                            className="absolute rounded-full"
                            style={{
                              width: "180px",
                              height: "100px",
                              background:
                                "radial-gradient(ellipse, rgba(219, 234, 254, 0.8) 0%, rgba(191, 219, 254, 0.4) 40%, transparent 70%)",
                              filter: "blur(20px)",
                              x: useTransform(
                                smoothMouseX,
                                [0, 320],
                                [-40, 200]
                              ),
                              y: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [-30, 30]
                              ),
                            }}
                          />

                          <motion.div
                            className="absolute rounded-full"
                            style={{
                              width: "120px",
                              height: "80px",
                              background:
                                "radial-gradient(ellipse, rgba(125, 211, 252, 0.5) 0%, rgba(219, 234, 254, 0.3) 50%, transparent 70%)",
                              filter: "blur(15px)",
                              right: 0,
                              x: useTransform(
                                smoothMouseX,
                                [0, 320],
                                [40, -60]
                              ),
                              y: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [10, -20]
                              ),
                            }}
                          />
                        </div>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none hidden dark:block">
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(254, 202, 202, 0.9) 0%, rgba(252, 165, 165, 0.85) 50%, rgba(248, 113, 113, 0.75) 100%)",
                            }}
                          />

                          <motion.div
                            className="absolute w-[200%] h-[60px] left-[-50%]"
                            style={{
                              bottom: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [-10, 5]
                              ),
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(254, 226, 226, 0.6) 40%, rgba(254, 202, 202, 0.5) 100%)",
                              borderRadius: "100% 100% 0 0",
                              filter: "blur(8px)",
                            }}
                            animate={{
                              x: ["-25%", "0%", "-25%"],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />

                          <motion.div
                            className="absolute w-[200%] h-[50px] left-[-50%]"
                            style={{
                              bottom: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [15, 30]
                              ),
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(254, 205, 211, 0.5) 50%, rgba(251, 207, 232, 0.6) 100%)",
                              borderRadius: "100% 100% 0 0",
                              filter: "blur(6px)",
                            }}
                            animate={{
                              x: ["0%", "-25%", "0%"],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />

                          <motion.div
                            className="absolute w-[200%] h-[40px] left-[-50%]"
                            style={{
                              bottom: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [35, 50]
                              ),
                              background:
                                "linear-gradient(180deg, transparent 0%, rgba(255, 241, 242, 0.6) 60%, rgba(255, 228, 230, 0.4) 100%)",
                              borderRadius: "100% 100% 0 0",
                              filter: "blur(4px)",
                            }}
                            animate={{
                              x: ["-10%", "-35%", "-10%"],
                            }}
                            transition={{
                              duration: 10,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          />

                          <motion.div
                            className="absolute rounded-full"
                            style={{
                              width: "180px",
                              height: "100px",
                              background:
                                "radial-gradient(ellipse, rgba(254, 202, 202, 0.7) 0%, rgba(252, 165, 165, 0.4) 40%, transparent 70%)",
                              filter: "blur(20px)",
                              x: useTransform(
                                smoothMouseX,
                                [0, 320],
                                [-40, 200]
                              ),
                              y: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [-30, 30]
                              ),
                            }}
                          />

                          <motion.div
                            className="absolute rounded-full"
                            style={{
                              width: "120px",
                              height: "80px",
                              background:
                                "radial-gradient(ellipse, rgba(254, 226, 226, 0.5) 0%, rgba(254, 202, 202, 0.3) 50%, transparent 70%)",
                              filter: "blur(15px)",
                              right: 0,
                              x: useTransform(
                                smoothMouseX,
                                [0, 320],
                                [40, -60]
                              ),
                              y: useTransform(
                                smoothMouseY,
                                [0, 100],
                                [10, -20]
                              ),
                            }}
                          />
                        </div>

                        {/* Soft overlay shimmer */}
                        <motion.div
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
              <Link
                href="/hall-of-fame"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub Supporters
              </Link>
              <Link
                href="https://x.com/moumensoliman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground text-white"
                aria-label="Twitter"
              >
                <Image
                  src="/logos/x-black.svg"
                  alt="Twitter"
                  width={17}
                  height={17}
                  className="block dark:hidden"
                />
                <Image
                  src="/logos/x.svg"
                  alt="Twitter"
                  width={17}
                  height={17}
                  className="hidden dark:block"
                />
              </Link>
              <Link
                href="https://github.com/moumen-soliman/uitripled"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </motion.header>
    </>
  );
}
