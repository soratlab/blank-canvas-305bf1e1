import React from "react";
import Reveal from "./Reveal";

export default function PricingSection() {
  return (
    <section id="pricing" className="section-gap bg-black py-20">
      <div className="container-main text-center flex flex-col items-center">

        {/* Título */}
        <Reveal>
          <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-white">
            Escolha o plano ideal<br />
            <span className="text-[#E4F64A]">para sua criação.</span>
          </h2>
        </Reveal>

        {/* Subtexto */}
        <Reveal delay={0.1}>
          <p className="font-sora text-[15px] text-gray-300 mt-3 leading-relaxed max-w-[600px]">
            Planos flexíveis para criadores, editores e marcas que usam IA para melhorar vídeos.
          </p>
        </Reveal>

        {/* GRID DE PLANOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16">

          {/* PLANO 1 — BÁSICO */}
          <Reveal delay={0.05}>
            <div className="
              bg-[#1A1A1A]
              rounded-2xl
              p-8
              text-left
              border border-[#2A2A2A]
              shadow-[0_6px_22px_rgba(0,0,0,0.28)]
            ">
              <h3 className="font-sora text-[20px] text-white font-semibold">
                Básico
              </h3>
              <p className="text-gray-400 text-[14px] mt-2">
                Ideal para criadores iniciantes.
              </p>

              <p className="text-white font-semibold text-[28px] mt-6">
                R$ 29<span className="text-[14px] text-gray-400">/mês</span>
              </p>

              <ul className="mt-6 space-y-2 text-gray-300 text-[14px] leading-relaxed">
                <li>✔ 5 análises por mês</li>
                <li>✔ Gráficos de retenção</li>
                <li>✔ Sugestões automáticas</li>
              </ul>

              <button
                className="
                  mt-8 w-full bg-[#E4F64A] text-black font-sora font-semibold py-2 rounded-full
                  hover:brightness-95 active:scale-[0.97]
                  transition-all duration-200
                "
              >
                Começar
              </button>
            </div>
          </Reveal>

          {/* PLANO 2 — PROFISSIONAL (DESTAQUE) */}
          <Reveal delay={0.15}>
            <div className="
              bg-[#E4F64A]
              rounded-2xl
              p-8
              text-left
              shadow-[0_12px_30px_rgba(0,0,0,0.35)]
              border border-[#F0FF86]
              scale-[1.02]
            ">
              <h3 className="font-sora text-[20px] text-black font-semibold">
                Profissional
              </h3>
              <p className="text-[#3A3A3A] text-[14px] mt-2">
                Para quem quer crescer rápido.
              </p>

              <p className="text-black font-semibold text-[28px] mt-6">
                R$ 79<span className="text-[14px] text-[#4E4E4E]">/mês</span>
              </p>

              <ul className="mt-6 space-y-2 text-[#2F2F2F] text-[14px] leading-relaxed">
                <li>✔ 25 análises por mês</li>
                <li>✔ Prioridade de processamento</li>
                <li>✔ Detecção avançada de emoção</li>
                <li>✔ Comparador com vídeos virais</li>
              </ul>

              <button
                className="
                  mt-8 w-full bg-black text-[#E4F64A] font-sora font-semibold py-2 rounded-full
                  hover:opacity-90 active:scale-[0.97]
                  transition-all duration-200
                "
              >
                Assinar agora
              </button>
            </div>
          </Reveal>

          {/* PLANO 3 — ILIMITADO */}
          <Reveal delay={0.25}>
            <div className="
              bg-[#1A1A1A]
              rounded-2xl
              p-8
              text-left
              border border-[#2A2A2A]
              shadow-[0_6px_22px_rgba(0,0,0,0.28)]
            ">
              <h3 className="font-sora text-[20px] text-white font-semibold">
                Ilimitado
              </h3>
              <p className="text-gray-400 text-[14px] mt-2">
                Para equipes, agências e marcas.
              </p>

              <p className="text-white font-semibold text-[28px] mt-6">
                R$ 149<span className="text-[14px] text-gray-400">/mês</span>
              </p>

              <ul className="mt-6 space-y-2 text-gray-300 text-[14px] leading-relaxed">
                <li>✔ Análises ilimitadas</li>
                <li>✔ IA avançada</li>
                <li>✔ Relatórios completos</li>
                <li>✔ Suporte prioritário</li>
              </ul>

              <button
                className="
                  mt-8 w-full bg-[#E4F64A] text-black font-sora font-semibold py-2 rounded-full
                  hover:brightness-95 active:scale-[0.97]
                  transition-all duration-200
                "
              >
                Começar agora
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
