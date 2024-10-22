"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";

export const Info = () => {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return Info.Skeleton();
  }
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="Organization"
          className="rounded-md object-cover"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        {/* TODO: Make an option for dynamic semesters per organization, maybe in DB?, will probably remove as not needed but will be nice to have */}
        <div className="flex items-center  text-xs text-muted-foreground">
          Summer 2024/Fall 2024
        </div>
      </div>
    </div>
  );
};

Info.Skeleton = function SkeletonInfo() {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Skeleton className="w-full h-full absolute" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-[200px]" />
        {/* TODO: IF you remove the top TODO, then remove bottom div aswell */}
        <div className="flex items-center">
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    </div>
  );
};
