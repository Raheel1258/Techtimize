"use client";
import React, { useState } from "react";
import { apiEndpoints } from "@/app/api/endpoints";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";

interface ChatMessageProps {
  message: string;
  user: boolean;
  createdAt: Date;
}

const ChatBotHome = () => {
  const [chats, setChats] = useState<ChatMessageProps[]>([]);
  const [message, setMessage] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    setLoading(true);

    setChats([
      ...chats,
      { message, user: true, createdAt: new Date() },
      { message: "", user: false, createdAt: new Date() },
    ]);

    const response = await fetch(
      `/api/middleware?path=${apiEndpoints.chatBot}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msg: message, sessionId }),
      }
    );

    if (!response.ok) {
      setLoading(false);
      console.error("Failed to send message");
      return;
    }

    const data = await response.json();
    setSessionId(data.sessionId);

    setChats((prevChats) => [
      ...prevChats,
      { message, user: true, createdAt: new Date() },
      { message: data?.answer, user: false, createdAt: new Date() },
    ]);

    setMessage("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center h-[calc(100vh_-_87px)] w-full">
      <div className="w-full rounded-2xl flex flex-col h-full">
        <ChatBody chats={chats} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChatBotHome;
