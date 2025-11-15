import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="section-gap" id="faq">
      <div className="container-main text-center flex flex-col items-center">

        {/* Título */}
        <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black">
          Perguntas Frequentes
        </h2>

        {/* Subtexto */}
        <p className="font-sora text-[15px] text-[#7A7A7A] mt-3 max-w-[600px] leading-relaxed">
          Tudo o que você precisa saber antes de começar.
        </p>

        {/* Acordeões */}
        <div className="w-full max-w-[700px] mt-12 text-left">
          <Accordion type="single" collapsible>

            {/* 1 */}
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-sora text-[16px] text-black">
                Como a análise da IA funciona?
              </AccordionTrigger>
              <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
                A IA analisa seu vídeo frame a frame, detectando quedas de retenção,
                emoção, ritmo e pontos críticos antes da publicação.
              </AccordionContent>
            </AccordionItem>

            {/* 2 */}
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-sora text-[16px] text-black">
                Preciso enviar o vídeo completo?
              </AccordionTrigger>
              <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
                Não. Você pode enviar o link ou fazer upload. O processamento ocorre automático.
              </AccordionContent>
            </AccordionItem>

            {/* 3 */}
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-sora text-[16px] text-black">
                Funciona para qualquer nicho?
              </AccordionTrigger>
              <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
                Sim. Criadores, marcas e equipes de edição usam diariamente em diferentes nichos.
              </AccordionContent>
            </AccordionItem>

            {/* 4 */}
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-sora text-[16px] text-black">
                Existe limite de análises?
              </AccordionTrigger>
              <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
                Depende do plano. Planos superiores oferecem maior ou ilimitado volume de análises.
              </AccordionContent>
            </AccordionItem>

            {/* 5 */}
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-sora text-[16px] text-black">
                Posso cancelar quando quiser?
              </AccordionTrigger>
              <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
                Sim. O cancelamento é instantâneo e sem taxas — feito pelo painel.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}
