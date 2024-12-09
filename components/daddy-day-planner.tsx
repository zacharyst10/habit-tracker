import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  StarIcon,
  Gamepad2Icon,
  PizzaIcon,
  TreePineIcon,
  RocketIcon,
  HeartIcon,
  Trophy,
} from "lucide-react";

export function DaddyDayPlanner() {
  return (
    <Card className="border-none shadow-none bg-muted">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              🎮 Super-Satur-DADDY-Day! 🌟
            </h2>
          </div>
          <Badge variant="outline" className="bg-purple-100 ml-5">
            Next Mission: Saturday!
          </Badge>
        </div>

        <div className="grid gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <Card className="relative bg-white/50 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <RocketIcon className="h-6 w-6 text-purple-500" />
                  <h3 className="font-bold text-lg text-purple-700">
                    Kid 1's Adventure Zone
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <Gamepad2Icon className="h-8 w-8 text-purple-500" />
                    <span className="text-sm">Gaming Quest</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <PizzaIcon className="h-8 w-8 text-purple-500" />
                    <span className="text-sm">Pizza Party</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <StarIcon className="h-8 w-8 text-purple-500" />
                    <span className="text-sm">Add Activity</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <Card className="relative bg-white/50 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <TreePineIcon className="h-6 w-6 text-blue-500" />
                  <h3 className="font-bold text-lg text-blue-700">
                    Kid 2's Fun Factory
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <TreePineIcon className="h-8 w-8 text-blue-500" />
                    <span className="text-sm">Park Adventure</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <RocketIcon className="h-8 w-8 text-blue-500" />
                    <span className="text-sm">Science Fun</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <StarIcon className="h-8 w-8 text-blue-500" />
                    <span className="text-sm">Add Activity</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <Card className="relative bg-white/50 backdrop-blur-sm border-2 border-green-200 hover:border-green-300 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <HeartIcon className="h-6 w-6 text-green-500" />
                  <h3 className="font-bold text-lg text-green-700">
                    Family Squad Goals
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <Trophy className="h-8 w-8 text-green-500" />
                    <span className="text-sm">Game Night</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <PizzaIcon className="h-8 w-8 text-green-500" />
                    <span className="text-sm">Dinner Time</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 px-4 flex flex-col items-center gap-2 bg-white/50"
                  >
                    <StarIcon className="h-8 w-8 text-green-500" />
                    <span className="text-sm">Add Activity</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 text-center">
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">
              Today's Dad Level Progress
            </h4>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="bg-purple-100">
                <Trophy className="h-4 w-4 mr-1" />
                Fun Master
              </Badge>
              <Badge variant="secondary" className="bg-blue-100">
                <HeartIcon className="h-4 w-4 mr-1" />
                Memory Maker
              </Badge>
              <Badge variant="secondary" className="bg-green-100">
                <StarIcon className="h-4 w-4 mr-1" />
                Super Dad
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
