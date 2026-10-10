import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-border-soft pt-[64px] pb-[32px] bg-bg">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-[40px] max-sm:gap-[28px] pb-[40px] border-b border-border-soft">
          {/* Brand info */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-[10px] font-display text-[17px] font-bold tracking-[-0.01em] text-text"
            >
              <span className="w-[28px] h-[28px] border border-brass rounded-[2px] flex items-center justify-center font-mono text-[13px] text-brass">
                M
              </span>
              <span>MOON TECHNOLOGY</span>
            </a>
            <p className="mt-[14px] text-text-dim text-[14.5px] max-w-[32ch] leading-[1.6]">
              Custom technology and SaaS solutions for businesses ready to grow.
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <h5 className="font-mono text-[12px] text-text-faint mb-[16px] tracking-[0.04em] uppercase">
              NAVIGATE
            </h5>
            <a
              href="#services"
              className="block text-[14.5px] text-text-dim mb-[12px] hover:text-text transition-colors"
            >
              Services
            </a>
            <a
              href="#solutions"
              className="block text-[14.5px] text-text-dim mb-[12px] hover:text-text transition-colors"
            >
              Solutions
            </a>
            <a
              href="#work"
              className="block text-[14.5px] text-text-dim mb-[12px] hover:text-text transition-colors"
            >
              Our Work
            </a>
            <a
              href="#process"
              className="block text-[14.5px] text-text-dim mb-[12px] hover:text-text transition-colors"
            >
              Process
            </a>
            <a
              href="#about"
              className="block text-[14.5px] text-text-dim mb-[12px] hover:text-text transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-[14.5px] text-text-dim mb-[12px] hover:text-text transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Contact Column */}
          <div>
            <h5 className="font-mono text-[12px] text-text-faint mb-[16px] tracking-[0.04em] uppercase">
              CONTACT
            </h5>
            <a
              href="tel:+919136653743"
              className="block text-[14.5px] text-text-dim mb-[12px] hover:text-text transition-colors"
            >
              +91 91366 53743
            </a>
            <p className="block text-[14.5px] text-text-dim mb-[12px]">
              hello@moontechnology.in
            </p>
            <p className="block text-[14.5px] text-text-dim mb-[12px]">India</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[16px] pt-[28px] text-[13px] text-text-faint">
          <span>© 2026 Moon Technology. All rights reserved.</span>
          <span className="flex items-center gap-[8px] font-mono text-[13px]">
            <span className="w-[6px] h-[6px] rounded-full bg-signal animate-pulse-glow" />
            SYSTEMS ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
