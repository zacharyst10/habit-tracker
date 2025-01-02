export const dynamic = "force-dynamic";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CircleDashed } from "lucide-react";

export default function FinnishTrackerLoading() {
  return (
    <div className="bg-slate-50 p-6">
      <div className="w-full">
        {/* Header Section */}
        <div className="flex py-24 justify-between mb-8">
          <div>
            <Skeleton className="h-9 w-64 mb-2" />
            <Skeleton className="h-5 w-96" />
          </div>
          <Skeleton className="h-12 w-48" />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="bg-green-50">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <Skeleton className="h-10 w-16 mb-2" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="text-6xl text-green-600">🔥</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <Skeleton className="h-10 w-16 mb-2" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="text-6xl">🏆</div>
            </CardContent>
          </Card>
        </div>

        {/* Study Days Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(12)].map((_, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <Skeleton className="h-5 w-40 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <CircleDashed className="h-6 w-6 text-slate-400" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
