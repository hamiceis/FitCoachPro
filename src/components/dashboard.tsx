import { Input } from "@/components/ui/input";
import { CardStudent } from "./card-students";



export function Dashboard() {
  return (
    <div className="w-full py-2 flex flex-col space-y-10">
      <div className="w-full">
        <Input type="text" 
        className="md:w-1/2 border-zinc-400 focus:ring-black focus-visible:ring-0"
        placeholder="Digite o nome do aluno.. 🔍" />
      </div>

      <div className="h-[28rem] md:h-[29rem] flex flex-col space-y-4 overflow-y-auto">
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
      </div>
    </div>
  )
}