"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, Clock, Film, MapPin, QrCode, Star } from "lucide-react";

export function CinemaTicket() {
  return (
    <div className="flex min-h-[600px] w-full items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        whileHover={{ y: -10 }}
        className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-card border border-border"
        role="article"
        aria-label="Cinema Ticket for Interstellar"
      >
        {/* Poster Section */}
        <div className="relative h-96 w-full overflow-hidden bg-neutral-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <motion.img
            src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Interstellar Movie Poster"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute top-4 right-4 z-20">
            <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 border-none">
              IMAX 3D
            </Badge>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                INTERSTELLAR
              </h2>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />{" "}
                  8.9
                </span>
                <span>•</span>
                <span>Sci-Fi / Adventure</span>
                <span>•</span>
                <span>2h 49m</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ticket Details Section */}
        <div className="relative flex-1 bg-card p-6 flex flex-col">
          <div className="flex-1">
            <div className="mt-2 grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Date
                </p>
                <div className="flex items-center gap-2 font-medium text-card-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Nov 14, 2025</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Time
                </p>
                <div className="flex items-center gap-2 font-medium text-card-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>20:00</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Cinema
                </p>
                <div className="flex items-center gap-2 font-medium text-card-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Odeon Luxe</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Seat
                </p>
                <div className="flex items-center gap-2 font-medium text-card-foreground">
                  <Film className="w-4 h-4 text-primary" />
                  <span>Row H, Seat 12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rip Line */}
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute -left-6 h-12 w-12 rounded-full bg-transparent z-20" />
            <div className="w-full border-t-2 border-dashed border-border/50" />
            <div className="absolute -right-6 h-12 w-12 rounded-full bg-transparent z-20" />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Ticket ID
              </p>
              <p className="font-mono text-lg font-bold text-card-foreground">
                #9938421
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg" aria-label="QR Code">
              <QrCode className="w-12 h-12 text-black" aria-hidden="true" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
