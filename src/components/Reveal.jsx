import { useInView } from "@/hooks/useInView";

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

  const getTransform = () => {
    if (inView) return "none";
    switch (direction) {
      case "up":
      case "from-bottom":
        return "translateY(40px)";
      case "down":
      case "from-top":
        return "translateY(-40px)";
      case "left":
      case "from-left":
        return "translateX(-48px)";
      case "right":
      case "from-right":
        return "translateX(48px)";
      case "zoom":
        return "scale(0.92)";
      case "fade":
        return "none";
      default:
        return "translateY(40px)";
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
        transitionProperty: "opacity, transform, filter",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: inView ? "auto" : "opacity, transform",
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
