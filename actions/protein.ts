"use server";
import { neon } from "@neondatabase/serverless";

export async function createProteinGoalAction(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const goalValue = formData.get("protein_goal");

  if (!goalValue || isNaN(Number(goalValue))) {
    return {
      success: false,
      message: "Please check that your input is a number",
    };
  }

  await sql("INSERT INTO protein_goals (protein_goal) VALUES ($1)", [
    Number(goalValue),
  ]);

  return {
    success: true,
    message: "Protein goal created successfully",
  };
}

export async function getCurrentProteinGoal() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result =
    await sql`SELECT protein_goal FROM protein_goals ORDER BY created_at DESC LIMIT 1`;
  if (result.length === 0) {
    return 0;
  }
  return result[0].protein_goal;
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
    INSERT INTO protein_tracking (protein_amount) 
    VALUES (${Number(amount)})
  `;

  return {
    success: true,
    message: "Protein amount added",
  };
}

export async function getTodayTotal() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT SUM(protein_amount) as total 
    FROM protein_tracking 
    WHERE DATE(created_at) = CURRENT_DATE
  `;
  return result[0].total || 0;
}
