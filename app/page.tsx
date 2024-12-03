import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, ChevronDown, Bell, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4 md:p-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="User avatar" src="/placeholder.svg" />
            <AvatarFallback>JW</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">Jenny Wilson</h1>
            <Button variant="ghost" size="icon">
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
            <Card className="flex-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Body Overview</h2>
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
                <div className="bg-black text-white rounded-lg p-6">
                  <div className="text-center mb-6">
                    <p className="text-lg">
                      You&apos;ve gain <span className="font-bold">2kg</span> in
                      a month keep it up!
                    </p>
                    <p className="text-gray-400">Still need to gain</p>
                    <p className="text-4xl font-bold mt-2">950 kcal</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <Progress
                          value={35}
                          className="h-20 w-20 rotate-180"
                          indicatorColor="bg-[#98FF98]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span>35%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Protein</p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <Progress
                          value={65}
                          className="h-20 w-20 rotate-180"
                          indicatorColor="bg-[#FFD700]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span>65%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Carbo</p>
                    </div>
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto">
                        <Progress
                          value={65}
                          className="h-20 w-20 rotate-180"
                          indicatorColor="bg-[#FF6B6B]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span>65%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Fat</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">My Daily Target</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <div className="w-6 h-6 text-blue-500">💧</div>
                        </div>
                        <h3 className="font-semibold">Water</h3>
                      </div>
                      <p className="text-sm text-gray-500">Total Cons</p>
                      <p className="text-xl font-bold">2300 ml</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <div className="w-6 h-6 text-orange-500">🔥</div>
                        </div>
                        <h3 className="font-semibold">Calories</h3>
                      </div>
                      <p className="text-sm text-gray-500">Total Cons</p>
                      <p className="text-xl font-bold">890 kCal</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <div className="w-6 h-6 text-orange-500">⚖️</div>
                        </div>
                        <h3 className="font-semibold">Weight</h3>
                      </div>
                      <p className="text-sm text-gray-500">My Weight</p>
                      <p className="text-xl font-bold">62 Kg</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <div className="w-6 h-6 text-red-500">❤️</div>
                        </div>
                        <h3 className="font-semibold">BPM</h3>
                      </div>
                      <p className="text-sm text-gray-500">My Weight</p>
                      <p className="text-xl font-bold">110 BPM</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">New Activity</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-[#DCFCE7]">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Drinking Tracker
                      </h3>
                      <p className="text-sm">
                        Stay hydrated, it&apos;s nature&apos;s best refreshment!
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Daily Exercise
                      </h3>
                      <p className="text-sm">
                        Stay active, it&apos;s key to good health!
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-[#262626] text-white">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Sleep Tracker
                      </h3>
                      <p className="text-sm">
                        Good sleep is crucial for health!
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full text-white"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/3">
          <Card>
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
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Calories Analysis</h3>
                  <Button variant="link" className="text-sm">
                    See Detail
                  </Button>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Carbo</span>
                      <span className="text-sm">43.5%</span>
                    </div>
                    <Progress
                      value={43.5}
                      className="h-2"
                      indicatorColor="bg-orange-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Fat</span>
                      <span className="text-sm">27.5%</span>
                    </div>
                    <Progress
                      value={27.5}
                      className="h-2"
                      indicatorColor="bg-red-500"
                    />
                  </div>
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
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
