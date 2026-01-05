"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

export interface NativeProfileNotchProps {
  /**
   * Url of the user image
   */
  imageSrc: string;
  /**
   * Name of the user
   */
  name: string;
  /**
   * Handle or role of the user
   */
  username: string;
  /**
   * Custom content to show in expanded state
   */
  children?: React.ReactNode;
  /**
   * Size of the notch
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Class name for the container
   */
  className?: string;
  /**
   * Variant of the notch.
   * "default": expands and pushes content.
   * "overlay": expands over content (absolute positioning).
   * @default "default"
   */
  variant?: "default" | "overlay";
}

export function NativeProfileNotch({
  imageSrc,
  name,
  username,
  children,
  size = "md",
  className,
  variant = "default",
}: NativeProfileNotchProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        variant === "overlay"
          ? "relative flex items-center justify-center w-[160px] h-[60px]"
          : "flex items-start justify-center",
        className
      )}
    >
      <motion.div
        layout
        className={cn(
          "bg-background text-foreground overflow-hidden z-50 cursor-pointer border border-accent/60",
          isOpen ? "rounded-3xl" : "rounded-full",
          variant === "overlay" ? "absolute top-0 left-0" : "relative"
        )}
        initial={false}
        animate={{
          width: isOpen ? 320 : 160,
          height: isOpen ? 380 : 60,
          borderRadius: isOpen ? 24 : 24,
        }}
        transition={{
          width: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          height: {
            delay: isOpen ? 0.2 : 0,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          borderRadius: {
            delay: isOpen ? 0 : 0.3,
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
          layout: { duration: 0.3 },
        }}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="collapsed"
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex items-center gap-3 px-4 w-full">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage
                    src={imageSrc}
                    alt={name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-muted text-[10px] text-foreground">
                    {name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-medium text-foreground truncate">
                    {name}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    @{username}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex flex-col h-full relative p-6 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="absolute top-4 right-4 p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10"
                aria-label="Close profile"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              {/* Scrollable Content */}
              <div className="flex flex-col items-center w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {/* Profile Header */}
                <div className="flex flex-col items-center mt-4 flex-shrink-0">
                  <motion.div
                    layoutId="avatar"
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted/20 shadow-lg mb-4"
                  >
                    <img
                      src={imageSrc}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.h3
                    layoutId="name"
                    className="text-xl font-bold text-foreground text-center"
                  >
                    {name}
                  </motion.h3>

                  <motion.p
                    layoutId="username"
                    className="text-muted-foreground text-sm font-medium text-center"
                  >
                    @{username}
                  </motion.p>
                </div>

                {/* Custom Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 w-full flex-1"
                >
                  {children}
                </motion.div>

                {/* Bottom Action */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 w-full pt-4 sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent p-1"
                >
                  <button
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    View Full Profile
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
