import { useParams } from "react-router-dom"

export function StudentPage() {

  const { id } = useParams()

  return (
    <div className="h-screen w-full px-2 py-3 bg-zinc-600">
      <h1 className="text-2xl font-bold">Ficha do aluno: 
        <span className="italic text-xl"> {id}</span>
      </h1>
    </div>
  )
}