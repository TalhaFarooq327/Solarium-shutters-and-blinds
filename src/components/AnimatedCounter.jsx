import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function AnimatedCounter({ end, suffix = "", duration = 1600, prefix = "" }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [count, setCount] = useState(0);

  const numericEnd = typeof end === "number" ? end : parseInt(String(end).replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * numericEnd));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      } else {
        setCount(numericEnd);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [inView, numericEnd, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}
