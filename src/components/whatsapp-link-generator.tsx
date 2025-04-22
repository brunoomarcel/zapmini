"use client"

import type React from "react"

import { useState } from "react"
import { Smartphone, Copy, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface DDD {
  ddd: string
  estado: string
  regiao: string
}

export default function WhatsAppLinkGenerator() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isValidNumber, setIsValidNumber] = useState(false)
  const [ddd, setDDD] = useState("11")
  const [message, setMessage] = useState("")
  const [customLink, setCustomLink] = useState("")
  const [showDDDList, setShowDDDList] = useState(false)
  const [searchDDD, setSearchDDD] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")
  const [activeTab, setActiveTab] = useState("message")
  const [copied, setCopied] = useState(false)

  // Lista de DDDs brasileiros com seus respectivos estados
  const ddds: DDD[] = [
    { ddd: "11", estado: "São Paulo", regiao: "Capital e Região Metropolitana" },
    { ddd: "12", estado: "São Paulo", regiao: "Vale do Paraíba" },
    { ddd: "13", estado: "São Paulo", regiao: "Baixada Santista" },
    { ddd: "14", estado: "São Paulo", regiao: "Bauru e Região" },
    { ddd: "15", estado: "São Paulo", regiao: "Sorocaba e Região" },
    { ddd: "16", estado: "São Paulo", regiao: "Ribeirão Preto e Região" },
    { ddd: "17", estado: "São Paulo", regiao: "São Jos�� do Rio Preto e Região" },
    { ddd: "18", estado: "São Paulo", regiao: "Presidente Prudente e Região" },
    { ddd: "19", estado: "São Paulo", regiao: "Campinas e Região" },
    { ddd: "21", estado: "Rio de Janeiro", regiao: "Capital e Região Metropolitana" },
    { ddd: "22", estado: "Rio de Janeiro", regiao: "Interior" },
    { ddd: "24", estado: "Rio de Janeiro", regiao: "Região Serrana" },
    { ddd: "27", estado: "Espírito Santo", regiao: "Capital e Região Metropolitana" },
    { ddd: "28", estado: "Espírito Santo", regiao: "Interior" },
    { ddd: "31", estado: "Minas Gerais", regiao: "Belo Horizonte e Região" },
    { ddd: "32", estado: "Minas Gerais", regiao: "Juiz de Fora e Região" },
    { ddd: "33", estado: "Minas Gerais", regiao: "Governador Valadares e Região" },
    { ddd: "34", estado: "Minas Gerais", regiao: "Uberlândia e Região" },
    { ddd: "35", estado: "Minas Gerais", regiao: "Poços de Caldas e Região" },
    { ddd: "37", estado: "Minas Gerais", regiao: "Divinópolis e Região" },
    { ddd: "38", estado: "Minas Gerais", regiao: "Montes Claros e Região" },
    { ddd: "41", estado: "Paraná", regiao: "Curitiba e Região Metropolitana" },
    { ddd: "42", estado: "Paraná", regiao: "Ponta Grossa e Região" },
    { ddd: "43", estado: "Paraná", regiao: "Londrina e Região" },
    { ddd: "44", estado: "Paraná", regiao: "Maringá e Região" },
    { ddd: "45", estado: "Paraná", regiao: "Cascavel e Região" },
    { ddd: "46", estado: "Paraná", regiao: "Francisco Beltrão e Região" },
    { ddd: "47", estado: "Santa Catarina", regiao: "Joinville e Região" },
    { ddd: "48", estado: "Santa Catarina", regiao: "Florianópolis e Região" },
    { ddd: "49", estado: "Santa Catarina", regiao: "Chapecó e Região" },
    { ddd: "51", estado: "Rio Grande do Sul", regiao: "Porto Alegre e Região" },
    { ddd: "53", estado: "Rio Grande do Sul", regiao: "Pelotas e Região" },
    { ddd: "54", estado: "Rio Grande do Sul", regiao: "Caxias do Sul e Região" },
    { ddd: "55", estado: "Rio Grande do Sul", regiao: "Santa Maria e Região" },
    { ddd: "61", estado: "Distrito Federal", regiao: "Brasília e Região" },
    { ddd: "62", estado: "Goiás", regiao: "Goiânia e Região" },
    { ddd: "63", estado: "Tocantins", regiao: "Todo o Estado" },
    { ddd: "64", estado: "Goiás", regiao: "Rio Verde e Região" },
    { ddd: "65", estado: "Mato Grosso", regiao: "Cuiabá e Região" },
    { ddd: "66", estado: "Mato Grosso", regiao: "Rondonópolis e Região" },
    { ddd: "67", estado: "Mato Grosso do Sul", regiao: "Todo o Estado" },
    { ddd: "68", estado: "Acre", regiao: "Todo o Estado" },
    { ddd: "69", estado: "Rondônia", regiao: "Todo o Estado" },
    { ddd: "71", estado: "Bahia", regiao: "Salvador e Região" },
    { ddd: "73", estado: "Bahia", regiao: "Ilhéus e Região" },
    { ddd: "74", estado: "Bahia", regiao: "Juazeiro e Região" },
    { ddd: "75", estado: "Bahia", regiao: "Feira de Santana e Região" },
    { ddd: "77", estado: "Bahia", regiao: "Vitória da Conquista e Região" },
    { ddd: "79", estado: "Sergipe", regiao: "Todo o Estado" },
    { ddd: "81", estado: "Pernambuco", regiao: "Recife e Região" },
    { ddd: "82", estado: "Alagoas", regiao: "Todo o Estado" },
    { ddd: "83", estado: "Paraíba", regiao: "Todo o Estado" },
    { ddd: "84", estado: "Rio Grande do Norte", regiao: "Todo o Estado" },
    { ddd: "85", estado: "Ceará", regiao: "Fortaleza e Região" },
    { ddd: "86", estado: "Piauí", regiao: "Teresina e Região" },
    { ddd: "87", estado: "Pernambuco", regiao: "Interior" },
    { ddd: "88", estado: "Ceará", regiao: "Interior" },
    { ddd: "89", estado: "Piauí", regiao: "Interior" },
    { ddd: "91", estado: "Pará", regiao: "Belém e Região" },
    { ddd: "92", estado: "Amazonas", regiao: "Manaus e Região" },
    { ddd: "93", estado: "Pará", regiao: "Santarém e Região" },
    { ddd: "94", estado: "Pará", regiao: "Marabá e Região" },
    { ddd: "95", estado: "Roraima", regiao: "Todo o Estado" },
    { ddd: "96", estado: "Amapá", regiao: "Todo o Estado" },
    { ddd: "97", estado: "Amazonas", regiao: "Interior" },
    { ddd: "98", estado: "Maranhão", regiao: "São Luís e Região" },
    { ddd: "99", estado: "Maranhão", regiao: "Interior" },
  ]

  const filteredDDDs = ddds.filter(
    (item) =>
      item.ddd.includes(searchDDD) ||
      item.estado.toLowerCase().includes(searchDDD.toLowerCase()) ||
      item.regiao.toLowerCase().includes(searchDDD.toLowerCase()),
  )

  const generateLink = () => {
    const baseUrl = "https://wa.me/"
    // Código do Brasil (55) + DDD + número
    const formattedPhone = `55${ddd}${phoneNumber.replace(/\D/g, "")}`
    const encodedMessage = encodeURIComponent(message)
    const messageParam = encodedMessage ? `?text=${encodedMessage}` : ""

    let link = `${baseUrl}${formattedPhone}${messageParam}`

    if (customLink) {
      // In a real app, you would handle custom links differently
      // This is just a simulation
      link = `https://w.app/${customLink}`
    }

    setGeneratedLink(link)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const selectDDD = (selectedDDD: DDD) => {
    setDDD(selectedDDD.ddd)
    setShowDDDList(false)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove todos os caracteres não numéricos
    const rawValue = e.target.value.replace(/\D/g, "")

    // Limita a 9 dígitos (padrão para celulares no Brasil)
    const limitedValue = rawValue.slice(0, 9)

    // Formata o número: XXXXX-XXXX
    let formattedValue = limitedValue
    if (limitedValue.length > 5) {
      formattedValue = `${limitedValue.slice(0, 5)}-${limitedValue.slice(5)}`
    }

    setPhoneNumber(formattedValue)

    // Valida se o número tem 8 dígitos (fixo) ou 9 dígitos (celular)
    const digitsOnly = limitedValue.length
    setIsValidNumber(digitsOnly === 8 || digitsOnly === 9)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-sm border">
      <div className="p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6">
          Gere o seu <span className="text-green-500">Link do WhatsApp</span>
        </h1>

        <p className="text-gray-700 mb-4">Digite seu número de telefone do WhatsApp</p>

        <div className="grid grid-cols-[120px_1fr] gap-4 mb-6">
          <div>
            <Label htmlFor="ddd" className="text-sm text-gray-600 mb-1 block">
              DDD
            </Label>
            <div className="relative">
              <button
                className="w-full flex items-center justify-between border rounded-md px-3 py-2 bg-white"
                onClick={() => setShowDDDList(!showDDDList)}
              >
                <span className="flex items-center">{ddd}</span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showDDDList && (
                <div className="absolute z-10 mt-1 w-[320px] bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                  <div className="p-2 sticky top-0 bg-white border-b">
                    <Input
                      type="text"
                      placeholder="Buscar por DDD, estado ou região"
                      value={searchDDD}
                      onChange={(e) => setSearchDDD(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    {filteredDDDs.map((item) => (
                      <button
                        key={item.ddd}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                        onClick={() => selectDDD(item)}
                      >
                        <span className="font-medium">{item.ddd}</span>
                        <span className="ml-2 text-gray-600">{item.estado}</span>
                        <span className="ml-2 text-xs text-gray-500">({item.regiao})</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="phone-number" className="text-sm text-gray-600 mb-1 block">
              Número de telefone
            </Label>
            <Input
              id="phone-number"
              type="text"
              placeholder="Número de telefone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={10} // 9 dígitos + 1 hífen
              className={`w-full ${phoneNumber && !isValidNumber ? "border-red-500" : ""}`}
            />
            <p className="text-xs mt-1 text-gray-500">
              {!phoneNumber && "Digite 8 dígitos (fixo) ou 9 dígitos (celular)"}
              {phoneNumber && !isValidNumber && (
                <span className="text-red-500">
                  Número incompleto. Digite{" "}
                  {phoneNumber.replace(/\D/g, "").length < 8
                    ? 8 - phoneNumber.replace(/\D/g, "").length
                    : 9 - phoneNumber.replace(/\D/g, "").length}{" "}
                  dígitos a mais.
                </span>
              )}
              {phoneNumber && isValidNumber && <span className="text-green-500">Número válido!</span>}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex border-b mb-4">
            <button
              className={`py-2 px-4 ${activeTab === "message" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("message")}
            >
              <Smartphone className="inline-block mr-2 h-5 w-5" />
              Mensagem
            </button>
            <button
              className={`py-2 px-4 ${activeTab === "link" ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("link")}
            >
              <Copy className="inline-block mr-2 h-5 w-5" />
              Copiar Link
            </button>
          </div>

          {activeTab === "message" && (
            <Textarea
              placeholder="Digite sua mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32"
            />
          )}
        </div>

        <div className="mb-6">
          {/* <h3 className="text-gray-700 mb-2">Link personalizado (opcional)</h3>
          <p className="text-sm text-gray-500 mb-2">
            Os links personalizados permitem que você use links mais personalizados como w.app/SuaEmpresa
          </p> */}
          {/* <div className="flex">
            <div className="bg-gray-100 px-4 py-2 rounded-l-md border border-r-0 text-gray-500">w.app/</div>
            <Input
              type="text"
              placeholder="SuaEmpresa"
              value={customLink}
              onChange={(e) => setCustomLink(e.target.value)}
              className="rounded-l-none"
            />
          </div> */}
        </div>

        <Button
          onClick={generateLink}
          disabled={!isValidNumber || !phoneNumber}
          className={`w-full py-3 rounded-md ${
            !isValidNumber || !phoneNumber
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          <Plus className="mr-2 h-5 w-5" />
          Gerar Link do WhatsApp
        </Button>
      </div>

      <div className="bg-gray-50 p-6 md:p-8 flex flex-col items-center justify-center">
        <div className="relative w-64 h-[500px] mx-auto">
          <div className="absolute inset-0 bg-black rounded-[40px] overflow-hidden border-8 border-black">
            <div className="bg-green-600 text-white p-4 flex items-center">
              <div className="text-sm">
                <div className="text-xs">18:22</div>
                <div className="flex items-center mt-1">
                  <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
                  <div>
                    <div className="text-xs font-bold">+55 {ddd}</div>
                    <div className="text-xs">Online</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[380px] bg-[#e5ddd5] p-4 overflow-y-auto">
              {message && (
                <div className="bg-white p-2 rounded-lg shadow-sm inline-block max-w-[80%] ml-auto">
                  <p className="text-sm">
                    {message} <span className="text-green-500">✓</span>
                  </p>
                </div>
              )}
              {!message && (
                <div className="bg-white p-2 rounded-lg shadow-sm inline-block max-w-[80%] ml-auto">
                  <p className="text-sm">
                    Digite uma mensagem <span className="text-green-500">✓</span>
                  </p>
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#f0f0f0] p-2 flex items-center">
              <div className="flex-1 bg-white rounded-full px-3 py-2 text-xs text-gray-400">Digite uma mensagem</div>
            </div>
          </div>
        </div>

        <Button
          onClick={generateLink}
          disabled={!isValidNumber || !phoneNumber}
          className={`w-full mt-6 py-3 rounded-md ${
            !isValidNumber || !phoneNumber
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          <Plus className="mr-2 h-5 w-5" />
          Gerar Link do WhatsApp
        </Button>

        {generatedLink && (
          <div className="mt-4 w-full p-3 bg-green-100 border border-green-200 rounded-md">
            <p className="text-sm text-green-800 break-all">{generatedLink}</p>
            <Button onClick={copyToClipboard} className="mt-2 w-full bg-green-600 hover:bg-green-700">
              {copied ? "Copiado!" : "Copiar Link"}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
