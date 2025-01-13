"use client";
import { deleteBook } from "@/actions/books";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { toast } from "sonner";

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant="destructive" disabled={pending} type="submit">
      {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Delete"}
    </Button>
  );
}

export function DeleteBook({
  bookId,
  title,
}: {
  bookId: number;
  title: string;
}) {
  return (
    <div className="text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Delete Book</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Book: {title}</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this book? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <form
              action={async () => {
                await deleteBook(bookId);
                toast.success("Book deleted successfully");
              }}
            >
              <DeleteButton />
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
