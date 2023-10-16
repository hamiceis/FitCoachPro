import { useLocation } from 'react-router-dom';
import { FormRegister } from "@/components/formRegister";
import { FormLogin } from '@/components/formLogin';

export function LayoutLogin() {
  const location = useLocation()
  const pathName = location.pathname
 
  return (
    <div className="min-h-screen grid place-content-center">
      <main className="h-full mx-2 my-2 min-w-70 md:grid md:grid-cols-2 flex flex-col">
        <section className="bg-zinc-900 py-4 px-2 grid place-content-center rounded-l-lg">
          <h1 className="text-2xl font-medium text-center">
            FitCoach
            <span className="font-bold text-primary">PRO</span>
          </h1>
          <img src="/casal-fit.svg" alt="casalfit" />
        </section>

        <section className="py-4 px-2 bg-zinc-800 rounded-r-lg">
         {pathName === "/register" ? (
          <FormRegister />
         ): (
          <FormLogin />
         )}
        </section>
      </main>
    </div>
  );
}
