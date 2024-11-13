"use client";

import { FC, useState } from "react";

interface ChatBoxProps {
  onSendMessage: (content: string) => void;
}

const ChatBox: FC<ChatBoxProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="sticky bottom-40 flex items-center p-4 bg-white border-t z-10">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-2 rounded-lg border border-black"
      />
      <button
        onClick={handleSend}
        className="ml-4 p-2 bg-[#e81c4c] text-white rounded-lg border border-black"
      >
        ➤
      </button>
    </div>
  );
};

export default ChatBox;
