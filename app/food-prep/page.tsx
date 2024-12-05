import { Suspense } from "react";

export default async function FoodPrep() {
  // const currentGoal = await getCurrentProteinGoal();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>food prep page</main>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <ProteinGoalDisplay currentGoal={currentGoal} /> */}
      </Suspense>
    </div>
  );
}
