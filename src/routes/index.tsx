import { Button } from "@/components/ui/button";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "@/pages";
import { DashboardPage } from "@/pages/dashboard";
import { LayoutLogin } from "@/pages/login";

import { Dashboard } from "@/components/dashboard"

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<LayoutLogin />} />
      <Route path="login" element={<LayoutLogin />} />
      <Route path="dashboard" element={<DashboardPage />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<h1>Alunos</h1>} />
       </Route> 
      <Route
        path="*"
        element={
          <>
            <h1>Erro Page</h1>
            <Link to="/">
              <Button>Inicio</Button>
            </Link>
          </>
        }
      />
    </Routes>
  );
}
