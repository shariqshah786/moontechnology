import React from "react";

export const Eyebrow = ({ children, className = "" }) => {
  return (
    <div
      className={`font-mono text-[12.5px] text-brass tracking-[0.02em] uppercase inline-flex items-center gap-[8px] mb-[18px] select-none ${className}`}
    >
      <span className="text-text-faint">//</span>
      <span>{children}</span>
    </div>
  );
};

export default Eyebrow;
