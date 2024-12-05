"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { createProteinGoalAction } from "@/actions/protein";
import { use, useActionState } from "react";

const initialState = {
  message: "",
  success: false,
};

export function ProteinGoal() {
  const [state, formAction, isPending] = useActionState(
    createProteinGoalAction,
    initialState
  );
  return (
    <form action={formAction}>
      <div className="flex flex-col gap-2">
        <Input
          type="number"
          placeholder="Enter protein goal"
          name="protein_goal"
          required
        />
        <Button type="submit">{isPending ? "Loading..." : "Submit"}</Button>

        {state?.message && (
          <p
            className={`text-sm ${
              state.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
