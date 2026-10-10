"use client";

import React from "react";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";
import CompareSlider from "./CompareSlider";

export const AutopilotSection = () => {
  const beforePanel = (
    <div
      className="w-full h-full p-[26px] flex flex-col justify-between"
      style={{
        background:
          "radial-gradient(ellipse at 25% 15%, rgba(211,105,92,0.10), transparent 55%), #131719"
      }}
    >
      <svg
        className="w-full flex-1 min-h-0"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Warning triangle */}
        <path
          d="M35 45 L48 68 L22 68 Z"
          fill="none"
          stroke="#D3695C"
          strokeWidth="2"
        />
        <line
          x1="35"
          y1="53"
          x2="35"
          y2="60"
          stroke="#D3695C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="35" cy="64" r="1.3" fill="#D3695C" />

        {/* Stress lines */}
        <g className="animate-jitter">
          <path
            d="M118 28 L126 38 L116 44 L124 53"
            stroke="#D3695C"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M202 28 L194 38 L204 44 L196 53"
            stroke="#D3695C"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Stressed figure */}
        <circle
          cx="160"
          cy="70"
          r="26"
          fill="#131719"
          stroke="#ECEFF0"
          strokeWidth="2.5"
        />
        <circle cx="150" cy="66" r="2" fill="#ECEFF0" />
        <circle cx="170" cy="66" r="2" fill="#ECEFF0" />
        <path
          d="M148 83 Q160 75 172 83"
          stroke="#D3695C"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M132 100 Q108 84 131 65"
          stroke="#ECEFF0"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M188 100 Q212 84 189 65"
          stroke="#ECEFF0"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="131" cy="65" r="5" fill="#ECEFF0" />
        <circle cx="189" cy="65" r="5" fill="#ECEFF0" />
        <path
          d="M130 98 Q160 91 190 98 L197 150 L123 150 Z"
          fill="#1B2025"
          stroke="#333a40"
          strokeWidth="1.5"
        />

        {/* Desk and messy paperwork */}
        <rect x="55" y="150" width="210" height="7" fill="#262C32" />
        <rect
          x="68"
          y="132"
          width="28"
          height="19"
          fill="#20262A"
          stroke="#3a4046"
          transform="rotate(-9 82 141)"
        />
        <rect
          x="92"
          y="127"
          width="24"
          height="17"
          fill="#20262A"
          stroke="#3a4046"
          transform="rotate(7 104 135)"
        />
        <rect
          x="218"
          y="129"
          width="26"
          height="17"
          fill="#20262A"
          stroke="#3a4046"
          transform="rotate(11 231 137)"
        />

        {/* Ringing phone */}
        <g className="animate-pulse">
          <rect
            x="252"
            y="58"
            width="13"
            height="22"
            rx="2"
            fill="#20262A"
            stroke="#D3695C"
            strokeWidth="1.4"
          />
          <path
            d="M269 55 Q278 66 269 77"
            stroke="#D3695C"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M276 49 Q289 66 276 83"
            stroke="#D3695C"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
        <polyline
          points="30,188 50,178 65,193 84,172"
          stroke="#D3695C"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div>
        <div className="font-mono text-[11px] tracking-[0.05em] text-danger">
          BEFORE AUTOMATION
        </div>
        <div className="flex flex-wrap gap-[8px] mt-[12px]">
          <span className="font-mono text-[11.5px] py-[6px] px-[10px] rounded-full border border-[rgba(211,105,92,0.4)] bg-[rgba(211,105,92,0.08)] text-danger whitespace-nowrap">
            No control on inventory
          </span>
          <span className="font-mono text-[11.5px] py-[6px] px-[10px] rounded-full border border-[rgba(211,105,92,0.4)] bg-[rgba(211,105,92,0.08)] text-danger whitespace-nowrap">
            Don&apos;t know the finances
          </span>
          <span className="font-mono text-[11.5px] py-[6px] px-[10px] rounded-full border border-[rgba(211,105,92,0.4)] bg-[rgba(211,105,92,0.08)] text-danger whitespace-nowrap">
            Running it all alone
          </span>
        </div>
      </div>
    </div>
  );

  const afterPanel = (
    <div
      className="w-full h-full p-[26px] flex flex-col justify-between"
      style={{
        background: "linear-gradient(180deg, #131b26 0%, #2c2313 55%, #3d2a12 100%)"
      }}
    >
      <svg
        className="w-full flex-1 min-h-0"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Sun */}
        <circle cx="262" cy="34" r="26" fill="#E6BB66" opacity="0.12" />
        <circle
          cx="262"
          cy="34"
          r="16"
          fill="none"
          stroke="#E6BB66"
          strokeWidth="2.5"
        />

        {/* Palm tree */}
        <path
          d="M40 195 Q52 130 45 85"
          stroke="#8C752F"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M45 85 Q18 74 6 90"
          stroke="#5FCB8B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M45 85 Q64 68 84 78"
          stroke="#5FCB8B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M45 85 Q36 60 48 44"
          stroke="#5FCB8B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Umbrella */}
        <line
          x1="178"
          y1="182"
          x2="178"
          y2="92"
          stroke="#3a4046"
          strokeWidth="3"
        />
        <path
          d="M136 92 Q178 54 220 92 Z"
          fill="#CE9F4C"
          opacity="0.85"
        />

        {/* Relaxing figure in lounger */}
        <g className="animate-bob">
          <path
            d="M112 178 L232 178 L216 148 L132 152 Z"
            fill="#1B2025"
            stroke="#3a4046"
            strokeWidth="1.5"
          />
          <path
            d="M132 152 L120 118"
            stroke="#3a4046"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="130"
            cy="107"
            r="17"
            fill="#131719"
            stroke="#ECEFF0"
            strokeWidth="2.2"
          />
          <rect
            x="120"
            y="102"
            width="20"
            height="6"
            rx="3"
            fill="#0A0C0E"
            stroke="#ECEFF0"
            strokeWidth="1"
          />
          <path
            d="M123 115 Q130 119 137 115"
            stroke="#ECEFF0"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M130 107 Q106 97 101 80"
            stroke="#ECEFF0"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M141 119 Q182 132 212 151"
            stroke="#ECEFF0"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M212 151 Q233 159 248 171"
            stroke="#ECEFF0"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Small table with tablet & drink */}
        <rect x="150" y="169" width="34" height="4" fill="#20262A" />
        <rect
          x="152"
          y="142"
          width="30"
          height="26"
          rx="2"
          fill="#0A0C0E"
          stroke="#3a4046"
          strokeWidth="1.4"
        />
        <polyline
          points="156,161 164,151 172,155 180,145"
          stroke="#5FCB8B"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cocktail */}
        <path
          d="M94 180 L98 192 L106 192 L110 180 Z"
          fill="none"
          stroke="#ECEFF0"
          strokeWidth="1.4"
        />
        <line
          x1="102"
          y1="180"
          x2="105"
          y2="169"
          stroke="#ECEFF0"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M105 169 L110 173"
          stroke="#CE9F4C"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Rupee signs */}
        <text
          x="252"
          y="118"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="14"
          fill="#E6BB66"
          opacity="0.85"
        >
          ₹
        </text>
        <text
          x="270"
          y="92"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="12"
          fill="#E6BB66"
          opacity="0.55"
        >
          ₹
        </text>
        <text
          x="244"
          y="72"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="10"
          fill="#E6BB66"
          opacity="0.35"
        >
          ₹
        </text>

        {/* Waves */}
        <path
          d="M0 196 Q40 189 80 196 T160 196 T240 196 T320 196"
          stroke="#3a4046"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </svg>
      <div>
        <div className="font-mono text-[11px] tracking-[0.05em] text-brass-bright">
          WITH AUTOMATION
        </div>
        <div className="flex flex-wrap gap-[8px] mt-[12px]">
          <span className="font-mono text-[11.5px] py-[6px] px-[10px] rounded-full border border-[rgba(230,187,102,0.45)] bg-[rgba(230,187,102,0.1)] text-brass-bright whitespace-nowrap">
            Inventory tracks itself
          </span>
          <span className="font-mono text-[11.5px] py-[6px] px-[10px] rounded-full border border-[rgba(230,187,102,0.45)] bg-[rgba(230,187,102,0.1)] text-brass-bright whitespace-nowrap">
            Daily finance updates
          </span>
          <span className="font-mono text-[11.5px] py-[6px] px-[10px] rounded-full border border-[rgba(230,187,102,0.45)] bg-[rgba(230,187,102,0.1)] text-brass-bright whitespace-nowrap">
            Business runs without you
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="automation"
      className="py-[100px] border-t border-b border-border-soft bg-bg-alt"
    >
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[60px] items-center">
        {/* Left Side */}
        <div>
          <Eyebrow>RUN ON AUTOPILOT</Eyebrow>
          <h2 className="text-[clamp(28px,3.4vw,40px)] leading-[1.1] font-display font-semibold text-text">
            Stop managing. Start reviewing.
          </h2>
          <p className="mt-[20px] text-[16.5px] text-text-dim">
            Are you facing management issues — chasing stock counts, sales calls
            and pending payments every single day?
          </p>
          <p className="mt-[14px] text-[16.5px] text-text leading-[1.6] max-w-[50ch]">
            Problem solved. Once your system is live, it runs the daily operations
            for you — and your{" "}
            <b className="text-brass font-semibold">system agent</b> sends a
            clear update every morning, wherever you are. Take the vacation.
            We&apos;ve got your business covered.
          </p>

          <ul className="flex flex-wrap gap-[12px_24px] my-[26px_32px]">
            <li className="font-mono text-[13.5px] text-text-dim flex items-center gap-[8px]">
              <span className="text-signal">✓</span> Sales performance
            </li>
            <li className="font-mono text-[13.5px] text-text-dim flex items-center gap-[8px]">
              <span className="text-signal">✓</span> Finance &amp; payments
            </li>
            <li className="font-mono text-[13.5px] text-text-dim flex items-center gap-[8px]">
              <span className="text-signal">✓</span> Inventory &amp; stock
            </li>
            <li className="font-mono text-[13.5px] text-text-dim flex items-center gap-[8px]">
              <span className="text-signal">✓</span> Customer follow-ups
            </li>
          </ul>

          <Button variant="primary" arrow href="#contact">
            Automate my business
          </Button>
        </div>

        {/* Right Side: Before-After Slider */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.04em] text-text-faint text-right mb-[10px] select-none">
            DRAG TO SEE THE SHIFT →
          </div>
          <CompareSlider
            defaultValue={15}
            ariaLabel="Swipe to reveal business after automation"
            heightClass="h-[400px]"
            className="shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
            beforeContent={beforePanel}
            afterContent={afterPanel}
          />
        </div>
      </div>
    </section>
  );
};

export default AutopilotSection;
