"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <form action={onSubmit}>
      <div className="fle flex-col space-y-2">
        <FormInput errors={fieldErrors} />
        <FormButton />
      </div>
    </form>
  );
};
