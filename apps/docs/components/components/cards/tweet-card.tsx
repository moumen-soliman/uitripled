import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@uitripled/react-shadcn/ui/avatar";
import Image from "next/image";

interface TweetCardProps {
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  url?: string;
  className?: string;
}

export function TweetCard({ author, content, url, className }: TweetCardProps) {
  const handleXClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const username = author.handle.replace("@", "");
  const isGoldVerified = username === "motiondotdev";

  return (
    <div
      className={cn(
        "group relative w-[350px] shrink-0 overflow-hidden rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur transition-all hover:border-border/60 hover:shadow-lg",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />

      <div className="flex flex-row items-start gap-4 pb-2">
        <Avatar className="h-10 w-10 border border-border/50">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5 flex-1">
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold leading-none text-foreground">
                {author.name}
              </span>
              {author.verified && (
                <>
                  {isGoldVerified ? (
                    <svg
                      viewBox="0 0 22 22"
                      aria-label="Verified account"
                      role="img"
                      className="h-4 w-4"
                      data-testid="icon-verified"
                    >
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="1-a"
                          x1="4.411"
                          x2="18.083"
                          y1="2.495"
                          y2="21.508"
                        >
                          <stop offset="0" stopColor="#f4e72a" />
                          <stop offset=".539" stopColor="#cd8105" />
                          <stop offset=".68" stopColor="#cb7b00" />
                          <stop offset="1" stopColor="#f4ec26" />
                          <stop offset="1" stopColor="#f4e72a" />
                        </linearGradient>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="1-b"
                          x1="5.355"
                          x2="16.361"
                          y1="3.395"
                          y2="19.133"
                        >
                          <stop offset="0" stopColor="#f9e87f" />
                          <stop offset=".406" stopColor="#e2b719" />
                          <stop offset=".989" stopColor="#e2b719" />
                        </linearGradient>
                      </defs>
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path
                          d="M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                          fill="url(#1-a)"
                        />
                        <path
                          d="M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z"
                          fill="url(#1-b)"
                        />
                        <path
                          d="M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z"
                          fill="#d18800"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 22 22"
                      aria-label="Verified account"
                      role="img"
                      className="h-4 w-4 text-blue-500"
                      data-testid="icon-verified"
                    >
                      <g>
                        <path
                          d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  )}
                </>
              )}
            </div>
            <span className="text-sm text-muted-foreground">
              {author.handle}
            </span>
          </div>
        </div>
        {url && (
          <button
            onClick={handleXClick}
            className="ml-auto p-1.5 cursor-pointer rounded-lg hover:bg-foreground/5 transition-colors group/x-icon"
            aria-label="Open tweet on X"
          >
            {/* Light mode - black icon */}
            <Image
              src="/logos/x-black.svg"
              alt="X"
              width={18}
              height={18}
              className="opacity-60 group-hover/x-icon:opacity-100 transition-opacity dark:hidden"
            />
            {/* Dark mode - white icon */}
            <Image
              src="/logos/x.svg"
              alt="X"
              width={18}
              height={18}
              className="hidden opacity-60 group-hover/x-icon:opacity-100 transition-opacity dark:block"
            />
          </button>
        )}
      </div>

      <div className="pt-2">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
          {content}
        </p>
      </div>
    </div>
  );
}
