import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import ModelSlider from "./components/ModelSlider";

import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/lib/utils";
import ExpertsSection from "./components/ExpertsSection";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("hiring-staff");
}

const HiringStaff = () => {
  return (
    <div>
      <PageHeader subHeading="Hiring Staff" heading="Hire Our Top Talent" />
      <div className="page-px pt-[30px] pb-[50px] bg-white">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px]">
          Our Hiring Models
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px]">
          What we Offer
        </h4>
        <ModelSlider />
      </div>
      <ExpertsSection />
    </div>
  );
};

export default HiringStaff;
