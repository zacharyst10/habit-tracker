"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DayContentProps } from "react-day-picker";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LoggedDay {
  date: string;
  total_protein: number;
  goal: number;
}

interface YearlyCalendarProps {
  loggedDays: LoggedDay[];
}

export function YearlyCalendar({ loggedDays }: YearlyCalendarProps) {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDayInfo, setSelectedDayInfo] = useState<LoggedDay | null>(
    null
  );

  const loggedDaysMap = new Map(loggedDays.map((day) => [day.date, day]));

  const updateSelectedDayInfo = (selectedDate: Date) => {
    const dateString = selectedDate.toISOString().split("T")[0];
    const dayInfo = loggedDaysMap.get(dateString);
    setSelectedDayInfo(dayInfo || null);
  };

  useEffect(() => {
    updateSelectedDayInfo(date);
  }, [loggedDays]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      updateSelectedDayInfo(selectedDate);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold py-6">Monthly Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-3xl border"
          modifiers={{
            logged: (date) =>
              loggedDaysMap.has(date.toISOString().split("T")[0]),
          }}
          modifiersStyles={{
            logged: { fontWeight: "bold" },
          }}
          components={{
            DayContent: ({ date }: DayContentProps) => {
              const dateString = date.toISOString().split("T")[0];
              const loggedDay = loggedDaysMap.get(dateString);
              if (loggedDay) {
                const isGoalMet = loggedDay.total_protein >= loggedDay.goal;
                return (
                  <div
                    className={`w-full h-full flex items-center justify-center rounded-xl ${
                      isGoalMet ? "bg-green-300" : "bg-yellow-300"
                    }`}
                  >
                    {date.getDate()}
                  </div>
                );
              }
              return <div>{date.getDate()}</div>;
            },
          }}
        />

        <Card>
          <CardHeader>
            <CardTitle>
              {date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDayInfo ? (
              <div className="space-y-4 h-full">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status</span>
                  <Badge
                    variant={
                      selectedDayInfo.total_protein >= selectedDayInfo.goal
                        ? "default"
                        : "destructive"
                    }
                  >
                    {selectedDayInfo.total_protein >= selectedDayInfo.goal
                      ? "Goal Met"
                      : "Goal Not Met"}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Protein Consumed
                    </p>
                    <p className="text-2xl font-bold">
                      {selectedDayInfo.total_protein}g
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Daily Goal</p>
                    <p className="text-2xl font-bold">
                      {selectedDayInfo.goal}g
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">Goal Progress</p>
                  <div className="mt-2 h-2 rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{
                        width: `${Math.min(
                          100,
                          (selectedDayInfo.total_protein /
                            selectedDayInfo.goal) *
                            100
                        )}%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-right text-muted-foreground">
                    {Math.round(
                      (selectedDayInfo.total_protein / selectedDayInfo.goal) *
                        100
                    )}
                    %
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No data recorded for this date
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
