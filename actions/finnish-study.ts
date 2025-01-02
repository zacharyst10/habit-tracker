"use server";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

interface StudyDay {
  id: number;
  date: string;
  completed: boolean;
  minutes: number;
  notes?: string;
}

export async function getStudyDays(): Promise<StudyDay[]> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const rawResults = await sql`
      SELECT id, date::text, completed, minutes, notes
      FROM finnish_study_days
      WHERE date >= CURRENT_DATE - INTERVAL '30 days'
      ORDER BY date DESC
    `;

  return rawResults.map((row) => ({
    id: row.id,
    date: row.date,
    completed: row.completed,
    minutes: row.minutes ?? 30,
    notes: row.notes ?? undefined,
  }));
}

export async function toggleStudyDay(date: string, completed: boolean) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql`
    INSERT INTO finnish_study_days (date, completed)
    VALUES (${date}::date, ${completed})
    ON CONFLICT (date) 
    DO UPDATE SET completed = ${completed}
  `;

  revalidatePath("/finnish-study");
}
