import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

import { AuthTokenProps } from "@/types/authToken.types";

import Cookies from "js-cookie";
import { ContextType } from "@/types/OutletContextType.types";
import { useAuthStore } from "@/hooks/useAuth";

export function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [authToken, setAuthToken] = useState<AuthTokenProps | null>({
    id: "79871a29-4bb7-442d-9032-0d03e816a252",
    role: "student",
    email: "abraham@hotmail.com"
  });

  const { setAuthToken: setToken } = useAuthStore()

  // const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    const userAuthToken = Cookies.get("authToken");

    if (authToken) {
      setToken(authToken);
    }

    //Evita que o usuário acesse outras páginas caso não tenha um authToken, redirecionando para página "/login"
    // if(!userAuthToken){
    //   alert("Usuário não autenticado")
    //   return navigate("/login")
    // } else {
    //   try {
    //     const parsedAuthToken: AuthTokenProps = JSON.parse(userAuthToken)
    //     setAuthToken(parsedAuthToken)
    //   } catch(error) {
    //     console.error("Error parsing authToken:", error);
    //   } finally {
    //     if(authToken.role === "student"){
    //     navigate("/dashboard/workouts")
    // }
    //   }
    // }
  }, [setToken, authToken]);

  if (!isMounted) {
    return null;
  }

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
