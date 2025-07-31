"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gradientColorsLight = "rgb(255, 155, 0), rgb(0, 255, 153)";
  const gradientColorsDark = "rgb(0, 250, 255), rgb(0, 120, 255)";

  const resolvedGradientColors =
    mounted && resolvedTheme === 'light' ? gradientColorsLight : gradientColorsDark;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "z-50 h-px origin-left",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
        background: mounted ? `linear-gradient(to right, ${resolvedGradientColors})` : undefined,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
