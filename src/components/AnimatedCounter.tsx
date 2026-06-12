import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration, ease: [0.2, 0.8, 0.2, 1] });
      return () => controls.stop();
    }
  }, [inView, value, duration, count]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span className="text-accent">{suffix}</span>
    </span>
  );
}