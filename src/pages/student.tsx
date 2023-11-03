import { useParams } from "react-router-dom";
import { StudentSidebar } from "@/components/student-sidebar";
import { arr } from "@/lib/datafake"
import { HeaderStudent } from "@/components/header-student";
import { WorkoutCard } from "@/components/workout-card";
import { FormWorkout } from "@/components/form-workout";


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
          <FormWorkout />
        </div>

        <div className="h-max mt-6 grid grid-cols-4 md:grid-cols-7 grid-flow-row">
          {arr.map((workout, i) => (
            <WorkoutCard data={workout} index={i} key={workout.id + i} />
          ))}
        </div>
      </main>
    </div>
  );
}
