"use client";

import { List } from "@prisma/client";
import { MoreHorizontal, X } from "lucide-react";
import { ElementRef, useRef } from "react";
import { toast } from "sonner";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { useAction } from "@/hooks/use-action";
import { Button } from "@/components/ui/button";
import { deleteList } from "@/actions/delete-list";
import { copyList } from "@/actions/copy-list";
import { FormSubmit } from "@/components/form/form-submit";
import { Separator } from "@/components/ui/separator";

interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}
export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: () => {
      toast.success(`List "${data.title}" deleted successfully`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { execute: executeCopy } = useAction(copyList, {
    onSuccess: () => {
      toast.success(`List "${data.title}" copied successfully`);
      closeRef.current?.click();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeDelete({ id, boardId });
  };
  const onCopy = (formData: FormData) => {
    const id = formData.get("id") as string;
    const boardId = formData.get("boardId") as string;

    executeCopy({ id, boardId });
  };

  return (
    <div className="flex items-center justify-end space-x-4">
      <Popover>
        <PopoverTrigger>
          <Button
            asChild
            className="h-auto w-auto p-0 px-2 py-0.5"
            variant={"ghost"}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
          <div className="text-sm font-semibold text-center text-neutral-600 pb-4">
            List Actions
          </div>
          <PopoverClose ref={closeRef} asChild>
            <Button
              className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600 "
              variant={"ghost"}
            >
              <X className="h-4 w-4" />
            </Button>
          </PopoverClose>
          <Button
            onClick={onAddCard}
            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            variant={"ghost"}
          >
            Add card...
          </Button>
          <form action={onCopy}>
            <input hidden name="id" id="id" value={data.id} readOnly />
            <input
              hidden
              name="boardId"
              id="boardId"
              value={data.boardId}
              readOnly
            />
            <FormSubmit
              variant="ghost"
              className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            >
              Copy list...
            </FormSubmit>
          </form>
          <Separator />
          <form action={onDelete}>
            <input hidden name="id" id="id" value={data.id} readOnly />
            <input
              hidden
              name="boardId"
              id="boardId"
              value={data.boardId}
              readOnly
            />
            <FormSubmit
              variant="ghost"
              className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
            >
              Delete this list...
            </FormSubmit>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};
