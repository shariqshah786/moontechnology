import React from "react";
import Eyebrow from "./ui/Eyebrow";
import { teamData } from "@/data/team";

export const TeamGrid = () => {
  return (
    <section className="py-[120px] max-sm:py-[80px] bg-bg-alt">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>THE TEAM</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            The people behind the product
          </h2>
          <p className="mt-[16px] text-text-dim text-[16px] max-w-[52ch]">
            Technology is built by people who understand both code and business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="border border-border rounded-[2px] p-[28px] text-left bg-panel"
            >
              <div className="w-[46px] h-[46px] rounded-full border border-brass-dim flex items-center justify-center font-display text-[15px] text-brass mb-[16px] select-none">
                {member.initials}
              </div>
              <h4 className="font-display text-[16px] font-semibold text-text">
                {member.role}
              </h4>
              <p className="text-[13.5px] text-text-dim mt-[6px]">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
