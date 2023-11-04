import { Input } from "@/components/ui/input";
import { CardStudent } from "./card-students";
import { ScrollArea } from "./ui/scroll-area";

const pessoas = [
  { name: 'Alice', email: 'alice@example.com', sex: "F" },
  { name: 'Bob', email: 'bob@example.com', sex: "M" },
  { name: 'Charlie', email: 'charlie@example.com', sex: "M" },
  { name: 'David', email: 'david@example.com', sex: "M" },
  { name: 'Eve', email: 'eve@example.com', sex: "F" }
];

export function Dashboard() {
  return (
    <div className="w-full py-2 flex flex-col space-y-4">
      <div className="w-full mt-2">
        <Input type="text"
          maxLength={100}
          className="md:w-1/2 border-zinc-400 focus:ring-black focus-visible:ring-0"
          placeholder="Digite o nome do aluno.. 🔍" />
      </div>


      <ScrollArea className="h-[26.5rem] md:h-[27.5rem]">
        <div className="flex flex-col space-y-4">
          {pessoas.map(pessoa => {
            return (
              <CardStudent key={pessoa.email} name={pessoa.name} email={pessoa.email} />
            )
          })}

        </div>
      </ScrollArea>

    </div>
  )
}