"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CheckCheck,
  MoreVertical,
  Paperclip,
  Phone,
  Search,
  Send,
  Video,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type Message = {
  id: string;
  sender: "user" | "contact";
  author: string;
  text: string;
  timestamp: string;
};

type Conversation = {
  id: string;
  name: string;
  title: string;
  status: "online" | "offline";
  unread: number;
  initials: string;
  messages: Message[];
  quickReplies: string[];
  autoReplies: string[];
};

const initialConversations: Conversation[] = [
  {
    id: "product-updates",
    name: "Morgan James",
    title: "Product Strategy",
    status: "online",
    unread: 2,
    initials: "MJ",
    messages: [
      {
        id: "product-1",
        sender: "contact",
        author: "Morgan",
        text: "Thanks for the recap on the CashFlow release. The beta cohort loves the motion work.",
        timestamp: "09:18",
      },
      {
        id: "product-2",
        sender: "user",
        author: "You",
        text: "Amazing to hear. Do we have a decision on the new Messenger surface?",
        timestamp: "09:21",
      },
      {
        id: "product-3",
        sender: "contact",
        author: "Morgan",
        text: "Almost there. Design asked for one more pass on the animation timings - soft ease on expand.",
        timestamp: "09:24",
      },
    ],
    quickReplies: [
      "I can share a timing proposal.",
      "Let me know if you need a demo recording.",
      "We can add an onboarding tooltip.",
    ],
    autoReplies: [
      "That would help so much - a short clip would be perfect.",
      "Can we confirm the handoff checklist by tomorrow?",
      "Love the attention to accessibility details here.",
    ],
  },
  {
    id: "customer-success",
    name: "Leah Patel",
    title: "Customer Success",
    status: "offline",
    unread: 0,
    initials: "LP",
    messages: [
      {
        id: "success-1",
        sender: "contact",
        author: "Leah",
        text: "Morning! Enterprise users keep mentioning how clear the summary cards feel.",
        timestamp: "08:05",
      },
      {
        id: "success-2",
        sender: "user",
        author: "You",
        text: "Great sign. Do we need any follow-up education for folks migrating from the legacy dashboard?",
        timestamp: "08:08",
      },
      {
        id: "success-3",
        sender: "contact",
        author: "Leah",
        text: "Maybe a guided walkthrough. I can draft the outline if you can provide the animation cues.",
        timestamp: "08:11",
      },
    ],
    quickReplies: [
      "Happy to add cues for the walkthrough.",
      "Let us sync after the support standup.",
      "We can capture a Loom covering the flows.",
    ],
    autoReplies: [
      "Perfect. Support will love a beat-by-beat cue list.",
      "Thanks - I will drop a doc in the shared folder shortly.",
      "Appreciate you keeping motion accessible throughout.",
    ],
  },
  {
    id: "engineering-handoff",
    name: "Build Squad",
    title: "Engineering Handoff",
    status: "offline",
    unread: 1,
    initials: "BS",
    messages: [
      {
        id: "build-1",
        sender: "contact",
        author: "Carson",
        text: "Do you have the reduced-motion variants for Messenger handy?",
        timestamp: "Yesterday",
      },
      {
        id: "build-2",
        sender: "user",
        author: "You",
        text: "Yep - exporting now with notes on keyboard focus states.",
        timestamp: "Yesterday",
      },
    ],
    quickReplies: [
      "Uploading the reduced-motion recording now.",
      "Focus ring spec is ready if you need it.",
      "We can pair on the final QA pass.",
    ],
    autoReplies: [
      "Legend - the team will plug that into the Storybook build tonight.",
      "Appreciate the extra detail on focus management.",
      "We will ping if anything else blocks us.",
    ],
  },
];

type ReplyCursorState = Record<string, number>;

