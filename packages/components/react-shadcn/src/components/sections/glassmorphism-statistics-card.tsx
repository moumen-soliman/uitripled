"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Bike, TrendingUp } from "lucide-react";
import { useState } from "react";

const athlete = {
  name: "Marcus Chen",
  title: "Professional Mountain Biker",
  description:
    "Elite endurance athlete specializing in cross-country and trail racing",
  image:
    "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80",
  stats: [
    { label: "Total Distance", value: "12,450 km", icon: Bike },
    { label: "Avg Speed", value: "28.5 km/h", icon: TrendingUp },
    { label: "Achievements", value: "47 Wins", icon: Award },
  ],
};

export function GlassmorphismStatisticsCard() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial="default"
        animate={isHovered ? "hover" : "default"}
      >
        <Card
          className="group relative h-96 overflow-hidden border border-border/40 transition-all duration-500 hover:border-border/60 hover:shadow-xl sm:h-[500px]"
          role="article"
          aria-label={`${athlete.name} - ${athlete.title}`}
        >
          {/* Background Image with loading state */}
          <div className="absolute inset-0">
            {!isImageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-muted" />
            )}
            <motion.div
              className="h-full w-full"
              variants={{
                default: { scale: 1 },
                hover: { scale: 1.05 },
              }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={athlete.image || "/placeholder.svg"}
                alt={athlete.name}
                className="h-full w-full object-cover"
                onLoad={() => setIsImageLoaded(true)}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"
              animate={{
                opacity: isHovered ? 0.9 : 0.75,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Content Container */}
          <div className="relative flex h-full flex-col justify-between">
            <motion.div
              className="relative z-10 flex-1"
              variants={{
                default: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Text content at end of card */}
            <motion.div
              className="relative z-10 p-4 sm:p-6"
              variants={{
                default: { y: 0, opacity: 1 },
                hover: { y: -12, opacity: 0.7 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {athlete.name}
                </h3>
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {athlete.title}
                </p>
                <p className="line-clamp-2 text-xs text-muted-foreground/80 sm:text-sm">
                  {athlete.description}
                </p>
              </div>
            </motion.div>

            {/* Stats grid - appears on hover */}
            <motion.div
              className="relative z-20 border-t border-border/20 backdrop-blur-sm"
              variants={{
                default: { opacity: 0, height: 0 },
                hover: { opacity: 1, height: "auto" },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="grid grid-cols-3 divide-x divide-border/20">
                {athlete.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="flex flex-col items-center justify-center p-3 sm:p-4"
                      variants={{
                        default: { opacity: 0, y: 8 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.06,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Icon className="mb-2 h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
                      <p className="text-xs text-muted-foreground/70">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-foreground sm:text-base">
                        {stat.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
