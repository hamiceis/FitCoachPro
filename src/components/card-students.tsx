import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CardStudent() {
  return (
    <div className="flex px-4 py-2 mr-3 items-center justify-between border shadow-lg border-zinc-300 rounded-lg hover:opacity-70 ">
      <div>
        <h2 className="text-xl font-medium mb-1">Diego Medeiros</h2>
        <p className="text-xs italic">diego@gmail.com</p>
      </div>

      <div className="flex items-center gap-2">
        <Link to={`/student`}>
          <Button variant="secondary">Ficha</Button>
        </Link>
        <Link to={"/workout"}>
          <Button variant="secondary">Treinos</Button>
        </Link>
      </div>
    </div>
  );
}
