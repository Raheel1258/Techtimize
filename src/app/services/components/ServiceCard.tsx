import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="border rounded-[10px] w-full p-[20px]">
      <div className="flex flex-col items-center">
        <Image src={image} alt={"service"} width={57} height={57} className="mb-[10px] xl:w-[57px] xl:h-[57px] w-[44px] h-[44px]" />
        <p className="xl:text-[20px] lg:text-[18px] sm:text-[15px] mb-[10px] satoshi-variable-bold">
          {title}
        </p>
        <p className="text mb-[20px]">{description}</p>
      </div>
      <Button
        text="Hire Us"
        textClass="text"
        className="bg-primaryBlue text-white p-[10px] rounded-[7px]"
      />
    </div>
  );
};

export default ServiceCard;
