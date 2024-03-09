import Image from "next/image";
import React from "react";

const PortfolioCard = ({ cardData }: any) => {
  return (
    <div className="lg:w-[460px] lg:h-[490px] md:w-[308px] md:h-[380px] w-[288px] h-[370px] rounded-[10px] shadow-lg">
      <div>
        <Image
          src={cardData?.image}
          alt={"project image"}
          width={460}
          height={300}
          className="rounded-t-[10px] lg:w-[460px] lg:h-[300px] md:w-[308px] md:h-[216px] w-[294px] h-[205px] object-contain"
        />
      </div>
      <div className="lg:px-[27px] md:px-[26px] px-[20px]">
        <h5 className="lg:text-[20px] md:text-[20px] text-[19px] font-semibold mt-[20px] lg:mb-[10px] mb-[5px]">
          {cardData?.title}
        </h5>
        <p className="lg:text-[16px] text-[14px] text-[#727272]">
          {cardData?.description}
        </p>
        <div className="flex justify-end lg:mt-[25px] mt-[10px]">
          <button className="lg:text-[19px] md:text-[16px] text-[14px] font-semibold text-[#0697D5]">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
