"use client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addBook } from "@/actions/books";
import { LoaderCircle } from "lucide-react";

const addBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
});

type AddBookInput = z.infer<typeof addBookSchema>;

export default function AddBook() {
  const form = useForm<AddBookInput>({
    resolver: zodResolver(addBookSchema),
    defaultValues: {
      title: "",
      author: "",
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(values: AddBookInput) {
    await addBook(values.title, values.author);
    console.log(values);
    form.reset();
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add Book</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Author" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                "Add Book"
              )}
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
