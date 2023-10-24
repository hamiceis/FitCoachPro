import { Button } from "@/components/ui/button"

export function CardStudent() {
  return (
    <div className="flex px-4 py-2 mr-3 items-center justify-between border border-zinc-300 rounded-lg">

    <div>
      <h2 className="text-xl font-medium mb-1">Diego Medeiros</h2>
      <p className="text-xs italic">diego@gmail.com</p>
    </div>
    
    <div className="flex items-center gap-2">
      <Button variant="secondary">
        Ficha
      </Button>

      <Button variant="secondary">
        Treinos
      </Button>
    </div>
  </div>
  )
}