import React, { FC } from "react";
import { requirements } from "@/constants/requirements";

interface SelectInputProps {
  labelText: string;
}

const SelectInput: FC<SelectInputProps> = ({ labelText }) => {
  return (
    <div className="flex flex-col w-full gap-[5px]">
      {labelText && <label htmlFor="" className="md:text-[16px] text-[15px]">{labelText}</label>}
      <select name="" id="" className="p-[10px] rounded-[7px] border text-black md:text-[16px] text-[14px]">
        <option value="">Select an Option</option>
        {requirements?.map((item) => {
          return (
            <option key={item?.id} value={item?.requirement}>
              {item?.requirement}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
