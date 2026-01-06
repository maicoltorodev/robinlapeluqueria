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
  const [logoSize, setLogoSize] = useState({ width: 144, height: 144, padding: 6 })
  const [isMobile, setIsMobile] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const getLogoSize = () => {
      const isMobile = window.innerWidth < 640
      return {
        width: isMobile ? 80 : 144,
        height: isMobile ? 80 : 144,
        padding: isMobile ? 3 : 6,
      }
    }

    const updateLogoSize = () => {
      const size = getLogoSize()
      setLogoSize(size)
      setIsMobile(size.width === 80)
    }

    // Función de easing suave para transiciones fluidas (smoothstep)
    const smoothEase = (t: number): number => t * t * (3 - 2 * t)

    const updateLogoPosition = () => {
      if (!imageContainerRef.current || !heroRef.current) return

      const containerRect = imageContainerRef.current.getBoundingClientRect()
      const heroRect = heroRef.current.getBoundingClientRect()
      const currentLogoSize = getLogoSize()
      
      // Posición inicial sobre la foto (relativa al contenedor en viewport)
      const startLeft = containerRect.right - 32 - currentLogoSize.width
      const startTop = containerRect.bottom - 32 - currentLogoSize.width
      
      // Posición final (esquina inferior derecha de la ventana)
      const endLeft = window.innerWidth - 24 - currentLogoSize.width
      const endTop = window.innerHeight - 24 - currentLogoSize.width

      // Calcular progreso basado en la posición del hero section
      const viewportHeight = window.innerHeight
      const thresholdStart = viewportHeight
      const thresholdEnd = viewportHeight * 0.3
      const heroBottom = heroRect.bottom
      
      // Calcular progreso (0 a 1)
      const rawProgress = heroBottom < thresholdStart
        ? Math.min(1, Math.max(0, (thresholdStart - heroBottom) / (thresholdStart - thresholdEnd)))
        : 0

      // Aplicar función de easing suave para transición más fluida
      const easedProgress = smoothEase(rawProgress)

      // Interpolación con puntos intermedios más suaves
      // Usar interpolación cúbica para movimiento más natural
      const currentLeft = startLeft + (endLeft - startLeft) * easedProgress
      const currentTop = startTop + (endTop - startTop) * easedProgress

      // Redondear a 1 decimal para mejor rendimiento y evitar micro-saltos
      setLogoPosition({
        left: Math.round(currentLeft * 10) / 10,
        top: Math.round(currentTop * 10) / 10,
      })

      // Mostrar WhatsApp cuando progress > 0.5
      setShowWhatsApp(easedProgress > 0.5)
      
      // Mostrar logo con fade-in cuando la posición está calculada
      if (!logoVisible && containerRect.width > 0) {
        setTimeout(() => setLogoVisible(true), 600) // Delay para que aparezca después de la animación inicial
      }
    }

    // Inicializar tamaño del logo y estado mobile
    updateLogoSize()
    setIsMobile(window.innerWidth < 640)
    
    // Pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(() => {
      updateLogoPosition()
    }, 100)
    
    updateLogoPosition()
    const handleResize = () => {
      updateLogoSize()
      updateLogoPosition()
    }
    
    // Usar requestAnimationFrame para animaciones más fluidas
    let rafId: number | null = null
    let lastUpdateTime = 0
    const currentIsMobile = window.innerWidth < 640
    const minUpdateInterval = currentIsMobile ? 32 : 16 // 30fps en mobile, 60fps en desktop
    
    const handleScroll = () => {
      const now = performance.now()
      
      if (rafId === null && (now - lastUpdateTime) >= minUpdateInterval) {
        rafId = requestAnimationFrame(() => {
          updateLogoPosition()
          lastUpdateTime = performance.now()
          rafId = null
        })
      }
    }
    
    // Throttle resize para mejor rendimiento
    let resizeTimeout: NodeJS.Timeout | null = null
    const handleResizeThrottled = () => {
      if (resizeTimeout) return
      resizeTimeout = setTimeout(() => {
        handleResize()
        resizeTimeout = null
      }, 150)
    }
    
    window.addEventListener("resize", handleResizeThrottled, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timeoutId)
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener("resize", handleResizeThrottled)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [logoVisible])

  const handleFloatingClick = () => {
    window.open(WHATSAPP_URL, "_blank")
  }

  return (
    <>
      <section ref={heroRef} className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible bg-background pt-20 sm:pt-0">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Main Content */}
        <div className="relative z-20 container mx-auto px-4 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-[1600px] mx-auto">
            {/* Hero Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center lg:justify-items-stretch min-h-[70vh] sm:min-h-[80vh]">
              
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
              <div ref={imageContainerRef} className="lg:col-span-5 order-last lg:order-last relative mx-auto lg:mx-0 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none lg:w-auto flex justify-center items-center lg:block">
                <div className="relative group w-full max-w-full lg:w-auto">
                  {/* Decorative frame with professional styling - reduced blur on mobile */}
                  <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br from-foreground/5 via-transparent to-foreground/10 rounded-lg blur-sm md:blur-xl opacity-30 md:opacity-50 md:group-hover:opacity-75 transition-opacity duration-500" />
                  
                  {/* Main image container with elegant border */}
                  <div className="relative border-4 border-foreground/20 shadow-2xl rounded-sm overflow-hidden bg-background p-2 sm:p-3 md:p-4 transition-all duration-500 group-hover:border-foreground/30 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                    {/* Inner decorative border */}
                    <div className="absolute inset-0 border border-foreground/10 pointer-events-none" />
                    
                    {/* Image with professional overlay on hover */}
                    <div className="relative overflow-hidden">
                      <Image
                        src="/title-image.png"
                        alt="Robin La Peluquería"
                        width={800}
                        height={600}
                        className="w-full h-auto max-w-full transition-transform duration-700 group-hover:scale-[1.02]"
                        priority
                      />
                      {/* Combined overlay effect - optimized, disabled on mobile */}
                      <div 
                        className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block"
                        style={{
                          background: `
                            radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.08) 100%),
                            linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)
                          `,
                          backgroundSize: '100% 100%, 300% 100%',
                          backgroundPosition: 'center, 200% 0',
                          animation: 'shimmer-smooth 4s ease-in-out infinite',
                        }} 
                      />
                    </div>
                  </div>
                  
                  {/* Corner accent decorations - hidden on mobile */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-foreground/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-foreground/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-foreground/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-foreground/30 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
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
        className="fixed z-50 bg-background rounded-full shadow-2xl animate-logo-rotate-float cursor-pointer hover:scale-110 active:scale-95 touch-manipulation block"
        style={{
          left: `${logoPosition.left - logoSize.padding}px`,
          top: `${logoPosition.top - logoSize.padding}px`,
          width: `${logoSize.width}px`,
          height: `${logoSize.height}px`,
          padding: `${logoSize.padding}px`,
          opacity: logoVisible ? 1 : 0,
          willChange: "left, top, opacity",
          transition: isMobile
            ? "left 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-in"
            : "left 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-in",
          animation: showWhatsApp 
            ? isMobile
              ? "whatsapp-pulse-mobile 5s ease-in-out infinite, logo-float 4s ease-in-out infinite"
              : "whatsapp-pulse 4s ease-in-out infinite, logo-float 4s ease-in-out infinite"
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
