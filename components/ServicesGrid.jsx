import React from "react";
import Eyebrow from "./ui/Eyebrow";
import ServiceCard from "./ServiceCard";
import { servicesData } from "@/data/services";

export const ServicesGrid = () => {
  return (
    <section className="py-[120px] max-sm:py-[80px] bg-bg-alt" id="services">
      <div className="wrap">
        <div className="max-w-[640px] mb-[60px]">
          <Eyebrow>WHAT WE BUILD</Eyebrow>
          <h2 className="text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-display font-semibold text-text">
            Technology designed around the way your business actually works.
          </h2>
          <p className="mt-[16px] text-text-dim text-[16px] max-w-[52ch]">
            Nine capabilities, one team — from a single accounting fix to a full
            custom platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border-soft border border-border-soft">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
