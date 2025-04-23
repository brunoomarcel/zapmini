"use client"

import Navbar from "@/components/navbar"
import WhatsAppLinkGenerator from "@/components/whatsapp-link-generator"
import type React from "react"

export default function Home() {
  
  return (
    <>
      <Navbar/>
      <WhatsAppLinkGenerator/>
    </>
  )
}
