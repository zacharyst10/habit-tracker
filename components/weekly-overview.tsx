import React, { useMemo } from "react";
import { Progress } from "@/components/ui/progress";

interface DailyProtein {
  date: string;
  total_protein: number;
  goal: number;
}

interface WeeklyOverviewProps {
  loggedDays: DailyProtein[];
}

export function WeeklyOverview({ loggedDays }: WeeklyOverviewProps) {
  const { weeklyData, dateRange } = useMemo(() => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const dateRange = {
      start: startOfWeek.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      end: endOfWeek.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };

    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      const dateString = date.toISOString().split("T")[0];

      const loggedDay = loggedDays.find((day) => day.date === dateString);

      return {
        date: dateString,
        dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
        total_protein: loggedDay?.total_protein || 0,
        goal: loggedDay?.goal || 0,
      };
    });

    return { weeklyData: weekDays, dateRange };
  }, [loggedDays]);

  const weeklyStats = useMemo(() => {
    const daysWithData = weeklyData.filter((day) => day.total_protein > 0);
    const totalProtein = daysWithData.reduce(
      (sum, day) => sum + day.total_protein,
      0
    );
    const averageProtein =
      daysWithData.length > 0 ? totalProtein / daysWithData.length : 0;
    const averageGoal =
      daysWithData.length > 0
        ? daysWithData.reduce((sum, day) => sum + day.goal, 0) /
          daysWithData.length
        : 0;

    return {
      totalProtein,
      averageProtein,
      averageGoal,
      daysTracked: daysWithData.length,
    };
  }, [weeklyData]);

  return (
    <div>
      <div className="flex flex-col pb-6 space-y-2 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            ({dateRange.start} - {dateRange.end})
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          {weeklyStats.daysTracked}/7 days tracked
        </span>
      </div>

      <div className="space-y-6">
        {weeklyData.map((day) => (
          <div key={day.date}>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">{day.dayName}</span>
              <span className="text-muted-foreground">
                {day.total_protein > 0 ? `${day.total_protein}g` : "-"}
              </span>
            </div>
            <Progress
              value={day.goal ? (day.total_protein / day.goal) * 100 : 0}
              className="h-2"
            />
          </div>
        ))}

        <div className="pt-4 border-t">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Weekly Average</span>
              <span className="font-medium">
                {weeklyStats.averageProtein.toFixed(1)}g /{" "}
                {weeklyStats.averageGoal.toFixed(1)}g
              </span>
            </div>
            <Progress
              value={
                (weeklyStats.averageProtein / weeklyStats.averageGoal) * 100
              }
              className="h-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
