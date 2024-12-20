import React from "react";
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
import {
  Bell,
  Search,
  Activity,
  Dumbbell,
  Heart,
  Plus,
  BarChart3,
  Calendar,
} from "lucide-react";
import WorkoutCategories from "@/components/workout-categories";
import { getWeeklyWorkouts } from "@/actions/exercise";

export default async function WorkoutTracker() {
  const weeklyWorkouts = await getWeeklyWorkouts();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto p-4 md:p-8">
        <header className="flex items-center justify-between mb-8 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 ring-2 ring-primary/10">
              <AvatarImage alt="User avatar" src="/placeholder.svg" />
              <AvatarFallback>WO</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-primary">
                Workout Tracker
              </h1>
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
          {/* Weekly Stats Overview */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-primary to-muted text-white border-none shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Weekly Overview</h2>

                <Select defaultValue="week">
                  <SelectTrigger className="w-[120px] bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <Dumbbell className="h-5 w-5" />
                    <p>Strength</p>
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {weeklyWorkouts.reduce(
                      (sum, workout) => sum + (Number(workout.strength) || 0),
                      0
                    )}
                  </div>
                  <p className="text-white/60">workouts</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <Activity className="h-5 w-5" />
                    <p>Cardio</p>
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {weeklyWorkouts.reduce(
                      (sum, workout) => sum + (Number(workout.cardio) || 0),
                      0
                    )}
                  </div>
                  <p className="text-white/60">sessions</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <Heart className="h-5 w-5" />
                    <p>Recovery</p>
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {weeklyWorkouts.reduce(
                      (sum, workout) => sum + (Number(workout.recovery) || 0),
                      0
                    )}
                  </div>
                  <p className="text-white/60">activities</p>
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
                <Plus className="mr-2 h-5 w-5" />
                Log New Workout
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Progress
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Workout
              </Button>
            </CardContent>
          </Card>

          {/* Category Cards */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <h2 className="text-xl font-semibold">Log a Workout</h2>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <WorkoutCategories />
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Recent Activities</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  type: "strength",
                  name: "Upper Body",
                  date: "Today",
                  icon: <Dumbbell className="h-4 w-4" />,
                },
                {
                  type: "cardio",
                  name: "5k Run",
                  date: "Yesterday",
                  icon: <Activity className="h-4 w-4" />,
                },
                {
                  type: "recovery",
                  name: "Yoga Session",
                  date: "2 days ago",
                  icon: <Heart className="h-4 w-4" />,
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
