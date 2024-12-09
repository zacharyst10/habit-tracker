import {
  getProteinGoalForDate,
  getProteinLoggedDays,
  getTodayTotal,
} from "@/actions/protein";
import { YearlyCalendar } from "@/components/food-prep-calendar";
import { ProteinEntry } from "@/components/protein-entry";
import { ProteinGoal } from "@/components/protein-goal";
import { ProteinProgress } from "@/components/protein-progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Bell, Search, UtensilsCrossed } from "lucide-react";

export interface LoggedDay {
  date: string;
  total_protein: number;
  goal: number;
}

export default async function FoodPrep() {
  const currentGoal = await getProteinGoalForDate(new Date().toISOString());
  const todayTotal = await getTodayTotal();
  const loggedDays: LoggedDay[] = await getProteinLoggedDays();

  return (
    <div className="p-4 md:p-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="User avatar" src="/placeholder.svg" />
            <AvatarFallback>ZS</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h1 className="text-xl text-primary font-semibold">
              Protein Tracker
            </h1>
            <Button size="icon" className="rounded-full">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-muted border-none shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Protein Overview</h2>
              <Select defaultValue="daily">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="bg-black text-white rounded-3xl p-6">
              <div className="text-center mb-6">
                <p className="text-lg">Today's Protein Goal</p>
                <p className="text-4xl font-bold mt-2">{currentGoal}g</p>
              </div>
              <div className="relative w-full h-20">
                <ProteinProgress
                  currentAmount={todayTotal}
                  goalAmount={currentGoal}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted border-none shadow-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Protein Entry</h2>
            <ProteinEntry />
            <div className="mt-4">
              <ProteinGoal />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted border-none shadow-none lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Yearly Overview</h2>
            <YearlyCalendar loggedDays={loggedDays} />
          </CardContent>
        </Card>

        <Card className="bg-muted border-none shadow-none lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Protein Stats</h2>
              <Button variant="outline" size="sm">
                <UtensilsCrossed className="mr-2 h-4 w-4" />
                Log Meal
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Today's Progress</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Protein</span>
                      <span className="text-sm">
                        {Math.round((todayTotal / currentGoal) * 100)}%
                      </span>
                    </div>
                    <ProteinProgress
                      currentAmount={todayTotal}
                      goalAmount={currentGoal}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {todayTotal}g / {currentGoal}g consumed
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Weekly Average</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Protein</span>
                      <span className="text-sm">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average: 170g / 200g per day
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
