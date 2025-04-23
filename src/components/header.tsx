"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
// import { useRouter } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solucoesOpen, setSolucoesOpen] = useState(false)
  const [funcionalidadesOpen, setFuncionalidadesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

//   const router = useRouter();

//   const toAboutUs = () => {
//     router.push('/pages/sobre-nos');
//   }

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-10">
            <nav className="flex space-x-6">
              

              <Link href="/pages/sobre-nos" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Sobre o ZapMini
              </Link>

              <Link href="#" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Por que nós?
              </Link>

              <div className="relative group">
                <button
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 flex items-center"
                  onClick={() => setFuncionalidadesOpen(!funcionalidadesOpen)}
                >
                  Funcionalidades
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Funcionalidade 1
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Funcionalidade 2
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Funcionalidade 3
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="#" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Blog
              </Link>
            </nav>

            <div className="flex items-center">
              {/* <button className="px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-amber-600 mr-2">
                Fazer login
              </button> */}
              <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Cadastre-se</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 mr-2 hidden sm:block">
              Login
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
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
              <div>
                <button
                  className="w-full flex items-center justify-between px-3 py-4 text-base font-medium text-gray-600 border-b"
                  onClick={() => setSolucoesOpen(!solucoesOpen)}
                >
                  <span>Soluções</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${solucoesOpen ? "transform rotate-180" : ""}`}
                  />
                </button>
                {solucoesOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50">
                    <Link href="#" className="block px-3 py-2 text-base text-gray-500 hover:text-gray-700">
                      Solução 1
                    </Link>
                    <Link href="#" className="block px-3 py-2 text-base text-gray-500 hover:text-gray-700">
                      Solução 2
                    </Link>
                    <Link href="#" className="block px-3 py-2 text-base text-gray-500 hover:text-gray-700">
                      Solução 3
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#" className="block px-3 py-4 text-base font-medium text-gray-600 border-b">
                Perguntas
              </Link>

              <Link href="#" className="block px-3 py-4 text-base font-medium text-gray-600 border-b">
                Por que nós?
              </Link>

              <div>
                <button
                  className="w-full flex items-center justify-between px-3 py-4 text-base font-medium text-gray-600 border-b"
                  onClick={() => setFuncionalidadesOpen(!funcionalidadesOpen)}
                >
                  <span>Funcionalidades</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${funcionalidadesOpen ? "transform rotate-180" : ""}`}
                  />
                </button>
                {funcionalidadesOpen && (
                  <div className="pl-4 py-2 space-y-2 bg-gray-50">
                    <Link href="#" className="block px-3 py-2 text-base text-gray-500 hover:text-gray-700">
                      Funcionalidade 1
                    </Link>
                    <Link href="#" className="block px-3 py-2 text-base text-gray-500 hover:text-gray-700">
                      Funcionalidade 2
                    </Link>
                    <Link href="#" className="block px-3 py-2 text-base text-gray-500 hover:text-gray-700">
                      Funcionalidade 3
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#" className="block px-3 py-4 text-base font-medium text-gray-600 border-b">
                Blog
              </Link>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="grid grid-cols-2 gap-4">
              <button className="w-full px-4 py-2 text-center text-white bg-amber-500 rounded-md hover:bg-amber-600">
                Fazer login
              </button>
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
