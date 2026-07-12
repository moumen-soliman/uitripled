"use client"

import { cn } from "@uitripled/utils"
import { Avatar } from "@base-ui/react/avatar"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import { Heart, Loader2 } from "lucide-react"
import { useState, useCallback, useEffect, useRef } from "react"

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

const countVariants = {
  enter: (direction: number) => ({ y: direction * -8, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({ y: direction * 8, opacity: 0 }),
}

export function NativeLikesCounterBaseUI({
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
  const [isOpen, setIsOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(liked)
  const [localCount, setLocalCount] = useState(count)
  const [loadedUsers, setLoadedUsers] = useState<LikeUser[]>(users)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [canLoadMore, setCanLoadMore] = useState(hasMore)

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hasInteracted = useRef(false)
  const countDirection = useRef(1)

  useEffect(
    () => () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current)
    },
    [],
  )

  const sizeConfig = sizeVariants[size]
  const displayUsers = loadedUsers.slice(0, maxAvatars)

  const openPopup = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150) // Small delay to allow moving to popup
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsOpen(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") setIsOpen(false)
  }

  const handleLike = () => {
    hasInteracted.current = true
    countDirection.current = isLiked ? -1 : 1
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
    const base = "transition-colors duration-150"
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
    <MotionConfig reducedMotion="user">
      <div
        className="relative inline-block"
        onMouseEnter={openPopup}
        onMouseLeave={handleMouseLeave}
        onFocus={openPopup}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        <motion.button
          type="button"
          onClick={handleLike}
          aria-pressed={isLiked}
          className={cn(
            "relative flex cursor-pointer items-center rounded-md font-medium",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            sizeConfig.container,
            getVariantStyles(),
            className,
          )}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
        >
          {/* Heart icon */}
          <span aria-hidden="true" className="relative flex items-center justify-center">
            <motion.span
              className="flex"
              animate={isLiked && hasInteracted.current ? { scale: [1, 1.15, 1] } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Heart
                className={cn(
                  sizeConfig.icon,
                  "transition-colors duration-150",
                  isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground",
                )}
              />
            </motion.span>
          </span>

          <AnimatePresence mode="popLayout" initial={false} custom={countDirection.current}>
            <motion.span
              key={localCount}
              custom={countDirection.current}
              variants={countVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className={cn("font-medium tabular-nums", isLiked ? "text-foreground" : "text-muted-foreground")}
            >
              {localCount.toLocaleString()}
            </motion.span>
          </AnimatePresence>
          <span className="sr-only">likes</span>

          {displayUsers.length > 0 && variant !== "ghost" && (
            <div aria-hidden="true" className={cn("flex items-center", sizeConfig.avatarStack)}>
              {displayUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.03, duration: 0.15 }}
                >
                  <Avatar.Root
                    className={cn(
                      sizeConfig.avatar,
                      "relative flex shrink-0 overflow-hidden rounded-full border border-background ring-1 ring-border",
                    )}
                  >
                    <Avatar.Image src={user.avatar || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
                    <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-accent text-[9px] text-muted-foreground">
                      {user.name.charAt(0).toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar.Root>
                </motion.div>
              ))}
            </div>
          )}
        </motion.button>

        <AnimatePresence>
          {isOpen && loadedUsers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              style={{ x: "-50%" }}
              className={cn(
                "absolute left-1/2 bottom-full mb-1 z-[100]",
                "bg-popover border border-border rounded-lg shadow-2xl",
                "w-[240px]",
                sizeConfig.popup,
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-xs font-medium text-muted-foreground">Liked by</span>
                <span className="text-xs tabular-nums text-muted-foreground">{localCount.toLocaleString()}</span>
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
                      <Avatar.Root
                        className={cn(
                          sizeConfig.popupAvatar,
                          "relative flex shrink-0 overflow-hidden rounded-full border border-border",
                        )}
                      >
                        <Avatar.Image src={user.avatar || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
                        <Avatar.Fallback className="flex h-full w-full items-center justify-center bg-accent text-[10px] text-muted-foreground">
                          {user.name.charAt(0).toUpperCase()}
                        </Avatar.Fallback>
                      </Avatar.Root>
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
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLoadMore()
                      }}
                      disabled={isLoadingMore}
                      aria-busy={isLoadingMore}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {isLoadingMore ? (
                        <>
                          <Loader2 aria-hidden="true" className="w-3 h-3 animate-spin" />
                          <span>Loading...</span>
                        </>
                      ) : (
                        <span>Load more {totalRemaining > 0 && `(${totalRemaining.toLocaleString()} more)`}</span>
                      )}
                    </button>
                  ) : totalRemaining > 0 ? (
                    <div className="flex items-center justify-center py-1">
                      <span className="text-xs tabular-nums text-muted-foreground">
                        +{totalRemaining.toLocaleString()} others
                      </span>
                    </div>
                  ) : null}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
