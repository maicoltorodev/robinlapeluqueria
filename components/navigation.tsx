"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        isScrolled ? "backdrop-blur-sm border-b border-border" : ""
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
              onClick={() => window.open("https://wa.me/573108757670", "_blank")}
              aria-label="Reservar cita por WhatsApp"
            >
              Reservar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#services"
                className="text-xs font-medium tracking-[0.2em] uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/#about"
                className="text-xs font-medium tracking-[0.2em] uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Estudio
              </Link>
              <Link
                href="/#gallery"
                className="text-xs font-medium tracking-[0.2em] uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="/#contact"
                className="text-xs font-medium tracking-[0.2em] uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button 
                size="lg" 
                className="w-full mt-2 uppercase tracking-widest text-xs font-semibold hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() => window.open("https://wa.me/573108757670", "_blank")}
                aria-label="Reservar cita por WhatsApp"
              >
                Reservar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
