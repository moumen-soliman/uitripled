"use client";

import { NativeButton } from "@/components/native/baseui/native-button-baseui";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, CreditCard, Lock } from "lucide-react";
import { useState } from "react";

interface GlassCheckoutCardBaseUIProps {
  amount?: number;
  className?: string;
}

export function GlassCheckoutCardBaseUI({
  amount = 85.8,
  className,
}: GlassCheckoutCardBaseUIProps) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-[400px]", className)}
    >
      {/* Card replacement */}
      <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              Payment Details
            </h3>
            <p className="text-sm text-muted-foreground">
              Complete your purchase securely
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mb-6 grid grid-cols-3 gap-2">
            {["card", "paypal", "apple"].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={cn(
                  "flex h-12 items-center justify-center rounded-lg border border-border/50 bg-background/50 transition-all hover:bg-background/80",
                  paymentMethod === method &&
                    "border-primary bg-primary/10 text-primary"
                )}
              >
                {method === "card" && <CreditCard className="h-5 w-5" />}
                {method === "paypal" && (
                  <span className="font-bold italic">Pay</span>
                )}
                {method === "apple" && (
                  <span className="font-semibold">Pay</span>
                )}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              {/* Label replacement */}
              <label
                htmlFor="cardNumber"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Card Number
              </label>
              <div className="relative">
                {/* Input replacement */}
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 pl-10 text-sm backdrop-blur-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="expiry"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Expiry Date
                </label>
                <div className="relative">
                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 pl-10 text-sm backdrop-blur-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="cvc"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  CVC
                </label>
                <div className="relative">
                  <input
                    id="cvc"
                    type="text"
                    placeholder="123"
                    className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 pl-10 text-sm backdrop-blur-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cardholder Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm backdrop-blur-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <NativeButton
            variant="default"
            size="lg"
            glow
            className="mt-6 w-full"
          >
            Pay ${amount.toFixed(2)}
          </NativeButton>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            <Lock className="inline-block h-3 w-3 mr-1" />
            Payments are secure and encrypted
          </p>
        </div>
      </div>
    </motion.div>
  );
}
