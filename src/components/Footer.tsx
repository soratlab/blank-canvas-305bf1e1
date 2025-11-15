import React from "react";

export default function Footer() {
  return (
    <footer className="mt-32 bg-black py-16 border-t border-[#1F1F1F]">
      <div className="container-main flex flex-col items-center text-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-8 w-8 rounded-md bg-[#E4F64A] flex items-center justify-center">
            <span className="font-bold text-black text-[16px]">⚡</span>
          </div>
          <span className="font-sora font-semibold text-[16px] text-white">
            sorat.ai
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#features" className="font-sora text-[14px] text-gray-300 hover:text-[#E4F64A] transition">
            Funcionalidades
          </a>
          <a href="#pricing" className="font-sora text-[14px] text-gray-300 hover:text-[#E4F64A] transition">
            Planos
          </a>
          <a href="#faq" className="font-sora text-[14px] text-gray-300 hover:text-[#E4F64A] transition">
            FAQ
          </a>
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-[#1F1F1F] mb-6"></div>

        {/* Direitos autorais */}
        <p className="font-sora text-[13px] text-gray-500">
          © {new Date().getFullYear()} sorat.ai — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
