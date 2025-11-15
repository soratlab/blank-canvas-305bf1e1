// src/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <nav className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md flex items-center justify-center bg-black">
              {/* mini logo temporário */}
              <span className="text-[14px] text-[#E4F64A] font-bold">⚡</span>
            </div>
            <span className="font-sora font-semibold text-lg text-[#E4F64A] tracking-tight">
              sorat.ai
            </span>
          </div>
        </div>

        {/* Center nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-sora text-[#414042]">
          <li><a className="hover:opacity-80" href="#sobre">Sobre</a></li>
          <li><a className="hover:opacity-80" href="#quem-somos">Quem somos</a></li>
          <li><a className="hover:opacity-80" href="#funcionalidade">Funcionalidade</a></li>
          <li><a className="hover:opacity-80" href="#planos">Planos</a></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden md:inline-block text-sm font-sora px-4 py-2 rounded-full border border-[#414042] text-[#414042] hover:opacity-90"
          >
            Entrar
          </a>

          <a
            href="#start"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#E4F64A] hover:brightness-95 shadow-[0_8px_30px_rgba(228,246,74,0.12)] text-black font-sora font-semibold"
            style={{ boxShadow: "0 10px 30px rgba(228,246,74,0.12)" }}
          >
            Começar
          </a>
        </div>
      </nav>
    </header>
  );
}
