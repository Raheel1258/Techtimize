import Image from "next/image";
import React from "react";

const TestimonialCard = ({ testimonialData }: any) => {
  return (
    <div className="w-[288px] h-[463px] md:w-[302px] md:h-[490px] lg:w-[467px] lg:h-[539px] rounded-[15px] shadow-lg">
      <div className="w-[64px] h-[64px] lg:w-[82px] lg:h-[82px] bg-[#0697D5] rounded-br-[15px]">
        <Image
          src={"/images/double-quotes.svg"}
          alt={"double-quotes"}
          width={86}
          height={86}
        />
      </div>
      <p className="w-[240px] lg:w-[365px] lg:text-[16px] ml-[24px] lg:ml-[71px] mt-[18px] lg:mt-[25px] text-[14px] text-[#727272]">
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
          <p className="text-[16px] lg:text-[19px] font-semibold text-[#727272]">
            {testimonialData?.user}
          </p>
          <p className="text-[12px] lg:text-[16px] lg:mb-[10px] text-[#727272]">
            {testimonialData?.country}
          </p>
          <Image
            src={"/images/ratings.svg"}
            alt={"ratings"}
            width={81}
            height={18}
            className="lg:w-[100px] lg:h-[20.9px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
