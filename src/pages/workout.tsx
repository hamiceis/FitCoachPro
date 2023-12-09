import { weekdays } from "@/components/workout-card"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { useAuthTokenContext } from "@/hooks/useAuthToken";
import { useFetch } from "@/hooks/useFetch";
import { Workouts } from "@/types/workout.types";

export function Workout() {
  const { authToken } = useAuthTokenContext()
  
  if(!authToken && authToken!.role === "teacher") return null

  const { data, loading, error } = useFetch<Workouts[]>(`http://localhost:3000/workouts/${authToken?.id}`)

  if(error) {
    return (
      <div className="h-3/4 flex justify-center items-center">
        <h1 className="font-bold text-3xl italic text-zinc-100">Não foi possivel carregar os dados</h1>
      </div>
    )
  }

  return (
    <ScrollArea className="mt-5 px-2 w-full h-[30rem] md:h-4/5 bg-zinc-900/30 shadow-md rounded-lg">
      <h1 className="text-center text-2xl font-bold mt-3">Treinos</h1>

      <div className="w-full h-max mt-3 px-3 py-3 rounded-lg gap-2 grid grid-cols-3 md:grid-cols-6 relative">
        {loading ? (<h1 className="text-2xl font-bold absolute top-[100px] left-[10rem] md:left-[18rem] lg:left-[30rem] animate-pulse">Carregando</h1>) : (data?.map((workout: Workouts, i: number) => (
         <Link
         to={`/exercises/${workout.id}`}
         key={i}
         className="text-center py-2 border-2 border-zinc-100/30 hover:bg-black hover:border-primary hover:animate-pulse transition-colors cursor-pointer h-max rounded-md"
         >
         <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold">{weekdays[i+1]}</h1>
          <span className="font-semibold">Treino</span>
          <span className="text-2xl font-bold text-primary">{workout.type}</span>
         </div>
         </Link>
        )))}
      </div>
    </ScrollArea>
  );
}