export function Messenger() {
  const [selectedConversationId, setSelectedConversationId] = useState<string>(
    initialConversations[0]?.id ?? ""
  );
  const [conversations, setConversations] =
    useState<Conversation[]>(initialConversations);
  const [draft, setDraft] = useState("");
  const [replyCursor, setReplyCursor] = useState<ReplyCursorState>(() => {
    const cursor: ReplyCursorState = {};
    initialConversations.forEach((conversation) => {
      cursor[conversation.id] = 0;
    });
    return cursor;
  });
  const shouldReduceMotion = useReducedMotion();
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const liveRegionRef = useRef<HTMLDivElement | null>(null);
  const selectedConversationRef = useRef<string>(selectedConversationId);
  const replyTimeoutRef = useRef<number | null>(null);

  const activeConversation = useMemo(() => {
    return conversations.find(
      (conversation) => conversation.id === selectedConversationId
    );
  }, [conversations, selectedConversationId]);

  useEffect(() => {
    selectedConversationRef.current = selectedConversationId;
    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === selectedConversationId
          ? { ...conversation, unread: 0 }
          : conversation
      )
    );
  }, [selectedConversationId]);

  useEffect(() => {
    if (!messagesContainerRef.current) {
      return;
    }
    const container = messagesContainerRef.current;
    const behavior = shouldReduceMotion ? "auto" : "smooth";

    const scrollToBottom = () => {
      container.scrollTo({ top: container.scrollHeight, behavior });
    };

    if (behavior === "smooth") {
      requestAnimationFrame(scrollToBottom);
    } else {
      scrollToBottom();
    }
  }, [
    activeConversation?.messages,
    activeConversation?.id,
    shouldReduceMotion,
  ]);

  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) {
        window.clearTimeout(replyTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!liveRegionRef.current || !activeConversation) {
      return;
    }
    const lastMessage =
      activeConversation.messages[activeConversation.messages.length - 1];
    if (!lastMessage) {
      return;
    }
    liveRegionRef.current.textContent =
      lastMessage.author +
      " at " +
      lastMessage.timestamp +
      ": " +
      lastMessage.text;
  }, [activeConversation?.messages, activeConversation]);

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!draft.trim() || !activeConversation) {
      return;
    }

    const conversationId = activeConversation.id;
    const timestamp = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const outgoing: Message = {
      id: "outgoing-" + Date.now().toString(),
      sender: "user",
      author: "You",
      text: draft.trim(),
      timestamp,
    };

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              messages: [...conversation.messages, outgoing],
              unread: 0,
            }
          : conversation
      )
    );
    setDraft("");

    const autoReplies = activeConversation.autoReplies;
    if (!autoReplies.length) {
      return;
    }

    const cursor = replyCursor[conversationId] ?? 0;
    const nextReply = autoReplies[cursor % autoReplies.length];
    const delay = shouldReduceMotion ? 0 : 900;

    replyTimeoutRef.current = window.setTimeout(() => {
      const safeTimestamp = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const incoming: Message = {
        id: "incoming-" + Date.now().toString(),
        sender: "contact",
        author: activeConversation.name,
        text: nextReply,
        timestamp: safeTimestamp,
      };

      const currentSelected = selectedConversationRef.current;
      setConversations((prev) =>
        prev.map((conversation) => {
          if (conversation.id !== conversationId) {
            return conversation;
          }
          const isActive = currentSelected === conversationId;
          return {
            ...conversation,
            messages: [...conversation.messages, incoming],
            unread: isActive ? 0 : conversation.unread + 1,
          };
        })
      );

      setReplyCursor((prev) => ({
        ...prev,
        [conversationId]: cursor + 1,
      }));
    }, delay);
  };

  if (!activeConversation) {
    return null;
  }

  const statusDotColor: Record<Conversation["status"], string> = {
    online: "bg-green-500",
    offline: "bg-red-500",
  };

  return (
    <section className="relative w-full py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="relative grid min-h-[500px] max-h-[calc(100vh-3rem)] grid-rows-[auto,1fr] gap-4 overflow-hidden rounded-[30px] border border-border/50 bg-background/70 p-4 backdrop-blur-xl sm:min-h-[600px] sm:max-h-[calc(100vh-4rem)] sm:gap-6 sm:p-6 md:min-h-[650px] md:max-h-[calc(100vh-5rem)] lg:h-[760px] lg:max-h-[calc(100vh-6rem)] lg:grid-rows-[1fr] lg:gap-8 lg:p-8 lg:[grid-template-columns:30%_1fr]">
        <div className="flex flex-col gap-3 rounded-2xl border border-border/40 bg-background/75 p-3 backdrop-blur sm:gap-4 sm:rounded-3xl sm:p-4 lg:hidden">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div>
              <p className="text-xs font-semibold text-foreground sm:text-sm">
                Messenger
              </p>
              <p className="text-[0.65rem] text-muted-foreground sm:text-xs">
                {conversations.length} active conversation
                {conversations.length === 1 ? "" : "s"}
              </p>
            </div>
            <Badge
              variant="outline"
              className="rounded-full border border-border/50 bg-primary/15 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.2em] text-primary hover:bg-primary/15 hover:text-primary sm:px-3 sm:py-1 sm:text-[0.7rem] sm:tracking-[0.24em]"
            >
              Live
            </Badge>
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="messenger-conversation"
              className="text-[0.65rem] font-medium text-muted-foreground sm:text-xs"
            >
              Conversation
            </label>
            <select
              id="messenger-conversation"
              value={selectedConversationId}
              onChange={(event) => handleSelectConversation(event.target.value)}
              className="w-full rounded-xl border border-border/40 bg-background/70 px-2.5 py-1.5 text-xs text-foreground focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30 sm:rounded-2xl sm:px-3 sm:py-2 sm:text-sm"
            >
              {conversations.map((conversation) => (
                <option key={conversation.id} value={conversation.id}>
                  {conversation.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="hidden h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border/40 bg-background/75 p-4 backdrop-blur lg:flex lg:col-start-1 lg:col-end-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Messenger</p>
              <p className="text-xs text-muted-foreground">
                {conversations.length} active conversation
                {conversations.length === 1 ? "" : "s"}
              </p>
            </div>
            <Badge
              variant="outline"
              className="rounded-full border border-border/50 bg-primary/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-primary hover:bg-primary/15 hover:text-primary"
            >
              Live
            </Badge>
          </div>

          <label htmlFor="messenger-search" className="sr-only">
            Search conversations
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
              aria-hidden="true"
            />
            <Input
              id="messenger-search"
              type="search"
              placeholder="Search teammates or channels"
              className="w-full rounded-2xl border-border/40 bg-background/60 pl-10 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-primary/40"
            />
          </div>

          <div
            className="flex-1 space-y-2 overflow-y-auto pr-1"
            aria-label="Conversation list"
            role="list"
          >
            {conversations.map((conversation) => {
              const isActive = conversation.id === selectedConversationId;
              const lastMessage =
                conversation.messages[conversation.messages.length - 1];
              return (
                <motion.button
                  key={conversation.id}
                  type="button"
                  onClick={() => handleSelectConversation(conversation.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "group relative flex w-full items-start gap-3 rounded-2xl border border-transparent p-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "border-primary/40 bg-primary/10"
                      : "bg-background/70 hover:border-border/40 hover:bg-muted/40"
                  )}
                  role="listitem"
                >
                  <div className="relative shrink-0">
                    <Avatar className="h-10 w-10 rounded-2xl border border-border/40 bg-background/80 text-foreground">
                      <AvatarFallback className="rounded-2xl bg-primary/15 text-sm font-medium text-primary">
                        {conversation.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className={cn(
                        "absolute bottom-0 right-0 inline-flex h-3 w-3 rounded-full border-2 border-background",
                        statusDotColor[conversation.status]
                      )}
                      aria-label={
                        conversation.status === "online" ? "Online" : "Offline"
                      }
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground">
                          {conversation.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {conversation.title}
                        </p>
                      </div>
                    </div>
                    {lastMessage ? (
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        {lastMessage.author}: {lastMessage.text}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        No messages yet
                      </p>
                    )}
                  </div>
                  {conversation.unread > 0 && (
                    <span className="ml-2 inline-flex min-h-[1.5rem] min-w-[1.5rem] items-center justify-center rounded-full bg-primary text-[0.7rem] font-semibold text-primary-foreground shadow-lg">
                      {conversation.unread}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeConversation.id}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
            }
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="flex min-h-0 flex-col gap-4 overflow-hidden rounded-3xl border border-border/40 bg-background/80 p-4 backdrop-blur sm:gap-5 sm:p-5 md:gap-6 md:p-6 lg:col-start-2 lg:col-end-3"
          >
            <header className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 rounded-2xl border border-border/40 bg-card/80 text-foreground sm:h-12 sm:w-12 sm:rounded-3xl">
                    <AvatarFallback className="rounded-2xl bg-primary/20 text-sm font-semibold text-primary sm:rounded-3xl sm:text-base">
                      {activeConversation.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className={cn(
                      "absolute bottom-0 right-0 inline-flex h-3 w-3 rounded-full border-2 border-background sm:h-3.5 sm:w-3.5",
                      statusDotColor[activeConversation.status]
                    )}
                    aria-label={
                      activeConversation.status === "online"
                        ? "Online"
                        : "Offline"
                    }
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground sm:text-base">
                    {activeConversation.name}
                  </p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {activeConversation.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-full border border-border/40 bg-background/60 text-muted-foreground transition hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-10"
                  aria-label="Start audio call"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-full border border-border/40 bg-background/60 text-muted-foreground transition hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-10"
                  aria-label="Start video call"
                >
                  <Video className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-8 rounded-full border border-border/40 bg-background/60 text-muted-foreground transition hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-10"
                  aria-label="Open conversation menu"
                >
                  <MoreVertical className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </header>

            <div
              ref={messagesContainerRef}
              className="relative flex-1 min-h-0 space-y-3 overflow-y-auto pr-2 sm:space-y-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted"
              aria-live="off"
              aria-label={"Message thread with " + activeConversation.name}
            >
              <AnimatePresence initial={false}>
                {activeConversation.messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, y: 12, scale: 0.98 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, scale: 1 }
                    }
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="flex flex-col gap-1"
                    role="group"
                    aria-label={message.author + " at " + message.timestamp}
                  >
                    <div
                      className={cn(
                        "relative max-w-[85%] rounded-xl border border-border/40 bg-background/80 px-3 py-2 text-xs leading-relaxed text-foreground backdrop-blur sm:max-w-[82%] sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm",
                        message.sender === "user" &&
                          "ml-auto border-primary/40 bg-primary text-primary-foreground"
                      )}
                    >
                      <p className="font-medium text-foreground/80 sm:text-sm">
                        {message.author}
                      </p>
                      <p
                        className={cn(
                          "mt-1 text-[0.875rem] sm:text-[0.95rem]",
                          message.sender === "user"
                            ? "text-primary-foreground/90"
                            : "text-foreground/90"
                        )}
                      >
                        {message.text}
                      </p>
                      <div className="mt-2 flex items-center justify-end gap-1.5 text-[0.65rem] sm:mt-3 sm:gap-2 sm:text-[0.7rem]">
                        <span
                          className={cn(
                            "text-muted-foreground",
                            message.sender === "user" &&
                              "text-primary-foreground/80"
                          )}
                        >
                          {message.timestamp}
                        </span>
                        {message.sender === "user" && (
                          <CheckCheck
                            className="h-3 w-3 text-primary-foreground/80 sm:h-3.5 sm:w-3.5"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-2 sm:space-y-3"
              aria-label="Reply composer"
            >
              <label htmlFor="messenger-editor" className="sr-only">
                Write a message
              </label>
              <div className="flex items-end gap-2 rounded-2xl border border-border/40 bg-background/80 p-3 backdrop-blur sm:gap-3 sm:rounded-3xl sm:p-4">
                <div className="flex-1 min-w-0">
                  <Textarea
                    id="messenger-editor"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder={"Message " + activeConversation.name}
                    rows={2}
                    className="min-h-[3rem] w-full resize-none border-none bg-transparent text-xs text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:outline-none sm:min-h-[4rem] sm:text-sm"
                    aria-label={"Message " + activeConversation.name}
                  />
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                    {activeConversation.quickReplies.map((reply) => (
                      <button
                        key={reply}
                        type="button"
                        onClick={() => setDraft(reply)}
                        className="rounded-full border border-border/50 bg-background/70 px-2.5 py-0.5 text-[0.65rem] text-muted-foreground transition hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-3 sm:py-1 sm:text-xs"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1.5 sm:w-24 sm:gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="size-8 rounded-full border border-border/40 bg-background/70 text-muted-foreground transition hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-10"
                    aria-label="Attach a file"
                  >
                    <Paperclip className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    type="submit"
                    size="icon"
                    className="size-8 rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 sm:size-10"
                    disabled={!draft.trim()}
                    aria-label="Send message"
                  >
                    <Send
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />
    </section>
  );
}
