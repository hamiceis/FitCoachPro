import { useParams } from "react-router-dom";
import { useUsersStore } from "@/hooks/useUsers";

import { StudentSidebar } from "@/components/student-sidebar";
import { HeaderStudent } from "@/components/header-student";
import { WorkoutCard } from "@/components/workout-card";
import { FormWorkout } from "@/components/form-workout";

import { arr } from "@/lib/datafake";
import { useEffect, useState } from "react";
import { StudentData } from "@/types/student.types";

export function StudentPage() {
  const [data, setData] = useState<StudentData[] | []>([]);
  const { users } = useUsersStore();
  const { id } = useParams();

  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);

  const user = data.find((user) => user.id === id);

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
          {arr.map((workout, i) => (
            <WorkoutCard data={workout} index={i} key={workout.id + i} />
          ))}
        </div>
      </main>
    </div>
  );
}
