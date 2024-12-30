"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { markAsRead, markAsUnread } from "@/actions/books";
import { DeleteBook } from "./delete-book";

export interface BookData {
  id: number;
  title: string;
  author: string;
  cover: string;
}

export interface BookProps {
  book: BookData;
  isRead?: boolean;
  onUnread?: () => void;
}

export function Book({ book, isRead }: BookProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          {isRead && (
            <div className="absolute top-2 right-2 bg-green-500 text-white p-2 rounded-full">
              <CheckCircle size={24} />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{book.author}</p>
          {!isRead ? (
            <Button onClick={() => markAsRead(book.id)} className="w-full">
              Mark as Read
            </Button>
          ) : (
            <Button onClick={() => markAsUnread(book.id)} className="w-full">
              Mark as Unread
            </Button>
          )}
          <DeleteBook bookId={book.id} />
        </div>
      </CardContent>
    </Card>
  );
}
