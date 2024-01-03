import React, { FC } from "react";

interface FilledButtonProps {
  text: string;
  className: string;
}

const FilledButton: FC<FilledButtonProps> = ({ text, className }) => {
  return (
    <button className={`${className} rounded-[7px] bg-[#0697D5] text-white`}>
      {text}
    </button>
  );
};

export default FilledButton;
