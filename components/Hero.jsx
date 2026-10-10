"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Eyebrow from "./ui/Eyebrow";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-[180px] pb-[120px] max-sm:pt-[140px] max-sm:pb-[80px] overflow-hidden bg-[radial-gradient(ellipse_700px_400px_at_82%_15%,rgba(206,159,76,0.08),transparent_60%)] bg-bg"
    >
      {/* 64px Grid background texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)"
        }}
      />

      <div className="wrap relative z-[2] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[40px] items-center">
        {/* Left Column Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Eyebrow>DIGITAL TRANSFORMATION STUDIO</Eyebrow>

          <h1 className="text-[clamp(38px,5vw,66px)] leading-[1.04] tracking-[-0.02em] font-display font-semibold text-text">
            We turn business problems into digital systems.
          </h1>

          <p className="mt-[26px] text-[17px] text-text-dim max-w-[46ch] leading-[1.65]">
            We build practical software for businesses that still run on
            spreadsheets, WhatsApp and phone calls — inventory, sales,
            accounting, e-commerce and the automation that connects them.
          </p>

          <div className="mt-[36px] flex gap-[16px] flex-wrap items-center">
            <Button variant="primary" arrow href="#contact">
              Start your project
            </Button>
            <Button variant="ghost" href="#contact">
              Talk to an expert
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Abstract Connected Visual */}
        <div className="relative h-[420px] max-lg:h-[280px] max-lg:mt-[20px] w-full">
          <svg
            className="absolute inset-0 w-full h-full z-[1]"
            viewBox="0 0 400 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 60 L200 140 L340 90"
              stroke="#232A2E"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 6"
            />
            <path
              d="M60 300 L200 220 L300 340"
              stroke="#232A2E"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 6"
            />
          </svg>

          {/* Chip 1 */}
          <motion.div
            className="absolute top-[6%] left-[2%] bg-panel border border-border rounded-[2px] p-[14px_16px] font-mono text-[12px] text-text-dim shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] z-[2]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0
            }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-signal inline-block mr-[6px] animate-pulse-glow" />
            Inventory synced — <b className="text-text font-medium">2,140 SKUs</b>
          </motion.div>

          {/* Chip 2 */}
          <motion.div
            className="absolute top-[38%] right-[4%] bg-panel border border-border rounded-[2px] p-[14px_16px] font-mono text-[12px] text-text-dim shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] z-[2]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4
            }}
          >
            Monthly revenue
            <br />
            <b className="text-text font-medium">+18.4%</b>
          </motion.div>

          {/* Chip 3 */}
          <motion.div
            className="absolute bottom-[10%] left-[16%] bg-panel border border-border rounded-[2px] p-[14px_16px] font-mono text-[12px] text-text-dim shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] z-[2]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.8
            }}
          >
            New lead assigned to <b className="text-text font-medium">Arbab</b>
          </motion.div>

          {/* Chip 4 */}
          <motion.div
            className="absolute bottom-[34%] right-[24%] w-[150px] bg-panel border border-border rounded-[2px] p-[14px_16px] font-mono text-[12px] text-text-dim shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] z-[2]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9
            }}
          >
            Invoice #0412 — <b className="text-text font-medium">Paid</b>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
