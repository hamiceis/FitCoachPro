import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Pencil, Trash2, Plus } from "lucide-react";
import { FormExercise } from "./form-exercise";
import { Workouts } from "@/types/workout.types";


interface WorkoutCardProps {
  data: Workouts;
  id: string;
  index: number;
}

export const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

export function WorkoutCard({ data, id, index }: WorkoutCardProps) {

  const deleteExercise = async (id: string)=> {
    console.log(id)
  }
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


      
      <PopoverContent className="w-80 h-80 px-2 py-2 overflow-y-scroll">
        {data.exercises && data.exercises.map((exercise) => (
          <div
            className="px-2 pt-1 mt-2 flex flex-col gap-1 border border-zinc-100"
            key={exercise.id}
          >
            <div className="flex items-center justify-between">
              <FormExercise actionType="Edit" exerciseId={exercise.id} exerciseData={exercise}>
                <Button className="p-3">
                  <Pencil size={16} />
                </Button>
              </FormExercise>

              <Button className="p-3" onClick={() => deleteExercise(exercise.id)}>
                <Trash2 size={16} />
              </Button>
            </div>
            <Separator className="bg-zinc-100" />
            <span>Exercicio: {exercise.name_exercise}</span>
            <span>Repetições: {exercise.repetitions}</span>
            <span>Intervalo: {exercise.interval}</span>
            <span>Carga: {exercise.load}</span>
            <span>Cadencia: {exercise.cadence}</span>
            <span>Método: {exercise.method}</span>
            <p className="mt-4 italic text-muted-foreground">Observação: {exercise.observation}</p>
          </div>
        ))}
        <div className="w-full mt-2">
          <FormExercise actionType="Create" workoutId={id}>
            <Button className="w-full flex gap-4">
              <Plus />
              Adicionar Exercício
            </Button>
          </FormExercise>
        </div>
      </PopoverContent>
    
    </Popover>
  );
}
