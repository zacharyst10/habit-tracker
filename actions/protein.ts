"use server";

import { sql } from "@vercel/postgres";

export async function createProteinGoalAction(proteinGoal: number) {
  await sql`INSERT INTO protein_goals (protein_goal) VALUES (${proteinGoal})`;
}

export async function getCurrentProteinGoal() {
  const { rows } =
    await sql`SELECT protein_goal FROM protein_goals ORDER BY created_at DESC LIMIT 1`;
  if (rows.length === 0) {
    return 0;
  }
  return rows[0].protein_goal;
}
