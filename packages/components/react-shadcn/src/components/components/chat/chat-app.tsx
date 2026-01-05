"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Loader2, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! How can I help you today?",
    sender: "bot",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: 2,
    text: "Hi there! I was wondering about your features.",
    sender: "user",
    timestamp: new Date(Date.now() - 30000),
  },
  {
    id: 3,
    text: "Of course! What would you like to know?",
    sender: "bot",
    timestamp: new Date(Date.now() - 15000),
  },
];

export function ChatApp() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const formatTime = (date: Date): string => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, "0");
    return `${displayHours}:${displayMinutes} ${ampm}`;
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: Date.now(),
      text: trimmed,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response with typing indicator
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Thanks for your message! This is an automated response. I can help you with various tasks and answer your questions.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      inputRef.current?.focus();
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="">
      <Card className="flex h-[700px] w-full md:w-[600px] mx-auto flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-6 py-4"
        >
          <div className="flex items-center gap-4">
            <motion.div
              className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot
                className="h-6 w-6 text-primary-foreground"
                aria-hidden="true"
              />
              <motion.div
                className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
            <div>
              <h1 className="text-lg font-semibold">AI Assistant</h1>
              <p className="text-sm text-muted-foreground">
                Always here to help
              </p>
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 px-6">
          <div
            className="space-y-6 py-6"
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-md ${
                      message.sender === "user" ? "bg-primary" : "bg-accent"
                    }`}
                    aria-hidden="true"
                  >
                    {message.sender === "user" ? (
                      <User className="h-5 w-5 text-primary-foreground" />
                    ) : (
                      <Bot className="h-5 w-5 text-accent-foreground" />
                    )}
                  </motion.div>
                  <div
                    className={`flex max-w-[75%] flex-col ${
                      message.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className={`rounded-2xl px-4 py-3 shadow-sm ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </motion.div>
                    <time
                      className="mt-1.5 px-1 text-xs text-muted-foreground"
                      dateTime={message.timestamp.toISOString()}
                    >
                      {formatTime(message.timestamp)}
                    </time>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex gap-3"
                  aria-live="polite"
                  aria-label="AI is typing"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent shadow-md">
                    <Bot
                      className="h-5 w-5 text-accent-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex items-center gap-1 rounded-2xl bg-accent px-4 py-3 shadow-sm">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-accent-foreground/60"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-accent-foreground/60"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-accent-foreground/60"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>

        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-t bg-gradient-to-r from-background via-accent/5 to-background p-6"
        >
          <div className="flex gap-3" role="group" aria-label="Message input">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 rounded-full border-2 px-4 focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Message input"
              disabled={isTyping}
            />
            <Button
              onClick={handleSend}
              size="icon"
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
              type="button"
              className="h-11 w-11 rounded-full shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-50"
            >
              {isTyping ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </motion.div>
      </Card>
    </div>
  );
}
