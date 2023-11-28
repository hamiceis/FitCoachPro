import { useParams } from "react-router-dom";
import { useUsersStore } from "@/hooks/useUsers";

import { StudentSidebar } from "@/components/student-sidebar";
import { HeaderStudent } from "@/components/header-student";
import { WorkoutCard } from "@/components/workout-card";
import { FormWorkout } from "@/components/form-workout";

import { useEffect, useState } from "react";
import { StudentData } from "@/types/student.types";
import { useFetch } from "@/hooks/useFetch";
import { Workouts } from "@/types/workout.types";

export function StudentPage() {
  const [data, setData] = useState<StudentData[] | []>([]);
  const { users } = useUsersStore();
  const { id } = useParams();

  const WORKOUTS_URL = `http://localhost:3000/workouts/${id}`;

  const { data: workouts, error, loading } = useFetch<Workouts[]>(WORKOUTS_URL);

  if(error) {
    alert(error)
  }

  useEffect(() => {
    if (users && id) {
      setData(users);
    }

  }, [users, id]);


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

        <div className="mt-64 md:mt-28 grid grid-cols-3 md:grid-cols-6">
          {loading && <h1>Carregando...</h1>}
          {workouts?.length === 0 ? <h1>Não foram encontrado treinos</h1> : (
            workouts?.map((workoutData, i) => (
              <WorkoutCard data={workoutData} index={i} key={workoutData.id} />
            ))
          )}
          
        </div>
      </main>
    </div>
  );
}
