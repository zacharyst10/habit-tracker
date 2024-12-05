"use server";
import { sql } from "@vercel/postgres";

export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS protein_goals (
      id SERIAL PRIMARY KEY,
      protein_goal DECIMAL NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}

export async function setupDatabase() {
  try {
    // Create protein goals table
    await sql`
      CREATE TABLE IF NOT EXISTS protein_goals (
        id SERIAL PRIMARY KEY,
        protein_goal DECIMAL NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create protein tracking table separately
    await sql`
      CREATE TABLE IF NOT EXISTS protein_tracking (
        id SERIAL PRIMARY KEY,
        protein_amount DECIMAL NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    return { success: true, message: "Tables created successfully" };
  } catch (error: unknown) {
    console.error("Database setup error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : String(error),
    };
  }
}
