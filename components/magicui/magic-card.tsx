"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
gradientSize?: number;
gradientOpacity?: number;
gradientColors?: string; // New prop for multiple gradient colors
gradientColorsLight?: string; // New prop for light theme gradient colors
gradientColorsDark?: string; // New prop for dark theme gradient colors
}

export function MagicCard({
children,
className,
gradientSize = 300,
gradientOpacity = 0.1,
gradientColors, // Use the new gradientColors prop
gradientColorsLight = "rgb(255, 155, 0), rgb(0, 255, 153)", // Default for light theme
gradientColorsDark = "rgb(0, 250, 255), rgb(0, 120, 255)", // Default for dark theme
}: MagicCardProps) {
const cardRef = useRef<HTMLDivElement>(null);
const mouseX = useMotionValue(-gradientSize);
const mouseY = useMotionValue(-gradientSize);

const { theme } = useTheme(); // Get the current theme

// Determine spotlight color based on theme internally
const spotlightColor = theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 170, 250)';

// Determine radial gradient colors based on theme
const resolvedGradientColors =
  theme === 'light' ? gradientColorsLight : gradientColorsDark;

const handleMouseMove = useCallback(
  (e: MouseEvent) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
  },
  [mouseX, mouseY],
);

const handleMouseOut = useCallback(
  (e: MouseEvent) => {
    if (!e.relatedTarget) {
      document.removeEventListener("mousemove", handleMouseMove);
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }
  },
  [handleMouseMove, mouseX, gradientSize, mouseY],
);

const handleMouseEnter = useCallback(() => {
  document.addEventListener("mousemove", handleMouseMove);
  mouseX.set(-gradientSize);
  mouseY.set(-gradientSize);
}, [handleMouseMove, mouseX, gradientSize, mouseY]);

useEffect(() => {
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseout", handleMouseOut);
  document.addEventListener("mouseenter", handleMouseEnter);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseout", handleMouseOut);
    document.removeEventListener("mouseenter", handleMouseEnter);
  };
}, [handleMouseEnter, handleMouseMove, handleMouseOut]);

useEffect(() => {
  mouseX.set(-gradientSize);
  mouseY.set(-gradientSize);
}, [gradientSize, mouseX, mouseY]);

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

return (
  <div
    ref={cardRef}
    className={cn("group relative rounded-[var(--radius)] card-shadow", className)}
  >
    <motion.div
      className="pointer-events-none absolute inset-0 bg-transparent duration-300 group-hover:opacity-100"
      style={{
        borderRadius: 'inherit',
        background: useMotionTemplate`
        radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
        ${resolvedGradientColors},
        transparent 100%
        )
        `,
      }}
    />
    <div
      className="absolute inset-[2px] bg-background" /* THIS IS WHERE THE WIDTH or THICKNESS of the Magic-Card radial gradient border effect is controlled */
      style={{
        borderRadius: 'inherit',
      }}
    />
    <motion.div
      className="pointer-events-none absolute inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        borderRadius: 'inherit',
        background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 100%)
        `,
        opacity: gradientOpacity,
      }}
    />
    <div className="relative z-10 h-full w-full">{children}</div>
  </div>
);
}
