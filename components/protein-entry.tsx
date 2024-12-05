"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addProteinAmount } from "@/actions/protein";
import { useActionState } from "react";

const initialState = {
  message: "",
  success: false,
};

export function ProteinEntry() {
  const [state, formAction] = useActionState(addProteinAmount, initialState);

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold">Log Protein Intake</h3>
        <div className="flex gap-2">
          <Input
            type="number"
            name="protein_amount"
            placeholder="Enter amount in grams"
            className="w-48"
          />
          <Button type="submit">Add</Button>
        </div>
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
