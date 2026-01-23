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

export function NativeUserCard({
  imageSrc,
  name,
  handle,
  href = "#",
  onClick,
  className,
}: NativeUserCardProps) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 5 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={transition}
      className={cn(
        "group relative flex w-full max-w-full items-center justify-between gap-4 rounded-lg border border-border bg-card p-1 transition-all duration-300",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-12 sm:w-12">
          <Avatar.Root className="h-full w-full rounded-lg">
            <Avatar.Image src={imageSrc} alt={name} className="h-full w-full object-cover" />
            <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground font-semibold">
              {name.charAt(0)}
            </Avatar.Fallback>
          </Avatar.Root>
        </div>

        <div className="flex min-w-0 flex-col">
          <h3 className="truncate text-sm font-semibold leading-none tracking-tight text-foreground">
            {name}
          </h3>
          <p className="truncate text-xs font-medium text-muted-foreground">
            {handle}
          </p>
        </div>
      </div>

      <div className="relative shrink-0 pl-2">
        <Button
          className={cn(
            "flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-primary text-primary-foreground opacity-100 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          <motion.div whileTap={{ scale: 0.95 }}>
            <ArrowRight className="h-3 w-3" />
          </motion.div>
        </Button>
      </div>
    </motion.div>
  );

  return (
    <MotionConfig transition={transition}>
      {onClick ? (
        <Button
          onClick={onClick}
          className="block w-full max-w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg h-auto p-0 hover:bg-transparent"
          aria-label={`View profile of ${name}`}
        >
          {CardContent}
        </Button>
      ) : (
        <a
          href={href}
          className="block w-full max-w-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
          aria-label={`View profile of ${name}`}
        >
          {CardContent}
        </a>
      )}
    </MotionConfig>
  );
}
