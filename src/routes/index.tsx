import { Button } from "@/components/ui/button";
import { Home } from "@/pages";
import { DashboardPage } from "@/pages/dashboard";
import { LayoutLogin } from "@/pages/login";
import { Routes, Route, Link } from "react-router-dom";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<LayoutLogin />} />
      <Route path="login" element={<LayoutLogin />} />
      <Route path="dashboard" element={<DashboardPage />}>
        <Route index element={<h1>Hello World</h1>} />
        <Route path="stats" element={<h1>Stats</h1>} />
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
