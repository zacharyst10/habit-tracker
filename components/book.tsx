"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Check } from "lucide-react";
import Image from "next/image";
import { markAsRead, markAsUnread } from "@/actions/books";
import { DeleteBook } from "./delete-book";
import placeholderImage from "@/public/placeholder.webp";

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
    <Card className="flex flex-col justify-between">
      <CardContent className="pt-4">
        <div className="relative h-[180px] w-full mb-4">
          <Image
            src={placeholderImage || book.cover}
            alt={book.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          {isRead && (
            <div className="absolute top-2 right-2 bg-green-500 text-white p-2 rounded-full">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
        <h3 className="font-semibold mb-1">{book.title}</h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {isRead ? (
          <Button
            onClick={() => markAsUnread(book.id)}
            size="sm"
            className="w-full"
          >
            <BookOpen className="mr-2 h-4 w-4" /> Mark as Unread
          </Button>
        ) : (
          <Button
            onClick={() => markAsRead(book.id)}
            size="sm"
            className="w-full"
          >
            <Check className="mr-2 h-4 w-4" /> Mark as Read
          </Button>
        )}
        <DeleteBook bookId={book.id} />
      </CardFooter>
    </Card>
  );
}
