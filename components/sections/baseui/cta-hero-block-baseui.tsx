"use client";

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const benefits = [
  "No credit card required",
  "Cancel anytime",
  "Free 14-day trial",
];

export function CTAHeroBlockBaseui() {
  const [email, setEmail] = useState("");
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background px-4 py-16 md:py-24 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl md:h-[600px] md:w-[600px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl md:h-[600px] md:w-[600px]"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="mb-4 md:mb-6 inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                <Sparkles className="mr-1 h-3 w-3" />
                Limited Time Offer
              </span>
            </motion.div>

            <motion.h1
              className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:mb-6 md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transform Your Business{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Today
              </span>
            </motion.h1>

            <motion.p
              className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join thousands of companies using our platform to streamline their
              workflow, boost productivity, and achieve remarkable results.
            </motion.p>

            {/* Email signup form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6 md:mb-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-12 md:h-14 flex-1 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="group inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </div>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground md:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-4 md:mt-12"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-background"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                      alt={`User ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">10,000+</span>
                <span className="text-muted-foreground"> happy customers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Video/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="flex items-center justify-center"
          >
            <motion.div
              onHoverStart={() => setIsVideoHovered(true)}
              onHoverEnd={() => setIsVideoHovered(false)}
              className="relative w-full max-w-lg"
            >
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-gradient-to-br from-card to-card/50 p-4 shadow-2xl md:p-6">
                <motion.div
                  className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Video thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-purple-500/10">
                    <motion.div
                      animate={
                        isVideoHovered
                          ? { scale: 1.1, rotate: 0 }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg md:h-20 md:w-20">
                        <Play className="ml-1 h-8 w-8 text-primary-foreground md:h-10 md:w-10" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute right-4 top-4 rounded-lg bg-background/80 p-2 shadow-lg backdrop-blur-sm md:p-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Zap className="h-4 w-4 text-primary md:h-5 md:w-5" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-4 left-4 rounded-lg bg-background/80 p-2 shadow-lg backdrop-blur-sm md:p-3"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary md:h-5 md:w-5" />
                  </motion.div>
                </motion.div>

                {/* Stats overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-4 grid grid-cols-3 gap-2 md:gap-4"
                >
                  {[
                    { label: "Users", value: "50K+" },
                    { label: "Rating", value: "4.9★" },
                    { label: "Countries", value: "120+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 1.3 + index * 0.1,
                        type: "spring",
                      }}
                      className="rounded-lg bg-muted/50 p-2 text-center backdrop-blur-sm md:p-3"
                    >
                      <div className="text-base font-bold md:text-lg">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
