import React, { useState } from "react";

const faqs = [
  {
    question: "Como funciona a análise de retenção?",
    answer:
      "A IA identifica trechos com perda de atenção e sinaliza onde ajustar ritmo, cortes e impacto emocional.",
  },
  {
    question: "Posso usar em vídeos longos?",
    answer:
      "Sim. Aceita vídeos curtos e longos. A IA se adapta ao formato e identifica pontos críticos.",
  },
  {
    question: "O plano Pro vale para equipes?",
    answer:
      "Sim. O Pro possibilita análises mais profundas e é utilizado por agências e equipes criativas.",
  },
  {
    question: "Como são feitas as sugestões automáticas?",
    answer:
      "A IA analisa métricas, emoções e retenção, oferecendo ajustes diretos para otimizar o vídeo antes da publicação.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full flex flex-col items-center text-center mt-32 px-4">

      {/* Título */}
      <h2 className="font-sora font-semibold text-[28px] md:text-[32px] text-black">
        Perguntas frequentes
      </h2>

      <p className="font-sora text-[14px] text-[#7A7A7A] mt-2 mb-10">
        Tudo o que você precisa saber antes de começar.
      </p>

      {/* FAQ LIST */}
      <div className="w-full max-w-[900px] text-left space-y-4">

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-[#E6E7E8] rounded-xl p-5 cursor-pointer bg-white"
            onClick={() => toggle(i)}
          >
            <div className="flex items-center justify-between">
              <p className="font-sora font-semibold text-[15px] text-black">
                {faq.question}
              </p>

              <span className="text-black font-sora text-[20px]">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>

            {openIndex === i && (
              <p className="font-sora text-[13px] text-[#5A5A5A] mt-3 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
