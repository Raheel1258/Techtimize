import React, { FC } from "react";

interface Option {
  id: number;
  value: string;
}

interface SelectInputProps {
  labelText: string;
  options: Option[];
  onChange?: any;
}

const SelectInput: FC<SelectInputProps> = ({
  labelText,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full gap-[5px]">
      {labelText && (
        <label htmlFor="" className="md:text-[16px] text-[15px]">
          {labelText}
        </label>
      )}
      <select
        name=""
        id=""
        className="p-[10px] rounded-[7px] border text-black md:text-[16px] text-[14px]"
        onChange={onChange}
      >
        <option value="">Select an Option</option>
        {options?.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
