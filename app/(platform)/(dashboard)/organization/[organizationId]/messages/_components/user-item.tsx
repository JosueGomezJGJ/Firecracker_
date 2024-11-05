import { FC } from "react";

interface UserItemProps {
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl: string;
  };
}

export const UserItem: FC<UserItemProps> = ({ data }) => {
  return (
    <li className="flex items-center space-x-4 w-[25%] p-2 bg-white rounded-lg shadow-md">
      <img
        src={data.imageUrl}
        alt={`${data.firstName} ${data.lastName}`}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-semibold">
          {data.firstName} {data.lastName}
        </p>
        <p className="text-sm text-muted-foreground">{data.email}</p>
      </div>
    </li>
  );
};
