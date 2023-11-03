import { StatsInfo } from "./stats-info";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom"

export function HeaderStudent({ id }: { id?: string }) {
  const navigate = useNavigate()

  return (
    <header className="relative h-max md:h-max w-full px-10 py-5 flex items-center justify-center md:gap-32 gap-36 bg-black">
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className="absolute top-4 left-2 bg-secondary/10 rounded-full p-2 hover:bg-secondary"
    >
      <ArrowLeft size={20} />
    </Button>

    <div className="md:ml-10 lg:ml-0">
      <img
        className="rounded-full w-20 h-20 border border-red-500"
        src="/profile.jpg"
        alt="foto aleatoria"
      />
    </div>

    <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-y-5">
      <StatsInfo
        span="Nome"
        info="hamiceis pereira"
        className="capitalize"
      />
      <StatsInfo span="Idade" info="29" />
      <StatsInfo span="Email" info={`${id}@hotmail.com`} />
      <StatsInfo span="Sexo" info="M" />
      <StatsInfo span="Altura" info="187cm" />
      <StatsInfo span="Peso" info="73kg" />
      <StatsInfo span="Telefone" info="(81)99988-1234" />
      <StatsInfo span="IMC" info="ideal" />
      <StatsInfo span="Nivel de treinamento" info="Iniciante" />
      <StatsInfo span="Meta" info="Ganho de massa muscular" />
      <StatsInfo span="Data de inicio do protocolo" info="03/01/2024" />
      <StatsInfo span="Data de fim do protocolo" info="03/06/2024" />
    </div>
  </header>
  )
}