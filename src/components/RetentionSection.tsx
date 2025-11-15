import React from "react";
import Reveal from "./Reveal";

export default function RetentionSection() {
  return (
    <section className="section-gap">
      <div className="container-main flex flex-col items-center text-center">

        <Reveal>
          <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black">
            Aumente retenção. <span className="text-[#E4F64A]">Melhore impacto.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-sora text-[15px] text-[#868686] mt-3 leading-relaxed max-w-[600px]">
            Descubra imediatamente os pontos fracos do vídeo.<br />
            A IA faz o diagnóstico para você ajustar antes de publicar.
          </p>
        </Reveal>

        {/* GRID DE ITENS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 w-full">

          {/* Item 1 */}
          <Reveal delay={0.05}>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.12)]">
                <span className="text-[#E4F64A] text-[20px] font-bold">⚡</span>
              </div>
              <p className="font-sora font-semibold text-[14px] text-black mt-3">
                Hook
              </p>
              <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px] leading-relaxed">
                Identifica início fraco e sugere abertura mais forte.
              </span>
            </div>
          </Reveal>

          {/* Item 2 */}
          <Reveal delay={0.15}>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.12)]">
                <span className="text-[#E4F64A] text-[20px] font-bold">🎵</span>
              </div>
              <p className="font-sora font-semibold text-[14px] text-black mt-3">
                Ritmo
              </p>
              <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px] leading-relaxed">
                Analisa cortes lentos e sugere ritmo ideal.
              </span>
            </div>
          </Reveal>

          {/* Item 3 */}
          <Reveal delay={0.25}>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.12)]">
                <span className="text-[#E4F64A] text-[20px] font-bold">💛</span>
              </div>
              <p className="font-sora font-semibold text-[14px] text-black mt-3">
                Emoção
              </p>
              <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px] leading-relaxed">
                Mede onde o espectador perde interesse.
              </span>
            </div>
          </Reveal>

          {/* Item 4 */}
          <Reveal delay={0.35}>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center shadow-[0_4px_14px_0_rgba(0,0,0,0.12)]">
                <span className="text-[#E4F64A] text-[20px] font-bold">📊</span>
              </div>
              <p className="font-sora font-semibold text-[14px] text-black mt-3">
                Comparador
              </p>
              <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px] leading-relaxed">
                Compara desempenho com vídeos similares.
              </span>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
