"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Loader2 } from "lucide-react"
import { useState, useCallback, useRef } from "react"

export interface LikeUser {
  id: string
  name: string
  avatar?: string
}

export interface NativeLikesCounterProps {
  count: number
  users?: LikeUser[]
  variant?: "default" | "subtle" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  liked?: boolean
  onLike?: () => void
  onLoadMore?: () => Promise<LikeUser[]> | LikeUser[]
  hasMore?: boolean
  maxAvatars?: number
  maxVisibleInPopup?: number
  className?: string
}

const sizeVariants = {
  sm: {
    container: "h-7 px-2.5 gap-1.5 text-xs",
    icon: "w-3.5 h-3.5",
    avatar: "w-4 h-4",
    avatarStack: "-space-x-1",
    popup: "p-3",
    popupAvatar: "w-6 h-6",
  },
  default: {
    container: "h-8 px-3 gap-2 text-sm",
    icon: "w-4 h-4",
    avatar: "w-5 h-5",
    avatarStack: "-space-x-1.5",
    popup: "p-3",
    popupAvatar: "w-7 h-7",
  },
  lg: {
    container: "h-9 px-3.5 gap-2 text-sm",
    icon: "w-[18px] h-[18px]",
    avatar: "w-6 h-6",
    avatarStack: "-space-x-2",
    popup: "p-3",
    popupAvatar: "w-8 h-8",
  },
}

export function NativeLikesCounter({
  count,
  users = [],
  variant = "default",
  size = "default",
  liked = false,
  onLike,
  onLoadMore,
  hasMore = false,
  maxAvatars = 5,
  maxVisibleInPopup = 5,
  className,
}: NativeLikesCounterProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(liked)
  const [localCount, setLocalCount] = useState(count)
  const [loadedUsers, setLoadedUsers] = useState<LikeUser[]>(users)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [canLoadMore, setCanLoadMore] = useState(hasMore)

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const sizeConfig = sizeVariants[size]
  const displayUsers = loadedUsers.slice(0, maxAvatars)

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 150) // Small delay to allow moving to popup
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLocalCount((prev) => (isLiked ? prev - 1 : prev + 1))
    onLike?.()
  }

  const handleLoadMore = useCallback(async () => {
    if (!onLoadMore || isLoadingMore) return

    setIsLoadingMore(true)
    try {
      const newUsers = await onLoadMore()
      if (newUsers.length === 0) {
        setCanLoadMore(false)
      } else {
        setLoadedUsers((prev) => [...prev, ...newUsers])
      }
    } catch (error) {
      console.error("Failed to load more users:", error)
    } finally {
      setIsLoadingMore(false)
    }
  }, [onLoadMore, isLoadingMore])

  const getVariantStyles = () => {
    const base = "transition-all duration-150"
    switch (variant) {
      case "subtle":
        return cn(base, "bg-accent/50 hover:bg-accent", isLiked && "bg-accent")
      case "outline":
        return cn(
          base,
          "bg-transparent border border-border hover:border-accent-foreground/20 hover:bg-accent/10",
          isLiked && "border-accent-foreground/30 bg-accent/20",
        )
      case "ghost":
        return cn(base, "bg-transparent hover:bg-accent/50", isLiked && "bg-accent/30")
      default:
        return cn(
          base,
          "bg-accent border border-border hover:bg-accent/80 hover:border-accent-foreground/20",
          isLiked && "border-accent-foreground/20",
        )
    }
  }

  const visibleUsersInPopup = loadedUsers.slice(0, maxVisibleInPopup)
  const totalRemaining = localCount - loadedUsers.length

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.button
        onClick={handleLike}
        className={cn(
          "relative flex items-center rounded-md font-medium",
          sizeConfig.container,
          getVariantStyles(),
          className,
        )}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
      >
        {/* Heart icon */}
        <motion.div className="relative flex items-center justify-center">
          <motion.div animate={isLiked ? { scale: [1, 1.15, 1] } : { scale: 1 }} transition={{ duration: 0.2 }}>
            <Heart
              className={cn(
                sizeConfig.icon,
                "transition-colors duration-150",
                isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground",
              )}
            />
          </motion.div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.span
            key={localCount}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={cn("font-medium tabular-nums", isLiked ? "text-foreground" : "text-muted-foreground")}
          >
            {localCount.toLocaleString()}
          </motion.span>
        </AnimatePresence>

        {users.length > 0 && variant !== "ghost" && (
          <div className={cn("flex items-center", sizeConfig.avatarStack)}>
            {users.slice(0, 3).map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.03, duration: 0.15 }}
              >
                <Avatar className={cn(sizeConfig.avatar, "border border-background ring-1 ring-border")}>
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} className="object-cover" />
                  <AvatarFallback className="text-[9px] bg-accent text-muted-foreground">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            ))}
          </div>
        )}
      </motion.button>

      <AnimatePresence>
        {isHovered && loadedUsers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 bottom-full mb-1 z-[100]",
              "bg-popover border border-border rounded-lg shadow-2xl",
              "w-[240px]",
              sizeConfig.popup,
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-medium text-muted-foreground">Liked by</span>
              <span className="text-xs font-mono text-muted-foreground/60">{localCount.toLocaleString()}</span>
            </div>

            <div className="max-h-[140px] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              <div className="space-y-1 px-1">
                {visibleUsersInPopup.map((user, index) => (
                  <motion.div
                    key={user.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.02,
                      duration: 0.15,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="flex items-center gap-2 py-1 group"
                  >
                    <Avatar className={cn(sizeConfig.popupAvatar, "border border-border shrink-0")}>
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} className="object-cover" />
                      <AvatarFallback className="text-[10px] bg-accent text-muted-foreground">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-foreground/80 group-hover:text-foreground transition-colors truncate">
                      {user.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {(canLoadMore || totalRemaining > 0) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: visibleUsersInPopup.length * 0.02 }}
                className="mt-2 pt-2 border-t border-border/50"
              >
                {onLoadMore && canLoadMore ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleLoadMore()
                    }}
                    disabled={isLoadingMore}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                  >
                    {isLoadingMore ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Loading...</span>
                      </>
                    ) : (
                      <span>Load more {totalRemaining > 0 && `(${totalRemaining.toLocaleString()} more)`}</span>
                    )}
                  </button>
                ) : totalRemaining > 0 ? (
                  <div className="flex items-center justify-center py-1">
                    <span className="text-xs text-muted-foreground/60">+{totalRemaining.toLocaleString()} others</span>
                  </div>
                ) : null}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
