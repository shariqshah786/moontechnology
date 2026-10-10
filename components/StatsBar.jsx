"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/lib/useCountUp";

const StatItem = ({
  target,
  suffix = "+",
  label,
  isLast = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp({ target, shouldStart: isInView, duration: 1500 });

  return (
    <div
      ref={ref}
      className={`p-[44px_32px] max-lg:border-b max-lg:border-border-soft ${
        !isLast ? "lg:border-r lg:border-border-soft" : ""
      }`}
    >
      <div className="font-display text-[40px] font-bold text-brass tracking-[-0.01em]">
        {count}
        {count === target ? suffix : ""}
      </div>
      <div className="mt-[6px] text-[13.5px] text-text-dim font-mono">
        {label}
      </div>
    </div>
  );
};

export const StatsBar = () => {
  return (
    <section className="border-t border-b border-border-soft bg-bg-alt">
      <div className="wrap grid grid-cols-2 lg:grid-cols-4">
        <StatItem target={50} suffix="+" label="Projects delivered" />
        <StatItem target={12} suffix="+" label="Industries served" />
        <StatItem target={24} suffix="/7" label="Hour support availability" />
        <StatItem
          target={15}
          suffix="+"
          label="Developers & designers"
          isLast
        />
      </div>
    </section>
  );
};

export default StatsBar;
