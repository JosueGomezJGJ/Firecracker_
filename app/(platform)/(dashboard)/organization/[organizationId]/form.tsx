"use client";

import { create, State } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState<State, FormData>(create, initialState);
  return (
    <form action={dispatch}>
      <div className="fle flex-col space-y-2">
        <FormInput errors={state?.errors} />
        <FormButton />
      </div>
    </form>
  );
};
