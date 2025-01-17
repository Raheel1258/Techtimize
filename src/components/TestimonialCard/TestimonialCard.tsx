import Image from "next/image";
import React from "react";
import { RatingsIcon } from "../../../public/assets";

const TestimonialCard = ({ testimonialData }: any) => {
  return (
    <div className="w-[288px] h-[390px] md:w-[302px] md:h-[490px] lg:w-[467px] lg:h-[500px] rounded-[15px] shadow-lg">
      <div className="w-[64px] h-[64px] lg:w-[82px] lg:h-[82px] flex items-center justify-center bg-primary rounded-br-[15px]">
        <Image src={"/assets/svgs/double-quotes.svg"} alt={"quotes icon"} width={80} height={80} />
      </div>
      <p className="w-[240px] lg:w-[365px] ml-[24px] lg:ml-[71px] mt-[18px] lg:mt-[25px] text text-darkGrey">
        {testimonialData?.review}
      </p>
      <div className="flex ml-[24px] lg:ml-[71px] lg:mt-[49px] mt-[32px] gap-[10px]">
        <Image
          src={testimonialData?.flag}
          alt={"flag"}
          width={30}
          height={25}
          className="mb-[33px] lg:w-[39px] lg:h-[34px]"
        />
        <div>
          <p className="text-[16px] lg:text-[19px] font-semibold text-darkGrey">
            {testimonialData?.user}
          </p>
          <p className="text-[12px] lg:text-[16px] lg:mb-[10px] text-darkGrey">
            {testimonialData?.country}
          </p>
          <RatingsIcon />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
