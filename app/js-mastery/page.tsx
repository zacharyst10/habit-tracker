import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  CodeIcon,
  GraduationCapIcon,
  CheckCircleIcon,
  BrainCircuitIcon,
  LayersIcon,
  GitBranchIcon,
  ChevronRightIcon,
} from "lucide-react";

export default function JSMastery() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className=" mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">JavaScript Mastery</h1>
            <p className="text-muted-foreground mt-2">
              Your journey to JavaScript excellence
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              Level: Intermediate
            </Badge>
            <Button>Continue Learning</Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className=" max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Progress",
              value: "33%",
              icon: <LayersIcon className="h-5 w-5" />,
              detail: "4 of 12 modules",
            },
            {
              title: "Practice",
              value: "56%",
              icon: <CodeIcon className="h-5 w-5" />,
              detail: "28 of 50 problems",
            },
            {
              title: "Projects",
              value: "3",
              icon: <GitBranchIcon className="h-5 w-5" />,
              detail: "Completed",
            },
            {
              title: "Mastery",
              value: "Mid",
              icon: <BrainCircuitIcon className="h-5 w-5" />,
              detail: "Intermediate",
            },
          ].map((stat, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-slate-100">{stat.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className=" max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Current Module */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Advanced Functions</CardTitle>
              <p className="text-sm text-muted-foreground">
                Current Module Progress
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Closures",
                  "Higher-Order Functions",
                  "Function Composition",
                  "Currying",
                ].map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-slate-100"
                  >
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Key Concepts</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Understanding lexical scope",
                    "Function as first-class citizens",
                    "Pure functions and side effects",
                    "Functional programming patterns",
                  ].map((concept, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Learning Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: <BookOpenIcon />, label: "Documentation" },
                  { icon: <CodeIcon />, label: "Practice Problems" },
                  { icon: <GraduationCapIcon />, label: "Video Tutorials" },
                ].map((resource, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    {resource.icon}
                    {resource.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Learning Path</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Prerequisites</p>
                  <div className="space-y-1">
                    {[
                      "Basic JavaScript Syntax",
                      "ES6+ Features",
                      "DOM Manipulation",
                    ].map((item, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="w-full justify-start"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Next Steps</p>
                  <div className="space-y-1">
                    {["Async Programming", "Design Patterns", "Testing"].map(
                      (item, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="w-full justify-start"
                        >
                          {item}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
