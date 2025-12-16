"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { useUILibrary } from "@/components/ui-library-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { type UILibrary } from "@/types";
import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  const { selectedLibrary, setSelectedLibrary } = useUILibrary();

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 border-border bg-background/80 backdrop-blur-lg"
      >
        <div className="container-fluid md:max-w-[95rem] flex h-16 px-6 items-center justify-between">
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
            <Separator orientation="vertical" className="h-6 hidden md:block" />
            <Select
              value={selectedLibrary}
              onValueChange={(value) => setSelectedLibrary(value as UILibrary)}
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
                          uiLibraries.find((lib) => lib.id === selectedLibrary)
                            ?.logoLight || ""
                        }
                        alt={
                          uiLibraries.find((lib) => lib.id === selectedLibrary)
                            ?.name || ""
                        }
                        width={16}
                        height={16}
                        className="rounded-sm block dark:hidden"
                      />
                      {/* Dark Mode Logo */}
                      <Image
                        src={
                          uiLibraries.find((lib) => lib.id === selectedLibrary)
                            ?.logoDark || ""
                        }
                        alt={
                          uiLibraries.find((lib) => lib.id === selectedLibrary)
                            ?.name || ""
                        }
                        width={16}
                        height={16}
                        className="rounded-sm hidden dark:block"
                      />
                      <span className="font-medium text-sm">
                        {
                          uiLibraries.find((lib) => lib.id === selectedLibrary)
                            ?.name
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
                          src={lib.logoLight}
                          alt={lib.name}
                          width={20}
                          height={20}
                          className="block dark:hidden"
                        />
                        <Image
                          src={lib.logoDark}
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
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/components"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Components
              </Link>
              <Link
                href="/builder"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Builder
              </Link>
              <Link
                href="/grid-generator"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Grid Generator
              </Link>
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
