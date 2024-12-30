"use server";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function addBook(
  title: string,
  author: string,
  cover: string = "/placeholder.svg?height=200&width=150"
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    INSERT INTO books (title, author, cover)
    VALUES (${title}, ${author}, ${cover})
    RETURNING id
  `;

  await sql`
    INSERT INTO reading_status (book_id, status)
    VALUES (${result[0].id}, 'want_to_read')
  `;

  revalidatePath("/book-corner");
}

export async function getBooks(status: "want_to_read" | "read") {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const books = await sql`
    SELECT b.*, rs.status
    FROM books b
    JOIN reading_status rs ON b.id = rs.book_id
    WHERE rs.status = ${status}
    ORDER BY b.created_at DESC
  `;

  return books.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    cover: book.cover,
  }));
}

export async function markAsRead(bookId: number) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql`
    UPDATE reading_status
    SET status = 'read',
        completed_at = CURRENT_TIMESTAMP
    WHERE book_id = ${bookId}
  `;
  revalidatePath("/book-corner");
}

export async function markAsUnread(bookId: number) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql`
    UPDATE reading_status
    SET status = 'want_to_read'
    WHERE book_id = ${bookId}
  `;
  revalidatePath("/book-corner");
}
export async function deleteBook(bookId: number) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql`DELETE FROM reading_status WHERE book_id = ${bookId}`;
  await sql`DELETE FROM books WHERE id = ${bookId}`;
  revalidatePath("/book-corner");
}
