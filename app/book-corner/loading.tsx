import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function BookCornerLoading() {
  const BookSkeleton = () => (
    <Card className="flex flex-col justify-between">
      <CardContent className="pt-4">
        <Skeleton className="h-[180px] w-full mb-4" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </CardFooter>
    </Card>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-9 w-40" />
        <Skeleton className="h-10 w-24" />
      </div>

      <Tabs defaultValue="want-to-read" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="want-to-read">Want to Read</TabsTrigger>
          <TabsTrigger value="read">Read</TabsTrigger>
        </TabsList>

        <TabsContent value="want-to-read">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <BookSkeleton key={`want-to-read-${index}`} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="read">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <BookSkeleton key={`read-${index}`} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
