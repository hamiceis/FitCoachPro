import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const arr = Array.from({ length: 30}).map((_, i) => i * 2)

export function StudentPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen h-full w-full bg-zinc-600">
      <header className="relative h-max md:h-40 w-full px-10 py-5 flex items-center justify-center md:gap-32 gap-36 bg-black">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="absolute top-4 left-2 bg-zinc-800 rounded-full p-2 hover:bg-zinc-700"
        >
          <ArrowLeft size={24} />
        </Button>

        <div className="md:ml-10 lg:ml-0">
          <img
            className="rounded-full w-20 h-20 border border-red-500"
            src="/profile.jpg"
            alt="foto aleatoria"
          />
        </div>

        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-y-5">
          <div className="flex gap-2">
            <span className="text-red-500">Nome:</span>
            <h2 className="italic font-bold text-lg capitalize">
              hamiceis pereira
            </h2>
          </div>
          <div className="flex gap-2">
            <span className="text-red-500">Idade:</span>
            <h2 className="italic">29</h2>
          </div>
          <div className="flex gap-2">
            <span className="text-red-500">Email:</span>
            <h2 className="italic">{`${id}@hotmail.com`}</h2>
          </div>
          <div className="flex gap-2">
            <span className="text-red-500">Sexo:</span>
            <h2 className="italic">M</h2>
          </div>
          <div className="flex gap-2">
            <span className="text-red-500">Altura:</span>
            <h2 className="italic">187cm</h2>
          </div>
          <div className="flex gap-2">
            <span className="text-red-500">Telefone:</span>
            <h2 className="italic">{"(81) 99988-1245"}</h2>
          </div>
        </div>
      </header>

      <main className="h-full w-full py-4 px-4">
        <div className="flex justify-center items-center relative">
          <h1 className="text-3xl font-bold">Treinos</h1>
          <Button 
          className="text-xs md:text-sm absolute right-0"
          variant="secondary">Novo treino</Button>
        </div>

        <div className="h-96 mt-6 grid grid-cols-7 grid-flow-row">
          {arr.map((item, i) => (
            <div 
            key={i}
            className="p-2 border border-zinc-100 hover:bg-zinc-900 cursor-pointer transition-colors">
            {i+1}
            
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
