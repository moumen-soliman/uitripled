"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Card = {
  id: string;
  title: string;
  description: string;
  color?: string;
};

type StackedCardCarouselProps = {
  cards?: Card[];
};

export function StackedCardCarousel({
  cards = [
    {
      id: "1",
      title: "Card One",
      description: "Description for card one",
      color: "bg-primary",
    },
    {
      id: "2",
      title: "Card Two",
      description: "Description for card two",
      color: "bg-primary/80",
    },
    {
      id: "3",
      title: "Card Three",
      description: "Description for card three",
      color: "bg-primary/60",
    },
  ],
}: StackedCardCarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative h-96 w-full max-w-md">
      {cards.map((card, index) => {
        const isHovered = hoveredIndex === index;
        const zIndex = isHovered ? cards.length : cards.length - index;
        const scale = isHovered ? 1.05 : 1 - index * 0.05;
        const y = isHovered ? index * -20 : index * 10;
        const rotate = isHovered ? (index % 2 === 0 ? -2 : 2) : 0;

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              zIndex,
              scale,
              y,
              rotate,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`absolute inset-0 rounded-2xl border border-border bg-card p-6 shadow-lg ${card.color || ""}`}
          >
            <motion.div
              animate={{
                y: isHovered ? -10 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
