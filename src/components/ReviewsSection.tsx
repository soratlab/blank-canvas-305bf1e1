import React from "react";

export default function ReviewsSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-24 px-4">

      {/* Título */}
      <h2 className="font-sora font-semibold text-[18px] md:text-[20px] text-black">
        Quem usa, recomenda
      </h2>

      <p className="font-sora text-[13px] text-[#7A7A7A] mt-1">
        +2.900 análises aplicadas em criadores, agências e marcas.
      </p>

      {/* Container dos depoimentos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-[1000px] w-full">

        {/* Depoimento 1 */}
        <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 shadow-sm flex flex-col items-center">
          <img
            src="/avatars/avatar1.png"
            className="h-12 w-12 rounded-full object-cover mb-3"
            alt="avatar"
          />

          <p className="font-sora font-semibold text-[14px] text-black">
            Cláudia Reis — Motion Designer
          </p>

          <p className="font-sora text-[13px] text-[#6F6F6F] mt-2 leading-relaxed max-w-[240px]">
            “A IA mostrou os pontos onde a queda de retenção era de 35% para 12%. 
            Consegui corrigir na hora.”
          </p>
        </div>

        {/* Depoimento 2 */}
        <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 shadow-sm flex flex-col items-center">
          <img
            src="/avatars/avatar2.png"
            className="h-12 w-12 rounded-full object-cover mb-3"
            alt="avatar"
          />

          <p className="font-sora font-semibold text-[14px] text-black">
            João Martins — Social Media
          </p>

          <p className="font-sora text-[13px] text-[#6F6F6F] mt-2 leading-relaxed max-w-[240px]">
            “Recomendo demais! Me ajudou a entender onde meus vídeos perdiam impacto.”
          </p>
        </div>

        {/* Depoimento 3 */}
        <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 shadow-sm flex flex-col items-center">
          <img
            src="/avatars/avatar3.png"
            className="h-12 w-12 rounded-full object-cover mb-3"
            alt="avatar"
          />

          <p className="font-sora font-semibold text-[14px] text-black">
            Renata Silva — Gestora de Tráfego
          </p>

          <p className="font-sora text-[13px] text-[#6F6F6F] mt-2 leading-relaxed max-w-[240px]">
            “Aperfeiçoei meus criativos em minutos. Os insights são diretos e práticos.”
          </p>
        </div>

      </div>
    </section>
  );
}
