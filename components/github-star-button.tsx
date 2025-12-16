import { Star } from "lucide-react";
import { Suspense, use, useMemo } from "react";

const GITHUB_REPO = "moumen-soliman/uitripled";

interface GitHubRepo {
  stargazers_count: number;
}

function StarCount({ promise }: { promise: Promise<number> }) {
  const count = use(promise);
  return (
    <span className="font-medium tabular-nums">{count.toLocaleString()}</span>
  );
}

function StarCountSkeleton() {
  return 113;
}

function fetchStarCount(): Promise<number> {
  return fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
    next: { revalidate: 3600 },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json() as Promise<GitHubRepo>;
    })
    .then((data) => data.stargazers_count || 0)
    .catch((error) => {
      console.error("Error fetching GitHub stars:", error);
      return 0;
    });
}

export function GithubStarButton() {
  const starCountPromise = useMemo(() => fetchStarCount(), []);

  return (
    <div className="flex items-center justify-center bg-background">
      <a
        href={`https://github.com/${GITHUB_REPO}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-11 items-center justify-center gap-2.5 rounded-md border border-border bg-background px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] min-w-[160px]"
        style={{
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
      >
        <span className="flex items-center gap-2.5">
          <span className="transition-transform duration-300 group-hover:translate-x-[-2px]">
            Give us a Star
          </span>

          <Star
            className="h-4 w-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12"
            aria-hidden="true"
          />

          <span className="inline-flex items-center justify-center min-w-[3ch] h-5 px-2 rounded-full bg-muted/50 transition-all duration-300 group-hover:scale-105 group-hover:bg-muted">
            <Suspense fallback={<StarCountSkeleton />}>
              <StarCount promise={starCountPromise} />
            </Suspense>
          </span>
        </span>
      </a>
    </div>
  );
}
