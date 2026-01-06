import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-6">
            <Image
              src="/logo-robin-black.png"
              alt="Robin La Peluquería"
              width={200}
              height={80}
              className="h-14 w-auto object-contain"
            />
            <p className="text-muted-foreground max-w-md leading-relaxed text-sm">
              En Robin La Peluquería transformamos tu cabello en una expresión de tu personalidad. Cada visita es una experiencia única donde la creatividad y el cuidado profesional se unen para crear tu mejor look.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6">Navegar</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Estudio
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase font-semibold mb-6">Seguir</h3>
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/robinlapeluqueria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm touch-manipulation"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://web.facebook.com/robinlapeluqueria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm touch-manipulation"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm touch-manipulation"
                aria-label="Contáctanos por WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground tracking-wider text-center">
            &copy; {new Date().getFullYear()} ROBIN LA PELUQUERÍA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
