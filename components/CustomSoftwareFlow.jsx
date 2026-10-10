"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";

const flowNodes = [
  { number: "01", label: "Business" },
  { number: "02", label: "Workflow" },
  { number: "03", label: "Software" },
  { number: "04", label: "Automation" },
  { number: "05", label: "Data" },
  { number: "06", label: "Growth" }
];

export const CustomSoftwareFlow = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="py-[120px] max-sm:py-[80px] bg-bg-alt">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-[60px] items-center">
        {/* Left Side Copy */}
        <div>
          <Eyebrow>CUSTOM SOFTWARE</Eyebrow>
          <h2 className="text-[clamp(28px,3.4vw,40px)] leading-[1.1] font-display font-semibold text-text">
            Don&apos;t change your business. Change the system behind it.
          </h2>
          <p className="mt-[18px] text-text-dim text-[16px] max-w-[48ch] leading-[1.6]">
            Every business works differently. Instead of forcing your team to
            adapt to generic software, we build technology around your existing
            workflow.
          </p>
          <div className="mt-[30px]">
            <Button variant="primary" arrow href="#contact">
              Build my system
            </Button>
          </div>
        </div>

        {/* Right Side: Staggered Flow Sequence */}
        <div ref={containerRef} className="flex flex-col">
          {flowNodes.map((node, index) => {
            return (
              <div
                key={node.number}
                className={`flex items-center gap-[18px] py-[18px] relative transition-opacity duration-500 ease-out ${
                  isInView ? "opacity-100" : "opacity-35"
                }`}
                style={{
                  transitionDelay: `${index * 160}ms`
                }}
              >
                {/* Connecting Line between dots */}
                {index < flowNodes.length - 1 && (
                  <div className="absolute left-[15px] top-[46px] w-[1px] h-[calc(100%-10px)] bg-border z-0" />
                )}

                {/* Dot */}
                <div
                  className={`w-[32px] h-[32px] rounded-full border flex items-center justify-center font-mono text-[11px] bg-bg-alt flex-shrink-0 z-[1] transition-all duration-500 ease-out ${
                    isInView
                      ? "border-brass text-brass shadow-[0_0_0_4px_rgba(206,159,76,0.12)]"
                      : "border-border text-text-faint"
                  }`}
                  style={{
                    transitionDelay: `${index * 160}ms`
                  }}
                >
                  {node.number}
                </div>

                {/* Label */}
                <span className="font-display text-[19px] text-text font-medium">
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareFlow;
