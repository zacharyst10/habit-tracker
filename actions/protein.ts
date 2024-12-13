"use server";
import { LoggedDay } from "@/app/food-prep/page";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function updateProteinGoal(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const goalValue = formData.get("protein_goal");
  const date = new Date().toISOString().split("T")[0];

  if (!goalValue || isNaN(Number(goalValue))) {
    return {
      success: false,
      message: "Please check that your input is a number",
    };
  }

  await sql`
    INSERT INTO daily_protein_goals (date, protein_goal)
    VALUES (${date}::date, ${Number(goalValue)})
    ON CONFLICT (date) 
    DO UPDATE SET protein_goal = ${Number(goalValue)}
  `;

  return {
    success: true,
    message: "Protein goal updated successfully",
  };
}

export async function getProteinGoalForDate(date: string) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT protein_goal 
    FROM daily_protein_goals 
    WHERE date = ${date}::date 
    ORDER BY created_at DESC 
    LIMIT 1
  `;
  return result[0]?.protein_goal || 200;
}

export async function addProteinAmount(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const amount = formData.get("protein_amount");

  if (!amount || isNaN(Number(amount))) {
    return {
      success: false,
      message: "Please enter a valid amount",
    };
  }

  // Get current date in Mountain time
  const date = new Date()
    .toLocaleString("en-US", { timeZone: "America/Denver" })
    .split(",")[0];

  await sql`
    INSERT INTO daily_protein_tracking (protein_amount, date)
    VALUES (
      ${Number(amount)},
      ${date}::date
    )
  `;
  revalidatePath("/food-prep");
  revalidatePath("/");

  return {
    success: true,
    message: "Protein amount added",
  };
}
export async function getProteinHistoryByDate(days: number = 7) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT 
      date,
      SUM(protein_amount) as total_protein,
      (
        SELECT protein_goal
        FROM daily_protein_goals g
        WHERE g.date = t.date
        ORDER BY created_at DESC
        LIMIT 1
      ) as daily_goal
    FROM daily_protein_tracking t
    WHERE date >= CURRENT_DATE - ${days} * INTERVAL '1 day'
    GROUP BY date
    ORDER BY date DESC
  `;
  return result;
}

export async function getTodayTotal() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT SUM(protein_amount) as total
    FROM daily_protein_tracking
    WHERE date = CURRENT_DATE
  `;
  return result[0].total || 0;
}

export async function getProteinLoggedDays(): Promise<LoggedDay[]> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT DISTINCT date::text, 
           SUM(protein_amount) as total_protein,
           (SELECT protein_goal FROM daily_protein_goals g 
            WHERE g.date = t.date 
            ORDER BY created_at DESC LIMIT 1) as goal
    FROM daily_protein_tracking t
    GROUP BY date
    ORDER BY date DESC
  `;
  return result.map((row) => ({
    date: row.date,
    total_protein: Number(row.total_protein),
    goal: Number(row.goal),
  }));
}
