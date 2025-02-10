import React from "react";
import { formatRelative } from "date-fns";
import Markdown from "react-markdown";

interface ChatMessageProps {
  message: string;
  user: boolean;
  createdAt: Date;
}

const ChatMessage = ({ message, user, createdAt }: ChatMessageProps) => (
  <div className="space-y-2 p-5">
    {!user ? (
      <div className="flex justify-start">
        <div className="relative min-w-[150px] bg-primary text-white p-3 rounded-lg max-w-xs">
          <Markdown>{message}</Markdown>
          <div className="absolute bottom-0 right-2 text-xs text-gray-300">
            {formatRelative(createdAt, new Date())}
          </div>
        </div>
      </div>
    ) : (
      <div className="flex justify-end">
        <div className="relative min-w-[150px] bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
          <Markdown>{message}</Markdown>
          <div className="absolute bottom-0 right-2 text-xs text-gray-400">
            {formatRelative(createdAt, new Date())}
          </div>
        </div>
      </div>
    )}
  </div>
);

export default ChatMessage;
