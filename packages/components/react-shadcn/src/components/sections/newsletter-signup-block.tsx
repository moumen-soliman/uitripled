"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export function NewsletterSignupBlock() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 px-4 py-16">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <Card className="overflow-hidden border-border/50 bg-card/50 shadow-xl backdrop-blur-sm">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Badge className="mb-4 w-fit" variant="secondary">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Stay Updated
                </Badge>
              </motion.div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Join our newsletter
              </h2>
              <p className="mb-6 text-muted-foreground">
                Get the latest updates, articles, and resources delivered
                directly to your inbox every week. No spam, unsubscribe anytime.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Weekly updates", "Exclusive content", "Early access"].map(
                  (feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Badge variant="outline" className="gap-1">
                        <Check className="h-3 w-3 text-primary" />
                        {feature}
                      </Badge>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <motion.div
                        animate={
                          isFocused
                            ? {
                                scale: 1.02,
                                boxShadow:
                                  "0 0 0 3px rgba(var(--primary), 0.1)",
                              }
                            : { scale: 1 }
                        }
                        transition={{ duration: 0.2 }}
                        className="rounded-md"
                      >
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </motion.div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="group w-full"
                      disabled={!email}
                    >
                      <span>Subscribe</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Send className="h-4 w-4" />
                      </motion.div>
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      By subscribing, you agree to our Privacy Policy
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center space-y-4 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
                    >
                      <Check className="h-8 w-8 text-primary" />
                    </motion.div>

                    <div className="text-center">
                      <h3 className="mb-2 text-xl font-semibold">
                        You're all set!
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Check your inbox to confirm your subscription
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </Card>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Join{" "}
            <motion.span
              className="font-semibold text-foreground"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
            >
              10,000+
            </motion.span>{" "}
            subscribers already getting our updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
