import { getStudyDays, toggleStudyDay } from "@/actions/finnish-study";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CircleDashed } from "lucide-react";

export default async function FinnishTracker() {
  const studyDays = await getStudyDays();
  const today = new Date().toISOString().split("T")[0];
  const todayCompleted = studyDays.some(
    (day) => day.date === today && day.completed
  );

  // Calculate streak
  let currentStreak = 0;
  let maxStreak = 0;
  let tempStreak = 0;

  studyDays.reverse().forEach((day) => {
    if (day.completed) {
      tempStreak++;
      maxStreak = Math.max(maxStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  });

  currentStreak = tempStreak;

  return (
    <div className=" bg-slate-50 p-6">
      <div className="w-full ">
        {/* Header Section */}
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Finnish Study Tracker</h1>
            <p className="text-muted-foreground mt-1">
              Track your daily 30-minute Finnish study sessions
            </p>
          </div>
          <form
            action={async () => {
              "use server";
              await toggleStudyDay(today, !todayCompleted);
            }}
          >
            <button
              className={`px-6 py-3 rounded-lg text-lg font-medium ${
                todayCompleted
                  ? "bg-gray-200 text-gray-600"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
              disabled={todayCompleted}
            >
              {todayCompleted
                ? "Today's Session Logged! ✓"
                : "Log Today's Study Session"}
            </button>
          </form>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Card className="bg-green-50">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <div className="text-4xl font-bold">{currentStreak}</div>
                <div className="text-lg text-muted-foreground">
                  Current Streak
                </div>
              </div>
              <div className="text-6xl text-green-600">🔥</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <div className="text-4xl font-bold">{maxStreak}</div>
                <div className="text-lg text-muted-foreground">
                  Longest Streak
                </div>
              </div>
              <div className="text-6xl">🏆</div>
            </CardContent>
          </Card>
        </div>

        {/* Study Days Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {studyDays.map((day) => (
            <form
              key={day.id}
              action={async () => {
                "use server";
                await toggleStudyDay(day.date, !day.completed);
              }}
            >
              <button className="w-full text-left">
                <Card
                  className={`${
                    day.completed ? "bg-green-50" : ""
                  } hover:shadow-md transition-shadow`}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium">
                        {new Date(day.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        30 minutes of study
                      </div>
                    </div>
                    {day.completed ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <CircleDashed className="h-6 w-6 text-slate-400" />
                    )}
                  </CardContent>
                </Card>
              </button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
