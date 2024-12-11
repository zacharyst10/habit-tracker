"use client";
import { useState, useTransition } from "react";
import { logExercise } from "@/actions/exercise";
import { Dumbbell, Activity, Heart, LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const WORKOUT_TYPES = [
  {
    type: "strength",
    label: "Strength",
    icon: Dumbbell,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    iconColor: "text-orange-600",
    textColor: "text-orange-900",
  },
  {
    type: "cardio",
    label: "Cardio",
    icon: Activity,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    iconColor: "text-blue-600",
    textColor: "text-blue-900",
  },
  {
    type: "recovery",
    label: "Recovery",
    icon: Heart,
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    iconColor: "text-green-600",
    textColor: "text-green-900",
  },
];

export default function WorkoutCategories() {
  const [isPending, startTransition] = useTransition();
  const [activeType, setActiveType] = useState<string | null>(null);

  const handleLogExercise = (type: string) => {
    setActiveType(type);
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.set("type", type);
        await logExercise(formData);
        // Optional: Add toast notification here instead of alert
        toast("Exercise logged successfully!");
      } catch (error) {
        console.error(error);
        toast("Failed to log exercise. Please try again.");
      } finally {
        setActiveType(null);
      }
    });
  };

  return (
    <div className="lg:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WORKOUT_TYPES.map(
          ({
            type,
            label,
            icon: Icon,
            bgColor,
            borderColor,
            iconColor,
            textColor,
          }) => (
            <div
              key={type}
              className={`p-4 rounded-lg ${bgColor} border ${borderColor}`}
            >
              <button
                onClick={() => handleLogExercise(type)}
                className={`w-full text-left flex items-center gap-2 p-2 rounded transition-all ${
                  isPending && activeType === type
                    ? "opacity-50 pointer-events-none"
                    : "hover:bg-white/50"
                }`}
                disabled={isPending}
              >
                {isPending && activeType === type ? (
                  <LoaderCircle
                    className={`h-6 w-6 ${iconColor} animate-spin`}
                  />
                ) : (
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                )}
                <span className={`font-semibold ${textColor}`}>
                  {isPending && activeType === type ? "Logging..." : label}
                </span>
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
