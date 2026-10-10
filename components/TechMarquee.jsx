import React from "react";
import { techStackData } from "@/data/techStack";

export const TechMarquee = () => {
  // Duplicate array for seamless infinite looping
  const duplicatedTechs = [...techStackData, ...techStackData];

  return (
    <div className="border-t border-b border-border-soft py-[36px] overflow-hidden bg-bg-alt select-none">
      <div className="animate-marquee-scroll flex gap-[64px] w-max">
        {duplicatedTechs.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="font-mono text-[15px] text-text-faint whitespace-nowrap transition-colors hover:text-brass"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
