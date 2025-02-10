// import React from "react";
// import Home from "./home/page";

// const App = () => {
//   return <Home />;
// };

// export default App;

"use client";
import React, { useEffect, useState } from "react";
import { socket } from "@/socket";
import { SocketProvider } from "../(ask-anything)/agent/provider/socket-provider";
import ChatBody from "../(ask-anything)/agent/ask-anything/components/ChatBody";
import ChatInput from "../(ask-anything)/agent/ask-anything/components/ChatInput";

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
    <div className="flex flex-col items-center h-1 flex-1 w-full pt-6 bg-gradient-to-br from-blue-1/10 via-white via-30% to-transparent">
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
