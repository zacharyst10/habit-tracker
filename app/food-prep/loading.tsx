import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto p-4 md:p-8">
        {/* Header Skeleton */}
        <header className="flex items-center justify-between mb-8 bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-8 w-32 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Daily Progress Card Skeleton */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-primary to-muted text-white border-none shadow-md">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <Skeleton className="h-8 w-40 bg-white/20" />
                <Skeleton className="h-10 w-[120px] bg-white/20" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Skeleton className="h-4 w-32 mb-2 bg-white/20" />
                  <Skeleton className="h-16 w-24 mb-4 bg-white/20" />
                  <Skeleton className="h-4 w-full bg-white/20" />
                </div>
                <div>
                  <Skeleton className="h-4 w-32 mb-2 bg-white/20" />
                  <Skeleton className="h-16 w-24 bg-white/20" />
                  <Skeleton className="h-4 w-40 mt-4 bg-white/20" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>

          {/* Protein Entry Card Skeleton */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-10 w-24" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </CardContent>
            <CardContent>
              <Skeleton className="h-64 w-full" />
            </CardContent>
          </Card>

          {/* Weekly Overview Card Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-36" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
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
