import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, CalendarDays } from "lucide-react";

interface MealItem {
  image: string;
  calories: number;
}

interface Meal {
  name: string;
  timeSlot: string;
  items: MealItem[];
  totalCalories: number;
}

const meals: Meal[] = [
  {
    name: "Breakfast",
    timeSlot: "05.00 am - 07.00 am",
    items: [
      { image: "/placeholder.svg?height=60&width=60", calories: 250 },
      { image: "/placeholder.svg?height=60&width=60", calories: 10 },
      { image: "/placeholder.svg?height=60&width=60", calories: 120 },
    ],
    totalCalories: 380,
  },
  {
    name: "Lunch",
    timeSlot: "12.30 pm - 01.00 pm",
    items: [
      { image: "/placeholder.svg?height=60&width=60", calories: 350 },
      { image: "/placeholder.svg?height=60&width=60", calories: 10 },
      { image: "/placeholder.svg?height=60&width=60", calories: 120 },
    ],
    totalCalories: 420,
  },
  {
    name: "Dinner",
    timeSlot: "06.00 pm - 08.00 pm",
    items: [
      { image: "/placeholder.svg?height=60&width=60", calories: 100 },
      { image: "/placeholder.svg?height=60&width=60", calories: 120 },
    ],
    totalCalories: 220,
  },
];

export default function Home() {
  return (
    <div className="text-3xl font-bold grid grid-cols-3 pt-10">
      <div className="col-span-1 ">
        <div className="pb-10 ">Exercise (The Road)</div>
        <Card className="w-[450px] bg-black text-center">
          <CardHeader>
            <CardTitle className="text-white">
              You gained 2kg in a month keep it up
            </CardTitle>
            <CardDescription className="text-3xl pt-10 text-white">
              200g of protein
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5"></div>
                <div className="flex flex-col space-y-1.5"></div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Progress className="" value={50} max={200} />
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-1">
        <div>JS Mastery</div>
        <div className="grid grid-cols-2 gap-5">
          <Card>
            <CardHeader>js concept 1</CardHeader>
            <CardContent className=" text-sm">
              this is the content of the card
              <CardDescription>
                this is the description of the card
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>js concept 2</CardHeader>
            <CardContent className=" text-sm">
              this is the content of the card
              <CardDescription>
                this is the description of the card
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>js concept 3</CardHeader>
            <CardContent className=" text-sm">
              this is the content of the card
              <CardDescription>
                this is the description of the card
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>js concept 4</CardHeader>
            <CardContent className=" text-sm">
              this is the content of the card
              <CardDescription>
                this is the description of the card
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className=" p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Meal Plan</h1>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full bg-[#e6ff00] hover:bg-[#d1e600]"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        <Button variant="outline" className="w-full justify-between mb-6">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            <span>Sat, 09 September 2023</span>
          </div>
          <svg
            className=" h-4 w-4"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.64245 9.99395 7.35753 9.99395 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>

        <div className="space-y-4">
          {meals.map((meal, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{meal.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {meal.timeSlot}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {meal.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <img
                          src={item.image}
                          alt="Food item"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground block text-center mt-1">
                        {item.calories} kcal
                      </span>
                    </div>
                  ))}
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-[60px] h-[60px] rounded-full"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-end">
                  <span className="text-2xl font-bold">
                    {meal.totalCalories} kcal
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Calories Analysis</h2>
              <Button variant="link" className="text-muted-foreground">
                See Detail
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Carbo</span>
                  <span>43.5%</span>
                </div>
                <Progress
                  value={43.5}
                  className="bg-gray-200 h-2 [&>div]:bg-[#FFB572]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fat</span>
                  <span>27.5%</span>
                </div>
                <Progress
                  value={27.5}
                  className="bg-gray-200 h-2 [&>div]:bg-[#FF8A8A]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Protein</span>
                  <span>73.1%</span>
                </div>
                <Progress
                  value={73.1}
                  className="bg-gray-200 h-2 [&>div]:bg-[#4A7AFF]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fiber</span>
                  <span>52.5%</span>
                </div>
                <Progress
                  value={52.5}
                  className="bg-gray-200 h-2 [&>div]:bg-[#65D390]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
