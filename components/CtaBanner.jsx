import React from "react";
import Button from "./ui/Button";

export const CtaBanner = () => {
  return (
    <section className="py-[120px] max-sm:py-[80px]">
      <div className="wrap">
        <div className="border border-border rounded-[2px] p-[64px] max-sm:p-[36px] bg-[linear-gradient(180deg,#181D20,#0E1114)] text-left">
          <h2 className="text-[clamp(28px,3.6vw,42px)] font-display font-semibold text-text max-w-[16ch] leading-[1.1]">
            Have a business problem? Let&apos;s build the solution.
          </h2>
          <p className="mt-[18px] text-text-dim text-[16px] max-w-[52ch] leading-[1.6]">
            Tell us what you&apos;re trying to improve. We&apos;ll help you figure out
            what technology you actually need.
          </p>
          <div className="mt-[34px] flex gap-[16px] flex-wrap">
            <Button variant="primary" arrow href="#contact">
              Start a project
            </Button>
            <Button variant="ghost" href="tel:+919136653743">
              Call us
            </Button>
            <Button variant="ghost" href="mailto:hello@moontechnology.in">
              Send an enquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
