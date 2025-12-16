"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-sm">
      <label className="mb-2 block text-sm font-medium">Password</label>
      <div className="relative">
        <motion.input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border  bg-[var(--card-bg)] px-4 py-2 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Enter your password"
          autoComplete="off"
          name="password-demo"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-0 bottom-0 -translate-y-1/2 text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {showPassword ? (
              <motion.div
                key="eye-off"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <EyeOff className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="eye"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Eye className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      {password && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-2"
        >
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: password.length > i * 3 ? 1 : 0,
                }}
                className="h-1 flex-1 rounded-full bg-accent"
                style={{ originX: 0 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1 text-xs text-[var(--foreground)]/60"
          >
            Password strength:{" "}
            {password.length < 4
              ? "Weak"
              : password.length < 8
                ? "Medium"
                : "Strong"}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
