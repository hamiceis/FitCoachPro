import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
  return (
    <div className="w-full flex flex-col px-2 py-4 md:py-7 border-b border-zinc-100 gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">
          Olá, <span className="text-zinc-100 font-bold italic">admin</span>
        </h1>
        <MobileSidebar />
      </div>

    </div>
  );
}
