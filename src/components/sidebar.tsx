import { Dumbbell, UserCircle2, Users, UserPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const routes = [
  {
    icon: Users,
    href: "/dashboard",
    label: "Alunos",
  },
  {
    icon: Dumbbell,
    href: "/dashboard/workouts",
    label: "Treinos",
  },
  {
    icon: UserPlus,
    href: "/dashboard/invite",
    label: "Convidar",
  },
];

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background_secondary text-white">
      <div className="px-3 py-2 flex-1">
        <Link to="/" className="flex items-center justify-center mb-10 mt-4">
          <h1 className="text-2xl font-medium">
            FitCoach
            <span className="font-bold text-primary">PRO</span>
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              to={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Link
        to="/dashboard/profile"
        className={cn(
          "text-sm mx-3 flex px-4 py-3 justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
          pathname === "/dashboard/profile" ? "text-white bg-white/10" : "text-zinc-400"
        )}
      >
        <UserCircle2 className={cn("h-5 w-5 mr-3")} />
        Profile
      </Link>
    </div>
  );
}
