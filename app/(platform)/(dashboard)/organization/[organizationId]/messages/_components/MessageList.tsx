"use client";

import { FC } from "react";

interface MessageListProps {
  messages: {
    id: string;
    senderId: string;
    content: string;
    createdAt: string;
  }[];
}

const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.senderId === "user1" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`p-3 rounded-lg border ${
              message.senderId === "user1"
                ? "bg-[#e81c4c] text-white"
                : "bg-white text-black border-black"
            }`}
          >
            <p>{message.content}</p>
            <p className="text-xs text-gray-400">{new Date(message.createdAt).toLocaleTimeString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
