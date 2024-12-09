"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DayContentProps } from "react-day-picker";
import { LoggedDay } from "@/app/food-prep/page";

interface YearlyCalendarProps {
  loggedDays: LoggedDay[];
}

export function YearlyCalendar({ loggedDays }: YearlyCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const loggedDaysMap = new Map(loggedDays.map((day) => [day.date, day]));

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      modifiers={{
        logged: (date) => loggedDaysMap.has(date.toISOString().split("T")[0]),
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
  );
}
