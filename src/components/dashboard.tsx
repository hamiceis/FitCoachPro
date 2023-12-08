import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch } from "@/hooks/useFetch";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { CardStudent } from "./card-students";

import { StudentData, StudentProps } from "@/types/student.types";
import { useUsersStore } from "@/hooks/useUsers";


// import { useAuthTokenContext } from "@/hooks/useAuthToken";

export function Dashboard() {
  const [isMounted, setIsMounted] = useState(false)
  const [search, setSearch] = useState<string>("");
  // const { authToken } = useAuthTokenContext()
  const navigate = useNavigate();
  const { setUsers } = useUsersStore();

  const { data, loading, error } = useFetch<StudentData[]>(`http://localhost:3000/students`);

  //UseEffect garante que os dados, sejam aguardados e passados para dentro do contexto do Zustand
  useEffect(() => {
    setIsMounted(true)
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);
 
  //Evita que o componente seja montado em tela de forma desnecessária
  if(!isMounted) return null

  const filterUsers =
    search.length > 0
      ? data!.filter((user: StudentProps) =>
          user.name.toLowerCase().includes(search)
        )
      : data;

  if (error) {
    alert("Ocorreu um error");
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }

  return (
    <div className="w-full py-2 flex flex-col space-y-4">
      <div className="w-full mt-2">
        <Input
          type="text"
          maxLength={100}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:w-1/2 border-zinc-400 focus:ring-black focus-visible:ring-0"
          placeholder="Digite o nome do aluno.. 🔍"
        />
      </div>

      <ScrollArea className="h-[26.5rem] md:h-[27.5rem]">
        <div className="flex flex-col space-y-4">
          {loading ? (
            <div className="h-72 flex justify-center items-center">
              <h2 className="font-bold text-2xl animate-pulse">Carregando</h2>
            </div>
          ) : (
            filterUsers!.map((user) => {
              return (
                <CardStudent
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                />
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
