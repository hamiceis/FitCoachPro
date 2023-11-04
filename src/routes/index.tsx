import { Routes, Route, Link } from "react-router-dom";

import { Home } from "@/pages";
import { DashboardPage } from "@/pages/dashboard";
import { LayoutLogin } from "@/pages/login";
import { StudentPage } from "@/pages/student";
import { Workout } from "@/pages/workout";

import { Button } from "@/components/ui/button";
import { Dashboard } from "@/components/dashboard";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<LayoutLogin />} />
      <Route path="login" element={<LayoutLogin />} />
      <Route path="workout/:id" element={<Workout />} />
      <Route path="dashboard" element={<DashboardPage />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<h1>Alunos</h1>} />
        <Route path="workouts" element={<h1>Treinos</h1>} />
        <Route path="invite" element={<h1>Convidar aluno</h1>} />
        <Route path="profile" element={<h1>Perfil de usuário</h1>} />
      </Route>
      <Route path="student/:id" element={<StudentPage />} />
      <Route path="*" element={
          <div className="h-screen w-full flex flex-col items-center justify-center gap-5">
        
            <h1 className="text-4xl font-bold">Página não encontrada</h1>
 
            <Link to="/dashboard">
              <Button>Inicio</Button>
            </Link>
          </div>
        }
      />
    </Routes>
  );
}
