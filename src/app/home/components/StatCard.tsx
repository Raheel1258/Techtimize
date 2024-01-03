import React, { FC } from "react";

interface StatCardProps {
  title: string;
  stat: string;
}
const StatCard: FC<StatCardProps> = ({ title, stat }) => {
  return (
    <div className="xl:w-[262px] xl:h-[164px] md:w-[150.86px] md:h-[83.97px] sm:w-[150.86px] sm:h-[83.97px] w-[167.71px] h-[98px] rounded-[10px] shadow-lg xl:pl-[20px] md:pl-[14.09px] sm:pl-[14.09px] pl-[23px] border mb-[22px] border-[#F0F0F0]">
      <p className="xl:text-[20px] text-[14px] xl:mt-[30px] mt-[13px] text-[#868686]">
        {title}
      </p>
      <p className="xl:text-[39px] text-[31px] md:text-[25px] sm:text-[25px] font-semibold xl:mt-[22px] md:mt-[10px] sm:mt-[10px] text-[#4F4F4F]">
        {stat}
      </p>
    </div>
  );
};

export default StatCard;
