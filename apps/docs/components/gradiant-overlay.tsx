interface GradientOverlayProps {
  className?: string;
}

export default function GradientOverlay({
  className = "",
}: GradientOverlayProps) {
  return (
    <div
      className={`fixed bottom-0 w-full h-[50px] backdrop-blur-xl z-40 ${className}`}
      style={{
        maskImage:
          "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}
