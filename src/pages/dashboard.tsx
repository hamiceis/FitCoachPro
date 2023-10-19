import { MobileSidebar } from "@/components/mobile-sidebar";
import { Sidebar } from "@/components/sidebar";

import { Outlet } from "react-router-dom";


export function DashboardPage() {
  return (
    <div className="h-screen w-full flex">
      <div className="hidden md:flex md:w-72 md:flex-col bg-gray-900">
        <Sidebar />
      </div>
      <div className="bg-zinc-600 w-full md:py-0 p-4">
        <MobileSidebar />
        <Outlet />
      </div>
    </div>
  )
}
