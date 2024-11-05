import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { UserItem } from "./user-item";
import { clerkClient } from "@clerk/nextjs/server";

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const getUsers = async (orgId: string) => {
  try {
    const response = await clerkClient().users.getUserList({
      organizationId: [orgId],
    });

    return response.data.map((user: any) => ({
      id: user.id,
      firstName: capitalize(user.firstName || ""),
      lastName: capitalize(user.lastName || ""),
      email: user.emailAddresses[0]?.emailAddress || "",
      imageUrl: user.imageUrl,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const UserList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const users = await getUsers(orgId);

  return (
    <ol className="space-y-4">
      {users.length === 0 && (
        <p className="text-xs text-center text-muted-foreground">
          No users found in this organization.
        </p>
      )}
      {users.map((user: any) => (
        <UserItem key={user.id} data={user} />
      ))}
    </ol>
  );
};

// Skeleton for loading state
UserList.Skeleton = function UserListSkeleton() {
  return (
    <ol className="space-y-4 mt-4">
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
    </ol>
  );
};
