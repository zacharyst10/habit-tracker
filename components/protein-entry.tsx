"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addProteinAmount } from "@/actions/protein";
import { useActionState, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      <Plus className="mr-2 h-4 w-4" />
      {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Add"}
    </Button>
  );
}

const initialState = {
  message: "",
  success: false,
};

export function ProteinEntry() {
  const [state, formAction] = useActionState(addProteinAmount, initialState);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.success) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.success]);

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
            <SubmitButton />
          </div>
          {state?.message && showMessage && (
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
