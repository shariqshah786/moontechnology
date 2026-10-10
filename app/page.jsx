import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AutopilotSection from "@/components/AutopilotSection";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import ServicesGrid from "@/components/ServicesGrid";
import IndustrySelector from "@/components/IndustrySelector";
import CustomSoftwareFlow from "@/components/CustomSoftwareFlow";
import PortfolioGrid from "@/components/PortfolioGrid";
import CaseStudies from "@/components/CaseStudies";
import ProcessTrack from "@/components/ProcessTrack";
import PartnershipPanels from "@/components/PartnershipPanels";
import WhyUsGrid from "@/components/WhyUsGrid";
import TechMarquee from "@/components/TechMarquee";
import TeamGrid from "@/components/TeamGrid";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AutopilotSection />
        <StatsBar />
        <ProblemSection />
        <ServicesGrid />
        <IndustrySelector />
        <CustomSoftwareFlow />
        <PortfolioGrid />
        <CaseStudies />
        <ProcessTrack />
        <PartnershipPanels />
        <WhyUsGrid />
        <TechMarquee />
        <TeamGrid />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
