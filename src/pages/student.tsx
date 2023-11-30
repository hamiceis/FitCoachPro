import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useUsersStore } from "@/hooks/useUsers";
import { useFetch } from "@/hooks/useFetch";

import { StudentSidebar } from "@/components/student-sidebar";
import { HeaderStudent } from "@/components/header-student";
import { WorkoutCard } from "@/components/workout-card";
import { FormWorkout } from "@/components/form-workout";

import { StudentData } from "@/types/student.types";
import { Workouts } from "@/types/workout.types";

export function StudentPage() {
  const [data, setData] = useState<StudentData[] | []>([]);
  const { users } = useUsersStore();
  const { id } = useParams();

  const WORKOUTS_URL = `http://localhost:3000/workouts/${id}`;

  const { data: workouts, error, loading } = useFetch<Workouts[]>(WORKOUTS_URL);

  if (error) {
    return <h1>{error}</h1>;
  }

  useEffect(() => {
    if (users && id) {
      setData(users);
    }
  }, [users, id,  workouts]);

  const user = data.find((u) => u.id === id);

  return (
    <div className="min-h-screen h-full w-full bg-zinc-600">
      <div className="hidden md:block">
        <HeaderStudent data={user} />
      </div>

      <StudentSidebar>
        <HeaderStudent data={user} />
      </StudentSidebar>

      <main className="h-full py-4 px-4">
        <div className="flex justify-center items-center relative">
          <h1 className="text-3xl font-bold">Treinos</h1>
          <FormWorkout />
        </div>

        {loading && (
          <h1 className="mt-20 text-center font-bold text-2xl animate-bounce">
            Carregando...
          </h1>
        )}

        {!loading && workouts!.length === 0 ? (
          <div className="h-40 w-full flex justify-center items-center ">
            <h1 className="font-bold text-2xl absolute">
              Não foram encontrado treinos
            </h1>
          </div>
        ) : (
          <div className="mt-64 md:mt-28 grid grid-cols-3 md:grid-cols-6 relative">
            {workouts?.map((workoutData, i) => (
              <WorkoutCard data={workoutData} id={workoutData.id} index={i} key={workoutData.id} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
