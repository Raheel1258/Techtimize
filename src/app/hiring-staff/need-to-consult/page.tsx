"use client";
import Button from "@/components/Button/Button";
import HiringForm from "@/components/HiringForm/HiringForm";
import SelectInput from "@/components/SelectInput/SelectInput";
import { timeOptions } from "@/constants/select-options";
import { timings } from "@/constants/timings";
import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const NeedToConsult = () => {
  const [goBack, setGoBack] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [value, onChange] = useState<Value>(new Date());

  const handleGoBack = () => {
    setGoBack(false);
  };

  const handleNext = () => {
    setGoBack(true);
  };

  const handleClick = (text: string) => {
    setSelectedText(text); // Set selected text when clicked
  };

  console.log("Selected text: ", selectedText);

  return (
    <div className="border xl:h-full xl:py-[10%] flex items-center justify-center md:py-[20%] py-[40%] px-[5%]">
      <div className="rounded-[10px] border p-[20px] w-full">
        <IoChevronBackCircleOutline
          color="#909090"
          size={40}
          className="cursor-pointer"
          onClick={handleGoBack}
        />
        <div className="flex flex-col xl:flex-row w-full">
          <div className="border xl:basis-[25%] flex gap-[10px] items-baseline sm:px-[3%] sm:pt-[1.5%] pt-[3%] sm:pb-[2%] pb-[4%]">
            <div
              className={`flex-shrink-0 rounded-full lg:w-[23px] lg:h-[23px] w-[14px] h-[14px]
              bg-[#9A0000]`}
            />
            <div className="">
              <p className="lg:text-[26px] satoshi-medium mb-[10px]">
                Have a Concept, Need to Consult
              </p>
              <p className="text mb-[30px]">
                Schedule an interview with our experts. Chose your date and time
                slot for the meet.
              </p>
              <div className="flex flex-col gap-[15px]">
                <div>
                  <p className="text satoshi-medium">
                    Web Conference Detail will be provided after Confirmation
                  </p>
                </div>
                <div>
                  <p className="text satoshi-medium">30 min Session</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border xl:basis-[4%] xl:p-[2%] py-[5%]">
            <div className="border xl:w-[1px] w-full h-full" />
          </div>
          <div className="border xl:basis-[66%] xl:w-[80%] sm:pt-[1.5%] pt-[3%] pb-[2%] sm:px-[4%]">
            {goBack ? (
              <HiringForm isBudget={false} buttonText="Send Message" />
            ) : (
              <>
                <div className="flex lg:flex-row flex-col items-start justify-between w-[75%] border mb-[25px]">
                  <div>
                    <Calendar
                      className="mb-[20px]"
                      onChange={onChange}
                      value={value}
                    />

                    <SelectInput
                      labelText={"Select Time Zone"}
                      options={timeOptions}
                    />
                  </div>
                  <ul className="border flex flex-col gap-[20px] w-fit h-[360px] overflow-auto">
                    {timings.map((time, index) => (
                      <li
                        draggable={true}
                        key={time.id}
                        onClick={() => handleClick(time.time)}
                        className={`text-lg cursor-pointer ${
                          selectedText === time.time
                            ? "text-blue-600"
                            : "text-black"
                        }`}
                      >
                        {time.time}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  text="Continue"
                  textClass="text"
                  className="text-white bg-primaryBlue p-[10px] rounded-[7px]"
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

export default NeedToConsult;
