import { useParams, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

import { exercicios } from "@/lib/exercicioFake";

export function ExercisesPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <ScrollArea className="bg-zinc-600 h-screen w-full px-2">
      <div className="relative w-full h-24 flex items-center justify-center">
        <h1 className="text-2xl font-bold mt-3">Exercícios</h1>
        <Button
          variant="ghost"
          className="absolute left-2 top-4 p-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftCircle size="28" />
        </Button>
      </div>

      <div className="mt-5 px-2 py-3 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {exercicios.map((exercise) => {
            return (
              <div
                className="px-2 py-3 bg-black h-96 rounded-lg flex flex-col space-y-6 border-2 border-zinc-100 hover:border-2 hover:border-primary transition-colors"
                key={exercise.id}
              >
                <h1 className="font-bold text-center">
                  {exercise.name_exercise}
                </h1>

                <div className="flex flex-col gap-4">
                  <p>
                    Repetições:
                    <span className="ml-2 font-semibold text-red-500">
                      {exercise.repetitions}
                    </span>
                  </p>
                  <p>
                    Intervalo:
                    <span className="ml-2 font-semibold text-red-500">
                      {exercise.interval}
                    </span>
                  </p>
                  <p>
                    Método:
                    <span className="ml-2 font-semibold text-red-500">
                      {exercise.method ?? "Nenhum"}
                    </span>
                  </p>
                  <p>
                    Carga:
                    <span className="ml-2 font-semibold text-red-500">{exercise.load}</span>
                  </p>
                  <p>
                    Cadência:
                    <span className="ml-2 font-semibold text-red-500">
                      {exercise.cadence}
                    </span>
                  </p>
                  <p className="mt-5">
                    Observações:
                    <span className="ml-2 font-extralight text-red-500">
                      {exercise?.observation}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}
