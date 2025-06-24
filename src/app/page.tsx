import Footer from "@/components/footer"
import Header from "@/components/header"
import WhatsAppLinkGenerator from "@/components/whatsapp-link-generator"
export const dynamic = 'force-static';


export default function Home() {
  return (
    <>
      <Header />
      <main className=" bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          <WhatsAppLinkGenerator />
        </div>
      </main>
      <Footer/>
    </>
  )
}
