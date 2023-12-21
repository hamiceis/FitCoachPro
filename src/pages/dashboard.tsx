import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

import { AuthTokenProps } from "@/types/authToken.types";
import { ContextType } from "@/types/OutletContextType.types";

import { toast } from "react-toastify";
import { useAuthStore } from "@/hooks/useAuth"

export function DashboardPage() {
  const [authToken, setAuthToken] = useState<AuthTokenProps | null>(null);
  const { authToken: token } = useAuthStore()

  const navigate = useNavigate();
 
  useEffect(() => {
    if (!token) {
      navigate("/login")
      toast.error("Usuário não logado")
    }

    if(token?.role === "user") navigate("/dashboard/workouts")
    setAuthToken(token);
  }, []);

  return (
    <div className="h-screen w-full flex">
      <div className="hidden md:flex md:w-72 md:flex-col">
        <Sidebar />
      </div>
      <div className="bg-zinc-600 h-max md:h-screen w-full md:py-0 p-4">
        <Header id={authToken?.id} role={authToken?.role}  />
        <Outlet context={{ authToken } satisfies ContextType} />
      </div>
    </div>
  );
}
