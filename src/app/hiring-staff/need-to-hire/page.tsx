"use client";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";
import SelectInput from "@/components/SelectInput/SelectInput";
import TextArea from "@/components/TextArea/TextArea";
import { budget, timeOptions } from "@/constants/select-options";
import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { expertiseRequirements } from "@/constants/select-options";
import HiringForm from "@/components/HiringForm/HiringForm";
import GoBackButton from "@/components/GoBackButton/GoBackButton";
import { Contract, VideoCallIcon } from "../../../../public/assets";

const NeedToHire = () => {
  const [goBack, setGoBack] = useState(false);

  const handleGoBack = () => {
    setGoBack(false);
  };

  const handleNext = () => {
    setGoBack(true);
  };
  return (
    <div className="xl:h-full xl:py-[6%] flex items-center justify-center md:py-[10%] py-[15%] px-[5%]">
      <div className="rounded-[10px] shadow-xl sm:p-[20px] p-[10px] w-full">
        <GoBackButton state={goBack} onClick={handleGoBack} />
        <div className="flex flex-col xl:flex-row w-full">
          <div className="xl:basis-[30%] flex gap-[10px] items-baseline sm:px-[3%] sm:pt-[1.5%] pt-[3%] sm:pb-[2%] pb-[4%]">
            <div
              className={`flex-shrink-0 rounded-full lg:w-[23px] lg:h-[23px] w-[14px] h-[14px]
                bg-[#6BBE00]`}
            />
            <div className="">
              <p className="lg:text-[26px] satoshi-medium mb-[10px]">
                Project Ongoing, need to Hire
              </p>
              <p className="text mb-[30px]">
                Select the time frame according to your project
              </p>
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[5px]">
                  <VideoCallIcon className="basis-[21%] sm:basis-[6%] xl:basis-[21%]" />
                  <p className="text satoshi-medium">
                    Web Conference Detail will be provided after acceptance of
                    Hiring Request
                  </p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <Contract className="basis-[21%] sm:basis-[6%] xl:basis-[21%]" />
                  <p className="text satoshi-medium">
                    A Contract will be signed at start of project to ensure
                    transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:basis-[4%] xl:p-[2%] py-[5%]">
            <div className="border xl:w-[1px] w-full h-full" />
          </div>
          <div className="xl:basis-[66%] xl:w-[80%] sm:pt-[1.5%] pt-[3%] pb-[2%] sm:px-[4%]">
            {goBack ? (
              <HiringForm isBudget={true} buttonText="Hire Now" />
            ) : (
              <>
                <p className="text mb-[20px]">
                  Which payment model would you prefer?
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-[40px] gap-[20px] mb-[20px]">
                  <div className="border rounded-[7px] flex items-center justify-center gap-[10px] p-[20px]">
                    <input type="radio" id="hourly" name="paymentModel" />
                    <label htmlFor="hourly">
                      <p className="lg:text-[16px] text-[15px]">
                        Hourly Rate Model
                      </p>
                      <p className="lg:text-[14px] text-[12px]">
                        This charges clients per hour for service or work
                      </p>
                    </label>
                  </div>
                  <div className="border rounded-[7px] flex items-center justify-center gap-[10px] p-[20px]">
                    <input type="radio" id="fixed" name="paymentModel" />
                    <label htmlFor="fixed">
                      <p className="lg:text-[16px] text-[15px]">
                        Fixed Cost Model
                      </p>
                      <p className="lg:text-[14px] text-[12px]">
                        Constant expenses, regardless of production
                      </p>
                    </label>
                  </div>
                </div>

                <div className="sm:w-[50%] mb-[5%]">
                  <SelectInput
                    labelText={"Select Timeframe"}
                    options={timeOptions}
                  />
                </div>
                <Button
                  text="Continue"
                  textClass="text"
                  className="w-[40%] sm:w-[20%] md:w-auto"
                  onClick={handleNext}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedToHire;