"use client";

import { useState, Suspense } from "react";
import UserList from "./_components/user-list";
import ChatHeader from "./_components/ChatHeader";
import MessageList from "./_components/MessageList";
import ChatBox from "./_components/ChatBox";
import { mockMessages, mockUsers } from "./mockData";

const MessagesPage = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [messages, setMessages] = useState(mockMessages);

  const selectedUser = selectedUserId ? mockUsers.find((user) => user.id === selectedUserId) : null;
  const userMessages = selectedUserId ? messages[selectedUserId] || [] : [];

  const handleSendMessage = (content: string) => {
    if (!selectedUserId || content.trim() === "") return;

    const newMessage = {
      id: `${userMessages.length + 1}`,
      senderId: "user1",
      content,
      createdAt: new Date().toISOString(),
    };

    setMessages({
      ...messages,
      [selectedUserId]: [...userMessages, newMessage],
    });
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* User List Section */}
      <div className="w-[25%] h-full border-r overflow-y-auto overflow-x-hidden">
        <Suspense fallback={<div>Loading contacts...</div>}>
          <UserList onSelectUser={setSelectedUserId} selectedUserId={selectedUserId} />
        </Suspense>
      </div>

      {/* Chat Section */}
      <div className="w-[65%] flex flex-col h-full ml-auto mr-[5%]">
        {selectedUser ? (
          <>
            <ChatHeader user={selectedUser} />
            <div className="flex-1 overflow-y-auto p-4">
              <MessageList messages={userMessages} />
            </div>
            <ChatBox onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-lg text-gray-600">Please select a user to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
