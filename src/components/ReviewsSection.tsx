import React from "react";
import Reveal from "./Reveal";

export default function ReviewsSection() {
  return (
    <section className="section-gap">
      <div className="container-main text-center flex flex-col items-center">

        {/* Título */}
        <Reveal>
          <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black">
            Quem usa aprova.
          </h2>
        </Reveal>

        {/* Subtexto */}
        <Reveal delay={0.1}>
          <p className="font-sora text-[15px] text-[#868686] mt-3 max-w-[550px] leading-relaxed">
            Criadores, editores e marcas usam diariamente para melhorar vídeos e acelerar resultados.
          </p>
        </Reveal>

        {/* GRID DE REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full">

          {/* CARD 1 */}
          <Reveal delay={0.05}>
            <div className="bg-white border border-[#E6E7E8] rounded-xl p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)] text-left">
              <p className="font-sora text-[14px] text-black leading-relaxed">
                “Minha retenção subiu 32% só ajustando os cortes que a IA apontou.
                É surreal o quanto isso ajuda.”
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#E4F64A]"></div>
                <div>
                  <p className="font-sora text-[13px] font-semibold text-black">Mariana T.</p>
                  <p className="font-sora text-[12px] text-[#777]">Criadora de Conteúdo</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 2 (DESTAQUE) */}
          <Reveal delay={0.15}>
            <div className="bg-[#E4F64A] rounded-xl p-6 shadow-[0_8px_22px_rgba(0,0,0,0.10)] text-left">
              <p className="font-sora text-[14px] text-black leading-relaxed">
                “O comparador de vídeos é simplesmente o melhor recurso.
                Consigo entender exatamente o que está funcionando.”
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-black"></div>
                <div>
                  <p className="font-sora text-[13px] font-semibold text-black">Diego R.</p>
                  <p className="font-sora text-[12px] text-[#3F3F3F]">Editor Profissional</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 3 */}
          <Reveal delay={0.25}>
            <div className="bg-white border border-[#E6E7E8] rounded-xl p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)] text-left">
              <p className="font-sora text-[14px] text-black leading-relaxed">
                “Economizei horas tentando adivinhar onde o vídeo caía.
                Agora eu só ajusto conforme as sugestões.”
              </p>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#E4F64A]"></div>
                <div>
                  <p className="font-sora text-[13px] font-semibold text-black">Lucas M.</p>
                  <p className="font-sora text-[12px] text-[#777]">Social Media</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
