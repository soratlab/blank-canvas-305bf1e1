import React from "react";

export default function PricingSection() {
  return (
    <section className="section-gap bg-black py-20">
      <div className="container-main text-center flex flex-col items-center">

        {/* Título */}
        <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-white">
          Escolha o plano ideal<br />
          <span className="text-[#E4F64A]">para sua criação.</span>
        </h2>

        {/* Subtexto */}
        <p className="font-sora text-[15px] text-gray-300 mt-3 leading-relaxed max-w-[600px]">
          Planos flexíveis para criadores, editores e marcas que querem usar IA para melhorar vídeos.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16">

          {/* Plano 1 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 text-left border border-[#2A2A2A]">
            <h3 className="font-sora text-[20px] text-white font-semibold">
              Básico
            </h3>
            <p className="text-gray-400 text-[14px] mt-2">
              Ideal para criadores iniciantes.
            </p>

            <p className="text-white font-semibold text-[28px] mt-6">
              R$ 29<span className="text-[14px] text-gray-400">/mês</span>
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 text-[14px]">
              <li>✔ 5 análises por mês</li>
              <li>✔ Gráficos de retenção</li>
              <li>✔ Sugestões automáticas</li>
            </ul>

            <button className="mt-8 w-full bg-[#E4F64A] text-black font-sora font-semibold py-2 rounded-full hover:bg-[#d6e842] transition">
              Começar
            </button>
          </div>

          {/* Plano 2 — DESTAQUE */}
          <div className="bg-[#E4F64A] rounded-2xl p-8 text-left shadow-lg border border-[#F0FF86]">
            <h3 className="font-sora text-[20px] text-black font-semibold">
              Profissional
            </h3>
            <p className="text-[#3A3A3A] text-[14px] mt-2">
              Para quem quer crescer rápido.
            </p>

            <p className="text-black font-semibold text-[28px] mt-6">
              R$ 79<span className="text-[14px] text-[#4E4E4E]">/mês</span>
            </p>

            <ul className="mt-6 space-y-2 text-[#2F2F2F] text-[14px]">
              <li>✔ 25 análises por mês</li>
              <li>✔ Prioridade de processamento</li>
              <li>✔ Detecção avançada de emoção</li>
              <li>✔ Comparador com vídeos virais</li>
            </ul>

            <button className="mt-8 w-full bg-black text-[#E4F64A] font-sora font-semibold py-2 rounded-full hover:opacity-90 transition">
              Assinar agora
            </button>
          </div>

          {/* Plano 3 */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 text-left border border-[#2A2A2A]">
            <h3 className="font-sora text-[20px] text-white font-semibold">
              Ilimitado
            </h3>
            <p className="text-gray-400 text-[14px] mt-2">
              Para equipes, agências e marcas.
            </p>

            <p className="text-white font-semibold text-[28px] mt-6">
              R$ 149<span className="text-[14px] text-gray-400">/mês</span>
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 text-[14px]">
              <li>✔ Análises ilimitadas</li>
              <li>✔ IA avançada</li>
              <li>✔ Relatórios completos</li>
              <li>✔ Suporte prioritário</li>
            </ul>

            <button className="mt-8 w-full bg-[#E4F64A] text-black font-sora font-semibold py-2 rounded-full hover:bg-[#d6e842] transition">
              Começar agora
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
