import WhatsAppLinkGenerator from "@/components/whatsapp-link-generator"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <WhatsAppLinkGenerator />
      </div>
    </main>
  )
}
