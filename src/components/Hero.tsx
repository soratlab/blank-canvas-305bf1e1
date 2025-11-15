import React from "react";

export default function Hero() {
  return (
    <section className="section-gap">
      <div className="container-main flex flex-col items-center text-center">

        {/* Texto principal */}
        <h1 className="font-sora font-semibold text-[32px] leading-tight text-black max-w-[780px]">
          Direção criativa por IA: identifique<br />
          quedas de retenção e corrija na hora.
        </h1>

        {/* Subtexto */}
        <p className="font-sora text-[15px] text-[#868686] mt-3 max-w-[600px] leading-relaxed">
          A inteligência artificial detecta momentos críticos no vídeo.<br />
          Substitua “achismo” por “precisão” em minutos.
        </p>

        {/* Botão */}
        <button
          className="mt-6 bg-[#E4F64A] hover:bg-[#d6e842] transition-colors
                     text-black font-sora font-semibold px-6 py-2 
                     rounded-full text-[14px]"
        >
          Rodar análise grátis →
        </button>

        {/* Cards principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 w-full">

          {/* Card 1 */}
          <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-sm">
            <p className="font-sora font-semibold text-[14px] text-black">
              1. Pega o impacto
            </p>
            <span className="block text-[12px] text-[#7A7A7A] mt-2">
              Envia o link
            </span>
          </div>

          {/* Card 2 (verde destaque) */}
          <div className="bg-[#E4F64A] rounded-xl p-6 shadow-sm">
            <p className="font-sora font-semibold text-[14px] text-black">
              2. IA Inteligência
            </p>
            <span className="block text-[12px] text-[#4E4E4E] mt-2">
              A IA analisa tudo: quedas de retenção e momentos críticos.
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2F2F2F] rounded-xl p-6 shadow-sm">
            <p className="font-sora font-semibold text-[14px] text-white">
              3. Correção
            </p>
            <span className="block text-[12px] text-[#C6C6C6] mt-2">
              Alertas, sugestões e correções automáticas para você editar antes de publicar.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
