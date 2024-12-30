"use client";
import { deleteBook } from "@/actions/books";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

function DeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant={"ghost"} type="submit">
      {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Delete"}
    </Button>
  );
}

export function DeleteBook({ bookId }: { bookId: number }) {
  return (
    <div className="text-center">
      <form action={() => deleteBook(bookId)}>
        <DeleteButton />
      </form>
    </div>
  );
}
