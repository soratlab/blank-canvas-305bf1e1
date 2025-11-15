import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white mt-32 py-16 px-6">

      {/* Container principal */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Logo + texto */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-9 w-9 rounded-md bg-[#E4F64A] flex items-center justify-center">
              <span className="text-black font-bold text-[18px]">⚡</span>
            </div>
            <span className="font-sora font-semibold text-[18px]">sorat.ai</span>
          </div>

          <p className="font-sora text-[13px] text-[#C4C4C4] max-w-[280px] leading-relaxed">
            IA especializada em analisar vídeos, identificar quedas de retenção e sugerir melhorias inteligentes.
          </p>
        </div>

        {/* Navegação */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

          <div>
            <h4 className="font-sora font-semibold text-[14px] mb-3">Produto</h4>
            <ul className="space-y-2">
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Funcionalidades</li>
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Planos</li>
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Comparador</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-[14px] mb-3">Empresa</h4>
            <ul className="space-y-2">
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Sobre nós</li>
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Blog</li>
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Contato</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-[14px] mb-3">Suporte</h4>
            <ul className="space-y-2">
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Central de ajuda</li>
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Dúvidas comuns</li>
              <li className="text-[#C4C4C4] text-[13px] hover:text-white cursor-pointer">Política de uso</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="mt-16 pt-6 border-t border-[#3A3A3A] text-center">
        <p className="font-sora text-[12px] text-[#AFAFAF]">
          © {new Date().getFullYear()} sorat.ai — Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
}
