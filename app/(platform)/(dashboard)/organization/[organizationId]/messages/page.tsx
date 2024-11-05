import { Separator } from "@/components/ui/separator";
import { Info } from "../_components/info";
import { UserList } from "./_components/user-list";
import { Suspense } from "react";

const UsersPage = () => {
  return (
    <div className="w-full">
      <Suspense fallback={<UserList.Skeleton />}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default UsersPage;
