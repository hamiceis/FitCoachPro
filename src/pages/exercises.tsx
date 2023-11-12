import { useParams, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

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
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 7 }).map((_, i) => {
            return (
            <div 
            className="bg-black h-96 rounded-lg"
            key={i}>
              {i + id!}
            </div>
              )
          })}
        </div>
      </div>
    </ScrollArea>
  );
}
