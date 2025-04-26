import Footer from "@/components/footer"
import Header from "@/components/header"
import WhatsAppLinkGenerator from "@/components/whatsapp-link-generator"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          <WhatsAppLinkGenerator />
        </div>
      </main>
      <Footer/>
    </>
  )
}
