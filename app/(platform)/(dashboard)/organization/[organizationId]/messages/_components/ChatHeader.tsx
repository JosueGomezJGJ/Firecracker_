"use client";

import { FC } from "react";

interface ChatHeaderProps {
  user: {
    firstName: string;
    lastName: string;
    imageUrl: string;
  };
}

const ChatHeader: FC<ChatHeaderProps> = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img
          src={user.imageUrl || "https://via.placeholder.com/40"}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          📞
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          🎥
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
