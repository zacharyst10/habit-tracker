"use server";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function logExercise(formData: FormData): Promise<void> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const type = formData.get("type") as "strength" | "cardio" | "recovery";

  if (!type) {
    throw new Error("Exercise type is required");
  }

  try {
    await sql`
      INSERT INTO workouts (
        type,
        date
      ) VALUES (
        ${type},
        CURRENT_DATE
      )
    `;
  } catch (error) {
    console.error("Failed to log exercise:", error);
    throw new Error("Failed to log exercise");
  }
  revalidatePath("/exercise");
}

export async function getWeeklyWorkouts() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
      SELECT
        date,
        COUNT(CASE WHEN type = 'strength' THEN 1 END) as strength,
        COUNT(CASE WHEN type = 'cardio' THEN 1 END) as cardio,
        COUNT(CASE WHEN type = 'recovery' THEN 1 END) as recovery
      FROM workouts
      WHERE date >= CURRENT_DATE - INTERVAL '7 days'
      GROUP BY date
      ORDER BY date DESC
    `;

  return result;
}
