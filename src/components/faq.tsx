"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "O que é o ZapMini?",
    answer:
      "O ZapMini é uma ferramenta gratuita que gera links personalizados para o WhatsApp, permitindo que você inicie conversas com mensagens automáticas e facilite o contato com seu público.",
  },
  {
    question: "Preciso instalar algo para usar o ZapMini?",
    answer:
      "Não! O ZapMini funciona 100% online no seu navegador. Basta acessar o site, preencher os campos e gerar seu link.",
  },
  {
    question: "Como funciona o link gerado?",
    answer:
      "O link criado abre diretamente uma conversa no WhatsApp com a mensagem personalizada que você definir. Ele pode ser compartilhado em redes sociais, sites, e-mails e muito mais.",
  },
  {
    question: "É possível usar acentos e emojis na mensagem?",
    answer:
      "Sim! Você pode escrever normalmente com acentos e adicionar emojis. O ZapMini faz toda a codificação automaticamente para funcionar corretamente no WhatsApp.",
  },
  {
    question: "Posso encurtar ou personalizar o link?",
    answer:
      "No momento, o ZapMini gera links padrão do WhatsApp. Para encurtar ou personalizar, recomendamos usar serviços como Bit.ly ou encurtadores com seu domínio próprio.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-10">
          Perguntas Frequentes
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-3 sm:px-6 sm:py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 sm:px-6 text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}