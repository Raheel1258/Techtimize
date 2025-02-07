import React, { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

interface ChatBodyProps {
  chats: { message: string; user: boolean; createdAt: Date }[];
  loading: boolean;
}

const ChatBody = ({ chats, loading }: ChatBodyProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = chats.length === 0

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.lastElementChild?.scrollIntoView();
    }
  }, [chats]);

  return (
    <div
      className={`flex flex-col space-y-4 flex-grow overflow-y-auto ${isHeaderVisible ? 'justify-center': ''}`}
      ref={chatContainerRef}
    >
      {isHeaderVisible ? (
        <ChatHeader />
      ) : (
        chats.map((chat, index) => (
          <ChatMessage
            key={index}
            message={chat.message}
            user={chat.user}
            createdAt={chat.createdAt}
          />
        ))
      )}
      {loading && (
        <div className="p-5">
          <div className="flex items-center space-x-2 text-white p-3 max-w-xs min-w-[150px] rounded-lg">
            <div className="flex space-x-1">
              <span className="h-[7px] w-[7px]  rounded-full bg-secondary animate-bounce delay-100"></span>
              <span className="h-[7px] w-[7px] rounded-full bg-secondary animate-bounce delay-200"></span>
              <span className="h-[7px] w-[7px]  rounded-full bg-secondary animate-bounce delay-300"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBody;
