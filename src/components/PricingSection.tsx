import React from "react";

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-32 px-4">

      {/* Título */}
      <h2 className="font-sora font-semibold text-[28px] md:text-[32px] text-black leading-tight">
        Escolha seu plano
      </h2>

      {/* Subtexto */}
      <p className="font-sora text-[15px] text-[#7A7A7A] max-w-[600px] mt-3 leading-relaxed">
        Planos simples, transparentes e sem pegadinhas.
      </p>

      {/* Grid de planos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14 max-w-[1100px] w-full">

        {/* === Plano 1 — Starter === */}
        <div className="bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-sora font-semibold text-[18px] text-black">Starter</h3>
          <p className="text-[13px] text-[#7A7A7A] mt-1">Para iniciantes</p>

          <div className="mt-4">
            <span className="font-sora font-bold text-[28px] text-black">R$ 59,90</span>
            <span className="text-[13px] text-[#7A7A7A]">/mês</span>
          </div>

          <ul className="text-left text-[13px] text-[#5A5A5A] mt-4 flex-1">
            <li>• 20 análises/mês</li>
            <li>• Insights básicos</li>
            <li>• Suporte por email</li>
          </ul>

          <button className="mt-6 bg-black text-[#E4F64A] py-2 rounded-full font-sora text-[14px] hover:opacity-90 transition">
            Começar
          </button>
        </div>

        {/* === Plano 2 — Pro (Destacado) === */}
        <div className="relative bg-black text-white rounded-2xl p-6 shadow-xl flex flex-col border-2 border-[#E4F64A]">

          {/* Selo “Popular” */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E4F64A] text-black text-[11px] font-bold px-3 py-1 rounded-full shadow">
            Popular
          </div>

          <h3 className="font-sora font-semibold text-[18px]">Pro</h3>
          <p className="text-[13px] text-[#CFCFCF] mt-1">Para criadores sérios</p>

          <div className="mt-4">
            <span className="font-sora font-bold text-[28px] text-white">R$ 99,90</span>
            <span className="text-[13px] text-[#CFCFCF]">/mês</span>
          </div>

          <ul className="text-left text-[13px] text-[#CFCFCF] mt-4 flex-1">
            <li>• 80 análises/mês</li>
            <li>• Insights avançados</li>
            <li>• Relatórios detalhados</li>
            <li>• Suporte rápido</li>
          </ul>

          <button className="mt-6 bg-[#E4F64A] text-black py-2 rounded-full font-sora text-[14px] hover:brightness-95 transition">
            Começar agora
          </button>
        </div>

        {/* === Plano 3 — Studio === */}
        <div className="bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-sora font-semibold text-[18px] text-black">Studio</h3>
          <p className="text-[13px] text-[#7A7A7A] mt-1">Para equipes de produção</p>

          <div className="mt-4">
            <span className="font-sora font-bold text-[28px] text-black">R$ 199,90</span>
            <span className="text-[13px] text-[#7A7A7A]">/mês</span>
          </div>

          <ul className="text-left text-[13px] text-[#5A5A5A] mt-4 flex-1">
            <li>• Análises ilimitadas</li>
            <li>• IA colaborativa</li>
            <li>• Painel para equipes</li>
            <li>• Suporte prioritário</li>
          </ul>

          <button className="mt-6 bg-black text-[#E4F64A] py-2 rounded-full font-sora text-[14px] hover:opacity-90 transition">
            Assinar Studio
          </button>
        </div>

        {/* === Plano 4 — Enterprise === */}
        <div className="bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-sm flex flex-col">
          <h3 className="font-sora font-semibold text-[18px] text-black">Enterprise</h3>
          <p className="text-[13px] text-[#7A7A7A] mt-1">Para organizações</p>

          <div className="mt-4">
            <span className="font-sora font-bold text-[28px] text-black">Custom</span>
          </div>

          <ul className="text-left text-[13px] text-[#5A5A5A] mt-4 flex-1">
            <li>• Treinamento dedicado</li>
            <li>• Consultoria personalizada</li>
            <li>• SLA corporativo</li>
          </ul>

          <button className="mt-6 bg-black text-[#E4F64A] py-2 rounded-full font-sora text-[14px] hover:opacity-90 transition">
            Falar com vendas
          </button>
        </div>

      </div>
    </section>
  );
}
