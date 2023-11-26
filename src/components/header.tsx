import { useState, useEffect } from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { api } from "@/services/api"

interface HeaderPage {
  id: string
}

interface UserData {
  id: string;
  name: string;
}

export function Header({ id }: HeaderPage) {
  const [data, setData] = useState<UserData[] | null>()

  useEffect(() => {
    api.get(`/teachers`)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  },[])

  
  const user = data?.find((user: UserData) => user.id === id)

  return (
    <div className="w-full flex flex-col px-2 py-4 md:py-7 border-b border-zinc-100 gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">
          Olá, <span className="text-zinc-100 font-bold italic">{user?.name || "Admin"}</span>
        </h1>
        <MobileSidebar />
      </div>

    </div>
  );
}
