import React from "react";
import Eyebrow from "./ui/Eyebrow";
import { workItemsData } from "@/data/workItems";

export const PortfolioGrid = () => {
  return (
    <section className="py-[120px] max-sm:py-[80px]" id="work">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>OUR WORK</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            50+ projects. Real business problems, real digital solutions.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {workItemsData.map((item) => (
            <div
              key={item.id}
              className="group border border-border rounded-[2px] p-[28px] bg-panel transition-all duration-200 hover:border-brass-dim hover:-translate-y-[4px]"
            >
              <div className="font-mono text-[11.5px] text-brass tracking-[0.04em] mb-[14px]">
                {item.category}
              </div>
              <h3 className="font-display text-[19px] font-semibold mb-[14px] text-text">
                {item.title}
              </h3>
              <div className="text-[13.5px] text-text-dim leading-[1.8] mb-[20px]">
                {item.features}
              </div>
              <a
                href={item.href}
                className="inline-flex items-center gap-[6px] font-mono text-[13px] text-text group-hover:text-brass transition-colors"
              >
                <span>{item.linkText}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
