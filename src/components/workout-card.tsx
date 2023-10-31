import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { exercisesProps } from "@/lib/datafake";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pencil, Trash2 } from "lucide-react";

interface WorkoutCardProps {
  data: {
    id: string;
    type: string;
    week_day: number;
    day_month: string;
    studentId: string;
    exercises: exercisesProps[];
  };
  index: number;
}

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export function WorkoutCard({ data, index }: WorkoutCardProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="p-2 border border-zinc-100 hover:bg-zinc-900 cursor-pointer transition-colors">
          <div className="text-center flex flex-col font-light text-xs md:text-base">
            <span className="font-semibold">{index + 1}</span>
            <p>{weekdays[data.week_day]}</p>
          </div>

          <div className="text-center font-extrabold">
            <span className="text-primary font-semibold">
              Tipo: {data.type}
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-2">
        {data?.exercises.map((exercise) => (
          <div
            className="p-2 flex flex-col gap-1 border border-zinc-100"
            key={exercise.id}
          >
            <div className="flex items-center justify-between p-1">
              <Button className="p-3">
                <Pencil size={16} />
              </Button>
              <Button className="p-3">
                <Trash2 size={16} />
              </Button>
            </div>
            <Separator className="bg-zinc-100" />
            <span>Exercicio: {exercise.name}</span>
            <span>Repetições: {exercise.reps}</span>
            <span>Sets: {exercise.sets}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
