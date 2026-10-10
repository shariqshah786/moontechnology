import React from "react";
import Eyebrow from "./ui/Eyebrow";

const whyItems = [
  {
    icon: "◆",
    title: "Business-first development",
    description: "We understand the business problem before writing the code."
  },
  {
    icon: "◇",
    title: "Experienced developers",
    description: "A team fluent across modern web, mobile and cloud technologies."
  },
  {
    icon: "□",
    title: "UI/UX designers",
    description: "Interfaces designed for real users, not just for developers."
  },
  {
    icon: "△",
    title: "Custom solutions",
    description: "No unnecessary features. We build what your business actually needs."
  },
  {
    icon: "○",
    title: "Scalable technology",
    description: "Systems designed to grow with your business, not against it."
  },
  {
    icon: "▽",
    title: "Long-term partnership",
    description: "We stay involved long after the system goes live."
  }
];

export const WhyUsGrid = () => {
  return (
    <section className="py-[120px] max-sm:py-[80px]" id="about">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>WHY US</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            Why businesses choose us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
          {whyItems.map((item) => (
            <div key={item.title}>
              <div className="w-[38px] h-[38px] border border-border rounded-[2px] flex items-center justify-center text-brass font-mono select-none">
                {item.icon}
              </div>
              <h3 className="font-display text-[17px] font-semibold my-[16px_10px] text-text">
                {item.title}
              </h3>
              <p className="text-[14.5px] text-text-dim leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsGrid;
