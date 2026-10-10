"use client";

import React from "react";
import Link from "next/link";

export const Button = ({
  variant = "primary",
  arrow = false,
  href,
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "group inline-flex items-center gap-[10px] py-[14px] px-[24px] font-mono text-[13.5px] rounded-[2px] transition-all duration-200 whitespace-nowrap cursor-pointer";

  const variantClasses =
    variant === "primary"
      ? "bg-brass text-[#0A0C0E] border border-brass hover:bg-brass-bright hover:border-brass-bright hover:-translate-y-[1px]"
      : "bg-transparent text-text border border-border hover:border-brass-dim hover:text-brass-bright";

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="transition-transform duration-200 ease-out group-hover:translate-x-[3px] select-none">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
