import { ContextType } from "@/pages/dashboard"
import { useOutletContext } from "react-router-dom"


export function useAuthTokenContext() {
  return useOutletContext<ContextType>()
}