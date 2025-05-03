"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Fechar o menu móvel quando a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    // Detectar scroll para adicionar sombra
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }


    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevenir rolagem quando o menu móvel estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${scrolled ? "shadow-md" : "shadow-sm"} transition-shadow duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ZM</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">ZapMini</span>
            </Link>
          </div>

          {/* Navigation */}
          <div ref={menuRef} className="flex items-center justify-between flex-1 ml-10">
            <nav className="hidden lg:flex space-x-6">
              <Link href="/pages/sobre-nos" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Sobre o ZapMini
              </Link>

              <Link href="/pages/contato" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Contato
              </Link>

              <Link href="#" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Blog
              </Link>
            </nav>

            <div className="hidden lg:flex items-center">
              <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Cadastre-se</button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden ml-auto">
              <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 mr-2 hidden sm:block">
                Login
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">{mobileMenuOpen ? "Fechar menu" : "Abrir menu"}</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Unified navigation menu - styled differently for mobile/desktop */}
      <div
        className={`nav-menu fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 pt-5 pb-2 border-b">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ZM</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">ZapMini</span>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pt-2 pb-4">
            <div className="px-2 space-y-1">
              <Link 
                href="/pages/sobre-nos" 
                className="block px-3 py-4 text-base font-medium text-gray-600 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre o ZapMini
              </Link>

              <Link 
                href="/pages/contato" 
                className="block px-3 py-4 text-base font-medium text-gray-600 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>

              <Link 
                href="#" 
                className="block px-3 py-4 text-base font-medium text-gray-600 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="grid grid-cols-1 gap-4">
              <button className="w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
