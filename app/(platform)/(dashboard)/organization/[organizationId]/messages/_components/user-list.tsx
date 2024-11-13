"use client";

import { FC } from "react";
import { UserItem } from "./user-item";
import { mockUsers, getLastMessage } from "../mockData";

interface UserListProps {
  onSelectUser: (userId: string) => void;
  selectedUserId: string | null;
}

const UserList: FC<UserListProps> = ({ onSelectUser, selectedUserId }) => {
  return (
    <ol className="space-y-4 p-4">
      {mockUsers.map((user) => (
        <UserItem
          key={user.id}
          data={user}
          lastMessage={getLastMessage(user.id)}
          onSelect={() => onSelectUser(user.id)}
          isSelected={user.id === selectedUserId}
        />
      ))}
    </ol>
  );
};

export default UserList;
