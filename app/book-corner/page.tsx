export const dynamic = "force-dynamic";

import { getBooks } from "@/actions/books";
import AddBook from "@/components/add-book";
import { Book } from "@/components/book";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function BookCorner() {
  const wantToRead = await getBooks("want_to_read");
  const read = await getBooks("read");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center mb-6">Book Corner</h1>

        <AddBook />
      </div>

      <Tabs defaultValue="want-to-read" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="want-to-read">Want to Read</TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
        </TabsList>

        <TabsContent value="want-to-read">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wantToRead.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="read">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {read.map((book) => (
              <Book key={book.id} book={book} isRead />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
