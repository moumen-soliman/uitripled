"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  CornerDownRight,
  Heart,
  Image as ImageIcon,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Send,
  Share2,
  Smile,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

interface User {
  name: string;
  avatar: string;
  role?: string;
}

interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
  isLiked?: boolean;
}

// ============================================================================
// DUMMY DATA
// ============================================================================

const INITIAL_COMMENTS: Comment[] = [
  {
    id: "1",
    user: {
      name: "Alex Morgan",
      avatar: "https://i.pravatar.cc/150?u=alex",
      role: "Product Designer",
    },
    content:
      "The new glassmorphism trend is really interesting. I love how it adds depth without cluttering the interface. Has anyone tried implementing this with pure CSS vs using backdrop-filter?",
    timestamp: "2h ago",
    likes: 24,
    isLiked: true,
    replies: [
      {
        id: "1-1",
        user: {
          name: "Sarah Chen",
          avatar: "https://i.pravatar.cc/150?u=sarah",
          role: "Frontend Dev",
        },
        content:
          "I've been using backdrop-filter extensively. It's much more performant now across modern browsers. The only catch is Firefox sometimes needs a fallback.",
        timestamp: "1h ago",
        likes: 12,
        isLiked: false,
        replies: [],
      },
      {
        id: "1-2",
        user: {
          name: "Mike Ross",
          avatar: "https://i.pravatar.cc/150?u=mike",
        },
        content:
          "Agreed! It gives such a premium feel. I usually pair it with subtle noise textures to avoid banding.",
        timestamp: "45m ago",
        likes: 8,
        isLiked: false,
        replies: [],
      },
    ],
  },
  {
    id: "2",
    user: {
      name: "Emily Watson",
      avatar: "https://i.pravatar.cc/150?u=emily",
      role: "UX Researcher",
    },
    content:
      "Great article! I'm curious about the accessibility implications of these high-contrast dark modes. Do we have any data on user preference?",
    timestamp: "3h ago",
    likes: 45,
    isLiked: false,
    replies: [],
  },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function CommentInput({
  placeholder = "What are your thoughts?",
  onSubmit,
  onCancel,
  autoFocus = false,
  className,
  inputId,
  labelId,
}: {
  placeholder?: string;
  onSubmit: (content: string) => void;
  onCancel?: () => void;
  autoFocus?: boolean;
  className?: string;
  inputId?: string;
  labelId?: string;
}) {
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(autoFocus);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = () => {
    if (!content.trim()) return;
    onSubmit(content);
    setContent("");
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === "Escape" && onCancel) {
      e.preventDefault();
      onCancel();
    }
  };

  const uniqueId =
    inputId || `comment-input-${Math.random().toString(36).substr(2, 9)}`;
  const uniqueLabelId =
    labelId || `comment-label-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={cn(
        "relative rounded-xl border bg-background/50 backdrop-blur-sm transition-all duration-200",
        isFocused
          ? "border-primary/50 ring-4 ring-primary/5 shadow-lg"
          : "border-border/40",
        className
      )}
      role="form"
      aria-label="Comment input"
    >
      <div className="p-4">
        <div className="flex gap-4">
          <Avatar
            className="h-8 w-8 border border-border/50"
            aria-hidden="true"
          >
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>YO</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <label htmlFor={uniqueId} id={uniqueLabelId} className="sr-only">
              {placeholder}
            </label>
            <Textarea
              id={uniqueId}
              ref={textareaRef}
              placeholder={placeholder}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onKeyDown={handleKeyDown}
              autoFocus={autoFocus}
              aria-label={placeholder}
              aria-describedby={uniqueLabelId}
              className="min-h-[60px] border-none bg-transparent p-0 resize-none focus-visible:ring-0 placeholder:text-muted-foreground/70 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-t border-border/30 bg-muted/20 rounded-b-xl"
        role="toolbar"
        aria-label="Comment formatting options"
      >
        <div
          className="flex items-center gap-1"
          role="group"
          aria-label="Attachments"
        >
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            aria-label="Add image"
            title="Add image"
          >
            <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            aria-label="Attach file"
            title="Attach file"
          >
            <Paperclip className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            aria-label="Add emoji"
            title="Add emoji"
          >
            <Smile className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          {onCancel && (
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={onCancel}
              className="text-xs h-8"
              aria-label="Cancel reply"
            >
              Cancel
            </Button>
          )}
          <Button
            onClick={handleSubmit}
            disabled={!content.trim()}
            size="sm"
            type="submit"
            className="gap-2 transition-all h-8 text-xs"
            aria-label={onCancel ? "Submit reply" : "Submit comment"}
          >
            {onCancel ? "Reply" : "Post"}
            <Send className="h-3 w-3" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function CommentItem({
  comment,
  isReply = false,
  activeReplyId,
  setActiveReplyId,
  onAddReply,
}: {
  comment: Comment;
  isReply?: boolean;
  activeReplyId: string | null;
  setActiveReplyId: (id: string | null) => void;
  onAddReply: (parentId: string, content: string) => void;
}) {
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likesCount, setLikesCount] = useState(comment.likes);
  const [isExpanded, setIsExpanded] = useState(true);
  const replyInputRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const isReplying = activeReplyId === comment.id;

  useEffect(() => {
    if (isReplying && replyInputRef.current) {
      const textarea = replyInputRef.current.querySelector("textarea");
      if (textarea) {
        setTimeout(() => textarea.focus(), 100);
      }
    }
  }, [isReplying]);

  const commentId = `comment-${comment.id}`;
  const repliesId = `replies-${comment.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      className={cn(
        "relative group",
        isReply ? "ml-8 pl-4 border-l-2 border-border/40" : "mb-6"
      )}
      id={commentId}
      aria-label={`Comment by ${comment.user.name}`}
    >
      <div className="flex gap-4">
        <Avatar
          className={cn(
            "border border-border/50",
            isReply ? "h-8 w-8" : "h-10 w-10"
          )}
        >
          <AvatarImage
            src={comment.user.avatar}
            alt={`${comment.user.name}'s avatar`}
          />
          <AvatarFallback aria-hidden="true">
            {comment.user.name[0]}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-1.5">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">
                {comment.user.name}
              </span>
              {comment.user.role && (
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                  aria-label={`Role: ${comment.user.role}`}
                >
                  {comment.user.role}
                </span>
              )}
              <time
                className="text-xs text-muted-foreground"
                dateTime={comment.timestamp}
                aria-label={`Posted ${comment.timestamp}`}
              >
                • {comment.timestamp}
              </time>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                  aria-label={`More options for ${comment.user.name}'s comment`}
                  aria-haspopup="true"
                >
                  <MoreHorizontal
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Report</DropdownMenuItem>
                <DropdownMenuItem>Copy Link</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          {/* Content */}
          <p className="text-sm text-foreground/90 leading-relaxed">
            {comment.content}
          </p>

          {/* Actions */}
          <nav
            className="flex items-center gap-4 pt-1"
            aria-label="Comment actions"
          >
            <button
              onClick={handleLike}
              type="button"
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded",
                isLiked
                  ? "text-red-500"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={
                isLiked
                  ? `Unlike comment (${likesCount} likes)`
                  : `Like comment (${likesCount} likes)`
              }
              aria-pressed={isLiked}
            >
              <Heart
                className={cn("h-3.5 w-3.5", isLiked && "fill-current")}
                aria-hidden="true"
              />
              <span aria-live="polite" aria-atomic="true">
                {likesCount}
              </span>
            </button>
            <button
              onClick={() => setActiveReplyId(isReplying ? null : comment.id)}
              type="button"
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded",
                isReplying
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={
                isReplying ? "Cancel reply" : `Reply to ${comment.user.name}`
              }
              aria-expanded={isReplying}
              aria-controls={
                isReplying ? `reply-input-${comment.id}` : undefined
              }
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Reply
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label={`Share ${comment.user.name}'s comment`}
            >
              <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
              Share
            </button>
          </nav>

          {/* Inline Reply Input */}
          <AnimatePresence>
            {isReplying && (
              <motion.div
                ref={replyInputRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="pt-4 overflow-hidden"
                id={`reply-input-${comment.id}`}
                role="region"
                aria-label={`Reply to ${comment.user.name}`}
              >
                <CommentInput
                  autoFocus
                  placeholder={`Reply to ${comment.user.name}...`}
                  onSubmit={(content) => onAddReply(comment.id, content)}
                  onCancel={() => setActiveReplyId(null)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Nested Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <section
          className="mt-4 space-y-4"
          id={repliesId}
          aria-label={`${comment.replies.length} ${comment.replies.length === 1 ? "reply" : "replies"}`}
        >
          {isExpanded ? (
            <AnimatePresence>
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  isReply={true}
                  activeReplyId={activeReplyId}
                  setActiveReplyId={setActiveReplyId}
                  onAddReply={onAddReply}
                />
              ))}
            </AnimatePresence>
          ) : null}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
            className="ml-12 text-xs font-medium text-primary hover:underline flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label={
              isExpanded
                ? "Hide replies"
                : `Show ${comment.replies.length} replies`
            }
            aria-expanded={isExpanded}
            aria-controls={repliesId}
          >
            {isExpanded ? (
              <div
                className="h-[1px] w-4 bg-primary/50 mr-1"
                aria-hidden="true"
              />
            ) : (
              <CornerDownRight className="h-3 w-3" aria-hidden="true" />
            )}
            {isExpanded
              ? "Hide replies"
              : `Show ${comment.replies.length} ${comment.replies.length === 1 ? "reply" : "replies"}`}
          </button>
        </section>
      )}
    </motion.article>
  );
}

