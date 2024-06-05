"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  AlignJustify,
  BarChart,
  Bolt,
  LayoutDashboard,
  Users,
} from "lucide-react";
import Link from "next/link";

const SHEET_SIDE = "left";

export function SheetSide() {
  return (
    <div className=" p-3 bg-[#6C5CE7] h-[70px]">
      <Sheet>
        <SheetTrigger asChild>
          <div className="pl-3">
            <AlignJustify color="white" className="h-10 w-10" />
          </div>
        </SheetTrigger>
        <SheetContent side={SHEET_SIDE}>
          <div className="w-full p-6 bg-[#6C5CE7]  text-white flex flex-col h-full">
            <div className="flex items-center space-x-2 mb-10">
              <span className="font-bold text-xl">Task Tracker </span>
            </div>
            <nav className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <LayoutDashboard className="h-9 w-9" />
                <span className="text-3xl">
                  <Link href="/">Boards</Link>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-9 w-9" />
                <span className="text-3xl">
                  <Link href="/teamwork">Equipes</Link>{" "}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart className="h-9 w-9" />
                <span className="text-3xl">
                  <Link href="/relatorios">Relatórios</Link>{" "}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Bolt className="h-9 w-9" />
                <span className="text-3xl">
                  <Link href="/settings">Ajustes</Link>{" "}
                </span>
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
