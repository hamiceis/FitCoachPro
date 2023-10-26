import { cn } from "@/lib/utils";

interface StatsInfoProps {
  span: string
  info: string
  className?: string
}

export function StatsInfo({ span, info, className }: StatsInfoProps) {
  return (
    <div className="flex gap-2">
      <span className="text-red-500">{span}:</span>
      <h2 className={cn("italic font-bold text-lg", className)}>{info}</h2>
    </div>
  );
}
