import { Progress } from "@/components/ui/progress";

interface ProteinProgressProps {
  currentAmount: number;
  goalAmount: number;
}

export function ProteinProgress({
  currentAmount,
  goalAmount,
}: ProteinProgressProps) {
  const percentage = Math.min((currentAmount / goalAmount) * 100, 100);

  return (
    <div className="space-y-2 w-full max-w-md">
      <div className="flex justify-between text-sm">
        <span>
          Progress: {currentAmount}g / {goalAmount}g
        </span>
        <span>{percentage.toFixed(1)}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
