"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, QrCode, Sparkles } from "lucide-react";

export function ConferenceTicketBaseui() {
  return (
    <div className="flex min-h-[600px] w-full items-center justify-center p-8 perspective-1000">
      <motion.div
        initial={{ opacity: 0, rotateX: -10, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          type: "spring",
          bounce: 0.2,
          damping: 20,
          stiffness: 90,
        }}
        whileHover={{
          scale: 1.02,
          rotateX: 2,
          rotateY: 2,
          transition: { duration: 0.4 },
        }}
        className="relative flex w-full max-w-3xl flex-col md:flex-row"
        style={{ transformStyle: "preserve-3d" }}
        role="article"
        aria-label="Conference Ticket for Design & Motion Summit"
      >
        {/* Main Ticket Content (Left Side) */}
        <div className="relative flex-1 overflow-hidden rounded-3xl border border-b-0 border-border/50 bg-background/30 p-8 backdrop-blur-xl md:rounded-l-3xl md:rounded-r-none md:border-b md:border-r-0 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-primary opacity-5" />
          <div className="absolute -inset-full animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-primary to-transparent opacity-5" />

          {/* Dashed Line (Right Border for Desktop) */}
          <div className="absolute bottom-0 right-0 top-0 hidden border-r-2 border-dashed border-border/50 md:block" />

          {/* Cutout Circles (Desktop) */}
          <div className="absolute -right-3 -top-3 z-10 hidden h-6 w-6 rounded-full bg-background md:block" />
          <div className="absolute -bottom-3 -right-3 z-10 hidden h-6 w-6 rounded-full bg-background md:block" />

          {/* Dashed Line (Bottom Border for Mobile) */}
          <div className="absolute bottom-0 left-0 right-0 block border-b-2 border-dashed border-border/50 md:hidden" />

          {/* Cutout Circles (Mobile) */}
          <div className="absolute -bottom-3 -left-3 z-10 block h-6 w-6 rounded-full bg-background md:hidden" />
          <div className="absolute -bottom-3 -right-3 z-10 block h-6 w-6 rounded-full bg-background md:hidden" />
          {/* Decorative Circles */}
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl" />
          <div className="absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-accent opacity-10 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary backdrop-blur-md">
                  <Sparkles className="mr-1 h-3 w-3" /> VIP ACCESS
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  #TRIPLE-D-2025
                </span>
              </div>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
                >
                  Design &<br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Motion Summit
                  </span>
                </motion.h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  The future of interactive interfaces.
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  DATE
                </div>
                <p className="font-medium text-foreground">Oct 24-26, 2025</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  LOCATION
                </div>
                <p className="font-medium text-foreground">San Francisco, CA</p>
              </div>
            </div>

            {/* Attendee Info */}
            <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card/30 p-4 backdrop-blur-md">
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                <img
                  src="https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8"
                  alt="Moumen Soliman"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Moumen Soliman
                </p>
                <p className="text-xs text-muted-foreground">
                  Senior Product Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stub / QR Code (Right Side) */}
        <motion.div
          whileHover={{
            x: 15,
            rotate: 5,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className="relative flex w-full flex-col items-center justify-center rounded-3xl border border-t-0 border-border/50 bg-card/10 p-8 backdrop-blur-md md:w-64 md:rounded-l-none md:rounded-r-3xl md:border-l-0 md:border-t"
        >
          <div className="space-y-6 text-center">
            <div
              className="rounded-xl bg-white p-4 shadow-lg"
              aria-label="QR Code"
            >
              <QrCode className="h-32 w-32 text-black" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Ticket No.
              </p>
              <p className="font-mono text-xl font-bold text-foreground">
                A1-8842
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span>Confirmed</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
