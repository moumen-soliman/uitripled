"use client";

import { NativeButton } from "@uitripled/ui/components/native/base-ui/native-button-baseui";
import { cn } from "@uitripled/ui/lib/utils";
import { Avatar } from "@base-ui/react/avatar";
import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

interface GlassBlogCardBaseUIProps {
  title?: string;
  excerpt?: string;
  image?: string;
  author?: {
    name: string;
    avatar: string;
  };
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
}

const defaultPost = {
  title: "The Future of UI Design",
  excerpt:
    "Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.",
  image:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  author: {
    name: "Moumen Soliman",
    avatar: "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtoUjLg4dAryGEidskK72wBCQA6DNcZH4Xh5b8",
  },
  date: "Dec 2, 2025",
  readTime: "5 min read",
  tags: ["Design", "UI/UX"],
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export function GlassBlogCardBaseUI({
  title = defaultPost.title,
  excerpt = defaultPost.excerpt,
  image = defaultPost.image,
  author = defaultPost.author,
  date = defaultPost.date,
  readTime = defaultPost.readTime,
  tags = defaultPost.tags,
  className,
}: GlassBlogCardBaseUIProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-[400px]", className)}
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
        {/* Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          <div className="absolute bottom-3 left-3 flex gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground backdrop-blur-sm hover:bg-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover Overlay Action */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <NativeButton variant="default" size="default" glow>
              <BookOpen className="h-4 w-4" />
              Read Article
            </NativeButton>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 p-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            <div className="flex items-center gap-2">
              {/* BaseUI Avatar */}
              <Avatar.Root className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border/50">
                <Avatar.Image src={author.avatar} alt={author.name} />
                <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {getInitials(author.name)}
                </Avatar.Fallback>
              </Avatar.Root>
              <div className="flex flex-col text-xs">
                <span className="font-medium text-foreground">
                  {author.name}
                </span>
                <span className="text-muted-foreground">{date}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
