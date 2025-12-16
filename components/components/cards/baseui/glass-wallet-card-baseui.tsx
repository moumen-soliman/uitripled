"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  TrendingUp,
  Wallet,
} from "lucide-react";

interface GlassWalletCardBaseUIProps {
  balance?: string;
  currency?: string;
  address?: string;
  trend?: string;
  trendUp?: boolean;
  cardHolder?: string;
  expiry?: string;
  className?: string;
}

const defaultWallet = {
  balance: "12,345.67",
  currency: "ETH",
  address: "0x71C...9A23",
  trend: "+5.2%",
  trendUp: true,
  cardHolder: "Alex Morgan",
  expiry: "12/28",
};

export function GlassWalletCardBaseUI({
  balance = defaultWallet.balance,
  currency = defaultWallet.currency,
  address = defaultWallet.address,
  trend = defaultWallet.trend,
  trendUp = defaultWallet.trendUp,
  cardHolder = defaultWallet.cardHolder,
  expiry = defaultWallet.expiry,
  className,
}: GlassWalletCardBaseUIProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-[400px]", className)}
    >
      {/* Card replacement */}
      <div className="group relative h-56 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 via-card/40 to-card/20 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        {/* Abstract Background Shapes */}
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-secondary/10 blur-3xl transition-all duration-500 group-hover:bg-secondary/20" />

        <div className="relative flex h-full flex-col justify-between p-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary backdrop-blur-sm">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Total Balance
                </p>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">
                    ${balance}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {currency}
                  </span>
                </div>
              </div>
            </div>
            {/* Badge replacement */}
            <span
              className={cn(
                "inline-flex items-center rounded-full border border-border/50 bg-background/50 px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm",
                trendUp ? "text-green-500" : "text-red-500"
              )}
            >
              <TrendingUp className="mr-1 h-3 w-3" />
              {trend}
            </span>
          </div>

          {/* Card Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                <span>•••• •••• •••• 4242</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {expiry}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {cardHolder}
              </span>
              <span className="rounded-full bg-secondary/50 px-3 py-1 font-mono text-xs text-secondary-foreground backdrop-blur-sm">
                {address}
              </span>
            </div>
          </div>

          {/* Hover Actions Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 bg-background/60 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                <ArrowUpRight className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-foreground">Send</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg">
                <ArrowDownLeft className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-foreground">
                Receive
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
