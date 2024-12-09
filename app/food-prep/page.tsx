import {
  getProteinGoalForDate,
  getProteinLoggedDays,
  getTodayTotal,
} from "@/actions/protein";
import { YearlyCalendar } from "@/components/food-prep-calendar";
import { ProteinEntry } from "@/components/protein-entry";
import { ProteinGoal } from "@/components/protein-goal";
import { ProteinProgress } from "@/components/protein-progress";

export default async function FoodPrep() {
  const currentGoal = await getProteinGoalForDate(new Date().toISOString());
  const todayTotal = await getTodayTotal();
  const loggedDays = await getProteinLoggedDays();

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
        <div className="space-y-4">
          <div className="grid grid-cols-7 gap-2">
            {loggedDays.map((day) => (
              <div
                key={day.date}
                className={`p-4 rounded-lg ${
                  day.total_protein >= day.goal
                    ? "bg-green-100"
                    : "bg-yellow-100"
                }`}
              >
                <div className="font-medium">
                  {new Date(day.date).toLocaleDateString()}
                </div>
                <div className="text-sm">
                  {day.total_protein}g / {day.goal}g
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
