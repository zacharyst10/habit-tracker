import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function JSKanbanLoading() {
  const renderColumn = (title: string) => (
    <div className="flex-1 min-w-[300px] bg-slate-100 rounded-lg p-4">
      <h3 className="font-semibold mb-4">
        {title} (<Skeleton className="h-4 w-6 inline-block" />)
      </h3>
      <div className="space-y-3">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="space-y-1">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-3 w-20" />
                </div>
                <Badge variant="outline" className="bg-gray-100">
                  <Skeleton className="h-3 w-16" />
                </Badge>
              </div>
              <Skeleton className="h-4 w-full mt-2" />
              <Skeleton className="h-4 w-3/4 mt-1" />
              <div className="flex gap-2 mt-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-5 w-96" />
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6">
          {renderColumn("To Learn")}
          {renderColumn("In Progress")}
          {renderColumn("Completed")}
        </div>
      </div>
    </div>
  );
}
