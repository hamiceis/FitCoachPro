import { create } from "zustand"
import { AuthTokenProps } from "@/types/authToken.types"


interface UseAuthStoreProps {
  authToken: AuthTokenProps | undefined;
  setAuthToken: (data: AuthTokenProps) => void;
}

export const useAuthStore = create<UseAuthStoreProps>((set) => ({
  authToken: undefined,
  setAuthToken: (data) => set({ authToken: data }),
}));