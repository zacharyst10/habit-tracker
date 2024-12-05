import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  ChevronDown,
  Bell,
  Search,
  Code,
  Dumbbell,
  UtensilsCrossed,
  Languages,
  Book,
  BookOpen,
  CheckCircle2,
  Brain,
  Coffee,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 md:p-6 ">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="User avatar" src="/placeholder.svg" />
            <AvatarFallback>ZS</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h1 className="text-xl text-primary font-semibold">Zach Stout </h1>
            <Button size="icon" className="rounded-full">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1 bg-muted border-none shadow-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Progress Overview</h2>
                  <Select defaultValue="monthly">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="bg-black text-white rounded-3xl p-6">
                  <div className="text-center mb-6">
                    <p className="text-lg">Track your daily goals</p>
                    <p className="text-4xl font-bold mt-2">5/7 Complete</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <Progress
                          value={75}
                          className="h-20 w-20 rotate-180"
                          indicatorColor="bg-[#98FF98]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span>75%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Reading</p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <Progress
                          value={60}
                          className="h-20 w-20 rotate-180"
                          indicatorColor="bg-[#FFD700]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span>60%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Finnish</p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <Progress
                          value={45}
                          className="h-20 w-20 rotate-180"
                          indicatorColor="bg-[#FF6B6B]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span>45%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Coding</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-muted border-none shadow-none">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Daily Goals</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="font-semibold">Reading</h3>
                      </div>
                      <p className="text-sm text-gray-500">Daily Goal</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">50 pages</p>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full"
                        >
                          <CheckCircle2 className="h-6 w-6" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Brain className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="font-semibold">Finnish</h3>
                      </div>
                      <p className="text-sm text-gray-500">Daily Goal</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">20 words</p>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full"
                        >
                          <CheckCircle2 className="h-6 w-6" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Code className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="font-semibold">Coding</h3>
                      </div>
                      <p className="text-sm text-gray-500">Daily Goal</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">2 problems</p>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full"
                        >
                          <CheckCircle2 className="h-6 w-6" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Coffee className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="font-semibold">Study Time</h3>
                      </div>
                      <p className="text-sm text-gray-500">Daily Goal</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-bold">2 hours</p>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="rounded-full"
                        >
                          <CheckCircle2 className="h-6 w-6" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-muted border-none shadow-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Current Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-primary">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-1">
                        Book Tracking
                      </h3>
                      <p className="text-sm">Pages read today: 45</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full text-white"
                    >
                      <Book className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Finnish Progress
                      </h3>
                      <p className="text-sm">Vocabulary: 150 words</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                    >
                      <Languages className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-[#262626] text-white">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        JavaScript Mastery
                      </h3>
                      <p className="text-sm">Current: Advanced Arrays</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full text-white"
                    >
                      <Code className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Exercise Tracker
                      </h3>
                      <p className="text-sm">Today: 45 min completed</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                    >
                      <Dumbbell className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Food Prep</h3>
                      <p className="text-sm">Next: Meal planning</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                    >
                      <UtensilsCrossed className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/3">
          <Card className="bg-muted border-none shadow-none">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">My Meal Plan</h2>
                <div className="flex items-center gap-2">
                  <p className="text-sm">Sat, 09 September 2023</p>
                  <Button variant="ghost" size="icon">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Breakfast</h3>
                        <p className="text-sm text-gray-500">
                          05.00 am - 07.00 am
                        </p>
                      </div>
                      <p className="font-semibold">380 kcal</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="Meal 1" src="/placeholder.svg" />
                        <AvatarFallback>M1</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="Meal 2" src="/placeholder.svg" />
                        <AvatarFallback>M2</AvatarFallback>
                      </Avatar>
                      <Button size="icon" variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Lunch</h3>
                        <p className="text-sm text-gray-500">
                          12.30 pm - 01.00 pm
                        </p>
                      </div>
                      <p className="font-semibold">420 kcal</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="Meal 1" src="/placeholder.svg" />
                        <AvatarFallback>M1</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="Meal 2" src="/placeholder.svg" />
                        <AvatarFallback>M2</AvatarFallback>
                      </Avatar>
                      <Button size="icon" variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Dinner</h3>
                        <p className="text-sm text-gray-500">
                          06.00 pm - 08.00 pm
                        </p>
                      </div>
                      <p className="font-semibold">220 kcal</p>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage alt="Meal 1" src="/placeholder.svg" />
                        <AvatarFallback>M1</AvatarFallback>
                      </Avatar>
                      <Button size="icon" variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="mt-6 space-y-4">
                <CardHeader className="">
                  <div className="font-semibold flex justify-between">
                    <div>The only macros that matter!</div>
                    <Button variant="link" asChild>
                      <Link href="/food-prep">See Detail</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Protein</span>
                      <span className="text-sm">73.1%</span>
                    </div>
                    <Progress
                      value={73.1}
                      className="h-2"
                      indicatorColor="bg-blue-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Fiber</span>
                      <span className="text-sm">52.5%</span>
                    </div>
                    <Progress
                      value={52.5}
                      className="h-2"
                      indicatorColor="bg-green-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
