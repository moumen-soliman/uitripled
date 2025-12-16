"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";

interface Stargazer {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

interface HallOfFameGridProps {
  stargazers: Stargazer[];
}

export function HallOfFameGrid({ stargazers }: HallOfFameGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Create array of 100 items, filling in stargazers at their positions
  const totalSlots = 100;
  const slots: (Stargazer | null)[] = Array(totalSlots).fill(null);
  stargazers.forEach((stargazer, index) => {
    if (index < totalSlots) {
      slots[index] = stargazer;
    }
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full max-w-7xl mx-auto p-4"
    >
      {slots.map((user, index) => {
        const isEmpty = user === null;
        const rank = index + 1;

        if (isEmpty) {
          return (
            <motion.div
              key={`empty-${index}`}
              variants={item}
              className="relative group"
            >
              <Link
                href="https://github.com/moumen-soliman/uitripled"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                {/* Empty box styling with subtle animation */}
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl">
                  <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20 animate-spin [animation-duration:3s] group-hover:[animation-duration:2s]" />
                </div>

                {/* Card Content */}
                <div className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-dashed border-border/50 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:border-primary/50 min-h-[200px]">
                  {/* Rank Badge */}
                  <div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-muted text-[10px] font-bold text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    #{rank}
                  </div>

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    {/* Empty Avatar Placeholder */}
                    <div className="h-20 w-20 rounded-full border-2 border-dashed border-border/50 group-hover:border-primary/50 transition-colors flex items-center justify-center bg-muted/30">
                      <Star className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    <div className="text-center space-y-2">
                      <h3 className="font-medium text-base text-muted-foreground group-hover:text-primary transition-colors">
                        Be the next one
                      </h3>
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:text-primary/80 transition-colors">
                        <span>Star on GitHub</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        }

        return (
          <motion.div key={user.id} variants={item} className="relative group">
            <Link
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              {/* Liquid Fire Animation Layers */}
              <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-30 animate-spin [animation-duration:3s] group-hover:[animation-duration:2s]" />
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg,transparent_0_340deg,#9ca3af_360deg)] opacity-60 animate-spin [animation-duration:3s] group-hover:[animation-duration:2s]" />
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent_0_340deg,#6b7280_360deg)] opacity-60 animate-spin [animation-duration:4s] group-hover:[animation-duration:3s] reverse" />
                <div className="absolute inset-0 bg-[conic-gradient(from_270deg,transparent_0_340deg,#374151_360deg)] opacity-60 animate-spin [animation-duration:5s] group-hover:[animation-duration:4s]" />
              </div>

              {/* Orbiting Fireball */}
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 animate-spin [animation-duration:4s] group-hover:[animation-duration:2s]">
                  <div className="absolute top-0 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-gray-300 rounded-full blur-xl opacity-90" />
                </div>
              </div>

              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-400 to-white rounded-2xl blur opacity-20 group-hover:animate-pulse" />
              </div>

              {/* Card Content */}
              <div className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                {/* Rank Badge */}
                <div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-muted text-[10px] font-bold text-muted-foreground group-hover:bg-white/10 group-hover:text-foreground transition-colors">
                  #{rank}
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <Avatar className="h-20 w-20 border-2 border-border group-hover:border-white/50 transition-colors shadow-sm">
                    <AvatarImage src={user.avatar_url} alt={user.login} />
                    <AvatarFallback className="text-lg font-bold bg-muted text-muted-foreground">
                      {user.login.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center space-y-1">
                    <h3 className="font-medium text-base text-foreground group-hover:text-foreground transition-colors truncate max-w-[140px]">
                      {user.login}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      <span>View Profile</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
