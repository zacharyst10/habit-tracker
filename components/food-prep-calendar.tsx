"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

import React from "react";

export function YearlyCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
