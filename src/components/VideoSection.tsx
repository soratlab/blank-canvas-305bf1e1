import React from "react";

export default function VideoSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-28 px-4">

      {/* Título */}
      <h2 className="font-sora font-semibold text-[26px] md:text-[30px] leading-tight text-black">
        Veja como funciona <span className="text-[#E4F64A]">na prática</span>
      </h2>

      {/* Subtexto */}
      <p className="font-sora text-[14px] text-[#7A7A7A] mt-2 max-w-[520px] leading-relaxed">
        Assista uma explicação rápida do processo de análise e ajustes recomendados pela IA.
      </p>

      {/* Video Container */}
      <div className="w-full max-w-[950px] h-[420px] bg-[#E6E7E8] mt-12 rounded-2xl flex items-center justify-center shadow-sm relative">
        <div className="h-20 w-20 rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-90 transition">
          <span className="text-[#E4F64A] text-[42px] ml-1">▶</span>
        </div>
      </div>
    </section>
  );
}
