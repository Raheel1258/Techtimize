import PageHeader from "@/components/PageHeader/PageHeader";
import { departments } from "@/constants/departments";
import React from "react";
import JobOpeningCard from "./components/JobOpeningCard";

import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/lib/utils";
import Button from "@/components/Button/Button";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("careers");
}

const Careers = () => {
  return (
    <div>
      <PageHeader subHeading="Career" heading="Opportunity Corner" />
      <div className="bg-white xl:px-[50px] pt-[30px] pb-[30px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px] px-[10px] md:px-[30px] xl:px-0">
          Career Opportunity
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px] px-[10px] md:px-[30px] xl:px-0">
          Explore New Openings
        </h4>
        <div className="flex flex-col gap-[10px] xl:flex-row">
          <div className="overflow-x-scroll lg:overflow-auto lg:justify-center xl:justify-start xl:basis-[30%] scrollbar-hide flex xl:flex-col items-start gap-[50px] px-[10px] xl:px-0">
            {departments?.map((department) => {
              return (
                <div
                  key={department?.id}
                  className="flex flex-col items-center gap-[8px]"
                >
                  <p className="cursor-pointer text whitespace-nowrap">
                    {department?.text}
                  </p>
                  <div className="h-[3px] w-[25px] bg-[#069AD8] rounded-full" />
                </div>
              );
            })}
          </div>
          <div className="w-[90%] lg:w-auto self-center xl:basis-[2%] flex justify-center">
            <div className="drop-shadow-lg xl:block hidden w-[3px] h-[616px] bg-white rounded-full" />
            <div className="drop-shadow-lg xl:hidden block h-[3px] w-full bg-white rounded-full" />
          </div>
          <div className="xl:basis-[68%] pt-[10px] px-[10px] md:px-[30px] xl:px-0 flex flex-col gap-[20px] w-full">
            <JobOpeningCard />
            <JobOpeningCard />
          </div>
        </div>
      </div>
      <div className="border flex w-full justify-center md:py-[20px]">
        <div className="bg-[#0B4D8E] lg:h-[218px] sm:h-[150px] h-[266px] xl:w-[1260px] sm:w-[93%] w-full md:h-[175px] sm:rounded-[10px] flex flex-col justify-center items-center xl:px-[79px] lg:p-[30px] p-[16px]">
          <div className="flex lg:flex-row sm:flex-row flex-col justify-between sm:items-center w-full">
            <div className="">
              <h4 className="lg:text-[31px] md:text-[22px] text-[20px] w-full font-bold text-white">
                Be a part of our Dynamic Team!
              </h4>
              <p className="xl:max-w-[657px] lg:max-w-[600px] md:max-w-[390px] max-w-[300px] text lg:mt-[15px] mt-[14px] mb-[18px] text-white">
                Be a part of a Thriving community. Explore new career
                opportunity options with us
              </p>
            </div>
            <Button
              className="bg-white text-black border-0 sm:w-auto w-[53%]"
              text={"Join Us Now"}
              textClass="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
