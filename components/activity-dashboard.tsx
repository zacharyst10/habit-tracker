"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Gamepad2Icon,
  PizzaIcon,
  RocketIcon,
  ZapIcon,
  SmileIcon,
  Dice6Icon,
} from "lucide-react";
import { SpecialActivities } from "@/components/activity-catalog";
import { DatabaseActivity } from "@/types/super-satur-daddy-day";

type Props = {
  nextActivity: DatabaseActivity | null;
};

export function ActivityDashboard({ nextActivity }: Props) {
  return (
    <div className="space-y-8">
      <SpecialActivities />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                {nextActivity ? (
                  <div className="mt-2">
                    <p className="font-semibold">
                      {nextActivity.activity_name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      With: {nextActivity.kid_name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(
                        nextActivity.scheduled_date
                      ).toLocaleDateString()}
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
    </div>
  );
}
