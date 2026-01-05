"use client";

import {
  LikeUser,
  NativeLikesCounterBaseUI,
} from "../native-likes-counter-baseui";
import { cn } from "@uitripled/utils";
import { useState } from "react";

const USERS = [
  {
    id: "user-1",
    name: "Nova Studio",
    avatar:
      "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtHnKrXgkK7FlZGQ2nWi4Jzv0TXU9DVkAd5yE1",
  },
  {
    id: "user-2",
    name: "Growth Lab",
    avatar:
      "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtIYuGoisEhfWHMxKLVXD5ouFcBtgk6enZS0OG",
  },
  {
    id: "user-3",
    name: "Personal Workspace",
    avatar:
      "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtqpB1uxNk0UapbrAxOtRg9jDGu8sZzWLf2VM1",
  },
];

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-[400px] w-full flex items-center justify-center bg-gray-50/50 dark:bg-neutral-900/50 rounded-xl relative transition-colors border border-border/50",
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function NativeLikesCounterDefault() {
  return (
    <Container>
      <NativeLikesCounterBaseUI count={128} users={USERS} />
    </Container>
  );
}

export function NativeLikesCounterSubtle() {
  return (
    <Container>
      <NativeLikesCounterBaseUI
        count={42}
        users={USERS.slice(0, 2)}
        variant="subtle"
      />
    </Container>
  );
}

export function NativeLikesCounterOutline() {
  return (
    <Container>
      <NativeLikesCounterBaseUI
        count={89}
        users={USERS}
        variant="outline"
        liked
      />
    </Container>
  );
}

export function NativeLikesCounterGhost() {
  return (
    <Container>
      <NativeLikesCounterBaseUI count={256} users={USERS} variant="ghost" />
    </Container>
  );
}

export function NativeLikesCounterSizes() {
  return (
    <Container>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Small
          </span>
          <NativeLikesCounterBaseUI
            count={12}
            users={USERS.slice(0, 1)}
            size="sm"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Default
          </span>
          <NativeLikesCounterBaseUI count={128} users={USERS} size="default" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
            Large
          </span>
          <NativeLikesCounterBaseUI count={1024} users={USERS} size="lg" />
        </div>
      </div>
    </Container>
  );
}

export function NativeLikesCounterInteractive() {
  const [loadCount, setLoadCount] = useState(0);

  const handleLoadMore = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoadCount((prev) => prev + 1);

    return [
      {
        id: `extra-base-${loadCount}-1`,
        name: `User ${10 + loadCount * 2}`,
        avatar: `https://avatar.iran.liara.run/public/${40 + loadCount}`,
      },
      {
        id: `extra-base-${loadCount}-2`,
        name: `User ${11 + loadCount * 2}`,
        avatar: `https://avatar.iran.liara.run/public/${50 + loadCount}`,
      },
    ] as LikeUser[];
  };

  return (
    <Container>
      <div className="flex flex-col items-center gap-4 text-center">
        <NativeLikesCounterBaseUI
          count={150}
          users={USERS}
          hasMore={loadCount < 3}
          onLoadMore={handleLoadMore}
          onLike={() => console.log("Liked BaseUI!")}
        />
        <p className="text-xs text-muted-foreground max-w-[200px]">
          Hover to see popup. Click "Load more" to fetch additional users
          (simulated).
        </p>
      </div>
    </Container>
  );
}

export function NativeLikesCounterDemo() {
  return <NativeLikesCounterDefault />;
}
