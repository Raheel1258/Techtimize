import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import ModelSlider from "./components/ModelSlider";
import ExpertiseCard from "./components/ExpertiseCard";
import { expertiseData } from "@/constants/expertise-data";

const HiringStaff = () => {
  return (
    <div className="page-pt">
      <PageHeader subHeading="Hiring Staff" heading="Hire Our Top Talent" />
      <div className="page-px pt-[30px] pb-[50px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px]">
          Our Hiring Models
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px]">
          What we Offer
        </h4>
        <ModelSlider />
      </div>
      <div className="bg-[#FBFCFF] page-px py-[40px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px]">
          Our Top Talent
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px]">
          Select Expertise
        </h4>
        <div className="py-[20px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[60px]">
          {expertiseData?.map((item) => {
            return <ExpertiseCard data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HiringStaff;
