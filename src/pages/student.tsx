import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StudentSidebar } from "@/components/student-sidebar";
import { HeaderStudent } from "@/components/header-student";
import { arr } from "@/lib/datafake"

let data = arr

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

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
          {data.length === 0 ? (
            <h1 className="text-center font-bold"> Não existem treinos</h1>
          ) : (
            arr.map((item, i) => (
              <div
                key={i}
                className="p-2 border border-zinc-100 hover:bg-zinc-900 cursor-pointer transition-colors"
              >
                <div className="text-center font-light text-xs md:text-base">
                  {i + 1} - {weekdays[item.week_day] ?? ""}
                </div>
                <div className="text-center font-extrabold">
                  <span className="text-primary font-semibold">Tipo: </span>{" "}
                  {item.type ?? ""}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
