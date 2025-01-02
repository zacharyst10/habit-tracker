export const dynamic = "force-dynamic";
import {
  getProteinGoalForDate,
  getProteinLoggedDays,
  getTodayTotal,
} from "@/actions/protein";
import { EditProteinGoal } from "@/components/edit-protein-goal";
import { YearlyCalendar } from "@/components/food-prep-calendar";
import { ProteinEntry } from "@/components/protein-entry";
import { ProteinProgress } from "@/components/protein-progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WeeklyOverview } from "@/components/weekly-overview";
import { Bell, Search, Calendar, TrendingUp, ListPlus } from "lucide-react";
import { Suspense } from "react";

export interface LoggedDay {
  date: string;
  total_protein: number;
  goal: number;
}

const formatCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "America/Denver",
  });
};

export default async function FoodPrep() {
  const currentGoal = await getProteinGoalForDate(new Date().toISOString());
  const todayTotal = await getTodayTotal();
  const loggedDays: LoggedDay[] = await getProteinLoggedDays();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto p-4 md:p-8">
        <header className="flex items-center justify-between mb-8 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 ring-2 ring-primary/10">
              <AvatarImage alt="User avatar" src="/placeholder.svg" />
              <AvatarFallback>ZS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-primary">
                Protein Tracker
              </h1>
              <p className="text-sm text-muted-foreground italic">
                The only macro that matters
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-gradient-to-br from-primary to-muted text-white border-none shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  Daily Progress for - {formatCurrentDate()}
                </h2>
                <Select defaultValue="daily">
                  <SelectTrigger className="w-[120px] bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-white/80 mb-2">Current Progress</p>
                  <div className="text-5xl font-bold mb-4">{todayTotal}g</div>
                  <ProteinProgress
                    currentAmount={todayTotal}
                    goalAmount={currentGoal}
                  />
                </div>
                <div>
                  <p className="text-white/80 mb-2">Daily Goal</p>
                  <div className="text-5xl font-bold">{currentGoal}g</div>
                  <p className="text-white/60 mt-4">
                    {((todayTotal / currentGoal) * 100).toFixed(1)}% of daily
                    goal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Quick Actions</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <ListPlus className="mr-2 h-5 w-5" />
                Log Protein Entry
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Statistics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Weekly Overview
              </Button>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-xl font-semibold">Add Protein Entry</h2>
              <EditProteinGoal />
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading...</div>}>
                <ProteinEntry />
              </Suspense>
            </CardContent>
            <CardContent>
              <YearlyCalendar loggedDays={loggedDays} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Weekly Overview</h2>
            </CardHeader>
            <CardContent className="space-y-6">
              <WeeklyOverview loggedDays={loggedDays} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
