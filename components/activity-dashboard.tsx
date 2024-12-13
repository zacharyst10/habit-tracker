"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Gamepad2Icon,
  PizzaIcon,
  RocketIcon,
  HeartIcon,
  Trophy,
  StarIcon,
  ZapIcon,
  SmileIcon,
  Dice6Icon,
} from "lucide-react";
import { SpecialActivities } from "@/components/activity-catalog";
import { format } from "date-fns";

type Activity = {
  name: string;
  icon: React.ReactNode;
  duration: string;
  costLevel: string;
  seasonality: string;
  color: string;
  textColor: string;
};

export function ActivityDashboard() {
  const [nextMission, setNextMission] = useState<{
    activity: Activity;
    date: Date;
    kid: string;
  } | null>(null);

  const handleActivityScheduled = (
    activity: Activity,
    date: Date,
    kid: string
  ) => {
    setNextMission({ activity, date, kid });
  };

  return (
    <div className="space-y-8">
      {/* Fun Zone Cards */}
      <SpecialActivities onActivityScheduled={handleActivityScheduled} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Control */}
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 transform hover:-rotate-1 transition-all hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <RocketIcon className="h-6 w-6 text-purple-500" />
              </div>
              <h2 className="text-xl font-bold text-purple-700">
                Mission Control! 🎮
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white/80 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="font-bold text-purple-600 flex items-center gap-2">
                  <ZapIcon className="h-5 w-5" />
                  Next Mission
                </h3>
                {nextMission ? (
                  <div className="mt-2">
                    <p className="font-semibold">{nextMission.activity.name}</p>
                    <p className="text-sm text-muted-foreground">
                      With: {nextMission.kid}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(nextMission.date, "MMMM d, yyyy")}
                    </p>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    No mission scheduled yet
                  </p>
                )}
              </div>
              <div className="bg-white/80 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="font-bold text-purple-600 flex items-center gap-2">
                  <ZapIcon className="h-5 w-5" />
                  Power-Ups Required!
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <PizzaIcon className="h-4 w-4 text-purple-400" />
                    Snack Supply Station
                  </li>
                  <li className="flex items-center gap-2">
                    <Gamepad2Icon className="h-4 w-4 text-purple-400" />
                    Controller Check
                  </li>
                  <li className="flex items-center gap-2">
                    <SmileIcon className="h-4 w-4 text-purple-400" />
                    Fun Attitude Loaded!
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fun Timeline */}
        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 transform hover:rotate-1 transition-all hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Dice6Icon className="h-6 w-6 text-blue-500" />
              </div>
              <h2 className="text-xl font-bold text-blue-700">
                Adventure Timeline! 🎲
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "2:00 PM - Game Selection Ceremony! 🎮",
                "2:30 PM - Epic Gaming Battle! ⚔️",
                "3:00 PM - Snack Attack Break! 🍕",
                "3:30 PM - Final Boss Rush! 🏆",
              ].map((time, index) => (
                <div
                  key={index}
                  className="bg-white/80 p-3 rounded-lg transform hover:translate-x-2 transition-transform flex items-center gap-3"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      [
                        "bg-blue-400",
                        "bg-purple-400",
                        "bg-pink-400",
                        "bg-green-400",
                      ][index]
                    }`}
                  />
                  {time}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Zone */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-green-700">
              Today&apos;s Epic Quests! 🎯
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Trophy className="h-8 w-8 text-yellow-500" />,
                title: "Gaming Champion",
                desc: "Win with style!",
                color: "bg-yellow-50",
              },
              {
                icon: <HeartIcon className="h-8 w-8 text-pink-500" />,
                title: "Team Player",
                desc: "High five master",
                color: "bg-pink-50",
              },
              {
                icon: <StarIcon className="h-8 w-8 text-purple-500" />,
                title: "Fun Master",
                desc: "Keep the fun going!",
                color: "bg-purple-50",
              },
            ].map((quest, index) => (
              <div
                key={index}
                className={`${quest.color} p-4 rounded-xl text-center transform hover:scale-105 transition-transform`}
              >
                <div className="flex justify-center mb-2">{quest.icon}</div>
                <h3 className="font-bold">{quest.title}</h3>
                <p className="text-sm text-muted-foreground">{quest.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fun Meter */}
      <div className="text-center">
        <div className="inline-block bg-white/90 p-4 rounded-xl shadow-lg transform hover:rotate-2 transition-transform">
          <h4 className="font-bold text-purple-600 mb-2">Current Fun Level:</h4>
          <div className="flex justify-center gap-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="text-2xl animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  🌟
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}