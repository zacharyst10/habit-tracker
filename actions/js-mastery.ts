"use server";
import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

interface Topic {
  id: number;
  topic: string;
  description: string;
  difficulty: string;
  month: string;
  status: string;
}

const jsTopics = [
  {
    month: "January",
    topic: "Closures & Lexical Scope",
    description: "Deep dive into closure mechanisms and scope chain",
    difficulty: "intermediate",
  },
  {
    month: "February",
    topic: "Higher-Order Functions",
    description: "Advanced function composition and functional programming",
    difficulty: "intermediate",
  },
  {
    month: "March",
    topic: "Prototypal Inheritance",
    description: "Understanding JavaScript's prototype chain",
    difficulty: "intermediate",
  },
  {
    month: "April",
    topic: "Event Loop & Async Patterns",
    description: "Advanced asynchronous programming",
    difficulty: "advanced",
  },
  {
    month: "May",
    topic: "Memory Management",
    description: "Memory leaks and garbage collection",
    difficulty: "advanced",
  },
  {
    month: "June",
    topic: "Meta-programming",
    description: "Proxies and Reflect API",
    difficulty: "advanced",
  },
  {
    month: "July",
    topic: "Abstract Syntax Trees",
    description: "Understanding and manipulating JavaScript ASTs",
    difficulty: "expert",
  },
  {
    month: "August",
    topic: "WebAssembly Integration",
    description: "Integrating Wasm with JavaScript applications",
    difficulty: "expert",
  },
  {
    month: "September",
    topic: "Compiler Optimization",
    description: "V8 engine internals and optimization techniques",
    difficulty: "expert",
  },
  {
    month: "October",
    topic: "Custom Frameworks",
    description: "Building frameworks and design systems",
    difficulty: "expert",
  },
  {
    month: "November",
    topic: "Performance Profiling",
    description: "Advanced debugging and performance optimization",
    difficulty: "expert",
  },
  {
    month: "December",
    topic: "Language Design",
    description: "TC39 proposals and language specification",
    difficulty: "expert",
  },
];

// Initialize database with topics
export async function initializeTopics() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  for (const topic of jsTopics) {
    const result = await sql`
      INSERT INTO js_concepts (topic, description, difficulty, month)
      VALUES (${topic.topic}, ${topic.description}, ${topic.difficulty}, ${topic.month})
      ON CONFLICT DO NOTHING
      RETURNING id
    `;

    if (result[0]?.id) {
      await sql`
        INSERT INTO concept_status (concept_id, status)
        VALUES (${result[0].id}, 'todo')
        ON CONFLICT DO NOTHING
      `;
    }
  }
}

export async function getTopicsWithStatus(): Promise<Topic[]> {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const results = await sql`
      SELECT 
        c.id,
        c.topic,
        c.description,
        c.difficulty,
        c.month,
        s.status
      FROM js_concepts c
      JOIN concept_status s ON c.id = s.concept_id
      ORDER BY 
        CASE c.month
          WHEN 'January' THEN 1
          WHEN 'February' THEN 2
          WHEN 'March' THEN 3
          WHEN 'April' THEN 4
          WHEN 'May' THEN 5
          WHEN 'June' THEN 6
          WHEN 'July' THEN 7
          WHEN 'August' THEN 8
          WHEN 'September' THEN 9
          WHEN 'October' THEN 10
          WHEN 'November' THEN 11
          WHEN 'December' THEN 12
        END
    `;

  return results as Topic[];
}

export async function updateTopicStatus(
  conceptId: number,
  status: "todo" | "in-progress" | "completed"
) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql`
    UPDATE concept_status
    SET 
      status = ${status},
      updated_at = CURRENT_TIMESTAMP
    WHERE concept_id = ${conceptId}
  `;
  revalidatePath("/js-mastery");
}

export async function getCurrentTopics() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  return await sql`
    SELECT 
      c.id,
      c.topic, 
      c.difficulty
    FROM js_concepts c
    JOIN concept_status s ON c.id = s.concept_id
    WHERE s.status = 'in-progress'
    ORDER BY 
      CASE c.difficulty
        WHEN 'intermediate' THEN 1
        WHEN 'advanced' THEN 2
        WHEN 'expert' THEN 3
      END
  `;
}
