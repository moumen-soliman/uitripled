"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const daysInMonth = Array.from({ length: 28 }, (_, i) => i + 1);

export function SimpleCalendar() {
  const [selectedDay, setSelectedDay] = useState<number | null>(15);

  return (
    <div className="w-full max-w-sm rounded-2xl border  bg-[var(--card-bg)] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold">January 2024</h3>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg p-1 hover:bg-[var(--foreground)]/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg p-1 hover:bg-[var(--foreground)]/10"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-[var(--foreground)]/60"
          >
            {day}
          </div>
        ))}

        {daysInMonth.map((day) => (
          <motion.button
            key={day}
            onClick={() => setSelectedDay(day)}
            className="relative aspect-square rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              color: selectedDay === day ? "white" : "var(--foreground)",
            }}
          >
            {selectedDay === day && (
              <motion.div
                layoutId="calendar-selected"
                className="absolute inset-0 rounded-lg bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{day}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
