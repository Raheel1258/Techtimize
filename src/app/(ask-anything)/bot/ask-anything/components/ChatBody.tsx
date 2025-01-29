import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage  from "./ChatMessage";

interface ChatBodyProps {
  chats: { message: string; user: boolean; createdAt: Date }[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ chats }) => (
  <div className="flex flex-col space-y-4 flex-grow overflow-y-auto">
    {chats.length === 0 ? (
      <ChatHeader />
    ) : (
      chats.map((chat, index) => (
        <ChatMessage key={index} message={chat.message} user={chat.user} createdAt={chat.createdAt} />
      ))
    )}
  </div>
);

export default ChatBody;
