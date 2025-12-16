"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  Clock,
  Filter,
  MessageSquare,
  MoreHorizontal,
  Newspaper,
  Search,
  Share2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: "Technology" | "Design" | "Business" | "AI" | "Crypto";
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  likes: number;
  comments: number;
  trending?: boolean;
  image?: string;
}

// ============================================================================
// DUMMY DATA
// ============================================================================

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    title: "The Future of AI in Modern Interface Design",
    summary:
      "How artificial intelligence is reshaping the way we interact with digital products and the role of designers in this new era.",
    category: "AI",
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "Product Designer",
    },
    publishedAt: "2h ago",
    readTime: "5 min read",
    likes: 1240,
    comments: 86,
    trending: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "WebAssembly: The Next Big Thing in Web Development?",
    summary:
      "Exploring the potential of WebAssembly to bring desktop-class performance to the web browser.",
    category: "Technology",
    author: {
      name: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?u=alex",
      role: "Senior Dev",
    },
    publishedAt: "4h ago",
    readTime: "8 min read",
    likes: 856,
    comments: 42,
  },
  {
    id: "3",
    title: "Sustainable Tech: Building Green Software",
    summary:
      "Why energy efficiency in code matters and how developers can contribute to a more sustainable future.",
    category: "Technology",
    author: {
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?u=emma",
      role: "Tech Lead",
    },
    publishedAt: "5h ago",
    readTime: "6 min read",
    likes: 623,
    comments: 28,
  },
  {
    id: "4",
    title: "Crypto Markets See Unprecedented Growth",
    summary:
      "Analysis of the latest market trends and what it means for institutional investors.",
    category: "Crypto",
    author: {
      name: "Michael Chang",
      avatar: "https://i.pravatar.cc/150?u=michael",
      role: "Financial Analyst",
    },
    publishedAt: "6h ago",
    readTime: "4 min read",
    likes: 2100,
    comments: 154,
    trending: true,
  },
  {
    id: "5",
    title: "Minimalism in 2024: Less is Still More",
    summary:
      "A look at how minimalist design principles are evolving in the current digital landscape.",
    category: "Design",
    author: {
      name: "Jessica Kim",
      avatar: "https://i.pravatar.cc/150?u=jessica",
      role: "UX Researcher",
    },
    publishedAt: "8h ago",
    readTime: "3 min read",
    likes: 445,
    comments: 19,
  },
];

const CATEGORIES = ["All", "Technology", "Design", "Business", "AI", "Crypto"];

// ============================================================================
// COMPONENTS
// ============================================================================

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-5 backdrop-blur-sm transition-all hover:border-border/60 hover:shadow-lg hover:bg-background/80"
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Header: Author & Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 border border-border/50">
              <AvatarImage src={item.author.avatar} alt={item.author.name} />
              <AvatarFallback>{item.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-foreground">
                {item.author.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {item.author.role}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {item.trending && (
              <Badge
                variant="secondary"
                className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/20 text-[10px] px-2 py-0 h-5 gap-1"
              >
                <TrendingUp className="h-3 w-3" />
                Trending
              </Badge>
            )}
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {item.publishedAt}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <Badge
              variant="outline"
              className="shrink-0 text-[10px] font-normal opacity-70"
            >
              {item.category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {item.summary}
          </p>
        </div>

        {/* Footer: Actions & Stats */}
        <div className="flex items-center justify-between pt-2 border-t border-border/30 mt-2">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <MessageSquare className="h-3.5 w-3.5" />
              {item.comments}
            </button>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {item.readTime}
            </span>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 rounded-full hover:bg-primary/10 hover:text-primary"
            >
              <Bookmark className="h-3.5 w-3.5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 rounded-full hover:bg-primary/10 hover:text-primary"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = NEWS_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full mx-auto space-y-8 min-h-[600px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            Latest Updates
          </h2>
          <p className="text-sm text-muted-foreground">
            Stay informed with the most recent news and insights.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              className="pl-9 w-[200px] bg-background/50 backdrop-blur-sm border-border/50 focus:bg-background transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:text-foreground border border-transparent hover:border-border/50"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-3"
            >
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">
                No news found matching your criteria.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {filteredNews.length > 0 && (
        <div className="flex justify-center pt-4">
          <Button
            variant="ghost"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <MoreHorizontal className="h-4 w-4" />
            Load More Stories
          </Button>
        </div>
      )}
    </div>
  );
}
