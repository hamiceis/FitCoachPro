import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StudentSidebar } from "@/components/student-sidebar";
import { HeaderStudent } from "@/components/header-student";
import { arr } from "@/lib/datafake"
import { WorkoutCard } from "@/components/workout-card";


export function StudentPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen h-full w-full bg-zinc-600">
      <div className="hidden md:block">
        <HeaderStudent id={id} />
      </div>

      <StudentSidebar>
        <HeaderStudent id={id} />
      </StudentSidebar>

      <main className="h-full w-full py-4 px-4">
        <div className="flex justify-center items-center relative">
          <h1 className="text-3xl font-bold">Treinos</h1>
          <Button
            className="text-xs md:text-sm absolute right-0"
            variant="secondary"
          >
            Novo treino
          </Button>
        </div>

        <div className="h-max mt-6 grid grid-cols-7 grid-flow-row">
          {arr.map((workout, i) => (
            <WorkoutCard data={workout} index={i} key={workout.id} />
          ))}
        </div>
      </main>
    </div>
  );
}
