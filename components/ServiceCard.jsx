"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-bg-alt p-[34px_30px] relative overflow-hidden transition-colors">
      {/* Huge Outlined Number in Background */}
      <div
        className="absolute -top-[6px] right-[14px] font-display text-[76px] font-bold z-0 pointer-events-none select-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px #232A2E"
        }}
      >
        {service.number}
      </div>

      {/* Card Header & Title */}
      <h3 className="relative z-[1] font-display text-[19px] font-semibold mt-[6px] pr-[40px] text-text">
        {service.title}
      </h3>

      {/* Short Description */}
      <p className="relative z-[1] mt-[12px] text-text-dim text-[14.5px]">
        {service.description}
      </p>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative z-[1] mt-[18px] bg-transparent border-none p-0 font-mono text-[12.5px] text-brass flex items-center gap-[6px] cursor-pointer hover:text-brass-bright transition-colors"
        aria-expanded={isOpen}
      >
        <span
          className={`inline-block transition-transform duration-200 select-none ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
        <span>View features</span>
      </button>

      {/* Expandable Feature List */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="features"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden relative z-[1]"
          >
            <ul className="pt-[2px]">
              {service.features.map((feature, idx) => (
                <li
                  key={feature}
                  className={`text-[13.5px] text-text-dim py-[6px] ${
                    idx > 0 ? "border-t border-border-soft" : ""
                  }`}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;
