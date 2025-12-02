"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TweetCard } from "@/components/components/cards/tweet-card";

const TweetsLinks = [
  "https://x.com/orcdev/status/1995207833906983243?s=20",
  "https://x.com/define_app/status/1995066844311588922?s=20",
  "https://x.com/shadcn/status/1994849333259505943?s=20",
  "https://x.com/motiondotdev/status/1988225802744508750?s=20",
  "https://x.com/gillarohith/status/1995534816029409714?s=20",
  "https://x.com/rywalker/status/1995536406165471639?s=20",
  "https://x.com/DavidBensonX/status/1994338699429970153?s=20",
  "https://x.com/ajaypatel_aj/status/1994751849480790247?s=20",
];

// List of verified users
const VERIFIED_USERS = [
  "rywalker",
  "ajaypatel_aj",
  "shadcn",
  "orcdev",
  "motiondotdev",
  "gillarohith",
];

interface Tweet {
  id: string;
  url: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
}

/**
 * Extracts tweet ID from X.com URL
 */
function extractTweetId(url: string): string | null {
  const match = url.match(/\/status\/(\d+)/);
  return match ? match[1] : null;
}

/**
 * Fetches tweet data from X oEmbed API
 */
async function fetchTweetData(url: string): Promise<Tweet | null> {
  try {
    const tweetId = extractTweetId(url);
    if (!tweetId) {
      return null;
    }

    // Use Twitter's oEmbed API
    const oEmbedUrl = `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}&omit_script=true`;
    const response = await fetch(oEmbedUrl);

    if (!response.ok) {
      console.error(`Failed to fetch tweet ${tweetId}:`, response.statusText);
      return null;
    }

    const data = await response.json();

    // Extract author information
    const authorName = data.author_name || "Unknown";
    const authorUrl = data.author_url || "";
    const handle = authorUrl ? `@${authorUrl.split("/").pop()}` : "@unknown";
    const username = handle.replace("@", "");
    const isVerified = VERIFIED_USERS.includes(username);

    // Extract content from HTML
    let content = "";
    if (data.html) {
      // Convert <br> and <br/> tags to newlines first (before removing other tags)
      content = data.html.replace(/<br\s*\/?>/gi, "\n");

      // Try to extract text from <p> tags first (common in oEmbed responses)
      const pMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/);
      if (pMatch) {
        content = pMatch[1];
      } else {
        // Fallback: remove all HTML tags
        content = content.replace(/<[^>]*>/g, "");
      }

      // Decode HTML entities
      content = content
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, " ")
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, "/")
        .trim();
    }

    // Get avatar from author URL or use default
    const avatar = `https://unavatar.io/twitter/${handle.replace("@", "")}`;

    return {
      id: tweetId,
      url: url,
      author: {
        name: authorName,
        handle: handle,
        avatar: avatar,
        verified: isVerified,
      },
      content: content || "Tweet content unavailable",
    };
  } catch (error) {
    console.error(`Error fetching tweet from ${url}:`, error);
    return null;
  }
}

/**
 * Skeleton loader for tweet cards
 */
function TweetSkeleton() {
  return (
    <div className="w-[350px] shrink-0 overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur">
      <div className="flex flex-row items-start gap-4 pb-2">
        {/* Avatar skeleton */}
        <motion.div
          className="h-10 w-10 rounded-full bg-muted"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="flex flex-col gap-0.5 flex-1">
          <div className="flex flex-col items-start gap-0.5">
            {/* Name skeleton */}
            <div className="flex items-center gap-1.5">
              <motion.div
                className="h-4 w-24 rounded bg-muted"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />
            </div>
            {/* Handle skeleton */}
            <motion.div
              className="h-3 w-16 rounded bg-muted"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
          </div>
        </div>
        {/* X icon skeleton */}
        <motion.div
          className="ml-auto h-4 w-4 rounded bg-muted"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </div>

      {/* Content skeleton */}
      <div className="pt-2 space-y-2">
        {[1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`h-3 rounded bg-muted ${
              index === 3 ? "w-3/4" : "w-full"
            }`}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1 * index + 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function TweetsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTweets() {
      try {
        // Fetch all tweets in parallel
        const tweetPromises = TweetsLinks.map((url) => fetchTweetData(url));
        const fetchedTweets = await Promise.all(tweetPromises);

        // Filter out null results
        const validTweets = fetchedTweets.filter(
          (tweet): tweet is Tweet => tweet !== null
        );

        setTweets(validTweets);
      } catch (error) {
        console.error("Error fetching tweets:", error);
        // Fallback to empty array on error
        setTweets([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTweets();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-background py-12">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling container */}
        <div
          className="flex"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-6 ${isPaused ? "paused" : ""} animate-scroll`}
            style={{ width: "max-content" }}
          >
            {isLoading ? (
              <>
                {/* Show multiple skeleton cards for better visual effect */}
                {[...Array(4)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <TweetSkeleton />
                  </motion.div>
                ))}
              </>
            ) : tweets.length > 0 ? (
              <>
                {/* Duplicate tweets 3 times for seamless loop */}
                {[...tweets, ...tweets, ...tweets].map((tweet, index) => (
                  <TweetCard
                    key={`${tweet.id}-${index}`}
                    author={tweet.author}
                    content={tweet.content}
                    url={tweet.url}
                  />
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center w-full py-12">
                <p className="text-muted-foreground">No tweets available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
