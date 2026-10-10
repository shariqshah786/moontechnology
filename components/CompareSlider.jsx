"use client";

import React, { useState } from "react";

/**
 * CompareSlider
 * Reusable split-panel before/after slider controlled via an accessible range input.
 * Calculates clip-path inset dynamically based on React state (0% to 100%).
 *
 * Math logic:
 * - reveal percentage 'v' sets clip-path `inset(0 0 0 ${v}%)` on the after layer
 * - divider and handle position track `left: ${v}%`
 */
export const CompareSlider = ({
  defaultValue = 50,
  ariaLabel,
  className = "",
  beforeContent,
  afterContent,
  heightClass = "h-[340px]"
}) => {
  const [reveal, setReveal] = useState(defaultValue);

  return (
    <div
      className={`relative border border-border rounded-[2px] overflow-hidden bg-panel select-none ${heightClass} ${className}`}
    >
      {/* Before Layer (Base) */}
      <div className="absolute inset-0 z-[1]">{beforeContent}</div>

      {/* After Layer (Clipped dynamically) */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          clipPath: `inset(0 0 0 ${reveal}%)`,
          WebkitClipPath: `inset(0 0 0 ${reveal}%)`
        }}
      >
        {afterContent}
      </div>

      {/* Brass Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-brass -translate-x-[1px] z-[3] pointer-events-none transition-none"
        style={{ left: `${reveal}%` }}
      />

      {/* Brass Handle with double arrow */}
      <div
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-[4] w-[38px] h-[38px] rounded-full bg-brass text-[#0A0C0E] flex items-center justify-center font-mono text-[14px] shadow-[0_6px_20px_rgba(0,0,0,0.5)] pointer-events-none select-none transition-none"
        style={{ left: `${reveal}%` }}
      >
        ⇔
      </div>

      {/* Range Input Overlay for Drag / Touch Interaction */}
      <input
        type="range"
        min={0}
        max={100}
        value={reveal}
        onChange={(e) => setReveal(Number(e.target.value))}
        aria-label={ariaLabel}
        className="absolute inset-0 w-full h-full m-0 opacity-0 cursor-ew-resize z-[5]"
      />
    </div>
  );
};

export default CompareSlider;
