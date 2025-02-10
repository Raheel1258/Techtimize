import React from "react";
import Button from "@/components/Button/Button";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/lib/utils";
import ServicesGrid from "./components/ServicesGrid";
import PortfolioSection from "./components/PortfolioSection";
import ProjectsSection from "./components/ProjectsSection";
import WhyUsSection from "./components/WhyUsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("home");
}

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <Stats />
      <ProjectsSection />
      <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:gap-[135px] lg:gap-[135px] justify-between bg-[#FBFCFF]">
        <div className="xl:ml-[63px] sm:pl-[25px] md:pl-[30px] lg:pl-[40px] sm:pr-0 px-[16px]">
          <p className="page-blue-heading xl:mt-[90px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px]">
            What do we do?
          </p>
          <h3 className="page-sub-heading font-bold xl:mb-[54px] mb-[19px]">
            Our Services
          </h3>
          <p className="text text-darkGrey xl:max-w-[397px] max-w-[342px] xl:mb-[70px] md:mb-[42px] mb-[55px]">
            With a focus on innovation, creativity, and reliability, we aim to
            help businesses stay ahead in the ever-evolving digital landscape.
            Our mission is to provide top-notch technology solutions that drive
            growth, maximize ROI, and create a sustainable impact on our
            clients' success.
          </p>
          <Button
            textClass="text"
            text="Book a Quote"
            className="md:mb-[60.61px]"
          />
        </div>
        <div className="xl:mr-[70px] sm:pr-[20px] md:pr-[25px] lg:pr-[30px] md:mt-[84px] sm:mt-[84px] xl:mt-[98px] mt-[55px]">
          <ServicesGrid />
        </div>
      </div>
      <PortfolioSection />
      <WhyUsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
