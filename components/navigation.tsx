"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Cerrar menú móvil al hacer scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }
    return () => document.body.classList.remove("menu-open")
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${isScrolled ? "md:backdrop-blur-sm border-b border-border" : ""
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-robin-black.png"
              alt="Robin La Peluquería"
              width={200}
              height={80}
              className="h-10 w-auto md:h-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-xs font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="Ir a la sección de Servicios"
            >
              Servicios
            </Link>
            <Link
              href="/#about"
              className="text-xs font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="Ir a la sección de Estudio"
            >
              Estudio
            </Link>
            <Link
              href="/#gallery"
              className="text-xs font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="Ir a la sección de Galería"
            >
              Galería
            </Link>
            <Link
              href="/#location"
              className="text-xs font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="Ir a la sección de Ubicación"
            >
              Ubicación
            </Link>
            <Link
              href="/#contact"
              className="text-xs font-medium tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              aria-label="Ir a la sección de Contacto"
            >
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="lg"
              className="tracking-widest uppercase text-xs font-semibold hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
              aria-label="Reservar cita por WhatsApp"
            >
              Reservar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 -mr-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menú"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Premium Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-20 px-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/logo-robin-black.png"
                  alt="Robin La Peluquería"
                  width={150}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                className="p-3 -mr-2 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
              {[
                { name: "Servicios", href: "/#services" },
                { name: "Estudio", href: "/#about" },
                { name: "Galería", href: "/#gallery" },
                { name: "Ubicación", href: "/#location" },
                { name: "Contacto", href: "/#contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-4xl font-bold tracking-tighter transition-all duration-500 delay-[${index * 100}ms] ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className={`w-full max-w-xs pt-8 transition-all duration-500 delay-500 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                <Button
                  size="lg"
                  className="w-full py-8 text-sm uppercase tracking-[0.3em] font-bold shadow-2xl"
                  onClick={() => {
                    window.open(WHATSAPP_URL, "_blank")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Reservar Cita
                </Button>
              </div>
            </div>

            <div className="py-12 flex flex-col items-center gap-4">
              <p className="text-xs tracking-[0.3em] uppercase opacity-40">Ubicado en Bogotá</p>
              <p className="text-sm font-medium">Cl. 118 #15-45</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
