"use client";
import React, { useEffect, useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import { socket } from "@/socket";
import { SocketProvider } from "../provider/socket-provider";

interface ChatMessageProps {
  message: string;
  user: boolean;
  createdAt: Date;
}

const ChatBotHome = () => {
  const [chats, setChats] = useState<ChatMessageProps[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket.onopen = (e) => {
      console.log("hello from server");
    };

    socket.onmessage = (e) => {
      const res = JSON.parse(e.data);
      setChats((prev) => [
        ...prev,
        { message: res.message, createdAt: new Date(), user: false },
      ]);
      setLoading(false);
      console.log(res);
    };
  }, []);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;
    setChats([...chats, { message, user: true, createdAt: new Date() }]);
    socket.send(message);
    setMessage("");
    setLoading(true);
  };

  return (
    <div className="flex flex-col items-center h-[calc(100vh_-_87px)] w-full">
      <div className="w-full rounded-2xl flex flex-col h-full">
        <SocketProvider value={socket}>
          <ChatBody chats={chats} loading={loading} />
          <ChatInput
            message={message}
            setMessage={setMessage}
            handleSendMessage={handleSendMessage}
            loading={loading}
          />
        </SocketProvider>
      </div>
    </div>
  );
};

export default ChatBotHome;
