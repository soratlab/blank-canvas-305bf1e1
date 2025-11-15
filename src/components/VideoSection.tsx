import React from "react";
import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section className="section-gap">
      <div className="container-main flex flex-col items-center text-center">

        {/* Título */}
        <Reveal>
          <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black">
            Veja sua análise na prática.
          </h2>
        </Reveal>

        {/* Subtexto */}
        <Reveal delay={0.1}>
          <p className="font-sora text-[15px] text-[#868686] mt-3 max-w-[600px] leading-relaxed">
            A IA gera uma análise visual clara e direta, mostrando exatamente onde ajustar.
          </p>
        </Reveal>

        {/* PLAYER / VIDEO MOCK */}
        <Reveal delay={0.2}>
          <div
            className="
              w-full 
              max-w-[920px] 
              h-[380px] 
              md:h-[480px]
              bg-gradient-to-b from-[#F4F4F4] to-[#DEDEDE]
              rounded-2xl 
              mt-14
              shadow-[0_6px_20px_rgba(0,0,0,0.10)]
              border border-[#DCDCDC]
              flex items-center justify-center
            "
          >
            <div className="flex items-center justify-center flex-col">
              <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center shadow-lg">
                <div className="h-0 w-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-white ml-[4px]"></div>
              </div>

              <p className="font-sora text-[13px] text-[#7A7A7A] mt-4">
                Prévia da análise de vídeo
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
