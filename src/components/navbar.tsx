import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">w.app</span>
            </Link>
            <nav className="ml-10 flex space-x-8">
              <div className="relative group">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 flex items-center">
                  Soluções
                  <svg
                    className="ml-1 h-5 w-5"
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
              </div>
              <Link href="#" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Perguntas
              </Link>
              <Link href="#" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Por que nós?
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 flex items-center">
                  Funcionalidades
                  <svg
                    className="ml-1 h-5 w-5"
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
              </div>
              <Link href="#" className="px-3 py-2 text-gray-500 hover:text-gray-700">
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-amber-600 mr-2">
              Fazer login
            </button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Cadastre-se</button>
          </div>
        </div>
      </div>
    </header>
  )
}
