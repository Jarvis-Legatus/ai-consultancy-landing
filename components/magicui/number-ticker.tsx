"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  const animatedValue = useRef(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate();
    return () => {
      controls?.stop();
    };
  }, [isInView, value, direction, delay]);

  const animate = () => {
    const duration = 1; // seconds
    const start = 0;
    const end = value;
    const startTime = performance.now();

    const animateTick = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutCubic(progress);

      const currentValue = start + (end - start) * easedProgress;
      animatedValue.current = currentValue;
      setDisplayValue(Math.floor(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animateTick);
      } else {
        setDisplayValue(value); // Ensure final value is exact
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animateTick);
    }, delay * 1000);

    return {
      stop: () => clearTimeout(timeoutId),
    };
  };

  const easeOutCubic = (t: number) => t * t * t;

  return (
    <motion.span className={className} ref={ref}>
      {displayValue.toLocaleString()}
    </motion.span>
  );
}