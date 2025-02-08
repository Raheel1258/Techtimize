"use client";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ChatbotNavbar from "./ChatbotNavbar";

const ChatbotLayout = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="h-screen flex lg:pt-6">
      {/* Sidebar */}
      <div
        className={`lg:block ${
          openSidebar ? "block" : "hidden"
        } lg:w-64 w-full sticky top-0 left-0 transition-all duration-500`}
      >
        <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen lg:h-[calc(100vh_-_24px)]">
        <div className="sticky top-0 z-10">
          <ChatbotNavbar
            setOpenSidebar={setOpenSidebar}
            openSidebar={openSidebar}
          />
        </div>
        {!openSidebar && (
          <div className="w-full relative border bg-[#ecf0f2] border-[#D9D9D9] flex flex-col flex-1 lg:rounded-tl-[30px] lg:rounded-tr-[30px] overflow-y-auto">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotLayout;
