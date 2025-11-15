import React from "react";
import Reveal from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section id="faq" className="section-gap">
      <div className="container-main flex flex-col items-center text-center">

        {/* Título */}
        <Reveal>
          <h2 className="font-sora font-semibold text-[28px] md:text-[32px] leading-tight text-black">
            Perguntas Frequentes
          </h2>
        </Reveal>

        {/* Subtexto */}
        <Reveal delay={0.1}>
          <p className="font-sora text-[15px] text-[#7A7A7A] mt-3 max-w-[600px] leading-relaxed">
            Tudo o que você precisa saber antes de começar.
          </p>
        </Reveal>

        {/* Acordeões */}
        <Reveal delay={0.2}>
          <div className="w-full max-w-[720px] mt-12 text-left">
            <Accordion type="single" collapsible>

              {/* 1 */}
              <AccordionItem value="item-1" className="border-b border-[#E6E7E8] py-4">
                <AccordionTrigger className="font-sora text-[16px] text-black hover:no-underline">
                  Como a análise da IA funciona?
                </AccordionTrigger>
                <AccordionContent className="font-sora text-[14px] text-[#5A5A5A] leading-relaxed">
                  A IA analisa seu vídeo frame a frame, detectando quedas de retenção,
                  emoção, ritmo e pontos críticos antes da publicação.
                </AccordionContent>
              </AccordionItem>

              {/* 2 */}
              <AccordionItem value="item-2" className="border-b border-[#E6E7E8] py-4">
                <AccordionTrigger className="font-sora text-[16px] text-black hover:no-underline">
                  Preciso enviar o vídeo completo?
                </AccordionTrigger>
                <AccordionContent className="font-sora text-[14px] text-[#5A5A5A] leading-relaxed">
                  Não. Você pode enviar o link ou fazer upload. O processamento ocorre automaticamente.
                </AccordionContent>
              </AccordionItem>

              {/* 3 */}
              <AccordionItem value="item-3" className="border-b border-[#E6E7E8] py-4">
                <AccordionTrigger className="font-sora text-[16px] text-black hover:no-underline">
                  Funciona para qualquer nicho?
                </AccordionTrigger>
                <AccordionContent className="font-sora text-[14px] text-[#5A5A5A] leading-relaxed">
                  Sim. Criadores, marcas e equipes de edição usam diariamente em diferentes nichos.
                </AccordionContent>
              </AccordionItem>

              {/* 4 */}
              <AccordionItem value="item-4" className="border-b border-[#E6E7E8] py-4">
                <AccordionTrigger className="font-sora text-[16px] text-black hover:no-underline">
                  Existe limite de análises?
                </AccordionTrigger>
                <AccordionContent className="font-sora text-[14px] text-[#5A5A5A] leading-relaxed">
                  Depende do plano. Os superiores oferecem maior volume ou ilimitado.
                </AccordionContent>
              </AccordionItem>

              {/* 5 */}
              <AccordionItem value="item-5" className="border-b border-[#E6E7E8] py-4">
                <AccordionTrigger className="font-sora text-[16px] text-black hover:no-underline">
                  Posso cancelar quando quiser?
                </AccordionTrigger>
                <AccordionContent className="font-sora text-[14px] text-[#5A5A5A] leading-relaxed">
                  Sim. O cancelamento é instantâneo, sem taxas e feito diretamente no painel.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
