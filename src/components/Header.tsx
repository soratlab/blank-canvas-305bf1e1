"use client";

import { useState } from "react";
import NavLink from "@/components/NavLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-md bg-white/80
      border-b border-[#E6E7E8]
      transition
    ">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-md bg-[#E4F64A] flex items-center justify-center">
            <span className="font-bold text-black text-[16px]">⚡</span>
          </div>
          <span className="font-sora font-semibold text-[16px] text-black">
            sorat.ai
          </span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Funcionalidades</NavLink>
          <NavLink href="#pricing">Planos</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <button className="
            bg-black text-[#E4F64A] px-4 py-2 rounded-full font-sora text-[14px]
            hover:opacity-90 transition
          ">
            Rodar análise
          </button>
        </nav>

        {/* MENU MOBILE BOTÃO */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E6E7E8] px-6 py-4 space-y-5">
          <NavLink href="#features" onClick={() => setOpen(false)}>
            Funcionalidades
          </NavLink>

          <NavLink href="#pricing" onClick={() => setOpen(false)}>
            Planos
          </NavLink>

          <NavLink href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </NavLink>

          <button className="
            w-full bg-black text-[#E4F64A] px-4 py-2 rounded-full font-sora text-[14px]
            hover:opacity-90 transition
          ">
            Rodar análise
          </button>
        </div>
      )}
    </header>
  );
}
