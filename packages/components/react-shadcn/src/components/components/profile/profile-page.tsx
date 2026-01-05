"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Calendar,
  Link as LinkIcon,
  MapPin,
  MoreHorizontal,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

export function ProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="">
      {/* Cover Image with Gradient Animation */}
      <div
        className="relative h-48 md:h-64 w-full overflow-hidden rounded-b-2xl"
        role="img"
        aria-label="Profile cover background"
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
              "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
              "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
              "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)",
              "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 pb-6">
        {/* Profile Header */}
        <div className="relative -mt-8 sm:-mt-8 mb-6 sm:mb-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex items-end gap-4 sm:gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-background bg-background shadow-xl">
                <Avatar className="h-full w-full">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Moumen Soliman's profile picture"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-2xl sm:text-4xl">
                    MS
                  </AvatarFallback>
                </Avatar>
              </div>
              <div
                className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-4 w-4 sm:h-5 sm:w-5 rounded-2xl border-4 border-background bg-emerald-500"
                aria-label="Online status: Active"
                role="status"
              />
            </motion.div>

            <div className="mb-1 sm:mb-2 space-y-0.5 sm:space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Moumen Soliman
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                @moumensoliman
              </p>
            </div>
          </div>

          <div className="flex w-full gap-2 sm:gap-3 md:w-auto md:mb-2">
            <Button
              className={cn(
                "flex-1 md:flex-none gap-2 transition-all",
                isFollowing
                  ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  : ""
              )}
              variant={isFollowing ? "secondary" : "default"}
              onClick={() => setIsFollowing(!isFollowing)}
              aria-label={
                isFollowing
                  ? "Unfollow Moumen Soliman"
                  : "Follow Moumen Soliman"
              }
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              {isFollowing ? "Following" : "Follow"}
            </Button>
            <Button
              variant="outline"
              className="flex-1 md:flex-none"
              aria-label="Message Moumen Soliman"
            >
              Message
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="border border-border/40"
              aria-label="More profile options"
            >
              <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Bio & Stats */}
        <section
          aria-label="User bio and statistics"
          className="grid gap-8 md:grid-cols-[2fr,1fr]"
        >
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                Product Designer & Frontend Developer. Passionate about building
                beautiful, accessible user interfaces. Creating digital
                experiences that matter. ✨
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LinkIcon
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                  <a
                    href="#"
                    className="hover:text-primary hover:underline"
                    aria-label="Visit Moumen Soliman's website"
                  >
                    moumen.dev
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                  <span>Joined March 2024</span>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 pt-2 text-sm sm:text-base">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-foreground">1,240</span>
                  <span className="text-muted-foreground">Following</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-foreground">8,560</span>
                  <span className="text-muted-foreground">Followers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-foreground">342</span>
                  <span className="text-muted-foreground">Posts</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
