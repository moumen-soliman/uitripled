1:"$Sreact.fragment"
2:I[176430,["/_next/static/chunks/dc92709d96e51da4.js","/_next/static/chunks/28d31646f911358e.js","/_next/static/chunks/b0689fc5070200a0.js","/_next/static/chunks/d55ca8c48b5d5d51.js","/_next/static/chunks/2363ff9e745ac33a.js","/_next/static/chunks/5d9ce5f95154af4a.js","/_next/static/chunks/fe35a3e987c156fc.js","/_next/static/chunks/b794c6d381badd61.js","/_next/static/chunks/f7bfd565bd2f913f.js","/_next/static/chunks/b59d4e65b6fc885c.js","/_next/static/chunks/becf1da93e15457b.js","/_next/static/chunks/fdd25d98951f5402.js","/_next/static/chunks/91ff2107e32627dd.js","/_next/static/chunks/0d9443edae03239b.js","/_next/static/chunks/caa50e77cf52fdaa.js","/_next/static/chunks/e0bc9c3a4105a6fe.js","/_next/static/chunks/48913bc585f72fa4.js"],"default"]
a:I[897367,["/_next/static/chunks/d96012bcfc98706a.js","/_next/static/chunks/c1216787d4b31b65.js"],"OutletBoundary"]
b:"$Sreact.suspense"
3:T155b,"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Star, Ticket } from "lucide-react";

export function TheaterTicket() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="group relative flex w-full max-w-2xl flex-col md:flex-row overflow-hidden rounded-xl bg-card border border-border shadow-2xl"
        role="article"
        aria-label="Theater Ticket for The Phantom of the Opera"
      >
        {/* Main Ticket Section */}
        <div className="relative flex-1 p-6 md:p-8 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-card z-0" />

          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay z-0" />

          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div className="flex justify-between items-start">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary bg-primary/10"
              >
                <Star className="w-3 h-3 mr-1 fill-current" /> PREMIERE
              </Badge>
              <Ticket className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="space-y-2">
              <motion.h2
                className="text-3xl md:text-4xl font-serif font-bold text-card-foreground tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                THE PHANTOM
                <br />
                <span className="text-primary">OF THE OPERA</span>
              </motion.h2>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Royal Albert Hall
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">
                  Date
                </p>
                <p className="text-card-foreground font-medium flex items-center">
                  <Calendar className="w-3 h-3 mr-2 text-primary" />
                  Dec 12
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">
                  Time
                </p>
                <p className="text-card-foreground font-medium flex items-center">
                  <Clock className="w-3 h-3 mr-2 text-primary" />
                  19:30
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">
                  Seat
                </p>
                <p className="text-card-foreground font-medium flex items-center">
                  <MapPin className="w-3 h-3 mr-2 text-primary" />
                  A-24
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rip Line (Desktop) */}
        <div className="relative hidden w-8 flex-col items-center justify-center bg-card md:flex">
          <div className="absolute -top-3 w-6 h-6 rounded-full bg-background z-20 border-b border-border" />
          <div className="h-full border-l-2 border-dashed border-border mx-auto" />
          <div className="absolute -bottom-3 w-6 h-6 rounded-full bg-background z-20 border-t border-border" />
        </div>

        {/* Rip Line (Mobile) */}
        <div className="relative flex h-8 w-full items-center justify-center bg-card md:hidden">
          <div className="absolute -left-3 h-6 w-6 rounded-full bg-background z-20 border-r border-border" />
          <div className="w-full border-t-2 border-dashed border-border my-auto" />
          <div className="absolute -right-3 h-6 w-6 rounded-full bg-background z-20 border-l border-border" />
        </div>

        {/* Ticket Stub */}
        <motion.div
          className="relative w-full md:w-32 bg-muted/50 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-border"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Barcode Lines */}
          <div
            className="flex md:flex-col justify-center space-x-1 md:space-x-0 md:space-y-1 h-12 md:h-24 w-full opacity-70"
            role="img"
            aria-label="Barcode"
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`bg-foreground ${i % 3 === 0 || i % 2 === 0 ? "w-1 h-full md:w-full md:h-1" : "w-2 h-full md:w-full md:h-2"}`}
              />
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground md:rotate-90 origin-center whitespace-nowrap mt-2 md:mt-8">
              ADMIT ONE
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
4:T153d,"use client";

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
5:T155b,"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Star, Ticket } from "lucide-react";

