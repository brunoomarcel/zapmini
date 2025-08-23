"use client"

import type React from "react"
import { useState } from "react"
import { Download, Eye, EyeOff, Mail, Phone, Globe, Building, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QRCodeCanvas } from "qrcode.react"

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

export default function VCardGenerator() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [website, setWebsite] = useState("")
  const [showPreview, setShowPreview] = useState(false)

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
  }

  // Conteúdo do vCard em tempo real
  const previewVCard = createVCard({ name, phone, email, organization, website })

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-sm border">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Gerador de vCard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <Label
            htmlFor="vcard-name"
            className="text-sm text-gray-600 mb-1 block"
          >
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
          <Label
            htmlFor="vcard-phone"
            className="text-sm text-gray-600 mb-1 block"
          >
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
          <Label
            htmlFor="vcard-email"
            className="text-sm text-gray-600 mb-1 block"
          >
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
          <Label
            htmlFor="vcard-organization"
            className="text-sm text-gray-600 mb-1 block"
          >
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
          <Label
            htmlFor="vcard-website"
            className="text-sm text-gray-600 mb-1 block"
          >
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

      {/* Botão para mostrar/ocultar preview */}
      <div className="mb-6 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center gap-2"
        >
          {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showPreview ? "Ocultar Prévia" : "Mostrar Prévia"}
        </Button>
      </div>

      {/* Preview visual do cartão + QR Code */}
      {showPreview && (
        <div className="mb-6 p-4 border rounded-xl shadow-sm bg-gray-50 space-y-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            {name && (
              <div className="text-lg font-semibold">{name}</div>
            )}
            {organization && (
              <div className="flex items-center gap-2 text-gray-700">
                <Building className="w-4 h-4" /> {organization}
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4" /> {phone}
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-4 h-4" /> {email}
              </div>
            )}
            {website && (
              <div className="flex items-center gap-2 text-gray-700">
                <Globe className="w-4 h-4" /> {website}
              </div>
            )}
          </div>
          {/* QR Code */}
          <div className="mt-4 sm:mt-0">
            <QRCodeCanvas value={previewVCard} size={120} />
          </div>
        </div>
      )}

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
    </div>
  )
}
