"use client";

import { TweetCard } from "@/components/components/cards/tweet-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const TweetsLinks = [
  "https://x.com/orcdev/status/1995207833906983243?s=20",
  "https://x.com/define_app/status/1995066844311588922?s=20",
  "https://x.com/shadcn/status/1994849333259505943?s=20",
  "https://x.com/motiondotdev/status/1988225802744508750?s=20",
  "https://x.com/masumparvej_/status/1987700594837205315?s=20",
  "https://x.com/DavidBensonX/status/1994338699429970153?s=20",
  "https://x.com/ajaypatel_aj/status/1994751849480790247?s=20",
  "https://x.com/gillarohith/status/1995534816029409714?s=20",
  "https://x.com/kapish_dima/status/1997930667414626743?s=20",
  "https://x.com/BendikMatej/status/1999630168160399391?s=20",
];

const LinkedInMessages: LinkedInMessage[] = [
  {
    id: "linkedin-1",
    type: "linkedin",
    url: "https://www.linkedin.com/in/yangshun/",
    author: {
      name: "Yangshun Tay",
      username: "yangshun",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQFB72zuIqxYrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684230919345?e=1769040000&v=beta&t=eQciKf9VgwMRfZMx_Cpx0EszBBWbmkwnqvA0F2rlaTg",
    },
    content:
      "This is such a great spin on UI component libraries, animations make for a good nice differentiating factor in the age of modern UI",
  },
];

// List of verified users
const VERIFIED_USERS = [
  "ajaypatel_aj",
  "shadcn",
  "masumparvej_",
  "orcdev",
  "motiondotdev",
  "gillarohith",
  "kapish_dima",
  "BendikMatej",
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

interface LinkedInMessage {
  id: string;
  type: "linkedin";
  url: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
}

type ContentItem = Tweet | LinkedInMessage;

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
      }

      // Always remove all remaining HTML tags
      content = content.replace(/<[^>]*>/g, "");

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
    <div className="w-[300px] sm:w-[350px] shrink-0 rounded-xl border border-border bg-background p-5 shadow-sm">
      <div className="flex flex-row items-start gap-4 pb-2">
        {/* Avatar skeleton */}
        <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
        <div className="flex flex-col gap-0.5 flex-1">
          <div className="flex flex-col items-start gap-0.5">
            {/* Name skeleton */}
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-24 rounded bg-muted animate-pulse" />
            </div>
            {/* Handle skeleton */}
            <div className="h-3 w-16 rounded bg-muted animate-pulse" />
          </div>
        </div>
        {/* X icon skeleton */}
        <div className="ml-auto h-4 w-4 rounded bg-muted animate-pulse" />
      </div>

      {/* Content skeleton */}
      <div className="pt-2 space-y-2">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-3 rounded bg-muted animate-pulse ${
              index === 3 ? "w-3/4" : "w-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * LinkedIn message card component
 */
function LinkedInMessageCard({ message }: { message: LinkedInMessage }) {
  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (message.url) {
      window.open(message.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="group relative w-[300px] sm:w-[350px] shrink-0 rounded-xl border border-border bg-background p-5 shadow-sm transition-[box-shadow,border-color] hover:shadow-md hover:border-foreground/20">
      <div className="flex flex-row items-start gap-4 pb-2">
        <Avatar className="h-10 w-10 border border-border/50">
          <AvatarImage src={message.author.avatar} alt="" />
          <AvatarFallback>{message.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5 flex-1">
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold leading-none text-foreground">
                {message.author.name}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              @{message.author.username}
            </span>
          </div>
        </div>
        {message.url && (
          <button
            type="button"
            onClick={handleLinkedInClick}
            className="ml-auto p-1.5 cursor-pointer rounded-lg hover:bg-foreground/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring group/linkedin-icon"
            aria-label={`Open ${message.author.name}'s LinkedIn profile`}
          >
            <Linkedin
              aria-hidden="true"
              className="h-4 w-4 text-blue-600 opacity-60 group-hover/linkedin-icon:opacity-100 transition-opacity"
            />
          </button>
        )}
      </div>

      <div className="pt-2">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
          {message.content}
        </p>
      </div>
    </div>
  );
}

export function TweetsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const [content, setContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        // Fetch all tweets in parallel
        const tweetPromises = TweetsLinks.map((url) => fetchTweetData(url));
        const fetchedTweets = await Promise.all(tweetPromises);

        // Filter out null results
        const validTweets = fetchedTweets.filter(
          (tweet): tweet is Tweet => tweet !== null
        );

        // Combine tweets and LinkedIn messages
        const allContent: ContentItem[] = [...LinkedInMessages, ...validTweets];

        // Shuffle the array to mix tweets and LinkedIn messages
        const shuffledContent = allContent.sort(() => Math.random() - 0.5);

        setContent(shuffledContent);
      } catch (error) {
        console.error("Error fetching content:", error);
        // Fallback to LinkedIn messages only
        setContent(LinkedInMessages);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  const renderCards = (keySuffix: string) =>
    content.map((item, index) => {
      if ("type" in item && item.type === "linkedin") {
        return (
          <LinkedInMessageCard
            key={`${item.id}-${keySuffix}-${index}`}
            message={item}
          />
        );
      } else {
        const tweet = item as Tweet;
        return (
          <TweetCard
            key={`${tweet.id}-${keySuffix}-${index}`}
            author={tweet.author}
            content={tweet.content}
            url={tweet.url}
            className="w-[300px] sm:w-[350px] h-[190px] shrink-0 rounded-xl border border-border bg-background p-5 shadow-sm transition-[box-shadow,border-color] hover:shadow-md hover:border-foreground/20 backdrop-blur-none"
          />
        );
      }
    });

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 z-10 relative">
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

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>

      <div className="relative">
        {/* Scrolling container */}
        <div
          className="flex"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            className={`flex ${isPaused ? "paused" : ""} animate-scroll`}
            style={{ width: "max-content" }}
          >
            {isLoading ? (
              <div className="flex gap-6">
                {/* Show multiple skeleton cards for better visual effect */}
                {[...Array(4)].map((_, index) => (
                  <TweetSkeleton key={index} />
                ))}
              </div>
            ) : content.length > 0 ? (
              <>
                {/* Two copies + translateX(-50%) = seamless loop; the
                    duplicate is hidden from AT and keyboard */}
                <div className="flex gap-6 pr-6">{renderCards("a")}</div>
                <div
                  className="flex gap-6 pr-6"
                  aria-hidden="true"
                  // @ts-expect-error - inert is valid in React 19
                  inert=""
                >
                  {renderCards("b")}
                </div>
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
