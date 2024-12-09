import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Beef } from "lucide-react";
import { ProteinGoal } from "./protein-goal";

export function EditProteinGoal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Beef className="hover:text-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit protein goal</DialogTitle>
          <DialogDescription>
            Make changes to your protein goal here. Default for each day is 200.
          </DialogDescription>
        </DialogHeader>
        <ProteinGoal />
      </DialogContent>
    </Dialog>
  );
}
