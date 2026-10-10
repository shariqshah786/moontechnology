import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";

export const PartnershipPanels = () => {
  return (
    <section className="pb-[120px] max-sm:pb-[80px] bg-bg-alt">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border-soft border border-border-soft">
          {/* Panel 1: Ongoing Partnership */}
          <div className="bg-bg-alt p-[48px] max-sm:p-[32px]">
            <Eyebrow className="!mb-[12px]">ONGOING PARTNERSHIP</Eyebrow>
            <h3 className="font-display text-[24px] font-semibold mb-[16px] text-text">
              Your software should keep getting better.
            </h3>
            <p className="text-text-dim text-[15px] mb-[24px]">
              We don&apos;t disappear after launch. Every client gets a monthly
              technology review.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[10px_20px] mb-[28px]">
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                System performance
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Security
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                New feature requirements
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                User feedback
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Analytics
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                UI/UX improvements
              </li>
            </ul>
            <Button variant="ghost" arrow href="#contact">
              Schedule monthly review
            </Button>
          </div>

          {/* Panel 2: 24/7 Support */}
          <div className="bg-bg-alt p-[48px] max-sm:p-[32px]">
            <Eyebrow className="!mb-[12px]">24/7 SUPPORT</Eyebrow>
            <h3 className="font-display text-[24px] font-semibold mb-[16px] text-text">
              When your business needs us, we&apos;re there.
            </h3>
            <p className="text-text-dim text-[15px] mb-[24px]">
              Technical issues shouldn&apos;t stop your business. Our team is
              available to troubleshoot and maintain.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[10px_20px] mb-[28px]">
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Technical support
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Bug fixing
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Monitoring
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Maintenance
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Updates
              </li>
              <li className="text-[13.5px] text-text-dim font-mono flex gap-[8px]">
                <span className="text-brass-dim select-none">—</span>
                Emergency support
              </li>
            </ul>
            <Button variant="ghost" arrow href="#contact">
              Talk to support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPanels;
