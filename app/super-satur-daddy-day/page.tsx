export const dynamic = "force-dynamic";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { ClockIcon, SparklesIcon } from "lucide-react";
import { ActivityDashboard } from "@/components/activity-dashboard";
import { getNextActivity } from "@/actions/super-satur-daddy-day";

export default async function ActivityRoute() {
  const nextActivity = await getNextActivity();
  return (
    <div className="p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="space-y-8">
        <div className="text-center transform -rotate-2">
          <div className="inline-block bg-white p-4 rounded-xl shadow-lg transform hover:rotate-2 transition-transform">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
              🎮 Super-Satur-Daddy-Day 🚀
            </h1>
            <div className="flex justify-center gap-3 mt-2">
              <Badge className="bg-purple-100 transform -rotate-3 hover:rotate-3 transition-transform">
                <ClockIcon className="h-4 w-4 mr-1" />
                2:00 PM
              </Badge>
              <Badge className="bg-pink-100 transform rotate-3 hover:-rotate-3 transition-transform">
                <SparklesIcon className="h-4 w-4 mr-1" />
                SUPER FUN MODE
              </Badge>
            </div>
          </div>
        </div>

        <ActivityDashboard nextActivity={nextActivity} />
      </div>
    </div>
  );
}
