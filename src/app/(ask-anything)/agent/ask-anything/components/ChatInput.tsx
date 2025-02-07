import React from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";

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
  <div className="w-[90%] lg:w-[80%] mx-auto py-4">
    <div className="relative flex items-center">
      <textarea
        className="w-full border bg-white rounded-[18px] pl-6 py-4 lg:py-6 pr-8 lg:pr-12 focus:outline-none focus:ring-2 focus:ring-primary bg-primary-dark/[0.05]"
        placeholder="Ask anything about techtimize"
        value={message}
        rows={1}
        autoFocus={true}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        disabled={loading}
      ></textarea>
      <button
        className="absolute right-4 bg-primary text-white p-1 lg:p-2 rounded-full shadow hover:bg-primary-dark transition"
        onClick={handleSendMessage}
        disabled={loading}
      >
        <PiPaperPlaneRightFill className="h-4 h-4 lg:h-5 lg:w-5" />
      </button>
    </div>
  </div>
);

export default ChatInput;
