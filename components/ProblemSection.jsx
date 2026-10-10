"use client";

import React from "react";
import Eyebrow from "./ui/Eyebrow";
import CompareSlider from "./CompareSlider";

export const ProblemSection = () => {
  const beforePanel = (
    <div className="w-full h-full p-[40px] max-sm:p-[24px] flex flex-col justify-center bg-panel relative">
      <div className="font-mono text-[12px] tracking-[0.04em] text-text-faint mb-[18px]">
        BEFORE
      </div>
      <ul className="flex flex-col gap-[12px]">
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text-dim flex items-center gap-[10px]">
          <span className="text-danger text-[18px] leading-none">×</span>
          Stock tracked across three Excel sheets
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text-dim flex items-center gap-[10px]">
          <span className="text-danger text-[18px] leading-none">×</span>
          Orders confirmed over WhatsApp
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text-dim flex items-center gap-[10px]">
          <span className="text-danger text-[18px] leading-none">×</span>
          Sales follow-ups remembered, not scheduled
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text-dim flex items-center gap-[10px]">
          <span className="text-danger text-[18px] leading-none">×</span>
          Reports built manually, once a month
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text-dim flex items-center gap-[10px]">
          <span className="text-danger text-[18px] leading-none">×</span>
          No single view of the business
        </li>
      </ul>
      <div className="absolute top-[16px] right-[16px] font-mono text-[11px] text-text-faint tracking-[0.05em]">
        MANUAL OPERATIONS
      </div>
    </div>
  );

  const afterPanel = (
    <div className="w-full h-full p-[40px] max-sm:p-[24px] flex flex-col justify-center bg-[#141910] relative">
      <div className="font-mono text-[12px] tracking-[0.04em] text-text-faint mb-[18px]">
        AFTER
      </div>
      <ul className="flex flex-col gap-[12px]">
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text flex items-center gap-[10px]">
          <span className="text-signal text-[18px] leading-none">✓</span>
          Real-time stock across every location
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text flex items-center gap-[10px]">
          <span className="text-signal text-[18px] leading-none">✓</span>
          Orders logged and tracked automatically
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text flex items-center gap-[10px]">
          <span className="text-signal text-[18px] leading-none">✓</span>
          Follow-ups triggered on schedule
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text flex items-center gap-[10px]">
          <span className="text-signal text-[18px] leading-none">✓</span>
          Reports generated live, on demand
        </li>
        <li className="font-mono text-[14.5px] max-sm:text-[13px] text-text flex items-center gap-[10px]">
          <span className="text-signal text-[18px] leading-none">✓</span>
          One dashboard for the whole business
        </li>
      </ul>
      <div className="absolute top-[16px] right-[16px] font-mono text-[11px] text-brass-dim tracking-[0.05em]">
        ONE PLATFORM
      </div>
    </div>
  );

  return (
    <section className="py-[120px] max-sm:py-[80px]">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>THE PROBLEM</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            Your business is growing. Your systems should too.
          </h2>
          <p className="mt-[16px] text-text-dim text-[16px] max-w-[52ch]">
            Drag the divider to see what changes when scattered tools become one
            system.
          </p>
        </div>

        <CompareSlider
          defaultValue={50}
          ariaLabel="Compare before and after"
          heightClass="h-[340px]"
          beforeContent={beforePanel}
          afterContent={afterPanel}
        />
      </div>
    </section>
  );
};

export default ProblemSection;
