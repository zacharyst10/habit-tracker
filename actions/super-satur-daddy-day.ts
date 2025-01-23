"use server";
import { DatabaseActivity } from "@/types/super-satur-daddy-day";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function scheduleActivity(
  activityName: string,
  date: string,
  kidName: string
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql`
    INSERT INTO scheduled_activities (activity_name, scheduled_date, kid_name)
    VALUES (${activityName}, ${date}::date, ${kidName})
  `;
  revalidatePath("/super-satur-daddy-day");
}

export async function getNextActivity(): Promise<DatabaseActivity | null> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT 
      activity_name,
      scheduled_date::text,
      kid_name
    FROM scheduled_activities
    WHERE scheduled_date >= CURRENT_DATE
    ORDER BY scheduled_date ASC
    LIMIT 1
  `;

  return result[0] as DatabaseActivity | null;
}
