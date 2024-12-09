"use server";
import { neon } from "@neondatabase/serverless";

export async function updateProteinGoal(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const goalValue = formData.get("protein_goal");
  const date = new Date().toISOString().split("T")[0]; // Get current date

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

  await sql`
    INSERT INTO daily_protein_tracking (protein_amount)
    VALUES (${Number(amount)})
  `;

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

export async function getProteinLoggedDays() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT DISTINCT date, 
           SUM(protein_amount) as total_protein,
           (SELECT protein_goal FROM daily_protein_goals g 
            WHERE g.date = t.date 
            ORDER BY created_at DESC LIMIT 1) as goal
    FROM daily_protein_tracking t
    GROUP BY date
    ORDER BY date DESC
  `;
  return result;
}
