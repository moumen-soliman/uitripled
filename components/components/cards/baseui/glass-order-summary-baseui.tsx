"use client";

import { NativeButton } from "@/components/native/baseui/native-button-baseui";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, ShoppingBag } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

interface GlassOrderSummaryBaseUIProps {
  items?: OrderItem[];
  subtotal?: number;
  tax?: number;
  shipping?: number;
  total?: number;
  className?: string;
}

const defaultItems: OrderItem[] = [
  {
    id: "1",
    name: "Premium Icon Pack",
    price: 29.0,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&q=80",
    quantity: 1,
    variant: "Pro License",
  },
  {
    id: "2",
    name: "UI Design Kit",
    price: 49.0,
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?w=100&q=80",
    quantity: 1,
    variant: "Dark Mode",
  },
];

export function GlassOrderSummaryBaseUI({
  items = defaultItems,
  subtotal = 78.0,
  tax = 7.8,
  shipping = 0,
  total = 85.8,
  className,
}: GlassOrderSummaryBaseUIProps) {
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
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Order Summary
            </h3>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-background/40"
              >
                <div className="h-12 w-12 overflow-hidden rounded-md border border-border/50 bg-background/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.variant}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    x{item.quantity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Separator replacement */}
          <div className="my-6 h-px w-full bg-border/50" />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            {shipping > 0 && (
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            )}
            <div className="mt-4 flex justify-between text-base font-semibold text-foreground">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <NativeButton
            variant="default"
            size="lg"
            glow
            className="mt-6 w-full"
          >
            <CreditCard className="h-4 w-4" />
            Pay Now
            <ArrowRight className="h-4 w-4" />
          </NativeButton>
        </div>
      </div>
    </motion.div>
  );
}
