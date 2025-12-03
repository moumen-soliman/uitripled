"use client";

import { useCallback, useId, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Zap,
  Brain,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Agent {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "online" | "busy" | "offline";
  icon: React.ElementType;
  gradient: string;
}

const AI_AGENTS: Agent[] = [
  {
    id: "gpt4",
    name: "GPT-4",
    role: "Advanced Reasoning",
    avatar: "https://github.com/shadcn.png",
    status: "online",
    icon: Sparkles,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: "claude",
    name: "Claude 3.5",
    role: "Creative Writing",
    avatar: "https://github.com/shadcn.png",
    status: "online",
    icon: Brain,
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: "gemini",
    name: "Gemini Pro",
    role: "Multimodal Analysis",
    avatar: "https://github.com/shadcn.png",
    status: "busy",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "copilot",
    name: "Copilot",
    role: "Code Assistant",
    avatar: "https://github.com/shadcn.png",
    status: "online",
    icon: Code,
    gradient: "from-purple-500/20 to-violet-500/20",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transformOrigin: "bottom right",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 10, x: -10 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<string>(AI_AGENTS[0].id);
  const [message, setMessage] = useState("");
  const widgetId = useId();

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  const currentAgent =
    AI_AGENTS.find((a) => a.id === selectedAgent) || AI_AGENTS[0];
  const AgentIcon = currentAgent.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[380px] overflow-hidden rounded-2xl border border-border/40 bg-background/60 shadow-2xl backdrop-blur-xl ring-1 ring-white/10"
          >
            {/* Header */}
            <div className="relative border-b border-border/40 bg-muted/30 p-4 overflow-hidden">
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50",
                  currentAgent.gradient
                )}
              />
              <div className="relative flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                      <AvatarImage
                        src={currentAgent.avatar}
                        alt={currentAgent.name}
                      />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <span
                      className={cn(
                        "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background",
                        currentAgent.status === "online"
                          ? "bg-emerald-500"
                          : currentAgent.status === "busy"
                            ? "bg-amber-500"
                            : "bg-slate-400"
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {currentAgent.name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-muted-foreground">
                        {currentAgent.role}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-background/50"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Agent Selector */}
            <div className="border-b border-border/40 p-3">
              <Select value={selectedAgent} onValueChange={setSelectedAgent}>
                <SelectTrigger className="w-full border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0 text-lg font-medium h-auto hover:bg-transparent px-2 py-6 cursor-pointer">
                  <SelectValue placeholder="Select an agent" />
                </SelectTrigger>
                <SelectContent className="backdrop-blur-xl bg-background/90 border-border/40">
                  {AI_AGENTS.map((agent) => {
                    const Icon = agent.icon;
                    return (
                      <SelectItem
                        key={agent.id}
                        value={agent.id}
                        className="cursor-pointer focus:bg-primary/10"
                      >
                        <div className="flex items-center gap-3 py-1">
                          <div
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br",
                              agent.gradient
                            )}
                          >
                            <Icon className="h-4 w-4 text-foreground/80" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-sm font-medium">
                              {agent.name}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              {agent.role}
                            </span>
                          </div>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Chat Area */}
            <div className="flex h-[320px] flex-col gap-4 overflow-y-auto p-4 bg-gradient-to-b from-background/20 to-background/40">
              <motion.div variants={messageVariants} className="flex gap-3">
                <Avatar className="h-8 w-8 border border-border/40 shadow-sm">
                  <AvatarImage src={currentAgent.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div className="flex max-w-[85%] flex-col gap-1">
                  <span className="text-xs font-medium text-muted-foreground">
                    {currentAgent.name}
                  </span>
                  <div className="rounded-2xl rounded-tl-none bg-muted/50 px-4 py-2.5 text-sm shadow-sm backdrop-blur-sm border border-border/20">
                    <p>
                      Hello! I'm {currentAgent.name}. How can I assist you with
                      your project today?
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* User Message Mock */}
              <motion.div
                variants={messageVariants}
                className="flex flex-row-reverse gap-3 self-end"
              >
                <Avatar className="h-8 w-8 border border-border/40 shadow-sm">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    ME
                  </AvatarFallback>
                </Avatar>
                <div className="flex max-w-[85%] flex-col items-end gap-1">
                  <div className="rounded-2xl rounded-tr-none bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-md">
                    <p>I need help optimizing my dashboard performance.</p>
                  </div>
                </div>
              </motion.div>

              {/* Typing Indicator Mock */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-3"
              >
                <Avatar className="h-8 w-8 border border-border/40 shadow-sm">
                  <AvatarImage src={currentAgent.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div className="rounded-2xl rounded-tl-none bg-muted/50 px-4 py-3 shadow-sm backdrop-blur-sm border border-border/20 w-16 flex items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="border-t border-border/40 bg-background/60 p-3 backdrop-blur-md">
              <form
                className="relative flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage("");
                }}
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Message ${currentAgent.name}...`}
                  className="flex-1 rounded-full border border-border/40 bg-background/50 px-4 py-2.5 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:ring-2 focus:ring-primary/10"
                />
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:shadow-primary/25"
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        className={cn(
          "cursor-pointer group relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300",
          isOpen
            ? "bg-destructive text-destructive-foreground rotate-90"
            : "bg-primary text-primary-foreground hover:shadow-primary/25"
        )}
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-inherit opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
