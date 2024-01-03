import React, { FC } from "react";

interface ServiceCardProps {
  text: string;
  image: string;
  imgClass: string; // Change 'styling' to 'imgClass'
}

const ServiceCard: FC<ServiceCardProps> = ({ text, image, imgClass }) => {
  return (
    <div className="xl:w-[218px] xl:h-[95px] lg:w-[218px] lg:h-[95px] md:w-[140px] md:h-[76px] sm:w-[135px] sm:h-[76px] w-[169px] h-[90px] rounded-[10px] flex xl:gap-[21px] md:gap-[7.5px] sm:gap-[4px] gap-2 items-center justify-center xl:pl-[28px] md:pl-[10.83px] sm:pl-[10.83px] pl-[13.96px] xl:pr-[23.28px] sm:pr-[3.1px] shadow">
      <img src={image} alt={"image"} className={imgClass} />
      <p className="xl:text-[16px] md:text-[14px] sm:text-[14px] text-[15px]">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
