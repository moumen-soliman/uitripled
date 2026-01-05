"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  // Hide footer on builder and background-builder pages
  const hideFooter =
    pathname === "/builder" || pathname === "/background-builder";

  if (hideFooter) {
    return null;
  }

  return <Footer />;
}
