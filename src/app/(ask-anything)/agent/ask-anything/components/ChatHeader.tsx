import React from "react";
import ChatHeaderButton from "./ChatHeaderButton";

const ChatHeader = () => (
  <div className="flex flex-col items-center text-center text-gray-500 py-8">
    <h2 className="text-[22px] lg:text-[28px] font-semibold text-center text-primary-dark leading-[45px] mb-3">
      Welcome to the
      <span className="relative block text-[38px] lg:text-[52px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-slide">
        Techtimize GPT
      </span>
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <ChatHeaderButton
        text="Schedule your call quickly"
        icon="/assets/svgs/calander.svg"
      />
      <ChatHeaderButton
        text="Do you know about AI expertise"
        icon="/assets/svgs/ai-new.svg"
      />
    </div>
  </div>
);

export default ChatHeader;
