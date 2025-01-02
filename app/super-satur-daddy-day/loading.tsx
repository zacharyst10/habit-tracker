import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClockIcon, SparklesIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="text-center transform -rotate-2">
          <div className="inline-block bg-white p-4 rounded-xl shadow-lg">
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto" />
            <div className="flex justify-center gap-3 mt-2">
              <Badge className="bg-purple-100">
                <ClockIcon className="h-4 w-4 mr-1" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              </Badge>
              <Badge className="bg-pink-100">
                <SparklesIcon className="h-4 w-4 mr-1" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </Badge>
            </div>
          </div>
        </div>

        {/* Activity Dashboard Skeleton */}
        <div className="space-y-8">
          {/* Special Activities Section */}
          <div className="p-6 space-y-8">
            {/* Special Activities Header */}
            <div className="text-center">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto" />
            </div>

            {/* Special Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 border-2 p-4 rounded-lg animate-pulse"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div className="h-6 w-32 bg-gray-200 rounded" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-gray-200 h-6 w-20 rounded" />
                    <div className="bg-gray-200 h-6 w-16 rounded" />
                    <div className="bg-gray-200 h-6 w-24 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Control Skeleton */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-white/80 p-4 rounded-lg">
                      <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-3" />
                      <div className="space-y-2">
                        {[1, 2, 3].map((j) => (
                          <div
                            key={j}
                            className="h-4 w-full bg-gray-200 rounded animate-pulse"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline Skeleton */}
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white/80 p-3 rounded-lg flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
