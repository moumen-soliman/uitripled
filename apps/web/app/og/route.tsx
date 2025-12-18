import { ImageResponse } from "next/og";

// Edge runtime is required for ImageResponse, but we'll add aggressive caching
export const runtime = "edge";

// Cache for 1 year, revalidate weekly to reduce edge invocations
export const revalidate = 604800; // 7 days in seconds

const DEFAULT_OG_IMAGE =
  "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtAc2cc4nrC37b1yitXR5Fm2HP6TVsYEDNGcjO";

const LOGO_URL =
  "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtXWAYjrHwTNEZVzK0s4lnUf7pOv2j3R5PaHAY";

const DEFAULT_BACKGROUND_IMAGE =
  "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtXtenaQHwTNEZVzK0s4lnUf7pOv2j3R5PaHAY";

function NotFoundOGImage(componentId: string, faviconUrl: string) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage: `url(${DEFAULT_BACKGROUND_IMAGE})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Main content - Left side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
          zIndex: 1,
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#FFFFFF",
            margin: "0 0 24px 0",
            lineHeight: 1.1,
            maxWidth: "800px",
          }}
        >
          Component Not Found
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "32px",
            color: "#FFFFFF",
            margin: "0",
            lineHeight: 1.4,
            maxWidth: "600px",
            fontWeight: "400",
          }}
        >
          {componentId}
        </p>
      </div>
    </div>
  );
}

function ComponentOGImage(
  name: string,
  description: string,
  faviconUrl: string
) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage: `url(${DEFAULT_BACKGROUND_IMAGE})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Main content - Left side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
          zIndex: 1,
        }}
      >
        {/* Component title */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#FFFFFF",
            margin: "0 0 24px 0",
            lineHeight: 1.1,
            maxWidth: "800px",
          }}
        >
          {name}
        </h1>

        {/* Component description */}
        <p
          style={{
            fontSize: "32px",
            color: "#FFFFFF",
            margin: "0",
            lineHeight: 1.4,
            maxWidth: "600px",
            fontWeight: "400",
          }}
        >
          {description || "A component from UI TripleD"}
        </p>
      </div>
    </div>
  );
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const componentId = searchParams.get("component");

    // If no component ID provided, redirect to default OG image
    if (!componentId) {
      return Response.redirect(DEFAULT_OG_IMAGE, 302);
    }

    const faviconUrl = LOGO_URL;

    const { getComponentById } = await import("@/lib/components-registry");
    const metadata = getComponentById(componentId);

    // Create image response
    let imageResponse: ImageResponse;

    if (!metadata) {
      const jsx = NotFoundOGImage(componentId, faviconUrl);
      imageResponse = new ImageResponse(jsx, {
        width: 1200,
        height: 630,
      });
    } else {
      const jsx = ComponentOGImage(
        metadata.name,
        metadata.description || "A component from UI TripleD",
        faviconUrl
      );
      imageResponse = new ImageResponse(jsx, {
        width: 1200,
        height: 630,
      });
    }

    // Add aggressive caching headers to reduce edge invocations
    // Cache for 1 year, allow stale content for 7 days
    imageResponse.headers.set(
      "Cache-Control",
      "public, s-maxage=31536000, max-age=31536000, stale-while-revalidate=604800"
    );

    return imageResponse;
  } catch (e) {
    const message =
      typeof e === "object" &&
      e !== null &&
      "message" in e &&
      typeof (e as { message: unknown }).message === "string"
        ? (e as { message: string }).message
        : "Unknown error";
    return Response.json(
      { error: `Failed to generate the image: ${message}` },
      { status: 500 }
    );
  }
}