export function CommentThread() {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");

  // Recursive function to add reply
  const addReplyToTree = (
    comments: Comment[],
    parentId: string,
    newReply: Comment
  ): Comment[] => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        };
      } else if (comment.replies && comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyToTree(comment.replies, parentId, newReply),
        };
      }
      return comment;
    });
  };

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      user: {
        name: "You",
        avatar: "https://github.com/shadcn.png",
        role: "Guest",
      },
      content,
      timestamp: "Just now",
      likes: 0,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setAnnouncement("Comment posted successfully");
    setTimeout(() => setAnnouncement(""), 1000);
  };

  const handleAddReply = (parentId: string, content: string) => {
    const newReply: Comment = {
      id: Date.now().toString(),
      user: {
        name: "You",
        avatar: "https://github.com/shadcn.png",
        role: "Guest",
      },
      content,
      timestamp: "Just now",
      likes: 0,
      replies: [],
    };

    setComments((prevComments) =>
      addReplyToTree(prevComments, parentId, newReply)
    );
    setActiveReplyId(null);
    setAnnouncement("Reply posted successfully");
    setTimeout(() => setAnnouncement(""), 1000);
  };

  return (
    <div
      className="w-full mx-auto space-y-8"
      role="region"
      aria-label="Comments section"
    >
      {/* Screen reader announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Header */}
      <header className="flex items-center justify-between">
        <h2
          className="text-xl font-semibold tracking-tight"
          id="comments-heading"
        >
          Comments
          <span className="sr-only">
            , {comments.length} {comments.length === 1 ? "comment" : "comments"}
          </span>
        </h2>
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Sort comments"
        >
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="text-xs text-muted-foreground"
            aria-label="Sort by newest"
            aria-pressed={true}
          >
            Newest
          </Button>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="text-xs text-muted-foreground"
            aria-label="Sort by top"
            aria-pressed={false}
          >
            Top
          </Button>
        </div>
      </header>

      {/* Main Input Area */}
      <section aria-labelledby="new-comment-heading">
        <h3 id="new-comment-heading" className="sr-only">
          Write a new comment
        </h3>
        <CommentInput onSubmit={handleAddComment} />
      </section>

      {/* Comments List */}
      <section aria-labelledby="comments-heading">
        <div className="space-y-2" role="list" aria-label="Comment thread">
          <AnimatePresence mode="popLayout">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                activeReplyId={activeReplyId}
                setActiveReplyId={setActiveReplyId}
                onAddReply={handleAddReply}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
