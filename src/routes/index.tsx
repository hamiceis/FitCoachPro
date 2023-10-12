import { Home } from "@/pages"
import { DashboardPage } from "@/pages/dashboard"
import { LoginPage } from "@/pages/login"
import { Routes, Route } from "react-router-dom"

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}