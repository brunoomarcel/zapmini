"use client"

import type React from "react"
import { useState } from "react"
import { Download, Eye, EyeOff, Mail, Phone, Globe, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QRCodeCanvas } from "qrcode.react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const dynamic = "force-static"

// Função utilitária para criar o conteúdo do vCard
const createVCard = ({
  name,
  phone,
  email,
  organization,
  website,
}: {
  name: string
  phone: string
  email?: string
  organization?: string
  website?: string
}) => {
  return `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
${email ? `EMAIL:${email}` : ""}
${organization ? `ORG:${organization}` : ""}
${website ? `URL:${website}` : ""}
END:VCARD`
}

export default function VCardPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [website, setWebsite] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [vCardGenerated, setVCardGenerated] = useState(false) // Novo estado

  const generateVCard = () => {
    if (!name || !phone) {
      window.confirm("Por favor, preencha pelo menos o nome e o telefone.")
      return
    }

    const phoneDigits = phone.replace(/\D/g, "")
    if (phoneDigits.length < 8) {
      window.confirm("Número de telefone inválido.")
      return
    }

    const vCard = createVCard({ name, phone, email, organization, website })

    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${name.replace(/ /g, "_")}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    // Indica que o vCard foi gerado
    setVCardGenerated(true)
    // Mostra a prévia automaticamente
    setShowPreview(true)
  }

  const previewVCard = createVCard({ name, phone, email, organization, website })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            Gerador de vCard
          </h1>

          {/* Texto explicativo e mini tutorial */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border space-y-4 text-gray-700">
            <h2 className="text-xl font-semibold">O que é um vCard?</h2>
            <p>
              Um vCard é um cartão de visita digital que armazena suas informações de contato em um formato padrão, 
              incluindo nome, telefone, e-mail, empresa e site. Ele pode ser facilmente compartilhado e importado em aplicativos de agenda, celulares e serviços online.
            </p>

            <h2 className="text-xl font-semibold">Como criar seu vCard</h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Preencha seus dados no formulário abaixo.</li>
              <li>Clique em "Gerar e Baixar vCard" para salvar o arquivo .vcf no seu dispositivo.</li>
              <li>Depois de gerar, você poderá visualizar a prévia e o QR Code.</li>
              <li>Use o QR Code para compartilhar seu contato rapidamente com outras pessoas.</li>
            </ol>
          </div>

          {/* Formulário */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vcard-name" className="text-sm text-gray-600 mb-1 block">
                  Nome Completo
                </Label>
                <Input
                  id="vcard-name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="vcard-phone" className="text-sm text-gray-600 mb-1 block">
                  Telefone
                </Label>
                <Input
                  id="vcard-phone"
                  type="text"
                  placeholder="Ex.: (11) 91234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="vcard-email" className="text-sm text-gray-600 mb-1 block">
                  Email
                </Label>
                <Input
                  id="vcard-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="vcard-organization" className="text-sm text-gray-600 mb-1 block">
                  Empresa/Organização
                </Label>
                <Input
                  id="vcard-organization"
                  type="text"
                  placeholder="Nome da sua empresa"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="vcard-website" className="text-sm text-gray-600 mb-1 block">
                  Website
                </Label>
                <Input
                  id="vcard-website"
                  type="text"
                  placeholder="https://seusite.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            {/* Botão gerar vCard */}
            <Button
              onClick={generateVCard}
              disabled={!name || !phone}
              className={`w-full py-2 sm:py-3 rounded-md ${
                !name || !phone
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              <Download className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              <span className="text-sm sm:text-base">Gerar e Baixar vCard</span>
            </Button>

            {/* Botões de preview e baixar QR só aparecem depois de gerar */}
            {vCardGenerated && (
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreview(!showPreview)}
                  className="w-full sm:w-auto flex items-center gap-2"
                >
                  {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showPreview ? "Ocultar Prévia" : "Mostrar Prévia"}
                </Button>

                <Button
                  onClick={() => {
                    const canvas = document.querySelector("canvas")
                    if (canvas) {
                      const url = canvas.toDataURL("image/png")
                      const link = document.createElement("a")
                      link.href = url
                      link.download = `${name.replace(/ /g, "_")}_QR.png`
                      link.click()
                    }
                  }}
                  className="w-full sm:w-auto py-2 sm:py-3 rounded-md bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
                >
                  <Download className="mr-2 w-4 h-4" /> Baixar QR Code
                </Button>
              </div>
            )}
          </div>

          {/* Preview do vCard + QR Code */}
          {showPreview && (
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
              <div className="space-y-2 text-center sm:text-left">
                {name && <div className="text-xl font-semibold">{name}</div>}
                {organization && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-700">
                    <Building className="w-4 h-4" /> {organization}
                  </div>
                )}
                {phone && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-700">
                    <Phone className="w-4 h-4" /> {phone}
                  </div>
                )}
                {email && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-700">
                    <Mail className="w-4 h-4" /> {email}
                  </div>
                )}
                {website && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-700">
                    <Globe className="w-4 h-4" /> {website}
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <QRCodeCanvas value={previewVCard} size={150} />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
