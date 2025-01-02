import { getTopicsWithStatus, updateTopicStatus } from "@/actions/js-mastery";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Topic {
  id: number;
  topic: string;
  description: string;
  difficulty: string;
  month: string;
  status: string;
}

// function InitializeButton() {
//   return (
//     <form action={initializeTopics}>
//       <button type="submit">Initialize Topics</button>
//     </form>
//   );
// }

export default async function JSKanban() {
  const topics = await getTopicsWithStatus();

  const todoTopics = topics.filter((t) => t.status === "todo");
  const inProgressTopics = topics.filter((t) => t.status === "in-progress");
  const completedTopics = topics.filter((t) => t.status === "completed");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      case "expert":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const renderColumn = (title: string, items: Topic[]) => (
    <div className="flex-1 min-w-[300px] bg-slate-100 rounded-lg p-4">
      <h3 className="font-semibold mb-4">
        {title} ({items.length})
      </h3>
      <div className="space-y-3">
        {items.map((topic) => (
          <Card key={topic.id} className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="space-y-1">
                  <h4 className="font-medium">{topic.topic}</h4>
                  <p className="text-xs text-muted-foreground">{topic.month}</p>
                </div>
                <Badge
                  variant="outline"
                  className={getDifficultyColor(topic.difficulty)}
                >
                  {topic.difficulty}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {topic.description}
              </p>
              <div className="flex gap-2 mt-3">
                {topic.status !== "todo" && (
                  <form
                    action={async () => {
                      "use server";
                      await updateTopicStatus(topic.id, "todo");
                    }}
                  >
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      ← Move to Todo
                    </button>
                  </form>
                )}
                {topic.status !== "in-progress" && (
                  <form
                    action={async () => {
                      "use server";
                      await updateTopicStatus(topic.id, "in-progress");
                    }}
                  >
                    <button className="text-sm text-purple-600 hover:text-purple-800">
                      Move to In Progress
                    </button>
                  </form>
                )}
                {topic.status !== "completed" && (
                  <form
                    action={async () => {
                      "use server";
                      await updateTopicStatus(topic.id, "completed");
                    }}
                  >
                    <button className="text-sm text-green-600 hover:text-green-800">
                      Move to Completed →
                    </button>
                  </form>
                )}
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
          <h1 className="text-3xl font-bold">JavaScript Learning Path</h1>
          {/* <InitializeButton /> */}
          <p className="text-muted-foreground">
            Track your progress through advanced JavaScript concepts
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6">
          {renderColumn("To Learn", todoTopics)}
          {renderColumn("In Progress", inProgressTopics)}
          {renderColumn("Completed", completedTopics)}
        </div>
      </div>
    </div>
  );
}
