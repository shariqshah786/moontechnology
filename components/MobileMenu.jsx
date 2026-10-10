"use client";

import React, { useEffect } from "react";
import Button from "./ui/Button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      id="mobileMenu"
      className={`fixed inset-0 bg-bg z-[99] flex flex-col pt-[100px] px-[32px] pb-[40px] md:hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <nav className="flex flex-col">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="font-display text-[28px] py-[16px] border-b border-border-soft text-text transition-colors hover:text-brass"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="mt-[28px] flex flex-col">
        <Button
          variant="primary"
          arrow
          href="#contact"
          onClick={onClose}
          className="justify-center text-center"
        >
          Start a project
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
