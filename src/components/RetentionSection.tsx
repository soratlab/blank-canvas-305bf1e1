import React from "react";

export default function RetentionSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-32 px-4">

      {/* Título */}
      <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black max-w-[700px]">
        Aumente retenção. <span className="text-[#E4F64A]">Melhore impacto.</span>
      </h2>

      {/* Subtexto */}
      <p className="font-sora text-[15px] text-[#868686] mt-3 max-w-[600px] leading-relaxed">
        Descubra imediatamente os pontos fracos do vídeo.<br />
        A IA faz o diagnóstico para você ajustar antes de publicar.
      </p>

      {/* Ícones principais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 max-w-[1000px] w-full">

        {/* Item 1 — HOOK */}
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center">
            <span className="text-[#E4F64A] text-[20px] font-bold">⚡</span>
          </div>
          <p className="font-sora font-semibold text-[14px] text-black mt-3">
            Hook
          </p>
          <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px]">
            Identifica início fraco e sugere abertura mais forte.
          </span>
        </div>

        {/* Item 2 — RITMO */}
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center">
            <span className="text-[#E4F64A] text-[20px] font-bold">🎵</span>
          </div>
          <p className="font-sora font-semibold text-[14px] text-black mt-3">
            Ritmo
          </p>
          <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px]">
            Analisa cortes lentos e sugere ritmo ideal.
          </span>
        </div>

        {/* Item 3 — EMOÇÃO */}
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center">
            <span className="text-[#E4F64A] text-[20px] font-bold">💛</span>
          </div>
          <p className="font-sora font-semibold text-[14px] text-black mt-3">
            Emoção
          </p>
          <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px]">
            Mede onde o espectador perde interesse.
          </span>
        </div>

        {/* Item 4 — COMPARADOR */}
        <div className="flex flex-col items-center">
          <div className="h-14 w-14 rounded-xl bg-black flex items-center justify-center">
            <span className="text-[#E4F64A] text-[20px] font-bold">📊</span>
          </div>
          <p className="font-sora font-semibold text-[14px] text-black mt-3">
            Comparador
          </p>
          <span className="block text-[12px] text-[#7A7A7A] mt-1 max-w-[140px]">
            Compara desempenho com vídeos similares.
          </span>
        </div>

      </div>
    </section>
  );
}
