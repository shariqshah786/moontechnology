import React from "react";
import Eyebrow from "./ui/Eyebrow";
import { caseStudiesData } from "@/data/caseStudies";

export const CaseStudies = () => {
  return (
    <section className="py-[120px] max-sm:py-[80px] bg-bg-alt">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>CASE STUDIES</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            We don&apos;t just build software. We solve business problems.
          </h2>
        </div>

        <div className="flex flex-col gap-[20px]">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="border border-border rounded-[2px] p-[40px] max-sm:p-[24px] bg-bg-alt"
            >
              <div className="font-mono text-[11.5px] text-text-faint mb-[18px]">
                {study.tag}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
                <div>
                  <span className="block font-mono text-[11.5px] text-brass mb-[10px]">
                    PROBLEM
                  </span>
                  <p className="text-[15px] text-text-dim leading-[1.6]">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <span className="block font-mono text-[11.5px] text-brass mb-[10px]">
                    SOLUTION
                  </span>
                  <p className="text-[15px] text-text-dim leading-[1.6]">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <span className="block font-mono text-[11.5px] text-brass mb-[10px]">
                    RESULT
                  </span>
                  <p className="text-[15px] text-text-dim leading-[1.6]">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
