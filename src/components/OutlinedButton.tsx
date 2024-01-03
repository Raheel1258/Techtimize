import React, { FC } from "react";

interface OutlinedButtonProps {
  text: string;
  className: string;
}

const OutlinedButton: FC<OutlinedButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`rounded-[10px] border border-[#0B4D8E] text-[#0B4D8E] ${className}`}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
