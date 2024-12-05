import { getCurrentProteinGoal, getTodayTotal } from "@/actions/protein";
import { ProteinEntry } from "@/components/protein-entry";
import { ProteinGoal } from "@/components/protein-goal";
import { ProteinProgress } from "@/components/protein-progress";

export default async function FoodPrep() {
  const currentGoal = await getCurrentProteinGoal();
  const todayTotal = await getTodayTotal();
  return (
    <div className="  items-center justify-items-center min-h-screen p-8  gap-16 sm:p-20">
      <main>food prep page</main>
      <div>Current Protein Goal: {currentGoal}g</div>
      <ProteinGoal />
      <ProteinEntry />
      <ProteinProgress currentAmount={todayTotal} goalAmount={currentGoal} />
    </div>
  );
}
