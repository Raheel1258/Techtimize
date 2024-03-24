import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const ExpertiseCard = ({ data }: any) => {
  return (
    <div className="rounded-[10px] drop-shadow-lg bg-white">
      <div className="p-[20px]">
        <Image
          src={data?.image}
          alt={"image"}
          width={344}
          height={218}
          className="w-full"
        />
        <h5 className="xl:text-[25px] my-[15px]">{data?.heading}</h5>
        <p className="text">{data?.text}</p>
      </div>
      <div className="bg-[#FAFAFA] flex p-[15px]">
        <div className="border flex justify-end basis-[20%]">
          <p className="satoshi-bold text-[#727272]">Stacks:</p>
        </div>
        <div className="border basis-[80%]">2</div>
      </div>
      <div className="p-[25px]">
        <Button
          textClass="text"
          text="Schedule Interview"
          className="bg-[#0697D5] rounded-[7px] text-white w-full p-[12px]"
        />
      </div>
    </div>
  );
};

export default ExpertiseCard;
