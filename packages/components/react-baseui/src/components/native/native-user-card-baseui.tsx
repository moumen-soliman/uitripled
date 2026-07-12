"use client";

import { Avatar } from "@base-ui/react/avatar";
import { Button } from "@base-ui/react/button";
import { cn } from "@uitripled/utils";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NativeUserCardProps {
  imageSrc: string;
  name: string;
  handle: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const transition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

const wrapperClassName =
  "group block w-full max-w-full cursor-pointer rounded-xl text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function NativeUserCard({
  imageSrc,
  name,
  handle,
  href = "#",
  onClick,
  className,
}: NativeUserCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 5 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex w-full max-w-full items-center justify-between gap-4 rounded-xl border border-border bg-card p-1",
        "transition-colors duration-200 group-hover:bg-accent/50",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div
          aria-hidden="true"
          className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12"
        >
          <Avatar.Root className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
            <Avatar.Image
              src={imageSrc}
              alt=""
              className="h-full w-full object-cover"
            />
            <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-muted font-semibold text-muted-foreground">
              {name.charAt(0).toUpperCase()}
            </Avatar.Fallback>
          </Avatar.Root>
          <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10" />
        </div>

        <div className="flex min-w-0 flex-col">
          <p className="truncate text-sm font-semibold leading-tight tracking-tight text-foreground">
            {name}
          </p>
          <p className="truncate text-xs font-medium text-muted-foreground">
            {handle}
          </p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground sm:h-12 sm:w-12"
      >
        <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:translate-x-[3px]" />
      </span>
    </motion.div>
  );

  return (
    <MotionConfig transition={transition} reducedMotion="user">
      {onClick ? (
        <Button
          onClick={onClick}
          aria-label={`View ${name}'s profile`}
          className={wrapperClassName}
        >
          {card}
        </Button>
      ) : (
        <a
          href={href}
          aria-label={`View ${name}'s profile`}
          className={wrapperClassName}
        >
          {card}
        </a>
      )}
    </MotionConfig>
  );
}
