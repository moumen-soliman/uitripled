"use client";

import { Star, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const GITHUB_REPO = "moumen-soliman/uitripled";
const STORAGE_KEY = "hide-github-star-reminder-timestamp";
const EXPIRATION_TIME = 3 * 60 * 1000; // 3 minutes

export function StarUsSideReminder() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hiddenTimestamp = localStorage.getItem(STORAGE_KEY);
    if (!hiddenTimestamp) {
      setIsVisible(true);
      return;
    }

    const now = Date.now();
    const timeSinceHidden = now - parseInt(hiddenTimestamp, 10);

    if (timeSinceHidden > EXPIRATION_TIME) {
      setIsVisible(true);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  if (!isVisible || pathname === "/") return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] animate-in slide-in-from-right-10 duration-700">
      <Card className="w-[300px] shadow-xl relative overflow-hidden border-border/50">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-6 w-6 text-muted-foreground hover:text-foreground z-10"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            Love UI TripleD?
          </CardTitle>
          <CardDescription className="my-5">
            Support the project by starring it on GitHub it really helps us grow and keep building better UI tools for you.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="sm" className="w-full" asChild>
            <Link
              href={`https://github.com/${GITHUB_REPO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Star className="h-4 w-4" />
              Star on GitHub
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
