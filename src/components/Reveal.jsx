import { useInView } from "@/hooks/useInView";
import { useMemo } from "react";

// Detect mobile once on load (avoids repeated matchMedia calls per render)
const isMobile = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 750,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
  threshold = 0.12,
  as: Tag = "div",
  style = {},
  ...props
}) {
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  // On mobile: shorter duration, smaller stagger delay, less travel distance
  const mobile = useMemo(() => isMobile(), []);
  const resolvedDuration = mobile ? Math.min(duration * 0.6, 480) : duration;
  const resolvedDelay    = mobile ? Math.round(delay * 0.5)        : delay;
  const travelPx        = mobile ? 20 : 40;
  const easing          = mobile
    ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"   // ease-out — lighter on mobile
    : "cubic-bezier(0.16, 1, 0.3, 1)";           // spring — premium on desktop

  const getTransform = () => {
    if (inView) return "none";
    switch (direction) {
      case "up":
      case "from-bottom":
        return `translateY(${travelPx}px)`;
      case "down":
      case "from-top":
        return `translateY(-${travelPx}px)`;
      case "left":
      case "from-left":
        return `translateX(-${mobile ? 28 : 48}px)`;
      case "right":
      case "from-right":
        return `translateX(${mobile ? 28 : 48}px)`;
      case "zoom":
        return `scale(${mobile ? 0.95 : 0.92})`;
      case "fade":
        return "none";
      default:
        return `translateY(${travelPx}px)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${resolvedDuration}ms`,
        transitionTimingFunction: easing,
        transitionDelay: `${resolvedDelay}ms`,
        willChange: inView ? "auto" : "opacity, transform",
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
