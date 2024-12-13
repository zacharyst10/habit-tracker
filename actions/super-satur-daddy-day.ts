"use server";

import { NextMission } from "@/types/super-satur-daddy-day";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

export async function scheduleActivity(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const kidId = formData.get("kid_id");
  const activityId = formData.get("activity_id");
  const scheduledDate = formData.get("scheduled_date");

  if (!kidId || !activityId || !scheduledDate) {
    return {
      success: false,
      message: "Please fill out all fields",
    };
  }

  try {
    await sql`
      INSERT INTO scheduled_activities (kid_id, activity_id, scheduled_date)
      VALUES (${kidId}::uuid, ${activityId}::uuid, ${String(
      scheduledDate
    )}::date)
    `;

    revalidatePath("/activities");
    return {
      success: true,
      message: "Activity scheduled successfully",
    };
  } catch (error) {
    console.error("Failed to schedule activity:", error);
    return {
      success: false,
      message: "Failed to schedule activity",
    };
  }
}

export async function getActivities() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT *
    FROM activities
    ORDER BY name ASC
  `;
  return result;
}

export async function getKids() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT *
    FROM kids
    ORDER BY name ASC
  `;
  return result;
}

export async function getNextMission(): Promise<NextMission | null> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT
      k.name as kid_name,
      a.name as activity_name,
      sa.scheduled_date::text
    FROM scheduled_activities sa
    JOIN kids k ON sa.kid_id = k.id
    JOIN activities a ON sa.activity_id = a.id
    WHERE sa.scheduled_date >= CURRENT_DATE
    ORDER BY sa.scheduled_date ASC
    LIMIT 1
  `;

  if (result[0]) {
    return {
      kid_name: result[0].kid_name,
      activity_name: result[0].activity_name,
      scheduled_date: result[0].scheduled_date,
    };
  }
  return null;
}

export async function getUpcomingActivities() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const result = await sql`
    SELECT
      sa.id,
      k.name as kid_name,
      a.name as activity_name,
      sa.scheduled_date::text
    FROM scheduled_activities sa
    JOIN kids k ON sa.kid_id = k.id
    JOIN activities a ON sa.activity_id = a.id
    WHERE sa.scheduled_date >= CURRENT_DATE
    ORDER BY sa.scheduled_date ASC
  `;
  return result;
}
