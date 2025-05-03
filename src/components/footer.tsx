import { Link } from "lucide-react";

export default function Footer() {
  return(
    <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">
        Zapmini © {new Date().getFullYear()} – Todos os direitos reservados
        </p>
        <div>
          <div className="text-sm text-gray-500">
            <a href="/pages/politica-privacidade">Politicas de Privacidade</a> | <a href="/pages/termos-uso">Termos de Uso</a>
          </div>
        </div>
    </footer>
  )
}