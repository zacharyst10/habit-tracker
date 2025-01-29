"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DayContentProps } from "react-day-picker";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input"; // Add this import
import {
  getProteinEntriesForDate,
  deleteProteinEntry,
  editProteinEntry,
} from "@/actions/protein";
import { useActionState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface LoggedDay {
  date: string;
  total_protein: number;
  goal: number;
}

interface ProteinEntry {
  id: number;
  amount: number;
  timestamp: string;
}

interface YearlyCalendarProps {
  loggedDays: LoggedDay[];
}

export function YearlyCalendar({ loggedDays }: YearlyCalendarProps) {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDayInfo, setSelectedDayInfo] = useState<LoggedDay | null>(
    null
  );
  const [dayEntries, setDayEntries] = useState<ProteinEntry[]>([]);
  const [editAmount, setEditAmount] = useState<string>("");
  const [deleteState, deleteAction] = useActionState(deleteProteinEntry, null);
  const [editState, editAction] = useActionState(editProteinEntry, null);

  // Handle edit state changes
  useEffect(() => {
    if (editState) {
      if (editState.success) {
        toast.success(editState.message);
        updateSelectedDayInfo(date);
      } else {
        toast.error(editState.message);
      }
    }
  }, [editState, date]);

  const loggedDaysMap = new Map(loggedDays.map((day) => [day.date, day]));

  const updateSelectedDayInfo = async (selectedDate: Date) => {
    const dateString = selectedDate.toISOString().split("T")[0];
    const dayInfo = loggedDaysMap.get(dateString);
    setSelectedDayInfo(dayInfo || null);

    if (dayInfo) {
      const entries = await getProteinEntriesForDate(dateString);
      setDayEntries(entries);
    } else {
      setDayEntries([]);
    }
  };

  useEffect(() => {
    updateSelectedDayInfo(date);
  }, [loggedDays, date]);

  useEffect(() => {
    if (deleteState) {
      if (deleteState.success) {
        toast.success(deleteState.message);
        updateSelectedDayInfo(date);
      } else {
        toast.error(deleteState.message);
      }
    }
  }, [deleteState, date]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      updateSelectedDayInfo(selectedDate);
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Denver",
    });
  };

  const handleEditOpen = (amount: number) => {
    setEditAmount(amount.toString());
  };

  return (
    <>
      <h2 className="text-xl font-semibold py-6">Monthly Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          className="rounded-3xl border w-full"
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
              {date.toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "America/Denver",
              })}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDayInfo ? (
              <div className="space-y-4 h-full">
                {/* ... (previous card content remains the same until the entries section) ... */}
                {dayEntries.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Daily Entries</h3>
                    <div className="space-y-2">
                      {dayEntries.map((entry) => (
                        <div
                          key={entry.id}
                          className="flex justify-between items-center p-2 bg-gray-50 rounded-lg"
                        >
                          <span className="font-medium">{entry.amount}g</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                              {formatTime(entry.timestamp)}
                            </span>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete Protein Entry
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this{" "}
                                    {entry.amount}g protein entry? This action
                                    cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <form action={deleteAction}>
                                    <input
                                      type="hidden"
                                      name="entryId"
                                      value={entry.id}
                                    />
                                    <AlertDialogAction type="submit">
                                      Delete
                                    </AlertDialogAction>
                                  </form>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 text-green-500 hover:text-green-700 hover:bg-green-50"
                                  onClick={() => handleEditOpen(entry.amount)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Edit Protein Amount
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Enter the new protein amount in grams:
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <form action={editAction}>
                                  <input
                                    type="hidden"
                                    name="entryId"
                                    value={entry.id}
                                  />
                                  <div className="flex flex-col gap-4 py-4">
                                    <Input
                                      type="number"
                                      name="amount"
                                      value={editAmount}
                                      onChange={(e) =>
                                        setEditAmount(e.target.value)
                                      }
                                      placeholder="Enter protein amount"
                                      className="w-full"
                                    />
                                  </div>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction type="submit">
                                      Save Changes
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </form>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
