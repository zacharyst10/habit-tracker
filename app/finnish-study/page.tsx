import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  MessageCircle,
  Globe2,
  Timer,
  ListTodo,
  BookMarked,
  Settings,
  Gauge,
  ArrowRight,
  Star,
  UserCircle2,
} from "lucide-react";

export default function FinnishStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <UserCircle2 className="h-10 w-10 text-indigo-600" />
            <div>
              <p className="text-sm text-muted-foreground">Welcome back</p>
              <h2 className="font-semibold">Maria Anderson</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="gap-2">
              <Gauge className="h-4 w-4" />
              Level A1
            </Badge>
            <Settings className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Today's Overview */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-primary to-muted text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h1 className="text-2xl font-bold mb-2">
                    Today's Finnish Journey
                  </h1>
                  <p className="text-muted-foreground mb-6">
                    Continue your progress with these activities
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Timer className="h-5 w-5 text-green-600" />
                      <span>15 minutes of focused practice</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ListTodo className="h-5 w-5 text-blue-600" />
                      <span>3 activities remaining</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <Button className="">Start Today's Lesson</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Modules */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Essential Words */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Essential Words</CardTitle>
                <Badge variant="outline">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { word: "Terve", translation: "Hello", mastery: "high" },
                  {
                    word: "Kiitos",
                    translation: "Thank you",
                    mastery: "medium",
                  },
                  { word: "Anteeksi", translation: "Sorry", mastery: "low" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{item.word}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.translation}
                      </p>
                    </div>
                    <Star
                      className={`h-5 w-5 ${
                        item.mastery === "high"
                          ? "text-yellow-500"
                          : item.mastery === "medium"
                          ? "text-gray-400"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                ))}
                <Button variant="ghost" className="w-full">
                  View All Words
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Practice Conversations */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Practice Conversations</CardTitle>
                <Badge variant="outline">4 New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "At the Coffee Shop",
                  "Meeting Friends",
                  "Shopping for Groceries",
                ].map((topic, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-between"
                  >
                    {topic}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ))}
                <Button variant="ghost" className="w-full">
                  Browse More Topics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Tools */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Dictionary",
              icon: <BookMarked className="h-6 w-6" />,
              color: "bg-blue-50 text-blue-600",
            },
            {
              title: "Grammar Guide",
              icon: <BookOpen className="h-6 w-6" />,
              color: "bg-green-50 text-green-600",
            },
            {
              title: "Community",
              icon: <MessageCircle className="h-6 w-6" />,
              color: "bg-purple-50 text-purple-600",
            },
            {
              title: "Cultural Notes",
              icon: <Globe2 className="h-6 w-6" />,
              color: "bg-orange-50 text-orange-600",
            },
          ].map((tool, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center mb-3`}
                >
                  {tool.icon}
                </div>
                <h3 className="font-medium">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Quick access
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
