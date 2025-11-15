import React from "react";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 mt-32 border-t border-[#1F1F1F]">
      <div className="container-main flex flex-col items-center text-center">

        {/* LOGO */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-xl bg-[#E4F64A] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
              <span className="font-bold text-black text-[16px]">⚡</span>
            </div>
            <span className="font-sora font-semibold text-[16px] text-white">
              sorat.ai
            </span>
          </div>
        </Reveal>

        {/* LINKS */}
        <Reveal delay={0.1}>
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <a
              href="#features"
              className="font-sora text-[14px] text-gray-300 hover:text-[#E4F64A] transition-colors duration-200"
            >
              Funcionalidades
            </a>

            <a
              href="#pricing"
              className="font-sora text-[14px] text-gray-300 hover:text-[#E4F64A] transition-colors duration-200"
            >
              Planos
            </a>

            <a
              href="#faq"
              className="font-sora text-[14px] text-gray-300 hover:text-[#E4F64A] transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>
        </Reveal>

        {/* DIVISOR */}
        <Reveal delay={0.2}>
          <div className="w-full h-px bg-[#1F1F1F] mb-8"></div>
        </Reveal>

        {/* COPYRIGHT */}
        <Reveal delay={0.3}>
          <p className="font-sora text-[13px] text-gray-500">
            © {new Date().getFullYear()} sorat.ai — Todos os direitos reservados.
          </p>
        </Reveal>

      </div>
    </footer>
  );
}
