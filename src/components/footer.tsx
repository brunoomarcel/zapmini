import Link from "next/link"

export default function Footer() {
  return(
    <footer className="mt-12 mb-12 text-center">
        <p className="text-sm text-gray-500">
        Zapmini © {new Date().getFullYear()} – Todos os direitos reservados
        </p>
        <div>
          <div className="text-sm text-gray-500">
            <Link href="/politica-de-privacidade">Políticas de Privacidade</Link> | <Link href="/termos-de-uso">Termos de Uso</Link>
          </div>
        </div>
    </footer>
  )
}