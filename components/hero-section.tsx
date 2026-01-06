"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { WHATSAPP_URL } from "@/lib/constants"

export function HeroSection() {
  const [logoPosition, setLogoPosition] = useState({ left: 0, top: 0 })
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateLogoPosition = () => {
      if (!imageContainerRef.current || !heroRef.current) return

      const containerRect = imageContainerRef.current.getBoundingClientRect()
      const heroRect = heroRef.current.getBoundingClientRect()
      const logoSize = 176 // Tamaño fijo del logo
      
      // Posición inicial sobre la foto (relativa al contenedor en viewport)
      const startLeft = containerRect.right - 32 - logoSize
      const startTop = containerRect.bottom - 32 - logoSize
      
      // Posición final (esquina inferior derecha de la ventana)
      const endLeft = window.innerWidth - 24 - logoSize
      const endTop = window.innerHeight - 24 - logoSize

      // Calcular progreso basado en la posición del hero section
      // Cuando el hero está completamente visible: progress = 0
      // Cuando el hero sale completamente: progress = 1
      const heroBottom = heroRect.bottom
      const heroHeight = heroRect.height
      const thresholdStart = window.innerHeight // Cuando el hero empieza a salir
      const thresholdEnd = window.innerHeight * 0.3 // Cuando el hero está casi fuera
      
      // Calcular progreso (0 a 1)
      let progress = 0
      if (heroBottom < thresholdStart) {
        progress = Math.min(1, Math.max(0, (thresholdStart - heroBottom) / (thresholdStart - thresholdEnd)))
      }

      // Interpolar entre posición inicial y final
      const currentLeft = startLeft + (endLeft - startLeft) * progress
      const currentTop = startTop + (endTop - startTop) * progress

      setLogoPosition({
        left: currentLeft,
        top: currentTop,
      })

      // Mostrar WhatsApp cuando progress > 0.5
      setShowWhatsApp(progress > 0.5)
      
      // Mostrar logo con fade-in cuando la posición está calculada
      if (!logoVisible && containerRect.width > 0) {
        setTimeout(() => setLogoVisible(true), 600) // Delay para que aparezca después de la animación inicial
      }
    }

    // Pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(() => {
      updateLogoPosition()
    }, 100)
    
    updateLogoPosition()
    window.addEventListener("resize", updateLogoPosition)
    window.addEventListener("scroll", updateLogoPosition, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", updateLogoPosition)
      window.removeEventListener("scroll", updateLogoPosition)
    }
  }, [logoVisible])

  const handleFloatingClick = () => {
    window.open(WHATSAPP_URL, "_blank")
  }

  return (
    <>
      <section ref={heroRef} className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Main Content */}
        <div className="relative z-20 container mx-auto px-4 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-[1600px] mx-auto">
            {/* Hero Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
              
              {/* Left Column - Title & Description */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 md:space-y-10">
                {/* Title */}
                <div className="space-y-6">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[0.9]">
                    <span className="inline-block text-foreground animate-slide-in-left animate-float-text" style={{ animationDelay: "0.1s" }}>
                      ESTÉTICA
                    </span>
                    <br />
                    <span className="inline-block text-muted-foreground animate-slide-in-right animate-gradient-shift" style={{ animationDelay: "0.4s" }}>
                      Y BELLEZA
                    </span>
                  </h1>
                </div>

                {/* Description & CTA */}
                <div className="space-y-6 sm:space-y-8 max-w-2xl">
                  <div className="space-y-4 sm:space-y-5">
                    <div className="h-px w-20 bg-foreground" />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide leading-relaxed text-foreground/70 font-normal">
                      En Robin La Peluquería transformamos tu cabello en una obra de arte. Cada corte, cada color, cada estilo es creado con pasión y dedicación para que brilles con tu mejor versión.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <Button
                    size="lg"
                    className="text-xs tracking-[0.2em] uppercase font-semibold px-8 sm:px-10 py-6 sm:py-7 group w-full sm:w-auto touch-manipulation"
                    onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  >
                    Reservar Cita
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-xs tracking-[0.2em] uppercase font-semibold px-8 sm:px-10 py-6 sm:py-7 w-full sm:w-auto touch-manipulation"
                      onClick={() => {
                        window.location.href = "/#gallery"
                      }}
                    >
                      Ver Trabajos
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Element */}
              <div className="lg:col-span-5 hidden lg:block relative">
                <div ref={imageContainerRef} className="relative h-[600px] lg:h-[700px] xl:h-[800px] group cursor-pointer">
                  {/* Skeleton loader mientras carga */}
                  <div className="absolute inset-0 bg-muted/30 animate-pulse" />
                  {/* Black Frame */}
                  <div className="absolute inset-0 border-8 border-foreground transition-all duration-500 group-hover:border-foreground/80">
                    <div className="absolute inset-[8px] bg-gradient-to-br from-muted/50 to-background overflow-hidden">
                      <Image
                        src="/title-image.png"
                        alt="Robin La Peluquería"
                        fill
                        className="object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//9k="
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-background/10 transition-opacity duration-500 group-hover:opacity-0" />
                      {/* Overlay effect on hover */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-all duration-500" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-8 z-20 hidden lg:flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-border animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground -rotate-90 origin-left translate-y-8 whitespace-nowrap">
            Profesionalismo
          </span>
        </div>
      </section>

      {/* Single Logo Element - Moves continuously based on scroll position */}
      <button
        ref={logoRef}
        onClick={handleFloatingClick}
        className="fixed z-50 bg-background rounded-full shadow-2xl animate-logo-rotate-float cursor-pointer hover:scale-110 active:scale-95 touch-manipulation hidden sm:block"
        style={{
          left: `${logoPosition.left - 6}px`,
          top: `${logoPosition.top - 6}px`,
          width: "144px",
          height: "144px",
          padding: "6px",
          opacity: logoVisible ? 1 : 0,
          transition: "left 0.1s ease-out, top 0.1s ease-out, opacity 0.8s ease-in",
          animation: showWhatsApp 
            ? "whatsapp-pulse 4s ease-in-out infinite, logo-float 4s ease-in-out infinite"
            : "logo-float 4s ease-in-out infinite",
        }}
        aria-label={showWhatsApp ? "Contactar por WhatsApp" : "Logo"}
      >
        {/* Inner black circle with logo */}
        <div className="relative w-full h-full bg-foreground border-2 border-border rounded-full flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Robin La Peluquería"
            width={140}
            height={140}
            className="object-contain"
            style={{ width: "75%", height: "75%" }}
          />
        </div>
      </button>
    </>
  )
}
