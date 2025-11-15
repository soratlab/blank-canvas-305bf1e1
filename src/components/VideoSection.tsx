import React from "react";

export default function VideoSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-32 px-4">
      
      {/* Título */}
      <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black max-w-[700px]">
        Veja sua análise em ação
      </h2>

      {/* Subtexto */}
      <p className="font-sora text-[15px] text-[#868686] mt-3 max-w-[600px] leading-relaxed">
        A IA destaca momentos críticos, aponta quedas de retenção e sugere correções imediatas.
      </p>

      {/* Container do vídeo */}
      <div className="w-full max-w-[900px] mt-10">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#EDEDED] shadow-md aspect-video flex items-center justify-center">

          {/* Botão de play */}
          <button className="h-20 w-20 rounded-full bg-black bg-opacity-80 flex items-center justify-center hover:scale-110 transition">
            <span className="text-[#E4F64A] text-4xl">▶️</span>
          </button>

        </div>
      </div>

      {/* Texto abaixo do vídeo */}
      <p className="font-sora text-[14px] text-[#7A7A7A] mt-4 max-w-[600px]">
        Este é um exemplo de como a Sorat.ai identifica padrões e sugere melhorias em segundos.
      </p>

    </section>
  );
}
