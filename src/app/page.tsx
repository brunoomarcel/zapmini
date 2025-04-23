"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/header"
import WhatsAppLinkGenerator from "@/components/whatsapp-link-generator"
import type React from "react"

export default function Home() {
  
  return (
    <>
      <Navbar/>
      <WhatsAppLinkGenerator/>
      <Footer/>
    </>
  )
}
