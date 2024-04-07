import Button from "@/components/Button/Button";
import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="border rounded-[10px] w-full p-[20px]">
      <div className="flex flex-col items-center">
        <p>Text</p>
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
