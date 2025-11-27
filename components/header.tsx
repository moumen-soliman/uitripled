"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50 border-border bg-background/80 backdrop-blur-lg"
      >
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-8 relative">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground relative"
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
              <Badge
                variant="outline"
                className="text-[xs] backdrop-blur-sm border border-border bg-black/10 rounded-sm absolute top-0 left-[76px]"
              >
                BETA
              </Badge>
            </Link>
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
                href="/hall-of-fame"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Hall of Fame
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
