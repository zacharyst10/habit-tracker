"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { createProteinGoalAction } from "@/actions/protein";

export function ProteinGoalDisplay({ currentGoal }: { currentGoal: number }) {
  const [newGoal, setNewGoal] = useState("");

  //   return (
  //     <div>
  //       <div>Current Protein Goal: {currentGoal}g</div>
  //       <div className="flex gap-2">
  //         <input
  //           type="number"
  //           value={newGoal}
  //           onChange={(e) => setNewGoal(e.target.value)}
  //           className="border rounded p-2"
  //           placeholder="Enter protein goal"
  //         />
  //         <Button
  //           onClick={async () => {
  //             if (newGoal) {
  //               await createProteinGoalAction(Number(newGoal));
  //               setNewGoal(""); // Clear input after setting
  //             }
  //           }}
  //         >
  //           Set Protein Goal
  //         </Button>
  //         <Button onClick={() => (
  //             'use server'
  //             await setupDatabase()
  //         )}>
  //             Set up database
  //         </Button>
  //       </div>
  //     </div>
  //   );
}
