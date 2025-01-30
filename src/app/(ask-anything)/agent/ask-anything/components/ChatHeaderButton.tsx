import React from "react";
import Image from "next/image";

interface ChatHeaderButtonProps {
  text: string;
  icon: string;
}

const ChatHeaderButton: React.FC<ChatHeaderButtonProps> = ({ text, icon }) => {
  return (
    <button className="bg-primary p-2 flex items-center flex-col w-[150px] h-20 text-white rounded-lg shadow">
      <Image src={icon} width={24} height={24} alt="Calender" />
      <p className="text-center text-[15px]"> {text}</p>
    </button>
  );
};

export default ChatHeaderButton;
