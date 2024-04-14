import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { LongArrowIcon } from "../../../../public/assets";
import { questionaireData } from "@/constants/questionaire";
import Link from "next/link";

const Questionaire = () => {
  return (
    <div className="xl:pt-32 pt-[35%] md:pt-[20%] xl:px-20 px-[5%] xl:pb-20 pb-[20%]">
      <div className="rounded-[10px] border relative p-[20px]">
        <IoChevronBackCircleOutline
          color="#909090"
          size={40}
          className="absolute"
        />
        <div className="border mt-12 xl:px-16 xl:py-8">
          <div className="flex gap-[15px] px-4 xl:px-0">
            <p>icon</p>
            <p className="xl:text-[20px] text-[16px] satoshi-medium mb-10">
              With our extensive network of skilled contractors, we are your
              strategic partner in achieving your objectives. Discover the power
              of augmenting your workforce with us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-16 gap-5">
            {questionaireData?.map((item) => {
              return (
                <Link key={item?.id} href={item?.link}>
                  <div className="border border-[#B9BCC2] rounded-[10px] lg:p-10 p-[15px]">
                    <div className="flex items-start justify-between gap-[15px]">
                      <div
                        className={`flex-shrink-0 rounded-full lg:w-[23px] lg:h-[23px] w-[14px] h-[14px] ${
                          item?.red ? "bg-[#9A0000]" : "bg-[#6BBE00]"
                        }`}
                      />
                      <div className="flex-grow mb-[15px]">
                        <p className="xl:text-[20px] text-[15px] satoshi-medium mb-[10px]">
                          {item?.title}
                        </p>
                        <p className="text">{item?.description}</p>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <LongArrowIcon />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionaire;
