import React, { FC } from "react";

interface StatCardProps {
  title: string;
  stat: string;
}
const StatCard: FC<StatCardProps> = ({ title, stat }) => {
  return (
    <div className="rounded-[10px] shadow-lg xl:px-[30px] md:p-[20px] sm:px-[20px] sm:py-[15px] px-[15px] py-[10px] border flex-1 border-[#F0F0F0]">
      <p className="text text-[#868686]">
        {title}
      </p>
      <p className="xl:text-[33px] text-[31px] md:text-[25px] sm:text-[25px] font-semibold xl:mt-[22px] md:mt-[10px] sm:mt-[10px] text-[#4F4F4F]">
        {stat}
      </p>
    </div>
  );
};

export default StatCard;
