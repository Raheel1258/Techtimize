"use client";
import React, { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import { CHATBOT_ENDPOINT } from "@/app/api/chatbot-endpoints";
import * as api from "@/app/api";

interface ChatMessageProps {
  message: string;
  user: boolean;
  createdAt: Date;
}

interface ChatMessageResponse {
  sessionId: string;
  answer: string;
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

    const response = await api.POST<ChatMessageResponse>(CHATBOT_ENDPOINT, {
      msg: message,
      sessionId,
    });

    if (response.status === "error") {
      setLoading(false);
      return;
    }

    const data = response.data;
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
