import React from "react";
import Image from "next/image";

interface ChatHeaderButtonProps {
  text: string;
  icon: string;
}

const ChatHeaderButton: React.FC<ChatHeaderButtonProps> = ({ text, icon }) => {
  return (
    <button className="bg-primary-dark/[0.04] py-4 px-4 flex items-center flex-col w-[180px] text-black rounded-lg shadow">
      <Image
        src={icon}
        width={24}
        height={24}
        alt="Calender"
        className="mb-1.5"
      />
      <p className="text-center text-[15px]"> {text}</p>
    </button>
  );
};

export default ChatHeaderButton;
