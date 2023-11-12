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

      <main className="h-full py-4 px-4">
        <div className="flex justify-center items-center relative">
          <h1 className="text-3xl font-bold">Treinos</h1>
          <FormWorkout />
        </div>

      
          <div className="mt-64 md:mt-28 grid grid-cols-3 md:grid-cols-6">
            {arr.map((workout, i) => (
              <WorkoutCard data={workout} index={i} key={workout.id + i} />
            ))}
          </div>
      
      </main>
    </div>
  );
}
