"use server";
import { neon } from "@neondatabase/serverless";

// Note the prevState parameter is added
export async function createProteinGoalAction(
  prevState: { success: boolean; message: string } | null,
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
