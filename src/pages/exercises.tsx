import { useParams } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
export function ExercisesPage() {
const { id } = useParams()

  return (
    <ScrollArea className="bg-zinc-600 h-max md:h-screen w-full p-4">
      <h1 className="text-center text-2xl font-bold mt-3">Exercícios</h1>

      <div className="mt-5 flex flex-col gap-4">
        {id}
      </div>
    </ScrollArea>
  )
}