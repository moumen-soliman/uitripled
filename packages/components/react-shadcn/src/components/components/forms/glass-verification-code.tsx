"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";

const CODE_LENGTH = 6;

export function GlassVerificationCodeCard() {
  const shouldReduceMotion = useReducedMotion();
  const [code, setCode] = useState(Array<string>(CODE_LENGTH).fill(""));
  const [status, setStatus] = useState<"idle" | "verified" | "error">("idle");

  const handleChange = (value: string, index: number) => {
    const sanitized = value.replace(/\D/g, "").slice(-1);
    setCode((prev) => {
      const updated = [...prev];
      updated[index] = sanitized;
      return updated;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasEmpty = code.some((digit) => digit.trim().length === 0);
    setStatus(hasEmpty ? "error" : "verified");
  };

  const combinedCode = useMemo(() => code.join(""), [code]);

  const resetCode = () => {
    setCode(Array<string>(CODE_LENGTH).fill(""));
    setStatus("idle");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: shouldReduceMotion ? "linear" : [0.16, 1, 0.3, 1],
      }}
      className="group w-full max-w-md rounded-3xl overflow-hidden border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-10 relative"
      aria-labelledby="glass-verification-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"
      />
      <div className="mb-8 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Verify Email
        </div>
        <h1
          id="glass-verification-title"
          className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
        >
          Enter verification code
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We sent a 6-digit code to your inbox. Enter it below to confirm your
          email.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-2">
          {code.map((digit, index) => (
            <Input
              key={index}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(event) => handleChange(event.target.value, index)}
              className="h-14 w-full rounded-2xl border-border/60 bg-background/60 text-center text-lg font-semibold"
              aria-label={`Verification digit ${index + 1}`}
            />
          ))}
        </div>

        <Button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_18px_55px_-30px_rgba(79,70,229,0.75)] transition-transform duration-300 hover:-translate-y-1"
        >
          Verify code
        </Button>
      </form>

      <motion.p
        role="status"
        initial={{ opacity: 0 }}
        animate={{ opacity: status === "verified" ? 1 : 0 }}
        className="mt-6 text-center text-xs text-primary/80"
      >
        Verification successful! Redirecting you now.
      </motion.p>
      <motion.p
        role="status"
        initial={{ opacity: 0 }}
        animate={{ opacity: status === "error" ? 1 : 0 }}
        className="mt-6 text-center text-xs text-rose-400/80"
      >
        Please fill every digit before verifying.
      </motion.p>

      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
        <button
          type="button"
          className="text-primary underline-offset-4 hover:underline"
          onClick={resetCode}
        >
          Resend code
        </button>
        <span aria-live="polite">Code: {combinedCode || "______"}</span>
      </div>
    </motion.div>
  );
}
