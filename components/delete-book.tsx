"use client";
import { deleteBook } from "@/actions/books";

export function DeleteBook({ bookId }: { bookId: number }) {
  const handleDelete = async () => {
    try {
      console.log("Deleting book:", bookId);
      await deleteBook(bookId);
      console.log("Book deleted");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <button onClick={handleDelete} className="w-full">
        Delete
      </button>
    </div>
  );
}
