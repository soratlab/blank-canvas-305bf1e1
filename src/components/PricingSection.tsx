import React from "react";

export default function PricingSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-32 px-4">

      {/* Título */}
      <h2 className="font-sora font-semibold text-[28px] md:text-[32px] text-black">
        Escolha seu plano
      </h2>

      <p className="font-sora text-[14px] text-[#7A7A7A] mt-2">
        Simples, direto ao ponto. Sem surpresas.
      </p>

      {/* Tabela de preços */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-[1100px] w-full">

        {/* PLANO 1 — Básico */}
        <div className="bg-white border border-[#E6E7E8] rounded-2xl p-8 flex flex-col items-center shadow-sm">
          <h3 className="font-sora font-semibold text-[18px] text-black">Básico</h3>

          <p className="font-sora text-[13px] text-[#7A7A7A] mt-1 mb-4">
            Para criadores iniciantes
          </p>

          <p className="font-sora text-[32px] font-bold text-black">
            R$ 29<span className="text-[16px] font-medium">/mês</span>
          </p>

          <ul className="mt-6 text-left font-sora text-[13px] text-[#5A5A5A] space-y-2">
            <li>✓ 10 análises/mês</li>
            <li>✓ Relatórios básicos</li>
            <li>✓ Análise de retenção</li>
          </ul>

          <button className="mt-8 w-full bg-black text-white font-sora py-2 rounded-full hover:opacity-90 transition">
            Começar
          </button>
        </div>

        {/* PLANO 2 — PRO (DESTAQUE VERDE) */}
        <div className="bg-[#E4F64A] rounded-2xl p-8 flex flex-col items-center shadow-lg scale-[1.03]">
          <h3 className="font-sora font-semibold text-[18px] text-black">Pro</h3>

          <p className="font-sora text-[13px] text-black mt-1 mb-4">
            Para profissionais e criativos
          </p>

          <p className="font-sora text-[32px] font-bold text-black">
            R$ 59<span className="text-[16px] font-medium">/mês</span>
          </p>

          <ul className="mt-6 text-left font-sora text-[13px] text-black space-y-2">
            <li>✓ 50 análises/mês</li>
            <li>✓ Relatórios avançados</li>
            <li>✓ Sugestões automáticas</li>
            <li>✓ Comparador de desempenho</li>
          </ul>

          <button className="mt-8 w-full bg-black text-white font-sora py-2 rounded-full hover:opacity-90 transition">
            Escolher plano
          </button>
        </div>

        {/* PLANO 3 — Agência */}
        <div className="bg-white border border-[#E6E7E8] rounded-2xl p-8 flex flex-col items-center shadow-sm">
          <h3 className="font-sora font-semibold text-[18px] text-black">Agência</h3>

          <p className="font-sora text-[13px] text-[#7A7A7A] mt-1 mb-4">
            Para equipes e operações maiores
          </p>

          <p className="font-sora text-[32px] font-bold text-black">
            R$ 149<span className="text-[16px] font-medium">/mês</span>
          </p>

          <ul className="mt-6 text-left font-sora text-[13px] text-[#5A5A5A] space-y-2">
            <li>✓ Análises ilimitadas</li>
            <li>✓ Relatórios completos</li>
            <li>✓ Suporte premium</li>
            <li>✓ IA personalizada</li>
          </ul>

          <button className="mt-8 w-full bg-black text-white font-sora py-2 rounded-full hover:opacity-90 transition">
            Começar
          </button>
        </div>
      </div>
    </section>
  );
}
