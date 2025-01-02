import React, { useState } from "react";
import {
  VideoIcon,
  DramaIcon,
  GamepadIcon,
  Fish,
  ShoppingBagIcon,
  TreePine,
  UtensilsIcon,
  TreesIcon,
  SnowflakeIcon,
} from "lucide-react";
import { ActivityModal } from "./activity-modal";

interface Activity {
  name: string;
  icon: React.ReactNode;
  duration: string;
  costLevel: string;
  seasonality: string;
  color: string;
  textColor: string;
}

const activities = [
  {
    name: "Movie Theater Date",
    icon: <VideoIcon className="h-5 w-5" />,
    duration: "2-3 hours",
    costLevel: "$$",
    seasonality: "Any",
    color: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    name: "Hale Center Theater",
    icon: <DramaIcon className="h-5 w-5" />,
    duration: "2-3 hours",
    costLevel: "$$$",
    seasonality: "Any",
    color: "bg-purple-100",
    textColor: "text-purple-700",
  },
  {
    name: "Arcade",
    icon: <GamepadIcon className="h-5 w-5" />,
    duration: "1-2 hours",
    costLevel: "$$",
    seasonality: "Any",
    color: "bg-pink-100",
    textColor: "text-pink-700",
  },
  {
    name: "Aquarium",
    icon: <Fish className="h-5 w-5" />,
    duration: "2-3 hours",
    costLevel: "$$",
    seasonality: "Any",
    color: "bg-cyan-100",
    textColor: "text-cyan-700",
  },
  {
    name: "Shopping at the Mall",
    icon: <ShoppingBagIcon className="h-5 w-5" />,
    duration: "1-2 hours",
    costLevel: "$$",
    seasonality: "Any",
    color: "bg-rose-100",
    textColor: "text-rose-700",
  },
  {
    name: "Zoo",
    icon: <TreePine className="h-5 w-5" />,
    duration: "3-4 hours",
    costLevel: "$$",
    seasonality: "Spring/Summer/Fall",
    color: "bg-green-100",
    textColor: "text-green-700",
  },
  {
    name: "Go Out to Dinner",
    icon: <UtensilsIcon className="h-5 w-5" />,
    duration: "1-2 hours",
    costLevel: "$$",
    seasonality: "Any",
    color: "bg-orange-100",
    textColor: "text-orange-700",
  },
  {
    name: "Go to the Park",
    icon: <TreesIcon className="h-5 w-5" />,
    duration: "1-2 hours",
    costLevel: "$",
    seasonality: "Spring/Summer/Fall",
    color: "bg-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    name: "Sledding",
    icon: <SnowflakeIcon className="h-5 w-5" />,
    duration: "1-2 hours",
    costLevel: "$",
    seasonality: "Winter",
    color: "bg-sky-100",
    textColor: "text-sky-700",
  },
];

interface SpecialActivitiesProps {
  // eslint-disable-next-line no-unused-vars
  onActivityScheduled: (activity: Activity, date: Date, kid: string) => void;
}

export function SpecialActivities({
  onActivityScheduled,
}: SpecialActivitiesProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActivityClick = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const handleSaveActivity = (date: Date, kid: string) => {
    if (selectedActivity) {
      onActivityScheduled(selectedActivity, date, kid);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text mb-2">
          Special Outings
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity) => (
          <div
            key={activity.name}
            className={`${activity.color} border-2 cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-lg p-4 rounded-lg`}
            onClick={() => handleActivityClick(activity)}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`${activity.color} p-2 rounded-full`}>
                {activity.icon}
              </div>
              <h3 className={`${activity.textColor} text-lg font-semibold`}>
                {activity.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/50 text-sm px-2 py-1 rounded">
                {activity.duration}
              </span>
              <span className="bg-white/50 text-sm px-2 py-1 rounded">
                {activity.costLevel}
              </span>
              <span className="bg-white/50 text-sm px-2 py-1 rounded">
                {activity.seasonality}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedActivity && (
        <ActivityModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          activity={selectedActivity.name}
          onSave={handleSaveActivity}
        />
      )}
    </div>
  );
}
