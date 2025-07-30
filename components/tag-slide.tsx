import React from 'react';
import { cn } from "@/lib/utils";

interface TagSlideProps {
  tags: {
    icon: React.ElementType;
    text: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
}

const TagSlide: React.FC<TagSlideProps> = ({
  tags,
  direction = "left",
  speed = "slow",
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (containerRef.current) {
      setStart(true);
    }
  }, []);

  const animationSpeed = {
    fast: "20s",
    normal: "30s",
    slow: "60s",
  };

  const animationDirection = direction === "left" ? "slide" : "slide-reverse";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full overflow-hidden",
        "h-12", // Fixed height for the tags
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
          start && "animate-slide-start"
        )}
        style={{
          animationDuration: animationSpeed[speed],
          animationDirection: animationDirection,
        }}
      >
        {tags.map((tag, index) => (
          <li key={index} className="flex-shrink-0">
            <div
              className="flex items-center px-4 py-2 rounded-full card-shadow bg-card text-card-foreground"
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
              className="flex items-center px-4 py-2 rounded-full card-shadow bg-card text-card-foreground"
              style={{ borderRadius: "228px" }}
            >
              <tag.icon className="w-5 h-5 mr-2 text-muted-foreground" />
              <span className="text-foreground">{tag.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagSlide;