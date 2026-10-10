"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Eyebrow from "./ui/Eyebrow";
import { processStepsData } from "@/data/process";

const ProcessStepItem = ({ step, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="flex-[0_0_210px] pr-[22px] relative"
    >
      {/* Connecting Line between step dots */}
      {!isLast && (
        <div className="absolute top-[22px] left-[22px] right-[-4px] h-[1px] bg-border z-0" />
      )}

      {/* Numbered circle */}
      <div
        className={`w-[44px] h-[44px] rounded-full border flex items-center justify-center font-mono text-[13px] bg-bg relative z-[1] transition-all duration-500 ease-out ${
          isInView
            ? "border-brass text-brass shadow-[0_0_0_4px_rgba(206,159,76,0.12)]"
            : "border-border text-text-faint"
        }`}
        style={{
          transitionDelay: `${index * 120}ms`
        }}
      >
        {step.number}
      </div>

      <h4 className="mt-[20px] font-display text-[16px] font-semibold text-text">
        {step.title}
      </h4>
      <p className="mt-[8px] text-[13.5px] text-text-dim leading-[1.5]">
        {step.description}
      </p>
    </div>
  );
};

export const ProcessTrack = () => {
  return (
    <section className="py-[120px] max-sm:py-[80px]" id="process">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>OUR PROCESS</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            From idea to deployment.
          </h2>
        </div>

        {/* Horizontal scrollable track with hidden scrollbars */}
        <div className="flex overflow-x-auto gap-0 pb-[10px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {processStepsData.map((step, idx) => (
            <ProcessStepItem
              key={step.number}
              step={step}
              index={idx}
              isLast={idx === processStepsData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTrack;
