import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-32 pt-16 pb-10 px-6">

      {/* CONTAINER PRINCIPAL */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COLUNA 1 — LOGO + TEXTO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-[#E4F64A] flex items-center justify-center">
              <span className="text-black font-bold text-[20px]">⚡</span>
            </div>
            <span className="font-sora font-semibold text-[18px]">
              sorat.ai
            </span>
          </div>

          <p className="font-sora text-[13px] text-[#C5C5C5] leading-relaxed max-w-[260px]">
            IA especializada em analisar vídeos, identificar quedas de retenção
            e sugerir melhorias rápidas e inteligentes.
          </p>
        </div>

        {/* COLUNA 2 — PRODUTO */}
        <div>
          <h4 className="font-sora font-semibold text-[15px] mb-3">Produto</h4>
          <ul className="space-y-2 font-sora text-[13px] text-[#C5C5C5]">
            <li className="hover:text-white transition cursor-pointer">Funcionalidades</li>
            <li className="hover:text-white transition cursor-pointer">Planos</li>
            <li className="hover:text-white transition cursor-pointer">Comparador</li>
            <li className="hover:text-white transition cursor-pointer">Análises</li>
          </ul>
        </div>

        {/* COLUNA 3 — EMPRESA */}
        <div>
          <h4 className="font-sora font-semibold text-[15px] mb-3">Empresa</h4>
          <ul className="space-y-2 font-sora text-[13px] text-[#C5C5C5]">
            <li className="hover:text-white transition cursor-pointer">Sobre</li>
            <li className="hover:text-white transition cursor-pointer">Blog</li>
            <li className="hover:text-white transition cursor-pointer">Contato</li>
            <li className="hover:text-white transition cursor-pointer">Carreiras</li>
          </ul>
        </div>

        {/* COLUNA 4 — SUPORTE */}
        <div>
          <h4 className="font-sora font-semibold text-[15px] mb-3">Suporte</h4>
          <ul className="space-y-2 font-sora text-[13px] text-[#C5C5C5]">
            <li className="hover:text-white transition cursor-pointer">Ajuda</li>
            <li className="hover:text-white transition cursor-pointer">FAQs</li>
            <li className="hover:text-white transition cursor-pointer">Termos de uso</li>
            <li className="hover:text-white transition cursor-pointer">Privacidade</li>
          </ul>
        </div>

      </div>

      {/* LINHA FINAL */}
      <div className="mt-16 pt-6 border-t border-[#2B2B2B] text-center">
        <p className="font-sora text-[12px] text-[#9A9A9A]">
          © {new Date().getFullYear()} sorat.ai — Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
}
