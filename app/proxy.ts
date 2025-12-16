import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { captureRegistryEvent } from "@wandry/analytics-sdk";

// Add token to .env file
export function proxy(request: NextRequest) {
  captureRegistryEvent(
    request,
    process.env.NEXT_PUBLIC_WANDRY_REGISTRY_TOKEN || ""
  );

  return NextResponse.next();
}
