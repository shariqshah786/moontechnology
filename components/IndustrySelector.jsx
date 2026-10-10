"use client";

import React, { useState } from "react";
import Eyebrow from "./ui/Eyebrow";
import { industriesData, industryKeys } from "@/data/industries";

export const IndustrySelector = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Retail");
  const currentData = industriesData[selectedIndustry] || industriesData["Retail"];

  return (
    <section className="py-[120px] max-sm:py-[80px]" id="solutions">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>SOLUTIONS BY INDUSTRY</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            Your industry. Your problem. Our technology.
          </h2>
          <p className="mt-[16px] text-text-dim text-[16px] max-w-[52ch]">
            Select an industry to see the modules businesses like yours use most.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap gap-[10px] mb-[36px]">
          {industryKeys.map((name) => {
            const isActive = name === selectedIndustry;
            return (
              <button
                key={name}
                onClick={() => setSelectedIndustry(name)}
                className={`py-[10px] px-[18px] border rounded-[20px] text-[13.5px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brass border-brass text-[#0A0C0E] font-medium"
                    : "bg-transparent border-border text-text-dim hover:border-brass-dim hover:text-text"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="border border-border rounded-[2px] p-[44px] max-sm:p-[28px] bg-panel grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-[40px] items-center">
          <div>
            <h3 className="font-display text-[26px] font-semibold text-text">
              {currentData.name}
            </h3>
            <p className="mt-[10px] text-text-dim text-[14.5px]">
              {currentData.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-0">
            {currentData.stack.map((item, index) => (
              <React.Fragment key={item}>
                <span className="font-mono text-[13.5px] p-[10px_16px] border border-border-soft rounded-[2px] bg-bg-alt text-text">
                  {item}
                </span>
                {index < currentData.stack.length - 1 && (
                  <span className="text-brass text-[13px] mx-[10px] font-mono select-none">
                    +
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySelector;
