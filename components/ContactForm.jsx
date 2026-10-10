"use client";

import React, { useState } from "react";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";

const businessTypes = [
  "Retail",
  "Manufacturing",
  "Distribution",
  "E-commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "Logistics",
  "Hospitality",
  "Finance",
  "Professional Services",
  "Other"
];

const availableNeeds = [
  "Inventory Management",
  "Accounting Software",
  "Sales Management / CRM",
  "E-commerce Website",
  "Business Website",
  "Mobile App",
  "SaaS Platform",
  "Business Automation"
];

const TOTAL_STEPS = 6;

export const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    businessType: "Retail",
    needs: [],
    requirement: ""
  });

  const handleNeedToggle = (need) => {
    setFormData((prev) => {
      const exists = prev.needs.includes(need);
      return {
        ...prev,
        needs: exists
          ? prev.needs.filter((item) => item !== need)
          : [...prev.needs, need]
      };
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Form submission
      // TODO: Connect this submission handler to your backend endpoint (e.g. Next.js API Route /api/contact)
      // or third-party CRM webhook (Resend, SendGrid, HubSpot, Slack, WhatsApp Webhook).
      console.log("Submitting project request:", formData);
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <section className="py-[120px] max-sm:py-[80px]" id="contact">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[60px]">
        {/* Left Info Column */}
        <div>
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2 className="text-[32px] font-display font-semibold text-text leading-[1.15]">
            Let&apos;s talk about your business.
          </h2>
          <p className="mt-[16px] text-text-dim text-[16px] leading-[1.6]">
            Fill in the form and our team will get back to you within one business day.
          </p>

          <div className="flex flex-col gap-[1px] bg-border-soft border border-border-soft mt-[32px]">
            <a
              className="bg-bg-alt p-[18px_20px] flex items-center justify-between text-[14px] text-text hover:text-brass transition-colors"
              href="tel:+919136653743"
            >
              Call us{" "}
              <span className="text-text-dim font-mono text-[12.5px]">
                +91 91366 53743
              </span>
            </a>
            <a
              className="bg-bg-alt p-[18px_20px] flex items-center justify-between text-[14px] text-text hover:text-brass transition-colors"
              href="mailto:hello@moontechnology.in"
            >
              Email us{" "}
              <span className="text-text-dim font-mono text-[12.5px]">
                hello@moontechnology.in
              </span>
            </a>
            <a
              className="bg-bg-alt p-[18px_20px] flex items-center justify-between text-[14px] text-text hover:text-brass transition-colors"
              href="https://wa.me/919136653743"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us{" "}
              <span className="text-text-dim font-mono text-[12.5px]">
                Chat now
              </span>
            </a>
          </div>
        </div>

        {/* Right Multi-Step Form Panel */}
        <div className="border border-border rounded-[2px] p-[44px] max-sm:p-[28px] bg-panel">
          {/* Progress Bars */}
          {!submitted && (
            <div className="flex gap-[6px] mb-[32px]">
              {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-[2px] rounded-[2px] transition-colors duration-300 ${
                    index <= currentStep ? "bg-brass" : "bg-border-soft"
                  }`}
                />
              ))}
            </div>
          )}

          {submitted ? (
            <div className="text-center py-[40px]">
              <div className="w-[56px] h-[56px] border border-signal rounded-full text-signal flex items-center justify-center mx-auto mb-[24px] text-[22px] select-none">
                ✓
              </div>
              <h3 className="font-display text-[22px] font-semibold text-text">
                Thank you. Your request has been received.
              </h3>
              <p className="mt-[10px] text-text-dim text-[15px]">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              {/* Step 1: Full name */}
              {currentStep === 0 && (
                <div>
                  <div className="font-mono text-[12px] text-text-faint mb-[10px]">
                    STEP 01 / 06
                  </div>
                  <h3 className="font-display text-[22px] font-semibold mb-[22px] text-text">
                    What&apos;s your name?
                  </h3>
                  <input
                    className="w-full p-[14px_16px] bg-bg-alt border border-border rounded-[2px] text-text font-sans text-[15px] mb-[14px] focus:outline-none focus:border-brass transition-colors placeholder:text-text-faint"
                    type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                </div>
              )}

              {/* Step 2: Mobile number */}
              {currentStep === 1 && (
                <div>
                  <div className="font-mono text-[12px] text-text-faint mb-[10px]">
                    STEP 02 / 06
                  </div>
                  <h3 className="font-display text-[22px] font-semibold mb-[22px] text-text">
                    Your mobile number
                  </h3>
                  <input
                    className="w-full p-[14px_16px] bg-bg-alt border border-border rounded-[2px] text-text font-sans text-[15px] mb-[14px] focus:outline-none focus:border-brass transition-colors placeholder:text-text-faint"
                    type="tel"
                    placeholder="Mobile number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    required
                  />
                </div>
              )}

              {/* Step 3: Email address */}
              {currentStep === 2 && (
                <div>
                  <div className="font-mono text-[12px] text-text-faint mb-[10px]">
                    STEP 03 / 06
                  </div>
                  <h3 className="font-display text-[22px] font-semibold mb-[22px] text-text">
                    Your email address
                  </h3>
                  <input
                    className="w-full p-[14px_16px] bg-bg-alt border border-border rounded-[2px] text-text font-sans text-[15px] mb-[14px] focus:outline-none focus:border-brass transition-colors placeholder:text-text-faint"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              )}

              {/* Step 4: Business type */}
              {currentStep === 3 && (
                <div>
                  <div className="font-mono text-[12px] text-text-faint mb-[10px]">
                    STEP 04 / 06
                  </div>
                  <h3 className="font-display text-[22px] font-semibold mb-[22px] text-text">
                    Business type
                  </h3>
                  <select
                    className="w-full p-[14px_16px] bg-bg-alt border border-border rounded-[2px] text-text font-sans text-[15px] mb-[14px] focus:outline-none focus:border-brass transition-colors appearance-none cursor-pointer"
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({ ...formData, businessType: e.target.value })
                    }
                  >
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-panel text-text">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Step 5: What do you need? */}
              {currentStep === 4 && (
                <div>
                  <div className="font-mono text-[12px] text-text-faint mb-[10px]">
                    STEP 05 / 06
                  </div>
                  <h3 className="font-display text-[22px] font-semibold mb-[22px] text-text">
                    What do you need?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] mb-[10px]">
                    {availableNeeds.map((need) => {
                      const isChecked = formData.needs.includes(need);
                      return (
                        <label
                          key={need}
                          className={`flex items-center gap-[10px] p-[12px_14px] border rounded-[2px] text-[13.5px] cursor-pointer transition-colors ${
                            isChecked
                              ? "border-brass-dim text-text bg-bg-alt"
                              : "border-border text-text-dim hover:border-border-soft"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleNeedToggle(need)}
                            className="accent-brass cursor-pointer"
                          />
                          <span>{need}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 6: Requirement */}
              {currentStep === 5 && (
                <div>
                  <div className="font-mono text-[12px] text-text-faint mb-[10px]">
                    STEP 06 / 06
                  </div>
                  <h3 className="font-display text-[22px] font-semibold mb-[22px] text-text">
                    Tell us about your requirement
                  </h3>
                  <textarea
                    className="w-full min-h-[120px] p-[14px_16px] bg-bg-alt border border-border rounded-[2px] text-text font-sans text-[15px] mb-[14px] focus:outline-none focus:border-brass transition-colors placeholder:text-text-faint resize-y"
                    placeholder="A few lines about what you're trying to build or fix..."
                    value={formData.requirement}
                    onChange={(e) =>
                      setFormData({ ...formData, requirement: e.target.value })
                    }
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-[24px]">
                <button
                  type="button"
                  onClick={handleBack}
                  className={`py-[14px] px-[24px] font-mono text-[13.5px] rounded-[2px] border border-border text-text hover:border-brass-dim hover:text-brass-bright transition-colors cursor-pointer ${
                    currentStep === 0 ? "invisible" : "visible"
                  }`}
                >
                  Back
                </button>

                <Button variant="primary" arrow type="submit">
                  {currentStep === TOTAL_STEPS - 1
                    ? "Send project request"
                    : "Continue"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
