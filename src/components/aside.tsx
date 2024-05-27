import {
  Airplay,
  BarChart,
  Bolt,
  Ellipsis,
  LayoutDashboard,
  Users,
} from "lucide-react";
import Link from "next/link";

export function Aside() {
  return (
    <div className="w-full md:w-64 bg-[#6C5CE7] md:h-full p-6 text-white flex flex-col h-full">
      <div className="flex items-center space-x-2 mb-10">
        <span className="font-bold text-xl">Task Tracker </span>
      </div>
      <nav className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <LayoutDashboard className="h-6 w-6" />
          <span>
            <Link href="/">Boards</Link>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6" />
          <span>
            <Link href="/teamwork">Equipes</Link>{" "}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <BarChart className="h-6 w-6" />
          <span>
            <Link href="/relatorios">Relatórios</Link>{" "}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Bolt className="h-6 w-6" />
          <span>
            <Link href="/settings">Ajustes</Link>{" "}
          </span>
        </div>
      </nav>
    </div>
  );
}
