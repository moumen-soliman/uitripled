"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

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
  const uid = useId();
  const notchRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Move focus into the panel on open, back to the notch on close.
  useEffect(() => {
    if (isOpen) {
      wasOpen.current = true;
      closeButtonRef.current?.focus();
    } else if (wasOpen.current) {
      notchRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        variant === "overlay"
          ? "relative flex items-center justify-center w-[160px] h-[60px]"
          : "flex items-start justify-center",
        className
      )}
    >
      <MotionConfig reducedMotion="user">
        <motion.div
          ref={notchRef}
          layout
          role={!isOpen ? "button" : undefined}
          tabIndex={!isOpen ? 0 : -1}
          aria-expanded={isOpen}
          aria-label={!isOpen ? `Open ${name}'s profile` : undefined}
          className={cn(
            "bg-background text-foreground overflow-hidden z-50 border border-accent/60",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isOpen ? "rounded-3xl" : "rounded-full cursor-pointer",
            variant === "overlay" ? "absolute top-0 left-0" : "relative"
          )}
          initial={false}
          animate={{
            width: isOpen ? 320 : 160,
            height: isOpen ? 380 : 60,
            borderRadius: isOpen ? 32 : 32,
          }}
          transition={{
            width: {
              delay: isOpen ? 0 : 0.25,
              type: "spring",
              stiffness: 260,
              damping: 30,
            },
            height: {
              delay: isOpen ? 0.15 : 0,
              type: "spring",
              stiffness: 260,
              damping: 30,
            },
            borderRadius: {
              delay: isOpen ? 0 : 0.25,
              type: "spring",
              stiffness: 260,
              damping: 30,
            },
            layout: { duration: 0.35, ease: "easeInOut" },
          }}
          onClick={() => !isOpen && setIsOpen(true)}
          onKeyDown={(e) => {
            if (!isOpen && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              setIsOpen(true);
            }
            if (isOpen && e.key === "Escape") {
              setIsOpen(false);
            }
          }}
        >
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="collapsed"
                className="absolute inset-0 flex items-center justify-center w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 px-4 w-full">
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarImage
                      src={imageSrc}
                      alt=""
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
                  <ChevronRight
                    aria-hidden="true"
                    className="w-4 h-4 text-muted-foreground ml-auto"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full relative p-6 cursor-default"
              >
                {/* Close Button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="absolute top-4 right-4 p-1 rounded-full bg-muted/50 hover:bg-muted transition-colors z-10 outline-none focus-visible:ring-2 focus-visible:ring-ring after:absolute after:-inset-2"
                  aria-label="Close profile"
                >
                  <X aria-hidden="true" className="w-4 h-4 text-muted-foreground" />
                </button>

                {/* Scrollable Content */}
                <div className="flex flex-col items-center w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  {/* Profile Header */}
                  <div className="flex flex-col items-center mt-4 flex-shrink-0">
                    <motion.div
                      layoutId={`${uid}-avatar`}
                      className="w-24 h-24 rounded-full overflow-hidden border-4 border-muted/20 shadow-lg mb-4"
                    >
                      <img
                        src={imageSrc}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <motion.p
                      layoutId={`${uid}-name`}
                      className="text-xl font-bold text-foreground text-center"
                    >
                      {name}
                    </motion.p>

                    <motion.p
                      layoutId={`${uid}-username`}
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
                      type="button"
                      className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
      </MotionConfig>
    </div>
  );
}
