"use client";

import { updateProteinGoal } from "@/actions/protein";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const initialState = {
  message: "",
  success: false,
};

export function ProteinGoal() {
  const [state, formAction, isPending] = useActionState(
    updateProteinGoal,
    initialState
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Set Protein Goal</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Input
            type="number"
            placeholder="Enter protein goal in grams"
            name="protein_goal"
            required
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Goal"
            )}
          </Button>
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