export function TheaterTicket() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="group relative flex w-full max-w-2xl flex-col md:flex-row overflow-hidden rounded-xl bg-card border border-border shadow-2xl"
        role="article"
        aria-label="Theater Ticket for The Phantom of the Opera"
      >
        {/* Main Ticket Section */}
        <div className="relative flex-1 p-6 md:p-8 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-card z-0" />

          {/* Background Texture */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay z-0" />

          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div className="flex justify-between items-start">
              <Badge
                variant="outline"
                className="border-primary/50 text-primary bg-primary/10"
              >
                <Star className="w-3 h-3 mr-1 fill-current" /> PREMIERE
              </Badge>
              <Ticket className="w-6 h-6 text-muted-foreground" />
            </div>

            <div className="space-y-2">
              <motion.h2
                className="text-3xl md:text-4xl font-serif font-bold text-card-foreground tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                THE PHANTOM
                <br />
                <span className="text-primary">OF THE OPERA</span>
              </motion.h2>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Royal Albert Hall
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">
                  Date
                </p>
                <p className="text-card-foreground font-medium flex items-center">
                  <Calendar className="w-3 h-3 mr-2 text-primary" />
                  Dec 12
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">
                  Time
                </p>
                <p className="text-card-foreground font-medium flex items-center">
                  <Clock className="w-3 h-3 mr-2 text-primary" />
                  19:30
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase mb-1">
                  Seat
                </p>
                <p className="text-card-foreground font-medium flex items-center">
                  <MapPin className="w-3 h-3 mr-2 text-primary" />
                  A-24
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rip Line (Desktop) */}
        <div className="relative hidden w-8 flex-col items-center justify-center bg-card md:flex">
          <div className="absolute -top-3 w-6 h-6 rounded-full bg-background z-20 border-b border-border" />
          <div className="h-full border-l-2 border-dashed border-border mx-auto" />
          <div className="absolute -bottom-3 w-6 h-6 rounded-full bg-background z-20 border-t border-border" />
        </div>

        {/* Rip Line (Mobile) */}
        <div className="relative flex h-8 w-full items-center justify-center bg-card md:hidden">
          <div className="absolute -left-3 h-6 w-6 rounded-full bg-background z-20 border-r border-border" />
          <div className="w-full border-t-2 border-dashed border-border my-auto" />
          <div className="absolute -right-3 h-6 w-6 rounded-full bg-background z-20 border-l border-border" />
        </div>

        {/* Ticket Stub */}
        <motion.div
          className="relative w-full md:w-32 bg-muted/50 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-border"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Barcode Lines */}
          <div
            className="flex md:flex-col justify-center space-x-1 md:space-x-0 md:space-y-1 h-12 md:h-24 w-full opacity-70"
            role="img"
            aria-label="Barcode"
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`bg-foreground ${i % 3 === 0 || i % 2 === 0 ? "w-1 h-full md:w-full md:h-1" : "w-2 h-full md:w-full md:h-2"}`}
              />
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground md:rotate-90 origin-center whitespace-nowrap mt-2 md:mt-8">
              ADMIT ONE
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
0:{"buildId":"bFBIq5AO28jMw9-shWxSc","rsc":["$","$1","c",{"children":[["$","$L2",null,{"code":"$3","variantCodes":{},"baseId":"theater-ticket","baseuiCode":"$4","shadcnuiCode":"$5"}],["$L6","$L7","$L8"],"$L9"]}],"loading":null,"isPartial":false}
6:["$","script","script-0",{"src":"/_next/static/chunks/caa50e77cf52fdaa.js","async":true}]
7:["$","script","script-1",{"src":"/_next/static/chunks/e0bc9c3a4105a6fe.js","async":true}]
8:["$","script","script-2",{"src":"/_next/static/chunks/48913bc585f72fa4.js","async":true}]
9:["$","$La",null,{"children":["$","$b",null,{"name":"Next.MetadataOutlet","children":"$@c"}]}]
c:null
