"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addProteinAmount } from "@/actions/protein";
import { useActionState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

const initialState = {
  message: "",
  success: false,
};

export function ProteinEntry() {
  const [state, formAction] = useActionState(addProteinAmount, initialState);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Protein Intake</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="flex space-x-2">
            <Input
              type="number"
              name="protein_amount"
              placeholder="Enter amount in grams"
              className="flex-1"
            />
            <Button type="submit">
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
          {state?.message && (
            <p
              className={`text-sm ${
                state.success ? "text-green-500" : "text-destructive"
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
