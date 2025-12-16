"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Star, Ticket } from "lucide-react";

export function TheaterTicketBaseui() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="group relative flex w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl md:flex-row"
        role="article"
        aria-label="Theater Ticket for The Phantom of the Opera"
      >
        {/* Main Ticket Section */}
        <div className="relative flex-1 overflow-hidden p-6 md:p-8">
          {/* Gradient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-card" />

          {/* Background Texture */}
          <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />

          <div className="relative z-10 flex h-full flex-col justify-between space-y-6">
            <div className="flex items-start justify-between">
              <span className="inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                <Star className="mr-1 h-3 w-3 fill-current" /> PREMIERE
              </span>
              <Ticket className="h-6 w-6 text-muted-foreground" />
            </div>

            <div className="space-y-2">
              <motion.h2
                className="font-serif text-3xl font-bold tracking-wide text-card-foreground md:text-4xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                THE PHANTOM
                <br />
                <span className="text-primary">OF THE OPERA</span>
              </motion.h2>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Royal Albert Hall
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
              <div>
                <p className="mb-1 text-xs uppercase text-muted-foreground">
                  Date
                </p>
                <p className="flex items-center font-medium text-card-foreground">
                  <Calendar className="mr-2 h-3 w-3 text-primary" />
                  Dec 12
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase text-muted-foreground">
                  Time
                </p>
                <p className="flex items-center font-medium text-card-foreground">
                  <Clock className="mr-2 h-3 w-3 text-primary" />
                  19:30
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase text-muted-foreground">
                  Seat
                </p>
                <p className="flex items-center font-medium text-card-foreground">
                  <MapPin className="mr-2 h-3 w-3 text-primary" />
                  A-24
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rip Line (Desktop) */}
        <div className="relative hidden w-8 flex-col items-center justify-center bg-card md:flex">
          <div className="absolute -top-3 z-20 h-6 w-6 rounded-full border-b border-border bg-background" />
          <div className="mx-auto h-full border-l-2 border-dashed border-border" />
          <div className="absolute -bottom-3 z-20 h-6 w-6 rounded-full border-t border-border bg-background" />
        </div>

        {/* Rip Line (Mobile) */}
        <div className="relative flex h-8 w-full items-center justify-center bg-card md:hidden">
          <div className="absolute -left-3 z-20 h-6 w-6 rounded-full border-r border-border bg-background" />
          <div className="my-auto w-full border-t-2 border-dashed border-border" />
          <div className="absolute -right-3 z-20 h-6 w-6 rounded-full border-l border-border bg-background" />
        </div>

        {/* Ticket Stub */}
        <motion.div
          className="relative flex w-full flex-col items-center justify-center border-l border-t border-border bg-muted/50 p-6 md:w-32 md:border-l md:border-t-0"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Barcode Lines */}
          <div
            className="flex h-12 w-full justify-center space-x-1 opacity-70 md:h-24 md:flex-col md:space-x-0 md:space-y-1"
            role="img"
            aria-label="Barcode"
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`bg-foreground ${Math.random() > 0.5 ? "h-full w-1 md:h-1 md:w-full" : "h-full w-2 md:h-2 md:w-full"}`}
              />
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="origin-center whitespace-nowrap text-xs text-muted-foreground md:mt-8 md:rotate-90">
              ADMIT ONE
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
