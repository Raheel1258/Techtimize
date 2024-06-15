import React, { FC } from "react";

interface ServiceCardProps {
  text: string;
  image: string;
  imgClass: string; // Change 'styling' to 'imgClass'
}

const ServiceCard: FC<ServiceCardProps> = ({ text, image, imgClass }) => {
  return (
    <div className="xl:w-[218px] xl:h-[95px] lg:w-[218px] lg:h-[95px] md:w-[140px] md:h-[76px] sm:w-[135px] sm:h-[76px] h-[90px] flex-1 rounded-[10px] flex xl:gap-[21px] md:gap-[7.5px] sm:gap-[4px] gap-2 items-center justify-center xl:pl-[28px] md:pl-[10.83px] sm:pl-[10.83px] pl-[13.86px] xl:pr-[23.28px] sm:pr-[3.1px] pr-[10px] shadow">
      <img src={image} alt={"image"} className={imgClass} />
      <p className="text">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
