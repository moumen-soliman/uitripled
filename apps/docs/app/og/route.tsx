import { componentsRegistry } from "@uitripled/registry";
import { ImageResponse } from "next/og";

const DEFAULT_OG_IMAGE =
  "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtrDdNxsib920zRingEy8GoSLBITJVjwbtYFxm";

const LOGO_URL =
  "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtX33qaxnHwTNEZVzK0s4lnUf7pOv2j3R5PaHA";

const DEFAULT_BACKGROUND_IMAGE =
  "https://iimydr2b8o.ufs.sh/f/Zqn6AViLMoTtShIYIwggGZ3rC8N4kMKvLszb2IcpJ71muYAl";

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
            color: "#000000",
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
            color: "#000000",
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
            color: "#000000",
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
            color: "#000000",
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

    const item =
      componentsRegistry.find(
        (it) => typeof it?.id === "string" && it.id === componentId
      ) ||
      componentsRegistry.find(
        (it) => typeof it?.id === "string" && it.id.startsWith(componentId)
      );

    const metadata = item
      ? {
          name:
            typeof item.name === "string" && item.name.trim().length > 0
              ? item.name.replaceAll("(Base UI)", "").trim()
              : componentId,
          description:
            typeof item.description === "string" ? item.description : undefined,
        }
      : undefined;

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
