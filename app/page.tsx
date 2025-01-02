export const dynamic = "force-dynamic";

import { getProteinGoalForDate, getTodayTotal } from "@/actions/protein";
import { getStudyDays } from "@/actions/finnish-study";
import { getNextActivity } from "@/actions/super-satur-daddy-day";
import { getBooks } from "@/actions/books";
import { getCurrentTopics } from "@/actions/js-mastery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Book,
  Dumbbell,
  Gamepad2,
  Code,
  ArrowUp,
  Flame,
  Trophy,
} from "lucide-react";

export default async function Dashboard() {
  // Fetch all the data
  const currentGoal = await getProteinGoalForDate(new Date().toISOString());
  const todayTotal = await getTodayTotal();
  const finnishStudy = await getStudyDays();
  const nextActivity = await getNextActivity();
  const books = await getBooks("read");
  const currentTopics = await getCurrentTopics();

  // Calculate stats
  const proteinProgress = (todayTotal / currentGoal) * 100;
  const currentStreak = finnishStudy.filter((day) => day.completed).length;
  const booksRead = books.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your progress across all activities
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Protein Card */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Protein Track
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Dumbbell className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">{todayTotal}g</div>
                  <div className="text-sm text-muted-foreground">
                    of {currentGoal}g
                  </div>
                </div>
                <Progress value={proteinProgress} className="h-2" />
                <div className="flex items-center gap-2 text-sm">
                  <ArrowUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 font-medium">12%</span>
                  <span className="text-muted-foreground">from last week</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finnish Study Card */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Finnish Study
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Brain className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold">{currentStreak}</div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <Flame className="h-5 w-5" />
                    <span className="text-sm font-medium">Day Streak</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Keep going! You're on fire!
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reading Card */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Reading Progress
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Book className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold">{booksRead}</div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Trophy className="h-5 w-5" />
                    <span className="text-sm font-medium">Books Complete</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {booksRead > 0
                    ? `${booksRead * 10}% towards yearly goal`
                    : "Set your reading goal"}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Activity Card */}
          <Card className="group hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Next Activity
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Gamepad2 className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              {nextActivity ? (
                <div className="space-y-2">
                  <div className="font-bold">{nextActivity.activity_name}</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{nextActivity.kid_name}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(
                        nextActivity.scheduled_date
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">No activities scheduled</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Current Topics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="group hover:shadow-lg transition-all col-span-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg font-medium">
                  JavaScript Learning Path
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Current topics in progress
                </p>
              </div>
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Code className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className={
                          topic.difficulty === "intermediate"
                            ? "bg-blue-100 text-blue-700"
                            : topic.difficulty === "advanced"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-red-100 text-red-700"
                        }
                      >
                        {topic.difficulty}
                      </Badge>
                    </div>
                    <h3 className="font-medium">{topic.topic}</h3>
                  </div>
                ))}
                {currentTopics.length === 0 && (
                  <p className="text-muted-foreground col-span-full text-center py-4">
                    No topics currently in progress
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
