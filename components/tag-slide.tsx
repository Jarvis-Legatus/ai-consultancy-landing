import React from 'react';
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-selector";
import { User, DollarSign, Clock, Settings, BarChart2, Rocket, Bot, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TagSlideProps {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
}

const TagSlide: React.FC<TagSlideProps> = ({
  direction = "left",
  speed = "slow",
}) => {
  const { t } = useLanguage();
  const componentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const tags = [
    { icon: BarChart2, text: t("animatedList.tags.dataDrivenDecisions") as string },
    { icon: Rocket, text: t("animatedList.tags.fasterInnovation") as string },
    { icon: Bot, text: t("animatedList.tags.virtualAssistance") as string },
    { icon: Layers, text: t("animatedList.tags.scalableSolutions") as string },
    { icon: User, text: t("animatedList.tags.personalizedExperiences") as string },
    { icon: DollarSign, text: t("animatedList.tags.costEffective") as string },
    { icon: Clock, text: t("animatedList.tags.realTimeInsights") as string },
    { icon: Settings, text: t("animatedList.tags.automation") as string },
    { icon: BarChart2, text: t("animatedList.tags.dataDrivenDecisions") as string },
    { icon: Rocket, text: t("animatedList.tags.fasterInnovation") as string },
    { icon: Bot, text: t("animatedList.tags.virtualAssistance") as string },
    { icon: Layers, text: t("animatedList.tags.scalableSolutions") as string },
    { icon: User, text: t("animatedList.tags.personalizedExperiences") as string },
    { icon: DollarSign, text: t("animatedList.tags.costEffective") as string },
    { icon: Clock, text: t("animatedList.tags.realTimeInsights") as string },
    { icon: Settings, text: t("animatedList.tags.automation") as string },
  ];

  const animationSpeed = {
    fast: "60s",
    normal: "120s",
    slow: "180s",
  };

  const animationDirection = direction === "left" ? "slide" : "slide-reverse";

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex w-full overflow-hidden max-w-5xl mx-auto px-4",
        "h-24", // Reverted to original height
        "mask-image-gradient-to-r from-transparent via-black to-transparent" // Fading effect
      )}
      style={{
        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
        WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <ul
        className={cn(
          "flex items-center justify-center md:justify-start [&_li]:mx-3",
          "animate-slide",
        )}
        style={{
          animationDuration: animationSpeed[speed],
          animationDirection: animationDirection,
        }}
      >
        {tags.map((tag, index) => (
          <li key={index} className="flex-shrink-0">
            <div
              className="flex items-center px-4 py-2 rounded-full card-shadow bg-[hsl(var(--background))] text-card-foreground"
              style={{ borderRadius: "228px" }} // Specific border-radius from the provided code
            >
              <tag.icon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-foreground">{tag.text}</span>
            </div>
          </li>
        ))}
        {/* Duplicate tags for seamless loop */}
        {tags.map((tag, index) => (
          <li key={`duplicate-${index}`} className="flex-shrink-0">
            <div
              className="flex items-center px-4 py-2 rounded-full card-shadow bg-[hsl(var(--background))] text-card-foreground"
              style={{ borderRadius: "228px" }}
            >
              <tag.icon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-foreground">{tag.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TagSlide;