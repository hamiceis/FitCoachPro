import { Home } from "@/pages"
import { Dashboard } from "@/pages/dashboard"
import { Routes, Route } from "react-router-dom"

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}