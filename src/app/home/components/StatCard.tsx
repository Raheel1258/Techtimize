import React, { FC } from "react";

interface StatCardProps {
  title: string;
  stat: string;
}
const StatCard: FC<StatCardProps> = ({ title, stat }) => {
  return (
    <div className="xl:w-[262px] xl:h-[164px] w-[167.71px] h-[98px] rounded-[10px] shadow-lg xl:pl-[20px] pl-[23px] border mb-[22px] border-[#F0F0F0]">
      <p className="xl:text-[20px] text-[14px] xl:mt-[30px] mt-[13px] text-[#868686]">
        {title}
      </p>
      <p className="xl:text-[39px] text-[31px] font-semibold xl:mt-[22px] text-[#4F4F4F]">
        {stat}
      </p>
    </div>
  );
};

export default StatCard;
