Cole exatamente assim:

import React from "react";

export default function ReviewsSection() {
  return (
    <section className="section-gap">
      <div className="container-main text-center flex flex-col items-center">

        {/* Título */}
        <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black">
          Criadores aprovam.<br />
          <span className="text-[#E4F64A]">Marcas recomendam.</span>
        </h2>

        {/* Subtexto */}
        <p className="font-sora text-[15px] text-[#868686] mt-3 leading-relaxed max-w-[600px]">
          Depoimentos reais de quem já usa IA para aumentar retenção e melhorar resultados.
        </p>

        {/* Lista de reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 w-full">

          {/* Card 1 */}
          <div className="p-6 bg-[#F5F5F5] rounded-xl shadow-sm text-left">
            <p className="font-sora text-[14px] text-black font-semibold mb-2">
              “Me ajudou a entender onde meu vídeo morria.”
            </p>
            <span className="block text-[12px] text-[#7A7A7A]">
              Lucas Andrade — Criador & Editor
            </span>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-[#E4F64A] rounded-xl shadow-sm text-left">
            <p className="font-sora text-[14px] text-black font-semibold mb-2">
              “A IA mostrou cortes ruins que eu nem percebia.”
            </p>
            <span className="block text-[12px] text-[#2F2F2F]">
              Mariana Silva — Social Media
            </span>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-[#2F2F2F] rounded-xl shadow-sm text-left">
            <p className="font-sora text-[14px] text-white font-semibold mb-2">
              “Os gráficos de retenção salvaram meu lançamento.”
            </p>
            <span className="block text-[12px] text-[#C6C6C6]">
              Renato Barros — Produtor Digital
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
