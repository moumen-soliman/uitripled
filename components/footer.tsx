import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 ">
          {/* Brand Column */}
          <div className="text-center space-y-4 py-12">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logos/logo-black.svg"
                alt="UI-TripleD"
                width={220}
                height={220}
                className="block h-8 w-auto dark:hidden"
              />
              <Image
                src="/logos/logo.svg"
                alt="UI-TripleD"
                width={220}
                height={220}
                className="hidden h-8 w-auto dark:block"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Production-ready UI components and templates built with modern web
              technologies.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              © 2025 UI-TripleD. All rights reserved. Built by{" "}
              <a
                href="https://x.com/uitripled"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:text-primary/80"
              >
                TripleD Studio
              </a>
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="https://github.com/moumen-soliman/uitripled"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Follow us on Twitter"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/moumensoliman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Follow us on Twitter"
              >
                <Image
                  src="/logos/x-black.svg"
                  alt="Twitter"
                  width={16}
                  height={16}
                  className="block dark:hidden"
                />
                <Image
                  src="/logos/x.svg"
                  alt="Twitter"
                  width={16}
                  height={16}
                  className="hidden dark:block"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
