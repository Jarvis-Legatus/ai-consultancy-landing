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
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 500,
  gradientOpacity = 0.95,
  gradientFrom = "rgb(0, 200, 255)",
  gradientTo = "rgb(0, 255, 255)",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const { theme } = useTheme(); // Get the current theme

  // Determine spotlight color based on theme internally
  const spotlightColor = theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(22, 25, 25)';

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
      className={cn("group relative rounded-[20px]", className)}
      style={{
        backgroundColor: theme === 'light' ? "rgb(245, 245, 245)" : "rgb(22, 25, 25)",
        width: "100%",
        borderRadius: "20px",
        boxShadow: theme === 'light' ? "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px" : "rgba(255, 255, 255, 0.005) 0px 0.706592px 0.706592px -0.666667px, rgba(255, 255, 255, 0.005) 0px 1.80656px 1.80656px -1.33333px, rgba(255, 255, 255, 0.005) 0px 3.62176px 3.62176px -2px, rgba(255, 255, 255, 0.005) 0px 6.8656px 6.8656px -2.66667px, rgba(255, 255, 255, 0.005) 0px 13.6468px 13.6468px -3.33333px, rgba(255, 255, 255, 0.005) 0px 30px 30px -4px",
        opacity: 1,
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[20px] bg-transparent duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom},
          ${gradientTo},
          hsl(var(--border)) 100%
          )
          `,
        }}
      />
      <div
        className="absolute inset-px rounded-[20px] bg-background"
        style={{
          boxShadow: theme === 'light' ? "rgb(255, 255, 255) 0px 3px 1px 0px inset" : "rgb(20, 20, 20) 0px 3px 1px 0px inset",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[20px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
