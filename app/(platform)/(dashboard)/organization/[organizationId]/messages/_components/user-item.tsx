import { FC } from "react";

interface UserItemProps {
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
  };
  lastMessage: string;
  onSelect: () => void;
  isSelected: boolean;
}

export const UserItem: FC<UserItemProps> = ({ data, lastMessage, onSelect, isSelected }) => {
  return (
    <li
      className={`flex items-center space-x-4 w-full h-16 p-2 rounded-lg shadow-md cursor-pointer overflow-hidden 
        ${isSelected ? "bg-[#767676] text-white" : "bg-white"}
        hover:bg-gray-200`}
      onClick={onSelect}
    >
      <img
        src={data.imageUrl}
        alt={`${data.firstName} ${data.lastName}`}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1 overflow-hidden">
        <p className={`font-semibold truncate ${isSelected ? "text-white" : "text-black"}`}>
          {data.firstName} {data.lastName}
        </p>
        <p className={`text-sm truncate ${isSelected ? "text-white" : "text-muted-foreground"}`}>
          {lastMessage}
        </p>
      </div>
    </li>
  );
};
