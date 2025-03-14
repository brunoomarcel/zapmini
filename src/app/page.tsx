'use client';
import Button from "@/components/Button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountrySelect from "@/components/CountrySelect";

export default function Home() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [savedNumber, setSavedNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [optionValue, setOptionValue] = useState('');

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    if (inputValue.length > 11) inputValue = inputValue.slice(0, 11);
    let formattedNumber = inputValue.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");

    setNumber(formattedNumber);
  };

  const handleChangeCountryCode = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setOptionValue(event.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const rawNumber = number.replace(/\D/g,"");
    if (number.length < 11) {
      alert("O número deve ter 11 dígitos (DDD + número).");
      return;
    }

    const formattedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
    const whatsappLink = `https://wa.me/${optionValue}${rawNumber}${formattedMessage}`;

    setSavedNumber(whatsappLink);
    setFormSubmitted(true);
  };

  const copySavedNumber = (savedNumber: string) => {
    return navigator.clipboard.writeText(savedNumber);
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">Gerador de Link do WhatsApp</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Escolha o país</label>
              <CountrySelect value={optionValue} onChange={handleChangeCountryCode} />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Digite o seu número</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={number}
                  onChange={handleNumberChange}
                  required
                  placeholder="(DDD) XXXXX-XXXX"
                />
            </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-1">Mensagem Inicial (opcional)</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite uma mensagem..."
                />
              </div>
              

            <Button />
          </form>

          {formSubmitted && savedNumber && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-center">
              <h2 className="text-lg font-semibold text-green-700">Seu link do WhatsApp:</h2>
              <div><a 
                href={savedNumber} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline break-all"
              >
                {savedNumber}
              </a></div>
              <div><button
                className="mt-4 bg-gray-400 text-white rounded-md px-4 py-2 hover:bg-gray-500"
                // onClick={copySavedNumber(savedNumber)}
                onClick={() => copySavedNumber(savedNumber)}
              >Copiar</button></div>             
              
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
