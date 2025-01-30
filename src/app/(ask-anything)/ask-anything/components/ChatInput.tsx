import React from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
// Importing FaPaperPlane icon from react-icons

interface ChatInputProps {
  message: string;
  setMessage: (msg: string) => void;
  handleSendMessage: () => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  message,
  setMessage,
  handleSendMessage,
  loading,
}) => (
  <div className="w-full p-4">
    <div className="relative flex items-center">
      <input
        type="text"
        className="w-full border bg-white border-gray-300 rounded-lg p-2 pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} // Send on Enter key
        disabled={loading}
      />
      <button
        className="absolute right-2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary-dark transition"
        onClick={handleSendMessage}
        disabled={loading}
      >
        <PiPaperPlaneRightFill className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default ChatInput;
