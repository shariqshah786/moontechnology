"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import MobileMenu from "./MobileMenu";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(10,12,14,0.82)] backdrop-blur-[10px] border-b border-border-soft">
        <nav className="max-w-container mx-auto px-[32px] max-sm:px-[20px] h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-[10px] font-display text-[17px] font-bold tracking-[-0.01em] text-text"
          >
            <span className="w-[28px] h-[28px] border border-brass rounded-[2px] flex items-center justify-center font-mono text-[13px] text-brass">
              M
            </span>
            <span>MOON TECHNOLOGY</span>
          </a>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-[34px]">
            <a
              href="#services"
              className="text-[14.5px] text-text-dim hover:text-text transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#solutions"
              className="text-[14.5px] text-text-dim hover:text-text transition-colors duration-200"
            >
              Solutions
            </a>
            <a
              href="#work"
              className="text-[14.5px] text-text-dim hover:text-text transition-colors duration-200"
            >
              Our Work
            </a>
            <a
              href="#process"
              className="text-[14.5px] text-text-dim hover:text-text transition-colors duration-200"
            >
              Process
            </a>
            <a
              href="#about"
              className="text-[14.5px] text-text-dim hover:text-text transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[14.5px] text-text-dim hover:text-text transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-[16px]">
            <div className="hidden lg:flex items-center gap-[16px]">
              <Button
                variant="ghost"
                href="#contact"
                className="!py-[10px] !px-[18px]"
              >
                Talk to an expert
              </Button>
              <Button
                variant="primary"
                arrow
                href="#contact"
                className="!py-[10px] !px-[18px]"
              >
                Start a project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-[36px] h-[36px] bg-transparent border border-border rounded-[2px] flex flex-col items-center justify-center gap-[4px] cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-[16px] h-[1.5px] bg-text transition-transform duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[5.5px]" : ""
                }`}
              />
              <span
                className={`w-[16px] h-[1.5px] bg-text transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-[16px] h-[1.5px] bg-text transition-transform duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;
