"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Link2,
  Mail,
  MessageSquare,
  Share2,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type DropdownType = "share" | "quick" | "history" | "magic" | "model" | null;

type ActionOption = {
  icon: typeof Link2;
  label: string;
  action: string;
};

const shareOptions: ActionOption[] = [
  { icon: Link2, label: "Copy link", action: "copy-link" },
  { icon: Mail, label: "Email", action: "email" },
  { icon: MessageSquare, label: "Slack", action: "slack" },
];

const quickOptions: ActionOption[] = [
  { icon: Sparkles, label: "Summarize", action: "summarize" },
  { icon: Sparkles, label: "Improve", action: "improve" },
  { icon: Sparkles, label: "Translate", action: "translate" },
];

const historyOptions: ActionOption[] = [
  { icon: Clock, label: "Last hour", action: "history-1h" },
  { icon: Clock, label: "Today", action: "history-today" },
  { icon: Clock, label: "This week", action: "history-week" },
];

const magicOptions: ActionOption[] = [
  { icon: Sparkles, label: "Auto-complete", action: "magic-complete" },
  { icon: Sparkles, label: "Storyboard", action: "magic-storyboard" },
  { icon: Sparkles, label: "Rephrase", action: "magic-rephrase" },
];

const models = ["GPT 5.0", "GPT 4.5 Turbo", "GPT 4.0", "Claude 3.5 Sonnet"];

export function AIChatInterface() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const prefersReducedMotion = useReducedMotion();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const shouldAnimate = !prefersReducedMotion;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const renderDropdown = (
    type: DropdownType,
    options: ActionOption[],
    align: "left" | "right" = "left"
  ) => (
    <AnimatePresence>
      {activeDropdown === type && (
        <motion.div
          key={type}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-3 w-56 rounded-2xl border border-border/40 bg-background/85 py-2 shadow-[0_24px_60px_rgba(15,23,42,0.24)] backdrop-blur-xl`}
          role="menu"
        >
          {options.map((option) => (
            <Button
              key={option.action}
              onClick={() => {
                console.log(`Action: ${option.action}`);
                setActiveDropdown(null);
              }}
              className="flex w-full justify-start items-center gap-3 px-4 py-2 text-sm text-foreground/85 transition-all hover:bg-foreground/[0.05] hover:text-foreground"
              role="menuitem"
              type="button"
              variant="ghost"
            >
              <option.icon size={16} className="text-foreground/60" />
              <span>{option.label}</span>
            </Button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.section
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldAnimate ? { duration: 0.5 } : { duration: 0 }}
      className="relative w-full"
    >
      <div className="space-y-8">
        <div
          className={`relative rounded-[28px] border border-border/50 bg-background/70 px-6 py-6 backdrop-blur-xl transition w-full z-10 ${
            isFocused ? "shadow-[0_28px_80px_rgba(15,23,42,0.24)]" : ""
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20/20 via-transparent to-transparent" />
          <div className="relative space-y-5">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground/45">
                Prompt
              </span>
              <p className="text-sm text-foreground/60">
                Share goals, context, tone, and desired output.
              </p>
            </div>
            <label htmlFor="chat-input" className="sr-only">
              Ask AI anything
            </label>
            <Textarea
              id="chat-input"
              ref={textareaRef}
              value={inputValue}
              onChange={handleTextareaChange}
              placeholder="Ask AI anything..."
              className="w-full resize-none bg-transparent text-base text-foreground/90 placeholder:text-foreground/40 focus:outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              rows={1}
              aria-label="Chat input"
            />

            <div
              className="flex flex-wrap items-center gap-2 border-t border-border/25 pt-3"
              ref={dropdownRef}
            >
              <div className="relative">
                <Button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "share" ? null : "share"
                    )
                  }
                  className="group rounded-xl p-2 bg-background/80 transition-all hover:bg-foreground/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                  aria-label="Share options"
                  aria-expanded={activeDropdown === "share"}
                  aria-haspopup="menu"
                  type="button"
                >
                  <Share2
                    size={18}
                    className="text-foreground/50 group-hover:text-foreground"
                    strokeWidth={2}
                  />
                </Button>
                {renderDropdown("share", shareOptions)}
              </div>

              <div className="relative">
                <Button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "quick" ? null : "quick"
                    )
                  }
                  className="group rounded-xl p-2 bg-background/80 transition-all hover:bg-foreground/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                  aria-label="Quick actions"
                  aria-expanded={activeDropdown === "quick"}
                  aria-haspopup="menu"
                  type="button"
                >
                  <Zap
                    size={18}
                    className="text-foreground/50 group-hover:text-foreground"
                    strokeWidth={2}
                  />
                </Button>
                {renderDropdown("quick", quickOptions)}
              </div>

              <div className="relative">
                <Button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "history" ? null : "history"
                    )
                  }
                  className="group rounded-xl p-2 bg-background/80 transition-all hover:bg-foreground/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                  aria-label="History"
                  aria-expanded={activeDropdown === "history"}
                  aria-haspopup="menu"
                  type="button"
                >
                  <Clock
                    size={18}
                    className="text-foreground/50 group-hover:text-foreground"
                    strokeWidth={2}
                  />
                </Button>
                {renderDropdown("history", historyOptions)}
              </div>

              <div className="relative">
                <Button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "magic" ? null : "magic"
                    )
                  }
                  className="group rounded-xl p-2 bg-background/80 transition-all hover:bg-foreground/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                  aria-label="Magic options"
                  aria-expanded={activeDropdown === "magic"}
                  aria-haspopup="menu"
                  type="button"
                >
                  <Sparkles
                    size={18}
                    className="text-foreground/50 group-hover:text-foreground"
                    strokeWidth={2}
                  />
                </Button>
                {renderDropdown("magic", magicOptions)}
              </div>

              <div className="relative ml-auto">
                <Button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "model" ? null : "model"
                    )
                  }
                  className="flex items-center gap-2 rounded-xl border border-border/30 bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground/80 transition hover:border-border/40 hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                  aria-label="Select AI model"
                  aria-expanded={activeDropdown === "model"}
                  aria-haspopup="listbox"
                  type="button"
                >
                  <span>{selectedModel}</span>
                  <ChevronDown size={16} className="text-foreground/50" />
                </Button>

                <AnimatePresence>
                  {activeDropdown === "model" && (
                    <motion.div
                      key="model-dropdown"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute right-0 mt-3 w-56 rounded-2xl border border-border/40 bg-background/85 py-2 shadow-[0_24px_60px_rgba(15,23,42,0.24)] backdrop-blur-xl z-50"
                      role="listbox"
                    >
                      {models.map((model) => (
                        <Button
                          key={model}
                          onClick={() => {
                            setSelectedModel(model);
                            setActiveDropdown(null);
                          }}
                          className={`flex w-full items-center justify-between px-4 py-2 text-sm transition-all ${
                            selectedModel === model
                              ? "bg-primary/15 font-medium text-primary hover:bg-primary/20"
                              : "text-foreground/80 hover:bg-foreground/[0.05]"
                          }`}
                          role="option"
                          aria-selected={selectedModel === model}
                          type="button"
                          variant={
                            selectedModel === model ? "default" : "ghost"
                          }
                        >
                          {model}
                          {selectedModel === model && (
                            <Star size={14} className="text-primary/80" />
                          )}
                        </Button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                type="button"
                size="lg"
                className="inline-flex items-center gap-2 rounded-full px-5 text-xs uppercase tracking-[0.28em]"
                onClick={() => console.log("Action: send-message")}
              >
                Send
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
