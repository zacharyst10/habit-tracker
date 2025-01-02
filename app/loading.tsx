import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Brain, Book, Dumbbell, Gamepad2, Code } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-2">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Protein Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Protein Track
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full">
                <Dumbbell className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-2 w-full" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finnish Study Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Finnish Study
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full">
                <Brain className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-12" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <Skeleton className="h-4 w-36" />
              </div>
            </CardContent>
          </Card>

          {/* Reading Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Reading Progress
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full">
                <Book className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-8 w-12" />
                  <Skeleton className="h-5 w-28" />
                </div>
                <Skeleton className="h-4 w-40" />
              </div>
            </CardContent>
          </Card>

          {/* Next Activity Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Next Activity
              </CardTitle>
              <div className="p-2 bg-primary/10 rounded-full">
                <Gamepad2 className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Topics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg font-medium">
                  JavaScript Learning Path
                </CardTitle>
                <Skeleton className="h-4 w-48 mt-1" />
              </div>
              <div className="p-2 bg-primary/10 rounded-full">
                <Code className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Skeleton className="h-5 w-20" />
                    </div>
                    <Skeleton className="h-5 w-32" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
