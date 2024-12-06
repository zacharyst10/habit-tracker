import { getCurrentProteinGoal, getTodayTotal } from "@/actions/protein";
import { YearlyCalendar } from "@/components/food-prep-calendar";
import { ProteinEntry } from "@/components/protein-entry";
import { ProteinGoal } from "@/components/protein-goal";
import { ProteinProgress } from "@/components/protein-progress";

export default async function FoodPrep() {
  const currentGoal = await getCurrentProteinGoal();
  const todayTotal = await getTodayTotal();

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">Food Prep Diary</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Daily Protein Tracker</h2>
          <div className="space-y-6">
            <div>Current Protein Goal: {currentGoal}g</div>
            <ProteinGoal />
            <ProteinEntry />
            <ProteinProgress
              currentAmount={todayTotal}
              goalAmount={currentGoal}
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Yearly Food Prep Calendar
          </h2>
          <YearlyCalendar />
        </div>
      </div>
    </div>
  );
}
