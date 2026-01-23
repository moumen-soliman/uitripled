"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface NativeUserCardProps {
  imageSrc: string;
  name: string;
  handle: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

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
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      className={cn(
        "group relative flex w-full max-w-full items-center justify-between gap-4 rounded-lg border border-border bg-card p-1 transition-all duration-300",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-12 sm:w-12">
          <Avatar className="h-full w-full rounded-lg">
            <AvatarImage src={imageSrc} alt={name} className="object-cover" />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
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
          size="icon"
          className="h-10 w-10 shrink-0 rounded-lg bg-primary text-primary-foreground opacity-100 transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12"
          asChild
        >
          <motion.div
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="h-3 w-3" />
          </motion.div>
        </Button>
      </div>
    </motion.div>
  );

  if (onClick) {
    return (
      <Button onClick={onClick} className="block w-full max-w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg h-auto p-0 hover:bg-transparent">
        {CardContent}
      </Button>
    );
  }

  return (
    <Link href={href} className={cn("block w-full max-w-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg")}>
      {CardContent}
    </Link>
  );
}
