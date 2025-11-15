import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mt-32 px-4">
      
      {/* Título */}
      <h2 className="font-sora font-semibold text-[28px] md:text-[32px] text-black leading-tight">
        Perguntas Frequentes
      </h2>

      {/* Subtexto */}
      <p className="font-sora text-[15px] text-[#7A7A7A] max-w-[600px] mt-3 leading-relaxed">
        Tudo o que você precisa saber antes de começar.
      </p>

      {/* Accordion */}
      <div className="w-full max-w-[700px] mt-10 text-left">
        <Accordion type="single" collapsible>

          {/* Pergunta 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-sora text-[16px] text-black">
              Como a análise da IA funciona?
            </AccordionTrigger>
            <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
              Nossa IA avalia ritmo, emoção, retenção e pontos críticos do vídeo
              usando modelos avançados de percepção audiovisual.
            </AccordionContent>
          </AccordionItem>

          {/* Pergunta 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-sora text-[16px] text-black">
              Preciso enviar o vídeo completo?
            </AccordionTrigger>
            <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
              Não. Basta colar o link do vídeo ou fazer upload. O sistema faz todo o
              processamento automaticamente.
            </AccordionContent>
          </AccordionItem>

          {/* Pergunta 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-sora text-[16px] text-black">
              A ferramenta serve para qualquer nicho?
            </AccordionTrigger>
            <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
              Sim. Criadores, empresas, editores e equipes de produção usam diariamente
              para melhorar conteúdo.
            </AccordionContent>
          </AccordionItem>

          {/* Pergunta 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-sora text-[16px] text-black">
              Existe limite de análises?
            </AccordionTrigger>
            <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
              Depende do plano escolhido. Planos superiores têm maior ou ilimitado número
              de análises.
            </AccordionContent>
          </AccordionItem>

          {/* Pergunta 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-sora text-[16px] text-black">
              Posso cancelar a qualquer momento?
            </AccordionTrigger>
            <AccordionContent className="font-sora text-[14px] text-[#5A5A5A]">
              Sim! Não há fidelidade. Você cancela com 1 clique diretamente no painel.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}
